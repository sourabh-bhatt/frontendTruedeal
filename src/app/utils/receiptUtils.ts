import jsPDF from 'jspdf';

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
    status: string;
    payuMoneyId?: string;
    paymentDate: string;
}

export const generatePDFReceipt = (bookingData: BookingData, paymentDetails: PaymentDetails) => {
    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
        title: 'Booking Receipt - TrueDeal',
        subject: 'Travel Booking Confirmation',
        author: 'TrueDeal4u',
        creator: 'TrueDeal4u'
    });

    // Company header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('TrueDeal4u', 20, 25);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Your Trusted Travel Partner', 20, 32);
    doc.text('Email: sales4@truedeal4u.com', 20, 37);
    doc.text('Website: www.truedeal4u.com', 20, 42);

    // Receipt title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('BOOKING CONFIRMATION RECEIPT', 20, 55);

    // Receipt details box
    doc.setLineWidth(0.5);
    doc.rect(20, 60, 170, 25);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Receipt No: ${paymentDetails.txnid}`, 25, 70);
    doc.text(`Booking Date: ${new Date(paymentDetails.paymentDate).toLocaleDateString()}`, 25, 76);
    doc.text(`Payment Status: ${paymentDetails.status.toUpperCase()}`, 120, 70);
    doc.text(`Transaction ID: ${paymentDetails.txnid}`, 120, 76);

    // Customer Details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('CUSTOMER DETAILS', 20, 95);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${bookingData.customerDetails.firstName} ${bookingData.customerDetails.lastName}`, 20, 105);
    doc.text(`Email: ${bookingData.customerDetails.email}`, 20, 111);
    doc.text(`Phone: ${bookingData.customerDetails.phone}`, 20, 117);
    doc.text(`Address: ${bookingData.customerDetails.address}`, 20, 123);
    doc.text(`${bookingData.customerDetails.city}, ${bookingData.customerDetails.state} - ${bookingData.customerDetails.zipCode}`, 20, 129);

    // Package Details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PACKAGE DETAILS', 20, 145);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Destination: ${bookingData.packageDetails.country}`, 20, 155);
    doc.text(`Duration: ${bookingData.packageDetails.days} Days / ${bookingData.packageDetails.nights} Nights`, 20, 161);
    doc.text(`Travel Dates: ${bookingData.packageDetails.dateStart} to ${bookingData.packageDetails.dateEnd}`, 20, 167);
    doc.text(`Number of Travelers: ${bookingData.customerDetails.numberOfTravelers}`, 20, 173);

    // Payment Summary
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PAYMENT SUMMARY', 20, 190);
    
    // Payment table
    doc.setLineWidth(0.3);
    
    // Table headers
    doc.rect(20, 195, 170, 10);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Description', 25, 202);
    doc.text('Quantity', 100, 202);
    doc.text('Rate (₹)', 130, 202);
    doc.text('Amount (₹)', 160, 202);

    // Table content
    doc.rect(20, 205, 170, 10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${bookingData.packageDetails.days}D ${bookingData.packageDetails.country} Package`, 25, 212);
    doc.text(bookingData.customerDetails.numberOfTravelers.toString(), 105, 212);
    doc.text(bookingData.packageDetails.amount.toLocaleString('en-IN'), 135, 212);
    doc.text(bookingData.amount.toLocaleString('en-IN'), 165, 212);

    // Total
    doc.rect(20, 215, 170, 15);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL AMOUNT PAID', 25, 225);
    doc.text(`₹ ${bookingData.amount.toLocaleString('en-IN')}/-`, 155, 225);

    // Terms and Conditions
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Terms & Conditions:', 20, 245);
    doc.text('• This receipt is generated electronically and is valid without signature.', 20, 250);
    doc.text('• Please carry a copy of this receipt during your travel.', 20, 254);
    doc.text('• For any queries, please contact us at sales4@truedeal4u.com', 20, 258);
    doc.text('• Cancellation and refund policies as per company terms.', 20, 262);

    // Footer
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Thank you for choosing TrueDeal4u. Have a wonderful journey!', 20, 275);
    
    doc.setFontSize(8);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 285);

    // Save the PDF
    const fileName = `TrueDeal_Receipt_${paymentDetails.txnid}.pdf`;
    doc.save(fileName);
}; 