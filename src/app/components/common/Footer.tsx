import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

export default function Component() {
    return (
        <>
            {/* Best Travel Packages Section */}
            <section className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Find the best travel packages at Truedeal</h2>
                    <p className="text-gray-600 mb-4">
                        Booking a travel package when it comes to travelling to new parts of the country or the world is a practice that has slowly gained a lot of popularity. Today, whenever it is about planning a holiday trip, many people have a preferred travel portal in India that is best for their specific needs. Owing to the faith bestowed in our travel services by our patrons, Truedeal has established its niche and is counted among the top 10 travel agencies in India.
                    </p>
                    <p className="text-gray-600 mb-4">
                        We at Truedeal understand that nowadays, travelling has become much more than just visiting a new destination. That is why each of our vacation packages offers you the respite that you anticipate from a holiday. As a well-informed traveller, it is only right to expect more from your travel company in India - we strive to ensure the same for our customers. It is no longer about only conveyance and accommodation.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Counted among the top 10 travel agencies in India, Truedeal has all the travel services under one roof. In our constant endeavour to be the best travel company in India, everything that we do is based on creating and setting new benchmarks. With extensive travel know-how, end-to-end travel planning and a wide assortment of travel packages, we are counted among the best travel agents in India that ensure the best holiday experience.
                    </p>
                    <button className="text-[#017ae3] font-medium hover:underline">Read More</button>
                </div>
            </section>

            {/* Contact Options Section */}
            <section className="bg-gray-100 py-8 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-medium mb-2">Our Offices</h3>
                        <p className="text-gray-600 text-sm">Located across the country, ready to assist in planning & booking your perfect vacation.</p>
                        <button className="text-[#017ae3] text-sm font-medium hover:underline mt-2">Locate Us</button>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Call us</h3>
                        <p className="text-gray-600 text-sm">Request a quote, or just chat about your next vacation. We're always happy to help!</p>
                        <a href="tel:+918447498498" className="text-[#017ae3] text-sm font-medium hover:underline mt-2 block">+91 8447498498</a>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Write to us</h3>
                        <p className="text-gray-600 text-sm">Be it an enquiry, feedback or a simple suggestion, write to us.</p>
                        <a href="mailto:info@truedeal4u.com" className="text-[#017ae3] text-sm font-medium hover:underline mt-2 block">info@truedeal4u.com</a>
                    </div>
                    <div>
                        <h3 className="font-medium mb-2">Connect with us</h3>
                        <p className="text-gray-600 text-sm">Reviews, podcasts, blogs and more...</p>
                        <div className="flex gap-4 mt-2">
                            <Link href="https://facebook.com/truedeal4u/" target="_blank" className="text-gray-400 hover:text-[#017ae3]">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.youtube.com/" target="_blank" className="text-gray-400 hover:text-[#017ae3]">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/itstruedeal/" target="_blank" className="text-gray-400 hover:text-[#017ae3]">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/itstruedeal/" target="_blank" className="text-gray-400 hover:text-[#017ae3]">
                                <Instagram className="w-5 h-5" />
                            </Link>
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
                                    { name: "Contact Us", path: "/contact" },
                                    { name: "Careers", path: "/careers" },
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

