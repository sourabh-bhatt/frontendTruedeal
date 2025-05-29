import { NextResponse } from 'next/server';
// Import the in-memory store from result endpoint
import { paymentResults } from '../result/route';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const txnid = searchParams.get('txnid');
  if (!txnid) {
    return NextResponse.json({ error: 'Missing txnid' }, { status: 400 });
  }
  const result = paymentResults[txnid];
  if (!result) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, result });
} 