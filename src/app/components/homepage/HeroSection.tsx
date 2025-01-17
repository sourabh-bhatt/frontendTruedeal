'use client';

import { useState, useEffect } from 'react'
import { Search, MapPin, Globe } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import TypingAnimation from '../../../components/ui/typing-animation'

interface Destination {
    name: string;
    tag?: {
        label: string;
        color: string;
    };
    isTrending?: boolean;
}

const destinations: Destination[] = [
    { name: 'Maldives', tag: { label: 'HONEYMOON', color: 'pink' } },
    { name: 'Dubai', tag: { label: 'IN SEASON', color: 'green' } },
    { name: 'Singapore' },
    { name: 'Bali', tag: { label: 'POPULAR', color: 'rose' } },
    { name: 'Indonesia' },
    { name: 'Japan' },
    { name: 'Hongkong' },
    { name: 'China' },
    { name: 'Almaty', isTrending: true },
    { name: 'Baku', isTrending: true },
    { name: 'Vietnam', isTrending: true },
    { name: 'Shimla', isTrending: true },
    { name: 'Thailand', tag: { label: 'BUDGET', color: 'amber' } },
    { name: 'SriLanka' },
    { name: 'Bhutan' },
    { name: 'Finland' },
    { name: 'Kenya' },
    { name: 'Malaysia' },
    { name: 'Phillipines' }, //phillipines
    { name: 'Abu Dhabi', tag: { label: 'POPULAR', color: 'violet' } }
]

export default function HeroSection() {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)
    const router = useRouter()
    const [placeholderText, setPlaceholderText] = useState('');
    const placeholderDestinations = ['Almaty', 'Bali', 'Thailand', 'Philippines', 'Kashmir'];
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
    const [isTypingPlaceholder, setIsTypingPlaceholder] = useState(true);

    // Placeholder typing animation effect
    useEffect(() => {
        const currentDestination = placeholderDestinations[currentPlaceholderIndex];
        let timer: NodeJS.Timeout;

        if (isTypingPlaceholder) {
            if (placeholderText.length < currentDestination.length) {
                timer = setTimeout(() => {
                    setPlaceholderText(currentDestination.slice(0, placeholderText.length + 1));
                }, 150); // Typing speed
            } else {
                timer = setTimeout(() => {
                    setIsTypingPlaceholder(false);
                }, 2000); // Wait before erasing
            }
        } else {
            if (placeholderText.length > 0) {
                timer = setTimeout(() => {
                    setPlaceholderText(currentDestination.slice(0, placeholderText.length - 1));
                }, 100); // Erasing speed
            } else {
                setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderDestinations.length);
                setIsTypingPlaceholder(true);
            }
        }

        return () => clearTimeout(timer);
    }, [placeholderText, isTypingPlaceholder, currentPlaceholderIndex, placeholderDestinations]);

    const filteredDestinations = destinations.filter(dest =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleDestinationSelect = (destination: Destination) => {
        setSearchTerm(destination.name)
        setIsSearchModalOpen(false)
        if (destination.isTrending) {
            router.push(`/trending/${destination.name.toLowerCase()}`)
        } else {
            router.push(`/destinations/${destination.name.toLowerCase()}`)
        }
    }

    const highlightMatch = (text: string, highlight: string) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ?
                        <span key={index} className="bg-yellow-200 text-gray-800">{part}</span> :
                        part
                )}
            </span>
        );
    }

    const SearchContent = () => (
        <div className="w-full">
            <div className="relative">
                <Input
                    type="text"
                    placeholder=""
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gradient-to-r from-[#e7e9ec] to-[#00f6ff] text-black border-0 rounded-full h-12 px-6 pr-12 shadow-lg focus:ring-0 focus:ring-offset-0 hover:opacity-90 transition-all duration-300 placeholder-white"
                    autoFocus
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
            </div>

            <div className="mt-4 bg-white rounded-xl shadow-lg max-h-[60vh] overflow-y-auto">
                {filteredDestinations.length > 0 ? (
                    <div className="p-2">
                        {filteredDestinations.map((dest, index) => (
                            <motion.button
                                key={dest.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.15, delay: index * 0.03 }}
                                onClick={() => handleDestinationSelect(dest)}
                                className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 rounded-xl transition-all hover:bg-gray-50"
                                role="option"
                            >
                                <span className="flex-shrink-0">
                                    {dest.isTrending ? (
                                        <Globe className="h-5 w-5 text-blue-500" />
                                    ) : (
                                        <MapPin className="h-5 w-5 text-gray-400" />
                                    )}
                                </span>
                                <span className="flex-grow font-medium">
                                    {highlightMatch(dest.name, searchTerm)}
                                </span>
                                <div className="flex gap-2 items-center">
                                    {dest.tag && (
                                        <span className={`flex-shrink-0 px-2 py-1 text-xs font-medium rounded-full
                                            ${dest.tag.label === 'Family' ? 'bg-pink-100 text-pink-700' :
                                                dest.tag.label === 'POPULAR' ? 'bg-rose-100 text-rose-700' :
                                                    dest.tag.label === 'BUDGET' ? 'bg-amber-100 text-amber-700' :
                                                        `bg-${dest.tag.color}-100 text-${dest.tag.color}-700`}`}>
                                            {dest.tag.label}
                                        </span>
                                    )}
                                    {dest.isTrending && (
                                        <span className="flex-shrink-0 px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                                            Trending
                                        </span>
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                ) : (
                    <div className="p-8 text-center text-gray-500">
                        No destinations found for &quot;{searchTerm}&quot;
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="relative min-h-[70svh] md:min-h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 h-[70svh] md:h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="https://res.cloudinary.com/dwwyljy3m/video/upload/v1735820545/bgVideoLoop_rszpwq.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
            </div>

            {/* Content */}
            <div className="relative z-[2] flex flex-col items-center justify-center min-h-[70svh] md:min-h-screen text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl mb-2 text-center">
                    <span className='font-poppins font-semibold'>Discover Your Dream Vacation with</span>{' '}
                    <span className='font-poppins font-bold'>Truedeal</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-md mb-2 md:mb-4 text-center font-poppins font-semibold">
                    GET READY FOR TAKE OFF
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-3xl mb-6 md:mb-8 text-center font-poppins font-bold text-yellow-500">
                    <TypingAnimation>
                        Search your holiday
                    </TypingAnimation>
                </h2>

                <div className="w-full max-w-xl mx-auto font-poppins px-4">
                    <button
                        onClick={() => setIsSearchModalOpen(true)}
                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white border-0 rounded-full h-12 px-6 shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-between"
                    >
                        <span className="text-white/75">
                            {placeholderText ? `Search ${placeholderText}...` : 'Search countries, cities...'}
                        </span>
                        <Search className="h-5 w-5 text-white" />
                    </button>

                    {/* Search Modal */}
                    <Dialog open={isSearchModalOpen} onOpenChange={setIsSearchModalOpen}>
                        <DialogContent className="sm:max-w-xl bg-white border-gray-800">
                            <DialogTitle className="sr-only">Search Destinations</DialogTitle>
                            <div className="pt-4">
                                <SearchContent />
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}
