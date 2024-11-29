import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star, Calendar, Utensils, Car, Map } from 'lucide-react'
import Link from 'next/link'

// api or db
const mockPackages = [
    {
        id: 1,
        name: 'Maldives Paradise',
        destination: 'Maldives',
        duration: '7 days',
        price: 150000,
        discountedPrice: 120000,
        rating: 4.5,
        reviews: 120,
        image: '/Assets/DestinationsImage/Maldives.jpg',
        description: 'Experience paradise in the Maldives with crystal clear waters and luxurious overwater bungalows.',
        itinerary: [
            { day: 1, description: 'Arrive in Male, transfer to resort' },
            { day: 2, description: 'Snorkeling and beach relaxation' },
            { day: 3, description: 'Island hopping tour' },
            { day: 4, description: 'Spa day and sunset cruise' },
            { day: 5, description: 'Scuba diving excursion' },
            { day: 6, description: 'Free day for leisure activities' },
            { day: 7, description: 'Departure' },
        ],
        inclusions: [
            'Round-trip flights',
            'Accommodation in 5-star resort',
            'All meals (breakfast, lunch, dinner)',
            'Airport transfers',
            'Welcome drink on arrival',
            'Daily housekeeping',
            'Use of non-motorized water sports equipment',
        ],
        exclusions: [
            'Travel insurance',
            'Personal expenses',
            'Spa treatments',
            'Motorized water sports',
            'Scuba diving certification',
        ],
        terms: [
            'Booking must be made at least 30 days prior to departure',
            'Full payment required at the time of booking',
            'Cancellation fees apply',
            'Passport must be valid for at least 6 months from the date of return',
        ],
    },
]

export default function PackageDetails({ params }: { params: { id: string } }) {
    const travelPackage = mockPackages.find(p => p.id === parseInt(params.id))

    if (!travelPackage) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{travelPackage.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <img src={travelPackage.image} alt={travelPackage.name} className="w-full h-96 object-cover rounded-lg mb-4" />
                    <div className="flex items-center mb-4">
                        <Star className="text-yellow-400 w-5 h-5" />
                        <span className="ml-1">{travelPackage.rating}</span>
                        <span className="ml-2 text-sm text-gray-500">({travelPackage.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-700 mb-4">{travelPackage.description}</p>
                    <Tabs defaultValue="itinerary">
                        <TabsList>
                            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                            <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                            <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
                            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
                        </TabsList>
                        <TabsContent value="itinerary">
                            <ul className="space-y-4">
                                {travelPackage.itinerary.map((day) => (
                                    <li key={day.day} className="flex items-start">
                                        <Calendar className="w-5 h-5 mr-2 mt-1" />
                                        <div>
                                            <strong>Day {day.day}:</strong> {day.description}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="inclusions">
                            <ul className="space-y-2">
                                {travelPackage.inclusions.map((inclusion, index) => (
                                    <li key={index} className="flex items-center">
                                        <Utensils className="w-5 h-5 mr-2" />
                                        {inclusion}
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="exclusions">
                            <ul className="space-y-2">
                                {travelPackage.exclusions.map((exclusion, index) => (
                                    <li key={index} className="flex items-center">
                                        <Car className="w-5 h-5 mr-2" />
                                        {exclusion}
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="terms">
                            <ul className="space-y-2">
                                {travelPackage.terms.map((term, index) => (
                                    <li key={index} className="flex items-center">
                                        <Map className="w-5 h-5 mr-2" />
                                        {term}
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                    </Tabs>
                </div>
                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Book This Package</h2>
                        <div className="mb-4">
                            <span className="text-3xl font-bold">₹{travelPackage.discountedPrice.toLocaleString()}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">₹{travelPackage.price.toLocaleString()}</span>
                        </div>
                        <p className="text-gray-700 mb-4">Duration: {travelPackage.duration}</p>
                        <Link href="/booking">
                            <Button className="w-full mb-4">Book Now</Button>
                        </Link>
                        <Button variant="outline" className="w-full">Contact Agent</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

