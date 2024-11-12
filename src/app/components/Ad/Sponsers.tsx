// import Image from "next/image"

// export default function Sponsors() {
//     const topPartners = [
//         { name: "Amadeus", logo: "/Assets/Sponsers/1.webp" },
//         { name: "Expedia", logo: "/Assets/Sponsers/2.webp" },
//         { name: "Malindo Air", logo: "/Assets/Sponsers/3.webp" },
//         { name: "Viator", logo: "/Assets/Sponsers/4.webp" },
//         { name: "IATA", logo: "/Assets/Sponsers/5.webp" },
//         { name: "Dubai Expert", logo: "/Assets/Sponsers/6.webp" },
//     ]

//     const bottomPartners = [
//         { name: "Certification 1", logo: "/Assets/Sponsers/7.webp" },
//         { name: "Certification 2", logo: "/Assets/Sponsers/8.webp" },
//         { name: "New Zealand Tourism", logo: "/Assets/Sponsers/9.webp" },
//         { name: "Iceland Inspired", logo: "/Assets/Sponsers/1.webp" },
//     ]

//     return (
//         <section className="py-16 px-4 bg-gray-50">
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-2xl text-center mb-12">
//                     Partnered <span className="text-gray-500">with the best in the industry</span>
//                 </h2>

//                 {/* Top row partners */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
//                     {topPartners.map((partner, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-center p-4 hover:opacity-75 transition-opacity"
//                         >
//                             <Image
//                                 src={partner.logo}
//                                 alt={partner.name}
//                                 width={120}
//                                 height={50}
//                                 className="grayscale object-contain h-12"
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom row certifications */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                     {bottomPartners.map((partner, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-center p-4 hover:opacity-75 transition-opacity"
//                         >
//                             <Image
//                                 src={partner.logo}
//                                 alt={partner.name}
//                                 width={80}
//                                 height={80}
//                                 className="grayscale object-contain h-20"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }


// import Image from "next/image"

// export default function Sponsors() {
//     const topPartners = [
//         { name: "Amadeus", logo: "/Assets/Sponsers/1.webp" },
//         { name: "Expedia", logo: "/Assets/Sponsers/2.webp" },
//         { name: "Malindo Air", logo: "/Assets/Sponsers/3.webp" },
//         { name: "Viator", logo: "/Assets/Sponsers/4.webp" },
//         { name: "IATA", logo: "/Assets/Sponsers/5.webp" },
//         { name: "Dubai Expert", logo: "/Assets/Sponsers/6.webp" },
//     ]

//     const bottomPartners = [
//         { name: "Certification 1", logo: "/Assets/Sponsers/7.webp" },
//         { name: "Certification 2", logo: "/Assets/Sponsers/8.webp" },
//         { name: "New Zealand Tourism", logo: "/Assets/Sponsers/9.webp" },
//         { name: "Iceland Inspired", logo: "/Assets/Sponsers/1.webp" },
//     ]

//     return (
//         <section className="py-16 px-4 bg-gray-50">
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-2xl text-center mb-12">
//                     Partnered <span className="text-gray-500">with the best in the industry</span>
//                 </h2>

//                 {/* Top row partners */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
//                     {topPartners.map((partner, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-center p-4 group"
//                         >
//                             <Image
//                                 src={partner.logo}
//                                 alt={partner.name}
//                                 width={120}
//                                 height={50}
//                                 className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain h-12"
//                             />
//                         </div>
//                     ))}
//                 </div>



//                 {/* Bottom row certifications */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                     {bottomPartners.map((partner, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-center p-4 group"
//                         >
//                             <Image
//                                 src={partner.logo}
//                                 alt={partner.name}
//                                 width={80}
//                                 height={80}
//                                 className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain h-20"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// 'use client'

// import Image from "next/image"
// import { useEffect, useRef } from "react"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"
// import useEmblaCarousel from "embla-carousel-react"

// export default function Sponsors() {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
//     const autoplayRef = useRef<NodeJS.Timeout | null>(null)

//     const partners = [
//         { name: "Amadeus", logo: "/Assets/Sponsers/1.webp" },
//         { name: "Expedia", logo: "/Assets/Sponsers/2.webp" },
//         { name: "Malindo Air", logo: "/Assets/Sponsers/3.webp" },
//         { name: "Viator", logo: "/Assets/Sponsers/4.webp" },
//         { name: "IATA", logo: "/Assets/Sponsers/5.webp" },
//         { name: "Dubai Expert", logo: "/Assets/Sponsers/6.webp" },
//         { name: "Certification 1", logo: "/Assets/Sponsers/7.webp" },
//         { name: "Certification 2", logo: "/Assets/Sponsers/8.webp" },
//         { name: "New Zealand Tourism", logo: "/Assets/Sponsers/9.webp" },
//         { name: "Iceland Inspired", logo: "/Assets/Sponsers/1.webp" },
//     ]

//     useEffect(() => {
//         if (emblaApi) {
//             const autoplay = () => {
//                 if (emblaApi.canScrollNext()) {
//                     emblaApi.scrollNext()
//                 } else {
//                     emblaApi.scrollTo(0)
//                 }
//             }

//             autoplayRef.current = setInterval(autoplay, 3000) // Adjust the interval as needed

//             return () => {
//                 if (autoplayRef.current) clearInterval(autoplayRef.current)
//             }
//         }
//     }, [emblaApi])

//     return (
//         <section className="py-16 px-4 bg-gray-50">
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-2xl text-center mb-12">
//                     Partnered <span className="text-gray-500">with the best in the industry</span>
//                 </h2>

//                 <Carousel
//                     ref={emblaRef}
//                     className="w-full"
//                     opts={{
//                         align: "start",
//                         loop: true,
//                     }}
//                 >
//                     <CarouselContent>
//                         {partners.map((partner, index) => (
//                             <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
//                                 <Card>
//                                     <CardContent className="flex items-center justify-center p-6">
//                                         <div className="group">
//                                             <Image
//                                                 src={partner.logo}
//                                                 alt={partner.name}
//                                                 width={120}
//                                                 height={50}
//                                                 className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain h-12"
//                                             />
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//                 </Carousel>
//             </div>
//         </section>
//     )
// }

// 'use client';

// import { useState } from "react"
// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"

// export default function Sponsors() {
//     const itemsPerScroll = 6; // Number of images to show at a time
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const partners = [
//         { name: "Amadeus", logo: "/Assets/Sponsers/1.webp" },
//         { name: "Expedia", logo: "/Assets/Sponsers/2.webp" },
//         { name: "Malindo Air", logo: "/Assets/Sponsers/3.webp" },
//         { name: "Viator", logo: "/Assets/Sponsers/4.webp" },
//         { name: "IATA", logo: "/Assets/Sponsers/5.webp" },
//         { name: "Dubai Expert", logo: "/Assets/Sponsers/6.webp" },
//         { name: "Certification 1", logo: "/Assets/Sponsers/7.webp" },
//         { name: "Certification 2", logo: "/Assets/Sponsers/8.webp" },
//         { name: "New Zealand Tourism", logo: "/Assets/Sponsers/9.webp" },
//         { name: "Iceland Inspired", logo: "/Assets/Sponsers/1.webp" },
//     ];

//     const totalItems = partners.length;

//     // Ensure exactly 6 items are visible, even if wrapping around the end of the array
//     const visiblePartners = partners.slice(currentIndex, currentIndex + itemsPerScroll).concat(
//         currentIndex + itemsPerScroll > totalItems
//             ? partners.slice(0, (currentIndex + itemsPerScroll) % totalItems)
//             : []
//     );

//     // Handle Next Scroll
//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             (prevIndex + itemsPerScroll) % totalItems
//         );
//     };

//     // Handle Previous Scroll
//     const handlePrevious = () => {
//         setCurrentIndex((prevIndex) =>
//             (prevIndex - itemsPerScroll + totalItems) % totalItems
//         );
//     };

//     return (
//         <section className="py-16 px-4 bg-gray-50">
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-2xl text-center mb-12">
//                     Partnered <span className="text-gray-500">with the best in the industry</span>
//                 </h2>

//                 <div className="relative overflow-hidden">
//                     {/* Previous Button */}
//                     <button
//                         onClick={handlePrevious}
//                         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
//                     >
//                         ◀
//                     </button>

//                     <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerScroll)}%)` }}>
//                         {visiblePartners.map((partner, index) => (
//                             <div key={index} className="md:basis-1/3 lg:basis-1/6 flex-shrink-0 p-2 w-1/6">
//                                 <Card>
//                                     <CardContent className="flex items-center justify-center p-6">
//                                         <div className="group">
//                                             <Image
//                                                 src={partner.logo}
//                                                 alt={partner.name}
//                                                 width={120}
//                                                 height={50}
//                                                 className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain h-12"
//                                             />
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Next Button */}
//                     <button
//                         onClick={handleNext}
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
//                     >
//                         ▶
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }

// fixx v0

'use client';

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Sponsors() {
    const itemsPerScroll = 6; // Number of images to show at a time
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const partners = [
        { name: "Amadeus", logo: "/Assets/Sponsers/1.webp" },
        { name: "Expedia", logo: "/Assets/Sponsers/2.webp" },
        { name: "Malindo Air", logo: "/Assets/Sponsers/3.webp" },
        { name: "Viator", logo: "/Assets/Sponsers/4.webp" },
        { name: "IATA", logo: "/Assets/Sponsers/5.webp" },
        { name: "Dubai Expert", logo: "/Assets/Sponsers/6.webp" },
        { name: "Certification 1", logo: "/Assets/Sponsers/7.webp" },
        { name: "Certification 2", logo: "/Assets/Sponsers/8.webp" },
        { name: "New Zealand Tourism", logo: "/Assets/Sponsers/9.webp" },
        { name: "Iceland Inspired", logo: "/Assets/Sponsers/1.webp" },
    ];

    const totalItems = partners.length;

    const getVisiblePartners = useCallback(() => {
        const visiblePartners = [];
        for (let i = 0; i < itemsPerScroll; i++) {
            const index = (currentIndex + i) % totalItems;
            visiblePartners.push(partners[index]);
        }
        return visiblePartners;
    }, [currentIndex, partners, totalItems]);

    const [visiblePartners, setVisiblePartners] = useState(getVisiblePartners());

    useEffect(() => {
        setVisiblePartners(getVisiblePartners());
    }, [currentIndex, getVisiblePartners]);

    const handleScroll = (direction: 'next' | 'previous') => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        const newIndex = direction === 'next'
            ? (currentIndex + itemsPerScroll) % totalItems
            : (currentIndex - itemsPerScroll + totalItems) % totalItems;

        setCurrentIndex(newIndex);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match this with the transition duration
    };

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl text-center mb-12">
                    Partnered <span className="text-gray-500">with the best in the industry</span>
                </h2>

                <div className="relative overflow-hidden">
                    <button
                        onClick={() => handleScroll('previous')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200 z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>

                    <div className="flex transition-transform duration-500 ease-in-out">
                        {visiblePartners.map((partner, index) => (
                            <div key={index} className="w-1/6 flex-shrink-0 p-2">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <div className="group">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={120}
                                                height={50}
                                                className="grayscale group-hover:grayscale-0 transition-all duration-300 object-contain h-12"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleScroll('next')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-200 z-10"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>
            </div>
        </section>
    );
}