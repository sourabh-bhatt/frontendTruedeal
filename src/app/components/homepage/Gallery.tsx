'use client';

import { useState, useEffect, useRef, TouchEvent, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
    "/GoogleReviews/2/IMG-20250103-WA0046.jpg",
    "/GoogleReviews/1/Screenshot 2025-01-07 031446.png",
    "/GoogleReviews/3/shubham (1).png",
    "/GoogleReviews/4/Screenshot 2025-01-07 042033.png",
    "/GoogleReviews/5/akb (1).png",
    "/GoogleReviews/6/a (1).png",
    "/GoogleReviews/7/surya (1).png",
    "/GoogleReviews/8/andaman (1).png",
    "/GoogleReviews/9/vc (1).png",
    "/GoogleReviews/10/chintan (1).png",
    "/GoogleReviews/11/swetabh (1).png",
    "/GoogleReviews/12/bp (1).png",
    "/GoogleReviews/13/Screenshot 2025-01-08 143830.png",
    "/GoogleReviews/14/Screenshot 2025-01-08 150530.png",
    "/GoogleReviews/15/susovan (1).png",
    "/GoogleReviews/16/akash (1).png",
    "/GoogleReviews/17/Screenshot 2025-01-08 152252.png",
]

export default function CurvedGallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    const wrappedIndex = useCallback((index: number) => {
        return ((index % images.length) + images.length) % images.length
    }, [])

    const startAutoPlay = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current)
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex(prev => wrappedIndex(prev + 1))
        }, 3000)
    }, [wrappedIndex])

    useEffect(() => {
        startAutoPlay()
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current)
        }
    }, [startAutoPlay])

    const handleImageTransition = (newIndex: number) => {
        if (!isTransitioning) {
            setIsTransitioning(true)
            setCurrentIndex(newIndex)
            if (autoPlayRef.current) clearInterval(autoPlayRef.current)

            setTimeout(() => {
                setIsTransitioning(false)
                startAutoPlay()
            }, 500)
        }
    }

    const handlePrev = () => handleImageTransition(wrappedIndex(currentIndex - 1))
    const handleNext = () => handleImageTransition(wrappedIndex(currentIndex + 1))

    const handleImageClick = (index: number) => {
        if (index < 2) handlePrev()
        if (index > 2) handleNext()
    }

    const handleTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
        if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }

    const handleTouchMove = (e: TouchEvent) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        const swipeDistance = touchStartX.current - touchEndX.current
        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
                handleNext()
            } else {
                handlePrev()
            }
        }
        startAutoPlay() // Restart autoplay after touch interaction
    }

    const getVisibleImages = () => {
        const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 5
        const offset = Math.floor(count / 2)
        const visibleImages = []
        for (let i = -offset; i <= offset; i++) {
            visibleImages.push(images[wrappedIndex(currentIndex + i)])
        }
        return visibleImages
    }

    return (
        <div className="w-full min-h-[50vh] md:min-h-screen bg-gradient-to-b from-gray-10 to-gray-10 py-6 md:py-12">
            <h1 className="text-center text-2xl md:text-3xl font-semibold mb-6 md:mb-12 text-gray-800 px-4">
                Pictures Perfect Moments
            </h1>

            <div className="relative max-w-[1600px] mx-auto px-2 md:px-4">
                <div
                    className="relative overflow-hidden py-6 md:py-12"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className={`flex justify-center items-center gap-2 md:gap-6 transition-all duration-700 ease-out ${isTransitioning ? 'opacity-90 scale-98' : 'opacity-100 scale-100'
                            }`}
                    >
                        {getVisibleImages().map((src, index) => {
                            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
                            const isCenter = isMobile ? index === 1 : index === 2

                            return (
                                <div
                                    key={index}
                                    onClick={() => handleImageClick(index)}
                                    className={`relative cursor-pointer transition-all duration-500 ease-out
                                        ${isCenter
                                            ? 'w-[280px] md:w-[500px] h-[200px] md:h-[350px] z-30 scale-110 hover:scale-115'
                                            : 'w-[200px] md:w-[400px] h-[150px] md:h-[280px] z-20 opacity-70 hover:opacity-90 hover:scale-105'
                                        }
                                        ${isMobile ? 'mx-[-20px] md:mx-0' : ''}
                                    `}
                                    style={{
                                        perspective: '1500px',
                                        transformStyle: 'preserve-3d',
                                        transform: `
                                            ${isMobile
                                                ? index === 0
                                                    ? 'translateX(10%) rotateY(20deg)'
                                                    : index === 2
                                                        ? 'translateX(-10%) rotateY(-20deg)'
                                                        : 'rotateY(0deg) translateZ(30px)'
                                                : index === 0
                                                    ? 'translateX(15%) rotateY(35deg)'
                                                    : index === 1
                                                        ? 'translateX(8%) rotateY(20deg)'
                                                        : index === 3
                                                            ? 'translateX(-8%) rotateY(-20deg)'
                                                            : index === 4
                                                                ? 'translateX(-15%) rotateY(-35deg)'
                                                                : 'rotateY(0deg) translateZ(50px)'
                                            }
                                        `
                                    }}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden 
                                            ${isCenter
                                                ? 'shadow-2xl shadow-black/30 ring-1 md:ring-2 ring-white/50'
                                                : 'shadow-xl shadow-black/10'
                                            }
                                            transition-all duration-500 ease-out
                                            hover:shadow-2xl hover:shadow-black/40`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                                            sizes="(max-width: 768px) 280px, (max-width: 1200px) 400px, 500px"
                                            priority={isCenter}
                                        />
                                        {isCenter && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 lg:left-4 bg-white/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-40"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 lg:right-4 bg-white/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-40"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
                </button>
            </div>
        </div>
    )
}

