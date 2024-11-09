'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MapPin, Clock, Users, DollarSign } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { destinationsData } from '@/lib/destinations-data'

export default function DestinationDetails() {
    const params = useParams()
    const { destination } = params
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [date, setDate] = useState<Date>()

    const destinationData = destinationsData[destination as keyof typeof destinationsData]

    if (!destinationData) {
        return <div>Destination not found</div>
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % destinationData.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + destinationData.images.length) % destinationData.images.length)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">{destinationData.name}</h1>
            <div className="relative w-full h-[500px] mb-8">
                <Image
                    src={destinationData.images[currentImageIndex]}
                    alt={`${destinationData.name} - Image ${currentImageIndex + 19}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                <Button variant="outline" size="icon" className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevImage}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextImage}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <CardTitle>Duration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{destinationData.duration.nights} Nights / {destinationData.duration.days} Days</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <CardTitle>Group Size</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Max 15 people</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <CardTitle>Price</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>From ₹{destinationData.price} per person</p>
                    </CardContent>
                </Card>
            </div>

            {/* Date Selection */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Select Your Travel Dates</CardTitle>
                    <CardDescription>Choose your preferred dates for November - December 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => date < new Date('2024-11-01') || date > new Date('2024-12-31')}
                            />
                        </PopoverContent>
                    </Popover>
                </CardContent>
            </Card>

            {/* Itinerary and Sightseeing Tabs */}
            <Tabs defaultValue="itinerary" className="mb-8">
                <TabsList>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="sightseeing">Sightseeing</TabsTrigger>
                </TabsList>
                <TabsContent value="itinerary">
                    <Card>
                        <CardHeader>
                            <CardTitle>Day-by-Day Itinerary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {destinationData.itinerary.map((day) => (
                                <div key={day.day} className="mb-4">
                                    <h3 className="font-bold">Day {day.day}</h3>
                                    <ul className="list-disc list-inside">
                                        {day.activities.map((activity, index) => (
                                            <li key={index}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="sightseeing">
                    <Card>
                        <CardHeader>
                            <CardTitle>Must-See Sights</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {destinationData.sightseeing.map((sight, index) => (
                                    <li key={index} className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        {sight}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Book Now Button */}
            <div className="text-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now
                </Button>
            </div>
        </div>
    )
}