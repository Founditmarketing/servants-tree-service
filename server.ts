import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  service: z.string().min(1, 'Service selection is required'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().optional(),
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/contact', async (req, res) => {
    try {
      const data = ContactSchema.parse(req.body);

      // Simple honeypot anti-spam
      if (data.honeypot) {
        console.log('Spam detected via honeypot');
        return res.status(200).json({ success: true, message: 'Message sent successfully' });
      }

      if (!process.env.RESEND_API_KEY) {
         console.warn('RESEND_API_KEY is missing. In development, we will just log the data.');
         console.log('Form Data:', data);
         return res.json({ success: true, message: 'Dev mode: Data logged successfully' });
      }

      await resend.emails.send({
        from: 'Servants Tree Service <onboarding@resend.dev>',
        to: ['isaiah@founditmarketing.com'], // Change to client email in production
        subject: `New Request from ${data.name} - ${data.service}`,
        html: `
          <h1>New Lead from Website</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Service Needed:</strong> ${data.service}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.issues });
      }
      console.error('Email error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
