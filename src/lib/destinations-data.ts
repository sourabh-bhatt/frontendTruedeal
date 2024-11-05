export interface Destination {
    name: string;
    images: string[];
    price: number;
    duration: { nights: number; days: number };
    itinerary: { day: number; activities: string[] }[];
    sightseeing: string[];
}

export const destinationsData: Record<string, Destination> = {
    thailand: {
        name: "Thailand",
        images: [
            "/Assets/DestinationsImage/1.jpg",
            "/Assets/DestinationsImage/2.jpg",
            "/Assets/DestinationsImage/3.jpg",
            "/Assets/DestinationsImage/4.jpg",
        ],
        price: 8000,
        duration: { nights: 5, days: 6 },
        itinerary: [
            { day: 1, activities: ["Arrive in Bangkok", "Visit Grand Palace", "Evening street food tour"] },
            { day: 2, activities: ["Floating Market tour", "Temple of Dawn visit", "Thai cooking class"] },
            { day: 3, activities: ["Fly to Phuket", "Beach relaxation", "Sunset at Promthep Cape"] },
            { day: 4, activities: ["Phi Phi Islands tour", "Snorkeling", "Beach BBQ dinner"] },
            { day: 5, activities: ["Phuket Old Town tour", "Big Buddha visit", "Farewell dinner"] },
            { day: 6, activities: ["Free morning", "Departure"] },
        ],
        sightseeing: ["Grand Palace", "Wat Arun", "Phi Phi Islands", "Big Buddha", "Phuket Old Town"],
    },
    indonesia: {
        name: "Indonesia",
        images: [
            "/Assets/DestinationsImage/indonesia1.jpg",
            "/Assets/DestinationsImage/indonesia2.jpg",
            "/Assets/DestinationsImage/indonesia3.jpg",
            "/Assets/DestinationsImage/indonesia4.jpg",
        ],
        price: 9000,
        duration: { nights: 7, days: 8 },
        itinerary: [
            { day: 1, activities: ["Arrive in Jakarta", "National Monument visit", "Welcome dinner"] },
            { day: 2, activities: ["Taman Mini Indonesia Indah", "Old Town tour", "Sunda Kelapa Harbor"] },
            { day: 3, activities: ["Fly to Yogyakarta", "Prambanan Temple visit", "Traditional dance show"] },
            { day: 4, activities: ["Borobudur Temple sunrise", "Merapi Volcano tour", "Local market visit"] },
            { day: 5, activities: ["Fly to Bali", "Ubud Monkey Forest", "Rice terrace walk"] },
            { day: 6, activities: ["Bali temple tour", "Water palace visit", "Balinese cooking class"] },
            { day: 7, activities: ["Nusa Penida island tour", "Snorkeling", "Farewell dinner"] },
            { day: 8, activities: ["Free morning", "Departure"] },
        ],
        sightseeing: ["Borobudur Temple", "Prambanan Temple", "Ubud Monkey Forest", "Tanah Lot Temple", "Nusa Penida"],
    },
    bali: {
        name: "Bali",
        images: [
            "/Assets/DestinationsImage/bali1.jpg",
            "/Assets/DestinationsImage/bali2.jpg",
            "/Assets/DestinationsImage/bali3.jpg",
            "/Assets/DestinationsImage/bali4.jpg",
        ],
        price: 7500,
        duration: { nights: 6, days: 7 },
        itinerary: [
            { day: 1, activities: ["Arrive in Denpasar", "Transfer to Ubud", "Welcome dinner"] },
            { day: 2, activities: ["Tegalalang Rice Terrace", "Tirta Empul Temple", "Ubud Market"] },
            { day: 3, activities: ["Monkey Forest", "Yoga class", "Ubud Palace"] },
            { day: 4, activities: ["Transfer to Seminyak", "Tanah Lot Temple sunset", "Beach club experience"] },
            { day: 5, activities: ["Uluwatu Temple", "Kecak Fire Dance", "Jimbaran Bay seafood dinner"] },
            { day: 6, activities: ["Nusa Penida day trip", "Kelingking Beach", "Angel's Billabong"] },
            { day: 7, activities: ["Free morning", "Departure"] },
        ],
        sightseeing: ["Tegalalang Rice Terrace", "Tanah Lot Temple", "Uluwatu Temple", "Nusa Penida", "Ubud Monkey Forest"],
    },
    switzerland: {
        name: "Switzerland",
        images: [
            "/Assets/DestinationsImage/switzerland1.jpg",
            "/Assets/DestinationsImage/switzerland2.jpg",
            "/Assets/DestinationsImage/switzerland3.jpg",
            "/Assets/DestinationsImage/switzerland4.jpg",
        ],
        price: 12000,
        duration: { nights: 7, days: 8 },
        itinerary: [
            { day: 1, activities: ["Arrive in Zurich", "Old Town walking tour", "Lake Zurich cruise"] },
            { day: 2, activities: ["Train to Lucerne", "Chapel Bridge", "Swiss Transport Museum"] },
            { day: 3, activities: ["Mount Pilatus golden round trip", "Cheese fondue dinner"] },
            { day: 4, activities: ["Train to Interlaken", "Harder Kulm funicular", "Swiss folklore show"] },
            { day: 5, activities: ["Jungfraujoch excursion", "Ice Palace", "Aletsch Glacier"] },
            { day: 6, activities: ["Train to Zermatt", "Gornergrat railway", "Matterhorn Museum"] },
            { day: 7, activities: ["Glacier Paradise", "Hiking", "Farewell dinner"] },
            { day: 8, activities: ["Free morning", "Departure from Geneva"] },
        ],
        sightseeing: ["Jungfraujoch", "Matterhorn", "Chapel Bridge", "Lake Zurich", "Aletsch Glacier"],
    },
    vietnam: {
        name: "Vietnam",
        images: [
            "/Assets/DestinationsImage/vietnam1.jpg",
            "/Assets/DestinationsImage/vietnam2.jpg",
            "/Assets/DestinationsImage/vietnam3.jpg",
            "/Assets/DestinationsImage/vietnam4.jpg",
        ],
        price: 7000,
        duration: { nights: 8, days: 9 },
        itinerary: [
            { day: 1, activities: ["Arrive in Hanoi", "Old Quarter walking tour", "Water puppet show"] },
            { day: 2, activities: ["Ho Chi Minh Mausoleum", "Temple of Literature", "Hoan Kiem Lake"] },
            { day: 3, activities: ["Halong Bay cruise", "Cave exploration", "Sunset party"] },
            { day: 4, activities: ["Tai Chi session", "Return to Hanoi", "Fly to Hoi An"] },
            { day: 5, activities: ["Hoi An Ancient Town", "Lantern making workshop", "Thu Bon River cruise"] },
            { day: 6, activities: ["My Son Sanctuary", "Cooking class", "Hoi An night market"] },
            { day: 7, activities: ["Fly to Ho Chi Minh City", "Cu Chi Tunnels", "War Remnants Museum"] },
            { day: 8, activities: ["Mekong Delta day trip", "Floating market", "Farewell dinner"] },
            { day: 9, activities: ["Free morning", "Departure"] },
        ],
        sightseeing: ["Halong Bay", "Hoi An Ancient Town", "Cu Chi Tunnels", "Mekong Delta", "Hanoi Old Quarter"],
    },
    croatia: {
        name: "Croatia",
        images: [
            "/Assets/DestinationsImage/croatia1.jpg",
            "/Assets/DestinationsImage/croatia2.jpg",
            "/Assets/DestinationsImage/croatia3.jpg",
            "/Assets/DestinationsImage/croatia4.jpg",
        ],
        price: 10000,
        duration: { nights: 7, days: 8 },
        itinerary: [
            { day: 1, activities: ["Arrive in Zagreb", "Upper Town tour", "Museum of Broken Relationships"] },
            { day: 2, activities: ["Plitvice Lakes National Park", "Waterfalls hike", "Transfer to Zadar"] },
            { day: 3, activities: ["Zadar city tour", "Sea Organ", "Sunset at Greeting to the Sun"] },
            { day: 4, activities: ["Drive to Split", "Diocletian's Palace", "Riva promenade"] },
            { day: 5, activities: ["Krka National Park", "Wine tasting in Šibenik", "Return to Split"] },
            { day: 6, activities: ["Ferry to Hvar", "Hvar Town exploration", "Pakleni Islands boat tour"] },
            { day: 7, activities: ["Ferry to Dubrovnik", "City walls walk", "Cable car to Mount Srđ"] },
            { day: 8, activities: ["Free morning", "Departure"] },
        ],
        sightseeing: ["Plitvice Lakes", "Diocletian's Palace", "Dubrovnik Old Town", "Hvar Island", "Zadar Sea Organ"],
    },
};