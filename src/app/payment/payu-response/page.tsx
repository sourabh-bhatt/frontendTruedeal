'use client';

import { useEffect, useState } from 'react';

export default function PayUResponse() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if this is the first load (before refresh)
        const hasRefreshed = sessionStorage.getItem('payu_refreshed');
        
        if (!hasRefreshed) {
            // Mark that we're about to refresh
            sessionStorage.setItem('payu_refreshed', 'true');
            console.log('PayU Response - First load, refreshing to avoid hydration issues...');
            
            // Force immediate refresh to bypass Next.js hydration issues
            setTimeout(() => {
                window.location.reload();
            }, 100);
            return;
        }

        // After refresh, process the payment
        console.log('PayU Response - Processing after refresh...');
        
        try {
            // Parse URL parameters directly from window.location
            const urlParams = new URLSearchParams(window.location.search);
            const allParams = Object.fromEntries(urlParams.entries());
            
            console.log('PayU Response received:', allParams);
            
            // Get essential parameters
            const txnid = urlParams.get('txnid');
            const status = urlParams.get('status');
            const amount = urlParams.get('amount');
            const firstname = urlParams.get('firstname');
            const email = urlParams.get('email');
            const payuMoneyId = urlParams.get('payuMoneyId');
            const mihpayid = urlParams.get('mihpayid');

            // Clear the refresh flag for future visits
            sessionStorage.removeItem('payu_refreshed');

            // Build success URL
            if (txnid) {
                // Build success URL with all important parameters
                const successUrl = new URL('/payment/success', window.location.origin);
                
                // Add all important parameters to the success URL
                if (txnid) successUrl.searchParams.set('txnid', txnid);
                if (status) successUrl.searchParams.set('status', status);
                if (amount) successUrl.searchParams.set('amount', amount);
                if (firstname) successUrl.searchParams.set('firstname', firstname);
                if (email) successUrl.searchParams.set('email', email);
                if (payuMoneyId) successUrl.searchParams.set('payuMoneyId', payuMoneyId);
                if (mihpayid) successUrl.searchParams.set('mihpayid', mihpayid);

                console.log('Redirecting to success page:', successUrl.toString());
                
                // Small delay then redirect
                setTimeout(() => {
                    window.location.href = successUrl.toString();
                }, 500);
            } else {
                // If no transaction ID, try to get latest booking from storage
                const latestTxnid = localStorage.getItem('truedeal_latest_booking');
                if (latestTxnid) {
                    // Redirect with stored transaction ID
                    const successUrl = new URL('/payment/success', window.location.origin);
                    successUrl.searchParams.set('txnid', latestTxnid);
                    if (status) successUrl.searchParams.set('status', status);
                    if (amount) successUrl.searchParams.set('amount', amount);
                    if (firstname) successUrl.searchParams.set('firstname', firstname);
                    if (email) successUrl.searchParams.set('email', email);
                    
                    console.log('Redirecting with stored txnid:', successUrl.toString());
                    
                    setTimeout(() => {
                        window.location.href = successUrl.toString();
                    }, 500);
                } else {
                    // Fallback to success page without parameters
                    console.log('No transaction ID found, redirecting to basic success page');
                    
                    setTimeout(() => {
                        window.location.href = '/payment/success';
                    }, 500);
                }
            }
        } catch (error) {
            console.error('Error in PayU response handler:', error);
            
            // Clear refresh flag and redirect
            sessionStorage.removeItem('payu_refreshed');
            
            setTimeout(() => {
                window.location.href = '/payment/success';
            }, 1000);
        }
        
        setIsLoading(false);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">Processing Payment Response</h2>
                <p className="text-gray-600 mb-2">Please wait while we redirect you...</p>
                {isLoading && (
                    <p className="text-sm text-gray-500">Initializing...</p>
                )}
            </div>
        </div>
    );
} 