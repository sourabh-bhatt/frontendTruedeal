'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaNewspaper, FaBlog } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';

const BlogsComingSoon = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                        Travel Stories Coming Soon
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Get ready for inspiring travel tales, expert tips, and unforgettable adventures
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <FaNewspaper className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                            Expert Travel Guides
                        </h3>
                        <p className="text-gray-600 text-center">
                            Detailed guides from seasoned travelers and local experts
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <FaBlog className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                            Travel Stories
                        </h3>
                        <p className="text-gray-600 text-center">
                            Immersive storytelling that brings destinations to life
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <IoMdNotifications className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                            Stay Updated
                        </h3>
                        <p className="text-gray-600 text-center">
                            Subscribe to get notified when we launch
                        </p>
                    </motion.div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 max-w-xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-xl shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                            Be the First to Know
                        </h2>
                        <p className="text-gray-600 mb-6 text-center">
                            Subscribe to our newsletter and be notified when we launch our blog section
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Notify Me
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Preview Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
                >
                    <Image
                        src="/IMAGES/Almaty/1/3.webp"
                        alt="Blog Preview"
                        fill
                        className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                        <p className="text-lg">Your gateway to extraordinary travel experiences</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogsComingSoon;
