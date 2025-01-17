export interface IndonesianPackage {
    id: string;
    category: string;
    name: string;
    price: number;
    duration: {
        days: number;
        nights: number;
    };
    image: string;
    description: string;
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

export const indonesiaPackages: { [key: string]: IndonesianPackage[] } = {
    "bali-delight": [
        {
            id: "bali-free-easy",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI DELIGHT 2N/3D",
            price: 18134,
            duration: { days: 3, nights: 2 },
            image: "/IMAGES/bali/1/1.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `KINTAMANI HIGHLAND - UBUD - TAMPAK SIRING (B/L/D)`,
                    description: `Rice terrace field: Tegalalang is one of the more popular rice terrace to visit. The rice terrace is designed very beautiful with exquisite hollowing rice field and precisely located on the hill bank. Kintamani Highland enjoying a beautiful panorama with view to mount  and lake Batur with a cold temperature. Tirta Empul holyspring water in Tampak Siring area (ex. Taking Bath in Tirta Empul Holy Spring Water). Also visit Ubud Art market which famous with its painting galleries and handicrafts.
                    
                    OR 

                    This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view.

                    `
                },
                {
                    day: 3,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-delight-3N4D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI DELIGHT 3N/4D",
            price: 25820,
            duration: { days: 4, nights: 3 },
            image: "/IMAGES/bali/1/2.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `KINTAMANI HIGHLAND - UBUD - TAMPAK SIRING (B/L/D)`,
                    description: `Rice terrace field: Tegalalang is one of the more popular rice terrace to visit. The rice terrace is designed very beautiful with exquisite hollowing rice field and precisely located on the hill bank. Kintamani Highland enjoying a beautiful panorama with view to mount  and lake Batur with a cold temperature. Tirta Empul holyspring water in Tampak Siring area (ex. Taking Bath in Tirta Empul Holy Spring Water). Also visit Ubud Art market which famous with its painting galleries and handicrafts.
                    `
                },
                {
                    day: 3,
                    title: "BEDUGUL - TANAH LOT TOUR (B/L/D)",
                    description: `This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view.
                    
                    Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence.
                    
                    On the way to Tanah Lot we will stop at Taman Ayun Temple. is a compound of Balinese temple and garden with water features located in Mengwi district in Badung Regency, Bali, Indonesia. Alas Kedaton monkey forest is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free  gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food.
                    `
                },
                {
                    day: 4,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-dolphin-tour-3N4D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI DOLPHIN TOUR 3N/4D",
            price: 28753,
            duration: { days: 3, nights: 3 },
            image: "/IMAGES/bali/1/3.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE - NYANG - NYANG BEACH TEA TIME (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Nyang -Nyang beach tea time: top of the hill beach .the beach is a "secret paradise" for surfer,   We could see the high waves.  It could be a great great place for pro surfers. Dinner will be provide at local restaurant.`
                },
                {
                    day: 2,
                    title: `KINTAMANI HIGHLAND -PENGLIPURAN VILLAGE-KEHEN TEMPLE (B/L/D)`,
                    description: `
                    	Rice terrace field: Tegalalang is one of the more popular rice terrace to visit. The rice terrace is designed very beautiful with exquisite hollowing rice field and precisely located on the hill bank. Kintamani Highland enjoying a beautiful panorama with view to mount  and lake Batur with a cold temperature. 							
								
	Kehen Temple is beautiful Hindu temple located in a foothills, It is one temple of monarchi temple,the temple under the aegis king while ceremony execution and contruction is delivered to lokal countyside custom as a sanctum which is used as a altar(oath) for empire functionary who disloyal to his obligation will incur the sapata or very horible anathema							
								
	Penglipuran village is a traditional country side owning unique characteristic life,socializing and culture.the natural nature and environment of  country side is designating the pittance touch of modernization influence. 							
                    
    Lunch and dinner at local restaurant. Over night at ANEKA LOVINA HOTEL for 01 night (or similar class hotel).
    `
                },
                {
                    day: 3,
                    title: "DOLPHIN TOUR-ULUNDANU TEMPLE-MONKEY FOREST-TANAH LOT TEMPLE (B/L/D )",
                    description: `
                    Breakfast at hotel. Dolphin tour : early morning by boat go to ocean sea to see dolpin with a very beautiful sunrise and black sea							
Ulun Danu temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view							
							
Monkey Forest Alas Kedaton is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food							
							
Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple,there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence							
							
                    `
                },
                {
                    day: 4,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-west-penida-3N4D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI WEST PENIDA TOUR 3N/4D",
            price: 28840,
            duration: { days: 4, nights: 3 },
            image: "/IMAGES/bali/1/4.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `WEST PENIDA (B/L/D)`,
                    description: `
                    Enjoy the natural beauty of West Penida Island and discover its four iconic spots, namely Kelingking 's white sand beach, Broken Beach's horseshoe-shaped cove, Angel Billabong's pool surrounded by rock cliifs, and Crystal Bay's crystal clear beach.  
    `
                },
                {
                    day: 3,
                    title: "BEDUGUL - TANAH LOT TOUR (B/L/D)",
                    description: `
                    This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view							
							
Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence.							
							
On the way to Tanah Lot we will stop at Taman Ayun Temple. is a compound of Balinese temple and garden with water features located in Mengwi district in Badung Regency, Bali, Indonesia. Alas Kedaton monkey forest is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free  gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food.							
							
										
							
                    `
                },
                {
                    day: 4,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-lembongan-3N4D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI LEMBONGAN TOUR 3N/4D",
            price: 31000,
            duration: { days: 4, nights: 3 },
            image: "/IMAGES/Indonesia/Bali/free-easy.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `LEMBONGAN ISLAND (B/L/D)`,
                    description: `
                    Ride a luxury catamaran to Lembongan Island, where you get to partake in exciting water activities including unlimited banana boat rides and a 35-meter water slide as well as explore the island's beautiful corals and marine life.
    `
                },
                {
                    day: 3,
                    title: "BEDUGUL - TANAH LOT TOUR (B/L/D)",
                    description: `
                    This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view							
							
Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence.							
							
On the way to Tanah Lot we will stop at Taman Ayun Temple. is a compound of Balinese temple and garden with water features located in Mengwi district in Badung Regency, Bali, Indonesia. Alas Kedaton monkey forest is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free  gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food.							
							
										
							
                    `
                },
                {
                    day: 4,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-golf-3N4D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI GOLF TOUR 3N/4D",
            price: 38440,
            duration: { days: 4, nights: 3 },
            image: "/IMAGES/Indonesia/Bali/free-easy.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `NEW KUTA GOLF (B/L/D)`,
                    description: `
                    Relax and play a round of golf at the 18-hole golf course at New Kuta Golf.
    `
                },
                {
                    day: 3,
                    title: "BEDUGUL - TANAH LOT TOUR (B/L/D)",
                    description: `
                    This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view							
							
Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence.							
							
On the way to Tanah Lot we will stop at Taman Ayun Temple. is a compound of Balinese temple and garden with water features located in Mengwi district in Badung Regency, Bali, Indonesia. Alas Kedaton monkey forest is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free  gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food.							
							
										
							
                    `
                },
                {
                    day: 4,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-delight-4N5D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI DELIGHT 4N/5D",
            price: 33605,
            duration: { days: 5, nights: 4 },
            image: "/IMAGES/Indonesia/Bali/free-easy.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `KINTAMANI HIGHLAND - UBUD - TAMPAK SIRING (B/L/D)`,
                    description: `
                    Rice terrace field: Tegalalang is one of the more popular rice terrace to visit. The rice terrace is designed very beautiful with exquisite hollowing rice field and precisely located on the hill bank. Kintamani Highland enjoying a beautiful panorama with view to mount  and lake Batur with a cold temperature. Tirta Empul holyspring water in Tampak Siring area (ex. Taking Bath in Tirta Empul Holy Spring Water). Also visit Ubud Art market which famous with its painting galleries and handicrafts.
    `
                },
                {
                    day: 3,
                    title: "BEDUGUL - TANAH LOT TOUR (B/L/D)",
                    description: `
                    This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view							
							
Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence.							
							
On the way to Tanah Lot we will stop at Taman Ayun Temple. is a compound of Balinese temple and garden with water features located in Mengwi district in Badung Regency, Bali, Indonesia. Alas Kedaton monkey forest is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free  gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food.							
							
										
							
                    `
                },
                {
                    day: 4,
                    title: "BENOA WATER SPORT (Banana Boat) + BRADJA SHANDI MONUMENT (B/L/D) ",
                    description: `Bradja Shandi Monument: this monument built in the year 1987,the purpose of this monument is to immortalize the soul and spirit of Balinese people struggle, at the one blow dig, looking after developing and also preserve . the culture of bali to be bequathed to a router generation as advancing capital stoke tread a world of loaded progressively with the challenge and resistence.
                    
                    Visit Tanjung Benoa for join Banana Boat 1 x. (Other Water activities based on personal account).`
                },
                {
                    day: 5,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-delight-5N6D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI DELIGHT 5N/6D",
            price: 42159,
            duration: { days: 6, nights: 5 },
            image: "/IMAGES/Indonesia/Bali/free-easy.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `KINTAMANI HIGHLAND - UBUD - TAMPAK SIRING (B/L/D)`,
                    description: `
                    Rice terrace field: Tegalalang is one of the more popular rice terrace to visit. The rice terrace is designed very beautiful with exquisite hollowing rice field and precisely located on the hill bank. Kintamani Highland enjoying a beautiful panorama with view to mount  and lake Batur with a cold temperature. Tirta Empul holyspring water in Tampak Siring area (ex. Taking Bath in Tirta Empul Holy Spring Water). Also visit Ubud Art market which famous with its painting galleries and handicrafts.
    `
                },
                {
                    day: 3,
                    title: "BEDUGUL - TANAH LOT TOUR (B/L/D)",
                    description: `
                    This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view							
							
Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence.							
							
On the way to Tanah Lot we will stop at Taman Ayun Temple. is a compound of Balinese temple and garden with water features located in Mengwi district in Badung Regency, Bali, Indonesia. Alas Kedaton monkey forest is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free  gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food.							
							
										
							
                    `
                },
                {
                    day: 4,
                    title: "LEMPUYANG TEMPLE - TIRTAGANGGA TOUR (B/L/D) ",
                    description: `We will visit Pura Penataran Agung Lempuyang is a Balinese Hindu temple or pura located in the slope of Mount Lempuyang in Karangasem, Bali. Pura Penataran Agung Lempuyang is considered as part of a complex of pura surrounding Mount Lempuyang, one of the highly regarded temples of Bali							
							
And proceed to Tirta Gangga is a former royal palace in eastern Bali, Indonesia, about 5 kilometres from Karangasem, near Abang. Named after the sacred river Ganges in Hinduism, it is noted for the Karangasem royal water palace, bathing pools and its Patirthan temple. The one hectare complex was built in 1946 by the late King of Karangsem but was destroyed almost entirely by the eruption of nearby Mount Agung in 1963.							
							 `
                },
                {
                    day: 5,
                    title: "BENOA WATER SPORT (Banana Boat) + BRADJA SHANDI MONUMENT (B/L/D) ",
                    description: `Bradja Shandi Monument: this monument built in the year 1987,the purpose of this monument is to immortalize the soul and spirit of Balinese people struggle, at the one blow dig, looking after developing and also preserve . the culture of bali to be bequathed to a router generation as advancing capital stoke tread a world of loaded progressively with the challenge and resistence.
                    Visit Tanjung Benoa for join Banana Boat 1 x. (Other Water activities based on personal account)
                    `
                },
                {
                    day: 6,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
        {
            id: "bali-delight-6N7D",
            category: "BALI DELIGHT TOUR PACKAGES",
            name: "BALI DELIGHT 6N/7D",
            price: 58553,
            duration: { days: 7, nights: 6 },
            image: "/IMAGES/Indonesia/Bali/free-easy.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Bbq Dinner will be provide at local restaurant Jimbaran Bay (Seafood)`
                },
                {
                    day: 2,
                    title: `KINTAMANI HIGHLAND - UBUD - TAMPAK SIRING (B/L/D)`,
                    description: `
                    Rice terrace field: Tegalalang is one of the more popular rice terrace to visit. The rice terrace is designed very beautiful with exquisite hollowing rice field and precisely located on the hill bank. Kintamani Highland enjoying a beautiful panorama with view to mount  and lake Batur with a cold temperature. Tirta Empul holyspring water in Tampak Siring area (ex. Taking Bath in Tirta Empul Holy Spring Water). Also visit Ubud Art market which famous with its painting galleries and handicrafts.
    `
                },
                {
                    day: 3,
                    title: "BEDUGUL - TANAH LOT TOUR (B/L/D)",
                    description: `
                    This program covering visit to Bedugul (Ulundanu Floating temple). Ulun Danu Temple is a famous Hindu temple located in the lakeside of Beratan and owns the beautiful panorama with Beratan Lake and mountain is back drop view. When the lake water is going up, this temple is looked like adrift above water because the water encircles it.is it situated in the cool area and mountain with breathtaking view							
							
Tanah lot Temple: This temple is very famous among tourist destinations in Bali with spectacular view of sunset. At some nooks of coral reef around Tanah Lot Temple there are holy tame snake in black and white color where according to the local society believe that it as a deity property and as the guard of the temple from bad influence.							
							
On the way to Tanah Lot we will stop at Taman Ayun Temple. is a compound of Balinese temple and garden with water features located in Mengwi district in Badung Regency, Bali, Indonesia. Alas Kedaton monkey forest is Natural environments that is looked green with its fresh air and create the calm, quite and holy atmosphere. The monkeys in Alas Kedaton are very tame and free  gallivanting in temple yard. so that the calm atmosphere is sometime solved by noise voice of the monkey, which are playing around and scrambling of food.							
							
										
							
                    `
                },
                {
                    day: 4,
                    title: "WEST PENIDA ISLAND (B/L/D)",
                    description: `
                    Enjoy the natural beauty of West Penida Island and discover its four iconic spots, namely Kelingking 's white sand beach, Broken Beach's horseshoe-shaped cove, Angel Billabong's pool surrounded by rock cliifs, and Crystal Bay's crystal clear beach.  					
							 `
                },
                {
                    day: 5,
                    title: "BESAKIH TEMPLE - KERTA GOSA - PENGLIPURAN VILLAGE (B/L/D) ",
                    description: `
                    	Besakih Temple is the most important, holiest, and largest temple of Balinese Hinduism located on the slopes of Mount Agung. It is composed of 23 temples, with the main temple being Pura Penataran Agung. 							
	Kerta Gosa, also known locally as Taman Gili Kerta Gosa, is a part of the Puri Semarapura Royal Palace Complex and features a grand hall (known as Bale Kerta Golsa) and a pavilion (known as Bale Kambang) that's surrounded by a moat.							
	Explore Pengilupuran Village, one of the most famous Balinese traditional village due to its preservation of the traditional Balinese culture in their daily lives. 							
                    `
                },
                {
                    day: 6,
                    title: "DEPARTURE BALI (B)",
                    description: `After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program`
                }
            ],
            inclusions: [
                "Private transfer as per itinerary",
                "Accomodation on lowest room category with daily breakfast",
                "Tour & sightseeing",
                "Meals arrangement (Local Meals)",
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bali/free-easy-1.webp",
                "/IMAGES/Indonesia/Bali/free-easy-2.webp"
            ]
        },
    ],
    "jakarta-packages": [
        {
            id: "jakarta-puncak-bandung-3d2n",
            category: "JAKARTA PACKAGES",
            name: "JAKARTA - PUNCAK - BANDUNG 3D/2N",
            price: 23000,
            duration: { days: 3, nights: 2 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Jakarta, Puncak and Bandung with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL  JAKARTA    (D)",
                    description: `Arrival in Jakarta International Airport. Meet & greet with our tour guide Afterwards having Jakarta city tour by visiting Sunda Kelapa Old Harbour and Fatahillah Square and photo stop at National Monument . Dinner will be served at local restaurant. Check in at hotel Jakarta `
                },
                {
                    day: 2,
                    title: "JAKARTA ART & CULTURE  (B/L/D)",
                    description: `	Breakfast at hotel. Having Jakarta full day tour visiting TMII or Indonesia Miniature Park and proceeding to Museum Indonesia, afterward in late afternoon will shopping at ITC Mangga Dua Mall .Lunch and dinner will be served at local rest. Back to hotel and free program.	`
                },
                {
                    day: 3,
                    title: "JAKARTA OUT   (B)",
                    description: "Breakfast at the hotel then free program. At the appropriate time then check out from hotel and well drop you off to the airport for your next flight."
                }
            ],
            inclusions: [
                "Transfers : Airport - Hotel - Airport",
                "Accommodation at preferred hotel or similar class	",
                "Tour program & Transfers(by Full AC Coach)as per itinerary 	",
                "City tour with guide"
            ],
            exclusions: [
                "Lunch & Dinner",
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
        {
            id: "jakarta-puncak-bandung-4d3n",
            category: "JAKARTA PACKAGES",
            name: "JAKARTA - PUNCAK - BANDUNG 4D/3N",
            price: 30000,
            duration: { days: 4, nights: 3 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Bandung with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL  JAKARTA  (D)",
                    description: `	Arrival in Jakarta International Airport. Meet & greet with our tour guide. Program in the afternoon Jakarta city tour by visiting Sunda Kelapa Old Harbour and Fatahillah Museum, Glodok China Town and Photostop at National Monument. Dinner will be served at local restaurant. Transfer to the hotel								`
                },
                {
                    day: 2,
                    title: "JAKARTA – BOGOR - SAFARI  - JAKARTA (B/L/D)",
                    description: `	In the morning breakfast at hotel. Our first destination for today is Bogor city for shopping at Tajur factory outlet enjoy the most beautiful Panorama of Gede mountain at Gunung Mas Tea Plantation.Having Lunch at local restaurant. Proceeding the tour to Cisarua for visiting Safari Park with its various of tame and wild animals. Driving back to Jakarta. Dinner at local restaurant				`
                },
                {
                    day: 3,
                    title: "JAKARTA ART & CULTURE (B/L/D)",
                    description: "Breakfast at the hotel. Having Jakarta fullday tour visiting TMII or Indonesia Miniature Park and proceeding to Museum Indonesia, shopping program at  ITC Mangga Dua Mall. Lunch and dinner will be served at local restaurant. Back to the hotel."
                },
                {
                    day: 4,
                    title: "JAKARTA OUT (B)",
                    description: "Breakfast at the hotel then free program. At the appropriate time then check out from hotel and well drop you off to the airport for your next flight."
                }
            ],
            inclusions: [
                "Private AC transportation",
                "Accommodation as your choice",
                "Guide service, admission fees, donations",
                "Parking fee",
                "Toll road",
                "Meals per itinerary"
            ],
            exclusions: [
                "Return transfers from Airport - Hotel - Airport",
                "Airport tax",
                "Porter fees at airport & hotels",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
        {
            id: "jakarta-puncak-bandung-5d4n",
            category: "JAKARTA PACKAGES",
            name: "JAKARTA - PUNCAK - SAFARI 5D/4N",
            price: 45223,
            duration: { days: 5, nights: 4 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Jakarta, Puncak and Bandung with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL  JAKARTA  (D)",
                    description: `Arrival in Jakarta International Airport. Meet & greet with our tour guide. Afterwards having Jakarta city tour by visiting Sunda Kelapa Old Harbor and Fatahillah Square then photo stop at National Monument. Dinner will be served at local Restaurant. Check in at hotel Jakarta.							`
                },
                {
                    day: 2,
                    title: "JAKARTA - PUNCAK - SAFARI   (B/L/D)",
                    description: `In the morning breakfast at hotel. Our first destination for today is Bogor city for shopping at Tajur factory outlet. Enjoy the most beautiful Panorama of Gede mountain at Gunung Mas Tea Plantation .Having lunch at local restaurant. Proceeding the tour to Cisarua for visiting Safari Park with its various of tame and wild animals. Driving back to Jakarta. Dinner at local restaurant.	`
                },
                {
                    day: 3,
                    title: "JAKARTA ART & CULTURE (B/L/D)",
                    description: "Breakfast at hotel. Having Jakarta full day tour visiting TMII or Indonesia Miniature Park and proceeding to Indonesia Museum , afterward  shopping program at ITC Mangga dua Mall. Lunch & dinner will be served at local rest. Back to hotel and free program."
                },
                {
                    day: 4,
                    title: "JAKARTA SHOPPING (B)",
                    description: "Breakfast at the hotel. Afterward visiting Plaza Indonesia and proceeding to Mangga Dua Shopping Center and Grand Indonesia Mall for full day shopping program. Back to hotel and free program "
                },
                {
                    day: 5,
                    title: "JAKARTA OUT (B)",
                    description: "Breakfast at the hotel. Afterward free program. At the appropriate time then check out from hotel and well drop you off to the airport for your next flight."
                }
            ],
            inclusions: [
                "Private AC transportation",
                "Accommodation as your choice",
                "Guide service, admission fees, donations",
                "Parking fee",
                "Toll road",
                "Meals per itinerary"
            ],
            exclusions: [
                "Return transfers from Airport - Hotel - Airport",
                "Airport tax",
                "Porter fees at airport & hotels",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
        {
            id: "jakarta-puncak-bandung-fullday-4d3n",
            category: "JAKARTA PACKAGES",
            name: "JAKARTA - PUNCAK - SAFARI 4D/3N",
            price: 38225,
            duration: { days: 4, nights: 3 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Jakarta, Puncak and Bandung with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL  JAKARTA  (D)",
                    description: `Arrival in Jakarta International Airport. Meet & greet with our tour guide. Program in the afternoon Jakarta city tour by visiting Sunda Kelapa Old Harbour and Fatahillah Museum, Glodok China Town and Photostop at National Monument. Dinner will be served at local restaurant. Transfer to the hotel.							`
                },
                {
                    day: 2,
                    title: "JAKARTA BANDUNG      (B/L/D)",
                    description: `In the morning breakfast at the hotel. Afterward direct transfer to Bandung via new Highway toll, on the way will visit Miniature Indonesia Park, Lunch at local rest. Arrive Bandung, shopping program to some Factory Outlet, such as, Rumah Mode, Heritage, Summit, etc and dinner at local restaurant. Back to hotel`
                },
                {
                    day: 3,
                    title: "BANDUNG FULLDAY (B/L/D)",
                    description: "Breakfast at the hotel. Today will continue to fullday Bandung, visiting White Crater volcano and Ranca Upas Hotspring + Ciwidey strawberry farm. lunch at local rest. Back to Bandung  well shopping at Factory Outlet or Cihampelas jeans centre, afterwards dinner at local rest then free program"
                },
                {
                    day: 4,
                    title: "BANDUNG  OUT or  to JAKARTA OUT   (B)",
                    description: "Breakfast at the hotel. Afterward free program. At the appropriate time then check out from hotel and well drop you off to the airport for your next flight."
                }
            ],
            inclusions: [
                "Private AC transportation",
                "Accommodation as your choice",
                "Guide service, admission fees, donations",
                "Parking fee",
                "Toll road",
                "Meals per itinerary"
            ],
            exclusions: [
                "Return transfers from Airport - Hotel - Airport",
                "Airport tax",
                "Porter fees at airport & hotels",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
    ],
    "jogja tour packages": [
        {
            id: "yogyakarta-3d2n",
            category: "YOGYAKARTA PACKAGES",
            name: "YOGYAKARTA 3D/2N",
            price: 29421,
            duration: { days: 3, nights: 2 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Yogyakarta with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL YOGYAKARTA",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in.`
                },
                {
                    day: 2,
                    title: "KERATON - BOROBUDUR TEMPLE - MALIOBORO (B/L/D)",
                    description: `Visit Keraton, the Palace of Yogyakarta which is also the official residence of the Sultan of Yogyakarta. Head to Taman Sari Water Castle, the former royal garden of the Sultanate of Yogyakarta built in the 18th century originally used as a resting, defense, meditation, and working area by the Sultan and his family. 							
							
Afterwards, visit Borobudur Temple, one of the largest Buddhist temple in the world built in the 8th and 9th century and a designated UNESCO world heritage site that is shaped like a step pyramid. We will also visit Pawon Temple and Mendut Temple, two Buddhist temples that was built around the same time as  Borobudur Temple and located in a straight line, signifying a mutual religious relationship between the three temples.							
Later, visit Malioboro Street, a major shopping street in Yogyakarta surrounded by many hotels, restaurants, and shops selling unique Yogyakarta souvenirs from batik to local delicacies. 								`
                },
                {
                    day: 3,
                    title: "PRAMBANAN TEMPLE - DEPARTURE YOGYAKARTA (B)",
                    description: "After breakfast at your hotel, visit Prambanan Temple, the second largest Hindu Temple in Southeast Asia dated from the 9th century. This temple complex consists of 240 temple structures, with the tallest central building at 47 meters high, and is dedicated to Brahma, Vishnu, and Shiva. Transfer to airport. End of program"
                }
            ],
            inclusions: [
                "Transfers : Airport - Hotel - Airport",
                "Accommodation at preferred hotel or similar class	",
                "Tour program & Transfers(by Full AC Coach)as per itinerary 	",
                "City tour with guide"
            ],
            exclusions: [
                "Lunch & Dinner",
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
        {
            id: "yogyakarta-jogja-classic-4d3n",
            category: "YOGYAKARTA PACKAGES",
            name: "YOGYAKARTA JOGJA CLASSIC 4D/3N",
            price: 41000,
            duration: { days: 4, nights: 3 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Yogyakarta with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL YOGYAKARTA",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in.						`
                },
                {
                    day: 2,
                    title: "BOROBUDUR TEMPLE - PRAMBANAN TEMPLE - MALIOBORO (B/L/D)",
                    description: `	Afterwards, visit Borobudur Temple, one of the largest Buddhist temple in the world built in the 8th and 9th century and a designated UNESCO world heritage site that is shaped like a step pyramid. We will also visit Pawon Temple and Mendut Temple, two Buddhist temples that was built around the same time as  Borobudur Temple and located in a straight line, signifying a mutual religious relationship between the three temples.							
	"Visit Prambanan Temple, the second largest Hindu Temple in Southeast Asia dated from the 9th century. This temple complex consists of 240 temple structures, with the tallest central building at 47 meters high, and is dedicated to Brahma, Vishnu, and Shiva. Afterwards, visit Tebing Breksi, a former mining site turned protected geoheritage site where the natural rocks were formed by the activities of Purba Semilir Volcano. 													"							
								
	Later, visit Malioboro Street, a major shopping street in Yogyakarta surrounded by many hotels, restaurants, and shops selling unique Yogyakarta souvenirs from batik to local delicacies. 							`
                },
                {
                    day: 3,
                    title: "KERATON - YOGYAKARTA CLASSIC VW CITY TOUR (B/L/D)",
                    description: `	Visit Keraton, the Palace of Yogyakarta which is also the official residence of the Sultan of Yogyakarta. Head to Taman Sari Water Castle, the former royal garden of the Sultanate of Yogyakarta built in the 18th century originally used as a resting, defense, meditation, and working area by the Sultan and his family.							
								
	In the afternoon, go on a Yogyakarta city tour riding colorful classic Volkswagon cars while wearing traditional Javanese costumes.							
								`
                },
                {
                    day: 4,
                    title: "DEPARTURE YOGYAKARTA (B)",
                    description: "After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program."
                }
            ],
            inclusions: [
                "Private AC transportation",
                "Accommodation as your choice",
                "Guide service, admission fees, donations",
                "Parking fee",
                "Toll road",
                "Meals per itinerary"
            ],
            exclusions: [
                "Return transfers from Airport - Hotel - Airport",
                "Airport tax",
                "Porter fees at airport & hotels",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
        {
            id: "borobudur-4d3n",
            category: "YOGYAKARTA PACKAGES",
            name: "BOROBUDUR 4D/3N",
            price: 45223,
            duration: { days: 5, nights: 4 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Jakarta, Puncak and Bandung with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL  JAKARTA  (D)",
                    description: `Arrival, dinner at local restaurant and check in hotel (D)						`
                },
                {
                    day: 2,
                    title: "BOROBUDUR TEMPLE PILGRIM (B/L/D)",
                    description: `Borobudur Temple Pilgrim (unassisted prayer at top pagoda), Visits Pawon and Mendut Temple. Lunch and dinner at local restaurant (B/L/D).`
                },
                {
                    day: 3,
                    title: "JAKARTA ART & CULTURE (B/L/D)",
                    description: "Breakfast at hotel. Having Jakarta full day tour visiting TMII or Indonesia Miniature Park and proceeding to Indonesia Museum , afterward  shopping program at ITC Mangga dua Mall. Lunch & dinner will be served at local rest. Back to hotel and free program."
                },
                {
                    day: 4,
                    title: "BOROBUDUR TEMPLE PILGRIM (B/L/D)",
                    description: "Borobudur Temple Pilgrim (unassisted prayer at top pagoda), Visits Pawon and Mendut Temple. Lunch and dinner at local restaurant (B/L/D)."
                },
                {
                    day: 5,
                    title: " Departure (B)",
                    description: "Transfer out from hotel to airport (B). "
                }
            ],
            inclusions: [
                "Private AC transportation",
                "Accommodation as your choice",
                "Guide service, admission fees, donations",
                "Parking fee",
                "Toll road",
                "Meals per itinerary"
            ],
            exclusions: [
                "Return transfers from Airport - Hotel - Airport",
                "Airport tax",
                "Porter fees at airport & hotels",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
        {
            id: "yogya-jogja-5d4n",
            category: "YOGYAKARTA PACKAGES",
            name: "YOGYAKARTA JOGJA CLASSIC 5D/4N",
            price: 46218,
            duration: { days: 5, nights: 4 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Jakarta, Puncak and Bandung with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL YOGYAKARTA",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in.												`
                },
                {
                    day: 2,
                    title: "MT. MERAPI - PRAMBANAN TEMPLE (B/L/D)",
                    description: `	Go on a Mt. Merapi Jeep Tour and visit four iconic places at the area. Museum Sisa Hartaku showcases belongings left behind by the villagers living nearby duing the eruption of Mt. Merapi in 2020. Batu Alien is a huge rock which resembles an alien face that was spewed out by Mount Merapi during the 2010 eruption. Discover the Bunker, built to protect and provide shelter for the nearby villagers when there is a volcanic eruption. End the Mt. Merapi Jeep Tour with a splashing Manuver Sungai Kali Kuning ride across the Kali Kuning River.							
								
	Visit Prambanan Temple, the second largest Hindu Temple in Southeast Asia dated from the 9th century. This temple complex consists of 240 temple structures, with the tallest central building at 47 meters high, and is dedicated to Brahma, Vishnu, and Shiva. Afterwards, visit Tebing Breksi, a former mining site turned protected geoheritage site where the natural rocks were formed by the activities of Purba Semilir Volcano. 							`
                },
                {
                    day: 3,
                    title: "KERATON - PARANGTRITIS BEACH (B/L/D)",
                    description: `	Visit Keraton, the Palace of Yogyakarta which is also the official residence of the Sultan of Yogyakarta. Head to Taman Sari Water Castle, the former royal garden of the Sultanate of Yogyakarta built in the 18th century originally used as a resting, defense, meditation, and working area by the Sultan and his family. Discover Kotagede, the first capital city of the Mataram Sultanate, where remains of the palace, royal cemetery, royal mosque, and defensive walls still exist. Kotagede is presently famous for its silver crafting.							
								
	In the afternoon, head over to Parangtritis Beach famous for its big waves, black sand beach, and picturesque sunset views. Visit Parangkusumo Sand Dune for its sandy hills formed by the wind breeze and rain blowing sand in the area.  							
								`
                },
                {
                    day: 4,
                    title: "BOROBUDUR TEMPLE - MALIOBORO (B/L/D) ",
                    description: `	Visit Borobudur Temple, one of the largest Buddhist temple in the world built in the 8th and 9th century and a designated UNESCO world heritage site that is shaped like a step pyramid. We will also visit Pawon Temple and Mendut Temple, two Buddhist temples that was built around the same time as  Borobudur Temple and located in a straight line, signifying a mutual religious relationship between the three temples. Transfer in to hotel for check in. 							
								
	Later, visit Malioboro Street, a major shopping street in Yogyakarta surrounded by many hotels, restaurants, and shops selling unique Yogyakarta souvenirs from batik to local delicacies. 							`
                },
                {
                    day: 5,
                    title: "DEPARTURE YOGYAKARTA (B)",
                    description: "After breakfast at your hotel, free at own leisure or optional tour until time for hotel check out. Transfer to airport. End of program."
                }
            ],
            inclusions: [
                "Private AC transportation",
                "Accommodation as your choice",
                "Guide service, admission fees, donations",
                "Parking fee",
                "Toll road",
                "Meals per itinerary"
            ],
            exclusions: [
                "Return transfers from Airport - Hotel - Airport",
                "Airport tax",
                "Porter fees at airport & hotels",
                "Personal expenses",
                "Optional tours",
                "Travel insurance",
                "Anything not mentioned in the inclusions"
            ],
            cancellationPolicy: [
                "Free cancellation up to 7 days before arrival",
                "50% charge for cancellation within 7 days",
                "100% charge for cancellation within 48 hours"
            ],
            galleryImages: [
                "/IMAGES/Indonesia/Bandung/easy-1.webp",
                "/IMAGES/Indonesia/Bandung/easy-2.webp",
                "/IMAGES/Indonesia/Bandung/easy-3.webp"
            ]
        },
    ],
}; 