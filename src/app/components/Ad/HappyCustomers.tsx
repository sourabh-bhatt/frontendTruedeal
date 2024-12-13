'use client'

import { useState, useRef, useEffect } from 'react'
import { TestimonialCard } from './TestimonialCard'
import { ReviewModal } from './ReviewModal'
import { testimonials } from '../../data/testimonials'

export default function HappyCustomers() {
    const [selectedReview, setSelectedReview] = useState<typeof testimonials[0] | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollElement = scrollRef.current
        if (scrollElement) {
            const cardWidth = 300 // width of each card
            const cardMargin = 32 // 2 * mx-4 (16px * 2)
            const totalWidth = testimonials.length * (cardWidth + cardMargin)

            const animationDuration = 40 // seconds for one complete scroll

            scrollElement.style.setProperty('--scroll-width', `-${totalWidth}px`)
            scrollElement.style.setProperty('--animation-duration', `${animationDuration}s`)
        }
    }, [])

    return (
        <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-full mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 font-poppins">
                    <span
                        className="pb-1 relative"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #017ae3, #00f6ff)',
                            backgroundSize: '100% 2px',
                            backgroundPosition: '0 100%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        HAPPY CUSTOM
                    </span>
                    ERS
                </h2>
                <p className="text-md text-center text-gray-600 mb-8 font-poppins">
                    We deliver what we promise. See what clients are expressing about us.
                </p>
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex animate-scroll"
                        style={{
                            '--scroll-width': '0px',
                            '--animation-duration': '0s',
                        } as React.CSSProperties}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-[300px] mx-4 mt-10">
                                <TestimonialCard
                                    {...testimonial}
                                    onClick={() => setSelectedReview(testimonial)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedReview && (
                <ReviewModal
                    isOpen={!!selectedReview}
                    onClose={() => setSelectedReview(null)}
                    review={selectedReview}
                />
            )}
        </section>
    )
}

