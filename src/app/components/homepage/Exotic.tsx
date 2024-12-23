'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const exoticDestinations = [
    {
        name: "Maldives",
        tagline: "Paradise on Earth",
        image: "/webImage/maldives/2/1.webp",
        link: "/destinations/maldives"
    },
    {
        name: "Finland",
        tagline: "Northern Lights & Arctic Adventures",
        image: "/webImage/fiji/2/1.webp",
        link: "/destinations/finland"
    },
    {
        name: "Kenya",
        tagline: "Wildlife & Safari Experience",
        image: "/webImage/kenya/2/1.webp",
        link: "/destinations/kenya"
    },
    {
        name: "Mauritius",
        tagline: "Tropical Paradise",
        image: "/webImage/mauritius/2/1.webp",
        link: "/destinations/mauritius"
    },
    {
        name: "Fiji",
        tagline: "Pacific Island Paradise",
        image: "/webImage/fiji/2/1.webp",
        link: "/destinations/fiji"
    }
];

export default function ExoticDestinations() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3;

    const next = () => {
        setCurrentIndex((prev) =>
            prev + visibleCount >= exoticDestinations.length ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? exoticDestinations.length - visibleCount : prev - 1
        );
    };

    const visibleDestinations = [...exoticDestinations, ...exoticDestinations].slice(
        currentIndex,
        currentIndex + visibleCount
    );

    return (
        <section className="w-full py-8 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Exotic Destinations
                </h2>

                <div className="relative">
                    <div className="flex justify-center overflow-hidden">
                        <div className="flex gap-6 transition-all duration-500 ease-in-out">
                            {visibleDestinations.map((destination, index) => (
                                <Link
                                    key={`${destination.name}-${index}`}
                                    href={destination.link}
                                    className="group relative w-[300px] h-[200px] flex-shrink-0 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
                                >
                                    <Image
                                        src={destination.image}
                                        alt={destination.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="300px"
                                        priority={index < visibleCount}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="text-xl font-semibold leading-tight">
                                            {destination.name}
                                        </h3>
                                        <p className="text-sm text-gray-200 mt-1 opacity-90">
                                            {destination.tagline}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prev}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-md transition-all z-10 hover:bg-white hover:scale-110"
                        aria-label="Previous destinations"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-md transition-all z-10 hover:bg-white hover:scale-110"
                        aria-label="Next destinations"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>
        </section>
    );
}

