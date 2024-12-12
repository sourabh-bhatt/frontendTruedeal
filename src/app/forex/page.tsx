'use client';

import { useState } from 'react';
import Image from 'next/image';
import LiveForexRates from '../components/forex/LiveForexRates';
import ForexLive from '../components/forex/ForexLive';

export default function ForexPage() {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[300px] bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                <div className="absolute inset-0 bg-[url('/Assets/Forex/forexBanner.webp')] bg-cover bg-center opacity-20" />
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="text-white max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Foreign Exchange Services</h1>
                        <p className="text-lg md:text-xl">Get the best currency exchange rates and forex services for your international travels</p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <Image src="/Assets/Forex/currency-exchange.png" alt="Currency Exchange" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Currency Exchange</h3>
                        <p className="text-gray-600">Competitive rates for 100+ currencies</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <Image src="/Assets/Forex/forex-card.png" alt="Forex Card" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Forex Cards</h3>
                        <p className="text-gray-600">Secure and convenient travel cards</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <Image src="/Assets/Forex/wire-transfer.png" alt="Wire Transfer" width={64} height={64} className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Wire Transfers</h3>
                        <p className="text-gray-600">Quick and secure international transfers</p>
                    </div>
                </div>
            </div>

            {/* Live Rates Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Live Forex Rates</h2>
                    <LiveForexRates />
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Contact Us for Forex Services</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input type="email" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input type="tel" className="w-full p-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Service Required</label>
                            <select className="w-full p-2 border rounded-lg">
                                <option>Currency Exchange</option>
                                <option>Forex Card</option>
                                <option>Wire Transfer</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white py-2 rounded-lg font-medium hover:opacity-90">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
} 