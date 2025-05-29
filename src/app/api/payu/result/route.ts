import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory store for payment results (for demo only; use DB in production)
const paymentResults: Record<string, any> = {};

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
    // PayU sends form-urlencoded, not JSON
    const body = await req.text();
    const params = Object.fromEntries(new URLSearchParams(body));
    const txnid = params.txnid;
    const status = params.status?.toLowerCase();
    const isValid = verifyHash(params);
    const packageId = params.productinfo || 'unknown';

    // Store result (for demo; use DB in production)
    paymentResults[txnid] = {
      ...params,
      verified: isValid,
      receivedAt: Date.now(),
    };

    // Redirect user to the package page with payment status and txnid
    if (isValid && status === 'success') {
      return NextResponse.redirect(`/fixedDeparture/${packageId}?payment=success&txnid=${txnid}`, 302);
    } else {
      return NextResponse.redirect(`/fixedDeparture/${packageId}?payment=failure&txnid=${txnid}`, 302);
    }
  } catch (error) {
    return NextResponse.redirect(`/fixedDeparture/unknown?payment=failure`, 302);
  }
}

// For demo: export the store for status endpoint
export { paymentResults };
