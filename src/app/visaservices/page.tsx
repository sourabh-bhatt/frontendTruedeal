'use client'

import { useState } from 'react'
import Image from 'next/image'

const VISA_COUNTRIES = {
    'South and East Asia': {
        'Bhutan': '🇧🇹',
        'Cambodia': '🇰🇭',
        'China': '🇨🇳',
        'Hong Kong': '🇭🇰',
        'Indonesia': '🇮🇩',
        'Japan': '🇯🇵',
        'Laos': '🇱🇦',
        'Malaysia': '🇲🇾',
        'Philippines': '🇵🇭',
        'Singapore': '🇸🇬',
        'South Korea': '🇰🇷',
        'Sri Lanka': '🇱🇰',
        'Vietnam': '🇻🇳'
    },
    'Europe': {
        'Austria': '🇦🇹',
        'Czech Republic': '🇨🇿',
        'United Kingdom': '🇬🇧',
        'Finland': '🇫🇮',
        'France': '🇫🇷',
        'Germany': '🇩🇪',
        'Greece': '🇬🇷',
        'Iceland': '🇮🇸',
        'Italy': '🇮🇹',
        'Netherlands': '🇳🇱',
        'Norway': '🇳🇴',
        'Spain': '🇪🇸',
        'Sweden': '🇸🇪',
        'Switzerland': '🇨🇭',
        'Denmark': '🇩🇰'
    },
    'Africa': {
        'Egypt': '🇪🇬',
        'Ethiopia': '🇪🇹',
        'Kenya': '🇰🇪',
        'Madagascar': '🇲🇬',
        'Morocco': '🇲🇦',
        'South Africa': '🇿🇦',
        'Tanzania': '🇹🇿',
        'Zimbabwe': '🇿🇼'
    },
    'Middle East': {
        'Bahrain': '🇧🇭',
        'Oman': '🇴🇲',
        'Saudi Arabia': '🇸🇦',
        'Saudi Arabia - Umrah': '🇸🇦',
        'Turkey': '🇹🇷',
        'United Arab Emirates': '🇦🇪'
    },
    'Americas': {
        'Canada': '🇨🇦',
        'United States of America': '🇺🇸'
    },
    'Central Asia': {
        'Armenia': '🇦🇲',
        'Azerbaijan': '🇦🇿',
        'Georgia': '🇬🇪',
        'Kazakhstan': '🇰🇿',
        'Tajikistan': '🇹🇯',
        'Uzbekistan': '🇺🇿'
    },
    'Oceania': {
        'Australia': '🇦🇺',
        'New Zealand': '🇳🇿'
    }
}

const VisaServices = () => {
    const [formData, setFormData] = useState({
        country: '',
        purpose: '',
        startDate: '',
        endDate: '',
        travellers: 1,
        note: ''
    })

    // Create a flat array of all countries for search
    const allCountries = Object.values(VISA_COUNTRIES).reduce((acc, region) => {
        return [...acc, ...Object.keys(region)]
    }, [] as string[])

    // Handle country input change
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, country: e.target.value })
    }

    // Handle country selection from the list
    const handleCountryClick = (country: string) => {
        setFormData({ ...formData, country })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = `*New Visa Enquiry*
Country: ${formData.country}
Purpose: ${formData.purpose}
Travel Dates: ${formData.startDate} to ${formData.endDate}
No. of Travellers: ${formData.travellers}
Note: ${formData.note || 'No additional notes'}`

        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/918447498498?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-cyan-600 mb-4 mt-10">Apply Visa for 45+ Countries 🌎</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Countries List */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    {Object.entries(VISA_COUNTRIES).map(([region, countries]) => (
                        <div key={region} className="mb-6">
                            <h2 className="text-xl font-bold mb-3">{region}:</h2>
                            <div className="grid grid-cols-2 gap-2">
                                {Object.entries(countries).map(([country, flag]) => (
                                    <button
                                        key={country}
                                        onClick={() => handleCountryClick(country)}
                                        className={`text-left p-2 rounded hover:bg-blue-50 ${formData.country === country ? 'bg-blue-100' : ''
                                            }`}
                                    >
                                        <span className="mr-2">{flag}</span>
                                        {country}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Form */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-6">Visa Application Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Selected Country - Modified to allow typing */}
                        <div>
                            <label className="block text-gray-700 mb-2">Selected Country</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.country}
                                    onChange={handleCountryChange}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="Type or select a country"
                                    list="countries-list"
                                />
                                <datalist id="countries-list">
                                    {allCountries.map((country) => (
                                        <option key={country} value={country} />
                                    ))}
                                </datalist>
                            </div>
                        </div>

                        {/* Purpose of Travel */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Purpose of travel <span className="text-gray-500">(select one)</span>
                            </label>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className={`flex-1 p-3 border rounded-lg ${formData.purpose === 'Tourism' ? 'bg-blue-50 border-blue-500' : ''
                                        }`}
                                    onClick={() => setFormData({ ...formData, purpose: 'Tourism' })}
                                >
                                    🏖️ Tourism
                                </button>
                                <button
                                    type="button"
                                    className={`flex-1 p-3 border rounded-lg ${formData.purpose === 'Business' ? 'bg-blue-50 border-blue-500' : ''
                                        }`}
                                    onClick={() => setFormData({ ...formData, purpose: 'Business' })}
                                >
                                    💼 Business
                                </button>
                            </div>
                        </div>

                        {/* Travel Dates */}
                        <div>
                            <label className="block text-gray-700 mb-2">Travel dates</label>
                            <div className="flex gap-4">
                                <input
                                    type="date"
                                    className="flex-1 p-3 border rounded-lg"
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    required
                                />
                                <input
                                    type="date"
                                    className="flex-1 p-3 border rounded-lg"
                                    value={formData.endDate}
                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        {/* Number of Travellers */}
                        <div>
                            <label className="block text-gray-700 mb-2">No. of travellers</label>
                            <input
                                type="number"
                                min="1"
                                className="w-full p-3 border rounded-lg"
                                value={formData.travellers}
                                onChange={(e) => setFormData({ ...formData, travellers: parseInt(e.target.value) })}
                                required
                            />
                        </div>

                        {/* Note */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Note to our Visa Expert <span className="text-gray-500">(optional)</span>
                            </label>
                            <textarea
                                className="w-full p-3 border rounded-lg h-32"
                                placeholder="Type here..."
                                value={formData.note}
                                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors"
                        >
                            Continue to WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VisaServices
