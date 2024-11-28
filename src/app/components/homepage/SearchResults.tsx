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
        image: '/Assets/PackageImages/maldives.jpg',
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
        image: '/Assets/PackageImages/dubai.jpg',
    },
    // Add more mock packages here
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

