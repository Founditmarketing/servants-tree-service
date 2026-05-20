// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const EMAIL = process.env.EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, service, address, message } = request.body;

  // Simple server‑side validation
  if (!fullName || !email || !phone || !service || !address || !message) {
    return response.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Servant's Tree Services <onboarding@resend.dev>",
      to: [EMAIL],
      subject: `New Contact Form Submission: ${service}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nAddress: ${address}\nMessage: ${message}`,
    });

    if (error) {
      return response.status(400).json({ error });
    }

    return response.status(200).json({ data });
  } catch (err) {
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
