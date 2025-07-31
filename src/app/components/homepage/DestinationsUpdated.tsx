'use client';

import { useState, useEffect } from 'react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { useDestinations, Destination } from '@/hooks/useDestinations'

export default function DestinationsUpdated() {
    const [asiaIndex, setAsiaIndex] = useState(0)
    const [europeIndex, setEuropeIndex] = useState(0)
    const router = useRouter()

    // Fetch destinations from API instead of hard-coded data
    const { destinations: asiaDestinations, loading: asiaLoading } = useDestinations({
        continent: 'Asia',
        limit: 8
    })

    const { destinations: europeDestinations, loading: europeLoading } = useDestinations({
        continent: 'Europe',
        limit: 8
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (asiaDestinations.length > 0) {
                setAsiaIndex((prevIndex) => (prevIndex + 1) % asiaDestinations.length)
            }
            if (europeDestinations.length > 0) {
                setEuropeIndex((prevIndex) => (prevIndex + 1) % europeDestinations.length)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [asiaDestinations.length, europeDestinations.length])

    // Helper function to get primary image from destination
    const getPrimaryImage = (destination: Destination): string => {
        // Look for primary banner image
        const primaryBanner = destination.media_assets?.find(
            asset => asset.asset_type === 'banner' && asset.is_primary
        )
        if (primaryBanner) return primaryBanner.s3_url

        // Fallback to first banner
        const firstBanner = destination.media_assets?.find(
            asset => asset.asset_type === 'banner'
        )
        if (firstBanner) return firstBanner.s3_url

        // Fallback to any image
        const anyImage = destination.media_assets?.[0]
        return anyImage?.s3_url || '/placeholder-destination.jpg'
    }

    if (asiaLoading || europeLoading) {
        return (
            <div className="py-16 bg-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading destinations...</p>
            </div>
        )
    }

    return (
        <div className="py-8 md:py-16 bg-white text-center font-poppins">
            <div className="mb-8 md:mb-12 px-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Our Proposals
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    OUR{" "}
                    <span className="relative inline-block">
                        <span>DESTINATIONS</span>
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"></span>
                    </span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16 px-4 lg:px-0">
                {/* Asia Destinations */}
                {asiaDestinations.length > 0 && (
                    <div className="flex flex-col md:flex-row lg:flex-nowrap gap-8 lg:gap-4">
                        <DestinationCard
                            continent="Exotic Destinations"
                            destinations={asiaDestinations}
                            currentIndex={asiaIndex}
                            getPrimaryImage={getPrimaryImage}
                        />
                        <div className="space-y-4">
                            {asiaDestinations.slice(0, 4).map((dest) => (
                                <DestinationSubCard
                                    key={dest.id}
                                    destination={dest}
                                    getPrimaryImage={getPrimaryImage}
                                    onClick={() => router.push(`/destinations/${dest.slug}`)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Europe Destinations */}
                {europeDestinations.length > 0 && (
                    <div className="flex flex-col md:flex-row lg:flex-nowrap gap-8 lg:gap-4">
                        <DestinationCard
                            continent="Trending Destinations"
                            destinations={europeDestinations}
                            currentIndex={europeIndex}
                            getPrimaryImage={getPrimaryImage}
                        />
                        <div className="space-y-4">
                            {europeDestinations.slice(0, 4).map((dest) => (
                                <DestinationSubCard
                                    key={dest.id}
                                    destination={dest}
                                    getPrimaryImage={getPrimaryImage}
                                    onClick={() => router.push(`/destinations/${dest.slug}`)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function DestinationCard({
    continent,
    destinations,
    currentIndex,
    getPrimaryImage
}: {
    continent: string
    destinations: Destination[]
    currentIndex: number
    getPrimaryImage: (dest: Destination) => string
}) {
    const router = useRouter()

    if (destinations.length === 0) return null

    const currentDest = destinations[currentIndex]

    return (
        <div className="relative group cursor-pointer" onClick={() => router.push(`/destinations/${currentDest.slug}`)}>
            <div className="relative w-72 h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={getPrimaryImage(currentDest)}
                    alt={currentDest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 288px"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-semibold mb-1">{continent}</h3>
                    <h2 className="text-2xl font-bold mb-2">{currentDest.name}</h2>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm opacity-90">Starting from</p>
                            <p className="text-xl font-bold">
                                ₹{(currentDest.min_price || currentDest.base_price || 0).toLocaleString()}
                            </p>
                        </div>
                        <ChevronRight className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Destination indicators */}
            <div className="flex justify-center mt-3 space-x-2">
                {destinations.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

function DestinationSubCard({
    destination,
    getPrimaryImage,
    onClick
}: {
    destination: Destination
    getPrimaryImage: (dest: Destination) => string
    onClick: () => void
}) {
    return (
        <div
            className="flex items-center bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer group"
            onClick={onClick}
        >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                <Image
                    src={getPrimaryImage(destination)}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="64px"
                />
            </div>

            <div className="flex-grow text-left">
                <h4 className="font-semibold text-gray-800 mb-1">{destination.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{destination.country}</p>
                <p className="text-sm font-bold text-blue-600">
                    ₹{(destination.min_price || destination.base_price || 0).toLocaleString()}
                </p>
            </div>

            <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
    )
}