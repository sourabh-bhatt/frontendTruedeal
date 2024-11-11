import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube } from "lucide-react"

export default function Component() {
    return (
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
                        <p className="text-gray-500 text-sm mb-4">
                            Turning travel mishaps into memorable achievements since 2014.
                        </p>
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-900 mb-2">Contact Us</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                C 207, Logix Cyber Park, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-600">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Services", "Contact Us", "Blog"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                                        {link}
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
                                "Foreign Currency",
                                "Exchange Forex Card",
                                "Remittance",
                                "VISA Services",
                                "Sightseeing",
                                "Air Tickets Hotel",
                            ].map((service) => (
                                <li key={service}>
                                    <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                                        {service}
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
                                "Bookings",
                                "Land Packages",
                                "Holiday Packages",
                                "Travel Insurance",
                                "Cruise Bookings",
                            ].map((service) => (
                                <li key={service}>
                                    <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}