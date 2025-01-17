import Image from "next/image"
import Link from "next/link"
import { InstagramIcon } from "../icons/social/Instagram"
import { FacebookIcon } from "../icons/social/Facebook"
import { TwitterIcon } from "../icons/social/Twitter"
import { LinkedInIcon } from "../icons/social/LinkedIn"
import { Phone, Mail, MapPin } from "lucide-react"
import { YouTubeIcon } from "../icons/social/YouTube"

export default function Component() {

    return (
        <>
            {/* Contact Info Section */}
            <section className="py-12 px-4 bg-gradient-to-br from-[#017ae3] to-[#00f6ff]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">
                        Get in Touch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center bg-white rounded-lg shadow-md p-6">
                            <div className="text-[#017ae3] mr-4">
                                <Phone size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                                <p className="text-gray-600">+91 8447498498</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-lg shadow-md p-6">
                            <div className="text-[#017ae3] mr-4">
                                <Mail size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Write to Us</h3>
                                <p className="text-gray-600">info@truedeal4u.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-[#017ae3] mr-4">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Our Head Office</h3>
                            </div>
                            <p className="text-gray-600">
                                LGF 47, World Trade Center, beside Lalit Hotel, Barakhamba Road, Connaught Place, Delhi 110006
                            </p>
                        </div>
                        <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-[#017ae3] mr-4">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Our Corporate Office</h3>
                            </div>
                            <p className="text-gray-600">
                                C 207, Logix Cyber Park, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="bg-white py-12 px-4 border-t">
                <div className="max-w-7xl mx-auto">
                    {/* Blog Promotion Section */}
                    <div className="mb-12 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-8 rounded-2xl">
                        <div className="mb-6 md:mb-0 text-white md:max-w-xl">
                            <h2 className="text-2xl font-bold mb-3">Explore Our Travel Blog</h2>
                            <p className="text-white/90 mb-4">
                                Discover travel tips, destination guides, and insider insights from our expert travelers.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/blog/category/travel-tips"
                                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                                >
                                    Travel Tips
                                </Link>
                                <Link
                                    href="/blog/category/destinations"
                                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                                >
                                    Destinations
                                </Link>
                                <Link
                                    href="/blog/category/forex-guide"
                                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                                >
                                    Forex Guide
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-end">
                            <Link
                                href="/blogs"
                                className="px-6 py-3 bg-white text-[#017ae3] rounded-full font-bold hover:bg-opacity-90 transition-opacity flex items-center gap-2"
                            >
                                Read Our Blog
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:ml-[12%]">
                        {/* Company Info */}
                        <div>
                            <Image
                                src="/Assets/NavbarImages/logo.png"
                                alt="Truedeal Logo"
                                width={180}
                                height={45}
                                className="mb-4"
                            />
                            <h1 className="font-bold font-poppins mb-2 text-[#017ae3]">TRUEDEAL TRAVELS PRIVATE LIMITED</h1>
                            <p className="text-gray-700 text-sm mb-4">
                                Truedeal is your trusted partner for seamless travel experiences, forex solutions, and comprehensive travel services since 2014.
                            </p>
                            <div className="flex gap-4">
                                <Link href="https://www.instagram.com/itstruedeal/" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90 transition-opacity">
                                    <InstagramIcon />
                                </Link>
                                <Link href="https://x.com/truedeal4u" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition-opacity">
                                    <TwitterIcon />
                                </Link>
                                <Link href="https://www.facebook.com/itstruedeal/" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity">
                                    <FacebookIcon />
                                </Link>
                                <Link href="https://www.linkedin.com/company/itstruedeal/" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity">
                                    <LinkedInIcon />
                                </Link>
                                <Link href="https://www.youtube.com/@Truedeal4u/shorts" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity">
                                    <YouTubeIcon />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-[#017ae3] mb-4 text-lg">Quick Links</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About", path: "/about" },
                                    { name: "Destination Package", path: "/destinationpackage" },
                                    { name: "Trending Package", path: "/trendingpackage" },
                                    { name: "Exclusive", path: "/exclusive" },
                                    { name: "Contact Us", path: "/contact-us" },
                                    { name: "Careers", path: "/careers" },
                                    { name: "Terms & conditions", path: "/terms&conditions" },
                                    { name: "Reviews", path: "/reviews" },
                                    { name: "Refund & Cancelation", path: "/refund&cancellation" },
                                    { name: "Payment", path: "/payment" }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path} className="text-gray-700 hover:text-[#017ae3] text-sm transition-colors duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Services Column 1 */}
                        <div>
                            <h3 className="font-bold text-[#017ae3] mb-4 text-lg">Our Services</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "Foreign Currency", path: "/#forex" },
                                    { name: "Exchange Forex Card", path: "/#forex" },
                                    { name: "Remittance", path: "/#forex" },
                                    { name: "VISA Services", path: "/visaservices" },
                                ].map((service) => (
                                    <li key={service.name}>
                                        <Link href={service.path} className="text-gray-700 hover:text-[#017ae3] text-sm transition-colors duration-200">
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Services Column 2 */}
                        <div>
                            <h3 className="font-bold text-[#017ae3] mb-4 text-lg">More Services</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "Land Packages", path: "#" },
                                    { name: "Holiday Packages", path: "#" },
                                    { name: "Travel Insurance", path: "#" },
                                    { name: "Cruise Bookings", path: "#" },
                                ].map((service) => (
                                    <li key={service.name}>
                                        <Link href={service.path} className="text-gray-700 hover:text-[#017ae3] text-sm transition-colors duration-200">
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}