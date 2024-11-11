"use client"

import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { CircleDollarSign, CreditCard, Globe } from "lucide-react"

export default function Forex() {
    return (
        <div className="w-full">
            <div className="relative h-[200px] overflow-hidden bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">

                <div className="absolute inset-0 bg-[url('/Assets/Forex/forexBanner.webp')] bg-cover bg-center opacity-80" />

                <div className="relative h-full max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between h-full">

                        <div className="flex flex-col ml-[8rem]">
                            <h1 className="text-white space-y-1 ">
                                <span className="block text-3xl font-poppins font-regular font-normal tracking-wider leading-3">NEED</span>
                                <span className="block text-4xl font-bold font-poppins tracking-wide ">FOREIGN</span>
                                <span className="block text-4xl font-bold font-poppins tracking-wide leading-3 underline ">CURRENCY?</span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-12 mr-[16rem]">
                            {/* Foreign Currency Exchange */}
                            <div className="relative flex flex-col items-center gap-3 text-white">
                                <div className="w-36 h-28 flex items-center justify-center relative">
                                    <Image alt='illustrations' src="/Assets/Forex/a1.webp" width={60} height={60} className="" />
                                    <p className="relative text-sm font-medium text-center bg-opacity-50 px-2 py-1 rounded">
                                        Foreign Currency Exchange
                                    </p>
                                </div>
                            </div>

                            {/* Forex Card */}
                            <div className="relative flex flex-col items-center gap-3 text-white">
                                <div className="w-36 h-28 flex items-center justify-center relative">
                                    <Image alt='illustrations' src="/Assets/Forex/a2.webp" width={60} height={60} className="" />
                                    <p className="relative text-sm font-medium text-center bg-opacity-50 px-2 py-1 rounded">
                                        Forex Card
                                    </p>
                                </div>
                            </div>

                            {/* Remittance */}
                            <div className="relative flex flex-col items-center gap-3 text-white">
                                <div className="w-36 h-28 flex items-center justify-center relative">
                                    <Image alt='illustrations' src="/Assets/Forex/a3.webp" width={60} height={60} className="" />
                                    <p className="relative text-sm font-medium text-center bg-opacity-50 px-2 py-1 rounded">
                                        Remittance
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}