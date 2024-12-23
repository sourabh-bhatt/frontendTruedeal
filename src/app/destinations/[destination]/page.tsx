'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Camera, Calendar, Phone, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GalleryModal } from '@/app/package/[id]/gallery-modal';
import { BookingFormModal } from '../../components/BookingFormModal';
import Trending from '@/app/components/homepage/Trending';
import Destinations from '@/app/components/homepage/Destinations';
import Shimmer from '@/components/ui/shimmer';
import HappyCustomers from '@/app/components/Ad/HappyCustomers';

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
        image: "/IMAGES/thailand/1/1.webp",
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
            "/IMAGES/thailand/1/1.webp",
            "/IMAGES/thailand/1/2.webp",
            "/IMAGES/thailand/1/3.webp",
            "/IMAGES/thailand/1/4.webp",
        ]
    },

    dubai: {
        name: "Dubai - The City of Dreams",
        price: 54000,
        image: "/IMAGES/dubai/1282 x 814/2.webp",
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
            "/IMAGES/dubai/1282 x 814/1.webp",
            "/IMAGES/dubai/1282 x 814/2.webp",
            "/IMAGES/dubai/1282 x 814/3.webp",
            "/IMAGES/dubai/1282 x 814/4.webp",
        ]
    },

    singapore: {
        name: "Singapore - A World of Wonders",
        price: 66000,
        image: "/IMAGES/singapore/2/1.webp",
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
            "/IMAGES/singapore/2/1.webp",
            "/IMAGES/singapore/2/2.webp",
            "/IMAGES/singapore/2/3.webp",
            "/IMAGES/singapore/2/4.webp"

        ]
    },

    bali: {
        name: "Bali - A Tropical Getaway",
        price: 19500,
        image: "/IMAGES/bali/2/1.webp",
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
            "/IMAGES/bali/2/1.webp",
            "/IMAGES/bali/2/2.webp",
            "/IMAGES/bali/2/3.webp",
            "/IMAGES/bali/2/4.webp"
        ]
    },

    indonesia: {
        name: "Bali - Paradise Awaits",
        price: 55500,
        image: "/IMAGES/Indonesia/1/1.webp",
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
            "/IMAGES/Indonesia/1/1.webp",
            "/IMAGES/Indonesia/1/2.webp",
            "/IMAGES/Indonesia/1/3.webp",
            "/IMAGES/Indonesia/1/4.webp"
        ]
    },

    japan: {
        name: "Japan - The Land of Wonders",
        price: 170500,
        image: "/IMAGES/japan/1/1.webp",
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
            "/IMAGES/japan/1/1.webp",
            "/IMAGES/japan/1/2.webp",
            "/IMAGES/japan/1/3.webp",
            "/IMAGES/japan/1/4.webp",
        ]
    },

    hongkong: {
        name: "Hong Kong & Macau - A Dual City Adventure",
        price: 74680,
        image: "/IMAGES/Hongkong/1/1.webp",
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
            "/IMAGES/Hongkong/1/1.webp",
            "/IMAGES/Hongkong/1/2.webp",
            "/IMAGES/Hongkong/1/3.webp",
            "/IMAGES/Hongkong/1/4.webp",
        ]
    },

    china: {
        name: "10 Days China Tour: Beijing, Shanghai, Suzhou, Hangzhou & Shenzhen",
        price: 120000,
        image: "/IMAGES/china/2/1.webp",
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
            "/IMAGES/china/2/1.webp",
            "/IMAGES/china/2/2.webp",
            "/IMAGES/china/2/3.webp",
            "/IMAGES/china/2/4.webp",
        ]
    },


    maldives: {
        name: "5 Days Maldives Family Retreat",
        price: 100000,
        image: "/webImage/maldives/1/1.webp",
        packages: 2,
        description: "Experience a luxurious family getaway in the Maldives with a perfect blend of relaxation and adventure. Enjoy stays in both beach and overwater villas, indulge in full-board gourmet dining, and partake in exciting water activities, all tailored for families with children.",
        duration: {
            days: 5,
            nights: 4
        },
        itinerary: [
            {
                day: 1,
                title: "Arrival and Transfer to Resort",
                description: "Arrive at Malé International Airport and transfer via speedboat to your chosen resort. Check-in to your Mirage Panoramic Room or Grand Beach Villa. Spend the rest of the day at leisure, exploring the resort's amenities and the beautiful beach."
            },
            {
                day: 2,
                title: "Relaxation and Water Activities",
                description: "Enjoy a day of relaxation or engage in water activities such as snorkeling or kayaking. Children can participate in the resort's kids' club activities, designed to entertain and educate young guests."
            },
            {
                day: 3,
                title: "Transition to Overwater Villa",
                description: "Move to your Mirage Water Villa with Jacuzzi or Grand Water Villa. Experience the unique charm of staying over the crystal-clear lagoon. In the evening, savor a family dinner with panoramic ocean views."
            },
            {
                day: 4,
                title: "Explore Marine Life",
                description: "Embark on a guided snorkeling excursion to discover the vibrant marine life of the Maldives. Alternatively, opt for a dolphin-watching cruise or a fishing trip, suitable for all ages."
            },
            {
                day: 5,
                title: "Departure",
                description: "After breakfast, check out from the resort and transfer back to Malé International Airport via speedboat for your departure flight."
            }
        ],
        inclusions: [
            "2 nights in Mirage Panoramic Room or Grand Beach Villa",
            "2 nights in Mirage Water Villa with Jacuzzi or Grand Water Villa",
            "Full board meal plan (breakfast, lunch, and dinner)",
            "Round-trip speedboat transfers",
            "Access to resort facilities including swimming pools, kids' club, and fitness center",
            "Complimentary non-motorized water sports"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Visa fees",
            "Personal expenses",
            "Optional excursions and activities not listed in inclusions",
            "Beverages not included in the meal plan"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before arrival",
            "50% refund up to 15 days before arrival",
            "No refund within 15 days of arrival"
        ],
        galleryImages: [
            "/webImage/maldives/1/1.webp",
            "/webImage/maldives/1/2.webp",
            "/webImage/maldives/1/3.webp",
            "/webImage/maldives/1/4.webp",
        ]
    },


    srilanka: {
        name: "Sri Lanka - The Jewel of the Indian Ocean",
        price: 17500,
        image: "/webImage/Andaman/1/1.webp",
        packages: 2,
        description: "Explore the rich cultural heritage and stunning landscapes of Sri Lanka, from ancient temples to pristine beaches and scenic hills.",
        duration: { days: 4, nights: 3 },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kandy",
                description: "Pick up from Colombo Airport and transfer to Kandy. Evening visit to the Temple of the Tooth and a cultural show."
            },
            {
                day: 2,
                title: "Kandy City Tour & Botanical Gardens",
                description: "Explore Kandy, including a visit to the Royal Botanical Gardens and a scenic walk around Kandy Lake."
            },
            {
                day: 3,
                title: "Bentota Beach & Colombo City Tour",
                description: "Relax at Bentota beach and later explore Colombo with a visit to Galle Face Green, the National Museum, and local markets."
            },
            {
                day: 4,
                title: "Departure from Colombo",
                description: "Morning shopping at the local markets and then drop-off at Colombo Airport for your return journey."
            }
        ],
        inclusions: [
            "Accommodation in hotels as per itinerary (Deluxe Rooms)",
            "Airport pick-up and drop-off (private transfers)",
            "Meals on Full Board basis (3 breakfasts, 3 lunches, 3 dinners)",
            "Sightseeing as per itinerary",
            "All transfers in an air-conditioned vehicle",
            "Local SIM with 1GB data per room",
            "20% discount voucher at Amith Gems Kandy",
            "All applicable taxes in Sri Lanka"
        ],
        exclusions: [
            "International flights",
            "Visa fees",
            "Entrance fees not mentioned in inclusions",
            "Personal expenses",
            "Meals outside the specified meal plan"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 14 days before departure",
            "No refund within 14 days of departure"
        ],
        galleryImages: [
            "/webImage/Andaman/1/1.webp",
            "/webImage/Andaman/1/2.webp",
            "/webImage/Andaman/1/3.webp",
            "/webImage/Andaman/1/4.webp",
        ]
    },

    amritsar_to_shimla: {
        name: "Amritsar to Shimla",
        price: 20000,
        image: "/IMAGES/india/amritsar-to-shimla.webp",
        packages: 9,
        description: "Discover the diverse beauty of North India with this captivating tour from Amritsar to Shimla, featuring iconic landmarks, serene temples, and breathtaking hill stations.",
        duration: { days: 9, nights: 8 },
        itinerary: [
            {
                day: 1,
                title: "Arrival in Amritsar",
                description: "Arrive at Amritsar Airport, check in to your hotel, and visit the historic Jallianwala Bagh. In the evening, attend the Wagah Border Beating Retreat Ceremony, followed by a visit to the illuminated Golden Temple. Overnight stay in Amritsar."
            },
            {
                day: 2,
                title: "Amritsar to Dalhousie",
                description: "After breakfast, journey to Dalhousie, enjoying scenic landscapes. Visit Chamira Lake in the evening, then check into your hotel for an overnight stay in Dalhousie."
            },
            {
                day: 3,
                title: "Exploring Dalhousie",
                description: "Visit Khajjiar, 'Mini Switzerland of India,' with its stunning meadows and forests. Explore Panchpula Waterfall in the afternoon and enjoy optional activities like zorbing or paragliding in Khajjiar. Return to Dalhousie for an overnight stay."
            },
            {
                day: 4,
                title: "Dalhousie to Manali",
                description: "Drive to Manali, stopping at Pandoh Dam and exploring the picturesque Kullu Valley en route. Relax or explore Mall Road in Manali in the evening. Overnight stay in Manali."
            },
            {
                day: 5,
                title: "Exploring Manali",
                description: "Visit Hidimba Devi Temple amidst cedar trees, followed by a trip to Vashisht Hot Springs. Explore the laid-back charm of Old Manali in the evening. Stay overnight in Manali."
            },
            {
                day: 6,
                title: "Solang Valley and Atal Tunnel",
                description: "Enjoy a thrilling day in Solang Valley with adventure activities like skiing and paragliding. Drive through the Atal Tunnel, an engineering marvel. Return to Manali for an overnight stay."
            },
            {
                day: 7,
                title: "Manali to Shimla",
                description: "Drive to Shimla, visiting Kalibari Temple, Viceregal Lodge, and the Botanical Garden upon arrival. Immerse yourself in Shimla's history and natural beauty before checking into your hotel for the night."
            },
            {
                day: 8,
                title: "Shimla and Kufri Excursion",
                description: "Take a morning excursion to Kufri, known for breathtaking views and adventure activities. Enjoy the rest of the day at leisure before an overnight stay in Shimla."
            },
            {
                day: 9,
                title: "Shimla to Chandigarh",
                description: "Drive to Chandigarh and conclude your tour with a drop-off at Chandigarh Airport or Railway Station."
            }
        ],
        inclusions: [
            "Accommodation with breakfast",
            "Sightseeing tours as per itinerary",
            "Transfers in a comfortable vehicle",
            "Local guides for city tours"
        ],
        exclusions: [
            "Adventure activity fees",
            "Entry tickets to monuments",
            "Travel insurance",
            "Personal expenses"
        ],
        cancellationPolicy: [
            "Free cancellation up to 30 days before departure",
            "50% refund up to 15 days before departure",
            "No refund within 15 days of departure"
        ],
        galleryImages: [
            "/IMAGES/india/amritsar.webp",
            "/IMAGES/india/dalhousie.webp",
            "/IMAGES/india/manali.webp",
            "/IMAGES/india/shimla.webp"
        ]
    },

    bhutan: {
        name: "Bhutan - Phuentsholing, Thimphu, Punakha, Paro",
            price: 43300,
                image: "/IMAGES/bhutan/1/1.webp",
                    packages: 3,
                        description: "Explore the Kingdom of Bhutan with its serene landscapes, rich cultural heritage, and majestic monasteries. This tour is designed for an unforgettable experience in the 'Land of Happiness.'",
                            duration: { days: 7, nights: 6 },
        itinerary: [
            {
                day: 1,
                title: "Bagdogra Airport to Phuentsholing",
                description: "Arrive at Bagdogra Airport, meet our representative, complete immigration pre-registration, and transfer to your hotel in Phuentsholing. Check-in and relax."
            },
            {
                day: 2,
                title: "Morning Transfer to Thimphu",
                description: "Drive to Thimphu, visiting Chuzom en route. Check into your hotel and explore local attractions like Buddha Point, King's Memorial Chorten, National Library, and Simply Bhutan."
            },
            {
                day: 3,
                title: "Thimphu – Wangdi / Punakha Excursion – Thimphu",
                description: "Drive to Wangdi via Dochu La Pass. Visit Punakha Dzong and Chimi Lhakhang. Return to Thimphu in the evening."
            },
            {
                day: 4,
                title: "Thimphu to Paro",
                description: "Drive to Paro, visit Ta Dzong (National Museum) and Rinpung Dzong. Check into your hotel and enjoy the evening at leisure."
            },
            {
                day: 5,
                title: "Paro—Excursion to Taktsang Monastery (Tiger’s Nest)",
                description: "Hike to Taktsang Monastery (approx. 5 hours). In the afternoon, visit Drukgyel Dzong and Kyichu Lhakhang."
            },
            {
                day: 6,
                title: "Paro to Phuentsholing",
                description: "Drive back to Phuentsholing and check into your hotel. Spend the evening relaxing or exploring the local area."
            },
            {
                day: 7,
                title: "Phuentsholing to Bagdogra Airport Transfer",
                description: "After breakfast, transfer to Bagdogra Airport for your onward journey, concluding the trip."
            }
        ],
            inclusions: [
                "Assistance upon arrival and departures",
                "6 nights’ accommodation in 3-star hotels",
                "Meal plan: Breakfast and Dinner (MAPI)",
                "All transfers and sightseeing in private vehicle",
                "English-speaking guide during sightseeing",
                "All applicable taxes, driver allowances, and fuel charges"
            ],
                exclusions: [
                    "Airfare to and from Bagdogra",
                    "Lunches",
                    "Pony rides and optional activities",
                    "Entry fees to monuments and parks",
                    "Personal expenses and tips",
                    "Travel insurance",
                    "Additional costs due to unforeseen circumstances"
                ],
                    cancellationPolicy: [
                        "Free cancellation up to 30 days before departure",
                        "50% refund up to 15 days before departure",
                        "No refund within 15 days of departure"
                    ],
                        galleryImages: [
                            "/IMAGES/bhutan/1/1.webp",
                            "/IMAGES/bhutan/1/2.webp",
                            "/IMAGES/bhutan/1/3.webp",
                            "/IMAGES/bhutan/1/4.webp"
                        ]
    },


