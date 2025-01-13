'use client';

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MoreVertical, X, ChevronDown } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { usePathname } from 'next/navigation'
import { groupToursList } from "@/data/groupTours"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const header = document.createElement('div')
        header.style.position = 'absolute'
        header.style.top = '0'
        header.style.left = '0'
        header.style.right = '0'
        header.style.height = '1px'
        document.body.appendChild(header)

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolled(!entry.isIntersecting)
            },
            {
                threshold: [1],
            }
        )

        observer.observe(header)

        return () => {
            observer.disconnect()
            document.body.removeChild(header)
        }
    }, [])

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/destinationpackage", label: "Holiday Packages" },
        { href: "/trendingpackage", label: "Trending" },
        // Group Tours is handled separately now
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center justify-between py-2 border-b-2 border-gray-200 w-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/Assets/NavbarImages/logo.png"
                                alt="Truedeal Logo"
                                width={100}
                                height={20}
                                className="w-18 md:w-[150px] "
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 font-semibold">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`transition-colors duration-300 ${pathname === item.href
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#017ae3] to-[#00f6ff]'
                                    : 'text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Group Tours Dropdown - Desktop */}
                        <div className="relative group">
                            <Link
                                href="/group-tours"
                                className={`flex items-center gap-1 transition-colors duration-300 ${pathname.startsWith('/group-tours')
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#017ae3] to-[#00f6ff]'
                                    : 'text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff]'
                                    }`}
                            >
                                Group Tours
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </Link>

                            {/* Dropdown Menu - Shows on hover */}
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                <div className="py-2">
                                    {groupToursList.map((tour) => (
                                        <Link
                                            key={tour.id}
                                            href={`/group-tours/${tour.id}`}
                                            className="flex items-center px-4 py-2 hover:bg-gray-50 transition-colors duration-300"
                                        >
                                            <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
                                                <Image
                                                    src={tour.image}
                                                    alt={tour.name}
                                                    width={32}
                                                    height={32}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {tour.name.split(':')[0]}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {tour.duration.days} Days | ₹{tour.price.toLocaleString()}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        {/* Mobile layout adjustments */}
                        <div className="flex items-center md:hidden">
                            <div className="flex items-center hover:scale-105 transition-transform duration-300">

                                <a
                                    href="tel:+918447498498"
                                    className="bg-gradient-to-r from-[#343232] to-[#000000] text-transparent bg-clip-text font-poppins text-xs md:text-sm font-semibold ml-1"
                                >
                                    +91 8447498498
                                </a>
                            </div>

                            <button
                                className="text-gray-500 focus:outline-none ml-4"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <MoreVertical className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        {/* Desktop and Tablet layout */}
                        <div className="hidden md:flex items-center hover:scale-105 transition-transform duration-300">

                            <a
                                href="tel:+918447498498"
                                className="bg-gradient-to-r from-[#3f3e3e] to-[#4f4e4e] text-transparent bg-clip-text font-poppins text-xs md:text-sm font-semibold ml-1"
                            >
                                +91 8447498498
                            </a>
                        </div>

                        <SignedOut>
                            <div className="hidden sm:flex gap-2 shrink-0">
                                <Link
                                    href="/sign-in"
                                    className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium bg-white relative group hover:scale-105 transition-transform duration-300"
                                >
                                    <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
                                        Sign In
                                    </span>
                                    <span
                                        className="absolute inset-0 rounded-full border-2 border-transparent"
                                        style={{
                                            background: 'linear-gradient(to right, #017ae3, #00f6ff) border-box',
                                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'xor',
                                            maskComposite: 'exclude',
                                        }}
                                    />
                                </Link>
                                <Link
                                    href="/sign-up"
                                    className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:scale-105 transition-transform duration-300"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </SignedOut>

                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-8 h-8 md:w-10 md:h-10"
                                    }
                                }}
                            />
                        </SignedIn>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white shadow-lg animate-slideDown">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`block py-3 px-4 ${pathname === item.href
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#017ae3] to-[#00f6ff]'
                                : 'text-gray-500'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Group Tours in Mobile Menu */}
                    <div className="border-t border-gray-100">
                        <div className="px-4 py-3 font-semibold text-gray-900">Group Tours</div>
                        {groupToursList.map((tour) => (
                            <Link
                                key={tour.id}
                                href={`/group-tours/${tour.id}`}
                                className="flex items-center px-4 py-2 hover:bg-gray-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                                    <Image
                                        src={tour.image}
                                        alt={tour.name}
                                        width={32}
                                        height={32}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {tour.name.split(':')[0]}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {tour.duration.days} Days | ₹{tour.price.toLocaleString()}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* SignedOut section for mobile remains the same */}
                </div>
            )}
        </nav>
    )
}


