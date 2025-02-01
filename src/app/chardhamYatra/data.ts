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

export interface ChardhamPackage extends BaseDestination {
    flightFrom?: string;
}

export const chardhamData: Record<string, ChardhamPackage> = {
    chardham: {
        id: "CHARDHAM-5n6d",
        name: "Chardham Yatra by Helicopter",
        days: 6,
        nights: 5,
        amount: 90000,
        dateStart: "01 May",
        dateEnd: "30 June",
        description: "Embark on a once-in-a-lifetime spiritual journey with our Fixed Departure Chardham Yatra by helicopter. Our meticulously planned itinerary ensures a seamless, comfortable, and spiritually enriching experience, covering all four sacred shrines—Yamunotri, Gangotri, Kedarnath, and Badrinath.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates between May-June",
            duration: "5N6D Chardham Yatra",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Helicopter travel from Dehradun to all four shrines and back",
            "One-night accommodation in Dehradun with dinner & breakfast",
            "Accommodation for 5 nights at premium hotels near each dham",
            "All meals included at the shrines",
            "Local sightseeing guided by experts",
            "VIP darshan arrangements at all temples",
            "Airport & hotel transfers in Dehradun",
            "Palki or Pony service at Yamunotri",
            "Helicopter shuttle service from Sersi to Kedarnath",
            "Local transport at all shrines",
            "Taxes and government levies"
        ],
        exclusions: [
            "Personal expenses, donations, tips",
            "Extra accommodation or meals",
            "Special pujas or rituals",
            "Travel insurance",
            "Overweight baggage charges",
            "Force majeure costs"
        ],
        images: [
            "/UGCImages/chardham/1.webp",
            "/UGCImages/chardham/2.webp",
            "/UGCImages/chardham/3.webp",
            "/UGCImages/chardham/4.webp"
        ],
        tourSummary: [
            "Premium package with VIP darshans",
            "Skip long treks with helicopter travel",
            "Top-tier accommodations and vegetarian meals",
            "Expert guided sightseeing",
            "Complete logistics management"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dehradun",
                description: "Check-in at hotel, evening briefing at 19:00 hrs"
            },
            {
                day: 2,
                title: "Yamunotri",
                description: "Helicopter transfer to Yamunotri, VIP darshan, overnight stay"
            },
            {
                day: 3,
                title: "Gangotri",
                description: "Morning helicopter transfer to Gangotri, temple visit, evening rituals"
            },
            {
                day: 4,
                title: "Kedarnath",
                description: "Helicopter transfer to Sersi, shuttle to Kedarnath, temple darshan"
            },
            {
                day: 5,
                title: "Badrinath",
                description: "Morning flight to Badrinath, temple visit, local sightseeing"
            },
            {
                day: 6,
                title: "Return",
                description: "Return flight to Dehradun, tour concludes"
            }
        ]
    },
    dodhamSameDay: {
        id: "dodham-helicopter-tour-same-day",
        name: "Dodham Helicopter Tour",
        days: 1,
        nights: 0,
        amount: 75000,
        dateStart: "05 May",
        dateEnd: "30 June",
        flightFrom: "Sahastradhara Helidrome",
        description: "Experience a divine journey covering the sacred shrines of Kedarnath Ji and Badrinath Ji in a single day. Operating with excellence since 1998, we offer seamless pilgrimage experiences with comfort and safety at the core.",
        inclusions: [
            "Helicopter flights from Dehradun to both shrines",
            "Kedarnath helicopter shuttle service",
            "VIP Darshan arrangements",
            "Local transport and assistance",
            "Refreshments at Sersi & Lunch at Dehradun",
            "All taxes and government levies"
        ],
        exclusions: [
            "Accommodation in Dehradun",
            "Airport/Hotel transfers",
            "Additional sightseeing",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedarnath Darshan",
                description: `05:30 HRS: Departure from 
                Sahastradhara, 06:00 HRS: Arrival at Sersi, Shuttle service to Kedarnath, VIP Darshan (2 hours)
                05:30 HRS: Departure from Sahastradhara Helidrome
06:00 HRS: Arrival at Sersi Heli-base
Shuttle service to Kedarnath (approx. 7 min flight)
VIP Darshan (approx. 2 hours)
Return to Sersi for refreshments.

                `
            },
            {
                day: 1,
                title: "Badrinath Darshan",
                description: `09:00 HRS: Departure from Sersi, 
                09:30 HRS: Arrival at Badrinath, VIP Darshan (1.5 hours), Return to Dehradun by 12:00 HRS
                
                09:00 HRS: Departure from Sersi
09:30 HRS: Arrival at Badrinath Helipad
VIP Darshan (approx. 1-1.5 hours)
Return to Badrinath helipad for departure

                `
            }
        ]
    },
    dodhamSersi: {
        id: "dodham-ex-sersi-helicopter-tour",
        name: "Dodham Ex-Sersi Helicopter Tour",
        days: 1,
        nights: 0,
        amount: 65000,
        dateStart: "05 May",
        dateEnd: "30 June",
        flightFrom: "SERSI HELIPAD",
        description: "Experience a divine and seamless pilgrimage with our Dodham Same Day Heli-Tour from Sersi, covering Kedarnath and Badrinath temples with VIP darshans and priority access.",
        itinerary: [
            {
                day: 1,
                title: "Experience the divine",
                description: `05:30 HRS: Departure from Sersi, 
                06:00 HRS: Arrival at Sersi, Shuttle service to Kedarnath, VIP Darshan (2 hours)
                
                Experience a divine and seamless pilgrimage with our Dodham Same Day Heli-Tour. This exclusive package, departing from Sersi, covers two of the most sacred Hindu shrines—Kedarnath and Badrinath—providing a comfortable and time-efficient alternative to the traditional road journey. Our expert team ensures a smooth and spiritually fulfilling experience with VIP darshans, priority access, and exceptional hospitality.

                `
            }
        ],
        inclusions: [
            "Helicopter services: Sersi Kedarnath Badrinath Sersi",
            "Kedarnath shuttle service",
            "Breakfast or Lunch at Sersi",
            "VIP Darshans at both temples",
            "All applicable taxes"
        ],
        exclusions: [
            "Personal expenses, tips, donations",
            "Additional services or accommodation",
            "Sudden tax increases"
        ]
    },
    dodham4Days: {
        id: "dodham-4-days-helicopter-tour",
        name: "Dodham 4 Days Helicopter Tour",
        days: 4,
        nights: 3,
        amount: 95000,
        dateStart: "05 May",
        dateEnd: "30 June",
        flightFrom: "Dehradun",
        description: "A comprehensive 4-day helicopter tour covering Kedarnath and Badrinath with comfortable stays and detailed sightseeing.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dehradun",
                description: "Check-in, evening briefing at 19:00 hrs, duffel bag distribution"
            },
            {
                day: 2,
                title: "Kedarnath Ji",
                description: "Departure from Dehradun, arrival at Sersi, shuttle to Kedarnath for darshan"
            },
            {
                day: 3,
                title: "Badrinath Ji",
                description: "Flight to Badrinath, temple darshan, Mana Village visit"
            },
            {
                day: 4,
                title: "Return Journey",
                description: "Return flight to Dehradun, tour conclusion"
            }
        ],
        tourSummary: [
            "FIXED DEPARTURES - DODHAM BY HELICOPTER (3N/4D Heli-Tour)",
            "Warm greetings from Himalayan Heli! Flying with expertise, care & love since 1998, we take immense pride in our dedication to providing the best pilgrimage helicopter services. Over the past two decades, we have facilitated thousands of pilgrims, ensuring a seamless and comfortable travel experience.",
            "The Dodham Tour covers the two most revered shrines of India—Kedarnath ji & Badrinath ji—making it one of our most sought-after packages."
        ],
        inclusions: [
            "Helicopter service from Dehradun to Kedarnath ji & Badrinath ji, & return.",
            "One-night stay in Dehradun on the arrival date (including dinner & breakfast).",
            "1 Night's stay at both Sersi & Badrinath with all meals.",
            "Local sightseeing at both dhams.",
            "Shuttle service from Sersi to Kedarnath ji & back.",
            "VIP Darshans (as per Government guidelines).",
            "Airport & hotel transfers in Dehradun.",
            "Local transport & assistance at both dhams.",
            "Taxes & government levies."
        ],
        exclusions: [
            "Any personal expenses such as laundry, tips, and donations.",
            "Any extra porter charges.",
            "Any special puja charges beyond the itinerary.",
            "Any meals, accommodations, or services beyond the mentioned inclusions.",
            "Medical expenses or emergency evacuation costs.",
            "Network connectivity-related expenses (BSNL & Jio work best in these regions).",
            "Any additional transfers apart from the ones included."
        ],
    },
    ekdham: {
        id: "ekdham-same-day-tour",
        name: "Ekdham Same Day Tour",
        days: 1,
        nights: 0,
        amount: 45000,
        dateStart: "Available on request",
        dateEnd: "Available on request",
        flightFrom: "Dehradun",
        description: "Choose any one shrine from Kedarnath, Badrinath, Gangotri, or Yamunotri for a same-day helicopter tour from Dehradun.",
        tourSummary: [
            "Fixed Departures: Ekdham Package by Helicopter",
            "Warm greetings from Himalayan Heli! With over two decades of dedicated service in pilgrimage tourism, we take immense pride in offering exclusive and comfortable helicopter tours. Our Ekdham Package allows pilgrims to visit one of the sacred Chardham shrines—Kedarnath Ji, Badrinath Ji, Gangotri, or Yamunotri—on a same-day heli-tour from Dehradun."
        ],
        itinerary: [
            {
                day: 1,
                title: "Yamunotri Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Kharsali Heli-base at 06:30 AM. Approximate Darshan & Trek Time: 5.5 hours (6 km trek one-way). Return to Dehradun by 01:00 PM."
            },
            {
                day: 1,
                title: "Gangotri Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Jhalla Heli-base at 06:30 AM. Approximate Darshan & Road Trip Time: 3 hours (25 km drive). Return to Dehradun by 10:30 AM."
            },
            {
                day: 1,
                title: "Kedarnath Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Sersi Heli-base at 06:30 AM. Shuttle service to Kedarnath ji | Approximate Darshan Time: 2 hours. Return to Dehradun by 09:30 AM."
            },
            {
                day: 1,
                title: "Badrinath Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Badrinath Helipad at 07:00 AM. Approximate Darshan Time: 1 to 1.5 hours. Return to Dehradun by 09:30 AM."
            }
        ],
        inclusions: [
            "Helicopter flight from Dehradun to the desired shrine and back.",
            "Local services & logistics for the selected shrine (e.g., Palki/Pony for Yamunotri, Shuttle Service for Kedarnath Ji, Vehicle for Gangotri, etc.).",
            "One meal (breakfast or lunch) at the destination.",
            "VIP Darshan arrangement.",
            "Applicable taxes & government levies."
        ],
        exclusions: [
            "Accommodation at any destination.",
            "Airport or hotel transfers in Dehradun.",
            "Sightseeing and personal expenses."
        ],
    }
};

// Helper function to get all packages
export const getAllPackages = () => Object.values(chardhamData); 