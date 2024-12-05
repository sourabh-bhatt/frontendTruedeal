"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
}

export function GalleryModal({ isOpen, onClose, images }: GalleryModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const showPreviousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[90vw] h-[90vh] p-0 backdrop-blur-sm">
                <VisuallyHidden>
                    <DialogTitle>Image Gallery</DialogTitle>
                </VisuallyHidden>
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                        src={images[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                    />

                    <button
                        onClick={showPreviousImage}
                        className="absolute left-4 text-white hover:text-gray-300 z-50"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>

                    <button
                        onClick={showNextImage}
                        className="absolute right-4 text-white hover:text-gray-300 z-50"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
} 