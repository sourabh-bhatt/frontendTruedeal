'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Camera, Calendar, Phone, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GalleryModal } from '@/app/package/[id]/gallery-modal';
import { BookingFormModal } from '@/app/components/BookingFormModal';
import { indonesiaPackages } from '@/data/indonesiaPackages';
import Shimmer from '@/components/ui/shimmer';
import ChardhamYatra from '@/app/chardhamYatra/page';   
import FixedDepartures from '@/app/components/fd/page';
import Destinations from '@/app/components/homepage/Destinations';  
import Trending from '@/app/components/homepage/Trending';
import BannerCarousel from '@/app/components/valentine/page';
import Indonesia from '@/app/indonesia/page';
import Domestic from '@/app/components/homepage/Domestic';
import Europe from '@/app/components/homepage/Europe';  
import Gallery from '@/app/components/homepage/Gallery';
import Sponsors from '@/app/components/Ad/Sponsers';
import ReviewsGlimpse from '@/app/components/homepage/ReviewsGlimpse';
  

export default function PackageDetails() {
    const params = useParams();
    const { packageId } = params;
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Find the package in the data
    const selectedPackage = Object.values(indonesiaPackages)
        .flat()
        .find((pkg) => pkg.id === packageId);

    // Add this useEffect for auto-sliding
    useEffect(() => {
        if (!selectedPackage?.galleryImages?.length) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === (selectedPackage.galleryImages.length - 1) ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [selectedPackage?.galleryImages?.length]);

    if (!selectedPackage) {
        return <Shimmer />;
    }

    return (
        <div className="min-h-screen bg-gray-50 mt-10">
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
                    <div className="relative w-full h-[400px]">
                        {selectedPackage.galleryImages.map((image, index) => (
                            <Image
                                key={image}
                                src={image}
                                alt={`${selectedPackage.name} - Image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                priority={index === 0}
                                quality={100}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsGalleryOpen(true)}
                        className="absolute bottom-4 left-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                        <Camera className="w-4 h-4" />
                        View Gallery
                    </button>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            {selectedPackage.duration.nights}N/{selectedPackage.duration.days}D
                        </div>
                        <div className="text-2xl font-bold mb-1">₹{selectedPackage.price.toLocaleString()}</div>
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
                                Our Destination expert will be happy to help resolve your queries
                            </div>
                            <div className="flex items-center justify-center gap-2 text-[#017ae3] font-medium">
                                <Phone className="w-4 h-4" />
                                +91 8447498498
                            </div>
                        </div>
                    </div>
                </div>

                <GalleryModal
                    isOpen={isGalleryOpen}
                    onClose={() => setIsGalleryOpen(false)}
                    images={selectedPackage.galleryImages}
                />

                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={selectedPackage.name}
                />

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                        {selectedPackage.name}
                    </h1>
                    <div className="flex items-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-[#017ae3]" />
                            {selectedPackage.category}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-[#017ae3]" />
                            {selectedPackage.duration.nights} Nights
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-[#017ae3]" />
                            {selectedPackage.duration.days} Days
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed">{selectedPackage.description}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Day Wise Itinerary</h2>
                            <div className="space-y-8">
                                {selectedPackage.itinerary.map((day) => (
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

                        <section>
                            <h2 className="text-xl font-bold mb-6">Inclusions</h2>
                            <div className="space-y-2">
                                {selectedPackage.inclusions.map((inclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        {inclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Exclusions</h2>
                            <div className="space-y-2">
                                {selectedPackage.exclusions.map((exclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <XCircle className="w-4 h-4 text-red-600" />
                                        {exclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Cancellation Policy</h2>
                            <div className="space-y-2">
                                {selectedPackage.cancellationPolicy.map((policy, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                                        {policy}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Adding the additional components */}
                <div className="mt-16 space-y-16">
                    <ChardhamYatra />
                    <FixedDepartures />
                    <Destinations />        
                    <Trending />
                    <BannerCarousel />  
                    <Indonesia />
                    <Domestic />
                    <Europe />
                    <Gallery />
                    <Sponsors /> 
                    <ReviewsGlimpse />
                </div>
            </main>
        </div>
    );
} 