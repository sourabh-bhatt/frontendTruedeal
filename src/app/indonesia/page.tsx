'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { indonesiaPackages } from '@/data/indonesiaPackages';

export default function Indonesia() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = Object.keys(indonesiaPackages);

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Category Selection */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white'
                                    : 'bg-white text-gray-600'
                                }`}
                        >
                            {category.replace('-', ' ').toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(selectedCategory ? indonesiaPackages[selectedCategory] : Object.values(indonesiaPackages).flat()).map((pkg) => (
                        <Link
                            href={`/indonesia/${pkg.id}`}
                            key={pkg.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                                    {pkg.duration.nights}N/{pkg.duration.days}D
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                                <div className="text-gray-600 text-sm mb-4">{pkg.category}</div>
                                <div className="flex justify-between items-center">
                                    <div className="text-[#017ae3] font-bold">
                                        ₹{pkg.price.toLocaleString()}
                                    </div>
                                    <button className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-4 py-2 rounded-full text-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
