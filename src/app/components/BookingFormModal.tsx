// src/components/BookingFormModal.tsx
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface BookingFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    destinationName: string;
}

export function BookingFormModal({ isOpen, onClose, destinationName }: BookingFormModalProps) {
    const [formData, setFormData] = useState({
        destination: destinationName,
        departureCity: '',
        name: '',
        phone: '',
        email: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-booking-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you for your inquiry! We will contact you soon.');
                onClose();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            alert('Something went wrong. Please try again later.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold mb-6">Need Assistance?</h2>
                <p className="text-gray-600 mb-6">Get in touch with us (step 1 of 2)</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            DESTINATION*
                        </label>
                        <input
                            type="text"
                            value={formData.destination}
                            disabled
                            className="w-full p-2 border rounded-md bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            DEPARTURE CITY*
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.departureCity}
                            onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            NAME*
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            PHONE*
                        </label>
                        <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            EMAIL ID*
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white py-2 rounded-md hover:from-[#00f6ff] hover:to-[#017ae3] transition-all duration-300"
                    >
                        Get a Callback
                    </button>
                </form>
            </div>
        </div>
    );
}