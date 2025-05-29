import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

interface PaymentDetails {
  status?: string;
  amount?: string;
  txnid?: string;
  firstname?: string;
  email?: string;
  productinfo?: string;
  bank_ref_num?: string;
}

export default function PaymentFailure({ params }: { params: { txnid: string } }) {
  const router = useRouter();
  const { txnid } = params;
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!txnid) {
      setLoading(false);
      return;
    }
    // Optionally fetch payment details for more info
    fetch(`/api/payu/status?txnid=${txnid}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.result) setPaymentDetails(data.result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [txnid]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <h1 className="text-xl font-bold text-gray-600">Checking Payment...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-4">Status: {paymentDetails.status || 'Unknown'}</p>
        {txnid && (
          <p className="text-gray-600 mb-6">Transaction ID: {txnid}</p>
        )}
        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <p className="text-red-700">Your payment could not be processed. Please try again or contact support.</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => router.push('/')} className="flex-1 bg-blue-600 hover:bg-blue-700">
            Return Home
          </Button>
          <Button onClick={() => router.back()} className="flex-1 bg-gray-600 hover:bg-gray-700">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
} 