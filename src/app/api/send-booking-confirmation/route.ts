import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface BookingData {
    packageDetails: {
        id: string;
        country: string;
        days: number;
        nights: number;
        amount: number;
        dateStart: string;
        dateEnd: string;
        images?: string[];
    };
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        numberOfTravelers: number;
    };
    amount: number;
    txnid: string;
}

interface PaymentDetails {
    txnid: string;
    amount: string;
    payuMoneyId?: string;
    paymentDate: string;
}

const generateBookingConfirmationHTML = (bookingData: BookingData, paymentDetails: PaymentDetails) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Booking Confirmation - TrueDeal4u</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; background: linear-gradient(135deg, #017ae3, #00f6ff); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .success-icon { font-size: 48px; color: #28a745; margin-bottom: 20px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #017ae3; }
            .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: bold; color: #666; }
            .detail-value { color: #333; }
            .amount-highlight { background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .button { background: #017ae3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Booking Confirmed!</h1>
                <p>Your travel dreams are about to come true</p>
            </div>
            
            <div class="content">
                <div class="success-icon">✅</div>
                
                <h2>Dear ${bookingData.customerDetails.firstName} ${bookingData.customerDetails.lastName},</h2>
                
                <p>Congratulations! Your booking has been successfully confirmed. We're excited to be part of your travel journey.</p>
                
                <div class="booking-details">
                    <h3>📍 Package Details</h3>
                    <div class="detail-row">
                        <span class="detail-label">Destination:</span>
                        <span class="detail-value">${bookingData.packageDetails.country}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Duration:</span>
                        <span class="detail-value">${bookingData.packageDetails.days} Days / ${bookingData.packageDetails.nights} Nights</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Travel Dates:</span>
                        <span class="detail-value">${bookingData.packageDetails.dateStart} to ${bookingData.packageDetails.dateEnd}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Number of Travelers:</span>
                        <span class="detail-value">${bookingData.customerDetails.numberOfTravelers}</span>
                    </div>
                </div>
                
                <div class="booking-details">
                    <h3>💳 Payment Information</h3>
                    <div class="detail-row">
                        <span class="detail-label">Transaction ID:</span>
                        <span class="detail-value">${paymentDetails.txnid}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Payment Date:</span>
                        <span class="detail-value">${new Date(paymentDetails.paymentDate).toLocaleDateString()}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Payment Status:</span>
                        <span class="detail-value">✅ Successful</span>
                    </div>
                </div>
                
                <div class="amount-highlight">
                    <h3>Total Amount Paid: ₹${bookingData.amount.toLocaleString('en-IN')}/-</h3>
                    <p>Payment successfully processed</p>
                </div>
                
                <div class="booking-details">
                    <h3>📞 Contact Details</h3>
                    <div class="detail-row">
                        <span class="detail-label">Customer Name:</span>
                        <span class="detail-value">${bookingData.customerDetails.firstName} ${bookingData.customerDetails.lastName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Email:</span>
                        <span class="detail-value">${bookingData.customerDetails.email}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Phone:</span>
                        <span class="detail-value">${bookingData.customerDetails.phone}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Address:</span>
                        <span class="detail-value">${bookingData.customerDetails.address}, ${bookingData.customerDetails.city}, ${bookingData.customerDetails.state} - ${bookingData.customerDetails.zipCode}</span>
                    </div>
                </div>
                
                <h3>🎯 What's Next?</h3>
                <ul>
                    <li>✅ Your booking is confirmed and payment has been processed</li>
                    <li>📞 Our travel expert will contact you within 24 hours with detailed itinerary</li>
                    <li>📄 You will receive travel documents and vouchers 7 days before departure</li>
                    <li>🎫 Keep this email as your booking reference</li>
                </ul>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="mailto:sales4@truedeal4u.com" class="button">Contact Support</a>
                    <a href="https://truedeal4u.com/fixedDeparture" class="button">Browse More Packages</a>
                </div>
                
                <p><strong>Important Notes:</strong></p>
                <ul>
                    <li>Please carry a copy of this confirmation email during your travel</li>
                    <li>Check your passport validity (minimum 6 months from travel date)</li>
                    <li>Ensure you have all required documents and visas</li>
                    <li>Travel insurance is recommended for international trips</li>
                </ul>
            </div>
            
            <div class="footer">
                <p><strong>TrueDeal4u - Your Trusted Travel Partner</strong></p>
                <p>Email: sales4@truedeal4u.com | Website: www.truedeal4u.com</p>
                <p>Available 24/7 for assistance</p>
                <p style="margin-top: 20px;">Thank you for choosing TrueDeal4u. Have a wonderful journey!</p>
            </div>
        </div>
    </body>
    </html>
    `;
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { bookingData, paymentDetails }: { bookingData: BookingData, paymentDetails: PaymentDetails } = body;

        // Send confirmation email to customer
        const customerMsg = {
            to: bookingData.customerDetails.email,
            from: 'web@truedeal4u.com',
            subject: `🎉 Booking Confirmed - ${bookingData.packageDetails.country} Trip | TrueDeal4u`,
            html: generateBookingConfirmationHTML(bookingData, paymentDetails),
        };

        // Send notification email to admin
        const adminMsg = {
            to: 'sales4@truedeal4u.com',
            from: 'web@truedeal4u.com',
            subject: `New Booking Confirmed - ${bookingData.packageDetails.country} | ${paymentDetails.txnid}`,
            html: `
                <h2>New Booking Confirmation</h2>
                <p><strong>Customer:</strong> ${bookingData.customerDetails.firstName} ${bookingData.customerDetails.lastName}</p>
                <p><strong>Package:</strong> ${bookingData.packageDetails.days} Days ${bookingData.packageDetails.country}</p>
                <p><strong>Amount:</strong> ₹${bookingData.amount.toLocaleString('en-IN')}/-</p>
                <p><strong>Travelers:</strong> ${bookingData.customerDetails.numberOfTravelers}</p>
                <p><strong>Transaction ID:</strong> ${paymentDetails.txnid}</p>
                <p><strong>Customer Email:</strong> ${bookingData.customerDetails.email}</p>
                <p><strong>Customer Phone:</strong> ${bookingData.customerDetails.phone}</p>
                <p><strong>Address:</strong> ${bookingData.customerDetails.address}, ${bookingData.customerDetails.city}, ${bookingData.customerDetails.state} - ${bookingData.customerDetails.zipCode}</p>
                <p><strong>Payment Date:</strong> ${new Date(paymentDetails.paymentDate).toLocaleString()}</p>
            `,
        };

        // Send both emails
        await Promise.all([
            sgMail.send(customerMsg),
            sgMail.send(adminMsg)
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending booking confirmation email:', error);
        return NextResponse.json({ error: 'Failed to send confirmation email' }, { status: 500 });
    }
} 