'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Camera, Calendar, Phone, Clock, CheckCircle, XCircle, AlertCircle, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GalleryModal } from '@/app/package/[id]/gallery-modal';
import { BookingFormModal } from '@/app/components/BookingFormModal';
import { groupToursData } from '@/data/groupTours';
import Destinations from '@/app/components/homepage/Destinations';
import Trending from '@/app/components/homepage/Trending';
import HappyCustomers from '@/app/components/Ad/HappyCustomers';
import Gallery from '@/app/components/homepage/Gallery';
import WallOfLove from '@/app/components/homepage/Ugc';
import Sponsors from '@/app/components/Ad/Sponsers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GroupTourDetails() {
    const params = useParams();
    const { destination } = params;
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const tourData = groupToursData[destination as string];

    if (!tourData) {
        return <div>Tour not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 mt-10">
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Hero Image Section - Replace the single Image with Swiper */}
                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="w-full h-[400px]"
                    >
                        {tourData.galleryImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={image}
                                    alt={`${tourData.name} - Image ${index + 1}`}
                                    width={1400}
                                    height={400}
                                    className="w-full h-[400px] object-cover"
                                    priority={index === 0}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        onClick={() => setIsGalleryOpen(true)}
                        className="absolute bottom-4 left-4 z-10 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                        <Camera className="w-4 h-4" />
                        View Gallery
                    </button>

                    {/* Booking Card - Add z-index to keep it above the slider */}
                    <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            Start Date: {tourData.startDate}
                        </div>
                        <div className="text-2xl font-bold mb-1">₹{tourData.price.toLocaleString()}</div>
                        <div className="text-sm text-gray-600 mb-4">Per Person</div>
                        <Button
                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white mb-4 transition-all duration-500"
                            onClick={() => setIsBookingModalOpen(true)}
                        >
                            Book Now
                        </Button>
                        <div className="text-center">
                            <div className="text-sm font-medium mb-1">Need Help?</div>
                            <div className="text-xs text-gray-600 mb-2">
                                Our travel expert will be happy to help you plan your trip
                            </div>
                            <div className="flex items-center justify-center gap-2 text-[#017ae3] font-medium">
                                <Phone className="w-4 h-4" />
                                +91 8447498498
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                        {tourData.name}
                    </h1>

                    {/* Tour Details */}
                    <div className="flex items-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-[#017ae3]" />
                            Start Date: {tourData.startDate}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-[#017ae3]" />
                            {tourData.duration.nights} Nights
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users className="w-4 h-4 text-[#017ae3]" />
                            {tourData.groupSize}
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-xl font-bold mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed">{tourData.description}</p>
                        </section>

                        {/* Itinerary */}
                        <section>
                            <h2 className="text-xl font-bold mb-6">Day Wise Itinerary</h2>
                            <div className="space-y-8">
                                {tourData.itinerary.map((day) => (
                                    <div key={day.day} className="flex gap-4 group">
                                        <div className="flex-shrink-0 relative">
                                            <div className="w-3 h-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full mt-2 group-hover:shadow-lg transition-all duration-300"></div>
                                            <div className="absolute top-5 bottom-0 left-1.5 w-0.5 bg-gradient-to-b from-[#017ae3] to-transparent"></div>
                                        </div>
                                        <div className="group-hover:translate-x-2 transition-transform duration-300">
                                            <div className="text-sm text-gray-500">Day {day.day}</div>
                                            <div className="font-medium text-gray-900">{day.title}</div>
                                            <div className="text-sm text-gray-600 mt-1">{day.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions */}
                        <section>
                            <h2 className="text-xl font-bold mb-6">Inclusions</h2>
                            <div className="space-y-2">
                                {tourData.inclusions.map((inclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        {inclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Exclusions */}
                        <section>
                            <h2 className="text-xl font-bold mb-6">Exclusions</h2>
                            <div className="space-y-2">
                                {tourData.exclusions.map((exclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <XCircle className="w-4 h-4 text-red-600" />
                                        {exclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Cancellation Policy */}
                        <section>
                            <h2 className="text-xl font-bold mb-6">Cancellation Policy</h2>
                            <div className="space-y-2">
                                {tourData.cancellationPolicy.map((policy, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                                        {policy}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <GalleryModal
                    isOpen={isGalleryOpen}
                    onClose={() => setIsGalleryOpen(false)}
                    images={tourData.galleryImages}
                />

                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={tourData.name}
                />
            </main>

            {/* Additional Components */}
            <Destinations />
            <Trending />
            <HappyCustomers />
            <Gallery />
            <WallOfLove />
            <Sponsors />
        </div>
    );
} 