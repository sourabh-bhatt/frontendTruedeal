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

export interface FixedDeparture {
    id: string;
    country: string;
    days: number;
    nights: number;
    amount: number;
    dateStart: string;
    dateEnd: string;
    flightFrom: string;
    description: string;
    groupDetails: GroupDetails;
    hotelDetails: HotelDetail[];
    itinerary: ItineraryDay[];
    inclusions: string[];
    exclusions: string[];
    tourSummary: string[];
    images: string[];
}

export const fixedDepartures: FixedDeparture[] = [
    // Your Vietnam departure data here
];

export const fixedDeparturesData = {
    vietnam: {
        id: "TDWF001",
        country: "Vietnam",
        days: 8,
        nights: 7,
        amount: 120500,
        dateStart: "28 May",
        dateEnd: "04 June",
        flightFrom: "Mumbai",
        groupDetails: {
            pax: "Group Departure From Mumbai",
            rooms: "12 Rooms on Double/Twin Sharing",
            arrivalDate: "28th May 2025 Mumbai Departure",
            duration: "7N8D Vietnam",
            costBasis: "Cost Based On Double Sharing"
        },
        description: "Experience the best of Vietnam with our carefully curated 8-day tour package. From Ho Chi Minh City to Halong Bay, discover the rich culture, stunning landscapes, and vibrant cities of Vietnam.",
        hotelDetails: [
            {
                city: "Ho Chi Minh City",
                hotel: "Muong Thanh Saigon Centre",
                roomType: "Deluxe room"
            },
            {
                city: "Danang",
                hotel: "Yarra Ocean Suite Danang",
                roomType: "ROH room"
            },
            {
                city: "Hanoi",
                hotel: "Muong Thanh Hanoi Centre",
                roomType: "Deluxe room"
            },
            {
                city: "Halong Bay",
                hotel: "Amanda Cruise",
                roomType: "ROH cabin"
            }
        ],
        tourSummary: [
            "Day 1: Ho Chi Minh Arrival – Cu Chi Tunnels-Early Check Inn (B, L, D)",
            "Day 2: Ho Chi Minh City – Mekong Delta (B, L, D)",
            "Day 3: Ho Chi Minh City – Fly to Danang – City Tour (B, L, D)",
            "Day 4: Danang – Ba Na Hill – Danang (B, L, D)",
            "Day 5: Cam Thanh Village – Hoi An Ancient Town (B, L, D)",
            "Day 6: Danang – Fly to Hanoi – Half Day City Tour (B, L, D)",
            "Day 7: Hanoi – Halong Bay – Overnight Cruise (B, L, D)",
            "Day 8: Ha Long Bay – Hanoi – Departure (B, Brunch, Lunch)"
        ],
        inclusions: [
            "Travel Insurance",
            "Welcome Drink on arrival",
            "Entrance Fees And Permits",
            "Bottle of drinking water during the tour",
            "Boat Excursions at Ha Long Bay & Mekong Delta",
            "An hour cyclo in Old Quarter Ha Noi",
            "International Air Tickets, Domestic Air Tickets Included",
            "7-Nights stay with daily breakfast as per the itinerary planned",
            "Early Check Inn on Day 1 with Breakfast",
            "All Meals as mentioned at Indian Restaurants",
            "Meals are Included as mentioned. B- Breakfast, L-Lunch and D-Dinner, Br- Brunch",
            "Professional English-speaking tour guide with good experience handling Indian clients",
            "Transfer And Local Sightseeing by our experienced tourist drivers by air-conditioned vehicles on a private basis or as mentioned specifically",
            "Ha Long Bay Cruise with meals as mentioned (International Buffet)",
            "Tips to Drivers and Guides are Included",
            "E Visa Included in Package"
        ],
        exclusions: [
            "Late Check-out not included",
            "Any other meal which is not mentioned in inclusions specifically",
            "Any kind of surcharge, compulsory dinner cost, or room upgrade cost",
            "Any beverages which is not mentioned in inclusions specifically",
            "Expenses of personal nature like, shopping, adventure sports etc. which is not mentioned specifically",
            "Other expense like porter charges, laundry bills, any damage to hotel/resort or their room amenities. Client has to settle directly with the hotel, we have no role in this",
            "Hotels may require a refundable security deposit to cover any potential damages or extra charges during your stay. It's a standard practice to ensure everything goes smoothly, and you'll get the deposit back when you check out",
            "GST Will be charged additional as per govt. of India rules at the moment, it is 5%",
            "TCS is applicable on International booking and not included in the package cost its on an additional basis currently it is 5%"
        ],
        itinerary: [
            {
                day: 1,
                title: "Ho Chi Minh Arrival – Cu Chi Tunnels (B, L, D)",
                description: "Xin Chao! Welcome to Ho Chi Minh, one of Asia's most enchanting cities, full of culture and history. Meet your driver at the airport and transfer to the hotel in the centre. After check-in at hotel and breakfast, we will have a short rest. Leave for Cu Chi Tunnels at around 10 AM, we head to the Cu Chi tunnels, otherwise known as the 'Iron Triangle' or 'Iron Land'. Before entering the tunnels, we will see a short introductory video showing how they were constructed, followed by an exploration of the maze of tunnels, some of which have been widened to allow tourist access. Also on display are various mantraps and the remains of an American tank as well as numerous bomb craters made by 500lb bombs dropped by B52 bombers. Lunch at local restaurant by the river. Return to the city centre in the afternoon. Dinner at Indian restaurant and overnight at hotel."
            },
            {
                day: 2,
                title: "Ho Chi Minh City – Mekong Delta (B, L, D)",
                description: "My Tho is located in the Mekong Delta region of South Vietnam. The boat ride on Tien Giang River is very popular to tourists. There are many short boat trips to various islands. We start our day at the lobby of hotel and head to the peaceful town of My Tho where we visit the Vinh Trang Pagoda. We will have a boat ride, visit local homes and orchards, a coconut candy workshop, a honeybee farm, take a sampan ride on palm-shaded creeks, try a taste of seasonal fruit, honey tea, and enjoy a performance of traditional Southern singing. Lunch will be in local ancient house. Later of the day, we return to Ho Chi Minh City with visit to Vinh Trang Pagoda en-route. Dinner at Indian restaurant and overnight at hotel."
            },
            {
                day: 3,
                title: "Ho Chi Minh City – Fly to Danang – City Tour (B, L, D)",
                description: "Today, we will take a short flight to Danang. On arrival in Danang, we will drive to Son Tra Peninsular, the central zone of ecological, is like mushrooms sprouting sea views over the city. We then visit Linh Ung Pagoda and enjoy the peaceful feeling in the mountains as well as admire the spectacular panoramic view to the ocean from the height from Linh Ung Pagoda and the Marble Mountain – the five elements of the Universe (water, wood, air, fire and earth). The rest of the day will be free. Dinner at Indian restaurant and back to Danang for overnight stay."
            },
            {
                day: 4,
                title: "Danang – Ba Na Hill – Danang (B, L, D)",
                description: "Pick you up at hotel lobby in the morning. Reach Ba Na Hills via Cable Car. Spend your time on the most modern Cable Car in Southeast Asia, then take The Climbing Train to visit the top of the mountain& further explore Le Jardin D'Amour (consists of 9 gardens), Debay Wine Cellar (old wineries) & Ling Ung Pagoda. Continue the 2nd Cable Car to visit the French Village (enjoy Street Music, watch Art's statue), Campanile, Nine Floor Goddess Shrine, Tombstone Temple, Linh Phong Monastery, Linh Chua Linh Tu Temple & Tru Vu Tea Shop. Watch Carnival Performance Show, Square Du Dome ... Challenge the most popular adventure ride - Slide of Tube Car (free ride). Visit the golden bridge - located in the middle of the mountain, the bridge is designed to be soft, the entire bridge covered with a magnificent yellow. From the distance, the bridge is like a silk strip floating in white clouds. What makes the bridge more special is the huge supporting hand. Join in Fantasy Park with Walking in Fairy Forest, discover Dinosaur Park, play 5D wild west, enjoy 4D death race ride, watch 3D mega 360 Degree, ride on Journey into the underground, enter Jurassic Park, challenge Freefall Tower and participate in adventure in Horror House and over 90 free games. 15:00: Return to the Cable Car for leaving Ba Na Hills. Note: Tickets exclude wax museum, wine cellar, indoor climbing and alpine coaster. Dinner at restaurant and overnight at hotel in Danang."
            },
            {
                day: 5,
                title: "Cam Thanh Village – Hoi An Ancient Town (B, L, D)",
                description: "Today, join us on an excursion to Cam Thanh village, being a fisherman at Cam Thanh water coconut village tour you will enjoy experiences from learning traditional fishing techniques and how to row unique Vietnamese bamboo basket boat, fishing and catch the crabs, coconut mussel while exploring the now tranquil coconut-palm flanked waterways of a past war. Discover Hoi An ancient town, which was originally a Cham seaport but has been influenced down centuries by a myriad of traders from various cultures. There are plenty to see in this tranquil and delightful town, some of which are the famous Chinese Assembly Hall & Temples, Old houses & Japanese Covered Pagoda Bridge, Old house of Tan Ki, Sa Huynh Culture Museum. We visit these sights on an exciting walking tour past many low tiled houses scattered along the small streets and assembly halls which reflect the town's multi-cultural past. Dinner at restaurant and overnight at hotel in Danang."
            },
            {
                day: 6,
                title: "Danang – Fly to Hanoi – Half Day City Tour (B, L, D)",
                description: "Today, we will take a short flight to Hanoi. On arrival, we will be welcomed and transferred to the city centre. After that, we visit Ho Chi Minh complex where we will spend time at Ba Dinh Square, Ho Chi Minh's mausoleum (outside visit only), Followings we visit Tran Quoc Pagoda – the oldest pagoda in Northern Vietnam located by the West Lake. Finish your day with 1-hour cyclo tour of the French inspired 'old quarter and have a short free time for shopping in the Old Quarter. Dinner at Indian restaurant and overnight at hotel."
            },
            {
                day: 7,
                title: "Hanoi – Halong Bay – Overnight Cruise (B, L, D)",
                description: "Today we set off to the 'Jewel in the Crown of Vietnam' – Halong Bay. Arriving before lunch we will board our boat and then set sail, cruising amongst thousands of extraordinary limestone Karst formations. Halong Bay was voted one of 'The New 7 Wonders of Nature' in 2011, and once here you will know why it was included in this group. On arrival in Halong, we will embark on our cruise followed by a short cruise briefing. We will then savor a delectable lunch while we sail among the limestone islands. In the mid-afternoon, we will kayak among the hidden areas of the bay, around the Dark and Light Cave area before going back to cruise and continue cruising in the bay. In the evening, we will cruise back to the main boat for a shower before having dinner and spend the night onboard."
            },
            {
                day: 8,
                title: "Ha Long Bay – Hanoi – Departure (B, Brunch, Lunch)",
                description: "Wake up early in the morning and start your day with Tai Chi exercises or a photo hunt before having breakfast. After that, we will explore the amazing Sung Sot Cave – the nicest cave in Halong Bay. After that, we will return to the boat, freshen up and check out of your cabin. Continue your cruise exploring the Bay, passing Ba Hang fishing village, Dog Islet, and more. While returning to the harbour, watch the cooking demonstration before enjoying a traditional Vietnamese lunch. We will disembark at round noon and find your bus is waiting and take you for Indian Lunch and then will take a leave to Noi Bai airport in good time for departure flight. Tour ends."
            }
        ],
        images: [
            "/UGCImages/images5/VIETNAM/HORIZONTAL/3.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/4.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/5.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/6.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/7.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/1.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/2.webp",
            "/UGCImages/images5/VIETNAM/VERTICAL/2.webp",
            "/UGCImages/images5/VIETNAM/VERTICAL/3.webp",
            "/UGCImages/images5/VIETNAM/VERTICAL/4.webp",
            "/UGCImages/images5/VIETNAM/VERTICAL/5.webp",
            "/UGCImages/images5/VIETNAM/VERTICAL/6.webp",
        ]
    },
    europe: {
        id: "TDWF002",
        country: "Europe",
        days: 12,
        nights: 11,
        amount: 395000,
        dateStart: "16 May",
        dateEnd: "28 May",
        flightFrom: "Delhi",
        groupDetails: {
            pax: "Group Departure From Raipur",
            rooms: "12 Rooms on Double/Twin Sharing",
            arrivalDate: "16th May 2025 Raipur Departure",
            duration: "11N12D Europe",
            costBasis: "Cost Based On Double Sharing"
        },
        description: "Experience the best of Europe with our comprehensive 12-day tour package covering France, Switzerland, and Austria. Visit iconic destinations including Paris, Lausanne, Interlaken, Zurich, Innsbruck, Salzburg, and Vienna.",
        hotelDetails: [
            {
                city: "Paris",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Lausanne",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Interlaken",
                hotel: "3 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Zurich",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Innsbruck",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Vienna",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Raipur – Delhi – Paris",
            "Day 2: Paris City Tour",
            "Day 3: Full Day Disneyland Paris",
            "Day 4: Paris to Lausanne via Geneva",
            "Day 5: Glacier 3000 and Gstaad Excursion",
            "Day 6: Lausanne to Vevey by CGN Cruise, Transfer to Interlaken",
            "Day 7: Jungfrau/Mt. Titlis Excursion",
            "Day 8: Rhine Falls, Zurich City Tour, Lindt Chocolate Factory",
            "Day 9: Transfer to Innsbruck via Vaduz, Swarovski Crystal Garden",
            "Day 10: Salzburg Day Trip, Transfer to Vienna",
            "Day 11: Vienna City Tour",
            "Day 12: Shopping at Outlet Mall, Departure"
        ],
        inclusions: [
            "Return Economy Class Airfare with Airport Taxes Ex-Raipur",
            "Schengen Visa Fees",
            "11 Nights Accommodation in 3/4 Star Hotels",
            "Daily Continental Breakfast",
            "Indian Lunches & Dinners as per itinerary",
            "All Sightseeing and transfers by deluxe Coach",
            "Eiffel Tower Level 2 visit",
            "Seine River Cruise",
            "Disneyland Entry",
            "Visit to Gstaad",
            "Golden Pass Train Ticket",
            "Glacier 3000 with Cable Car",
            "Jungfrau or Mt. Titlis excursion",
            "Swarovski Crystal Garden visit",
            "Salt Mine Visit",
            "Lausanne to Vevey Cruise",
            "Rhine falls and Zurich City Tour",
            "Lindt Chocolate Museum visit",
            "Overseas Travel Insurance (up to age 60)",
            "Services of tour manager",
            "Tips to Coach Driver (Euro 30 per person)"
        ],
        exclusions: [
            "Any increase in Air Fare or Forex (calculated @ 90/- Per euro)",
            "Any Increase in Airport Taxes & Visa Fees",
            "Any expenses of personal nature",
            "Portages at hotels, Airport and Train Stations",
            "GST (currently 5%)",
            "TCS on foreign tour package (currently 5%)",
            "Travel Insurance for passengers above 60 years",
            "Any services not specifically mentioned in inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Raipur – Delhi – Paris",
                description: "Departure from Raipur in the morning and arrival in Paris via Delhi. Arrival Paris at 1940 Hrs. Complete immigration formalities and proceed for dinner. Transfer to hotel for check-in."
            },
            {
                day: 2,
                title: "Paris City Tour",
                description: "Visit the spectacular Eiffel Tower, enjoy Seine river cruise and city sightseeing including Notre Dame, Opera Garnier, Arc de Triomphe, Champs Elysees, Alexander Bridge, and Concords Square."
            },
            {
                day: 3,
                title: "Full Day Disneyland Paris",
                description: "Enjoy a full day at Disneyland Paris with access to all parks and attractions."
            },
            {
                day: 4,
                title: "Paris to Lausanne via Geneva",
                description: "Travel from Paris to Lausanne via Geneva. Enjoy the scenic route and visit the city of Lausanne."
            },
            {
                day: 5,
                title: "Glacier 3000 and Gstaad Excursion",
                description: "Visit the breathtaking Glacier 3000 and enjoy a day trip to Gstaad."
            },
            {
                day: 6,
                title: "Lausanne to Vevey by CGN Cruise, Transfer to Interlaken",
                description: "Travel from Lausanne to Vevey by CGN Cruise and transfer to Interlaken."
            },
            {
                day: 7,
                title: "Jungfrau/Mt. Titlis Excursion",
                description: "Enjoy a day trip to Jungfrau or Mt. Titlis."
            },
            {
                day: 8,
                title: "Rhine Falls, Zurich City Tour, Lindt Chocolate Factory",
                description: "Visit the Rhine Falls, enjoy a city tour of Zurich, and visit the Lindt Chocolate Factory."
            },
            {
                day: 9,
                title: "Transfer to Innsbruck via Vaduz, Swarovski Crystal Garden",
                description: "Travel from Zurich to Innsbruck via Vaduz and visit the Swarovski Crystal Garden."
            },
            {
                day: 10,
                title: "Salzburg Day Trip, Transfer to Vienna",
                description: "Visit Salzburg and transfer to Vienna."
            },
            {
                day: 11,
                title: "Vienna City Tour",
                description: "Enjoy a city tour of Vienna and visit iconic landmarks."
            },
            {
                day: 12,
                title: "Vienna - Delhi",
                description: "After breakfast, check out and visit Parndorf Fashion Outlet for shopping. After lunch, transfer to Vienna airport for departure at 2030 HRS."
            }
        ],
        images: [
            "/UGCImages/Images4/germany/horizontal/3.webp",
            "/UGCImages/Images4/germany/horizontal/4.webp",
            "/UGCImages/Images4/germany/horizontal/5.webp",
            "/UGCImages/Images4/germany/horizontal/6.webp",
            "/UGCImages/Images4/germany/horizontal/1.webp",
            "/UGCImages/Images4/germany/horizontal/2.webp",

        ]
    },
    vietnam2: {
        id: "TDWF003",
        country: "Vietnam",
        days: 8,
        nights: 7,
        amount: 95000,
        dateStart: "Multiple Dates",
        dateEnd: "May 2025",
        flightFrom: "Multiple Cities",
        description: "Experience the best of Vietnam in 8 days covering Hanoi, Danang, and Ho Chi Minh. Explore natural beauty including Ha Long Bay, cultural treasures like ancient temples, and historic sites across Vietnam's most vibrant cities.",
        groupDetails: {
            pax: "Group Departure",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Available Dates: Jan 23 | Feb 9,16,23 | Mar 2,7,14,21 | Apr 4,11,18,25 | May 2,9,16,23,30",
            duration: "7N8D Vietnam",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Hanoi",
                hotel: "Muong Thanh/Beryl Charm/Anise Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Danang",
                hotel: "Cosmos/Grand Gold/Grand Sunrise Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Ho Chi Minh",
                hotel: "First Hotel/Harmony Hotel/Palace Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Hanoi Arrival – City Tour (L, D)",
            "Day 2: Hanoi – Nimb Binh – Hoa Lu – Tam Coc (B, L, D)",
            "Day 3: Hanoi – Halong Bay Day Cruise (B, L, D)",
            "Day 4: Hanoi – Danang – Evening Tour (B, L, D)",
            "Day 5: Danang – Bana Hills & Golden Bridge (B, L, D)",
            "Day 6: Danang – Ho Chi Minh – City Tour (B, L, D)",
            "Day 7: Ho Chi Minh – Chu Chi Tunnel & Mekong Delta (B, L, D)",
            "Day 8: Ho Chi Minh – Departure (B)"
        ],
        inclusions: [
            "Vietnam Visa Fees",
            "Return Economy Class Airlines",
            "Baggage Allowance as per airline policy",
            "Tour Manager/Guide Services throughout",
            "A/C coach transfers as per itinerary",
            "All entrance fees",
            "Accommodation in comfortable hotels (twin sharing)",
            "All Meals – Breakfast, Lunch, Dinner as per itinerary",
            "Internal airfare",
            "GST & TCS"
        ],
        exclusions: [
            "Travel Insurance",
            "Mandatory tips (USD 3 per person per day)",
            "Any increase in Airfare, Visa fees, Taxes",
            "Hotel/Airline upgrades",
            "Air ticket deviation charges",
            "Exchange rate fluctuations",
            "Pre/post tour accommodation",
            "Insurance for 60+ years",
            "Personal expenses (laundry, telephone, shopping)",
            "Optional tours and activities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Hanoi Arrival – City Tour",
                description: "Welcome to Vietnam! Visit Ho Chi Minh complex, Temple of Literature, Hoan Kiem lake, and Ngoc Son Temple. Evening at leisure."
            },
            {
                day: 2,
                title: "Hanoi – Nimb Binh – Hoa Lu – Tam Coc",
                description: "Explore Ninh Binh province, visit Hoa Lu ancient capital, and enjoy bamboo boat ride through Tam Coc's three caves."
            },
            {
                day: 3,
                title: "Hanoi – Halong Bay Day Cruise",
                description: "Full day cruise in Halong Bay visiting Sung Sot cave, floating village, and Ti Top peak. Optional overnight cruise available."
            },
            {
                day: 4,
                title: "Hanoi – Danang – Evening Tour",
                description: "Fly to Danang. Evening tour of Son Tra Peninsula, Linh Ung Pagoda, and city bridges."
            },
            {
                day: 5,
                title: "Danang – Bana Hills & Golden Bridge",
                description: "Visit Sun World Ba Na Hills, Golden Bridge, French Village, and Marble Mountains. Optional Hoi An tour available."
            },
            {
                day: 6,
                title: "Danang – Ho Chi Minh – City Tour",
                description: "Fly to Ho Chi Minh. Visit War Crime Museum, Reunification Palace, Notre Dame Cathedral, and other landmarks."
            },
            {
                day: 7,
                title: "Ho Chi Minh – Chu Chi Tunnel & Mekong Delta",
                description: "Explore Cu Chi Tunnels and Mekong Delta including My Tho city and local villages."
            },
            {
                day: 8,
                title: "Ho Chi Minh – Departure",
                description: "Breakfast at hotel followed by departure transfer."
            }
        ],
        images: [
            "/UGCImages/images5/VIETNAM/HORIZONTAL/6.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/1.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/2.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/3.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/4.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/5.webp",

        ]
    }
}; 