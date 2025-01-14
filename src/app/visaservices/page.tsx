'use client'

import { useState } from 'react'
import { FiUpload } from 'react-icons/fi'

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

interface Document {
    name: string
    required: boolean
    description: string
}

const REQUIRED_DOCUMENTS: { [key: string]: Document[] } = {
    default: [
        {
            name: 'Passport',
            required: true,
            description: 'Front and back pages of valid passport'
        },
        {
            name: 'Photograph',
            required: true,
            description: 'Recent passport size photograph'
        },
        {
            name: 'Flight Tickets',
            required: true,
            description: 'Return flight bookings'
        },
        {
            name: 'Hotel Bookings',
            required: true,
            description: 'Confirmed hotel reservations'
        },
        {
            name: 'Bank Statement',
            required: true,
            description: 'Last 6 months bank statements'
        }
    ]
}

const VISA_PROCESS_STEPS = [
    {
        title: "Document Collection",
        description: "Gather all required documents including passport, photographs, and supporting materials",
        icon: "📄"
    },
    {
        title: "Application Review",
        description: "Our experts review your application and documents for accuracy",
        icon: "👀"
    },
    {
        title: "Embassy Submission",
        description: "We submit your application to the respective embassy",
        icon: "🏛️"
    },
    {
        title: "Visa Processing",
        description: "Track your application status throughout the process",
        icon: "⚙️"
    },
    {
        title: "Visa Collection",
        description: "Collect your visa or passport with visa stamp",
        icon: "✅"
    }
];

