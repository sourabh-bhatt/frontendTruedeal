'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#services", label: "Our Services" },
        { href: "#news", label: "News" },
        { href: "#contact-us", label: "Contact Us" },
    ];

    return (
        <nav className="relative flex items-center justify-between p-2 border-b-2 border-gray-200">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <Image src="/Assets/NavbarImages/logo.png" alt="Truedeal Logo" width={150} height={30} />
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

            <div className="flex items-center space-x-4">
                <Image src="/Assets/NavbarImages/call.webp" alt='Call' width={24} height={24} className="w-6 h-6" />
                <Image src="/Assets/NavbarImages/profile.webp" alt='Profile' width={24} height={24} className="w-6 h-6" />

                <button
                    className="px-6 py-2 rounded-full font-medium bg-white relative group"
                >
                    <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
                        Login
                    </span>
                    <span
                        className="absolute inset-0 rounded-full border-2 border-transparent"
                        style={{
                            background: 'linear-gradient(to right,  #017ae3, #00f6ff) border-box',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                        }}
                    />
                </button>

                <button
                    className="md:hidden text-gray-500 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
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
        </nav>
    );
}