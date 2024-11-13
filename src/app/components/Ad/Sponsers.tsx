'use client';

import Image from "next/image"
import { useEffect } from "react"

export default function Component() {
    const sponsors = [
        { name: "Amadeus", logo: "/Assets/Sponsers/1.webp" },
        { name: "Expedia", logo: "/Assets/Sponsers/2.webp" },
        { name: "Malindo Air", logo: "/Assets/Sponsers/3.webp" },
        { name: "Viator", logo: "/Assets/Sponsers/4.webp" },
        { name: "IATA", logo: "/Assets/Sponsers/5.webp" },
        { name: "Dubai Expert", logo: "/Assets/Sponsers/6.webp" },
        { name: "Certification 1", logo: "/Assets/Sponsers/7.webp" },
        { name: "Certification 2", logo: "/Assets/Sponsers/8.webp" },
        { name: "New Zealand Tourism", logo: "/Assets/Sponsers/9.webp" },
        { name: "Iceland Inspired", logo: "/Assets/Sponsers/1.webp" },

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
                <h2 className="text-2xl text-center mb-12">
                    Partnered <span className="text-gray-500">with the best in the industry</span>
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