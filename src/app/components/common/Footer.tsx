import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

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


            <footer className="bg-gray-200 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Newsletter Section */}
                    <div className="mb-12 flex flex-col md:flex-row items-center justify-around">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-gray-900 text-sm tracking-wider mb-1 font-poppins font-bold">KEEP IN TOUCH</h2>
                            <div className="flex items-center gap-2">
                                <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text text-2xl font-poppins font-bold">
                                    Subscribe
                                </span>
                                <span className="text-gray-400 text-2xl font-poppins font-semibold">to our Newsletter</span>
                            </div>
                        </div>
                        <div className="relative w-full md:w-auto">
                            <div className="relative flex">
                                <div className=" md:w-80 p-[1px] rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="w-full px-6 py-3 rounded-full bg-white focus:outline-none"
                                    />
                                </div>
                                <button className="absolute right-0 px-8 py-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full hover:opacity-90 transition-opacity font-bold">
                                    SUBSCRIBE
                                </button>
                            </div>
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
                            <h1 className="font-bold font-poppins mb-2">TRUEDEAL TRAVELS PRIVATE LIMITED</h1>
                            <p className="text-gray-500 text-sm mb-4">

                                Truedeal is your trusted partner for seamless travel experiences, forex solutions, and comprehensive travel services since 2014.
                            </p>
                            <div className="flex gap-4">
                                <Link href="https://www.instagram.com/itstruedeal/" target="_blank" className="text-gray-400 hover:text-gray-600">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link href="https://x.com/truedeal4u" target="_blank" className="text-gray-400 hover:text-gray-600">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="https://facebook.com/truedeal4u/" target="_blank" className="text-gray-400 hover:text-gray-600">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/itstruedeal/" target="_blank" className="text-gray-400 hover:text-gray-600">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
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
                                    { name: "Refund & Cancelation", path: "/refund&cancellation" },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path} className="text-gray-500 hover:text-gray-700 text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Services Column 1 */}
                        <div>
                            <h3 className="font-medium text-gray-900 mb-4">Our Services</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "Foreign Currency", path: "/#forex" },
                                    { name: "Exchange Forex Card", path: "/#forex" },
                                    { name: "Remittance", path: "/#forex" },
                                    { name: "VISA Services", path: "/contact" },
                                ].map((service) => (
                                    <li key={service.name}>
                                        <Link href={service.path} className="text-gray-500 hover:text-gray-700 text-sm">
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Services Column 2 */}
                        <div>
                            <h3 className="font-medium text-gray-900 mb-4 invisible">Our Services</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "Land Packages", path: "#" },
                                    { name: "Holiday Packages", path: "#" },
                                    { name: "Travel Insurance", path: "#" },
                                    { name: "Cruise Bookings", path: "#" },
                                ].map((service) => (
                                    <li key={service.name}>
                                        <Link href={service.path} className="text-gray-500 hover:text-gray-700 text-sm">
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