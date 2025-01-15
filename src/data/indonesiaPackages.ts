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
            image: "/IMAGES/Indonesia/Bali/free-easy.webp",
            description: "Experience the freedom to explore Bali at your own pace with our Free & Easy package...",
            itinerary: [
                {
                    day: 1,
                    title: "ARRIVAL BALI - ULUWATU TEMPLE - NYANG - NYANG BEACH TEA TIME (D)",
                    description: `Upon arrival, meet & greet by local representative. Transfer in to hotel for check in, Uluwatu temple: the holy ancient temple, this temple located at the level of 250 feet above sea level on the cliff south point or pura luhur. Nyang -Nyang beach tea time: top of the hill beach .the beach is a “secret paradise” for surfer,   We could see the high waves.  It could be a great great place for pro surfers. Dinner will be provide at local restaurant.`
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
    "bandung": [
        {
            id: "bandung-easy",
            category: "BANDUNG PACKAGES",
            name: "BANDUNG EASY PACKAGE",
            price: 12999,
            duration: { days: 3, nights: 2 },
            image: "/IMAGES/Indonesia/Bandung/easy-1.webp",
            description: "Experience the charm of Bandung with our easy package, perfect for those who want to explore the city at their own pace...",
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Bandung",
                    description: "Airport pickup and transfer to hotel. Rest of day at leisure."
                },
                {
                    day: 2,
                    title: "Bandung City Tour",
                    description: "Visit key attractions including Tangkuban Perahu Volcano, Ciater Hot Spring, and shopping at factory outlets."
                },
                {
                    day: 3,
                    title: "Departure",
                    description: "Free time until transfer to airport for departure."
                }
            ],
            inclusions: [
                "Return airport transfers",
                "2 nights accommodation",
                "Daily breakfast",
                "City tour with guide"
            ],
            exclusions: [
                "Airfare",
                "Personal expenses",
                "Optional tours",
                "Travel insurance"
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
        }
    ],
    // Add other categories...
}; 