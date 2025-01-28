'use client';

import Link from 'next/link';
import { useState } from 'react';
import { fixedDeparturesData, FixedDeparture, DestinationWithoutFlight, destinationGroups, getTotalPages } from './data';
import { FaPlane, FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function FixedDepartures() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = getTotalPages();

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Fixed Departures Section */}
            <h1 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                    Fixed Departures
                    <p className="text-sm text-gray-500 mt-1 underline">With Flights</p>
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
                {Object.values(fixedDeparturesData).map((departure: FixedDeparture) => (
                    <div 
                        key={departure.id}
                        className="relative group h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {/* Background Image */}
                        <Image 
                            src={departure.images?.[0] || '/default-destination-image.jpg'} 
                            alt={departure.country}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                        {/* Price Tag */}
                        {departure.amount && (
                            <div className="absolute top-3 left-0 z-10">
                                <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                                    <span className="line-through text-sm mr-2">
                                        ₹{departure.amount * 1.2 >= 1000 ? (departure.amount * 1.2).toLocaleString('en-IN') : departure.amount * 1.2}/-
                                    </span>
                                    <span className="font-bold">
                                        ₹{departure.amount >= 1000 ? departure.amount.toLocaleString('en-IN') : departure.amount}/-
                                    </span>
                                    <span className="text-sm ml-1">onwards</span>
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                            {/* Title */}
                            <h2 className="text-2xl font-bold mb-2">
                                {departure.days} Days {departure.country} Tour Package
                            </h2>

                            {/* Cities List */}
                            <div className="flex flex-wrap gap-x-2 text-sm mb-4">
                                {departure.hotelDetails?.map((hotel, idx) => (
                                    <span key={idx} className="text-gray-200">
                                        {hotel.city}
                                        {idx < (departure.hotelDetails?.length || 0) - 1 && ' •'}
                                    </span>
                                ))}
                                {departure.hotelDetails && 
                                    <span className="text-yellow-400">+{departure.hotelDetails.length} More</span>
                                }
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-yellow-400" />
                                    <span>{departure.days}D/{departure.nights}N</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoLocationSharp className="text-yellow-400" />
                                    <span>{departure.hotelDetails?.[0]?.city}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPlane className="text-yellow-400" />
                                    <span>{departure.flightFrom}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-yellow-400" />
                                    <span>{departure.dateStart}</span>
                                </div>
                            </div>


                            {/* View Details Button */}
                            <Link href={`/components/fd/${departure.id}`}>
                                <Button
                                    className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                                >
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Destinations Without Flight Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Fixed Departures
                        <p className="text-sm text-gray-500 mt-1 underline">Without Flights</p>
                    </span>
                </h2>
                
                {/* Navigation Controls */}
                <div className="relative mb-6">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                        <Button 
                            onClick={handlePrevPage} 
                            disabled={currentPage === 0}
                            variant="outline"
                            className="rounded-full w-10 h-10 p-0 hover:bg-gray-100"
                            aria-label="Previous page"
                        >
                            <FaChevronLeft className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="text-center">
                        <span className="text-sm text-gray-500">
                            Page {currentPage + 1} of {totalPages}
                        </span>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                        <Button 
                            onClick={handleNextPage} 
                            disabled={currentPage === totalPages - 1}
                            variant="outline"
                            className="rounded-full w-10 h-10 p-0 hover:bg-gray-100"
                            aria-label="Next page"
                        >
                            <FaChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {Object.values(destinationGroups[currentPage]).map((destination: DestinationWithoutFlight) => (
                        <div 
                            key={destination.id}
                            className="relative group h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Background Image */}
                            <Image 
                                src={destination.images?.[0] || '/default-destination-image.jpg'} 
                                alt={destination.country}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                            {/* Price Tag */}
                            {destination.amount && (
                                <div className="absolute top-3 left-0 z-10">
                                    <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                                        <span className="line-through text-sm mr-2">
                                            ₹{destination.amount * 1.2 >= 1000 ? (destination.amount * 1.2).toLocaleString('en-IN') : destination.amount * 1.2}/-
                                        </span>
                                        <span className="font-bold">
                                            ₹{destination.amount >= 1000 ? destination.amount.toLocaleString('en-IN') : destination.amount}/-
                                        </span>
                                        <span className="text-sm ml-1">onwards</span>
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h2 className="text-2xl font-bold mb-2">
                                    {destination.days} Days {destination.country} Tour Package
                                </h2>

                                {/* Cities List */}
                                <div className="flex flex-wrap gap-x-2 text-sm mb-4">
                                    {destination.hotelDetails?.map((hotel, idx) => (
                                        <span key={idx} className="text-gray-200">
                                            {hotel.city}
                                            {idx < (destination.hotelDetails?.length || 0) - 1 && ' •'}
                                        </span>
                                    ))}
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-yellow-400" />
                                        <span>{destination.days}D/{destination.nights}N</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoLocationSharp className="text-yellow-400" />
                                        <span>{destination.hotelDetails?.[0]?.city}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-yellow-400" />
                                        <span>{destination.dateStart}</span>
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <Link href={`/components/fd/${destination.id}`}>
                                    <Button
                                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                                    >
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
