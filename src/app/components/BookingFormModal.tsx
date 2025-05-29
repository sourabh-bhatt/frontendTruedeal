'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { toast } from 'react-hot-toast';
import { z } from 'zod';

// Add form schema
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Invalid phone number"),
    departureCity: z.string().min(1, "Departure city is required")
});

interface BookingFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    destinationName: string;
    price?: number;
    dates?: string;
}

export function BookingFormModal({ 
    isOpen, 
    onClose, 
    destinationName,
    price = 0,
}: BookingFormModalProps) {
    const [formData, setFormData] = useState({
        destination: destinationName,
        departureCity: '',
        name: '',
        phone: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Initiate payment
            const response = await fetch('/api/payu', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: price,
                    productinfo: destinationName,
                    firstname: formData.name,
                    email: formData.email,
                    phone: formData.phone
                })
            });

            const data = await response.json();
            
            if (!data.success) {
                throw new Error('Payment initiation failed');
            }

            // Create form and submit to PayU
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = data.payuUrl;

            // Add all payment parameters as hidden fields
            Object.entries(data.paymentData).forEach(([key, value]) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value as string;
                form.appendChild(input);
            });

            // Append form to body and submit
            document.body.appendChild(form);
            form.submit();

        } catch (error) {
            console.error("Error:", error);
            setSubmitError('Failed to process payment. Please try again.');
            toast.error('Payment initiation failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Book {destinationName}</DialogTitle>
                    {price > 0 && (
                        <p className="text-sm text-gray-500">
                            Amount to pay: ₹{price.toLocaleString('en-IN')}
                        </p>
                    )}
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="destination">DESTINATION</Label>
                        <Input
                            id="destination"
                            value={formData.destination}
                            disabled
                            className="bg-muted"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="departureCity">DEPARTURE CITY</Label>
                        <Input
                            id="departureCity"
                            required
                            value={formData.departureCity}
                            onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">NAME</Label>
                        <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">PHONE</Label>
                        <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">EMAIL ID</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hover:from-[#00f6ff] hover:to-[#017ae3] transition-all duration-300"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Processing Payment...' : 'Proceed to Payment'}
                    </Button>
                    {submitError && (
                        <p className="text-red-500 text-sm text-center">{submitError}</p>
                    )}
                </form>
            </DialogContent>
        </Dialog>
    );
}

