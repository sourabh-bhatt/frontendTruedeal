'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, CreditCard, Shield, Calendar, MapPin } from 'lucide-react';
import { generatePayUHash, initiatePayment } from '@/app/utils/paymentUtils';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
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

interface CustomerDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    numberOfTravelers: number;
}

export function PaymentModal({ isOpen, onClose, packageDetails }: PaymentModalProps) {
    const [step, setStep] = useState<'details' | 'payment' | 'processing'>('details');
    const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        numberOfTravelers: 1,
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const totalAmount = (packageDetails.amount || 0) * customerDetails.numberOfTravelers;

    const handleCustomerDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('payment');
    };

    const handlePayment = async () => {
        setIsProcessing(true);
        setError(null);
        setStep('processing');

        try {
            console.log('Starting payment process...');
            
            // Validate required fields
            if (!customerDetails.firstName || !customerDetails.email || !customerDetails.phone) {
                throw new Error('Please fill in all required fields');
            }

            if (!packageDetails.amount || packageDetails.amount <= 0) {
                throw new Error('Invalid package amount');
            }

            // Generate transaction ID
            const txnId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            
            console.log('Generated transaction ID:', txnId);
            console.log('Package details:', packageDetails);
            console.log('Customer details:', customerDetails);
            
            // Prepare payment data
            const paymentData = {
                amount: totalAmount,
                txnid: txnId,
                productinfo: `${packageDetails.days} Days ${packageDetails.country} Tour Package`,
                firstname: customerDetails.firstName,
                lastname: customerDetails.lastName || 'Customer',
                email: customerDetails.email,
                phone: customerDetails.phone,
                address1: customerDetails.address,
                city: customerDetails.city,
                state: customerDetails.state,
                zipcode: customerDetails.zipCode,
                country: 'India',
                packageDetails: packageDetails,
                customerDetails: customerDetails,
            };

            console.log('Payment data prepared:', {
                ...paymentData,
                packageDetails: 'object',
                customerDetails: 'object'
            });

            // Initiate payment
            console.log('Initiating payment...');
            await initiatePayment(paymentData);
        } catch (error) {
            console.error('Payment error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Payment failed. Please try again.';
            setError(errorMessage);
            setStep('payment');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleInputChange = (field: keyof CustomerDetails, value: string | number) => {
        setCustomerDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] bg-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                        {step === 'details' && 'Traveler Details'}
                        {step === 'payment' && 'Payment Summary'}
                        {step === 'processing' && 'Processing Payment'}
                    </DialogTitle>
                </DialogHeader>

                {step === 'details' && (
                    <form onSubmit={handleCustomerDetailsSubmit} className="space-y-6">
                        {/* Package Summary */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-blue-500" />
                                Package Summary
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-600">Destination:</span>
                                    <p className="font-semibold">{packageDetails.country}</p>
                                </div>
                                <div>
                                    <span className="text-gray-600">Duration:</span>
                                    <p className="font-semibold">{packageDetails.days}D/{packageDetails.nights}N</p>
                                </div>
                                <div>
                                    <span className="text-gray-600">Dates:</span>
                                    <p className="font-semibold flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {packageDetails.dateStart}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-gray-600">Price per person:</span>
                                    <p className="font-semibold text-green-600">₹{packageDetails.amount?.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Customer Details Form */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Customer Information</h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First Name *</Label>
                                    <Input
                                        id="firstName"
                                        required
                                        value={customerDetails.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="lastName">Last Name *</Label>
                                    <Input
                                        id="lastName"
                                        required
                                        value={customerDetails.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        value={customerDetails.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone *</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={customerDetails.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="address">Address *</Label>
                                <Input
                                    id="address"
                                    required
                                    value={customerDetails.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <Label htmlFor="city">City *</Label>
                                    <Input
                                        id="city"
                                        required
                                        value={customerDetails.city}
                                        onChange={(e) => handleInputChange('city', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="state">State *</Label>
                                    <Input
                                        id="state"
                                        required
                                        value={customerDetails.state}
                                        onChange={(e) => handleInputChange('state', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="zipCode">ZIP Code *</Label>
                                    <Input
                                        id="zipCode"
                                        required
                                        value={customerDetails.zipCode}
                                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="travelers">Number of Travelers *</Label>
                                <Input
                                    id="travelers"
                                    type="number"
                                    min="1"
                                    max="20"
                                    required
                                    value={customerDetails.numberOfTravelers}
                                    onChange={(e) => handleInputChange('numberOfTravelers', parseInt(e.target.value) || 1)}
                                />
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">Total Amount:</span>
                                <span className="text-2xl font-bold text-green-600">
                                    ₹{totalAmount.toLocaleString('en-IN')}/-
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                {customerDetails.numberOfTravelers} × ₹{packageDetails.amount?.toLocaleString('en-IN')}
                            </p>
                        </div>

                        <Button type="submit" className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white text-lg py-6">
                            Continue to Payment
                        </Button>
                    </form>
                )}

                {step === 'payment' && (
                    <div className="space-y-6">
                        {/* Payment Summary */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Package: {packageDetails.country} ({packageDetails.days}D/{packageDetails.nights}N)</span>
                                    <span>₹{packageDetails.amount?.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Number of Travelers:</span>
                                    <span>{customerDetails.numberOfTravelers}</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total Amount:</span>
                                    <span className="text-green-600">₹{totalAmount.toLocaleString('en-IN')}/-</span>
                                </div>
                            </div>
                        </div>

                        {/* Customer Details Summary */}
                        <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Booking Details</h4>
                            <p><strong>Name:</strong> {customerDetails.firstName} {customerDetails.lastName}</p>
                            <p><strong>Email:</strong> {customerDetails.email}</p>
                            <p><strong>Phone:</strong> {customerDetails.phone}</p>
                        </div>

                        {/* Security Features */}
                        <div className="flex items-center gap-4 justify-center text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <Shield className="h-4 w-4 text-green-500" />
                                <span>Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CreditCard className="h-4 w-4 text-blue-500" />
                                <span>PayU Gateway</span>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                                {error}
                            </div>
                        )}

                        <div className="flex gap-4">
                            <Button 
                                variant="outline" 
                                onClick={() => setStep('details')}
                                className="flex-1"
                            >
                                Back
                            </Button>
                            <Button 
                                onClick={handlePayment}
                                disabled={isProcessing}
                                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white"
                            >
                                {isProcessing ? 'Processing...' : 'Pay Now'}
                            </Button>
                        </div>
                    </div>
                )}

                {step === 'processing' && (
                    <div className="text-center py-12">
                        <Loader2 className="h-16 w-16 animate-spin mx-auto mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Processing Your Payment</h3>
                        <p className="text-gray-600">Please wait while we securely process your payment...</p>
                        <div className="mt-6 text-sm text-gray-500">
                            <p>✓ Encryption enabled</p>
                            <p>✓ Secure transaction</p>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
} 