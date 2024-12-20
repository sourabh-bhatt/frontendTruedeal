'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const exoticDestinations = [
    {
        name: "Maldives",
        tagline: "PARADISE ON EARTH",
        image: "/Assets/DestinationsImage/maldives_image.jpeg",
        link: "/destination/maldives"
    },
    {
        name: "Bora Bora",
        tagline: "TROPICAL PARADISE",
        image: "/placeholder.svg?height=400&width=600",
        link: "/destination/borabora"
    },
    {
        name: "Seychelles",
        tagline: "PRISTINE BEACHES",
        image: "/placeholder.svg?height=400&width=600",
        link: "/destination/seychelles"
    },
    {
        name: "Mauritius",
        tagline: "ISLAND PARADISE",
        image: "/placeholder.svg?height=400&width=600",
        link: "/destination/mauritius"
    },
    {
        name: "Fiji",
        tagline: "PACIFIC WONDER",
        image: "/placeholder.svg?height=400&width=600",
        link: "/destination/fiji"
    }
];

export default function ExoticDestinations() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === exoticDestinations.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? exoticDestinations.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full overflow-hidden relative">
            <h1 className="text-4xl font-bold mb-8 px-4 md:px-8">EXOTIC DESTINATIONS</h1>

            <div className="flex gap-4 px-4 md:px-8 pb-8 overflow-x-auto snap-x scrollbar-hide">
                {exoticDestinations.map((destination, index) => (
                    <Link
                        key={destination.name}
                        href={destination.link}
                        className="relative flex-shrink-0 w-[300px] h-[400px] rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <div className="text-sm font-medium tracking-wider mb-2">
                                {destination.tagline}
                            </div>
                            <div className="text-3xl font-bold">
                                {destination.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}

