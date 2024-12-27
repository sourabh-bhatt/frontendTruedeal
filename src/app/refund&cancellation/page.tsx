import React from 'react'

export default function RefundAndCancellation() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#017ae3] to-[#00f6ff] text-white p-8 mt-10">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Refund & Cancellation Policy</h1>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">1. Cancellation Policy</h2>
                    <p className="mb-4">
                        Cancellations made 48 hours or more before the scheduled service date are eligible for a full refund.
                        Cancellations made within 48 hours of the scheduled service date are subject to a 50% cancellation fee.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">2. Refund Process</h2>
                    <p className="mb-4">
                        Refunds will be processed within 5-10 business days and will be credited back to the original form of payment.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">3. Modifications</h2>
                    <p className="mb-4">
                        Modifications to bookings are subject to availability and may incur additional charges. Please contact our customer service team for assistance with modifications.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">4. No-Show Policy</h2>
                    <p className="mb-4">
                        Failure to show up for a scheduled service without prior cancellation will result in a full charge and no refund will be issued.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">5. Force Majeure</h2>
                    <p className="mb-4">
                        In the event of cancellations due to circumstances beyond our control (e.g., natural disasters, government actions), we will work with you to reschedule or provide a full refund.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">6. Special Promotions and Discounted Rates</h2>
                    <p className="mb-4">
                        Bookings made under special promotions or discounted rates may be subject to different cancellation and refund policies. Please refer to the specific terms of the promotion or contact our customer service for details.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
                    <p className="mb-4">
                        If you have any issues or disputes regarding refunds or cancellations, please contact our customer service team. We are committed to resolving any problems fairly and efficiently.
                    </p>
                </div>
            </div>
        </div>
    )
}

