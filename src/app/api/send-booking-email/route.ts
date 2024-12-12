import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Import the generateEmailHTML function
import { generateEmailHTML, EnquiryData } from './emailTemplate';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { destination, departureCity, name, phone, email } = body;

        // Create an object that matches the EnquiryData interface
        const enquiryData: EnquiryData = {
            name,
            destination,
            email,
            phone,
            departureCity
        };

        const msg = {
            to: 'web@truedeal4u.com',
            from: 'web@truedeal4u.com', // Must be a verified sender in SendGrid
            subject: `New Booking Inquiry for ${destination}`,
            html: generateEmailHTML(enquiryData),
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

