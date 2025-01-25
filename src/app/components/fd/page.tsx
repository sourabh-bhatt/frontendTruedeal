'use client';

import Link from 'next/link';
import { fixedDeparturesData } from './data';
import { FaPlane, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";

export default function FixedDepartures() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                    Fixed Departures
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {Object.values(fixedDeparturesData).map((departure) => (
                    <div 
                        key={departure.id}
                        className="relative group h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {/* Background Image */}
                        <img 
                            src={departure.images[0]} 
                            alt={departure.country}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                        {/* Price Tag */}
                        <div className="absolute top-3 left-0 z-10">
                            <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                                <span className="line-through text-sm mr-2">₹{(departure.amount * 1.2).toLocaleString()}/-</span>
                                <span className="font-bold">₹{departure.amount.toLocaleString()}/-</span>
                                <span className="text-sm ml-1">onwards</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm w-fit mb-4">
                                Recommended
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold mb-2">
                                {departure.days} Days {departure.country} Tour Package
                            </h2>

                            {/* Cities List */}
                            <div className="flex flex-wrap gap-x-2 text-sm mb-4">
                                {departure.hotelDetails?.map((hotel, idx) => (
                                    <span key={idx} className="text-gray-200">
                                        {hotel.city}
                                        {idx < departure.hotelDetails.length - 1 && ' •'}
                                    </span>
                                ))}
                                <span className="text-yellow-400">+{departure.hotelDetails.length} More</span>
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

                            {/* Bottom Info */}
                            <div className="flex justify-between items-center text-sm border-t border-white/20 pt-3 mb-4">
                                <span>+1 batch</span>
                                <span className="text-yellow-400">
                                    {departure.flightFrom} - {departure.hotelDetails?.[departure.hotelDetails.length - 1]?.city}
                                </span>
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
        </div>
    );
}
