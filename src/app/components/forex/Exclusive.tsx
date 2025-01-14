"use client";

import Link from 'next/link'
import Image from 'next/image'

export default function Exclusive() {
    return (
        <div className="w-full">
            <div className="relative h-[400px] sm:h-[300px] md:h-[200px] overflow-hidden">
                {/* Background image with subtle overlay */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-[url('/Assets/Forex/currency/japanbaku.webp')] 
                        bg-cover bg-center bg-no-repeat"
                    />
                    {/* Reduced overlay opacity */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 py-6 sm:py-8">
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between h-full gap-8 sm:gap-0">
                        {/* Text Section - Better mobile spacing */}
                        <div className="flex flex-col sm:mb-0 sm:ml-[8rem] text-center sm:text-left">
                            <h1 className="text-white mb-6 sm:mb-0">
                                <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-1">
                                    <span className="text-2xl sm:text-2xl md:text-3xl font-poppins font-semibold tracking-wider text-white 
                                                 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
                                                 animate-pulse-bright">
                                        LOOKING FOR
                                    </span>
                                    <span className="text-3xl sm:text-3xl md:text-4xl font-bold font-poppins tracking-wide text-white 
                                                 drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]
                                                 animate-shimmer-bright">
                                        EXCLUSIVE
                                    </span>
                                    <span className="text-3xl sm:text-3xl md:text-4xl font-bold font-poppins tracking-wide
                                                 bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 
                                                 bg-clip-text text-transparent 
                                                 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
                                                 bg-[length:200%_100%] animate-shimmer-bright">
                                        DESTINATIONS?
                                    </span>
                                </div>
                            </h1>
                        </div>

                        {/* Icons Section - Better mobile layout */}
                        <div className="flex justify-center space-x-8 sm:space-x-6 md:space-x-8 sm:mr-[8rem] md:mr-[16rem]">
                            {/* Almaty */}
                            <Link href="/trending/almaty" className="group relative">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px] 
                                                  rounded-xl overflow-hidden 
                                                  border-2 border-white/30 group-hover:border-yellow-300 transition-all duration-300
                                                  shadow-lg group-hover:shadow-yellow-300/40
                                                  bg-yellow-400/20 group-hover:bg-yellow-400/30
                                                  animate-glow-bright">
                                        <Image
                                            src="/Assets/Forex/currency/almaty.webp"
                                            alt="Almaty"
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                                            quality={100}
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 group-hover:opacity-0 transition-opacity duration-300" />
                                    </div>
                                    <div className="mt-3 sm:mt-2 relative">
                                        <p className="text-sm sm:text-sm md:text-base font-poppins font-medium
                                                    text-white group-hover:text-yellow-300 
                                                    transition-colors duration-300
                                                    animate-pulse-bright">
                                            Almaty
                                        </p>
                                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 
                                                      bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300
                                                      group-hover:w-full transition-all duration-300" />
                                    </div>
                                </div>
                            </Link>

                            {/* Baku */}
                            <Link href="/trending/baku" className="group relative">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px] 
                                                  rounded-xl overflow-hidden 
                                                  border-2 border-white/30 group-hover:border-yellow-300 transition-all duration-300
                                                  shadow-lg group-hover:shadow-yellow-300/40
                                                  bg-yellow-400/20 group-hover:bg-yellow-400/30
                                                  animate-glow-bright">
                                        <Image
                                            src="/Assets/Forex/currency/baku.png"
                                            alt="Baku"
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                                            quality={100}
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 group-hover:opacity-0 transition-opacity duration-300" />
                                    </div>
                                    <div className="mt-3 sm:mt-2 relative">
                                        <p className="text-sm sm:text-sm md:text-base font-poppins font-medium
                                                    text-white group-hover:text-yellow-300 
                                                    transition-colors duration-300
                                                    animate-pulse-bright">
                                            Baku
                                        </p>
                                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 
                                                      bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300
                                                      group-hover:w-full transition-all duration-300" />
                                    </div>
                                </div>
                            </Link>

                            {/* Japan */}
                            <Link href="/destinations/japan" className="group relative">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px] 
                                                  rounded-xl overflow-hidden 
                                                  border-2 border-white/30 group-hover:border-yellow-300 transition-all duration-300
                                                  shadow-lg group-hover:shadow-yellow-300/40
                                                  bg-yellow-400/20 group-hover:bg-yellow-400/30
                                                  animate-glow-bright">
                                        <Image
                                            src="/Assets/Forex/currency/japan.webp"
                                            alt="Japan"
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                                            quality={100}
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 group-hover:opacity-0 transition-opacity duration-300" />
                                    </div>
                                    <div className="mt-3 sm:mt-2 relative">
                                        <p className="text-sm sm:text-sm md:text-base font-poppins font-medium
                                                    text-white group-hover:text-yellow-300 
                                                    transition-colors duration-300
                                                    animate-pulse-bright">
                                            Japan
                                        </p>
                                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 
                                                      bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300
                                                      group-hover:w-full transition-all duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}