'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Camera, Calendar, Phone, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GalleryModal } from '@/app/package/[id]/gallery-modal';
import { BookingFormModal } from '@/app/components/BookingFormModal';

interface TrendingDestinationDetails {
    name: string;
    price: number;
    image: string;
    packages: number;
    description: string;
    duration: {
        days: number;
        nights: number;
    };
    itinerary: Array<{
        day: number;
        title: string;
        description: string;
    }>;
    inclusions: string[];
    exclusions: string[];
    cancellationPolicy: string[];
    galleryImages: string[];
}

const trendingData: { [key: string]: TrendingDestinationDetails } = {
    almaty: {
        name: "Almaty: A City of Eternal Charm & Beauty",
        price: 44275,
        image: "/Assets/DestinationsImage/china.jpg",
        packages: 3,
        description: "Experience the beauty of Almaty with our carefully curated package. From bustling city life to serene mountains, immerse yourself in Kazakh culture and natural wonders.",
        duration: { days: 6, nights: 5 },

        itinerary: [
            {
                day: 1,
                title: "Arrival in Almaty",
                description: "Arrive at Almaty International Airport. Private transfer to your hotel for check-in. Enjoy a leisure day to relax after the journey or explore nearby attractions. Overnight stay at your hotel in Almaty."
            },
            {
                day: 2,
                title: "Shymbulak Mountain Resort & Panfilov Park",
                description: "Visit Shymbulak Mountain Resort in the morning for cable car rides, horse riding, and dining options. In the afternoon, explore Panfilov Park, visit Zenkov Cathedral, feed pigeons, and rent bicycles for kids. Return to the hotel for an overnight stay."
            },
            {
                day: 3,
                title: "Oi Qaragai Resort & Kok Tobe",
                description: "Head to Oi Qaragai Resort in the morning for activities like cable car rides, horse riding, and ziplining. In the afternoon, visit Kok Tobe for scenic cable car rides, city views, and exploring the small zoo. Return to the hotel for an overnight stay."
            },
            {
                day: 4,
                title: "Kolsay Lake, Kaindy Lake, & Charyn Canyon",
                description: "Embark on a full-day trip to explore Kolsay Lake, Kaindy Lake, and Charyn Canyon, known for their breathtaking natural beauty. Enjoy a packed lunch or stop at a local restaurant. Return to Almaty by evening for an overnight stay."
            },
            {
                day: 5,
                title: "Almarasan Valley, Green Bazaar, & Shopping",
                description: "Visit Almarasan Valley in the morning to relax in hot springs and enjoy the riverside. In the afternoon, explore the Green Bazaar for local food and souvenirs, followed by shopping in malls and markets. Return to the hotel for an overnight stay."
            },
            {
                day: 6,
                title: "City Tour, Shopping, & Departure",
                description: "Spend the morning on sightseeing or last-minute shopping. Private transfer to Almaty Airport for your departure flight."
            }
        ],

        inclusions: [
            "Private transfers",
            "Breakfast",
            "SIM cards",
            "4 days of guided tours",
            "Private car",
            "Tour guide",
            "Entrance tickets",
            "Shymbulak cable car rides",
            "Kok Tobe cable car rides",
            "Visits to Almarasan, Charyn, Kolsay, and Kaindy"
        ],
        exclusions: [
            "Compulsory room supplements during the tour",
            "Video and camera permits at sights",
            "Meals outside the stated meal plan",
            "Use of vehicle other than specified in the itinerary",
            "Expenses of personal nature"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],
        galleryImages: [
            "/Assets/DestinationsImage/china.jpg",
            "/Assets/DestinationsImage/china.jpg",
            "/Assets/DestinationsImage/china.jpg"
        ]
    },

    baku: {
        name: "Baku: The City of Winds & Fire Temples",
        price: 30100,
        image: "/Assets/DestinationsImage/china.jpg",
        packages: 3,
        description: "Explore the rich history and culture of Baku with our exclusive package. Discover the city's iconic landmarks, ancient temples, and vibrant nightlife.",
        duration: { days: 5, nights: 5 },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Baku",
                description: "Welcome to Azerbaijan! Transfer to your hotel and evening free for leisure."
            },
            {
                day: 2,
                title: "Baku City Tour",
                description: "Full day tour of Baku including Old City, Maiden Tower, and Gobustan National Park."
            },
            {
                day: 3,
                title: "Departure",
                description: "Last minute shopping and transfer to airport for departure."
            }
        ],
        inclusions: [
            "Hotel accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Sightseeing as per itinerary"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Optional tours"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],
        galleryImages: [
            "/Assets/DestinationsImage/china.jpg",
            "/Assets/DestinationsImage/china.jpg",
            "/Assets/DestinationsImage/china.jpg"
        ]
    },

    vietnam: {
        name: "Vietnam: Land of Timeless Charm",
        price: 46000,
        image: "/Assets/DestinationsImage/china.jpg",
        packages: 4,
        description: "Experience Vietnam's rich history, breathtaking landscapes, and vibrant culture. From the bustling streets of Hanoi to the serene beauty of Halong Bay and the iconic Ba Na Hills, this journey offers unforgettable memories.",
        duration: { days: 6, nights: 5 },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Hanoi",
                description: "Arrive at Noi Bai International Airport in Hanoi. Enjoy a private transfer to your hotel for check-in. Spend the rest of the day at leisure to relax or explore the city at your own pace. Overnight in Hanoi."
            },
            {
                day: 2,
                title: "Hanoi Full-Day City Tour (SIC)",
                description: "Join a shared (SIC) tour of Hanoi's top attractions, including the Ho Chi Minh Mausoleum, One Pillar Pagoda, Temple of Literature, Hoan Kiem Lake, and Ngoc Son Temple. Optional activities include visiting a local museum or an Old Quarter walking tour. Return to your hotel in the evening. Overnight in Hanoi."
            },
            {
                day: 3,
                title: "Halong Bay Day Cruise (Heritage Luxury 5-Star Day Cruise)",
                description: "Embark on an early morning drive to Halong Bay. Enjoy a luxurious day cruise among limestone karsts, emerald waters, and scenic vistas. Participate in optional activities like kayaking or bamboo boat rides, savor a gourmet seafood lunch on board, and explore a cave or floating fishing village. Return to Hanoi in the evening. Overnight in Hanoi."
            },
            {
                day: 4,
                title: "Hanoi to Danang – Free Day",
                description: "Transfer to Noi Bai Airport for your flight to Danang. Upon arrival, check in at your hotel and spend the rest of the day relaxing at the beach or exploring the city. Overnight in Danang."
            },
            {
                day: 5,
                title: "Ba Na Hills Tour (SIC)",
                description: "Take a shared (SIC) tour to Ba Na Hills. Enjoy a scenic cable car ride and visit iconic attractions such as the Golden Bridge, French Village, Le Jardin D'Amour flower garden, and Fantasy Park. A buffet lunch is available (if included). Return to your hotel in the evening. Overnight in Danang."
            },
            {
                day: 6,
                title: "Departure from Danang",
                description: "Check out from your hotel and take a private transfer to Danang International Airport for your departure flight."
            }
        ],

        inclusions: [
            "Private airport transfers",
            "Hotel accommodation in Hanoi and Danang",
            "Shared tours (SIC) in Hanoi and Ba Na Hills",
            "Heritage Luxury 5-star day cruise in Halong Bay",
            "Daily breakfast",
            "Buffet lunch at Ba Na Hills (if included)"
        ],
        exclusions: [
            "GST",
            "Personal expenses (laundry, phone calls, tips, etc.)",
            "Meals outside the stated plan",
            "Flight from Hanoi to Danang",
            "Visa fees",
            "Optional activities (kayaking, bamboo boat rides)"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],
        galleryImages: [
            "/Assets/DestinationsImage/china.jpg",
            "/Assets/DestinationsImage/china.jpg",
            "/Assets/DestinationsImage/china.jpg"
        ]
    },

    shimla: {
        name: "Shimla: The Queen of Hills",
        price: 12000,
        image: "/Assets/DestinationsImage/shimla.jpg",
        packages: 1,
        description: "Escape to the serene landscapes of Shimla for a perfect getaway. From the vibrant Mall Road to the snowy charm of Kufri, this trip offers a blend of relaxation and adventure.",
        duration: { days: 4, nights: 3 },

        itinerary: [
            {
                day: 1,
                title: "Meerut to Shimla - Leisure Day",
                description: "Begin your journey with an early morning departure from Meerut by private vehicle to Shimla. Upon arrival, check in at your hotel and refresh. Spend the day exploring the charming Mall Road, visiting attractions like The Ridge and Scandal Point, or enjoy leisure time. Overnight stay at the hotel."
            },
            {
                day: 2,
                title: "Shimla Local Sightseeing",
                description: "After breakfast, start a full-day tour of Shimla. Visit Jakhoo Temple for panoramic views, the historic Viceregal Lodge for its British-era architecture, and Christ Church. Spend the evening exploring Mall Road’s vibrant atmosphere and local eateries. Overnight stay at the hotel."
            },
            {
                day: 3,
                title: "Kufri Day Tour",
                description: "After breakfast, take a scenic drive to Kufri, known for its adventure activities and stunning views. Enjoy skiing, tobogganing, and other snow activities. Visit the Himalayan Nature Park and Fun World Kufri for wildlife encounters and amusement rides. Return to Shimla in the afternoon and relax. Overnight stay at the hotel."
            },
            {
                day: 4,
                title: "Shimla to Meerut",
                description: "After breakfast, check out from your hotel and embark on the return journey to Meerut. Arrive in the evening, concluding your unforgettable Shimla trip."
            }
        ],

        inclusions: [
            "Private 10-seater AC Tempo for transportation",
            "All sightseeing tours and transfers",
            "Toll charges and taxes"
        ],
        exclusions: [
            "Sightseeing tickets",
            "GST",
            "TCS"
        ],
        cancellationPolicy: [
            "Free cancellation up to 15 days before departure",
            "50% refund for cancellations up to 7 days before departure",
            "No refund within 7 days of departure"
        ],
        galleryImages: [
            "/Assets/DestinationsImage/shimla1.jpg",
            "/Assets/DestinationsImage/shimla2.jpg",
            "/Assets/DestinationsImage/shimla3.jpg"
        ]
    }
};

