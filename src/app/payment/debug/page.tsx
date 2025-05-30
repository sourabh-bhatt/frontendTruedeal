'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { retrieveBookingData } from '@/app/utils/paymentUtils';
import Link from 'next/link';

export default function PaymentDebug() {
    const searchParams = useSearchParams();
    const [debugInfo, setDebugInfo] = useState<any>({});
    const [storageInfo, setStorageInfo] = useState<any>({});

    useEffect(() => {
        // Get all URL parameters
        const allParams = Object.fromEntries(searchParams.entries());
        
        // Get storage information
        const sessionData = sessionStorage.getItem('bookingData');
        const latestTxnid = localStorage.getItem('truedeal_latest_booking');
        
        // Try to retrieve booking data
        const txnid = searchParams.get('txnid');
        const retrievedData = retrieveBookingData(txnid || undefined);

        setDebugInfo({
            urlParameters: allParams,
            txnid: txnid,
            searchParamsString: searchParams.toString(),
            timestamp: new Date().toISOString(),
        });

        setStorageInfo({
            sessionStorageData: sessionData ? JSON.parse(sessionData) : null,
            latestTxnid: latestTxnid,
            retrievedBookingData: retrievedData,
            localStorageKeys: Object.keys(localStorage).filter(key => key.startsWith('truedeal_')),
        });
    }, [searchParams]);

    const clearStorage = () => {
        sessionStorage.clear();
        Object.keys(localStorage).filter(key => key.startsWith('truedeal_')).forEach(key => {
            localStorage.removeItem(key);
        });
        setStorageInfo({
            sessionStorageData: null,
            latestTxnid: null,
            retrievedBookingData: null,
            localStorageKeys: [],
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-6">Payment Debug Information</h1>
                    
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-3">URL Parameters</h2>
                            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
                                {JSON.stringify(debugInfo, null, 2)}
                            </pre>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Storage Information</h2>
                            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
                                {JSON.stringify(storageInfo, null, 2)}
                            </pre>
                        </div>

                        <div className="flex gap-4">
                            <Button onClick={() => window.location.reload()}>
                                Refresh Page
                            </Button>
                            <Button onClick={clearStorage} variant="outline">
                                Clear Storage
                            </Button>
                            <Link href="/payment/success">
                                <Button variant="outline">Go to Success Page</Button>
                            </Link>
                            <Link href="/fixedDeparture">
                                <Button variant="outline">Browse Packages</Button>
                            </Link>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">How to Test:</h3>
                            <ol className="list-decimal list-inside space-y-1 text-sm">
                                <li>Complete a payment through the normal flow</li>
                                <li>If redirected to error page, come to this debug page</li>
                                <li>Add <code>?debug=true</code> to any payment success URL to see debug info</li>
                                <li>Check if booking data is stored in localStorage/sessionStorage</li>
                            </ol>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">Test URL Examples:</h3>
                            <div className="space-y-1 text-sm font-mono">
                                <p>/payment/success?txnid=TEST123&status=success&amount=10000</p>
                                <p>/payment/success?txnid=TEST123&status=success&amount=10000&debug=true</p>
                                <p>/payment/debug?txnid=TEST123&status=success&amount=10000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 