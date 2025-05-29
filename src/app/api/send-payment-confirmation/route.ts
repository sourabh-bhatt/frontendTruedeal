import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function generateConfirmationEmail(paymentDetails: any) {
  return `
    <!DOCTYPE html>
    <html>
    <body>
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="color: #017ae3;">Payment Confirmation</h1>
        <p>Dear ${paymentDetails.firstname},</p>
        <p>Thank you for your payment. Here are your transaction details:</p>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Package:</strong> ${paymentDetails.productinfo}</p>
          <p><strong>Amount Paid:</strong> ₹${paymentDetails.amount}</p>
          <p><strong>Transaction ID:</strong> ${paymentDetails.txnid}</p>
          <p><strong>Payment Status:</strong> Success</p>
          <p><strong>Bank Reference:</strong> ${paymentDetails.bank_ref_num}</p>
        </div>
        
        <p>Please keep this email for your records.</p>
        <p>For any queries, please contact us at support@truedeal4u.com</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated email. Please do not reply to this message.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const paymentDetails = await req.json();

    const msg = {
      to: paymentDetails.email,
      from: 'web@truedeal4u.com',
      subject: 'Payment Confirmation - TrueDeal Travel',
      html: generateConfirmationEmail(paymentDetails),
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 