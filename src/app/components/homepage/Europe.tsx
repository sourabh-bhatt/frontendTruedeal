'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Destination {
    name: string
    price: string
    image: string
}

const destinations: Destination[] = [
    {
        name: 'Andaman',
        price: '29,999',
        image: '/IMAGES/Shimla/2/1.webp'
    },
    {
        name: 'Rajasthan',
        price: '12,999',
        image: '/IMAGES/Shimla/2/2.webp'
    },
    {
        name: 'Kashmir',
        price: '24,499',
        image: '/IMAGES/Shimla/2/3.webp'
    },
    {
        name: 'Himachal',
        price: '7,999',
        image: '/IMAGES/Shimla/2/4.webp'
    },
    {
        name: 'Kerala',
        price: '12,999',
        image: '/IMAGES/Shimla/2/1.webp'
    },
    {
        name: 'Shimla',
        price: '12,999',
        image: '/IMAGES/Shimla/2/2.webp'
    },
    {
        name: 'Punjab',
        price: '12,999',
        image: '/IMAGES/Shimla/2/3.webp'
    },
    {
        name: 'Bihar',
        price: '12,999',
        image: '/IMAGES/Shimla/2/4.webp'
    },
]

export default function Europe() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Create an infinitely repeating array
    const infiniteDestinations = [...destinations, ...destinations, ...destinations]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1
            // When we reach the end of the first set, reset to show from first set
            if (nextIndex >= destinations.length) {
                return 0
            }
            return nextIndex
        })
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex - 1
            // When we go before the first item, jump to last item of first set
            if (nextIndex < 0) {
                return destinations.length - 1
            }
            return nextIndex
        })
    }

    return (
        <section className="relative w-full mb-40">
            <div className="h-[70vh] px-8">
                {/* Container for video with rounded corners */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="/Assets/HeroSectionImages/domestic.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col px-8 py-12 max-w-[1400px] mx-auto">
                        {/* Header Content */}
                        <div className="text-white">
                            <h1 className="text-5xl font-bold mb-3">Explore Europe</h1>
                            <p className="text-xl font-light mb-6">A Journey Through Time, Colour And Culture</p>
                            <button className="px-8 py-2.5 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-500 transition-colors text-sm">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Destinations Carousel */}
            <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 px-12 max-w-[1400px] mx-auto">
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-5"
                        animate={{
                            x: `${-currentIndex * (220 + 20)}px` // card width + gap
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                    >
                        {infiniteDestinations.map((destination, index) => (
                            <motion.div
                                key={`${destination.name}-${index}`}
                                className="relative min-w-[220px] h-[280px] rounded-2xl overflow-hidden flex-shrink-0 group shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1
                                }}
                            >
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {destination.name}
                                    </h3>
                                    <p className="text-sm text-white/90">
                                        Starting Price Rs. {destination.price}/-
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 bg-cyan-500 p-2.5 rounded-full shadow-lg hover:bg-cyan-600 transition-colors z-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="white"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 bg-cyan-500 p-2.5 rounded-full shadow-lg hover:bg-cyan-600 transition-colors z-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="white"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </section>
    )
}