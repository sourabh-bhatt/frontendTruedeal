"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface GalleryModalProps {
    isOpen: boolean
    onClose: () => void
    images: { src: string; alt: string }[]
}

export function GalleryModal({ isOpen, onClose, images }: GalleryModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    if (!isOpen) return null

    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] opacity-90" onClick={onClose} />
            <div className="relative w-full max-w-4xl p-4">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-6 top-6 z-50 bg-black/20 hover:bg-black/40 text-white"
                    onClick={onClose}
                >
                    <X className="h-6 w-6" />
                </Button>
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                    onClick={handlePrevious}
                >
                    <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                    onClick={handleNext}
                >
                    <ChevronRight className="h-8 w-8" />
                </Button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                                }`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

