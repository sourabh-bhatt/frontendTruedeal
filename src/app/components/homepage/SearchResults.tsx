import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import mockPackages from '../../../lib/mockPackages.json'
import { TravelPackage } from '@/types/package'
import Image from 'next/image'

export default function SearchResults({ 
    searchParams 
}: { 
    searchParams: { [key: string]: string | string[] | undefined } 
}) {
    const { destination, maxPrice } = searchParams;

    const filteredPackages = (mockPackages as TravelPackage[]).filter(pkg => {
        const matchesDestination = destination 
            ? pkg.destination.toLowerCase().includes(destination.toString().toLowerCase()) 
            : true;
        const matchesPrice = maxPrice 
            ? pkg.price <= parseInt(maxPrice.toString()) 
            : true;
        return matchesDestination && matchesPrice;
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map(pkg => (
                <Card key={pkg.id}>
                    <CardHeader>
                        <Image
                            src={pkg.image}
                            alt={pkg.name}
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{pkg.name}</CardTitle>
                        <p className="text-sm text-gray-500">{pkg.destination} • {pkg.duration.days} days</p>
                        <div className="flex items-center mt-2">
                            <Star className="text-yellow-400 w-5 h-5" />
                            <span className="ml-1">{pkg.rating || 'N/A'}</span>
                            <span className="ml-2 text-sm text-gray-500">({pkg.reviews || 0} reviews)</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-2xl font-bold">₹{pkg.price.toLocaleString()}</span>
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
    );
}

