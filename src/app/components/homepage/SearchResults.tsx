import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

// This would typically come from an API or database
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
    },
    {
        id: 2,
        name: 'Dubai Adventure',
        destination: 'Dubai',
        duration: '5 days',
        price: 100000,
        discountedPrice: 85000,
        rating: 4.2,
        reviews: 95,
        image: '/Assets/DestinationsImage/Dubai.jpg',
    },

    {
        id: 3,
        name: 'Paris Getaway',
        destination: 'Paris',
        duration: '4 days',
        price: 80000,
        discountedPrice: 70000,
        rating: 4.0,
        reviews: 80,
        image: '/Assets/DestinationsImage/paris.jpg',
    },
    {
        id: 4,
        name: 'Bali Bliss',
        destination: 'Bali',
        duration: '6 days',
        price: 90000,
        discountedPrice: 75000,
        rating: 4.3,
        reviews: 100,
        image: '/Assets/DestinationsImage/bali.jpg',
    },
    {
        id: 5,
        name: 'Swiss Alps Adventure',
        destination: 'Switzerland',
        duration: '8 days',
        price: 200000,
        discountedPrice: 180000,
        rating: 4.8,
        reviews: 150,
        image: '/Assets/DestinationsImage/alps.jpg',
    },
    {
        id: 6,
        name: 'Santorini Dream',
        destination: 'Greece',
        duration: '5 days',
        price: 120000,
        discountedPrice: 100000,
        rating: 4.6,
        reviews: 130,
        image: '/Assets/DestinationsImage/lol.jpg',
    },
    {
        id: 7,
        name: 'Tokyo Experience',
        destination: 'Japan',
        duration: '7 days',
        price: 180000,
        discountedPrice: 150000,
        rating: 4.7,
        reviews: 140,
        image: '/Assets/DestinationsImage/japan.jpg',
    },
    {
        id: 8,
        name: 'New York City Break',
        destination: 'USA',
        duration: '4 days',
        price: 100000,
        discountedPrice: 85000,
        rating: 4.4,
        reviews: 90,
        image: '/Assets/DestinationsImage/nyc.jpg',
    },
    {
        id: 9,
        name: 'Cape Town Adventure',
        destination: 'South Africa',
        duration: '6 days',
        price: 160000,
        discountedPrice: 140000,
        rating: 4.5,
        reviews: 110,
        image: '/Assets/DestinationsImage/sa.jpg',
    },
    {
        id: 10,
        name: 'Sydney Escape',
        destination: 'Australia',
        duration: '5 days',
        price: 120000,
        discountedPrice: 100000,
        rating: 4.6,
        reviews: 120,
        image: '/Assets/DestinationsImage/aus.jpg'
    },
    {
        id: 11,
        name: 'Rio de Janeiro Getaway',
        destination: 'Brazil',
        duration: '7 days',
        price: 180000,
        discountedPrice: 150000,
        rating: 4.7,
        reviews: 130,
        image: '/Assets/DestinationsImage/brazil.jpg',
    },
    {
        id: 12,
        name: 'Cairo Experience',
        destination: 'Egypt',
        duration: '6 days',
        price: 160000,
        discountedPrice: 140000,
        rating: 4.5,
        reviews: 110,
        image: '/Assets/DestinationsImage/egypt.jpg',
    }

]

export default function SearchResults({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    // In a real application, you would use the searchParams to fetch results from an API
    console.log(searchParams)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPackages.map((pkg) => (
                <Card key={pkg.id}>
                    <CardHeader>
                        <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{pkg.name}</CardTitle>
                        <p className="text-sm text-gray-500">{pkg.destination} • {pkg.duration}</p>
                        <div className="flex items-center mt-2">
                            <Star className="text-yellow-400 w-5 h-5" />
                            <span className="ml-1">{pkg.rating}</span>
                            <span className="ml-2 text-sm text-gray-500">({pkg.reviews} reviews)</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-2xl font-bold">₹{pkg.discountedPrice.toLocaleString()}</span>
                            <span className="ml-2 text-sm text-gray-500 line-through">₹{pkg.price.toLocaleString()}</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href={`/package/${pkg.id}`} className="w-full">
                            <Badge className="w-full py-2 text-center">View Details</Badge>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

