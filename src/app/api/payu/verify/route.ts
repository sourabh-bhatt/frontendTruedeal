import { NextResponse } from 'next/server';
import crypto from 'crypto';

const PAYU_SALT = process.env.PAYU_SALT;

function verifyHash(params: any) {
  // PayU response hash sequence
  const reverseHashSequence = "SALT|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key";
  
  const hashString = reverseHashSequence.split('|')
    .map(param => {
      if (param === 'SALT') return PAYU_SALT;
      return params[param] || '';
    })
    .join('|');

  const calculatedHash = crypto.createHash('sha512').update(hashString).digest('hex');
  return calculatedHash === params.hash;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Log the received data for debugging
    console.log('Received payment data:', data);

    // Accept both 'success' and 'Success' status
    const isSuccessful = data.status?.toLowerCase() === 'success';
    
    // Verify hash
    const isValid = verifyHash(data);
    
    if (!isValid) {
      console.log('Hash verification failed');
      return NextResponse.json({ success: false, error: 'Invalid hash' }, { status: 400 });
    }

    if (!isSuccessful) {
      console.log('Payment status not successful:', data.status);
      return NextResponse.json({ success: false, error: 'Payment failed' }, { status: 400 });
    }

    console.log('Payment verification successful');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 500 });
  }
} 