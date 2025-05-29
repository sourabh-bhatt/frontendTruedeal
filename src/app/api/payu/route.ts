import { NextResponse } from 'next/server';
import crypto from 'crypto';

const PAYU_KEY = process.env.PAYU_KEY;
const PAYU_SALT = process.env.PAYU_SALT;
const PAYU_BASE_URL = process.env.NODE_ENV === 'test' 
  ? 'https://test.payu.in/_payment'
  : 'https://secure.payu.in/_payment';

// Generate hash for PayU payment
function generateHash(params: any) {
  const hashString = `${PAYU_KEY}|${params.txnid}|${params.amount}|${params.productinfo}|${params.firstname}|${params.email}|||||||||||${PAYU_SALT}`;
  return crypto.createHash('sha512').update(hashString).digest('hex');
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Generate unique transaction ID
    const txnid = `TD${Date.now()}`;
    
    // Prepare payment parameters
    const paymentData = {
      key: PAYU_KEY,
      txnid: txnid,
      amount: data.amount,
      productinfo: data.productinfo,
      firstname: data.firstname,
      email: data.email,
      phone: data.phone,
      surl: `${process.env.NEXTAUTH_URL}/api/payu/result`,
      furl: `${process.env.NEXTAUTH_URL}/api/payu/result`,
      hash: '',
    };

    // Generate hash
    paymentData.hash = generateHash(paymentData);

    return NextResponse.json({
      success: true,
      paymentData,
      payuUrl: PAYU_BASE_URL
    });

  } catch (error) {
    console.error('PayU payment error:', error);
    return NextResponse.json({ success: false, error: 'Payment initiation failed' }, { status: 500 });
  }
} 