export interface GroupTour {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    duration: { days: number; nights: number };
    startDate: string;
    groupSize: string;
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

export const groupToursData: { [key: string]: GroupTour } = {
    malaysia: {
        id: 'malaysia',
        name: "Malaysia Group Tour: Kuala Lumpur & Genting",
        price: 27500,
        image: "/UGCImages/Images4/malashia/vertical/2.webp",
        description: "Experience the best of Malaysia with our exclusive group tour package...",
        duration: { days: 4, nights: 3 },
        startDate: "As per availability",
        groupSize: "20+",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Kuala Selangor Tour",
                description: "Arrive at Kuala Lumpur International Airport. Transfer to hotel. Evening Bluetears & Firefly Tours. At 4pm drive to Kuala Selangor for the Bluetears Tour & Firefly Tours by the river. Once done have local dinner and then drive back to hotel."
            },
            {
                day: 2,
                title: "Kuala Lumpur Full Day Tour",
                description: "After Breakfast today we will do Kuala Lumpur full day tour by visiting KL Tower, Petronas Twin Towers (Photostop), Batu Caves Temple, Istana Negara, Dataran Merdeka, Sultan Samad Building, River of Life, Malaysia House of Parliament (Pass By), Malayan Railway Administration Building (Pass By), Taman Botani Perdana (Pass By) and then go for Lunch (North Indian Lunch) After lunch Photo stop of worlds Tallest building of TRX & PNB 101 and lastly visit the Chocolate Factory. Once done go for early dinner and then drop back at the hotel. Free for the evening to move around."
            },
            {
                day: 3,
                title: "Genting Highlands Tour",
                description: `After breakfast, drive to genting. We straight drive to Genting Cable car station. On
arrival take cable car up and visit the outdoor theme park for the others who don't want
to visit the theme park are free to move around to casino and around. Once done
moving around on own and at 5pm take cable car down and drive back to Hotel and
have Dinner. Drop & Rest`
            },
            {
                day: 4,
                title: "Putrajaya Tour & Departure",
                description: `Today we will check out at 12pm or 1pm and pick up will be arranged at 2pm. Drive to
Putrajaya for Putrajaya Tour & Putrajaya River cruise. Once done at 5pm drive to airport.
Take back home the beauty of Malaysia with again a plan to come back to explore other
parts of Malaysia.`
            }
        ],
        inclusions: [
            "Hotel Accommodation at a 3 Star Hotel with Breakfast",
            "Meals Lunch & Dinner Where its mentioned",
            "Entrance Fees to Bluetears Tour, Firefly tour",
            "Genting Cable Car, Outdoor Theme Park",
            "KL Tower Tour & Putrajaya River Cruise",
            "Tour Guide from day 1 to day 4",
            "44 Seater AC Coach with Driver",
            "Airport Transfers",
            "Tour transfers, all taxes, toll & fuel",
            "Airfare"

        ],
        exclusions: [
            "Personal expenses",
            "Optional activities",
            "Travel insurance",
            "Anything not in inclusions is excluded"
        ],
        cancellationPolicy: [
            "Free cancellation up to 60 days before departure",
            "50% refund up to 30 days before departure",
            "No refund within 30 days of departure"
        ],
        galleryImages: [
            "/UGCImages/Images4/malashia/horizontal/1.webp",
            "/UGCImages/Images4/malashia/horizontal/2.webp",
            "/UGCImages/Images4/malashia/horizontal/3.webp",
            "/UGCImages/Images4/malashia/horizontal/4.webp",
            "/UGCImages/Images4/malashia/horizontal/5.webp",
            "/UGCImages/Images4/malashia/horizontal/6.webp",
            "/UGCImages/Images4/malashia/vertical/1.webp",
            "/UGCImages/Images4/malashia/vertical/2.webp",
            "/UGCImages/Images4/malashia/vertical/3.webp",
            "/UGCImages/Images4/malashia/vertical/4.webp",
            "/UGCImages/Images4/malashia/vertical/5.webp",
            "/UGCImages/Images4/malashia/vertical/6.webp",
        ]
    },
    uttrakhand: {
        id: 'uttrakhand',
        name: "Uttarakhand Group Tour",
        price: 13650,
        image: "/UGCImages/Images4/uttrakhand/horizontal/1.webp",
        description: "Explore the breathtaking landscapes and rich spiritual heritage of Uttarakhand...",
        duration: { days: 5, nights: 4 },
        startDate: "As per availability",
        groupSize: "20+",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Haridwar railway station",
                description: `Upon arrival at Haridwar Railway Station, guests will be welcomed and transferred to the hotel for check-in. After some rest, the group will head for a leisurely evening stroll along Mall Road, enjoying the vibrant shops, cafes, and the scenic beauty of Haridwar. Dinner will be served at the hotel, followed by an overnight stay in Haridwar.
                

            Meals: Breakfast en route, Lunch, and Dinner at the hotel in Haridwar.

            Accommodation: Hotel in Haridwar
                `
            },
            {
                day: 2,
                title: "Hotel - Haridwar and Rishikesh Sightseeing",
                description: `After breakfast, the group will depart for a full-day excursion to Rishikesh, a spiritual hub
renowned for its ashrams and temples. The sightseeing will include visits to iconic
landmarks such as Laxman Jhula and Ram Jhula, followed by a peaceful visit to the
Parmarth Niketan Ashram, where guests can explore the serene ambiance of the ashram.
Other highlights include visits to Geeta Bhawan and Trayambakeshwar Temple. After
exploring the spiritual and scenic charm of Rishikesh, the group will return to Haridwar for
dinner and an overnight stay.`
            },
            {
                day: 3,
                title: "Haridwar Hotel - Private Transfer and Sightseeings",
                description: `Following breakfast, the group will check out from Haridwar and proceed to Mussoorie.
                Upon arrival and check-in at the hotel, the group will visit the stunning Kempty Falls, a
perfect spot for relaxation and photos. Later, a visit to the peaceful Company Garden will
allow guests to enjoy beautiful floral displays and serene surroundings. The day will
conclude with a leisurely evening at Mall Road, where guests can explore the local shops
and cafes. Dinner and overnight stay at the hotel in Mussoorie.`
            },
            {
                day: 4,
                title: "Mussoorie - Mussoorie - Mussoorie and Dehradun Sightseeing, Gala Dinner",
                description: `After breakfast, the group will enjoy further sightseeing in Mussoorie, starting with a visit to
Gun Hill via the optional ropeway ride for panoramic views. Then, the group will proceed to
Dehradun, visiting Robbers Cave and Sahastradhara to experience the natural beauty and
therapeutic springs. In the evening, the group will return to Mussoorie for a Gala Dinner at
the hotel, celebrating the final night of their trip.`
            },
            {
                day: 5,
                title: "Mussoorie - Departure from Mussoorie to Haridwar",
                description: `Enjoy your final breakfast at the hotel before checking out. A comfortable transfer will take
you to the railway station for your onward journey, taking with you unforgettable memories
of Uttarakhands breathtaking landscapes, rich spiritual heritage, and warm hospitality`
            }
        ],
        inclusions: [
            "Accommodation in the hotels mentioned or similar.", "Check-in /Check-out 12h00 noon",
            "Stay at Twin Room Sharing Basis",
            "Breakfast, Lunch, Dinner",
            "Special gala dinner",
            "All sightseeing's , tours and transfers",
            "All toll taxes",
            "Driver Allowance",
            "One 500ml water bottle per person per day"
        ],
        exclusions: [
            "Visa fees",
            "Personal expenses",
            "Optional tours",
            "Anything not in inclusions is excluded"
        ],
        cancellationPolicy: [
            "Free cancellation up to 45 days before departure",
            "50% refund up to 30 days before departure",
            "No refund within 30 days of departure"
        ],
        galleryImages: [
            "/UGCImages/Images4/uttrakhand/horizontal/1.webp",
            "/UGCImages/Images4/uttrakhand/horizontal/2.webp",
            "/UGCImages/Images4/uttrakhand/horizontal/3.webp",
            "/UGCImages/Images4/uttrakhand/horizontal/4.webp",
            "/UGCImages/Images4/uttrakhand/horizontal/5.webp",
            "/UGCImages/Images4/uttrakhand/horizontal/6.webp",
            "/UGCImages/Images4/uttrakhand/vertical/1.webp",
            "/UGCImages/Images4/uttrakhand/vertical/2.webp",
            "/UGCImages/Images4/uttrakhand/vertical/3.webp",
            "/UGCImages/Images4/uttrakhand/vertical/4.webp",
            "/UGCImages/Images4/uttrakhand/vertical/5.webp",
            "/UGCImages/Images4/uttrakhand/vertical/6.webp",
        ]
    },
    almaty: {
        id: 'almaty',
        name: "Best of Almaty Tour Package",
        price: 32000,
        image: "/UGCImages/Images4/almaty/horizontal/5.webp",
        description: "Discover the beauty of Almaty with our exclusive 4 Nights / 5 Days tour package, including breathtaking natural landscapes and cultural experiences.",
        duration: { days: 5, nights: 4 },
        startDate: "As per availability",
        groupSize: "20+",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Kok Tobe Visit",
                description: "After arrival at Almaty International Airport, our driver will pick you up and transfer you to your hotel for check-in. Later, visit Kok Tobe, a mountain-top amusement park with stunning panoramic views of Almaty. Enjoy dinner and return to the hotel for an overnight stay.\n\nNOTES:\n1. PICK UP waiting time will be 02 hours maximum after flight arrival. Additional waiting charges apply beyond 02 hours.\n2. Night charges apply for transportation for flights arriving before 08:00 hrs or after 19:30 hrs. Please confirm charges with our sales team.\n3. Cross-check your itinerary with the driver upon arrival and discuss next-day pick-up timings."
            },
            {
                day: 2,
                title: "Shymbulak Mountain Resort & City Tour",
                description: "Morning:\nVisit Shymbulak Mountain Resort and enjoy a cable car ride offering breathtaking mountain views. Explore optional activities at the resort, such as skiing or dining.\n\nAfternoon:\nCity tour highlights:\n- Panfilov Park\n- Zenkov Cathedral\n- Republic Square\n- Presidential Palace (exterior view)\nLearn about the city's history and culture from your tour guide.\n\nEvening: Return to the hotel."
            },
            {
                day: 3,
                title: "Charyn Canyon & Kolsay Lakes",
                description: "Full-Day Excursion:\n- Drive to Charyn Canyon (4 hours).\n- Explore breathtaking canyon landscapes and the 'Valley of Castles.'\n- Visit Kolsay Lakes, a serene spot surrounded by pristine nature.\n- Enjoy a guided walk and scenic photo opportunities.\n\nLunch: Picnic-style (self-arranged or packed).\n\nEvening: Return to the hotel."
            },
            {
                day: 4,
                title: "Oi Qaragai Resort + Kok Tobe",
                description: "Visit Oi Qaragai Resort and enjoy activities such as cable car rides and optional activities like ziplining, horse riding, or nature walks.\n\nAfternoon:\nExplore Kok Tobe Hill. Highlights include:\n- Cable car ride to the top for spectacular city views.\n- Mini zoo and walking trails.\n- Enjoy a coffee or snack at a mountaintop café.\n\nEvening: Return to your hotel.\n\nOvernight: Stay in Almaty."
            },
            {
                day: 5,
                title: "Almarasan Valley + Green Bazaar",
                description: "Morning:\nVisit Almarasan Valley, known for its hot springs and scenic beauty. Relax by the river and enjoy the fresh air.\n\nAfternoon:\nExplore the Green Bazaar, a bustling marketplace famous for local delicacies, souvenirs, and traditional Kazakh products.\n\nEvening: Optional dinner at a traditional Kazakh restaurant."
            },
            {
                day: 6,
                title: "Almaty Hotel to Airport - Pickup & Drop",
                description: "Morning: Free time for last-minute sightseeing or shopping.\nPrivate transfer to Almaty Airport for your departure flight."
            }
        ],
        inclusions: [
            "Hotel Accommodation at a 4-Star Hotel with Breakfast",
            "Daily Breakfast",
            "Return Airport Transfer",
            "Bottle of Water",
            "Entrance Tickets",
            "Shymbulak Mountain Resort Cable Car",
            "Kok Tobe Cable Car",
            "Almarasan Valley Eco Post",
            "Kolsay and Charyn Canyon",
            "Oi Qaragai Resort Cable Car",
            "Meals: Indian Lunch & Dinner (as mentioned)",
            "Guided Almaty City Tour",
            "Charyn Canyon & Kolsay Lake Excursion",
            "Airport Transfers",
            "Tour transfers, all taxes, toll & fuel",
            "Airfare"
        ],
        exclusions: [
            "Personal expenses",
            "Optional activities",
            "Travel insurance",
            "Anything not in inclusions is excluded"
        ],
        cancellationPolicy: [
            "Free cancellation up to 60 days before departure",
            "50% refund up to 30 days before departure",
            "No refund within 30 days of departure"
        ],
        galleryImages: [
            "/UGCImages/Images4/almaty/horizontal/1.webp",
            "/UGCImages/Images4/almaty/horizontal/2.webp",
            "/UGCImages/Images4/almaty/horizontal/3.webp",
            "/UGCImages/Images4/almaty/horizontal/4.webp",
            "/UGCImages/Images4/almaty/horizontal/5.webp",
            "/UGCImages/Images4/almaty/horizontal/6.webp",
            "/UGCImages/Images4/almaty/vertical/1.webp",
            "/UGCImages/Images4/almaty/vertical/2.webp",
            "/UGCImages/Images4/almaty/vertical/3.webp",
            "/UGCImages/Images4/almaty/vertical/4.webp",
            "/UGCImages/Images4/almaty/vertical/5.webp",
        ]
    }

};

export const groupToursList = Object.values(groupToursData); 