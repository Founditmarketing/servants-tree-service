// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const FALLBACK_EMAIL = 'isaiah@founditmarketing.com';
const recipientEmail = process.env.EMAIL || FALLBACK_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: VercelRequest, response: VercelResponse) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, service, address, message } = request.body || {};

  // Simple server-side validation
  if (!fullName || !email || !phone || !service || !address || !message) {
    return response.status(400).json({ error: 'All fields are required.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set. Cannot send email.');
    return response.status(500).json({ error: 'Email service is not configured. Please call us directly.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Servant's Tree Services <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New Contact Form Submission: ${service}`,
      html: `
        <h1>New Lead from Website</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return response.status(400).json({ error: 'Failed to send message. Please try again or call us directly.' });
    }

    return response.status(200).json({ data });
  } catch (err) {
    console.error('Contact form error:', err);
    return response.status(500).json({ error: 'Failed to send message. Please try again or call us directly.' });
  }
}
