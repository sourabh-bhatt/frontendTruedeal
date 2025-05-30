'use client';

import {
    fixedDeparturesData,
    destinationsWithoutFlight,
    FixedDeparture,
    DestinationWithoutFlight,
    isFixedDeparture
} from '../data';
import { notFound } from 'next/navigation';
import { FaPlane, FaCalendarAlt } from 'react-icons/fa';
import { use, useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { BookingOptionsModal } from '@/app/components/BookingOptionsModal';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Poppins } from 'next/font/google';
import FixedDepartures from '../page'
// import BannerCarousel from '../../valentine/page';
// import BannerCarousel from '../../components/valentine/page';
// import Indonesia from '@/app/indonesia/page';
// import ChardhamYatra from '@/app/chardhamYatra/page';
import Destinations from '../../components/homepage/Destinations';
import Trending from '../../components/homepage/Trending';
import Domestic from '../../components/homepage/Domestic';
import Europe from '../../components/homepage/Europe';
import ExoticDestinations from '../../components/homepage/Exotic';
import Gallery from '../../components/homepage/Gallery';
import ReviewsGlimpse from '../../components/homepage/ReviewsGlimpse';
import Sponsors from '../../components/Ad/Sponsers';
import { DestinationSights } from '@/app/components/destinations/DestinationSights';
import { LocalCuisine } from '@/app/components/destinations/LocalCuisine';
import Image from 'next/image';
import BaliBanner from '@/app/components/homepage/BaliBanner';
import BaliPage from '@/app/bali/page';


interface PageProps {
    params: Promise<{ id: string; }>
}

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

function formatIndianPrice(price: number): string {
    return price.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'decimal',
    });
}

