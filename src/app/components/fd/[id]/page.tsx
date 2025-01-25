'use client';

import { fixedDeparturesData } from '../data';
import { notFound } from 'next/navigation';
import { FaPlane, FaCalendarAlt } from 'react-icons/fa';
import { use } from 'react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookingFormModal } from '@/app/components/BookingFormModal';

interface PageProps {
    params: Promise<{ id: string; }>
}

export default function FixedDeparturePage({ params }: PageProps) {
    const { id } = use(params);
    const destination = Object.values(fixedDeparturesData).find(dest => dest.id === id);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    if (!destination) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[300px]">
                <img 
                    src={destination.images[0]}
                    alt={destination.country}
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                <div className="absolute bottom-8 left-8 text-white">
                    <h1 className="text-4xl font-bold mb-2">{destination.days} Days {destination.country} Tour Package</h1>
                    <div className="flex items-center gap-6 text-gray-200">
                        <span className="flex items-center gap-2">
                            <FaCalendarAlt /> {destination.dateStart} - {destination.dateEnd}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaPlane /> {destination.flightFrom}
                        </span>
                    </div>
                </div>
                {/* Book Now Button */}
                <div className="absolute bottom-8 right-8">
                    <Button
                        className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white px-8 py-2 text-lg"
                        onClick={() => setIsBookingModalOpen(true)}
                    >
                        Book Now
                    </Button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Overview */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Overview</h2>
                            <p className="text-gray-600">{destination.description}</p>
                        </div>

                        {/* Itinerary */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-6 text-primary">Itinerary</h2>
                            <div className="space-y-6">
                                {destination.itinerary.map((day, index) => (
                                    <div key={index} className="border-l-4 border-yellow-400 pl-4">
                                        <h3 className="text-lg font-bold mb-2">Day {day.day}: {day.title}</h3>
                                        <p className="text-gray-600">{day.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hotels */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Hotels</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {destination.hotelDetails.map((hotel, index) => (
                                    <div key={index} className="border rounded-lg p-4">
                                        <h3 className="font-bold text-lg mb-1">{hotel.city}</h3>
                                        <p className="text-gray-600">{hotel.hotel}</p>
                                        <p className="text-gray-500 text-sm">{hotel.roomType}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Price Card */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-center mb-4">
                                <p className="text-gray-500 line-through">₹{(destination.amount * 1.2).toLocaleString()}/-</p>
                                <p className="text-3xl font-bold text-primary">₹{destination.amount.toLocaleString()}/-</p>
                                <p className="text-sm text-gray-500">per person</p>
                            </div>
                            <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                                Book Now
                            </button>
                        </div>

                        {/* Inclusions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-4 text-primary">Inclusions</h2>
                            <ul className="space-y-2">
                                {destination.inclusions.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Exclusions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-4 text-primary">Exclusions</h2>
                            <ul className="space-y-2">
                                {destination.exclusions.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-red-500">✕</span>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingFormModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                destinationName={`${destination.country} Tour Package`}
            />
        </div>
    );
} 