'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function PaymentPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text mt-10">
                Pay us at
            </h1>

            <div className="space-y-6">
                {/* Bank Transfer Section */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            Bank Transfer
                        </span>
                    </div>
                    <div className="flex items-center mb-4">
                        <Image
                            src="/Assets/BankLogo/icici.png"
                            alt="ICICI Bank Logo"
                            width={60}
                            height={24}
                            className="mr-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">A/C No:</p>
                                <p className="font-medium">158005004698</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">A/C Name:</p>
                                <p className="font-medium">Truedeal Travels Pvt Ltd</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">IFSC Code:</p>
                                <p className="font-medium">ICIC0001580</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* UPI Payment Section */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            UPI Payment
                        </span>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <p className="text-sm text-gray-600">UPI us at (Google Pay/BHIM/PhonePe):</p>
                            <p className="font-medium">9919111911.eazypay@icici</p>
                        </div>
                        <Image
                            src="/Assets/BankLogo/scanner.png"
                            alt="UPI Logo"
                            width={200}
                            height={200}
                            className="my-4"
                        />
                        <div>
                            <p className="text-sm text-gray-600">UPI Name:</p>
                            <p className="font-medium">M S TRUEDEAL TRAVELS PRIVATE LIMITED</p>
                        </div>
                    </div>
                </Card>

                {/* Razorpay Link Section */}
                {/* <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            Razorpay Link
                        </span>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <p className="text-sm text-gray-600">Payment via Razorpay:</p>
                            <a
                                href="https://razorpay.me/@wanderon"
                                className="text-[#017ae3] hover:text-[#00f6ff] font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                            </a>
                        </div>
                        <p className="text-sm text-red-600 mt-2">
                            Note: A payment gateway charge 3% will be levied on using above given payment link.
                        </p>
                    </div>
                </Card> */}

                {/* How to Book Section */}
                <Card className="p-6">
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">How to Book</h1>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>30% advance payment is required at the time of booking.</li>
                        <li>100% of the total tour cost must be paid 21 days before the date of travel.</li>
                    </ul>
                </Card>

                {/* Payment Policy Section */}
                <Card className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                            Payment policy
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        For Short Haul Destination refer Short Haul payment and cancellation policy and for long haul destination refer Long Haul payment and cancellation policy.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold mb-2">Short Haul Destinations:</p>
                            <p className="text-sm text-gray-600">
                                Domestic Trips, Bhutan, Nepal, Sri Lanka, Thailand, Singapore, Bali, Dubai, Kazakhstan, Azerbaijan, Vietnam, Malaysia, Maldives, Mauritius and Similar.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Long Haul Destinations:</p>
                            <p className="text-sm text-gray-600">
                                Europe, UK, Scotland, Ireland, USA, Canada, Japan, South Korea, Turkey, Egypt, Australia, New Zealand, South Africa, Kenya, South America, Jordan, Israel and Similar.
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Note Section */}
                <Alert variant="destructive" className="bg-red-50 border-red-200">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertDescription>
                        <div className="space-y-2">
                            <p>To ensure your payment is securely processed, please make payments only to the official bank details provided on our website.</p>
                            <p>Do not make payments to any other account. We will not be responsible for any losses incurred if payments are made to unauthorized bank accounts.</p>
                            <p>If you have any questions or concerns, please contact us on - 8447498498</p>
                            <p>A payment gateway charge 3% will be levied on using above given payment link.</p>
                        </div>
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    )
}