export default function FixedDeparturePage({ params }: PageProps) {
    const { id } = use(params);

    // Look for the destination in both data objects
    const destination: FixedDeparture | DestinationWithoutFlight | undefined =
        Object.values(fixedDeparturesData).find(dest => dest.id === id) ||
        Object.values(destinationsWithoutFlight).find(dest => dest.id === id);

    if (!destination) {
        notFound();
    }

    // Check if it's a fixed departure using the type guard
    const isFixedDep = isFixedDeparture(destination);

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openDay, setOpenDay] = useState<number | null>(null);
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);

    const overviewRef = useRef<HTMLDivElement>(null);
    const itineraryRef = useRef<HTMLDivElement>(null);
    const inclusionsRef = useRef<HTMLDivElement>(null);
    const exclusionsRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);

    useScroll();

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'overview', ref: overviewRef },
                { id: 'itinerary', ref: itineraryRef },
                { id: 'inclusions', ref: inclusionsRef },
                { id: 'exclusions', ref: exclusionsRef },
                { id: 'other', ref: otherRef }
            ];

            // Show floating CTA after scrolling 200px
            setShowFloatingCTA(window.scrollY > 200);

            // Find the current section in view
            for (const section of sections) {
                if (section.ref.current) {
                    const rect = section.ref.current.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveTab(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) =>
                prev === (destination?.images?.length || 1) - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [destination?.images?.length]);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, tabId: string) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(tabId);
    };

    return (
        <div className={`min-h-screen bg-gray-50 ${poppins.className} relative`}>
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentImageIndex}
                        src={destination?.images?.[currentImageIndex] || '/default-image.jpg'}
                        alt={destination.country}
                        className="absolute w-full h-full object-cover object-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                <div className="container mx-auto relative h-full">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <motion.div
                                className="text-white max-w-3xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
                                    {destination.days} Days {destination.country} Tour Package
                                </h1>
                                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-base md:text-lg mb-4 md:mb-0">
                                    <span className="flex items-center gap-3">
                                        <FaCalendarAlt className="text-[#00f6ff] text-xl" />
                                        <span className="text-gray-100">{destination.dateStart} - {destination.dateEnd}</span>
                                    </span>
                                    {isFixedDep && (
                                        <span className="flex items-center gap-3">
                                            <FaPlane className="text-[#00f6ff] text-xl" />
                                            <span className="text-gray-100">{destination.flightFrom}</span>
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                            
                            <div className="flex justify-end">
                                <Button
                                    className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white px-6 py-3 md:px-8 md:py-6 text-base md:text-lg rounded-lg shadow-lg transform transition hover:scale-105"
                                    onClick={() => setIsBookingModalOpen(true)}
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Tabs Navigation */}
            <div
                ref={tabsRef}
                className="sticky top-0 z-50 bg-white border-b shadow-lg mt-0"
            >
                <div className="container mx-auto">
                    <div className="overflow-x-auto scrollbar-hide">
                        <Tabs value={activeTab} className="w-full">
                            <TabsList className="w-full h-14 flex space-x-4 md:space-x-8 min-w-max px-4">
                                {[
                                    { id: 'overview', label: 'Overview & Highlights', ref: overviewRef },
                                    { id: 'itinerary', label: 'Itinerary', ref: itineraryRef },
                                    { id: 'inclusions', label: 'Inclusions', ref: inclusionsRef },
                                    { id: 'exclusions', label: 'Exclusions', ref: exclusionsRef },
                                    { id: 'other', label: 'Other Info', ref: otherRef }
                                ].map(tab => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        onClick={() => scrollToSection(tab.ref, tab.id)}
                                        className={`px-4 py-2 text-sm md:text-base whitespace-nowrap border-b-2 transition-all duration-300 ${activeTab === tab.id
                                                ? 'border-[#017ae3] text-[#017ae3] font-semibold'
                                                : 'border-transparent text-gray-600 hover:text-[#017ae3]'
                                            }`}
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* Main Content - Updated padding for fixed header */}
            <div className="container mx-auto px-4 py-6 space-y-6 md:space-y-8">
                {/* Content sections with refs */}
                <div ref={overviewRef} className="scroll-mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#017ae3] border-b pb-4">
                                    About This Package
                                </h2>

                                <p className="text-gray-600 mb-6">{destination.description}</p>

                                {/* Tour Summary Box */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-lg font-semibold mb-4">Tour Overview</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {destination.tourSummary?.map((day, index) => (
                                            <div key={index} className="flex gap-2">
                                                <span className="text-[#017ae3] font-medium whitespace-nowrap">Day {index + 1}:</span>
                                                <span className="text-gray-600">{day.replace(/^Day \d+: /, '')}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Departure Dates Section */}
                                {destination.groupDetails?.arrivalDate?.includes('Available Dates:') && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-4">Available Departure Dates</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {destination.groupDetails.arrivalDate
                                                .replace('Available Dates: ', '')
                                                .split('|')
                                                .map((dateGroup, index) => (
                                                    <div key={index} className="bg-gray-50 p-3 rounded-lg border">
                                                        <span className="text-gray-700 font-medium">{dateGroup.trim()}</span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tour Details Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {destination.groupDetails && (
                                        <>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Duration</h4>
                                                <p>{destination.groupDetails.duration}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Accommodation</h4>
                                                <p>{destination.groupDetails.rooms}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Group Size</h4>
                                                <p>{destination.groupDetails.pax}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Cost Basis</h4>
                                                <p>{destination.groupDetails.costBasis}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Price Card in sidebar */}
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <div className="text-center mb-4">
                                    {destination.amount && (
                                        <>
                                            <p className="text-gray-500 line-through">₹{formatIndianPrice(destination.amount * 1.2)}/-</p>
                                            <p className="text-3xl font-bold text-[#017ae3]">₹{formatIndianPrice(destination.amount)}/-</p>
                                        </>
                                    )}
                                    <p className="text-sm text-gray-500">per person</p>
                                </div>
                                <Button
                                    className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white font-bold py-3 rounded-lg transition-all duration-300"
                                    onClick={() => setIsBookingModalOpen(true)}
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Updated Itinerary Section */}
                {destination.itinerary && (
                    <div ref={itineraryRef} className="scroll-mt-16 mt-8">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Detailed Itinerary</h2>
                            <div className="space-y-6">
                                {destination.itinerary.map((day, index) => (
                                    <div key={index} className="group">
                                        <div
                                            className="flex items-center gap-4 cursor-pointer bg-gradient-to-r from-[#017ae3]/5 to-[#00f6ff]/5 p-4 rounded-lg hover:from-[#017ae3]/10 hover:to-[#00f6ff]/10 transition-colors"
                                            onClick={() => setOpenDay(openDay === index ? null : index)}
                                        >
                                            <div className="flex-shrink-0 w-24">
                                                <div className="text-sm text-[#017ae3]">Day {day.day}</div>
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="text-lg font-semibold text-gray-800">{day.title}</h3>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <svg
                                                    className={`w-6 h-6 text-[#017ae3] transform transition-transform duration-300 ${openDay === index ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {openDay === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-2 pl-28 pr-4 py-4">
                                                        <p className="text-gray-600">{day.description}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div ref={inclusionsRef} className="scroll-mt-16">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Tour Inclusions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {destination.inclusions?.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div ref={exclusionsRef} className="scroll-mt-16">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Tour Exclusions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {destination.exclusions?.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-red-500 text-xl">✕</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div ref={otherRef} className="scroll-mt-16">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Other Information</h2>
                        {/* Add other relevant information here */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {destination.hotelDetails && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Hotels</h3>
                                    <div className="space-y-4">
                                        {destination.hotelDetails.map((hotel, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-bold text-lg mb-1">{hotel.city}</h4>
                                                <p className="text-gray-600">{hotel.hotel}</p>
                                                <p className="text-gray-500 text-sm">{hotel.roomType}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Add Bali content after Other Information for Bali packages */}
                {destination.country.toLowerCase().includes('bali') && (
                    <div className="mt-12">
                        <BaliBanner />
                        <div className='mt-[50px]'>
                        <BaliPage />
                        </div>
                    </div>
                )}
            </div>

            {/* Add this before the FixedDepartures component */}
            <div className="container mx-auto px-4 py-6">
                {/* Destination Specific Content */}
                {destination.country.toLowerCase().includes('europe') && (
                    <>
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3]">European Sightseeing Highlights</h2>
                            <DestinationSights
                                sights={[
                                    {
                                        name: 'Swedish Market',
                                        location: 'Berlin, Germany',
                                        description: 'Swedish Market is a popular market in Berlin, Germany.',
                                        image: '/UGCImages/Images4/germany/horizontal/1.webp'
                                    },
                                    {
                                        name: 'Ferris Wheel',
                                        location: 'Berlin, Germany',
                                        description: 'Ferris Wheel is a popular attraction in Berlin, Germany.',
                                        image: '/UGCImages/Images4/germany/horizontal/2.webp'
                                    },
                                    {
                                        name: 'Frauenkirche Dresden',
                                        location: 'Dresden, Germany',
                                        description: 'Frauenkirche Dresden is a beautiful church in Dresden, Germany.',
                                        image: '/UGCImages/Images4/germany/horizontal/3.webp'
                                    },
                                    {
                                        name: 'Neuschwanstein Castle',
                                        location: 'Munich, Germany',
                                        description: 'Neuschwanstein Castle is a beautiful castle in Munich, Germany.',
                                        image: '/UGCImages/Images4/germany/horizontal/4.webp'
                                    }
                                ]}
                            />
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3]">Photo Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {destination.images?.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative aspect-square rounded-lg overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${destination.country} tour image ${index + 1}`}
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3]">More European Destinations</h2>
                            <Europe />
                        </div>
                    </>
                )}

                {destination.country.toLowerCase().includes('vietnam') && (
                    <>
                        {/* <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3]">Vietnam Highlights</h2>
                            <DestinationSights 
                                sights={[
                                    {
                                        name: 'Ha Long Bay',
                                        location: 'Quảng Ninh Province',
                                        description: 'A UNESCO World Heritage site featuring thousands of limestone karsts and isles in various shapes and sizes.',
                                        image: '/UGCImages/Images4/vietnam/horizontal/halong.webp'
                                    },
                                    {
                                        name: 'Hoi An Ancient Town',
                                        location: 'Quang Nam Province',
                                        description: 'A well-preserved example of a Southeast Asian trading port from the 15th to 19th centuries.',
                                        image: '/UGCImages/Images4/vietnam/horizontal/hoian.webp'
                                    },
                                    {
                                        name: 'Hanoi Old Quarter',
                                        location: 'Hanoi',
                                        description: 'The historic heart of Hanoi with its maze of streets dating back to the 13th century.',
                                        image: '/UGCImages/Images4/vietnam/horizontal/hanoi.webp'
                                    },
                                    {
                                        name: 'Mekong Delta',
                                        location: 'Southern Vietnam',
                                        description: 'A vast maze of rivers, swamps and islands, home to floating markets, pagodas and villages.',
                                        image: '/UGCImages/Images4/vietnam/horizontal/mekong.webp'
                                    }
                                ]}
                            />
                        </div> */}

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3]">Vietnamese Highlights</h2>
                            <LocalCuisine
                                dishes={[
                                    {
                                        name: 'BEAUTIFUL PAGODAS',
                                        description: 'The pagodas are the most important religious buildings in Vietnam. They are a symbol of the countrys rich culture and history.',
                                        image: '/UGCImages/images5/VIETNAM/VERTICAL/4.webp'
                                    },
                                    {
                                        name: 'Hạ Long Bay',
                                        description: 'Hạ Long Bay is a UNESCO World Heritage site featuring thousands of limestone karsts and isles in various shapes and sizes.',
                                        image: '/UGCImages/images5/VIETNAM/HORIZONTAL/2.webp'
                                    },
                                    {
                                        name: 'Cát Bà Island',
                                        description: 'Cát Bà Island is a beautiful island in Vietnam. It is a popular destination for tourists.',
                                        image: '/UGCImages/images5/VIETNAM/HORIZONTAL/3.webp'
                                    },
                                    {
                                        name: 'Vietnamese Hmong',
                                        description: 'Vietnamese Hmong are a minority ethnic group in Vietnam. They are known for their unique culture and traditions.',
                                        image: '/UGCImages/images5/VIETNAM/HORIZONTAL/7.webp'
                                    }
                                ]}
                            />
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3]">Photo Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {destination.images?.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative aspect-square rounded-lg overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Vietnam tour image ${index + 1}`}
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="">
                <FixedDepartures />
                {/* <ChardhamYatra /> */}
                <Destinations />
                <Trending />
                {/* <BannerCarousel /> */}
                {/* <Indonesia /> */}
                <Domestic />
                <ExoticDestinations />
                <Gallery />
                <Sponsors />
                <ReviewsGlimpse />
            </div>

            {/* Floating CTA Button - Shows on scroll */}
            <AnimatePresence>
                {showFloatingCTA && destination.amount && (
                    <motion.div
                        className="fixed bottom-28 right-4 md:bottom-24 md:right-6 z-30"
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button
                            onClick={() => setIsBookingModalOpen(true)}
                            className="group flex items-center gap-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white px-4 md:px-6 py-3 md:py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                        >
                            <span className="text-sm md:text-base font-semibold">Book Now</span>
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                →
                            </motion.span>
                            <div className="absolute -top-10 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                ₹{formatIndianPrice(destination.amount)}/-
                            </div>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Booking Modal */}
            <BookingOptionsModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                destinationName={`${destination.country} Tour Package`}
                packageDetails={{
                    id: destination.id,
                    country: destination.country,
                    days: destination.days,
                    nights: destination.nights,
                    amount: destination.amount,
                    dateStart: destination.dateStart,
                    dateEnd: destination.dateEnd,
                    images: destination.images,
                    hotelDetails: destination.hotelDetails,
                }}
            />

            {/* Conditionally render flight-specific information */}
            {/* {isFixedDep && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Flight Information</h2>
                    
                </div>
            )} */}

            {/* Add some CSS to handle scrollbar */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
} 