'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useDestinations } from '@/hooks/useDestinations'

interface ApiDestinationsProps {
    continent?: string;
    limit?: number;
    showPrice?: boolean;
}

export default function ApiDestinations({
    continent,
    limit = 8,
    showPrice = true
}: ApiDestinationsProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const { destinations, loading, error } = useDestinations({
        continent,
        limit
    })

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center text-red-600 p-4">
                <p>Error loading destinations: {error}</p>
            </div>
        )
    }

    if (destinations.length === 0) {
        return (
            <div className="text-center text-gray-600 p-4">
                <p>No destinations found.</p>
            </div>
        )
    }

    const itemsPerPage = 4
    const maxIndex = Math.max(0, destinations.length - itemsPerPage)

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    // Get primary image or first available image for each destination
    const getDestinationImage = (destination: any) => {
        // Look for primary banner image first
        const primaryBanner = destination.media_assets?.find(
            (asset: any) => asset.asset_type === 'banner' && asset.is_primary
        )

        if (primaryBanner) return primaryBanner.s3_url

        // Fallback to first banner image
        const firstBanner = destination.media_assets?.find(
            (asset: any) => asset.asset_type === 'banner'
        )

        if (firstBanner) return firstBanner.s3_url

        // Fallback to first thumbnail
        const firstThumbnail = destination.media_assets?.find(
            (asset: any) => asset.asset_type === 'thumbnail'
        )

        if (firstThumbnail) return firstThumbnail.s3_url

        // Final fallback to any image
        const anyImage = destination.media_assets?.[0]
        return anyImage?.s3_url || '/placeholder-destination.jpg'
    }

    const getDestinationAlt = (destination: any) => {
        const primaryImage = destination.media_assets?.find(
            (asset: any) => asset.is_primary
        )
        return primaryImage?.alt_text || `${destination.name} destination`
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="relative">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    aria-label="Previous destinations"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    aria-label="Next destinations"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Destinations Grid */}
                <div className="overflow-hidden mx-8">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                    >
                        {destinations.map((destination) => (
                            <div
                                key={destination.id}
                                className="w-1/4 flex-shrink-0 px-2"
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    {/* Destination Image */}
                                    <div className="relative h-48">
                                        <Image
                                            src={getDestinationImage(destination)}
                                            alt={getDestinationAlt(destination)}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            loading="lazy"
                                        />

                                        {/* Package Count Badge */}
                                        {destination.package_count > 0 && (
                                            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
                                                {destination.package_count} Package{destination.package_count > 1 ? 's' : ''}
                                            </div>
                                        )}
                                    </div>

                                    {/* Destination Info */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {destination.name}
                                        </h3>

                                        <p className="text-sm text-gray-600 mb-2">
                                            {destination.country}
                                        </p>

                                        {destination.description && (
                                            <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                                                {destination.description}
                                            </p>
                                        )}

                                        {/* Price Display */}
                                        {showPrice && (
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    {destination.min_price ? (
                                                        <div>
                                                            <span className="text-sm text-gray-600">Starting from</span>
                                                            <div className="text-lg font-bold text-blue-600">
                                                                ₹{destination.min_price.toLocaleString()}
                                                            </div>
                                                        </div>
                                                    ) : destination.base_price ? (
                                                        <div className="text-lg font-bold text-blue-600">
                                                            ₹{destination.base_price.toLocaleString()}
                                                        </div>
                                                    ) : (
                                                        <div className="text-sm text-gray-600">
                                                            Price on request
                                                        </div>
                                                    )}
                                                </div>

                                                <button
                                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                                                    onClick={() => window.location.href = `/destinations/${destination.slug}`}
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: maxIndex + 1 }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}