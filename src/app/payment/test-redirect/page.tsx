'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function TestRedirect() {
    const [txnId, setTxnId] = useState('');

    useEffect(() => {
        // Generate a test transaction ID
        const testTxnId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        setTxnId(testTxnId);
    }, []);

    const simulateSuccessfulPayment = () => {
        // Store test booking data
        const testBookingData = {
            packageDetails: {
                id: 'europe-12-days-grand-tour',
                country: 'Europe',
                days: 12,
                nights: 11,
                amount: 395000,
                dateStart: '16 May 2025',
                dateEnd: '28 May 2025',
            },
            customerDetails: {
                firstName: 'Test',
                lastName: 'User',
                email: 'test@example.com',
                phone: '9999999999',
                address: 'Test Address',
                city: 'Test City',
                state: 'Test State',
                zipCode: '123456',
                numberOfTravelers: 1,
            },
            amount: 395000,
            txnid: txnId,
            timestamp: new Date().toISOString(),
        };

        // Store in both storage methods
        sessionStorage.setItem('bookingData', JSON.stringify(testBookingData));
        localStorage.setItem('truedeal_booking_' + txnId, JSON.stringify(testBookingData));
        localStorage.setItem('truedeal_latest_booking', txnId);

        // Simulate PayU success redirect
        const successUrl = new URL('/payment/payu-response', window.location.origin);
        successUrl.searchParams.set('txnid', txnId);
        successUrl.searchParams.set('status', 'success');
        successUrl.searchParams.set('amount', '395000');
        successUrl.searchParams.set('firstname', 'Test');
        successUrl.searchParams.set('email', 'test@example.com');
        successUrl.searchParams.set('payuMoneyId', 'TEST_PAYU_' + Date.now());

        window.location.href = successUrl.toString();
    };

    const testDirectSuccess = () => {
        // Test direct success URL with parameters
        const successUrl = new URL('/payment/success', window.location.origin);
        successUrl.searchParams.set('txnid', txnId);
        successUrl.searchParams.set('status', 'success');
        successUrl.searchParams.set('amount', '395000');
        successUrl.searchParams.set('firstname', 'Test');
        successUrl.searchParams.set('email', 'test@example.com');

        window.location.href = successUrl.toString();
    };

    const testWithoutParams = () => {
        // Test success page without any parameters
        window.location.href = '/payment/success';
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-6">Payment Test Page</h1>
                    <p className="text-gray-600 mb-6">
                        Use this page to test different payment redirect scenarios.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <strong>Test Transaction ID:</strong> {txnId}
                        </div>

                        <Button 
                            onClick={simulateSuccessfulPayment}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-4"
                        >
                            Simulate Successful PayU Payment
                        </Button>

                        <Button 
                            onClick={testDirectSuccess}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4"
                        >
                            Test Direct Success Page with Parameters
                        </Button>

                        <Button 
                            onClick={testWithoutParams}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4"
                        >
                            Test Success Page without Parameters
                        </Button>

                        <div className="pt-4 space-y-2">
                            <Link href="/payment/debug">
                                <Button variant="outline" className="w-full">
                                    Go to Debug Page
                                </Button>
                            </Link>
                            <Link href="/fixedDeparture">
                                <Button variant="outline" className="w-full">
                                    Back to Packages
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Testing Instructions:</h3>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                            <li>Use "Simulate Successful PayU Payment" to test the full flow</li>
                            <li>Use "Test Direct Success" to test success page with parameters</li>
                            <li>Use "Test without Parameters" to test auto-redirect functionality</li>
                            <li>Check browser console for debug messages</li>
                            <li>Use debug page to see storage state</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
} 