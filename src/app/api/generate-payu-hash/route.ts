import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { key, txnid, amount, productinfo, firstname, email } = body;

        // Get salt from environment variables - use the correct test salt as fallback
        const salt = process.env.PAYU_SALT || 'TuxqAugd'; // Correct PayU test salt for key JPM7Fg
        
        // Validate required fields
        if (!key || !txnid || !amount || !productinfo || !firstname || !email) {
            return NextResponse.json({ 
                error: 'Missing required fields for hash generation' 
            }, { status: 400 });
        }

        console.log('Hash generation inputs:', {
            key,
            txnid,
            amount: amount.toString(),
            productinfo,
            firstname,
            email,
            salt: salt.substring(0, 5) + '...' // Log partial salt for debugging
        });

        // PayU hash string format: key|txnid|amount|productinfo|firstname|email|||||||||||salt
        // Convert amount to string to ensure consistency
        const hashString = `${key}|${txnid}|${amount.toString()}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
        
        console.log('Hash string (first 150 chars):', hashString.substring(0, 150) + '...');
        
        // Generate SHA512 hash
        const hash = CryptoJS.SHA512(hashString).toString();
        
        console.log('Generated hash (first 20 chars):', hash.substring(0, 20) + '...');

        return NextResponse.json({ hash });
    } catch (error) {
        console.error('Error generating PayU hash:', error);
        return NextResponse.json({ error: 'Failed to generate hash' }, { status: 500 });
    }
} 