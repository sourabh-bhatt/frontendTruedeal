'use client';

import Image from "next/image"
import { useEffect } from "react"

export default function Component() {
    const sponsors = [
        { name: "Aussie Specialist Australia", logo: "/logoBrands/aussie.jpeg" },
        { name: "Canada Keep Exploring", logo: "/logoBrands/canada.png" },
        { name: "IATA", logo: "/logoBrands/iata-logo-header.svg" },
        { name: "Kiwi Specialist", logo: "/logoBrands/kiwi.png" },
        { name: "Royal Carribean International", logo: "/logoBrands/royalCarribean.svg" },
        { name: "Star Cruises", logo: "/logoBrands/Star_cruises_logo.svg.png" },
        { name: "Swiss", logo: "/logoBrands/swiss-logo.svg" },

    ]

    useEffect(() => {
        const style = document.createElement('style')
        style.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 10s linear infinite;
      }
      .pause-on-hover:hover .animate-scroll {
        animation-play-state: paused;
      }
    `
        document.head.appendChild(style)
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    return (
        <section className="py-16 px-4 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl text-center mb-12 font-poppins">
                    <span className="font-bold font-poppins">Partnered</span> <span className="text-gray-500">with the best in the industry</span>
                </h2>

                <div className="relative pause-on-hover">
                    <div className="flex animate-scroll">
                        {[...sponsors, ...sponsors].map((sponsor, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[200px] mx-8 flex items-center justify-center"
                            >
                                <Image
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    width={120}
                                    height={50}
                                    className="grayscale object-contain h-12 hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}