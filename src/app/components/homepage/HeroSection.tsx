'use client';

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const destinations = [
    'Thailand',
    'Dubai',
    'Singapore',
    'Bali',
    'Indonesia',
    'Japan',
    'Hongkong',
    'China',
    'Almaty',
    'Baku',
    'Vietnam',
    'Shimla',
    'Maldives',
    'SriLanka',
]

const trendingDestinations = ['Almaty', 'Baku', 'Vietnam', 'Shimla']

export default function HeroSection() {
    const [destination, setDestination] = useState<string>('')
    const router = useRouter()

    const handleDestinationChange = (value: string) => {
        setDestination(value)
        if (value) {
            if (trendingDestinations.includes(value)) {
                router.push(`/trending/${value.toLowerCase()}`)
            } else {
                router.push(`/destinations/${value.toLowerCase()}`)
            }
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Video */}
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>

            {/* Content */}
            <div className="relative z-[2] flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl mb-2 text-center">
                    <span className='font-poppins font-semibold'>Discover Your Dream Vacation with</span>{' '}
                    <span className='font-poppins font-bold'>Truedeal</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-md mb-4 text-center font-poppins font-semibold">
                    GET READY FOR TAKE OFF
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-3xl mb-8 text-center font-poppins font-bold">
                    Search <span className="underline">your Holida</span>y
                </h2>

                <div className=" p-4 sm:p-6 w-full max-w-4xl mx-auto font-poppins rounded-lg">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col items-center">
                            <div className="w-full max-w-xl">
                                <Select onValueChange={handleDestinationChange} value={destination}>
                                    <SelectTrigger
                                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white border-0 rounded-full h-12 px-6 shadow-lg focus:ring-0 focus:ring-offset-0 hover:opacity-90 transition-all duration-300"
                                    >
                                        <Search className="mr-2 h-5 w-5 text-white" />
                                        <SelectValue placeholder="Search countries, cities" />
                                    </SelectTrigger>
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <SelectContent
                                                className="bg-white border-0 shadow-xl rounded-lg mt-2 p-2 backdrop-blur-sm bg-opacity-95"
                                                position="popper"
                                            >
                                                {destinations.map((dest) => (
                                                    <SelectItem
                                                        key={dest}
                                                        value={dest}
                                                        className="text-gray-700 hover:bg-gradient-to-r hover:from-[#017ae3] hover:to-[#00f6ff] hover:text-white cursor-pointer py-3 px-4 rounded-md transition-all duration-200"
                                                    >
                                                        {dest}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </motion.div>
                                    </AnimatePresence>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

