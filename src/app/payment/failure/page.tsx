'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function PaymentFailure() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-gray-600 mb-6">Your payment could not be processed. Please try again.</p>
        <Button 
          onClick={() => router.back()}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
} 