'use client';

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
    ]

    return (
        <>
            <nav className="relative flex items-center justify-between p-2 border-b-2 border-gray-200">
                <div className="flex items-center">
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/Assets/NavbarImages/logo.png" alt="Truedeal Logo" width={100} height={20} className="w-18 md:w-[150px]" />
                    </Link>
                </div>

                <div className="hidden md:flex space-x-8 font-semibold">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                        <Image src="/Assets/NavbarImages/call.webp" alt="Call" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
                        <h1 className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins text-xs md:text-sm font-semibold ml-1">+91 8447498498</h1>
                    </div>

                    <SignedOut>
                        <div className="flex space-x-1 md:space-x-2">
                            <Link
                                href="/sign-in"
                                className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium bg-white relative group"
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
                                className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"
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
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block py-2 px-4 text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#017ae3] to-[#00f6ff] transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}