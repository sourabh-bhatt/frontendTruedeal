"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, TouchEvent } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
}

export function GalleryModal({ isOpen, onClose, images }: GalleryModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isSwiping, setIsSwiping] = useState(false);

    // Reset touch states when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTouchStart(null);
            setTouchEnd(null);
            setIsSwiping(false);
        }
    }, [isOpen]);

    const showNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const showPreviousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Handle touch events for swipe
    const handleTouchStart = (e: TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
        setIsSwiping(true);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            showNextImage();
        } else if (isRightSwipe) {
            showPreviousImage();
        }

        setTouchStart(null);
        setTouchEnd(null);
        setIsSwiping(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[95vw] sm:max-w-[90vw] h-[85vh] sm:h-[95vh] p-0 bg-white/80 backdrop-blur-md border-none shadow-2xl rounded-xl overflow-hidden">
                <VisuallyHidden>
                    <DialogTitle>Image Gallery</DialogTitle>
                </VisuallyHidden>

                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 sm:right-4 sm:top-4 bg-white/90 p-1.5 sm:p-2 rounded-full hover:bg-white transition-all z-50 touch-none"
                >
                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                </button>

                <div
                    className="relative w-full h-full flex items-center justify-center touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        transform: isSwiping && touchStart && touchEnd
                            ? `translateX(${touchEnd - touchStart}px)`
                            : 'translateX(0)',
                        transition: isSwiping ? 'none' : 'transform 0.3s ease-out'
                    }}
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        fill
                        className="object-contain p-2 sm:p-4"
                        priority
                        sizes="(max-width: 768px) 95vw, 90vw"
                        quality={100}
                    />

                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full touch-none">
                        <p className="text-xs sm:text-sm font-medium">
                            {currentImageIndex + 1} / {images.length}
                        </p>
                    </div>

                    {/* Navigation buttons visible on both mobile and desktop */}
                    <button
                        onClick={showPreviousImage}
                        className="absolute left-2 sm:left-4 bg-white/90 p-1.5 sm:p-3 rounded-full hover:bg-white transition-all z-50 group touch-none"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700 group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={showNextImage}
                        className="absolute right-2 sm:right-4 bg-white/90 p-1.5 sm:p-3 rounded-full hover:bg-white transition-all z-50 group touch-none"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-700 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}