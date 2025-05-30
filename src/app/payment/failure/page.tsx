'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { XCircle, RotateCcw, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PaymentFailure() {
    const searchParams = useSearchParams();
    const [paymentDetails, setPaymentDetails] = useState<any>(null);
    const [bookingData, setBookingData] = useState<any>(null);

    useEffect(() => {
        // Get payment response parameters
        const txnid = searchParams.get('txnid');
        const amount = searchParams.get('amount');
        const status = searchParams.get('status');
        const error = searchParams.get('error');

        setPaymentDetails({
            txnid,
            amount,
            status,
            error,
            failureDate: new Date().toISOString(),
        });

        // Get stored booking data
        const storedData = sessionStorage.getItem('bookingData');
        if (storedData) {
            const data = JSON.parse(storedData);
            setBookingData(data);
        }
    }, [searchParams]);

    const handleRetryPayment = () => {
        // Redirect back to the package page to retry booking
        if (bookingData && bookingData.packageDetails) {
            window.location.href = `/fixedDeparture/${bookingData.packageDetails.id}`;
        } else {
            window.location.href = '/fixedDeparture';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Failure Header */}
                <div className="text-center mb-8">
                    <XCircle className="h-20 w-20 text-red-500 mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-red-600 mb-2">Payment Failed</h1>
                    <p className="text-xl text-gray-600">Unfortunately, your payment could not be processed</p>
                </div>

                {/* Error Details Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Transaction Details</h2>
                    
                    {paymentDetails && (
                        <div className="space-y-4">
                            {paymentDetails.txnid && (
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-gray-600">Transaction ID:</span>
                                    <span className="font-semibold">{paymentDetails.txnid}</span>
                                </div>
                            )}
                            
                            {paymentDetails.amount && (
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-gray-600">Amount:</span>
                                    <span className="font-semibold">₹{parseInt(paymentDetails.amount).toLocaleString('en-IN')}/-</span>
                                </div>
                            )}
                            
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="text-gray-600">Status:</span>
                                <span className="font-semibold text-red-600 uppercase">{paymentDetails.status || 'Failed'}</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="text-gray-600">Date & Time:</span>
                                <span className="font-semibold">{new Date(paymentDetails.failureDate).toLocaleString()}</span>
                            </div>
                            
                            {paymentDetails.error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-red-800 mb-2">Error Details:</h4>
                                    <p className="text-red-700">{paymentDetails.error}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Package Details (if available) */}
                {bookingData && bookingData.packageDetails && (
                    <div className="bg-blue-50 rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Package Details</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-600">Destination:</span>
                                <p className="font-semibold">{bookingData.packageDetails.country}</p>
                            </div>
                            <div>
                                <span className="text-gray-600">Duration:</span>
                                <p className="font-semibold">{bookingData.packageDetails.days}D/{bookingData.packageDetails.nights}N</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <Button 
                        onClick={handleRetryPayment}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                    >
                        <RotateCcw className="h-5 w-5 mr-2" />
                        Try Again
                    </Button>
                    
                    <Link href="/contact-us">
                        <Button 
                            variant="outline"
                            className="w-full py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                            <Phone className="h-5 w-5 mr-2" />
                            Contact Support
                        </Button>
                    </Link>
                </div>

                {/* Common Reasons for Payment Failure */}
                <div className="bg-yellow-50 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Common Reasons for Payment Failure</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Insufficient balance in your account</li>
                        <li>• Credit/debit card limit exceeded</li>
                        <li>• Incorrect card details or expired card</li>
                        <li>• Network connectivity issues</li>
                        <li>• Bank server temporarily unavailable</li>
                        <li>• Transaction blocked by bank for security reasons</li>
                    </ul>
                </div>

                {/* What to Do Next */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4">What to Do Next?</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm mt-0.5">1</div>
                            <div>
                                <h4 className="font-semibold">Check Your Account</h4>
                                <p className="text-gray-600 text-sm">Verify if the amount has been debited from your account. If yes, it will be refunded within 5-7 business days.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm mt-0.5">2</div>
                            <div>
                                <h4 className="font-semibold">Retry Payment</h4>
                                <p className="text-gray-600 text-sm">Try using a different payment method or contact your bank to resolve any issues.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm mt-0.5">3</div>
                            <div>
                                <h4 className="font-semibold">Contact Us</h4>
                                <p className="text-gray-600 text-sm">Our support team is available 24/7 to help you complete your booking.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-center gap-2">
                            <Mail className="h-5 w-5 text-blue-600" />
                            <a href="mailto:sales4@truedeal4u.com" className="text-blue-600 hover:underline">
                                sales4@truedeal4u.com
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Phone className="h-5 w-5 text-blue-600" />
                            <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                                +91 98765 43210
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                        Available 24/7 for assistance
                    </p>
                </div>

                {/* Back to Packages */}
                <div className="text-center mt-8">
                    <Link href="/fixedDeparture">
                        <Button variant="outline">Browse Other Packages</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
} 