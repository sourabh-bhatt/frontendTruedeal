import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-white pt-16 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-gray-900 font-bold mb-2">KEEP IN TOUCH</h2>
                    <p className="text-2xl mb-6">
                        <span className="text-rose-500">Subscribe</span>{" "}
                        <span className="text-gray-500">to our Newsletter</span>
                    </p>
                    <div className="max-w-xl mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-rose-500"
                        />
                        <button className="px-8 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Image
                            src="/Assets/NavbarImages/logo.png"
                            alt="Truedeal Logo"
                            width={200}
                            height={50}
                            className="mb-4"
                        />
                        <p className="text-gray-500 mb-4">
                            Turning travel mishaps into memorable achievements since 2014.
                        </p>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Contact Us</h3>
                            <p className="text-gray-500 text-sm">
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
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Services", "Contact Us Blog"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-500 hover:text-gray-700">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services Column 1 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
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
                                    <Link href="#" className="text-gray-500 hover:text-gray-700">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services Column 2 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">&nbsp;</h3>
                        <ul className="space-y-2">
                            {[
                                "Bookings",
                                "Land Packages",
                                "Holiday Packages",
                                "Travel Insurance",
                                "Cruise Bookings",
                            ].map((service) => (
                                <li key={service}>
                                    <Link href="#" className="text-gray-500 hover:text-gray-700">
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