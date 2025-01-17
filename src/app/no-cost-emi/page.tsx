'use client'

import React from 'react'
import BoxReveal from '@/components/ui/box-reveal'
import NumberTicker from "@/components/ui/number-ticker"

const NoCostEMIPage = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-4 sm:py-8">
            <div className="relative overflow-hidden">
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-blue-100 p-4 sm:p-8 relative overflow-hidden">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 relative z-10">
                                {/* Left Section - Text Content */}
                                <div className="flex-1 space-y-2 sm:space-y-3 w-full sm:w-auto">
                                    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                                        <div>
                                            <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                                Travel Now, Pay Later
                                            </h2>
                                            <p className="text-sm sm:text-base text-gray-600 mt-1">
                                                Experience luxury with No Cost EMI
                                            </p>
                                        </div>
                                    </BoxReveal>

                                    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                                        <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                                            <li className="flex items-center space-x-2">
                                                <span className="text-blue-600">→</span>
                                                <span>0% Interest on all packages</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="text-blue-600">→</span>
                                                <span>Flexible 3-12 months EMI plans</span>
                                            </li>
                                        </ul>
                                    </BoxReveal>
                                </div>

                                {/* Right Section - Stats */}
                                <div className="flex gap-3 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end">
                                    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                                        <div className="flex flex-col items-center p-3 sm:p-4 bg-white/80 rounded-lg shadow-md min-w-[80px] sm:min-w-[100px]">
                                            <div className="flex items-center">
                                                <span className="text-xl sm:text-2xl font-bold text-blue-600">0</span>
                                                <span className="text-lg sm:text-xl font-bold text-blue-600 ml-1">%</span>
                                            </div>
                                            <span className="text-xs sm:text-sm text-gray-600 mt-1">Interest</span>
                                        </div>
                                    </BoxReveal>

                                    <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
                                        <div className="flex flex-col items-center p-3 sm:p-4 bg-white/80 rounded-lg shadow-md min-w-[80px] sm:min-w-[100px]">
                                            <NumberTicker
                                                value={12}
                                                className="text-xl sm:text-2xl font-bold text-blue-600"
                                            />
                                            <span className="text-xs sm:text-sm text-gray-600 mt-1">Months</span>
                                        </div>
                                    </BoxReveal>
                                </div>
                            </div>

                            {/* Background Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>
                            <div className="absolute -bottom-8 -left-8 w-24 sm:w-32 h-24 sm:h-32 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoCostEMIPage