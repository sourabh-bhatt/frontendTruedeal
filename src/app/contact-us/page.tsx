// 'use client';

// import { useState } from 'react';
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/components/ui/use-toast"
// import { submitContactForm } from '../actions/contactActions';

// export default function ContactPage() {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const { toast } = useToast();

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const formData = new FormData(e.currentTarget);
//         const result = await submitContactForm(formData);

//         setIsSubmitting(false);

//         if (result.success) {
//             toast({
//                 title: "Message Sent",
//                 description: "We've received your message and will get back to you soon.",
//             });
//             (e.target as HTMLFormElement).reset();
//         } else {
//             toast({
//                 title: "Error",
//                 description: "Failed to send message. Please try again.",
//                 variant: "destructive",
//             });
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-10">
//             <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
//                     <p className="mt-2 text-center text-sm text-gray-600">
//                         We&apos;d love to hear from you. Please fill out this form.
//                     </p>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm -space-y-px">
//                         <div className="mb-4">
//                             <Label htmlFor="name" className="sr-only">Name</Label>
//                             <Input
//                                 id="name"
//                                 name="name"
//                                 type="text"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
//                                 placeholder="Name"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <Label htmlFor="email" className="sr-only">Email address</Label>
//                             <Input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
//                                 placeholder="Email address"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <Label htmlFor="phone" className="sr-only">Phone number</Label>
//                             <Input
//                                 id="phone"
//                                 name="phone"
//                                 type="tel"
//                                 autoComplete="tel"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
//                                 placeholder="Phone number"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <Label htmlFor="subject" className="sr-only">Subject</Label>
//                             <Input
//                                 id="subject"
//                                 name="subject"
//                                 type="text"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
//                                 placeholder="Subject"
//                             />
//                         </div>
//                         <div>
//                             <Label htmlFor="message" className="sr-only">Message</Label>
//                             <Textarea
//                                 id="message"
//                                 name="message"
//                                 rows={4}
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#017ae3] focus:border-[#017ae3] focus:z-10 sm:text-sm"
//                                 placeholder="Your message"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <Button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#017ae3]"
//                         >
//                             {isSubmitting ? 'Sending...' : 'Send Message'}
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// fix


'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from '../actions/contactActions';
import NumberTicker from '@/components/ui/number-ticker';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        setIsSubmitting(false);

        if (result.success) {
            setShowSuccess(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setShowSuccess(false), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                        We are here to help
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We are here to help and answer any questions you might have
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {showSuccess && (
                            <div className="mb-6 p-4 bg-gradient-to-r from-[#017ae3]/10 to-[#00f6ff]/10 border border-[#017ae3]/20 rounded-lg">
                                <p className="text-[#017ae3] font-medium text-center">
                                    Message sent successfully! We will get back to you soon.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#017ae3] focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#017ae3] focus:border-transparent"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#017ae3] focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#017ae3] focus:border-transparent"
                                    placeholder="What is this regarding?"
                                />
                            </div>

                            <div>
                                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#017ae3] focus:border-transparent resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-lg hover:from-[#00f6ff] hover:to-[#017ae3] transition-all duration-300 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Stats & Info */}
                    <div className="lg:pl-12 space-y-12">
                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                    <NumberTicker className="text-4xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent" value={1879} />
                                </h3>
                                <p className="mt-2 text-gray-600">Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                    <NumberTicker className="text-4xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent" value={1706} />

                                </h3>
                                <p className="mt-2 text-gray-600">Tours Completed</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                    <NumberTicker className="text-4xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent" value={40} />

                                </h3>
                                <p className="mt-2 text-gray-600"> Years of Experience</p>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                    Why Choose Us?
                                </h4>
                                <p className="text-gray-600">
                                    We are dedicated to providing exceptional service with a focus on innovation,
                                    reliability, and customer satisfaction. Our experienced team ensures your
                                    projects success from start to finish.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                    Our Commitment
                                </h4>
                                <p className="text-gray-600">
                                    We are committed to delivering high-quality solutions that meet your needs
                                    and exceed your expectations. Our support team is available 24/7 to
                                    assist you with any questions.
                                </p>
                            </div>
                            {/*  */}

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                    Our Values
                                </h4>
                                <p className="text-gray-600">
                                    Our core values are integrity, innovation, and growth. We believe in
                                    providing the best customer service and ensuring your satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

