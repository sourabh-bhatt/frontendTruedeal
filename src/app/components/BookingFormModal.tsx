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
    price,
    dates 
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
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch('/api/send-booking-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            console.log("Form submitted successfully");
            setIsSubmissionSuccessful(true);
            setTimeout(() => {
                onClose();
                setIsSubmissionSuccessful(false);
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitError('Failed to send email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Book {destinationName}</DialogTitle>
                </DialogHeader>
                {isSubmissionSuccessful && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
                        <div className="text-green-600 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xl font-semibold">Enquiry submitted successfully!</p>
                        </div>
                    </div>
                )}
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
                    {submitError && (
                        <div className="text-red-500 text-sm">{submitError}</div>
                    )}
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hover:from-[#00f6ff] hover:to-[#017ae3] transition-all duration-300"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Get a Callback'}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