kashmir: {
    name: "Kashmir - Srinagar, Pahalgam, Gulmarg & Sonmarg",
        price: 20000,
            image: "/IMAGES/kashmir/1/1.webp",
                packages: 4,
                    description: "Discover the enchanting beauty of Kashmir with our meticulously planned package. From serene houseboats to picturesque valleys, immerse yourself in the magical charm of this paradise on earth.",
                        duration: { days: 5, nights: 4 },
    itinerary: [
        {
            day: 1,
            title: "Arrival in Srinagar and Local Sightseeing",
            description: "Upon arrival in Srinagar, meet our representative at the airport. Check into your hotel and visit Mughal Gardens, Nishat Bagh, Shalimar Bagh, and the Hazratbal Shrine. Dinner and overnight stay in Srinagar."
        },
        {
            day: 2,
            title: "Srinagar to Pahalgam",
            description: "After breakfast, drive to Pahalgam, visiting saffron fields, Awantipura Ruins, and Lidder Stream en route. Enjoy optional activities like pony rides and local taxi tours. Return to Srinagar for dinner and overnight stay."
        },
        {
            day: 3,
            title: "Srinagar to Sonmarg and Back",
            description: "After breakfast, travel to Sonmarg, known as the 'Meadow of Gold.' Optional pony rides to Thajiwas Glacier. Return to Srinagar for dinner and overnight stay."
        },
        {
            day: 4,
            title: "Srinagar to Gulmarg and Back",
            description: "Drive to Gulmarg, famous for its ski slopes and golf course. Enjoy a Gondola ride (optional) and views of Nanga Parbat. Return to Srinagar for a houseboat stay, including a Shikara ride on Dal Lake. Dinner and overnight stay."
        },
        {
            day: 5,
            title: "Departure from Srinagar",
            description: "After breakfast, check out from the houseboat and proceed to Srinagar Airport for your onward journey, concluding the tour."
        }
    ],
        inclusions: [
            "Assistance upon arrival and departures",
            "4 nights’ accommodation (3 in Srinagar hotel, 1 in houseboat)",
            "Meal plan: Breakfast and Dinner (MAPI)",
            "1 double room",
            "AC Toyota Etios for all transfers and sightseeing",
            "Shikara ride on Dal Lake (1 hour)",
            "All transport taxes, parking, driver allowances, night halt charges, and fuel"
        ],
            exclusions: [
                "Airfare",
                "Lunches",
                "Pony rides at Pahalgam, Gulmarg, and Sonmarg",
                "Gondola ride fees",
                "Local taxi fees for optional tours",
                "Entry tickets to gardens, Betaab Valley, etc.",
                "Camera fees and personal expenses",
                "Travel insurance",
                "Tips and additional costs due to unforeseen circumstances"
            ],
                cancellationPolicy: [
                    "Free cancellation up to 30 days before departure",
                    "50% refund up to 15 days before departure",
                    "No refund within 15 days of departure"
                ],
                    galleryImages: [
                        "/IMAGES/kashmir/1/1.webp",
                        "/IMAGES/kashmir/1/2.webp",
                        "/IMAGES/kashmir/1/3.webp",
                        "/IMAGES/kashmir/1/4.webp"
                    ]
},

