'use client';

import { chardhamData } from '../data';
import { notFound } from 'next/navigation';
import { FaPlane, FaCalendarAlt} from 'react-icons/fa';
import { use, useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { BookingFormModal } from '@/app/components/BookingFormModal';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Poppins } from 'next/font/google';
import ChardhamYatra from '../page';

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

export default function ChardhamYatraPage({ params }: PageProps) {
    const { id } = use(params);
    
    const package_ = Object.values(chardhamData).find(pkg => pkg.id === id);
    
    if (!package_) {
        notFound();
    }

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

            setShowFloatingCTA(window.scrollY > 200);

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
                prev === (package_?.images?.length || 1) - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [package_?.images?.length]);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, tabId: string) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(tabId);
    };

    return (
        <div className={`min-h-screen bg-gray-50 ${poppins.className} relative`}>
            {/* Hero Section */}
            <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.img 
                        key={currentImageIndex}
                        src={package_?.images?.[currentImageIndex] || '/default-image.jpg'}
                        alt={package_.name}
                        className="absolute w-full h-full object-cover object-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                <div className="container mx-auto relative h-full">
                    <motion.div 
                        className="absolute bottom-12 left-4 md:left-8 text-white max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {package_.name}
                        </h1>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-lg">
                            <span className="flex items-center gap-3">
                                <FaCalendarAlt className="text-[#00f6ff] text-2xl" /> 
                                <span className="text-gray-100">{package_.dateStart} - {package_.dateEnd}</span>
                            </span>
                            {package_.flightFrom && (
                                <span className="flex items-center gap-3">
                                    <FaPlane className="text-[#00f6ff] text-2xl" /> 
                                    <span className="text-gray-100">{package_.flightFrom}</span>
                                </span>
                            )}
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-8 right-8">
                    <Button
                        className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white px-8 py-6 text-lg rounded-lg shadow-lg transform transition hover:scale-105"
                        onClick={() => setIsBookingModalOpen(true)}
                    >
                        Book Now
                    </Button>
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
                                        className={`px-4 py-2 text-sm md:text-base whitespace-nowrap border-b-2 transition-all duration-300 ${
                                            activeTab === tab.id 
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

            {/* Main Content */}
            <div className="container mx-auto px-4 py-6 space-y-6 md:space-y-8">
                {/* Overview Section */}
                <div ref={overviewRef} className="scroll-mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#017ae3] border-b pb-4">
                                    About This Package
                                </h2>
                                
                                <p className="text-gray-600 mb-6">{package_.description}</p>

                                {/* Tour Summary Box */}
                                {package_.tourSummary && (
                                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                        <h3 className="text-lg font-semibold mb-4">Tour Overview</h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {package_.tourSummary.map((item, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <span className="text-[#017ae3] font-medium">•</span>
                                                    <span className="text-gray-600">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Package Details Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {package_.groupDetails && (
                                        <>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Duration</h4>
                                                <p>{package_.groupDetails.duration}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Accommodation</h4>
                                                <p>{package_.groupDetails.rooms}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Group Size</h4>
                                                <p>{package_.groupDetails.pax}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Cost Basis</h4>
                                                <p>{package_.groupDetails.costBasis}</p>
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
                                    {package_.amount && (
                                        <>
                                            <p className="text-gray-500 line-through">₹{formatIndianPrice(package_.amount * 1.2)}/-</p>
                                            <p className="text-3xl font-bold text-[#017ae3]">₹{formatIndianPrice(package_.amount)}/-</p>
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

                {/* Itinerary Section */}
                {package_.itinerary && (
                    <div ref={itineraryRef} className="scroll-mt-16">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Detailed Itinerary</h2>
                            <div className="space-y-6">
                                {package_.itinerary.map((day, index) => (
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
                                                    className={`w-6 h-6 text-[#017ae3] transform transition-transform duration-300 ${
                                                        openDay === index ? 'rotate-180' : ''
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

                {/* Inclusions Section */}
                <div ref={inclusionsRef} className="scroll-mt-16">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Package Inclusions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {package_.inclusions?.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Exclusions Section */}
                <div ref={exclusionsRef} className="scroll-mt-16">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-primary border-b pb-4">Package Exclusions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {package_.exclusions?.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-red-500 text-xl">✕</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Other Info Section */}
                <div ref={otherRef} className="scroll-mt-16">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Other Important Information</h2>
                        
                        {/* Terms and Conditions */}
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-lg mb-3">Terms & Conditions</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>Booking amount is non-refundable</li>
                                    <li>All prices are subject to change without prior notice</li>
                                    <li>Government issued ID proof is mandatory for all passengers</li>
                                    <li>Package rates are subject to change during peak season</li>
                                    <li>Weather conditions may affect the tour schedule</li>
                                </ul>
                            </div>

                            {/* Cancellation Policy */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-lg mb-3">Cancellation Policy</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>30 days or more before departure: 25% of total cost</li>
                                    <li>15-29 days before departure: 50% of total cost</li>
                                    <li>7-14 days before departure: 75% of total cost</li>
                                    <li>Less than 7 days before departure: 100% of total cost</li>
                                </ul>
                            </div>

                            {/* Important Notes */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-lg mb-3">Important Notes</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>Carry warm clothes as temperatures can drop significantly</li>
                                    <li>Medical certificate is mandatory for all pilgrims</li>
                                    <li>Children below 5 years and adults above 70 years need special permission</li>
                                    <li>Tour schedule may change due to weather conditions or local factors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Packages Section */}
            <div className="mt-12">
                <ChardhamYatra />
            </div>

            {/* Floating CTA Button */}
            <AnimatePresence>
                {showFloatingCTA && package_.amount && (
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
                                ₹{formatIndianPrice(package_.amount)}/-
                            </div>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Booking Modal */}
            <BookingFormModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                destinationName={package_.name}
                price={package_.amount}
                dates={`${package_.dateStart} - ${package_.dateEnd}`}
            />

            {/* Scrollbar Style */}
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