'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { indonesiaPackages } from '@/data/indonesiaPackages';
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar } from 'lucide-react';

export default function Indonesia() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    // Responsive items per page
    const getItemsPerPage = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1;  // mobile
            if (window.innerWidth < 1024) return 2; // tablet
            return 4; // desktop
        }
        return 4;
    };

    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

    // Update items per page on window resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categories = Object.keys(indonesiaPackages);
    const packages = selectedCategory ?
        indonesiaPackages[selectedCategory] :
        Object.values(indonesiaPackages).flat();

    const totalPages = Math.ceil(packages.length / itemsPerPage);
    const currentPackages = packages.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                    Indonesia Packages
                </h1>

                {/* Category Selection */}
                <div className="flex gap-4 mb-12 overflow-x-auto scrollbar-hide justify-start md:justify-center">
                    <button
                        onClick={() => {
                            setSelectedCategory(null);
                            setCurrentPage(0);
                        }}
                        className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all flex-shrink-0 ${!selectedCategory
                            ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white shadow-lg'
                            : 'bg-white text-gray-600 hover:shadow-md'
                            }`}
                    >
                        All Packages
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(0);
                            }}
                            className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all flex-shrink-0 ${selectedCategory === category
                                ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:shadow-md'
                                }`}
                        >
                            {category.replace(/-/g, ' ').toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Package Cards Carousel */}
                <div className="relative px-12">
                    {/* Navigation Buttons - Always visible */}
                    {totalPages > 1 && (
                        <>
                            <button
                                onClick={prevPage}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all z-10 border border-gray-200"
                                aria-label="Previous page"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                onClick={nextPage}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all z-10 border border-gray-200"
                                aria-label="Next page"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-700" />
                            </button>
                        </>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {currentPackages.map((pkg) => (
                            <Link
                                href={`/indonesia/${pkg.id}`}
                                key={pkg.id}
                                className="group relative bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                                            Customised
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <h3 className="font-bold text-xl md:text-2xl mb-2 md:mb-4 text-white line-clamp-2">{pkg.name}</h3>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                                            <Clock className="w-4 h-4" />
                                            {pkg.duration.nights}N/{pkg.duration.days}D
                                        </div>
                                        <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                                            <MapPin className="w-4 h-4" />
                                            <span className="line-clamp-1 font-bold text-yellow-400">₹{pkg.price.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                                            <Calendar className="w-4 h-4" />
                                            Any date of your choice
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
