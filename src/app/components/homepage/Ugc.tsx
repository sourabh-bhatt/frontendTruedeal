'use client'

import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
    videoUrl: string
}

const testimonials: Testimonial[] = [
    { videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821588/ugcUtvBikeRide_jkfvqs.mp4" },
    { videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821576/aeroplaneView_rjfn1g.mp4" },
    { videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821575/atvBikeRideSunset_vtflt1.mp4" },
    { videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821572/IMG_9626_qhjfu5.mp4" },
]

export default function WallOfLove() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftButton, setShowLeftButton] = useState(false)
    const [showRightButton, setShowRightButton] = useState(false)

    const updateButtonVisibility = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftButton(scrollLeft > 0)
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    useEffect(() => {
        updateButtonVisibility()
        window.addEventListener('resize', updateButtonVisibility)
        return () => window.removeEventListener('resize', updateButtonVisibility)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="bg-[#7C3AED] text-white px-4 sm:px-6 py-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute bottom-0 left-0 text-white/5 w-[800px] h-[800px] -translate-x-1/2 translate-y-1/4" viewBox="0 0 100 100">
                    <path d="M0,50 a1,1 0 0,0 100,0" fill="none" stroke="currentColor" strokeWidth="20" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="mb-12">
                    <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Dubai Memories</h2>
                    <p className="text-xl text-white/90 mb-6">
                        Loved by travellers & industry partners across the world
                    </p>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white rounded-full p-1.5">
                                <img src="/Assets/Icons/icons8-google.svg" alt="Google" className="w-5 h-5" />
                            </div>
                            <div className="bg-white rounded-full p-1.5">
                                <img src="/Assets/Icons/icons8-instagram.svg" alt="Instagram" className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">4.6</span>
                            <Star className="w-5 h-5 fill-current text-yellow-400" />
                            <span className="text-base text-white/90">7400+ reviews</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                        onScroll={updateButtonVisibility}
                    >
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="flex-none w-[300px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden snap-center border-0"
                            >
                                <video
                                    className="w-full aspect-[3/5] object-cover rounded-b-2xl"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    // loading="lazy"
                                    preload="metadata"
                                >
                                    <source src={testimonial.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Card>
                        ))}
                    </div>

                    {showLeftButton && (
                        <Button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 p-0"
                            size="icon"
                            variant="ghost"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </Button>
                    )}

                    {showRightButton && (
                        <Button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 p-0"
                            size="icon"
                            variant="ghost"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}

