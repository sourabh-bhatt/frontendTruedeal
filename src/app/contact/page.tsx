// 'use client'

// import { useState } from 'react'
// import { Mail, Phone, MapPin } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"

// export default function ContactUs() {
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const [isSubmitted, setIsSubmitted] = useState(false)

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         setIsSubmitting(true)
//         // Simulating form submission
//         setTimeout(() => {
//             setIsSubmitting(false)
//             setIsSubmitted(true)
//         }, 2000)
//     }

//     return (
//         <div className="container mx-auto px-4 py-16 md:py-24">
//             <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Truedeal</h1>
//             <div className="grid md:grid-cols-2 gap-12 items-start">
//                 <div className="space-y-8">
//                     <div>
//                         <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
//                         <p className="text-muted-foreground">
//                             We'd love to hear from you. Please fill out this form or use our contact information below.
//                         </p>
//                     </div>
//                     <div className="space-y-4">
//                         <div className="flex items-center space-x-3">
//                             <Mail className="text-primary h-5 w-5 flex-shrink-0" />
//                             <span>info@truedeal.com</span>
//                         </div>
//                         <div className="flex items-center space-x-3">
//                             <Phone className="text-primary h-5 w-5 flex-shrink-0" />
//                             <span>+91 8447498498</span>
//                         </div>
//                         <div className="flex items-start space-x-3">
//                             <MapPin className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
//                             <span>C 207, Logix Cyber Park, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301</span>
//                         </div>
//                         <div className="flex items-start space-x-3">
//                             <MapPin className='text-primary h-5 w-5 flex-shrink-0 mt-1' />
//                             <span>LGF 47, World Trade Center, beside Lalit hotel, Barakhamba Road, Connaught Place, Delhi 110006</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6">
//                     {isSubmitted ? (
//                         <div className="text-center py-8">
//                             <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
//                             <p className="text-muted-foreground">Your message has been sent successfully. We'll get back to you soon.</p>
//                         </div>
//                     ) : (
//                         <form onSubmit={handleSubmit} className="space-y-4" action="https://formsubmit.co/el/ciliza" method="POST">
//                             <input type="hidden" name="_subject" value="New contact form submission" />
//                             <input type="hidden" name="_captcha" value="false" />
//                             <div>
//                                 <Label htmlFor="name">Your Name</Label>
//                                 <Input id="name" name="name" placeholder="John Doe" required />
//                             </div>
//                             <div>
//                                 <Label htmlFor="email">Your Email</Label>
//                                 <Input id="email" name="email" type="email" placeholder="john@example.com" required />
//                             </div>
//                             <div>
//                                 <Label htmlFor="subject">Subject</Label>
//                                 <Input id="subject" name="subject" placeholder="How can we help?" required />
//                             </div>
//                             <div>
//                                 <Label htmlFor="message">Your Message</Label>
//                                 <Textarea id="message" name="message" placeholder="Please provide details about your inquiry..." className="h-32" required />
//                             </div>
//                             <Button type="submit" className="w-full" disabled={isSubmitting}>
//                                 {isSubmitting ? 'Sending...' : 'Send Message'}
//                             </Button>
//                         </form>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }


'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm } from '../actions/contactActions';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        setIsSubmitting(false);

        if (result.success) {
            toast({
                title: "Message Sent",
                description: "We've received your message and will get back to you soon.",
            });
            (e.target as HTMLFormElement).reset();
        } else {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        We&apos;d love to hear from you. Please fill out this form.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <Label htmlFor="name" className="sr-only">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="email" className="sr-only">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="phone" className="sr-only">Phone number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="subject" className="sr-only">Subject</Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <Label htmlFor="message" className="sr-only">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
                                placeholder="Your message"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#017ae3]"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

