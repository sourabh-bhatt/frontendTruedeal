'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail, Calendar, MapPin, Users, AlertCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import { generatePDFReceipt } from '@/app/utils/receiptUtils';
import { retrieveBookingData } from '@/app/utils/paymentUtils';

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

export default function PaymentSuccess() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [bookingData, setBookingData] = useState<BookingData | null>(null);
    const [paymentDetails, setPaymentDetails] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [emailSent, setEmailSent] = useState(false);
    const [debugInfo, setDebugInfo] = useState<string>('');
    const [retryCount, setRetryCount] = useState(0);
    const [autoRetryCounter, setAutoRetryCounter] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setAutoRetryCounter(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    if (!bookingData && !paymentDetails && retryCount < 2) {
                        setRetryCount(prev => prev + 1);
                        window.location.reload();
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [bookingData, paymentDetails, retryCount]);

    useEffect(() => {
        try {
            // Get payment response parameters
            const txnid = searchParams.get('txnid');
            const amount = searchParams.get('amount');
            const status = searchParams.get('status');
            const payuMoneyId = searchParams.get('payuMoneyId');
            const mihpayid = searchParams.get('mihpayid');
            const firstname = searchParams.get('firstname');
            const email = searchParams.get('email');

            // Debug information
            const debugData = {
                txnid,
                amount,
                status,
                payuMoneyId,
                mihpayid,
                firstname,
                email,
                searchParamsSize: searchParams.toString().length,
                allParams: Object.fromEntries(searchParams.entries()),
                retryCount,
                autoRetryCounter,
            };
            
            console.log('Payment Success Page - Debug Info:', debugData);
            setDebugInfo(JSON.stringify(debugData, null, 2));

            // If no transaction ID in URL but we have stored data, redirect with proper parameters
            if (!txnid && retryCount === 0) {
                const latestTxnid = localStorage.getItem('truedeal_latest_booking');
                if (latestTxnid) {
                    console.log('No txnid in URL, redirecting with stored txnid:', latestTxnid);
                    const currentUrl = new URL(window.location.href);
                    currentUrl.searchParams.set('txnid', latestTxnid);
                    window.location.href = currentUrl.toString();
                    return;
                }
            }

            // Check if we have a transaction ID (most important parameter)
            if (txnid) {
                // Use enhanced storage retrieval
                const storedData = retrieveBookingData(txnid);
                console.log('Retrieved booking data:', storedData);
                
                if (storedData) {
                    setBookingData(storedData);
                    
                    const paymentData = {
                        txnid,
                        amount: amount || storedData.amount,
                        status: status || 'success', // Default to success if status not provided
                        payuMoneyId: payuMoneyId || mihpayid,
                        paymentDate: new Date().toISOString(),
                    };
                    
                    setPaymentDetails(paymentData);

                    // Send confirmation email
                    sendConfirmationEmail(storedData, paymentData);
                } else {
                    // Try to reconstruct basic booking data from URL params if no stored data found
                    console.log('No stored data found, trying to reconstruct from URL params');
                    
                    if (firstname && email && amount) {
                        const reconstructedData = {
                            packageDetails: {
                                id: 'unknown',
                                country: 'Package Booking',
                                days: 1,
                                nights: 0,
                                amount: parseFloat(amount) || 0,
                                dateStart: new Date().toLocaleDateString(),
                                dateEnd: new Date().toLocaleDateString(),
                            },
                            customerDetails: {
                                firstName: firstname || 'Customer',
                                lastName: '',
                                email: email || '',
                                phone: '',
                                address: '',
                                city: '',
                                state: '',
                                zipCode: '',
                                numberOfTravelers: 1,
                            },
                            amount: parseFloat(amount) || 0,
                            txnid: txnid,
                        };
                        
                        setBookingData(reconstructedData);
                        setPaymentDetails({
                            txnid,
                            amount,
                            status: status || 'success',
                            payuMoneyId: payuMoneyId || mihpayid,
                            paymentDate: new Date().toISOString(),
                        });
                        
                        console.log('Reconstructed booking data:', reconstructedData);
                    } else {
                        console.log('Insufficient data to reconstruct booking');
                        setDebugInfo(prev => prev + '\nInsufficient data to reconstruct booking');
                    }
                }
            } else {
                console.log('No transaction ID found in URL parameters');
                setDebugInfo(prev => prev + '\nNo transaction ID found in URL parameters');
            }
        } catch (error) {
            console.error('Error in payment success page:', error);
            setDebugInfo(prev => prev + '\nError in payment success page: ' + error);
        } finally {
            setIsLoading(false);
        }
    }, [searchParams, retryCount]);

    const sendConfirmationEmail = async (booking: BookingData, payment: any) => {
        try {
            const response = await fetch('/api/send-booking-confirmation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bookingData: booking,
                    paymentDetails: payment,
                }),
            });

            if (response.ok) {
                setEmailSent(true);
                console.log('Confirmation email sent successfully');
            } else {
                console.error('Failed to send confirmation email:', response.status);
            }
        } catch (error) {
            console.error('Error sending confirmation email:', error);
        }
    };

    const handleDownloadReceipt = () => {
        if (bookingData && paymentDetails) {
            generatePDFReceipt(bookingData, paymentDetails);
        }
    };

    const handleManualRetry = () => {
        setRetryCount(prev => prev + 1);
        setIsLoading(true);
        window.location.reload();
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p>Processing your booking...</p>
                    {retryCount > 0 && (
                        <p className="text-sm text-gray-500 mt-2">Retry attempt: {retryCount}</p>
                    )}
                </div>
            </div>
        );
    }

    // Show debug information in development
    const showDebugInfo = process.env.NODE_ENV === 'development' || searchParams.get('debug') === 'true';

    if (!bookingData || !paymentDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-2xl px-4">
                    <AlertCircle className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Processing Payment</h1>
                    <p className="text-gray-600 mb-6">
                        We're processing your payment. If you just completed a payment, please wait a moment 
                        or try refreshing the page.
                    </p>
                    
                    {retryCount < 2 && autoRetryCounter > 0 && (
                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                            <p className="text-blue-700">
                                Auto-refreshing in {autoRetryCounter} seconds...
                            </p>
                        </div>
                    )}
                    
                    {showDebugInfo && (
                        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
                            <h3 className="font-semibold mb-2">Debug Information:</h3>
                            <pre className="text-xs overflow-auto">{debugInfo}</pre>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <Button onClick={handleManualRetry} className="mr-4">
                            Refresh Page
                        </Button>
                        <Link href="/payment/debug">
                            <Button variant="outline" className="mr-4">Debug Info</Button>
                        </Link>
                        <Link href="/fixedDeparture">
                            <Button variant="outline">Browse Packages</Button>
                        </Link>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>Payment Completed?</strong> If you've just completed a payment, 
                            your booking will be processed shortly. You'll receive a confirmation email 
                            at your registered email address.
                        </p>
                        <p className="text-sm text-blue-600 mt-2">
                            For immediate assistance, contact us at{' '}
                            <a href="mailto:sales4@truedeal4u.com" className="underline">
                                sales4@truedeal4u.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Success Header */}
                <div className="text-center mb-8">
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-green-600 mb-2">Payment Successful!</h1>
                    <p className="text-xl text-gray-600">Your booking has been confirmed</p>
                    {retryCount > 0 && (
                        <p className="text-sm text-gray-500 mt-2">Loaded successfully after {retryCount} retry(s)</p>
                    )}
                </div>

                {/* Booking Confirmation Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column - Package Details */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <MapPin className="h-6 w-6 text-blue-500" />
                                Package Details
                            </h2>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-600">Destination</label>
                                    <p className="font-semibold text-lg">{bookingData.packageDetails.country}</p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-gray-600">Duration</label>
                                        <p className="font-semibold">{bookingData.packageDetails.days}D/{bookingData.packageDetails.nights}N</p>
                                    </div>
                                    <div>
                                        <label className="text-sm text-gray-600">Travelers</label>
                                        <p className="font-semibold flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            {bookingData.customerDetails.numberOfTravelers}
                                        </p>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-600">Travel Dates</label>
                                    <p className="font-semibold flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {bookingData.packageDetails.dateStart} - {bookingData.packageDetails.dateEnd}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Customer & Payment Details */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Booking Information</h2>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-600">Customer Name</label>
                                    <p className="font-semibold">{bookingData.customerDetails.firstName} {bookingData.customerDetails.lastName}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-600">Email</label>
                                    <p className="font-semibold">{bookingData.customerDetails.email}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-600">Phone</label>
                                    <p className="font-semibold">{bookingData.customerDetails.phone}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-600">Transaction ID</label>
                                    <p className="font-semibold text-blue-600">{paymentDetails.txnid}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-600">Payment Date</label>
                                    <p className="font-semibold">{new Date(paymentDetails.paymentDate).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="border-t pt-6 mt-6">
                        <div className="bg-green-50 rounded-lg p-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold">Total Amount Paid</h3>
                                    <p className="text-sm text-gray-600">
                                        {bookingData.customerDetails.numberOfTravelers} × ₹{bookingData.packageDetails.amount.toLocaleString('en-IN')}
                                    </p>
                                </div>
                                <div className="text-3xl font-bold text-green-600">
                                    ₹{bookingData.amount.toLocaleString('en-IN')}/-
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                        onClick={handleDownloadReceipt}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                    >
                        <Download className="h-5 w-5 mr-2" />
                        Download Receipt
                    </Button>
                    
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                        {emailSent ? (
                            <div className="flex items-center gap-2 text-green-600">
                                <Mail className="h-5 w-5" />
                                <span>Confirmation email sent!</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-gray-500">
                                <Mail className="h-5 w-5" />
                                <span>Sending confirmation email...</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Information */}
                <div className="bg-blue-50 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-semibold mb-4">What's Next?</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>✓ Your booking is confirmed and payment has been processed</li>
                        <li>✓ A confirmation email with detailed itinerary has been sent to your email</li>
                        <li>✓ Our travel expert will contact you within 24 hours with further details</li>
                        <li>✓ You will receive travel documents and vouchers 7 days before departure</li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 mb-4">
                        Have questions? Contact our support team at{' '}
                        <a href="mailto:sales4@truedeal4u.com" className="text-blue-600 hover:underline">
                            sales4@truedeal4u.com
                        </a>
                    </p>
                    <Link href="/fixedDeparture">
                        <Button variant="outline">Browse More Packages</Button>
                    </Link>
                </div>

                {/* Debug Information (only in development) */}
                {showDebugInfo && (
                    <div className="bg-gray-100 p-4 rounded-lg mt-8">
                        <h3 className="font-semibold mb-2">Debug Information:</h3>
                        <pre className="text-xs overflow-auto">{debugInfo}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}