himachal: {
    name: "Himachal Pradesh - The Land of the Himalayas",
        price: 17500,
            image: "/IMAGES/himachal/1/1.webp",
                packages: 2,
                    description: "Explore the majestic beauty of Himachal Pradesh, from the snow-capped mountains to the lush valleys and vibrant culture.",
                        duration: { days: 4, nights: 3 },
    itinerary: [],
        inclusions: [],
            exclusions: [],
                cancellationPolicy: [],
                    galleryImages: []
},

punjab: {
    name: "Punjab - The Land of Five Rivers",
        price: 17500,
            image: "/IMAGES/himachal/1/1.webp",
                packages: 2,
                    description: "Explore the rich culture and vibrant festivals of Punjab, from the Golden Temple to the vibrant bazaars and delicious cuisine.",
                        duration: { days: 4, nights: 3 },
    itinerary: [],
        inclusions: [],
            exclusions: [],
                cancellationPolicy: [],
                    galleryImages: []
},

sikkim: {
    name: "Sikkim - The Land of the Himalayas",
        price: 17500,
            image: "/IMAGES/himachal/1/1.webp",
                packages: 2,
                    description: "Explore the majestic beauty of Sikkim, from the snow-capped mountains to the lush valleys and vibrant culture.",
                        duration: { days: 4, nights: 3 },
    itinerary: [],
        inclusions: [],
            exclusions: [],
                cancellationPolicy: [],
                    galleryImages: []
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
    const [error] = useState<string | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    useEffect(() => {
        try {
            const data = getDestinationDetails(destination as string);
            setDestinationData(data);
        } catch {
            // Handle the error appropriately without using the error object
        }
    }, [destination]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!destinationData) {
        return <Shimmer />;
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
                                +91 8447498498
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
            <Trending />
            <Destinations />
            <HappyCustomers />
        </div>
    );
}
