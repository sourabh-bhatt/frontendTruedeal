"use client";

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Camera, Calendar, Phone, MapPin, Clock } from 'lucide-react'
import Image from "next/image"

const mockPackages = [
    {
        id: 1,
        name: 'Breeze Through Bangkok & Pattaya',
        destination: 'Thailand',
        duration: {
            nights: 2,
            days: 3
        },
        price: 21059,
        advancePayment: 17522,
        image: '/Assets/DestinationsImage/Maldives.jpg',
        description: 'Pattaya is a city on Thailand\'s eastern Gulf coast known for its beaches. A quiet fishing village as recently as the 1960s, it\'s now lined with resort hotels, high-rise condos, shopping malls, cabaret bars and 24-hour clubs. Nearby, hillside Wat Phra Yai Temple features an 18m-tall golden Buddha. The area also features several designer golf courses, some with views of Pattaya Bay.',
        itinerary: [
            {
                day: 1,
                title: 'Coral Island Tour',
                description: 'Visit the beautiful Coral Island'
            },
            {
                day: 2,
                title: 'Alcazar Cabaret Show',
                description: 'Experience the famous Alcazar show'
            },
            {
                day: 3,
                title: 'Tiger Park Pattaya',
                description: 'Visit the Tiger Park'
            },
        ],
        packageOptions: {
            "3 Star": {
                "Single share": "21900",
                "Twin share": "21900",
                "Triple share": "21900",
                "Child with bed": "-",
                "Child without bed": "-"
            }
        },
        inclusions: [
            '02 nights accommodation in 3* hotel',
            '02 breakfast,03 Lunch & 02 Dinner',
            'All transfers under Pvt basis in air conditioned vehicle for the mentioned itinerary'
        ],
        exclusions: [
            'Any meals other than those mentioned in the inclusions.',
            'Porterage, Beverages, Laundry expenses',
            'Expenses caused by factors beyond our control like flight delays, roadblocks, vehicle malfunctions, political disturbances, natural calamities etc.'
        ],
        cancellationPolicy: [
            'Rates are valid for Indian citizens only.',
            'Reconfirmation/cancellation procedures can be done only post receiving the payment.',
            'Unused services for transfers, tours & hotel accommodation are not refundable.',
            'Standard Check in 1400 Hrs & Check out 1200 Hrs which may vary as per local rules.'
        ]
    },
]

export default function PackageDetails({ params }: { params: { id: string } }) {
    const travelPackage = mockPackages.find((p) => p.id === parseInt(params.id))

    if (!travelPackage) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
                    <Image
                        src={travelPackage.image}
                        alt={travelPackage.name}
                        width={1400}
                        height={400}
                        className="w-full h-[400px] object-cover"
                        priority
                    />
                    <button className="absolute bottom-4 left-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300">
                        <Camera className="w-4 h-4" />
                        View Gallery
                    </button>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            Dec 14, 2 Adults, 1 Room
                        </div>
                        <div className="text-2xl font-bold mb-1">₹{travelPackage.price.toLocaleString()}</div>
                        <div className="text-sm text-gray-600 mb-4">All Inclusive</div>
                        <div className="text-sm text-gray-600 mb-4">
                            Confirm your trip by paying only ₹{travelPackage.advancePayment.toLocaleString()} now
                        </div>
                        <Button className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white mb-4 transition-all duration-500">
                            Book this trip
                        </Button>
                        <div className="text-center">
                            <div className="text-sm font-medium mb-1">Need Help?</div>
                            <div className="text-xs text-gray-600 mb-2">
                                Our Destination expert will be happy to help resolve your queries for this tour
                            </div>
                            <div className="flex items-center justify-center gap-2 text-[#017ae3] font-medium">
                                <Phone className="w-4 h-4" />
                                +91 9499000000
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                        {travelPackage.name}
                    </h1>
                    <div className="flex items-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-[#017ae3]" />
                            {travelPackage.destination}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-[#017ae3]" />
                            {travelPackage.duration.nights} Nights
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-[#017ae3]" />
                            {travelPackage.duration.days} Days
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed">{travelPackage.description}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Itinerary</h2>
                            <div className="space-y-8">
                                {travelPackage.itinerary.map((day) => (
                                    <div key={day.day} className="flex gap-4 group">
                                        <div className="flex-shrink-0 relative">
                                            <div className="w-3 h-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full mt-2 group-hover:shadow-lg transition-all duration-300"></div>
                                            <div className="absolute top-5 bottom-0 left-1.5 w-0.5 bg-gradient-to-b from-[#017ae3] to-transparent"></div>
                                        </div>
                                        <div className="group-hover:translate-x-2 transition-transform duration-300">
                                            <div className="text-sm text-gray-500">Day {day.day}</div>
                                            <div className="font-medium text-gray-900">{day.title}</div>
                                            <div className="text-sm text-gray-600 mt-1">{day.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4">Package Options</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white">
                                            <th className="border px-4 py-2 text-left">Room Type</th>
                                            <th className="border px-4 py-2 text-left">3 Star</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(travelPackage.packageOptions["3 Star"]).map(([type, price]) => (
                                            <tr key={type} className="hover:bg-gray-50 transition-colors duration-150">
                                                <td className="border px-4 py-2">{type}</td>
                                                <td className="border px-4 py-2">{price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4">Package Inclusions & Exclusions</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-medium mb-4 text-[#017ae3]">Inclusions</h3>
                                    <ul className="space-y-2">
                                        {travelPackage.inclusions.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full mt-2"></div>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4 text-[#017ae3]">Exclusions</h3>
                                    <ul className="space-y-2">
                                        {travelPackage.exclusions.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4">Cancellation Policy</h2>
                            <ul className="space-y-2">
                                {travelPackage.cancellationPolicy.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

