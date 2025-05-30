import CryptoJS from 'crypto-js';

interface PaymentData {
    amount: number;
    txnid: string;
    productinfo: string;
    firstname: string;
    lastname?: string;
    email: string;
    phone: string;
    address1?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    country?: string;
    packageDetails?: any;
    customerDetails?: any;
}

// PayU configuration - Updated with correct test credentials from official docs
const getPayUConfig = () => {
    // Use official PayU test credentials as documented
    const key = process.env.NEXT_PUBLIC_PAYU_KEY || 'JPM7Fg'; // Official PayU test key
    const url = process.env.NEXT_PUBLIC_PAYU_URL || 'https://test.payu.in/_payment';
    
    // Get base URL from environment or construct from window location
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                   (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
    
    return {
        key,
        url,
        successUrl: `${baseUrl}/payment/payu-response`, // Use dedicated response handler
        failureUrl: `${baseUrl}/payment/failure`,
    };
};

export const generatePayUHash = (data: {
    key: string;
    txnid: string;
    amount: number;
    productinfo: string;
    firstname: string;
    email: string;
    salt: string;
}) => {
    const { key, txnid, amount, productinfo, firstname, email, salt } = data;
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
    return CryptoJS.SHA512(hashString).toString();
};

// Improved storage function with better persistence
export const storeBookingData = (bookingData: any) => {
    const dataToStore = {
        packageDetails: bookingData.packageDetails,
        customerDetails: bookingData.customerDetails,
        amount: bookingData.amount,
        txnid: bookingData.txnid,
        timestamp: new Date().toISOString(),
    };

    try {
        // Store in both sessionStorage and localStorage for better persistence
        sessionStorage.setItem('bookingData', JSON.stringify(dataToStore));
        localStorage.setItem('truedeal_booking_' + bookingData.txnid, JSON.stringify(dataToStore));
        
        // Also store a reference with just the transaction ID for recovery
        localStorage.setItem('truedeal_latest_booking', bookingData.txnid);
        
        console.log('Booking data stored successfully:', dataToStore);
    } catch (error) {
        console.error('Error storing booking data:', error);
    }
};

// Enhanced recovery function
export const retrieveBookingData = (txnid?: string) => {
    try {
        // First, try sessionStorage
        const sessionData = sessionStorage.getItem('bookingData');
        if (sessionData) {
            console.log('Retrieved booking data from sessionStorage');
            return JSON.parse(sessionData);
        }

        // If txnid provided, try to get specific booking from localStorage
        if (txnid) {
            const specificData = localStorage.getItem('truedeal_booking_' + txnid);
            if (specificData) {
                console.log('Retrieved booking data from localStorage with txnid');
                return JSON.parse(specificData);
            }
        }

        // Try to get the latest booking from localStorage
        const latestTxnid = localStorage.getItem('truedeal_latest_booking');
        if (latestTxnid) {
            const latestData = localStorage.getItem('truedeal_booking_' + latestTxnid);
            if (latestData) {
                console.log('Retrieved latest booking data from localStorage');
                return JSON.parse(latestData);
            }
        }

        console.log('No booking data found in storage');
        return null;
    } catch (error) {
        console.error('Error retrieving booking data:', error);
        return null;
    }
};

// Clean up old booking data (keep only last 10 bookings)
export const cleanupOldBookingData = () => {
    try {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('truedeal_booking_'));
        if (keys.length > 10) {
            // Sort by timestamp and remove oldest
            const bookingsWithTime = keys.map(key => {
                try {
                    const data = JSON.parse(localStorage.getItem(key) || '{}');
                    return { key, timestamp: data.timestamp || '1970-01-01' };
                } catch {
                    return { key, timestamp: '1970-01-01' };
                }
            }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            
            // Remove oldest entries beyond 10
            bookingsWithTime.slice(10).forEach(({ key }) => {
                localStorage.removeItem(key);
            });
        }
    } catch (error) {
        console.error('Error cleaning up old booking data:', error);
    }
};

export const initiatePayment = async (paymentData: PaymentData) => {
    try {
        const config = getPayUConfig();
        
        // Store booking data with improved persistence
        storeBookingData({
            packageDetails: paymentData.packageDetails,
            customerDetails: paymentData.customerDetails,
            amount: paymentData.amount,
            txnid: paymentData.txnid
        });

        // Cleanup old data
        cleanupOldBookingData();

        console.log('Initiating payment with config:', {
            key: config.key,
            url: config.url,
            amount: paymentData.amount,
            txnid: paymentData.txnid
        });

        // Validate required fields
        if (!paymentData.firstname || !paymentData.email || !paymentData.phone) {
            throw new Error('Missing required customer details: firstname, email, phone');
        }

        if (!paymentData.amount || paymentData.amount <= 0) {
            throw new Error('Invalid payment amount');
        }

        // Generate hash on server side for security
        const response = await fetch('/api/generate-payu-hash', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key: config.key,
                txnid: paymentData.txnid,
                amount: paymentData.amount,
                productinfo: paymentData.productinfo,
                firstname: paymentData.firstname,
                email: paymentData.email,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to generate payment hash');
        }

        const { hash } = await response.json();

        console.log('Hash generated successfully');

        // Create PayU form and submit
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = config.url;
        form.style.display = 'none';

        // PayU required fields for hosted checkout - ALL MANDATORY FIELDS INCLUDED
        const fields = {
            key: config.key,
            txnid: paymentData.txnid,
            amount: paymentData.amount.toString(),
            productinfo: paymentData.productinfo,
            firstname: paymentData.firstname,
            lastname: paymentData.lastname || '', // Can be empty but must be present
            email: paymentData.email,
            phone: paymentData.phone,
            address1: paymentData.address1 || '',
            address2: '',
            city: paymentData.city || '',
            state: paymentData.state || '',
            zipcode: paymentData.zipcode || '',
            country: paymentData.country || 'India',
            surl: config.successUrl,
            furl: config.failureUrl,
            hash: hash,
            // Additional empty UDF fields - required for hash calculation
            udf1: '',
            udf2: '',
            udf3: '',
            udf4: '',
            udf5: '',
        };

        console.log('PayU form fields being submitted:', {
            ...fields,
            hash: hash.substring(0, 20) + '...' // Log partial hash for debugging
        });

        // Add fields to form
        Object.entries(fields).forEach(([key, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value || ''; // Ensure no undefined values
            form.appendChild(input);
        });

        // Add the form to the document
        document.body.appendChild(form);
        
        console.log('Submitting PayU form to:', config.url);
        console.log('Success URL set to:', config.successUrl);
        console.log('Failure URL set to:', config.failureUrl);
        
        // Store transaction ID for recovery
        localStorage.setItem('current_payment_txnid', paymentData.txnid);
        
        // Submit form
        form.submit();
        
        // Set up a fallback timeout in case PayU doesn't redirect properly
        setTimeout(() => {
            if (document.body.contains(form)) {
                console.log('PayU form still present after 5 seconds, cleaning up');
                document.body.removeChild(form);
            }
            
            // Check if we're still on the same page after 10 seconds (payment might have failed)
            setTimeout(() => {
                if (window.location.pathname === '/fixedDeparture' || window.location.pathname.includes('europe')) {
                    console.log('Still on booking page after 10 seconds, payment might have issues');
                    // Could show a message to user here
                }
            }, 5000);
        }, 5000);
    } catch (error) {
        console.error('Payment initiation error:', error);
        throw new Error(`Payment initiation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};

export const verifyPaymentResponse = (response: any) => {
    // This would typically verify the hash from PayU response
    // For security, this should be done on the server side
    const { status, txnid, amount, hash } = response;
    
    return {
        isValid: status === 'success',
        txnid,
        amount,
        status
    };
}; 