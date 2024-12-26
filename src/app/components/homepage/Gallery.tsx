'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
    "/IMAGES/Almaty/2/1.webp",
    "/IMAGES/Baku/2/1.webp",
    "/IMAGES/Vietnam/1/1.webp",
    "/IMAGES/Shimla/1/1.webp",
    "/IMAGES/Almaty/2/2.webp",
    "/IMAGES/Baku/2/2.webp",
    "/IMAGES/Vietnam/1/2.webp",
    "/IMAGES/Shimla/1/2.webp",
    "/IMAGES/Almaty/2/3.webp",
    "/IMAGES/Baku/2/3.webp",
    "/IMAGES/Vietnam/1/3.webp",
    "/IMAGES/Shimla/1/3.webp",
    "/IMAGES/Almaty/2/4.webp",

]

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handleTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            handleNext()
        }
        if (touchEndX.current - touchStartX.current > 50) {
            handlePrev()
        }
    }

    return (
        <div className="relative w-full h-[700px] md:h-[800px] my-8 md:my-16 flex items-center justify-center">
            <div
                className="relative w-full h-full overflow-hidden bg-gray-100 rounded-b-[50%] flex items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Curved background - adjusted positioning */}
                <div className="absolute w-[150%] h-[150%] top-0 left-1/2 transform -translate-x-1/2 bg-white">
                    <div className="absolute bottom-0 w-full h-1/2 bg-gray-100 rounded-t-[50%]"></div>
                </div>

                {/* Images */}
                {images.map((src, index) => {
                    const angle = ((index - currentIndex + images.length) % images.length) * (360 / images.length)
                    const isActive = index === currentIndex
                    const translateDistance = window.innerWidth < 768 ? '180px' : '250px'
                    return (
                        <div
                            key={index}
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${isActive ? 'scale-125 z-10' : 'scale-100 z-0'
                                }`}
                            style={{
                                width: window.innerWidth < 768 ? '150px' : '200px',
                                height: window.innerWidth < 768 ? '150px' : '200px',
                                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${translateDistance}) rotate(-${angle}deg)`,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    )
                })}

                {/* Navigation controls */}
                <button
                    onClick={handlePrev}
                    className="absolute top-[45%] left-4 md:left-8 transform -translate-y-1/2 bg-white/80 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-[45%] right-4 md:right-8 transform -translate-y-1/2 bg-white/80 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>
        </div>
    )
}

