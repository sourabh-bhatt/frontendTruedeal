import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { toast } from 'react-hot-toast';

interface PaymentDetails {
  mihpayid?: string;
  status?: string;
  amount?: string;
  txnid?: string;
  firstname?: string;
  email?: string;
  productinfo?: string;
  bank_ref_num?: string;
  key?: string;
  hash?: string;
}

export default function PaymentSuccess({ params }: { params: { txnid: string } }) {
  const router = useRouter();
  const { txnid } = params;
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationError, setVerificationError] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({});
  const [emailSent, setEmailSent] = useState(false);
  const [autoDownloaded, setAutoDownloaded] = useState(false);
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!txnid) {
      setVerificationError(true);
      setIsVerifying(false);
      return;
    }
    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/payu/status?txnid=${txnid}`);
        if (!res.ok) {
          setVerificationError(true);
          setIsVerifying(false);
          return;
        }
        const data = await res.json();
        if (!data.result || data.result.status?.toLowerCase() !== 'success' || !data.result.verified) {
          setVerificationError(true);
          setPaymentDetails(data.result || {});
          setIsVerifying(false);
          return;
        }
        setPaymentDetails(data.result);
        // Send confirmation email if not already sent
        if (data.result.email && !emailSent) {
          try {
            const emailResponse = await fetch('/api/send-payment-confirmation', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data.result)
            });
            if (emailResponse.ok) {
              setEmailSent(true);
              toast.success('Payment confirmation email sent!');
            }
          } catch (emailError) {
            toast.error('Payment successful, but email failed to send');
          }
        }
      } catch (error) {
        setVerificationError(true);
      } finally {
        setIsVerifying(false);
      }
    };
    fetchStatus();
    // eslint-disable-next-line
  }, [txnid]);

  useEffect(() => {
    if (!autoDownloaded && paymentDetails.status?.toLowerCase() === 'success' && !isVerifying) {
      setTimeout(() => {
        handleDownloadReceipt();
        setAutoDownloaded(true);
      }, 2000);
    }
    // eslint-disable-next-line
  }, [paymentDetails, isVerifying, autoDownloaded]);

  const generateReceiptHTML = () => {
    const formatDate = () => {
      return new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Payment Receipt - ${paymentDetails.txnid}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; color: #16a34a; margin-bottom: 30px; }
          .details { margin: 20px 0; }
          .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
          .amount { font-size: 24px; font-weight: bold; color: #16a34a; }
          .status { background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 4px; }
          .footer { margin-top: 30px; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Payment Receipt</h1>
          <h2>TrueDeal Travel</h2>
          <p>Generated on: ${formatDate()}</p>
        </div>
        <div class="details">
          <div class="detail-row">
            <span>Transaction ID:</span>
            <span>${paymentDetails.txnid}</span>
          </div>
          <div class="detail-row">
            <span>Payment ID:</span>
            <span>${paymentDetails.mihpayid}</span>
          </div>
          <div class="detail-row">
            <span>Customer Name:</span>
            <span>${paymentDetails.firstname}</span>
          </div>
          <div class="detail-row">
            <span>Email:</span>
            <span>${paymentDetails.email}</span>
          </div>
          <div class="detail-row">
            <span>Package:</span>
            <span>${paymentDetails.productinfo}</span>
          </div>
          <div class="detail-row">
            <span>Amount Paid:</span>
            <span class="amount">₹${paymentDetails.amount}</span>
          </div>
          <div class="detail-row">
            <span>Status:</span>
            <span class="status">SUCCESS</span>
          </div>
          ${paymentDetails.bank_ref_num ? `
          <div class="detail-row">
            <span>Bank Reference:</span>
            <span>${paymentDetails.bank_ref_num}</span>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>Thank you for choosing TrueDeal Travel</p>
          <p>Email: info@truedeal4u.com | Phone: +91-9310271488</p>
        </div>
      </body>
      </html>
    `;
  };

  const handleDownloadReceipt = () => {
    const receiptHTML = generateReceiptHTML();
    const blob = new Blob([receiptHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `payment-receipt-${paymentDetails.txnid}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setTimeout(() => {
      window.print();
    }, 500);
    toast.success('Receipt downloaded successfully!');
  };

  const handlePrint = () => {
    window.print();
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h1 className="text-xl font-bold text-gray-600">Processing Payment...</h1>
          <p className="text-gray-500 mt-2">Please wait while we confirm your payment</p>
        </div>
      </div>
    );
  }

  if (verificationError || paymentDetails.status?.toLowerCase() !== 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h1>
          <p className="text-gray-600 mb-4">Status: {paymentDetails.status || 'Unknown'}</p>
          {paymentDetails.txnid && (
            <p className="text-gray-600 mb-6">Transaction ID: {paymentDetails.txnid}</p>
          )}
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <p className="text-red-700">Your payment could not be processed. Please try again or contact support.</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => router.push('/')} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Return Home
            </Button>
            <Button onClick={() => router.back()} className="flex-1 bg-gray-600 hover:bg-gray-700">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; }
          .print-container { 
            box-shadow: none !important; 
            border: 1px solid #ddd !important;
            margin: 0 !important;
          }
        }
        .print-only { display: none; }
      `}</style>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Auto download notification */}
          {autoDownloaded && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Receipt automatically downloaded and print dialog opened!</span>
              </div>
            </div>
          )}
          <div className="bg-white rounded-lg shadow-lg print-container" ref={confirmationRef}>
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-t-lg">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
                <p className="text-green-100">Thank you for your booking with TrueDeal Travel</p>
              </div>
            </div>
            {/* Payment Details */}
            <div className="p-6 space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Receipt</h2>
                <div className="text-sm text-gray-500">
                  Generated on: {formatDate()}
                </div>
              </div>
              {/* Transaction Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4 border-b pb-2">Transaction Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Transaction ID</label>
                      <p className="font-mono text-sm bg-white p-2 rounded border">{paymentDetails.txnid}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Payment ID</label>
                      <p className="font-mono text-sm bg-white p-2 rounded border">{paymentDetails.mihpayid}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Amount Paid</label>
                      <p className="text-2xl font-bold text-green-600">₹{paymentDetails.amount}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Customer Name</label>
                      <p className="font-semibold">{paymentDetails.firstname}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-sm">{paymentDetails.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Status</label>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                        SUCCESS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Package Details */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4 border-b pb-2">Package Details</h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Package</label>
                    <p className="font-semibold text-lg">{paymentDetails.productinfo}</p>
                  </div>
                  {paymentDetails.bank_ref_num && (
                    <div>
                      <label className="text-sm font-medium text-gray-600">Bank Reference</label>
                      <p className="font-mono text-sm">{paymentDetails.bank_ref_num}</p>
                    </div>
                  )}
                </div>
              </div>
              {/* Email Confirmation */}
              {emailSent && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <p className="text-green-700">
                      Confirmation email has been sent to <strong>{paymentDetails.email}</strong>
                    </p>
                  </div>
                </div>
              )}
              {/* Important Notes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Please save this receipt for your records</li>
                  <li>• Our team will contact you shortly with further details</li>
                  <li>• For any queries, contact us at support@truedeal4u.com</li>
                  <li>• Reference this transaction ID for any future communication</li>
                </ul>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 no-print">
                <Button 
                  onClick={handleDownloadReceipt}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Receipt
                </Button>
                <Button 
                  onClick={handlePrint}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Receipt
                </Button>
                <Button 
                  onClick={() => router.push('/')} 
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white"
                >
                  Return Home
                </Button>
              </div>
            </div>
            {/* Print Footer */}
            <div className="print-only border-t p-4 text-center text-sm text-gray-600">
              <p>TrueDeal Travel - Your Trusted Travel Partner</p>
              <p>Email: info@truedeal4u.com | Phone: +91-9310271488</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 