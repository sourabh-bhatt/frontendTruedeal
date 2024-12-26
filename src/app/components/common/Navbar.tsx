'use client';

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        // Add scroll event listener when the component mounts to client side

        if (typeof window !== 'undefined') {
            setIsScrolled(window.scrollY > 0)
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/destinationpackage", label: "Holiday Packages" },
        { href: "/trendingpackage", label: "Trending" },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between p-2 border-b-2 border-gray-200">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/Assets/NavbarImages/logo.png"
                                alt="Truedeal Logo"
                                width={100}
                                height={20}
                                className="w-18 md:w-[150px]"
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
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/Assets/NavbarImages/call.webp"
                                alt="Call"
                                width={20}
                                height={20}
                                className="w-4 h-4 md:w-6 md:h-6"
                            />
                            <a
                                href="tel:+918447498498"
                                className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins text-xs md:text-sm font-semibold ml-1"
                            >
                                +91 8447498498
                            </a>
                        </div>

                        <SignedOut>
                            <div className="flex space-x-2">
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

                        <button
                            className="md:hidden text-gray-500 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg animate-slideDown">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`block py-3 px-4 ${pathname === item.href
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#017ae3] to-[#00f6ff]'
                                : 'text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff]'
                                } transition-colors duration-300`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}