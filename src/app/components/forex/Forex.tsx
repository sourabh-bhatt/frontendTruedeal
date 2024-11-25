
"use client";

import Image from 'next/image'

export default function Forex() {
    return (
        <div className="w-full">
            <div className="relative h-[200px] md:h-[200px] overflow-hidden bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                <div className="absolute inset-0 bg-[url('/Assets/Forex/forexBanner.webp')] bg-cover bg-center opacity-80" />

                <div className="relative h-full max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between h-full">
                        <div className="flex flex-col mb-4 md:mb-0 md:ml-[8rem] text-center md:text-left">
                            <h1 className="text-white space-y-1">
                                <span className="block text-2xl md:text-3xl font-poppins font-normal tracking-wider leading-3">LOOKING FOR</span>
                                <span className="block text-3xl md:text-4xl font-bold font-poppins tracking-wide">EXCLUSIVE</span>
                                <span className="block text-3xl md:text-4xl font-bold font-poppins tracking-wide leading-3 underline">DESTINATIONS?</span>
                            </h1>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 md:mr-[16rem]">
                            {/* Foreign Currency Exchange */}
                            <div className="flex flex-col items-center justify-center w-28 md:w-40 h-24 md:h-32 text-white">
                                <Image alt='illustrations' src="/Assets/Forex/a1.webp" width={40} height={40} className="mb-2 md:w-[60px] md:h-[60px]" />
                                <p className="text-xs md:text-sm text-center font-poppins font-semibold leading-tight">
                                    Almaty
                                </p>
                            </div>

                            {/* Forex Card */}
                            <div className="flex flex-col items-center justify-center w-28 md:w-40 h-24 md:h-32 text-white">
                                <Image alt='illustrations' src="/Assets/Forex/a2.webp" width={40} height={40} className="mb-2 md:w-[60px] md:h-[60px]" />
                                <p className="text-xs md:text-sm text-center font-poppins font-semibold leading-tight">
                                    Baku
                                </p>
                            </div>

                            {/* Remittance */}
                            <div className="flex flex-col items-center justify-center w-28 md:w-40 h-24 md:h-32 text-white">
                                <Image alt='illustrations' src="/Assets/Forex/a3.webp" width={40} height={40} className="mb-2 md:w-[60px] md:h-[60px]" />
                                <p className="text-xs md:text-sm text-center font-poppins font-semibold leading-tight">
                                    Japan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}