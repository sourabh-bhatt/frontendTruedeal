'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlane, FaClock } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { sriLankaData, SriLankaPackage } from './data';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SriLanka() {
    const [currentPage, setCurrentPage] = useState(0);
    const [windowWidth, setWindowWidth] = useState(768); // Default to desktop breakpoint
    const packages = Object.values(sriLankaData);
    
    // Calculate items per page based on screen size
    const itemsPerPage = {
        mobile: 1,
        desktop: 3
    };

    const totalPages = Math.ceil(packages.length / itemsPerPage.desktop);
    const mobileTotalPages = Math.ceil(packages.length / itemsPerPage.mobile);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Get current items
    const getVisibleItems = (isMobile: boolean) => {
        const perPage = isMobile ? itemsPerPage.mobile : itemsPerPage.desktop;
        const start = currentPage * perPage;
        return packages.slice(start, start + perPage);
    };

    // Add window resize handler
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            
            // Set initial width
            setWindowWidth(window.innerWidth);
            
            // Add event listener
            window.addEventListener('resize', handleResize);
            
            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                    Sri Lanka
                    <p className="text-sm text-gray-500 mt-1 underline">Fixed Departures</p>
                </span>
            </h1>
            
            {/* Sri Lanka Cards with Navigation */}
            <div className="relative">
                {/* Navigation Buttons */}
                <button 
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                    aria-label="Previous"
                >
                    <IoIosArrowBack size={24} />
                </button>
                
                <button 
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                    aria-label="Next"
                >
                    <IoIosArrowForward size={24} />
                </button>

                {/* Desktop View */}
                <div className="hidden md:block">
                    <div className="flex justify-center gap-6">
                        {getVisibleItems(false).map((package_: SriLankaPackage) => (
                            <div 
                                key={package_.id}
                                className="relative group h-[450px] w-[300px] md:w-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {/* Background Image */}
                                <Image 
                                    src={package_.images?.[0] || '/default-destination-image.jpg'} 
                                    alt={package_.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                                {/* Price Tag */}
                                {package_.amount && (
                                    <div className="absolute top-3 left-0 z-10">
                                        <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                                            <span className="line-through text-sm mr-2">
                                                ₹{package_.amount * 1.2 >= 1000 ? (package_.amount * 1.2).toLocaleString('en-IN') : package_.amount * 1.2}/-
                                            </span>
                                            <span className="font-bold">
                                                ₹{package_.amount >= 1000 ? package_.amount.toLocaleString('en-IN') : package_.amount}/-
                                            </span>
                                            <span className="text-sm ml-1">onwards</span>
                                        </div>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    {/* Title */}
                                    <h2 className="text-2xl font-bold mb-2">
                                        {package_.name}
                                    </h2>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-yellow-400" />
                                            <span>{package_.days}D/{package_.nights}N</span>
                                        </div>
                                        {package_.flightFrom && (
                                            <div className="flex items-center gap-2">
                                                <FaPlane className="text-yellow-400" />
                                                <span>{package_.flightFrom}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* View Details Button */}
                                    <Link href={`/sriLanka/${package_.id}`}>
                                        <Button
                                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                                        >
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    <div className="flex justify-center">
                        {getVisibleItems(true).map((package_: SriLankaPackage) => (
                            <div 
                                key={package_.id}
                                className="relative group h-[450px] w-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {/* Background Image */}
                                <Image 
                                    src={package_.images?.[0] || '/default-destination-image.jpg'} 
                                    alt={package_.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                                {/* Price Tag */}
                                {package_.amount && (
                                    <div className="absolute top-3 left-0 z-10">
                                        <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                                            <span className="line-through text-sm mr-2">
                                                ₹{package_.amount * 1.2 >= 1000 ? (package_.amount * 1.2).toLocaleString('en-IN') : package_.amount * 1.2}/-
                                            </span>
                                            <span className="font-bold">
                                                ₹{package_.amount >= 1000 ? package_.amount.toLocaleString('en-IN') : package_.amount}/-
                                            </span>
                                            <span className="text-sm ml-1">onwards</span>
                                        </div>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    {/* Title */}
                                    <h2 className="text-2xl font-bold mb-2">
                                        {package_.name}
                                    </h2>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="text-yellow-400" />
                                            <span>{package_.days}D/{package_.nights}N</span>
                                        </div>
                                        {package_.flightFrom && (
                                            <div className="flex items-center gap-2">
                                                <FaPlane className="text-yellow-400" />
                                                <span>{package_.flightFrom}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* View Details Button */}
                                    <Link href={`/sriLanka/${package_.id}`}>
                                        <Button
                                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                                        >
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Indicators */}
                <div className="flex justify-center mt-6 gap-2">
                    {[...Array(windowWidth >= 768 ? totalPages : mobileTotalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all ${
                                currentPage === index ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
                            }`}
                            onClick={() => setCurrentPage(index)}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 