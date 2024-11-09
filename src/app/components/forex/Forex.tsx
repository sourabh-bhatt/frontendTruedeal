"use client"

import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { CircleDollarSign, CreditCard, Globe } from "lucide-react"

export default function Forex() {
    return (
        <div className="w-full">
            <div className="relative h-[200px] overflow-hidden bg-gradient-to-r from-violet-600 to-red-600">
                {/* Background with reduced opacity */}
                <div className="absolute inset-0 bg-[url('/Assets/Forex/forexBanner.jpg')] bg-cover bg-center opacity-20" />

                {/* Content Container */}
                <div className="relative h-full max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between h-full">
                        {/* Left side - Text */}
                        <div className="flex flex-col ml-[8rem]">
                            <h1 className="text-white space-y-1">
                                <span className="block text-3xl font-poppins font-regular font-normal tracking-wider leading-3">NEED</span>
                                <span className="block text-4xl font-bold font-poppins tracking-wide ">FOREIGN</span>
                                <span className="block text-4xl font-bold font-poppins tracking-wide leading-3 underline ">CURRENCY?</span>
                            </h1>
                        </div>

                        {/* Right side - Services */}
                        <div className="flex items-center gap-12 mr-[20rem]">
                            {/* Foreign Currency Exchange */}
                            <div className="flex flex-col items-center gap-3 text-white">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <CircleDollarSign className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-center whitespace-nowrap">
                                    Foreign Currency<br />Exchange
                                </p>
                            </div>

                            {/* Forex Card */}
                            <div className="flex flex-col items-center gap-3 text-white">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <CreditCard className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-center">
                                    Forex Card
                                </p>
                            </div>

                            {/* Remittance */}
                            <div className="flex flex-col items-center gap-3 text-white">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <Globe className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-center">
                                    Remittance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}