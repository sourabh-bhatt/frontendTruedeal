import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface ReviewModalProps {
    isOpen: boolean
    onClose: () => void
    review: {
        name: string
        role: string
        fullReview: string
        avatar: string
        destination: string
        travelDate: string
        images: string[]
    }
}

export function ReviewModal({ isOpen, onClose, review }: ReviewModalProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideInterval = useRef<NodeJS.Timeout>()

    useEffect(() => {
        if (isOpen && !selectedImageIndex) {
            slideInterval.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % review.images.length)
            }, 3000)
        }
        return () => clearInterval(slideInterval.current)
    }, [isOpen, review.images.length, selectedImageIndex])

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index)
        clearInterval(slideInterval.current)
    }

    const handleNavigate = (direction: 'prev' | 'next') => {
        if (selectedImageIndex === null) return
        const newIndex = direction === 'prev'
            ? (selectedImageIndex - 1 + review.images.length) % review.images.length
            : (selectedImageIndex + 1) % review.images.length
        setSelectedImageIndex(newIndex)
    }

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[450px] max-w-[95vw] p-0 bg-transparent border-none shadow-2xl">
                    <div className="relative p-[2px] bg-gradient-to-r from-[#017ae3] via-[#00f6ff] to-[#017ae3] rounded-2xl animate-border-breath">
                        <div className="bg-white p-4 sm:p-6 rounded-2xl relative overflow-hidden">
                            <DialogTitle className="sr-only">
                                {review.name}'s Review
                            </DialogTitle>

                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 via-transparent to-transparent opacity-40 rounded-full blur-2xl animate-pulse" />

                            {/* Header with Avatar and Details */}
                            <div className="flex items-start gap-3 sm:gap-4 mb-4 relative">
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-[-2px] bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full animate-pulse" />
                                    <div className="relative rounded-full overflow-hidden w-14 h-14 sm:w-16 sm:h-16 border-2 border-white">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            className="object-cover"
                                            fill
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent truncate">
                                        {review.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 truncate">{review.role}</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} className="fill-[#017ae3] text-[#017ae3]" />
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                        Travelled to <span className="font-semibold text-[#017ae3]">{review.destination}</span> in {review.travelDate}
                                    </p>
                                </div>
                            </div>

                            {/* Review Content */}
                            <div className="relative my-4 px-2 sm:px-4">
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    {review.fullReview}
                                </p>
                            </div>

                            {/* Image Gallery */}
                            <div className="relative h-48 sm:h-56 mt-4 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                    {review.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative min-w-full h-48 sm:h-56 cursor-pointer group"
                                            onClick={() => handleImageClick(index)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Review image ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {review.images.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Fullscreen Image Gallery */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center">
                    <button
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2"
                        aria-label="Close gallery"
                    >
                        <X size={24} />
                    </button>

                    <button
                        onClick={() => handleNavigate('prev')}
                        className="absolute left-2 sm:left-4 text-white/80 hover:text-white transition-colors p-2"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={30} />
                    </button>

                    <button
                        onClick={() => handleNavigate('next')}
                        className="absolute right-2 sm:right-4 text-white/80 hover:text-white transition-colors p-2"
                        aria-label="Next image"
                    >
                        <ChevronRight size={30} />
                    </button>

                    <div className="relative w-[90vw] h-[90vh] max-w-5xl max-h-[80vh]">
                        <Image
                            src={review.images[selectedImageIndex]}
                            alt={`Full size image ${selectedImageIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="90vw"
                            priority
                        />
                    </div>

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 bg-black/50 px-3 py-1 rounded-full text-sm">
                        {selectedImageIndex + 1} / {review.images.length}
                    </div>
                </div>
            )}
        </>
    )
}

