// src/app/api/send-booking-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { destination, departureCity, name, phone, email } = body;

        const msg = {
            to: 'web@truedeal4u.com',
            from: 'web@truedeal4u.com', // Must be a verified sender in SendGrid
            subject: `New Booking Inquiry for ${destination}`,
            html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Departure City:</strong> ${departureCity}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}