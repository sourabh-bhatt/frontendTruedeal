import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { generateVisaEmailHTML, VisaEnquiryData } from './emailTemplate';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
    try {
        const body: VisaEnquiryData = await request.json();

        const msg = {
            to: 'sales4@truedeal4u.com',
            from: 'web@truedeal4u.com',
            subject: `New Visa Application for ${body.country}`,
            html: generateVisaEmailHTML(body),
            attachments: Object.entries(body.documents)
                .filter(([, doc]) => doc.base64)
                .map(([, doc]) => ({
                    content: doc.base64!.split(',')[1],
                    filename: doc.name,
                    type: 'application/octet-stream',
                    disposition: 'attachment'
                }))
        };

        await sgMail.send(msg);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
} 