export default function TrendingDestinationDetails() {
    const params = useParams();
    const { destination } = params;
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [destinationData, setDestinationData] = useState<TrendingDestinationDetails | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    useEffect(() => {
        try {
            const data = trendingData[destination as string];
            if (!data) {
                throw new Error("Destination not found");
            }
            setDestinationData(data);
        } catch (err) {
            setError("Destination not found");
        }
    }, [destination]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!destinationData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
                    <Image
                        src={destinationData.image}
                        alt={destinationData.name}
                        width={1400}
                        height={400}
                        className="w-full h-[400px] object-cover"
                        priority
                    />
                    <button
                        onClick={() => setIsGalleryOpen(true)}
                        className="absolute bottom-4 left-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                        <Camera className="w-4 h-4" />
                        View Gallery
                    </button>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            Available Packages: {destinationData.packages}
                        </div>
                        <div className="text-2xl font-bold mb-1">₹{destinationData.price.toLocaleString()}</div>
                        <div className="text-sm text-gray-600 mb-4">Per Person</div>
                        <Button 
                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white mb-4 transition-all duration-500"
                            onClick={() => setIsBookingModalOpen(true)}
                        >
                            Book Now
                        </Button>
                        <div className="text-center">
                            <div className="text-sm font-medium mb-1">Need Help?</div>
                            <div className="text-xs text-gray-600 mb-2">
                                Our Destination expert will be happy to help resolve your queries
                            </div>
                            <div className="flex items-center justify-center gap-2 text-[#017ae3] font-medium">
                                <Phone className="w-4 h-4" />
                                +91 9499000000
                            </div>
                        </div>
                    </div>
                </div>

                <GalleryModal
                    isOpen={isGalleryOpen}
                    onClose={() => setIsGalleryOpen(false)}
                    images={destinationData.galleryImages}
                />

                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={destinationData.name}
                />

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                        {destinationData.name}
                    </h1>
                    <div className="flex items-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-[#017ae3]" />
                            {destinationData.name}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-[#017ae3]" />
                            {destinationData.duration.nights} Nights
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-[#017ae3]" />
                            {destinationData.duration.days} Days
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed">{destinationData.description}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Day Wise Itinerary</h2>
                            <div className="space-y-8">
                                {destinationData.itinerary.map((day) => (
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
                            <h2 className="text-xl font-bold mb-6">Inclusions</h2>
                            <div className="space-y-2">
                                {destinationData.inclusions.map((inclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        {inclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Exclusions</h2>
                            <div className="space-y-2">
                                {destinationData.exclusions.map((exclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <XCircle className="w-4 h-4 text-red-600" />
                                        {exclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Cancellation Policy</h2>
                            <div className="space-y-2">
                                {destinationData.cancellationPolicy.map((policy, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                                        {policy}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}