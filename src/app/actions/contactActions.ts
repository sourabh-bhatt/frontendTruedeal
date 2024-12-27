'use server';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const enquiryData = {
        name,
        email,
        phone,
        subject,
        message
    };

    try {
        const msg = {
            to: 'sales4@truedeal4u.com',
            from: 'web@truedeal4u.com',
            subject: `New Contact Form Submission: ${subject}`,
            html: generateEmailHTML(enquiryData),
        };

        await sgMail.send(msg);

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { error: 'Failed to send email' };
    }
}

function generateEmailHTML(enquiryData: any) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f0f0f0;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #017ae3, #00f6ff);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        .content {
          padding: 30px;
        }
        .intro {
          font-size: 18px;
          color: #017ae3;
          margin-bottom: 25px;
          text-align: center;
        }
        .info-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 10px;
        }
        .info-row {
          background-color: #f9f9f9;
          transition: all 0.3s ease;
        }
        .info-row:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(1, 122, 227, 0.1);
        }
        .info-label {
          padding: 12px 15px;
          font-weight: bold;
          color: #017ae3;
          border-radius: 5px 0 0 5px;
          width: 40%;
        }
        .info-value {
          padding: 12px 15px;
          color: #333;
          border-radius: 0 5px 5px 0;
        }
        .footer {
          background-color: #f9f9f9;
          padding: 20px;
          text-align: center;
          font-size: 14px;
          color: #666;
          border-top: 1px solid #eaeaea;
        }
        .gradient-text {
          background: linear-gradient(135deg, #017ae3, #00f6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <p class="intro">A new contact form submission has been received from ${enquiryData.name}.</p>
          <table class="info-table">
            <tr class="info-row">
              <td class="info-label">Name</td>
              <td class="info-value">${enquiryData.name}</td>
            </tr>
            <tr class="info-row">
              <td class="info-label">Email</td>
              <td class="info-value"><a href="mailto:${enquiryData.email}" style="color: #017ae3; text-decoration: none;">${enquiryData.email}</a></td>
            </tr>
            <tr class="info-row">
              <td class="info-label">Phone</td>
              <td class="info-value">${enquiryData.phone}</td>
            </tr>
            <tr class="info-row">
              <td class="info-label">Subject</td>
              <td class="info-value">${enquiryData.subject}</td>
            </tr>
            <tr class="info-row">
              <td class="info-label">Message</td>
              <td class="info-value">${enquiryData.message}</td>
            </tr>
          </table>
        </div>
        <div class="footer">
          <p>You can reply directly to this email to respond to the customer.</p>
          <p>&copy; 2024 Truedeal Travel. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

