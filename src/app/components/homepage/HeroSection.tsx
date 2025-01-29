"use client"

import { useState, useEffect, useMemo, useCallback, useRef } from "react"
import { Search, MapPin, Globe, Award, Briefcase, CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import TypingAnimation from "../../../components/ui/typing-animation"
import FirstTimeTravelMessage from "./FirstTimeTravelMessage"

interface Destination {
    name: string
    tag?: {
        label: string
        color: string
    }
    isTrending?: boolean
}

const destinations: Destination[] = [
    { name: "Maldives", tag: { label: "HONEYMOON", color: "pink" } },
    { name: "Dubai", tag: { label: "IN SEASON", color: "green" } },
    { name: "Singapore" },
    { name: "Bali", tag: { label: "POPULAR", color: "rose" } },
    { name: "Indonesia" },
    { name: "Japan" },
    { name: "Hongkong" },
    { name: "China" },
    { name: "Almaty", isTrending: true },
    { name: "Baku", isTrending: true },
    { name: "Vietnam", isTrending: true },
    { name: "Shimla", isTrending: true },
    { name: "Thailand", tag: { label: "BUDGET", color: "amber" } },
    { name: "SriLanka" },
    { name: "Bhutan" },
    { name: "Finland" },
    { name: "Kenya" },
    { name: "Malaysia" },
    { name: "Phillipines" },
    { name: "Abu Dhabi", tag: { label: "POPULAR", color: "violet" } },
]

const placeholderDestinations = ["Almaty", "Bali", "Thailand", "Phillipines", "Kashmir"]

export default function HeroSection() {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>("")
    const router = useRouter()
    const [placeholderText, setPlaceholderText] = useState("")
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)
    const [isTypingPlaceholder, setIsTypingPlaceholder] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const filteredDestinations = useMemo(
        () => destinations.filter((dest) => dest.name.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm],
    )

    const handleDestinationSelect = useCallback(
        (destination: Destination) => {
            setSearchTerm(destination.name)
            setIsSearchModalOpen(false)
            if (destination.isTrending) {
                router.push(`/trending/${destination.name.toLowerCase()}`)
            } else {
                router.push(`/destinations/${destination.name.toLowerCase()}`)
            }
        },
        [router],
    )

    const highlightMatch = useCallback((text: string, highlight: string) => {
        if (!highlight) return text
        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return (
            <span>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className="bg-yellow-200 text-gray-800">
                            {part}
                        </span>
                    ) : (
                        part
                    ),
                )}
            </span>
        )
    }, [])

    // Placeholder typing animation effect
    useEffect(() => {
        const currentDestination = placeholderDestinations[currentPlaceholderIndex]
        let timer: NodeJS.Timeout

        if (isTypingPlaceholder) {
            if (placeholderText.length < currentDestination.length) {
                timer = setTimeout(() => {
                    setPlaceholderText(currentDestination.slice(0, placeholderText.length + 1))
                }, 150) // Typing speed
            } else {
                timer = setTimeout(() => {
                    setIsTypingPlaceholder(false)
                }, 2000) // Wait before erasing
            }
        } else {
            if (placeholderText.length > 0) {
                timer = setTimeout(() => {
                    setPlaceholderText(currentDestination.slice(0, placeholderText.length - 1))
                }, 100) // Erasing speed
            } else {
                setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderDestinations.length)
                setIsTypingPlaceholder(true)
            }
        }

        return () => clearTimeout(timer)
    }, [placeholderText, isTypingPlaceholder, currentPlaceholderIndex])

    useEffect(() => {
        if (isSearchModalOpen && inputRef.current) {
            const timer = setTimeout(() => {
                inputRef.current?.focus()
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [isSearchModalOpen])

    const SearchContent = useCallback(
        () => (
            <div className="w-full flex flex-col h-full">
                <div className="p-4 border-b flex-shrink-0">
                    <div className="relative">
                        <Input
                            ref={inputRef}
                            type="text"
                            placeholder="Search countries, cities..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gradient-to-r from-[#e7e9ec] to-[#00f6ff] text-black border-0 rounded-full h-12 px-6 pr-12 shadow-lg focus:ring-0 focus:ring-offset-0 hover:opacity-90 transition-all duration-300 placeholder-gray-500"
                            autoComplete="off"
                            autoFocus
                        />
                        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {filteredDestinations.length > 0 ? (
                        <div className="p-2 space-y-2">
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
                                    <span className="flex-grow font-medium truncate">{highlightMatch(dest.name, searchTerm)}</span>
                                    <div className="flex gap-2 items-center flex-shrink-0">
                                        {dest.tag && (
                                            <span
                                                className={`flex-shrink-0 px-2 py-1 text-xs font-medium rounded-full
                        ${dest.tag.label === "Family"
                                                        ? "bg-pink-100 text-pink-700"
                                                        : dest.tag.label === "POPULAR"
                                                            ? "bg-rose-100 text-rose-700"
                                                            : dest.tag.label === "BUDGET"
                                                                ? "bg-amber-100 text-amber-700"
                                                                : `bg-${dest.tag.color}-100 text-${dest.tag.color}-700`
                                                    }`}
                                            >
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
                        <div className="p-8 text-center text-gray-500">No destinations found for &quot;{searchTerm}&quot;</div>
                    )}
                </div>
            </div>
        ),
        [searchTerm, filteredDestinations, handleDestinationSelect, highlightMatch],
    )

    const StatsSection = () => (
        <div className="z-[2] md:block hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
                    {/* MICE Services */}
                    <div className="flex flex-col items-center text-white">
                        <div className="mb-2">
                            <Briefcase className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-sm">MICE</p>
                            <p className="text-xs">Specialists</p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="flex flex-col items-center text-white">
                        <div className="mb-2">
                            <Award className="w-8 h-8 text-yellow-400" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-sm">10+ Years</p>
                            <p className="text-xs">Experience</p>
                        </div>
                    </div>


                    {/* EMI */}
                    <div className="flex flex-col items-center text-white">
                        <div className="mb-2">
                            <CreditCard className="w-8 h-8 text-purple-400" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-sm">No Cost</p>
                            <p className="text-xs">EMI Available</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )

    // Mobile stats section
    const MobileStatsSection = () => (
        <div className="md:hidden block">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
                    {/* MICE Services */}
                    <div className="flex flex-col items-center text-white">
                        <div className="mb-1">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-xs">MICE</p>
                            <p className="text-[10px]">Specialists</p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="flex flex-col items-center text-white">
                        <div className="mb-1">
                            <Award className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-xs">10+ Years</p>
                            <p className="text-[10px]">Experience</p>
                        </div>
                    </div>


                    {/* EMI */}
                    <div className="flex flex-col items-center text-white">
                        <div className="mb-1">
                            <CreditCard className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-xs">No Cost</p>
                            <p className="text-[10px]">EMI Available</p>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="relative min-h-[65svh] md:min-h-[85vh] overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 h-[65svh] md:h-[85vh]">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
                        poster="/Assets/HeroSectionImages/video-poster.jpg"
                    >
                        <source
                            src="/Assets/HeroSectionImages/bgg.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
                </div>

                {/* Content */}
                <div className="relative z-[2] flex flex-col items-center justify-start md:justify-center min-h-[65svh] md:min-h-[85vh] text-white px-4 sm:px-6 lg:px-8 pt-32 md:pt-0 md:py-0">
                    <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-2 text-center mt-0 md:mt-8">
                        <span className="font-poppins font-semibold">Discover Your Dream Vacation with</span>{" "}
                        <span className="font-poppins font-bold">Truedeal</span>
                    </h1>
                    <p className="text-xs sm:text-sm md:text-sm mb-2 md:mb-4 text-center font-poppins font-semibold">
                        GET READY FOR TAKE OFF
                    </p>
                    <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-center font-poppins font-bold text-yellow-500">
                        <TypingAnimation>Search your holiday</TypingAnimation>
                    </h2>

                    <div className="w-full max-w-xl mx-auto font-poppins px-4">
                        <button
                            onClick={() => setIsSearchModalOpen(true)}
                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white border-0 rounded-full h-12 px-6 shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-between"
                        >
                            <span className="text-white/75 truncate">
                                {placeholderText ? `Search ${placeholderText}...` : "Search countries, cities..."}
                            </span>
                            <Search className="h-5 w-5 text-white flex-shrink-0 ml-2" />
                        </button>

                        {/* Search Modal */}
                        <Dialog open={isSearchModalOpen} onOpenChange={setIsSearchModalOpen}>
                            <DialogContent className="sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40vw] bg-white border-gray-800 w-[90vw] h-[80vh] max-h-[600px] overflow-hidden flex flex-col">
                                <DialogTitle className="sr-only">Search Destinations</DialogTitle>
                                <SearchContent />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Move stats sections here, right after the search bar */}
                    <div className="mt-10">
                        <MobileStatsSection />
                        <StatsSection />
                    </div>
                </div>
            </div>
            <FirstTimeTravelMessage />
        </>
    )
}