const VisaServices = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        country: '',
        purpose: '',
        startDate: '',
        endDate: '',
        travellers: 1,
        note: '',
        documents: {} as { [key: string]: File | null }
    })
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Create a flat array of all countries for search
    const allCountries = Object.values(VISA_COUNTRIES).reduce((acc, region) => {
        return [...acc, ...Object.keys(region)]
    }, [] as string[])

    // Handle country input change
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, country: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Convert files to base64
        const documentsWithBase64: { [key: string]: { name: string, base64?: string } } = {};
        for (const [key, file] of Object.entries(formData.documents)) {
            if (file) {
                const base64 = await convertFileToBase64(file);
                documentsWithBase64[key] = {
                    name: file.name,
                    base64
                };
            }
        }

        try {
            const response = await fetch('/api/send-visa-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    ...contactInfo,
                    documents: documentsWithBase64
                }),
            });

            if (response.ok) {
                // Show success message
                alert('Application submitted successfully!');
                // Reset form
                setFormData({
                    country: '',
                    purpose: '',
                    startDate: '',
                    endDate: '',
                    travellers: 1,
                    note: '',
                    documents: {}
                });
                setContactInfo({
                    name: '',
                    email: '',
                    phone: ''
                });
                setCurrentStep(1);
            } else {
                throw new Error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit application. Please try again.');
        }
    };

    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const handleFileUpload = (documentName: string, file: File | null) => {
        setFormData(prev => ({
            ...prev,
            documents: {
                ...prev.documents,
                [documentName]: file
            }
        }))
    }

    return (
        <div className="max-w-6xl mx-auto p-2 sm:p-6 mt-8 sm:mt-12">
            {/* Progress Steps - Made more compact on mobile */}
            <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base ${currentStep >= step ? 'bg-cyan-600 text-white' : 'bg-gray-200'
                                }`}>
                                {step}
                            </div>
                            {step < 3 && (
                                <div className={`w-12 sm:w-20 h-1 mx-1 sm:mx-2 ${currentStep > step ? 'bg-cyan-600' : 'bg-gray-200'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-2 text-xs sm:text-sm">
                    <span className={`mx-2 sm:mx-4 ${currentStep === 1 ? 'text-cyan-600 font-bold' : ''}`}>Details</span>
                    <span className={`mx-2 sm:mx-4 ${currentStep === 2 ? 'text-cyan-600 font-bold' : ''}`}>Documents</span>
                    <span className={`mx-2 sm:mx-4 ${currentStep === 3 ? 'text-cyan-600 font-bold' : ''}`}>Review</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                {/* Step 1: Country Selection and Details */}
                {currentStep === 1 && (
                    <>
                        {/* Visa Process Steps */}
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Visa Process</h2>
                            <div className="space-y-3 sm:space-y-6">
                                {VISA_PROCESS_STEPS.map((step, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <div className="text-2xl sm:text-3xl">{step.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-sm sm:text-base">{step.title}</h3>
                                            <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Application Form */}
                        <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Visa Application Details</h2>
                            <form className="space-y-4 sm:space-y-6">
                                {/* Contact Info Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 mb-1 text-sm">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full p-2 sm:p-3 border rounded-lg text-sm"
                                            value={contactInfo.name}
                                            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-1 text-sm">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full p-2 sm:p-3 border rounded-lg text-sm"
                                            value={contactInfo.email}
                                            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone and Country Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 mb-1 text-sm">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full p-2 sm:p-3 border rounded-lg text-sm"
                                            value={contactInfo.phone}
                                            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-1 text-sm">Selected Country</label>
                                        <input
                                            type="text"
                                            value={formData.country}
                                            onChange={handleCountryChange}
                                            className="w-full p-2 sm:p-3 border rounded-lg text-sm"
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

                                {/* Travel Dates Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 mb-1 text-sm">Start Date</label>
                                        <input
                                            type="date"
                                            className="w-full p-2 sm:p-3 border rounded-lg text-sm"
                                            value={formData.startDate}
                                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-1 text-sm">End Date</label>
                                        <input
                                            type="date"
                                            className="w-full p-2 sm:p-3 border rounded-lg text-sm"
                                            value={formData.endDate}
                                            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                            required
                                        />
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

                                {/* Number of Travellers */}
                                <div>
                                    <label className="block text-gray-700 mb-2">No. of travellers</label>
                                    000<input
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

                                <div className="mt-6 flex justify-between">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors"
                                    >
                                        Next: Upload Documents
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )}

                {/* Step 2: Document Upload - Made more compact on mobile */}
                {currentStep === 2 && (
                    <div className="col-span-2">
                        <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Required Documents</h2>
                            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                {REQUIRED_DOCUMENTS.default.map((doc) => (
                                    <div key={doc.name} className="border rounded-lg p-3 sm:p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-semibold">{doc.name}</h3>
                                                <p className="text-sm text-gray-600">{doc.description}</p>
                                            </div>
                                            {doc.required && (
                                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                                                    Required
                                                </span>
                                            )}
                                        </div>
                                        <label className="block mt-3">
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    onChange={(e) => handleFileUpload(doc.name, e.target.files?.[0] || null)}
                                                    accept="image/*,.pdf"
                                                />
                                                <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-cyan-500 cursor-pointer">
                                                    <FiUpload className="mr-2" />
                                                    <span className="text-sm">
                                                        {formData.documents[doc.name]?.name || 'Click to upload'}
                                                    </span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-between space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(1)}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(3)}
                                    className="flex-1 bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors"
                                >
                                    Next: Review
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Review - Adjusted for better mobile display */}
                {currentStep === 3 && (
                    <div className="col-span-2">
                        <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Review Application</h2>
                            <div className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-semibold mb-2">Travel Details</h3>
                                        <div className="space-y-2">
                                            <p><span className="text-gray-600">Country:</span> {formData.country}</p>
                                            <p><span className="text-gray-600">Purpose:</span> {formData.purpose}</p>
                                            <p><span className="text-gray-600">Dates:</span> {formData.startDate} to {formData.endDate}</p>
                                            <p><span className="text-gray-600">Travelers:</span> {formData.travellers}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Uploaded Documents</h3>
                                        <div className="space-y-2">
                                            {Object.entries(formData.documents).map(([name, file]) => (
                                                <p key={name}>
                                                    <span className="text-gray-600">{name}:</span> {file?.name || 'Not uploaded'}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="flex-1 bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VisaServices