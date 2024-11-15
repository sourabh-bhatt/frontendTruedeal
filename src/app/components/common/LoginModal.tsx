'use client'

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "#about-us", label: "About Us" },
        { href: "#services", label: "Our Services" },
        { href: "#news", label: "News" },
        { href: "#contact-us", label: "Contact Us" },
    ]

    return (
        <>
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
                    <Image src="/Assets/NavbarImages/call.webp" alt="Call" width={24} height={24} className="w-6 h-6" />
                    <Image src="/Assets/NavbarImages/profile.webp" alt="Profile" width={24} height={24} className="w-6 h-6" />

                    <button
                        className="px-6 py-2 rounded-full font-medium bg-white relative group"
                        onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLoginModal(true)}
                    >
                        <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
                            {isLoggedIn ? 'Logout' : 'Login'}
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

            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLogin={() => {
                    setIsLoggedIn(true)
                    setShowLoginModal(false)
                }}
            />
        </>
    )
}

function LoginModal({
    isOpen,
    onClose,
    onLogin
}: {
    isOpen: boolean
    onClose: () => void
    onLogin: () => void
}) {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle the authentication logic
        onLogin()
        router.push('/')
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[850px] p-0">
                <div className="grid sm:grid-cols-2">
                    {/* Left side with background image */}
                    <div className="relative hidden sm:block bg-gradient-to-br from-red-500 to-purple-600 p-6 text-white rounded-l-lg">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-2 font-poppins">Truedeal</h2>
                            <p className="text-lg mb-2 font-poppins">Turning travel mishaps</p>
                            <p className="text-lg mb-2">into memorable</p>
                            <p className="text-lg mb-2">achievements since 2014</p>
                        </div>
                        <div className="absolute inset-0 opacity-10">
                            {/* Background landmarks illustration would go here */}
                        </div>
                    </div>

                    {/* Right side with login form */}
                    <div className="p-6">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold">Welcome to <span className="text-blue-600">My Dashboard</span></h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Enter Your Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="rounded-full"
                                    placeholder="Enter Your Email"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Enter Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="rounded-full"
                                    placeholder="Enter Password"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link href="#" className="text-sm text-blue-600 hover:underline">
                                    Forgot Password
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}