'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Camera, Calendar, Phone, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GalleryModal } from '@/app/package/[id]/gallery-modal';

interface DestinationDetails {
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


const destinationData: { [key: string]: DestinationDetails } = {
    thailand: {
        name: "Thailand - Phuket & Krabi",
        price: 25000,
        image: "/Assets/DestinationsImage/dubaiImage.jpeg",
        packages: 4,
        description: "Experience the beauty of Thailand with our carefully curated package. From bustling Phuket to serene beaches, immerse yourself in Thai culture and natural wonders.",
        duration: { days: 5, nights: 4 },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Phuket",
                description: "Pick up from Phuket Airport, hotel check-in at Ashlee Plaza Patong Resort & Spa or similar. Enjoy a Phuket city tour covering Chalong Temple, Karon View Point, Honey Bee Farm, Cashew Nut Factory, and the iconic Big Buddha (private tour)."
            },
            {
                day: 2,
                title: "Phi Phi Island Tour",
                description: "Embark on a full-day tour of Phi Phi Islands by speed boat. Enjoy the crystal-clear waters and beaches, with lunch included. (Shared tour, National Park Fee excluded)."
            },
            {
                day: 3,
                title: "Transfer to Krabi",
                description: "After breakfast, transfer to Krabi. Check-in at Aonang Paradise Resort or similar, followed by a Krabi city tour."
            },
            {
                day: 4,
                title: "Krabi 4 Island Tour",
                description: "Experience the stunning Krabi 4 Islands (Chicken Island, Tub Island, Poda Island, and Phra Nang Cave) with a traditional long-tail boat. Lunch included. (Shared tour, National Park Fee excluded)."
            },
            {
                day: 5,
                title: "Departure",
                description: "Check-out from the hotel and transfer to the airport for your return journey."
            }
        ],
        inclusions: [
            "Accommodation with breakfast",
            "Krabi 4 Island Tour with lunch by long-tail boat (shared)",
            "Phuket city tour (private)",
            "Phi Phi Island Tour with lunch by speed boat (shared)",
            "Airport transfers"
        ],
        exclusions: [
            "National Park Fees for tours",
            "International flights",
            "Travel insurance",
            "Personal expenses"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],
        galleryImages: [
            "/Assets/DestinationsImage/phuket1.jpg",
            "/Assets/DestinationsImage/phuket2.jpg",
            "/Assets/DestinationsImage/krabi1.jpg",
            "/Assets/DestinationsImage/krabi2.jpg",
            "/Assets/DestinationsImage/thailand3.jpg"
        ]
    },

    dubai: {
        name: "Dubai - The City of Dreams",
        price: 54000,
        image: "/Assets/DestinationsImage/dubaiImage.jpeg",
        packages: 6,
        description: "Discover the mesmerizing blend of modernity and tradition in Dubai. From iconic skyscrapers to cultural landmarks and desert adventures, this trip offers an unforgettable experience.",
        duration: { days: 6, nights: 5 },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dubai",
                description: "Pick up from Dubai Airport to La Quinta by Wyndham (Deluxe King or similar). Evening Dhow Cruise Marina with an international buffet dinner on the lower deck."
            },
            {
                day: 2,
                title: "Dubai City Tour & Burj Khalifa",
                description: "Half-day Dubai city tour exploring landmarks and attractions. Visit Burj Khalifa 124th/125th floor (off-peak ticket) with transfers."
            },
            {
                day: 3,
                title: "Dubai Frame & Desert Safari",
                description: "Visit Dubai Frame, then head for an exciting Desert Safari with BBQ dinner, Tanura dance, Horse dance, Fire dance, and Belly dance."
            },
            {
                day: 4,
                title: "Abu Dhabi City Tour",
                description: "Explore Abu Dhabi with a guided city tour, including a visit to the famous BAPS temple."
            },
            {
                day: 5,
                title: "Luxury Yacht Experience",
                description: "Enjoy a private 1-hour yacht tour aboard a 42-foot yacht. Relax and take in the stunning Dubai Marina views."
            },
            {
                day: 6,
                title: "Departure from Dubai",
                description: "Drop-off to Dubai Airport for your return journey. Take home wonderful memories of your Dubai adventure."
            }
        ],
        inclusions: [
            "Accommodation at La Quinta by Wyndham or similar (Deluxe King Room)",
            "Airport pickup and drop-off (private transfers)",
            "Dhow Cruise Marina with international buffet dinner",
            "Half-day Dubai city tour",
            "Burj Khalifa (124th/125th floor) off-peak ticket",
            "Dubai Frame entry",
            "Desert Safari with BBQ dinner and live performances",
            "Abu Dhabi city tour including BAPS temple",
            "1-hour private yacht experience (42 Ft)"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Visa fees",
            "Optional tours and experiences"
        ],

        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],
        galleryImages: [
            "/Assets/DestinationsImage/dubai1.jpg",
            "/Assets/DestinationsImage/dubai2.jpg",
            "/Assets/DestinationsImage/dubai3.jpg",
            "/Assets/DestinationsImage/dubai4.jpg"
        ]
    },

    singapore: {
        name: "Singapore - A World of Wonders",
        price: 66000,
        image: "/Assets/DestinationsImage/singaporeImage.jpeg",
        packages: 6,
        description: "Immerse yourself in the vibrant culture, thrilling attractions, and iconic landmarks of Singapore. This trip promises a perfect mix of adventure, entertainment, and relaxation.",
        duration: { days: 6, nights: 5 },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Singapore & City Tour",
                description: "Pick up from the airport and check into your hotel (Boss or V Lavender with Boss). Later, enjoy a 3-hour Singapore city tour exploring the city's iconic landmarks."
            },
            {
                day: 2,
                title: "Garden by the Bay & Marina Bay Sky Park",
                description: "Explore Gardens by the Bay, featuring the stunning Supertree Grove and the magical Cloud Forest. Then visit the Marina Bay Sky Park with its breathtaking views, all with tickets and transfers included."
            },
            {
                day: 3,
                title: "Universal Studios Singapore",
                description: "Enjoy a full-day tour of Universal Studios Singapore with thrilling rides, shows, and attractions, including normal entry tickets and transfers."
            },
            {
                day: 4,
                title: "Sentosa Adventure & Wings of Time",
                description: "Visit Sentosa Island, starting with a 1-way cable car ride. Enjoy the 5-in-1 Madame Tussauds combo, including Madame Tussauds Singapore, Images of Singapore, Spirit of Singapore boat ride, Marvel 4D Cinema, and Ultimate Film Star Experience. End the day with the mesmerizing Wings of Time show."
            },
            {
                day: 5,
                title: "Night Safari Adventure",
                description: "Experience the renowned Night Safari, featuring a complimentary animal show and tram ride through the nocturnal zoo, with tickets and transfers included."
            },
            {
                day: 6,
                title: "Departure from Singapore",
                description: "Private airport drop-off for your return journey. Cherish the beautiful memories of your Singapore trip."
            }
        ],
        inclusions: [
            "Accommodation at Hotel Boss or V Lavender with Boss",
            "Singapore city tour (3 hours)",
            "Universal Studios tour with normal tickets and transfers",
            "Garden by the Bay (Supertree + Cloud Forest) and Marina Bay Sky Park with tickets and transfers",
            "Night Safari with complimentary animal show, tram ride, tickets, and transfers",
            "Sentosa with 1-way cable car and Madame Tussauds 5-in-1 combo (Madame Tussauds Singapore, Images of Singapore, Spirit of Singapore boat ride, Marvel 4D Cinema, Ultimate Film Star Experience) + Wings of Time show with tickets and transfers",
            "Return airport terminal transfers on a private basis (midnight surcharge may apply)",
            "All tours and transfers on a sharing basis",
            "24-hour assistance in English via Hotline"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Visa fees",
            "Personal expenses",
            "Optional tours and experiences",
            "Meals not mentioned in inclusions"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],

        galleryImages: [
            "/Assets/DestinationsImage/singapore1.jpg",
            "/Assets/DestinationsImage/singapore2.jpg",
            "/Assets/DestinationsImage/singapore3.jpg",
            "/Assets/DestinationsImage/singapore4.jpg"
        ]
    },

    bali: {
        name: "Bali - A Tropical Getaway",
        price: 19500,
        image: "/Assets/DestinationsImage/baliImage.jpeg",
        packages: 5,
        description: "Discover Bali's enchanting temples, stunning beaches, and vibrant culture with this thoughtfully curated 4 Nights / 5 Days package.",
        duration: { days: 5, nights: 4 },
        itinerary: [
            {
                day: 1,
                title: "Arrival & Candlelight Dinner",
                description: "Arrive in Bali and check in to the Fullmoon Ubud (Deluxe Room). Spend your evening with a romantic candlelight dinner to set the perfect mood for your Bali getaway."
            },
            {
                day: 2,
                title: "Full-Day Nusa Penida Tour",
                description: "Enjoy a full-day tour of Nusa Penida, including a visit to iconic locations like Broken Beach, Angel’s Billabong, and Kelingking Beach. Includes lunch."
            },
            {
                day: 3,
                title: "Temple & Beach Tour",
                description: "Explore Bali's spiritual side with visits to Lempuyang Temple (Gate of Heaven), Tirta Gangga Temple, Goa Lawah Temple (Bats Cave), and Black Sand Beach."
            },
            {
                day: 4,
                title: "Kintamani & Nature Tour",
                description: "Immerse yourself in Bali's natural beauty with a visit to Kintamani, Coffee Plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, and the famous Bali Jungle Swing. Enjoy unlimited swings, nest experiences, and a complimentary local lunch."
            },
            {
                day: 5,
                title: "Departure",
                description: "Check out from Swiss Belhotel Kuta (Deluxe Room) and transfer to the airport for your departure with memories of an unforgettable Bali trip."
            }
        ],
        inclusions: [
            "Accommodation: 2 Nights in Fullmoon Ubud (Deluxe Room), 2 Nights in Swiss Belhotel Kuta (Deluxe Room without balcony)",
            "Romantic candlelight dinner on Day 1",
            "Full-Day Nusa Penida Tour with lunch",
            "Full-Day Temple Tour (Lempuyang Temple, Tirta Gangga, Goa Lawah, Black Sand Beach)",
            "Kintamani, Coffee Plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, Bali Jungle Swing (Unlimited swings & nests) with complimentary local lunch",
            "Private transfers for arrival and departure",
            "Tours and transfers on a sharing basis"
        ],
        exclusions: [
            "Flights to and from Bali",
            "Travel insurance",
            "Visa fees (if applicable)",
            "Personal expenses",
            "Meals not mentioned in the itinerary",
            "Optional tours and activities"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],

        galleryImages: [
            "/Assets/DestinationsImage/bali1.jpg",
            "/Assets/DestinationsImage/bali2.jpg",
            "/Assets/DestinationsImage/bali3.jpg",
            "/Assets/DestinationsImage/bali4.jpg"
        ]
    },

    indonesia: {
        name: "Bali - Paradise Awaits",
        price: 55500,
        image: "/Assets/DestinationsImage/baliImage.jpeg",
        packages: 8,
        description: "Experience the beauty and serenity of Bali with its stunning beaches, temples, and vibrant culture. From water sports to cultural tours, this trip offers a perfect blend of relaxation and adventure.",
        duration: {
            days: 8,
            nights: 7
        },
        itinerary: [
            {
                day: 1,
                title: "Arrival to Bali",
                description: "Pick up from Bali Airport and check-in at your hotel. Enjoy the evening at leisure."
            },
            {
                day: 2,
                title: "Water Sports & Uluwatu Temple + Kecak & Fire Dance Show",
                description: "Enjoy water sports at Benoa Beach followed by a visit to Uluwatu Temple and the Kecak & Fire Dance Show in the evening."
            },
            {
                day: 3,
                title: "Full-Day Nusa Penida West Tour",
                description: "Visit Kelingking Beach, Angel Bilabong, Broken Bay, and Bubu Beach on Nusa Penida Island."
            },
            {
                day: 4,
                title: "Handara Gate, Ulun Danu Temple, Tanah Lot Sunset Tour",
                description: "Explore the Handara Gate, Ulun Danu Temple, and Tanah Lot for a sunset view."
            },
            {
                day: 5,
                title: "Day Free for Leisure",
                description: "Enjoy a day at leisure to explore Bali at your own pace or opt for optional tours."
            },
            {
                day: 6,
                title: "Bali to Gili Trawangan",
                description: "Transfer by fast boat to Gili Trawangan. Check-in and relax."
            },
            {
                day: 7,
                title: "Gili Trawangan to Bali",
                description: "Return fast boat to Bali."
            },
            {
                day: 8,
                title: "Kintamani, Coffee Plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, Bali Jungle Swing",
                description: "Visit Kintamani, Coffee Plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, and enjoy the Bali Jungle Swing."
            }
        ],
        inclusions: [
            "Accommodation at Bliss Surfer Kuta (Deluxe Room with balcony), Aston Sunset Beach Resort Gili (Deluxe Garden View), Alam Puisi Villa Ubud (One Bedroom Pool Villa)",
            "Water sports at Benoa Beach",
            "Uluwatu Temple & Kecak & Fire Dance Show",
            "Full-Day Nusa Penida West Tour with transportation and lunch",
            "Handara Gate, Ulun Danu Temple, and Tanah Lot Sunset Tour",
            "Bali to Gili Trawangan and Gili to Bali transfers by fast boat",
            "Kintamani, Coffee Plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, Bali Jungle Swing",
            "Private airport transfers and all other transfers on a sharing basis"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Visa fees",
            "Personal expenses",
            "Optional tours and activities",
            "Meals not mentioned in inclusions"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],

        galleryImages: [
            "/Assets/DestinationsImage/bali1.jpg",
            "/Assets/DestinationsImage/bali2.jpg",
            "/Assets/DestinationsImage/bali3.jpg",
            "/Assets/DestinationsImage/bali4.jpg"
        ]
    },

    japan: {
        name: "Japan - The Land of Wonders",
        price: 170500,
        image: "/Assets/DestinationsImage/japanImage.jpeg",
        packages: 1,
        description: "Explore the enchanting cities of Japan, from the vibrant culture of Tokyo to the scenic beauty of Kyoto, Osaka, and Mount Fuji. This 9-night journey offers a blend of modern attractions, historic sites, and serene landscapes.",
        duration: {
            days: 10,
            nights: 9
        },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: "Arrive at Tokyo Airport and transfer to your hotel by private vehicle (driver only). Check-in and relax."
            },
            {
                day: 2,
                title: "Tokyo Sightseeing",
                description: "Visit Tokyo Skytree, Sensoji Temple, Nakamiyo Commercial Street, and Akihabara for a day full of exploration."
            },
            {
                day: 3,
                title: "Tokyo - Mount Fuji - Tokyo",
                description: "Weather permitting, visit Mt. Fuji 5th Station, Owakudani Valley, and enjoy a cruise on Lake Ashinochi."
            },
            {
                day: 4,
                title: "Disneyland",
                description: "Spend a magical day at Disneyland Tokyo, enjoying all the exciting rides and attractions."
            },
            {
                day: 5,
                title: "Tokyo to Osaka by Train (Shinkansen)",
                description: "Travel by Shinkansen to Osaka. Visit Osaka Castle Park, Namba Yasaka Shrine, Shinsaibashi, Dotonbori, and Kuroemon Market."
            },
            {
                day: 6,
                title: "Universal Studios Osaka",
                description: "Enjoy a thrilling day at Universal Studios Osaka, experiencing world-class attractions and entertainment."
            },
            {
                day: 7,
                title: "Osaka to Kyoto",
                description: "Travel by van to Kyoto (2 hours) and explore Fushimi Inari Taisha, Kiyomizu-dera, Kiyomizaka, Yazaka Shrine, and Hanami Lane."
            },
            {
                day: 8,
                title: "Kyoto to Nara Park",
                description: "Visit Nara Park and the Todaiji Temple, followed by a visit to Haruhi Daisha. Return to Osaka by van."
            },
            {
                day: 9,
                title: "Free Day",
                description: "Enjoy a free day on your own to explore Osaka or relax."
            },
            {
                day: 10,
                title: "Transfer to Osaka Airport",
                description: "Transfer to Osaka Airport for your return flight."
            }
        ],
        inclusions: [
            "Accommodation in Tokyo, Osaka, and Kyoto",
            "Private transfers on arrival and departure (driver only)",
            "Sightseeing tours in Tokyo, Osaka, Kyoto, and Nara",
            "Shinkansen train travel from Tokyo to Osaka",
            "Universal Studios and Disneyland entry tickets",
            "All transfers between cities and attractions",
            "24-hour English-speaking assistance"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Visa fees",
            "Personal expenses",
            "Meals not mentioned in inclusions",
            "Optional tours and experiences"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],

        galleryImages: [
            "/Assets/DestinationsImage/japan1.jpg",
            "/Assets/DestinationsImage/japan2.jpg",
            "/Assets/DestinationsImage/japan3.jpg",
            "/Assets/DestinationsImage/japan4.jpg"
        ]
    },

    hongkong: {
        name: "Hong Kong & Macau - A Dual City Adventure",
        price: 74680,
        image: "/Assets/DestinationsImage/hong_kong_macau_image.jpeg",
        packages: 1,
        description: "Explore the vibrant city of Hong Kong and the historic charm of Macau. This 5-night tour offers a perfect blend of thrilling attractions, cultural experiences, and leisure time.",
        duration: {
            days: 6,
            nights: 5
        },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Hong Kong",
                description: "Arrive at Hong Kong Airport and transfer to your hotel (hotel check-in time after 3 PM). Enjoy a relaxing check-in process before your night tour."
            },
            {
                day: 1,
                title: "Hong Kong Night Tour",
                description: "At 16:30, embark on the HKG Night Tour. Experience Victoria Peak with an one-way tram ride, Madame Tussauds, the Clock Tower, Star Avenue, and the Symphony of Lights show. (Maximum 5 hours)"
            },
            {
                day: 2,
                title: "Ocean Park Day Trip",
                description: "Enjoy a full day at Ocean Park with round-trip private transfer (driver only, no guide)."
            },
            {
                day: 3,
                title: "Disney Day Pass",
                description: "Spend a fun-filled day at Disneyland with a day pass, and round-trip private transfers (driver only, no guide)."
            },
            {
                day: 4,
                title: "Ferry to Macau and City Tour",
                description: "Check out from the hotel, then take a driver pick-up to the pier for a ferry ride to Macau. Upon arrival, enjoy a 6-hour Macau city tour, visiting Ruins St. Pauls Church, A-ma Temple, Senado Square, Fishermans Wharf, and the Golden Lotus statue. The tour ends with hotel check-in."
            },
            {
                day: 5,
                title: "Free Day Leisure",
                description: "Enjoy a free day to relax or explore the attractions of Hong Kong or Macau at your own pace."
            },
            {
                day: 6,
                title: "Return to Hong Kong & Departure",
                description: "Check out from the hotel, take a ferry back to Hong Kong, and transfer to Hong Kong Airport for your return flight."
            }
        ],
        inclusions: [
            "Accommodation in Hong Kong and Macau",
            "Private transfers from airport to hotel and back",
            "HKG Night Tour with Victoria Peak, Madame Tussauds, and Symphony of Lights show",
            "Ocean Park Day Trip with private transfers (driver only, no guide)",
            "Disney Day Pass with private transfers (driver only, no guide)",
            "Macau city tour including Ruins St. Pauls Church, A-ma Temple, Senado Square, and more",
            "Ferry transfer between Hong Kong and Macau",
            "24-hour English-speaking assistance"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Visa fees",
            "Personal expenses",
            "Meals not mentioned in inclusions",
            "Optional tours and experiences"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],

        galleryImages: [
            "/Assets/DestinationsImage/hong_kong_macau1.jpg",
            "/Assets/DestinationsImage/hong_kong_macau2.jpg",
            "/Assets/DestinationsImage/hong_kong_macau3.jpg",
            "/Assets/DestinationsImage/hong_kong_macau4.jpg"
        ]
    },

    china: {
        name: "10 Days China Tour: Beijing, Shanghai, Suzhou, Hangzhou & Shenzhen",
        price: 120000,
        image: "/Assets/DestinationsImage/china_image.jpeg",
        packages: 1,
        description: "Explore the rich history, culture, and modern marvels of China in this 10-day tour. Visit iconic cities such as Beijing, Shanghai, Suzhou, Hangzhou, and Shenzhen while experiencing ancient landmarks, breathtaking views, and bustling cityscapes.",
        duration: {
            days: 10,
            nights: 9
        },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Beijing",
                description: "Arrive at Beijing Airport and transfer to your hotel (driver only). Relax and enjoy the rest of the day at your leisure."
            },
            {
                day: 2,
                title: "Beijing City Tour",
                description: "Embark on a guided Beijing City Tour to visit the famous Forbidden City, the Summer Palace, and Tiananmen Square. Discover the history and grandeur of China's capital."
            },
            {
                day: 3,
                title: "The Great Wall & Ming Tombs",
                description: "Explore one of the world's greatest wonders, the Great Wall of China. Then visit the Ming Tombs, a historical site housing the tombs of Ming dynasty emperors. Later, shop at the bustling Xiushui Market."
            },
            {
                day: 4,
                title: "Travel to Shanghai",
                description: "Take a bullet train from Beijing to Shanghai. Upon arrival, check into your hotel and enjoy the rest of the day at leisure."
            },
            {
                day: 5,
                title: "Shanghai City Tour",
                description: "Visit some of Shanghai's most iconic attractions including the Jade Buddha Temple, Yu Garden, Nanjing Road, The Bund, and enjoy a scenic cruise along the Huangpu River."
            },
            {
                day: 6,
                title: "Shanghai Modern Highlights",
                description: "Explore Shanghai's modern marvels such as the Shanghai Tower, the artistic district of Tianzifang, and the stunning Shanghai Nanpu Bridge."
            },
            {
                day: 7,
                title: "Day Trip to Suzhou or Hangzhou",
                description: "Choose between visiting Suzhou or Hangzhou. In Suzhou, explore the peaceful Hanshan Temple, Pingjiang Road, and Lion Hill. In Hangzhou, visit West Lake and other famous sites."
            },
            {
                day: 8,
                title: "Fly to Shenzhen",
                description: "Fly from Shanghai to Shenzhen. Upon arrival, transfer to your hotel and relax for the rest of the day."
            },
            {
                day: 9,
                title: "Shenzhen City Tour",
                description: "Discover Shenzhen's highlights, including the Windows of the World, Dongmen Street, and Lianhua Mountain. Experience the city's vibrant culture and stunning landmarks."
            },
            {
                day: 10,
                title: "Departure from Shenzhen",
                description: "Check out from your hotel and transfer to Shenzhen Airport for your departure flight."
            }
        ],
        inclusions: [
            "Accommodation in Beijing, Shanghai, Suzhou/Hangzhou, and Shenzhen",
            "Private transfers from airports to hotels and between cities",
            "Beijing City Tour including the Forbidden City, Summer Palace, and Tiananmen Square",
            "Visit to the Great Wall of China and Ming Tombs",
            "Bullet train travel from Beijing to Shanghai",
            "Shanghai City Tour including the Jade Buddha Temple, Yu Garden, Nanjing Road, The Bund, and a cruise",
            "Shanghai Modern Highlights Tour including Shanghai Tower, Tianzifang, and Nanpu Bridge",
            "Day Trip to Suzhou or Hangzhou with visits to major attractions",
            "Shenzhen City Tour including Windows of the World, Dongmen Street, and Lianhua Mountain",
            "24-hour English-speaking assistance"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Visa fees",
            "Personal expenses",
            "Meals not mentioned in inclusions",
            "Optional tours and experiences"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],

        galleryImages: [
            "/Assets/DestinationsImage/china_1.jpg",
            "/Assets/DestinationsImage/china_2.jpg",
            "/Assets/DestinationsImage/china_3.jpg",
            "/Assets/DestinationsImage/china_4.jpg"
        ]
    },


};

const getDestinationDetails = (destinationSlug: string): DestinationDetails => {
    const destination = destinationData[destinationSlug.toLowerCase()];

    if (!destination) {
        // Return a default or throw an error if destination not found
        throw new Error(`Destination ${destinationSlug} not found`);
    }

    return destination;
};

export default function DestinationDetails() {
    const params = useParams();
    const { destination } = params;
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [destinationData, setDestinationData] = useState<DestinationDetails | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const data = getDestinationDetails(destination as string);
            setDestinationData(data);
        } catch (err) {
            setError("Destination not found");
            // You might want to redirect to a 404 page here
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
                        <Button className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white mb-4 transition-all duration-500">
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
