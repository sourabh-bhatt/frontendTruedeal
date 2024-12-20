// 'use client';

// import { useState } from 'react';
// import { X } from 'lucide-react';
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog"

// interface BookingFormModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     destinationName: string;
// }

// export function BookingFormModal({ isOpen, onClose, destinationName }: BookingFormModalProps) {
//     const [formData, setFormData] = useState({
//         destination: destinationName,
//         departureCity: '',
//         name: '',
//         phone: '',
//         email: ''
//     });

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             console.log("Form submitted successfully");
//             onClose();
//         } catch (error) {
//             console.error("Error submitting form:", error);
//         }
//     };

//     return (
//         <Dialog open={isOpen} onOpenChange={onClose}>
//             <DialogContent className="sm:max-w-[425px] bg-white">
//                 <DialogHeader>
//                     <DialogTitle>Need Assistance?</DialogTitle>
//                     <button onClick={onClose} className="absolute top-2 right-2">
//                         <X className="w-6 h-6" aria-label="Close" />
//                     </button>
//                 </DialogHeader>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="space-y-2">
//                         <Label htmlFor="destination">DESTINATION</Label>
//                         <Input
//                             id="destination"
//                             value={formData.destination}
//                             disabled
//                             className="bg-muted"
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <Label htmlFor="departureCity">DEPARTURE CITY</Label>
//                         <Input
//                             id="departureCity"
//                             required
//                             value={formData.departureCity}
//                             onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <Label htmlFor="name">NAME</Label>
//                         <Input
//                             id="name"
//                             required
//                             value={formData.name}
//                             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <Label htmlFor="phone">PHONE</Label>
//                         <Input
//                             id="phone"
//                             type="tel"
//                             required
//                             value={formData.phone}
//                             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <Label htmlFor="email">EMAIL ID</Label>
//                         <Input
//                             id="email"
//                             type="email"
//                             required
//                             value={formData.email}
//                             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         />
//                     </div>
//                     <Button type="submit" className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hover:from-[#00f6ff] hover:to-[#017ae3] transition-all duration-300">
//                         Get a Callback
//                     </Button>
//                 </form>
//             </DialogContent>
//         </Dialog>
//     );
// }

// fix

'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
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
}

export function BookingFormModal({ isOpen, onClose, destinationName }: BookingFormModalProps) {
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
            onClose();
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
                    <DialogTitle>Need Assistance?</DialogTitle>
                    <button onClick={onClose} className="absolute top-2 right-2">
                        <X className="w-6 h-6" aria-label="Close" />
                    </button>
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

