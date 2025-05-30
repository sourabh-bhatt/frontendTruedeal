'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { BookingFormModal } from './BookingFormModal';
import { PaymentModal } from './PaymentModal';
import { CreditCard, MessageCircle } from 'lucide-react';

interface BookingOptionsModalProps {
    isOpen: boolean;
    onClose: () => void;
    destinationName: string;
    packageDetails: {
        id: string;
        country: string;
        days: number;
        nights: number;
        amount?: number;
        dateStart: string;
        dateEnd: string;
        images?: string[];
        hotelDetails?: Array<{ city: string; hotel: string; }>;
    };
}

export function BookingOptionsModal({ 
    isOpen, 
    onClose, 
    destinationName,
    packageDetails
}: BookingOptionsModalProps) {
    const [showEnquiryModal, setShowEnquiryModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleEnquireNow = () => {
        onClose();
        setShowEnquiryModal(true);
    };

    const handleBookNow = () => {
        onClose();
        setShowPaymentModal(true);
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[500px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                            Book Your Journey
                        </DialogTitle>
                        <p className="text-center text-gray-600 mt-2">
                            {destinationName}
                        </p>
                    </DialogHeader>
                    
                    <div className="space-y-6 py-6">
                        {/* Package Summary */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-700">Duration:</span>
                                <span className="font-semibold">{packageDetails.days}D/{packageDetails.nights}N</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-700">Dates:</span>
                                <span className="font-semibold">{packageDetails.dateStart} - {packageDetails.dateEnd}</span>
                            </div>
                            {packageDetails.amount && (
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Price:</span>
                                    <span className="font-bold text-xl text-green-600">
                                        ₹{packageDetails.amount.toLocaleString('en-IN')}/-
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Booking Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Enquire Now Option */}
                            <div className="border rounded-lg p-6 hover:border-blue-300 transition-colors">
                                <div className="text-center">
                                    <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                                    <h3 className="text-lg font-semibold mb-2">Enquire Now</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Get detailed information and customized quotes
                                    </p>
                                    <Button 
                                        onClick={handleEnquireNow}
                                        variant="outline"
                                        className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                                    >
                                        Get Callback
                                    </Button>
                                </div>
                            </div>

                            {/* Book Now Option */}
                            <div className="border rounded-lg p-6 hover:border-green-300 transition-colors">
                                <div className="text-center">
                                    <CreditCard className="h-12 w-12 mx-auto mb-4 text-green-500" />
                                    <h3 className="text-lg font-semibold mb-2">Book Now</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Secure instant booking with payment
                                    </p>
                                    <Button 
                                        onClick={handleBookNow}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                                        disabled={!packageDetails.amount}
                                    >
                                        {packageDetails.amount ? 'Pay & Book' : 'Price on Request'}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center text-sm text-gray-500">
                            <p>✓ Secure payment gateway</p>
                            <p>✓ Instant booking confirmation</p>
                            <p>✓ 24/7 customer support</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Enquiry Modal */}
            <BookingFormModal
                isOpen={showEnquiryModal}
                onClose={() => setShowEnquiryModal(false)}
                destinationName={destinationName}
            />

            {/* Payment Modal */}
            <PaymentModal
                isOpen={showPaymentModal}
                onClose={() => setShowPaymentModal(false)}
                packageDetails={packageDetails}
            />
        </>
    );
} 