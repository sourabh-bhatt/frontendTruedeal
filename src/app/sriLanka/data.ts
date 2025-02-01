export interface HotelDetail {
    city: string;
    hotel: string;
    roomType: string;
}

export interface GroupDetails {
    pax: string;
    rooms: string;
    arrivalDate: string;
    duration: string;
    costBasis: string;
}

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
}

export interface BaseDestination {
    id: string;
    name: string;
    days: number;
    nights: number;
    amount?: number;
    dateStart: string;
    dateEnd: string;
    description: string;
    groupDetails?: GroupDetails;
    hotelDetails?: HotelDetail[];
    tourSummary?: string[];
    inclusions?: string[];
    exclusions?: string[];
    itinerary?: ItineraryDay[];
    images?: string[];
}

export interface SriLankaPackage extends BaseDestination {
    flightFrom?: string;
}

export const sriLankaData: Record<string, BaseDestination> = {
    bentotaTour: {
        id: "bentota-3d2n",
        name: "Bentota Fixed Departures Package",
        days: 3,
        nights: 2,
        amount: 35000,
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Experience the best of Sri Lanka's coastal beauty with our exclusive fixed departure package to Bentota! Known as the capital of Sri Lankan water sports, Bentota offers a perfect mix of adventure and relaxation. From thrilling water activities to serene boat rides and wildlife experiences, this tour is designed to create unforgettable memories.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "3D2N Bentota Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Meet & greet at Colombo Airport",
            "Accommodation in mentioned hotels or similar (Check-in: 14:00 | Check-out: 12:00)",
            "Daily breakfast & dinner",
            "Two (500ml) water bottles per person daily",
            "Sightseeing & city tours (excluding entrance fees)",
            "Air-conditioned private vehicle with an English-speaking chauffeur guide",
            "Fuel & local insurance for the vehicle",
            "All applicable Sri Lankan taxes"
        ],
        exclusions: [
            "Entrance fees to attractions",
            "Visa fees & airfare",
            "Camera & video permits at sites",
            "Lunch & other meals not mentioned in the itinerary",
            "Personal expenses (laundry, tips, etc.)",
            "Additional transportation beyond the itinerary",
            "Early check-in & late check-out at hotels"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Transfer to Bentota",
                description: "Arrival at Colombo International Airport & meet our representative. Transfer to Bentota. Check-in at the hotel & enjoy leisure time. Dinner & overnight stay in Bentota."
            },
            {
                day: 2,
                title: "Explore Bentota",
                description: "Breakfast at the hotel. Enjoy a scenic Madu River Boat Safari. Visit the Turtle Hatchery and learn about conservation efforts. Engage in exciting water sports activities at Bentota Beach. Dinner & overnight stay in Bentota."
            },
            {
                day: 3,
                title: "Bentota – Colombo – Airport",
                description: "Breakfast at the hotel. Transfer to the airport via Colombo. Colombo city tour & shopping (time permitting). Departure from Sri Lanka."
            }
        ],
        images: [
            "/SriLankaImages/bentota/1.webp",
            "/SriLankaImages/bentota/2.webp"
        ],
        tourSummary: [
            "Thrilling Water Sports: Experience snorkeling, diving, sailing, windsurfing & jet skiing",
            "Wildlife Encounters: Visit a Turtle Hatchery and explore the Madu River mangroves",
            "Leisure & Adventure: Enjoy the best beaches and breathtaking sunsets",
            "Shopping & Culture: Discover Colombo's vibrant markets & city highlights"
        ]
    },
    colomboBentotaTour: {
        id: "colombo-bentota-2n",
        name: "Fixed Departures: 02N Colombo with Bentota Excursion",
        days: 3,
        nights: 2,
        amount: 25000,
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Colombo, the vibrant capital of Sri Lanka, offers a mix of history, culture, commerce, and entertainment. Explore historic and religious sites, indulge in shopping at renowned malls like Majestic City, ODEL, and House of Fashion, and experience the city's lively nightlife. Additionally, enjoy an exciting excursion to Bentota, known for its serene beaches, water sports, and turtle conservation efforts.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "2N Colombo with Bentota Excursion",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Arrival assistance at Colombo Airport by our representative",
            "Accommodation in mentioned hotels or similar (Check-in 14:00 / Check-out 12:00 noon)",
            "Meals on a Half-Board basis (Breakfast & Dinner)",
            "Two 500ml water bottles per person per day during the tour",
            "Sightseeing and city tour (excluding entrance fees) as per itinerary",
            "Private air-conditioned vehicle with an English-speaking chauffeur guide",
            "Fuel and local insurance for the vehicle",
            "All applicable Sri Lankan taxes"
        ],
        exclusions: [
            "Entrance fees to sites",
            "Visa fees & airfare",
            "Video and camera permits at sites",
            "Meals outside the stated meal plan",
            "Additional use of the vehicle beyond the specified itinerary",
            "Personal expenses",
            "Any other services not mentioned above",
            "Early check-in & late check-out at hotels"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Colombo Exploration",
                description: "Arrival assistance at Colombo Airport. Colombo city tour and shopping. Dinner and overnight stay in Colombo."
            },
            {
                day: 2,
                title: "Colombo – Bentota - Colombo",
                description: "Breakfast at the hotel. Full-day excursion to Bentota: Madhu River Boat Safari, visit to Turtle Hatchery, water sports activities in Bentota. Dinner and overnight stay in Colombo."
            },
            {
                day: 3,
                title: "Departure",
                description: "Breakfast at the hotel. Transfer to Colombo Airport for departure."
            }
        ],
        images: [
            "/SriLankaImages/colombo/1.webp",
            "/SriLankaImages/colombo/2.webp"
        ],
        tourSummary: [
            "Explore Colombo's vibrant culture and nightlife",
            "Enjoy a full-day excursion to Bentota with water sports and turtle conservation",
            "Indulge in shopping at Colombo's renowned malls"
        ]
    },
    kandyBentotaColomboTour: {
        id: "kandy-bentota-colombo-6d5n",
        name: "Fixed Departure Package: Kandy / Bentota / Colombo Tour",
        days: 6,
        nights: 5,
        amount: 57000, // Adjust the amount as needed
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Explore the serene hills of Kandy, the golden beaches of Bentota, and the vibrant charm of Colombo in this perfect honeymoon blend of natural beauty and romance.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "6D5N Kandy, Bentota & Colombo Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Arrival assistance at Colombo Airport by our representative",
            "Accommodation in the hotels mentioned or similar (Check-in at 14:00 / Check-out at 12:00 noon)",
            "Meals on a Breakfast and Dinner basis at hotels",
            "Two 500ml water bottles per person per day while on tour",
            "Sightseeing and city tour (excluding entrance fees) as per the itinerary",
            "All transfers by air-conditioned private vehicle with an English-speaking chauffeur guide",
            "Fuel and local insurance for the vehicle",
            "All applicable taxes in Sri Lanka"
        ],
        exclusions: [
            "Entrance fees to the sites",
            "Visa fees & airfare",
            "Video and camera permits at sights",
            "Meals outside of the stated meal plan",
            "Use of the vehicle other than as specified in the itinerary",
            "Expenses of a personal nature",
            "Any other services not specified above",
            "Early check-in & late check-out at the hotels (Check-in and check-out time is from 12:00 noon to 12:00 noon)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival / Kandy",
                description: "Arrival at Colombo Airport. Transfer to Kandy. En Route: Pinnawala Elephant Orphanage. Cultural Show & Gem Museum. Dinner & Overnight stay at Kandy."
            },
            {
                day: 2,
                title: "Kandy",
                description: "Breakfast at the hotel. Visit Peradeniya Botanical Garden. Explore Temple of the Tooth. Stroll around Kandy Lake. Wood Craving & Batik Shopping. Dinner & Overnight stay at Kandy."
            },
            {
                day: 3,
                title: "Kandy / Bentota",
                description: "Breakfast at the hotel. Transfer to Bentota. En Route: Visit Spice & Herbal Garden. Evening Leisure at the hotel. Dinner & Overnight stay at Bentota."
            },
            {
                day: 4,
                title: "Bentota",
                description: "Breakfast at the hotel. Madhu River Boat Safari. Visit Turtle Hatchery. Water Sports at Bentota. Dinner & Overnight stay at Bentota."
            },
            {
                day: 5,
                title: "Bentota / Colombo",
                description: "Breakfast at the hotel. Transfer to Colombo. Colombo City Tour & Shopping. Colombo Night Life. Dinner & Overnight stay at Colombo."
            },
            {
                day: 6,
                title: "Colombo / Airport",
                description: "Breakfast at the hotel. Transfer to Colombo Airport."
            }
        ],
        images: [
            "/SriLankaImages/kandy/1.webp",
            "/SriLankaImages/bentota/1.webp",
            "/SriLankaImages/colombo/1.webp"
        ],
        tourSummary: [
            "Serene hills and cultural sites in Kandy",
            "Golden beaches and water activities in Bentota",
            "Vibrant city life and shopping in Colombo"
        ]
    },
    kandyBentotaTour: {
    id: "kandy-bentota-4d3n",
    name: "Explore the Best of Sri Lanka: Kandy & Bentota",
    days: 4,
    nights: 3,
    amount: 40000, // Adjust the amount as needed
    dateStart: "01 January",
    dateEnd: "31 December",
    description: "Experience the cultural richness of Kandy and the tranquil beaches of Bentota in this 4-day tour. From sacred temples and lush hills to golden shores and river safaris, this journey showcases the diverse beauty of Sri Lanka.",
    groupDetails: {
        pax: "Fixed Departure",
        rooms: "Single/Double Sharing Basis",
        arrivalDate: "Fixed",
        duration: "4D3N Kandy & Bentota Tour",
        costBasis: "Cost Based On Double Sharing"
    },
    inclusions: [
        "Arrival assistance at Colombo Airport",
        "Accommodation at mentioned hotels or similar (Check-in: 14:00 / Check-out: 12:00)",
        "Meals: Breakfast & Dinner at hotels",
        "Two 500ml water bottles per person per day during the tour",
        "Sightseeing & city tours (excluding entrance fees) as per itinerary",
        "Private air-conditioned vehicle with an English-speaking chauffeur guide",
        "Fuel and local insurance for the vehicle",
        "All applicable Sri Lankan taxes"
    ],
    exclusions: [
        "Entrance fees to sites",
        "Visa fees & airfare",
        "Video and camera permits at sights",
        "Meals outside the stated meal plan",
        "Use of vehicle beyond the specified itinerary",
        "Personal expenses",
        "Any other services not specified above",
        "Early check-in & late check-out at hotels (Standard: 12:00 - 12:00 Noon)"
    ],
    itinerary: [
        {
            day: 1,
            title: "Arrival & Kandy",
            description: "Arrival at Colombo Airport. En route visit to Pinnawala Elephant Orphanage. Transfer to Kandy. Enjoy a Cultural Show & visit the Gem Museum. Dinner & overnight stay in Kandy."
        },
        {
            day: 2,
            title: "Kandy to Bentota",
            description: "Breakfast at the hotel. Visit the sacred Temple of the Tooth. Explore Kandy Lake & City Tour. Transfer to Bentota. En route visit to Spice & Herbal Garden. Dinner & overnight stay in Bentota."
        },
        {
            day: 3,
            title: "Bentota Adventures",
            description: "Breakfast at the hotel. Visit the Turtle Hatchery. Enjoy a Madhu River Boat Safari. Engage in watersports at Bentota. Dinner & overnight stay in Bentota."
        },
        {
            day: 4,
            title: "Departure",
            description: "Breakfast at the hotel. Transfer to Colombo Airport for departure."
        }
    ],
    images: [
        "/SriLankaImages/kandy/1.webp",
        "/SriLankaImages/bentota/1.webp"
    ],
    tourSummary: [
        "Cultural richness of Kandy with visits to sacred temples",
        "Tranquil beaches and water activities in Bentota",
        "Diverse beauty of Sri Lanka from hills to shores"
    ]
    },
    bentotaColomboTour: {
        id: "bentota-colombo-4d3n",
        name: "Fixed Departures: Bentota & Colombo Tour",
        days: 4,
        nights: 3,
        amount: 45000, // Adjust the amount as needed
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Discover the Coastal Charm of Bentota. Bentota, a coastal gem near Colombo, Sri Lanka, is renowned for its breathtaking natural beauty. This tranquil destination is where golden sandy beaches meet the azure waters of the Indian Ocean, creating a serene paradise for relaxation. The Bentota River, fringed by lush mangroves and teeming with wildlife, offers scenic boat rides and opportunities to explore vibrant ecosystems. Surrounded by swaying coconut palms and tranquil lagoons, Bentota captivates visitors with its unspoiled charm, making it a perfect escape for nature lovers and peace seekers alike.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "4D3N Bentota & Colombo Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Arrival assistance at Colombo Airport by our representative",
            "Accommodation in the mentioned hotels or similar (Check-in: 14:00 / Check-out: 12:00 noon)",
            "Meals on a breakfast and dinner basis at hotels",
            "Two 500ml water bottles per person per day while on tour",
            "Sightseeing and city tour (excluding entrance fees) as per itinerary",
            "All transfers by air-conditioned private vehicle with an English-speaking chauffeur guide",
            "Fuel and local insurance for the vehicle",
            "All applicable taxes in Sri Lanka"
        ],
        exclusions: [
            "Entrance fees to the sites",
            "Visa fees & airfare",
            "Video and camera permits at sights",
            "Meals outside of the stated meal plan",
            "Use of vehicle other than the specified itinerary",
            "Expenses of a personal nature",
            "Any other services not specified above",
            "Early check-in & late check-out at hotels (Check-in & Check-out time: 12:00 noon)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival / Bentota",
                description: "Arrival at Colombo Airport. Transfer to Bentota. Evening leisure at the hotel. Dinner and overnight stay at Bentota."
            },
            {
                day: 2,
                title: "Bentota",
                description: "Breakfast at the hotel. Madhu River Boat Safari. Visit Turtle Hatchery. Enjoy water sports at Bentota. Dinner and overnight stay at Bentota."
            },
            {
                day: 3,
                title: "Bentota / Colombo",
                description: "Breakfast at the hotel. Transfer to Colombo. Colombo City Tour & Shopping. Dinner and overnight stay at Colombo."
            },
            {
                day: 4,
                title: "Colombo / Airport",
                description: "Breakfast at the hotel. Transfer to the Airport."
            }
        ],
        images: [
            "/SriLankaImages/bentota/1.webp",
            "/SriLankaImages/colombo/1.webp"
        ],
        tourSummary: [
            "Discover the coastal charm of Bentota with its golden beaches and serene lagoons",
            "Explore Colombo's vibrant city life and shopping experiences",
            "Enjoy a mix of relaxation and adventure with water sports and cultural tours"
        ]
    },
    kandyColomboTour: {
        id: "kandy-colombo-3n4d",
        name: "Fixed Departures: 02N Kandy / 01N Colombo",
        days: 4,
        nights: 3,
        amount: 42000, // Adjust the amount as needed
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Embark on a captivating journey through Sri Lanka's iconic cities, Kandy and Colombo. This well-curated itinerary offers a perfect blend of cultural heritage, scenic beauty, and urban exploration. From the sacred temples and lush botanical gardens of Kandy to the vibrant streets and coastal charm of Colombo, experience the best of Sri Lanka in just four days.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "3N4D Kandy & Colombo Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Daily breakfast and dinner",
            "Airport transfers & transportation in an air-conditioned vehicle",
            "Entrance fees to all mentioned attractions",
            "English-speaking guide throughout the tour",
            "Colombo city tour & shopping experience",
            "Cultural show in Kandy"
        ],
        exclusions: [
            "Airfare and visa charges",
            "Lunch & beverages",
            "Personal expenses (laundry, telephone, etc.)",
            "Optional tours and activities not mentioned in the itinerary",
            "Travel insurance"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival / Kandy",
                description: "Arrival at Colombo Airport. En Route: Visit Pinnawala Elephant Orphanage. Transfer to Kandy. Dinner & Overnight stay at Kandy."
            },
            {
                day: 2,
                title: "Kandy",
                description: "Breakfast at the hotel. Visit Royal Botanical Garden. Explore the sacred Temple of the Tooth. Scenic visit to Kandy Lake. Tour of the Gem Museum. Enjoy a Cultural Show. Dinner & Overnight stay at Kandy."
            },
            {
                day: 3,
                title: "Kandy / Colombo",
                description: "Breakfast at the hotel. Transfer to Colombo. En Route: Visit Spice & Herbal Garden. Explore Colombo City & Shopping Tour. Dinner & Overnight stay at Colombo."
            },
            {
                day: 4,
                title: "Colombo / Airport",
                description: "Breakfast at the hotel. Transfer to the Airport."
            }
        ],
        images: [
            "/SriLankaImages/kandy/1.webp",
            "/SriLankaImages/colombo/1.webp"
        ],
        tourSummary: [
            "Cultural heritage and scenic beauty in Kandy",
            "Urban exploration and coastal charm in Colombo",
            "Experience the best of Sri Lanka in just four days"
        ]
    },
    kandyNuwaraEliyaBentotaColomboTour: {
        id: "kandy-nuwara-eliya-bentota-colombo-6d5n",
        name: "Fixed Departures: Kandy, Nuwara Eliya, Bentota & Colombo Tour",
        days: 6,
        nights: 5,
        amount: 60000, // Adjust the amount as needed
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Discover the enchanting beauty of Sri Lanka with our fixed departure tour, covering the cultural city of Kandy, the misty hills of Nuwara Eliya, the serene beaches of Bentota, and the vibrant capital, Colombo.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "6D5N Kandy, Nuwara Eliya, Bentota & Colombo Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Daily breakfast & dinner",
            "Airport transfers & intercity transportation in an air-conditioned vehicle",
            "Entrance fees for Pinnawala Elephant Orphanage, Cultural Show, Temple of the Tooth, Ramboda Falls, Tea Factory, Turtle Hatchery & Madhu River Safari",
            "Colombo city tour & shopping experience",
            "English-speaking guide services"
        ],
        exclusions: [
            "Airfare & visa charges",
            "Lunches & personal expenses",
            "Water sports fees & adventure activities",
            "Optional tours & excursions not mentioned in the itinerary",
            "Travel insurance & medical expenses",
            "Tips & porterage"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival / Kandy",
                description: "Arrival at Colombo Airport. Transfer to Kandy. En Route: Visit Pinnawala Elephant Orphanage. Explore the Cultural Show & Gem Museum. Dinner and overnight stay in Kandy."
            },
            {
                day: 2,
                title: "Kandy / Nuwara Eliya",
                description: "Breakfast at the hotel. Visit the Temple of the Tooth & Kandy Lake. Transfer to Nuwara Eliya. En Route: Visit Ramboda Hanuman Temple, Ramboda Falls & a Tea Factory. Dinner and overnight stay in Nuwara Eliya."
            },
            {
                day: 3,
                title: "Nuwara Eliya / Bentota",
                description: "Breakfast at the hotel. Explore Gregory Lake & Seetha Amman Temple. Transfer to Bentota. En Route: Visit a Spice & Herbal Garden. Dinner and overnight stay in Bentota."
            },
            {
                day: 4,
                title: "Bentota",
                description: "Breakfast at the hotel. Visit the Turtle Hatchery & enjoy a Madhu River Boat Safari. Water sports activities in Bentota. Dinner and overnight stay in Bentota."
            },
            {
                day: 5,
                title: "Bentota / Colombo",
                description: "Breakfast at the hotel. Transfer to Colombo. Colombo city tour & shopping experience. Dinner and overnight stay in Colombo."
            },
            {
                day: 6,
                title: "Colombo / Airport",
                description: "Breakfast at the hotel. Transfer to the airport for departure."
            }
        ],
        images: [
            "/SriLankaImages/kandy/1.webp",
            "/SriLankaImages/nuwara-eliya/1.webp",
            "/SriLankaImages/bentota/1.webp",
            "/SriLankaImages/colombo/1.webp"
        ],
        tourSummary: [
            "Cultural exploration in Kandy with visits to sacred sites",
            "Misty highlands and tea plantations in Nuwara Eliya",
            "Relaxation and adventure on Bentota's beaches",
            "Urban exploration and shopping in Colombo"
        ]
    },
    sriLankaFixedDepartureTour: {
        id: "sri-lanka-fixed-departure-5n6d",
        name: "Sri Lanka Fixed Departure Tour Package",
        days: 6,
        nights: 5,
        amount: 55000, // Adjust the amount as needed
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Embark on a breathtaking journey through Sri Lanka's most picturesque destinations. From the golden beaches of Bentota to the historic charm of Galle and the vibrant city life of Colombo, this tour is designed for travelers seeking relaxation, adventure, and cultural exploration.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "5N6D Sri Lanka Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Arrival assistance at Colombo Airport by our representative",
            "Accommodation in selected hotels or similar (Check-in at 14:00 / Check-out at 12:00)",
            "Meals on a Half Board basis (Breakfast & Dinner)",
            "Two 500ml water bottles per person per day during the tour",
            "Sightseeing and city tours (excluding entrance fees) as per the itinerary",
            "All transfers by an air-conditioned private vehicle with an English-speaking chauffeur guide",
            "Fuel and local insurance for the vehicle",
            "All applicable Sri Lankan taxes"
        ],
        exclusions: [
            "Entrance fees to tourist sites",
            "Visa fees & airfare",
            "Video and camera permits at attractions",
            "Meals not specified in the meal plan",
            "Use of vehicle outside of the specified itinerary",
            "Personal expenses (laundry, telephone calls, etc.)",
            "Any services not mentioned under inclusions",
            "Early check-in & late check-out at hotels (Standard time: 12:00 to 12:00 noon)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Bentota",
                description: "Arrival at Colombo Airport. Transfer to Bentota. Evening at leisure in the hotel. Dinner and overnight stay at Bentota."
            },
            {
                day: 2,
                title: "Bentota",
                description: "Breakfast at the hotel. Madhu River Boat Safari. Visit to Turtle Hatchery. Water sports activities in Bentota. Dinner and overnight stay at Bentota."
            },
            {
                day: 3,
                title: "Bentota – Galle",
                description: "Breakfast at the hotel. Transfer to Galle. En route visit to Unawatuna Beach. Explore Galle Fort & Galle Museum. Dinner and overnight stay at Galle."
            },
            {
                day: 4,
                title: "Galle – Mirissa - Galle",
                description: "Breakfast at the hotel. Excursion to Mirissa. Whale watching experience in Mirissa. Visit Mirissa Beach and Coconut Tree Hill. Explore Parrot Island. Dinner and overnight stay at Galle."
            },
            {
                day: 5,
                title: "Galle – Colombo",
                description: "Breakfast at the hotel. Transfer to Colombo. Colombo city tour & shopping. Experience Colombo's nightlife. Dinner and overnight stay at Colombo."
            },
            {
                day: 6,
                title: "Colombo – Airport",
                description: "Breakfast at the hotel. Transfer to the airport for departure."
            }
        ],
        images: [
            "/SriLankaImages/bentota/1.webp",
            "/SriLankaImages/galle/1.webp",
            "/SriLankaImages/colombo/1.webp"
        ],
        tourSummary: [
            "Golden beaches of Bentota and historic charm of Galle",
            "Vibrant city life and cultural exploration in Colombo",
            "Relaxation, adventure, and cultural exploration in Sri Lanka"
        ]
    },
    dambullaKandyBentotaTour: {
        id: "dambulla-kandy-bentota-6d5n",
        name: "Fixed Departure Tour: Sri Lanka's Dambulla, Kandy, and Bentota",
        days: 6,
        nights: 5,
        amount: 58000, // Adjust the amount as needed
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Embark on a mesmerizing journey through Sri Lanka's natural wonders and rich cultural heritage. Explore the ancient caves, lush hills, golden beaches, and tranquil rivers as you visit Dambulla, Kandy, and Bentota.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "6D5N Dambulla, Kandy & Bentota Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Arrival assistance at Colombo Airport by our representative",
            "Accommodation in the mentioned hotels or similar (Check-in at 14:00 / Check-out at 12:00 noon)",
            "Meals on a Breakfast and Dinner basis at hotels",
            "Two 500ml water bottles per person per day while on tour",
            "Sightseeing and city tours as per the itinerary (excluding entrance fees)",
            "All transfers in an Air-conditioned private vehicle with an English-speaking chauffeur-guide",
            "Fuel and local insurance for the vehicle",
            "All applicable taxes in Sri Lanka"
        ],
        exclusions: [
            "Entrance fees to the sites",
            "Visa fees & airfare",
            "Video and camera permits at sites",
            "Meals outside of the stated meal plan",
            "Use of the vehicle for anything other than the specified itinerary",
            "Personal expenses",
            "Any other services not specified above",
            "Early check-in or late check-out at the hotels (Check-in & Check-out time: 12:00 noon)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival / Dambulla",
                description: "Arrival at Colombo Airport. Transfer to Dambulla. En Route: Pinnawala Elephant Orphanage. Dambulla Cave Temple. Dinner & Overnight Stay at Dambulla."
            },
            {
                day: 2,
                title: "Dambulla",
                description: "Breakfast at the Hotel. Sigiriya Rock Fortress. Traditional Village Tour including Bullock Cart Ride and Catamaran Ride. Dinner & Overnight Stay at Dambulla."
            },
            {
                day: 3,
                title: "Dambulla / Kandy",
                description: "Breakfast at the Hotel. Transfer to Kandy. Temple of the Tooth. Kandy Lake. Cultural Show & Gem Museum Visit. Dinner & Overnight Stay at Kandy."
            },
            {
                day: 4,
                title: "Kandy / Bentota",
                description: "Breakfast at the Hotel. Royal Botanical Garden. Transfer to Bentota. En Route: Spice & Herbal Garden. Dinner & Overnight Stay at Bentota."
            },
            {
                day: 5,
                title: "Bentota",
                description: "Breakfast at the Hotel. Turtle Hatchery. Madu River Boat Safari. Water Sports at Bentota. Dinner & Overnight Stay at Bentota."
            },
            {
                day: 6,
                title: "Bentota / Airport",
                description: "Breakfast at the Hotel. Transfer to Colombo Airport for Departure."
            }
        ],
        images: [
            "/SriLankaImages/dambulla/1.webp",
            "/SriLankaImages/kandy/1.webp",
            "/SriLankaImages/bentota/1.webp"
        ],
        tourSummary: [
            "Explore ancient caves and cultural sites in Dambulla",
            "Experience the cultural richness of Kandy",
            "Relax on the serene beaches of Bentota"
        ]
    },
    dambullaNuwaraEliyaColomboTour: {
        id: "dambulla-nuwara-eliya-colombo-6d5n",
        name: "Fixed Departure: Sri Lanka's Dambulla, Nuwara Eliya, and Colombo Tour",
        days: 6,
        nights: 5,
        amount: 59000, // Adjust the amount as needed
        dateStart: "01 January",
        dateEnd: "31 December",
        description: "Discover the natural splendor of Sri Lanka as you journey through Dambulla, Nuwara Eliya, and Colombo. From ancient caves and lush tea plantations to vibrant coastal life, this tour offers a beautiful combination of cultural heritage and scenic landscapes.",
        groupDetails: {
            pax: "Fixed Departure",
            rooms: "Single/Double Sharing Basis",
            arrivalDate: "Fixed",
            duration: "6D5N Dambulla, Nuwara Eliya & Colombo Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Arrival assistance at Colombo Airport",
            "Accommodation in 3-star hotels (or similar). Check-in at 14:00 / Check-out at 12:00 noon",
            "Meals on a breakfast and dinner basis at hotels",
            "Two 500ml water bottles per person per day during the tour",
            "Sightseeing as per the itinerary (excluding entrance fees)",
            "All transfers by air-conditioned private vehicle with an English-speaking chauffeur guide",
            "Vehicle fuel and local insurance",
            "All applicable taxes in Sri Lanka"
        ],
        exclusions: [
            "Entrance fees to sites",
            "Visa fees and airfare",
            "Video and camera permits at sightseeing locations",
            "Meals outside the stated meal plan",
            "Use of the vehicle beyond the specified itinerary",
            "Personal expenses",
            "Any services not specified above",
            "Early check-in or late check-out at the hotels (check-in/check-out time: 12:00 noon)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival / Dambulla",
                description: "Arrival at Colombo Airport. Transfer to Dambulla with an en-route visit to the Pinnawala Elephant Orphanage. Visit the Dambulla Cave Temple, a UNESCO World Heritage Site. Dinner & overnight stay at Dambulla."
            },
            {
                day: 2,
                title: "Dambulla",
                description: "Breakfast at the hotel. Visit the Sigiriya Rock Fortress, an ancient royal citadel. Explore the traditional village and experience local life. Enjoy an evening safari at Minneriya National Park. Dinner & overnight stay at Dambulla."
            },
            {
                day: 3,
                title: "Dambulla / Nuwara Eliya",
                description: "Breakfast at the hotel. Visit the Dambulla Cave Temple. Transfer to Nuwara Eliya, with en-route stops at Ramboda Hanuman Temple, Ramboda Falls, and a Tea Factory. Dinner and overnight stay at Nuwara Eliya."
            },
            {
                day: 4,
                title: "Nuwara Eliya",
                description: "Breakfast at the hotel. Visit the Hakgala Botanical Garden. Explore Seetha Amman Temple and Gregory Lake. Dinner & overnight stay at Nuwara Eliya."
            },
            {
                day: 5,
                title: "Nuwara Eliya / Colombo",
                description: "Breakfast at the hotel. Transfer to Colombo with an en-route visit to a Spice & Herbal Garden. Colombo City Tour, followed by shopping at local markets. Dinner & overnight stay at Colombo."
            },
            {
                day: 6,
                title: "Colombo / Airport",
                description: "Breakfast at the hotel. Transfer to the airport for your departure."
            }
        ],
        images: [
            "/SriLankaImages/dambulla/1.webp",
            "/SriLankaImages/nuwara-eliya/1.webp",
            "/SriLankaImages/colombo/1.webp"
        ],
        tourSummary: [
            "Explore ancient caves and cultural sites in Dambulla",
            "Experience the lush tea plantations and scenic beauty of Nuwara Eliya",
            "Discover the vibrant coastal life and urban charm of Colombo"
        ]
    },
    
};

// Helper function to get all packages
export const getAllPackages = () => Object.values(sriLankaData); 