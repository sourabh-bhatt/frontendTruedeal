"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const tagColors = [
    { bg: "from-[#8B5CF6]/10 to-[#A78BFA]/10", text: "text-[#7C3AED]" },
    { bg: "from-[#4ECDC4]/10 to-[#45B7AF]/10", text: "text-[#45B7AF]" },
    { bg: "from-[#017ae3]/10 to-[#00f6ff]/10", text: "text-[#017ae3]" }
];

const offers = [
    {
        title: "Almaty: City of Apples & Mountains",
        slug: "almaty",
        nights: 5,
        days: 6,
        originalPrice: 55980,
        discountedPrice: 44275,
        images: [
            "/UGCImages/Images4/almaty/vertical/4.webp",
            "/UGCImages/Images4/almaty/vertical/2.webp",
            "/UGCImages/Images4/almaty/vertical/3.webp"
        ],
        amenities: ["Stay", "Transfers"]
    },
    {
        title: "Baku: The City of Winds & Fire Temples",
        slug: "baku",
        nights: 4,
        days: 5,
        originalPrice: 46390,
        discountedPrice: 30100,
        images: [
            "/UGCImages/Images4/baku/vertical/5.webp",
            "/UGCImages/Images4/baku/vertical/2.webp",
            "/UGCImages/Images4/baku/vertical/3.webp"
        ],
        amenities: ["Activities", "Transfers"]
    },
    {
        title: "Vietnam: A City of Eternal Charm & Beauty",
        slug: "vietnam",
        nights: 5,
        days: 6,
        originalPrice: 58798,
        discountedPrice: 46000,
        images: [
            "/IMAGES/Vietnam/1/1.webp",
            "/IMAGES/Vietnam/1/2.webp",
            "/IMAGES/Vietnam/1/3.webp"
        ],
        amenities: ["Stay", "Transfers"]
    },
    {
        title: "Shimla: The Queen of Hills & Snow",
        slug: "shimla",
        nights: 3,
        days: 4,
        originalPrice: 28000,
        discountedPrice: 12000,
        images: [
            "/UGCImages/Hd images2/shimla/vertical/1.webp",
            "/UGCImages/Hd images2/shimla/vertical/2.webp",
            "/UGCImages/Hd images2/shimla/vertical/3.webp"
        ],
        amenities: ["Activities", "Transfers"]
    }
];

const TrendingOffers = () => {
    const router = useRouter();
    const [currentImages, setCurrentImages] = useState(offers.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImages(prev =>
                prev.map((current, idx) =>
                    (current + 1) % offers[idx].images.length
                )
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleCardClick = (slug: string) => {
        router.push(`/trending/${slug}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
            <div className="text-center mb-12">
                <div className="relative">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Trending Offers</h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mx-auto"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        onClick={() => handleCardClick(offer.slug)}
                    >
                        <div className="relative h-[250px] overflow-hidden">
                            {offer.images.map((img, imgIndex) => (
                                <Image
                                    key={imgIndex}
                                    src={img}
                                    alt={`${offer.title} - Image ${imgIndex + 1}`}
                                    width={400}
                                    height={300}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${currentImages[index] === imgIndex ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>

                        <div className="p-5">
                            <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#017ae3] group-hover:to-[#00f6ff] transition-colors">
                                {offer.title}
                            </h3>

                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="bg-gradient-to-r from-[#017ae3]/10 to-[#00f6ff]/10 text-[#017ae3] px-4 py-1.5 rounded-full text-sm font-medium">
                                    {offer.nights} Nights
                                </span>
                                <span className="bg-gradient-to-r from-[#017ae3]/10 to-[#00f6ff]/10 text-[#017ae3] px-4 py-1.5 rounded-full text-sm font-medium">
                                    {offer.days} Days
                                </span>
                            </div>

                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-2xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                    ₹{offer.discountedPrice.toLocaleString()}
                                </span>
                                <span className="text-gray-500 text-sm ml-auto">Per Person</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {offer.amenities.map((amenity, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-2 bg-gradient-to-r ${tagColors[idx % tagColors.length].bg} px-3 py-1.5 rounded-full`}
                                    >
                                        <svg
                                            className={`w-4 h-4 ${tagColors[idx % tagColors.length].text}`}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                        <span className={`text-sm font-medium ${tagColors[idx % tagColors.length].text}`}>
                                            {amenity}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full py-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#0165bd] hover:to-[#00d8df] text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                                View Itinerary
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5-5 5M5 7l5 5-5 5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingOffers;