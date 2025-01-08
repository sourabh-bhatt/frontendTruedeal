'use client'

import { useState } from 'react'
import Image from 'next/image'
import { StarIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'

interface MediaItem {
    type: 'image' | 'video'
    url: string
    thumbnail?: string
}

interface Review {
    id: string
    author: string
    rating: number
    date: string
    title?: string
    content: string
    media: MediaItem[]
    booked: string
}

const reviews: Review[] = [
    {
        id: '1',
        author: 'Nikita Salunke',
        rating: 4.0,
        date: '15 Dec 2024',
        content: 'Great Service. We are grateful to the True Deal team for organizing our 2nd trip this year. They assisted us every step of the way, from booking flights and exchanging money to arranging all aspects of our trip to Maldives. The itinerary was well-planned and hassle-free, with options for customization. Our resort was beautiful, and we thoroughly enjoyed our stay. The team is highly professional and we hope to have more such vacations.',
        media: [
            { type: 'image', url: '/GoogleReviews/1/Screenshot 2025-01-07 031446.png' },
            { type: 'image', url: '/GoogleReviews/1/Screenshot 2025-01-07 031526.png' },
            { type: 'image', url: '/GoogleReviews/1/Screenshot 2025-01-07 031556.png' },
            { type: 'image', url: '/GoogleReviews/1/Screenshot 2025-01-07 031621.png' },
            { type: 'image', url: '/GoogleReviews/1/Screenshot 2025-01-07 031638.png' },
            { type: 'image', url: '/GoogleReviews/1/Screenshot 2025-01-07 031657.png' },
        ],
        booked: 'Maldives'
    },
    {
        id: '2',
        author: 'Kanika Chadha',
        rating: 5.0,
        date: '06 Nov 2023',
        content: 'We had an amazing experience booking our package for Kashmir with Truedeal. Mr. Vineet Singh and Mr. Aman Arora were extremely helpful and responsive throughout the entire process right from booking to the time when we came back from the trip. Vineet was super patient with our queries and he tried his best to tailor the package as per our request, even with the limited time we had for bookings. The package included good hotels and visits to the beautiful sightseeing spots. The cab provided was well maintained and driver bhaiya Javid Shalla was also extremely sweet and helpful and he guided us nicely throughout the entire trip with respect to food, places, timings, weather situation and even shopping discounts. He was always punctual with the pickup timings. When we got stuck at Gulmarg due to extreme snow fall, we were worried about our safety but Javid bhaiya waited for us downhill and called us often to ensure our safety. Truedeal also went the extra mile to arrange alternate accommodation at The Kabo in Srinagar when we couldnt reach our pre-booked hotel in Pahalgam due to bad weather conditions. We are happy that we were lucky to witness snowfall when it was not on the predictions. We would highly recommend our friends and relatives to book their trips with Truedeal and we ourselves are gonna prefer them to plan our upcoming couple and family vacations. Thank you Truedeal for making our Kashmir trip so memorable.',
        media: [
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0046.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0047.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0048.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0049.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0050.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0051.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0052.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0053.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0054.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0055.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0056.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0057.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0058.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0059.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0060.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0061.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0062.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0063.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0064.jpg' },
            { type: 'image', url: '/GoogleReviews/2/IMG-20250103-WA0065.jpg' },
            { type: 'video', url: '/GoogleReviews/2/VID-20250103-WA0068.mp4' },
            { type: 'video', url: '/GoogleReviews/2/VID-20250107-WA0018.mp4' },
            { type: 'video', url: '/GoogleReviews/2/VID-20250107-WA0019.mp4' },
            { type: 'video', url: '/GoogleReviews/2/VID-20250107-WA0020.mp4' },
            { type: 'video', url: '/GoogleReviews/2/VID-20250107-WA0021.mp4' },

        ],
        booked: 'Kashmir'
    },
    {
        id: '3',
        author: 'Shubham Tripathi',
        rating: 5.0,
        date: '10 Nov 2024',
        content: `Excellent Goa Trip with TrueDeal Travel!

I recently had the pleasure of booking my Goa trip with TrueDeal Travel Company, and I must say, it was an unforgettable experience! The entire journey, from planning to execution, was seamless and exceeded my expectations.

Special mention to Rashid, the representative who handled my booking. His professionalism, expertise, and warm demeanor made the entire process hassle-free. Rashid recommendations for accommodations, activities, and local experiences were spot-on, ensuring we made the most of our trip.

The arrangements made by TrueDeal Travel were impeccable:

• Comfortable and clean accommodations at Zuri whitesand and Novotel condolim
• Timely transportation and pickups
• Well-planned itinerary with ample leisure time

Rashid's dedication and responsiveness ensured that all our needs were met, and we faced no issues during the trip.

Highly Recommended!

If you are planning a trip to Goa or anywhere else, look no further than TrueDeal Travel and Rashid. Their exceptional service and attention to detail will make your journey truly memorable.

Thank you, Rashid and TrueDeal Travel, for an amazing Goa experience!

Rating Breakdown:
• Service Quality: 5/5
• Communication: 5/5
• Value for Money: 5/5
• Overall Experience: 5/5`,
        media: [
            { type: 'image', url: '/GoogleReviews/3/shubham (1).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (2).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (3).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (4).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (5).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (6).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (7).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (8).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (9).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (10).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (11).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (12).png' },
            { type: 'image', url: '/GoogleReviews/3/shubham (13).png' },
        ],
        booked: 'Goa'
    },
    {
        id: '4',
        author: 'Vishnu Sai Vineeth',
        rating: 5.0,
        date: '31st Dec 2024',
        content: 'True Deal,  my frist package tour from these guys, these guys are so friendly,  they will organized each and every demand that you quoted, that was an amazing experience.',
        media: [
            { type: 'image', url: '/GoogleReviews/4/Screenshot 2025-01-07 042033.png' },
            { type: 'image', url: '/GoogleReviews/4/Screenshot 2025-01-07 044212.png' },
            { type: 'image', url: '/GoogleReviews/4/Screenshot 2025-01-07 044230.png' },
            { type: 'image', url: '/GoogleReviews/4/Screenshot 2025-01-07 044246.png' },
            { type: 'image', url: '/GoogleReviews/4/Screenshot 2025-01-07 044302.png' },
            { type: 'image', url: '/GoogleReviews/4/Screenshot 2025-01-07 044324.png' },

        ],
        booked: 'Maldives'
    },
    {
        id: '5',
        author: 'Akshay Bhisikar',
        rating: 4.0,
        date: 'June 2024',
        content: `Great Team. Well-Planned Itinerary. Good Service.

We are grateful to the True Deal team for organizing an amazing trip to Bali. They assisted us every step of the way, from booking flights and exchanging money to arranging all aspects of our trip. The itinerary was well-planned and hassle-free, with options for customization. Our accommodations were all above 3-star quality, and we thoroughly enjoyed our stay. The tour drivers and guides were highly professional, and the vehicles were impeccably clean.

Highly Recommended.
Cheers to the Team!`,
        media: [
            { type: 'image', url: '/GoogleReviews/5/akb (1).png' },
            { type: 'image', url: '/GoogleReviews/5/akb (2).png' },
            { type: 'image', url: '/GoogleReviews/5/akb (3).png' },
            { type: 'image', url: '/GoogleReviews/5/akb (4).png' },
            { type: 'image', url: '/GoogleReviews/5/akb (5).png' },
            { type: 'image', url: '/GoogleReviews/5/akb (6).png' },
            { type: 'image', url: '/GoogleReviews/5/akb (7).png' },
            { type: 'image', url: '/GoogleReviews/5/akb (8).png' },


        ],
        booked: 'Bali'
    },
    {
        id: '6',
        author: 'Savi Ganesh',
        rating: 5.0,
        date: 'December 2024',
        content: `Dear Trudeal Travel Team,

I recently returned from my trip to Thailand, and I wanted to take a moment to express my gratitude and appreciation for the exceptional service provided by your team.

From the initial planning stages to the final execution, everything was seamless and well-organized. The itinerary you created for me was perfect, and I enjoyed every moment of my trip.

The hotels, transportation, and activities you arranged were all top-notch, and I was impressed by the attention to detail.

I would especially like to thank Aman and Rashid for their professionalism, knowledge, and responsiveness. They were always available to answer my questions and provide guidance throughout the trip.

I would highly recommend Trudeal Travel to anyone planning a trip to Thailand. Your team's expertise and dedication to customer satisfaction are truly exceptional.

Thank you again for making my trip to Thailand an unforgettable experience!

Best regards,
Savi
`,
        media: [
            { type: 'image', url: '/GoogleReviews/6/a (1).png' },
            { type: 'image', url: '/GoogleReviews/6/a (2).png' },
            { type: 'image', url: '/GoogleReviews/6/a (3).png' },


        ],
        booked: 'Thailand'
    },
    {
        id: '7',
        author: 'Surya Sharma',
        rating: 4.0,
        date: 'September 2024',
        content: `Reason for 4 stars -
1) During our trip we got stuck in SaPa due to typhoon yagi and our indian trip organiser Mr. Rashid has really helped us in getting out of the region.
2) However , the Vietnam organizers were very reluctant and I felt they were not interested in getting is out and due this our trip was completely ruined and we have to cancel our flights and divert the iternity.

During our initial 3 days we enjoyed a lot but last 5 days of trip was not worthy.
However the hotels and hospitality provided by Vietnamese were beyond our expectations.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/7/surya (1).png' },
            { type: 'image', url: '/GoogleReviews/7/surya (2).png' },
            { type: 'image', url: '/GoogleReviews/7/surya (3).png' },
            { type: 'image', url: '/GoogleReviews/7/surya (4).png' },
            { type: 'image', url: '/GoogleReviews/7/surya (5).png' },
            { type: 'image', url: '/GoogleReviews/7/surya (6).png' },
        ],
        booked: 'Vietnam'
    },
    {
        id: '8',
        author: 'Mrityunjay Singh',
        rating: 4.0,
        date: 'December 2024',
        content: `It was my first trip after marriage bit worried but the group was really good and helpful with every details.

`,
        media: [
            { type: 'image', url: '/GoogleReviews/8/andaman (1).png' },
            { type: 'image', url: '/GoogleReviews/8/andaman (2).png' },
            { type: 'image', url: '/GoogleReviews/8/andaman (3).png' },
            { type: 'image', url: '/GoogleReviews/8/andaman (4).png' },
            { type: 'image', url: '/GoogleReviews/8/andaman (5).png' },
            { type: 'image', url: '/GoogleReviews/8/andaman (6).png' },
            { type: 'image', url: '/GoogleReviews/8/andaman (7).png' },
            { type: 'image', url: '/GoogleReviews/8/andaman (8).png' },

        ],
        booked: 'Andaman'
    },
    {
        id: '9',
        author: 'Vijay Chand',
        rating: 5.0,
        date: 'December 2024',
        content: `This is the 3rd trip with True Deal to Almaty & Baku and again my friend Aman made this a good one.
Hotels and services provided at both the places were very confortable.
This was the one of the True Deal received and will surely look forward for such more vacations.
True Deal turns to be a True Deal
Best in service.
Cheers to Aman 💐

`,
        media: [
            { type: 'image', url: '/GoogleReviews/9/vc (1).png' },
            { type: 'image', url: '/GoogleReviews/9/vc (2).png' },
            { type: 'image', url: '/GoogleReviews/9/vc (3).png' },
            { type: 'image', url: '/GoogleReviews/9/vc (4).png' },
            { type: 'image', url: '/GoogleReviews/9/vc (5).png' },
            { type: 'image', url: '/GoogleReviews/9/vc (6).png' },
            { type: 'image', url: '/GoogleReviews/9/vc (7).png' },
            { type: 'image', url: '/GoogleReviews/9/vc (8).png' },

        ],
        booked: 'Almaty & Baku'
    },
    {
        id: '10',
        author: 'Chintan Gandhi',
        rating: 5.0,
        date: 'July 2024',
        content: `It was a great experience to book a Bali trip through True Deal. True Deal's employees are supportive, and assigned drivers are polite. Our package contains adventure activities and nice places to visit in Bali. Thank you, True Deal, for making a trip awesome.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/10/chintan (1).png' },
            { type: 'image', url: '/GoogleReviews/10/chintan (2).png' },
            { type: 'image', url: '/GoogleReviews/10/chintan (3).png' },
            { type: 'image', url: '/GoogleReviews/10/chintan (4).png' },
            { type: 'image', url: '/GoogleReviews/10/chintan (5).png' },

        ],
        booked: 'Bali'
    },
    {
        id: '11',
        author: 'Swetabh Srivastava',
        rating: 5.0,
        date: 'August 2024',
        content: `It was a great experience to book a Bali trip through True Deal. True Deal's employees are supportive, and assigned drivers are polite. Our package contains adventure activities and nice places to visit in Bali. Thank you, True Deal, for making a trip awesome.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/11/swetabh (1).png' },
            { type: 'image', url: '/GoogleReviews/11/swetabh (2).png' },
            { type: 'image', url: '/GoogleReviews/11/swetabh (3).png' },
            { type: 'image', url: '/GoogleReviews/11/swetabh (4).png' },
            { type: 'image', url: '/GoogleReviews/11/swetabh (5).png' },
        ],
        booked: 'Goa'
    },
    {
        id: '12',
        author: 'Shraddha Jadeja',
        rating: 5.0,
        date: 'August 2024',
        content: `My parents had the best time in Bali with the help of True deal. It was an amazing experience throughout with all the activities and stay planned.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/12/bp (1).png' },
            { type: 'image', url: '/GoogleReviews/12/bp (2).png' },
            { type: 'image', url: '/GoogleReviews/12/bp (3).png' },
            { type: 'image', url: '/GoogleReviews/12/bp (4).png' },
            { type: 'image', url: '/GoogleReviews/12/bp (5).png' },
            { type: 'image', url: '/GoogleReviews/12/bp (6).png' },
        ],
        booked: 'Bali'
    },
    {
        id: '13',
        author: 'Aayushi Shah',
        rating: 5.0,
        date: 'August 2024',
        content: `Our Bali trip was awesome. Aman gupta & Rasid Ali's efforts are incredible. They managed trip very well & we enjoyed a lott.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/13/Screenshot 2025-01-08 143830.png' },
        ],
        booked: 'Bali'
    },
    {
        id: '14',
        author: 'Deepa Gurubasavaiah',
        rating: 5.0,
        date: 'August 2024',
        content: `Thank you for arranging the trip to Bali. It was a smooth transition in each place without any overlap. The team did a great job in co ordinating. It was truly an amazing experience! thank you Rashid and team for doing a grt job!
`,
        media: [
            { type: 'image', url: '/GoogleReviews/14/Screenshot 2025-01-08 150530.png' },
        ],
        booked: 'Bali'
    },
    {
        id: '15',
        author: 'Susovan Nanda',
        rating: 5.0,
        date: 'January 2025',
        content: `We just returned from an amazing trip to Malaysia planned by True deal. The trip was stitched up nicely with detailed itinerary for 7 days in Kualalumpur and Langkawi.

The itinerary was spaced out giving us enough time to explore the city on our own as well as covering all the essential activities. The transports and entries were all on time despite the year end rush.

We could communicate at any time with the local team, who were very helpful and responsive.

The planning and execution was done perfectly keeping us free from any hassle to enjoy the vacation and refresh ourselves into the new year. Thank you Rashid (True Deal) for all the help.

Hope everyone has a great year ahead.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/15/susovan (1).png' },
            { type: 'image', url: '/GoogleReviews/15/susovan (2).png' },
            { type: 'image', url: '/GoogleReviews/15/susovan (3).png' },
            { type: 'image', url: '/GoogleReviews/15/susovan (4).png' },
            { type: 'image', url: '/GoogleReviews/15/susovan (5).png' },
        ],
        booked: 'Malaysia '
    },
    {
        id: '16',
        author: 'Akash Agrawal',
        rating: 5.0,
        date: 'December 2024',
        content: `Had a better experience with True Deal Company
It was an excellent and pleasant experience for food, guides, hotels and a joyful journey. There were some shortcomings due to which I have given 1 star less, which is the time management, mentioning each and every point in time and adding adventure in the journey. to do
Those who want to do adventure can do so and the main point is to plan the trip keeping in mind the age of the people so that people of all ages can enjoy it.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/16/akash (1).png' },
            { type: 'image', url: '/GoogleReviews/16/akash (2).png' },
            { type: 'image', url: '/GoogleReviews/16/akash (3).png' },
            { type: 'image', url: '/GoogleReviews/16/akash (4).png' },
            { type: 'image', url: '/GoogleReviews/16/akash (5).png' },
        ],
        booked: 'Almaty & Baku'
    },
    {
        id: '17',
        author: 'Rishabh Raj',
        rating: 5.0,
        date: 'December 2024',
        content: `I recently booked a family trip to Kashmir through Truedeal, and I must say, the experience was exceptional! From seamless bookings to well-organized itineraries, everything was taken care of with great attention to detail. The accommodations were comfortable, the transportation was prompt and reliable, and the driver was knowledgeable and friendly.

The team was always available to address our queries and ensured we had a hassle-free trip. The stunning landscapes of Kashmir, combined with Truedeals excellent service, made our vacation truly memorable.
I highly recommend Truedeal to anyone looking for a well-planned and delightful travel experience!

Thank you, Truedeal, for an unforgettable trip!
`,
        media: [
            { type: 'image', url: '/GoogleReviews/17/Screenshot 2025-01-08 152252.png' },
        ],
        booked: 'Kashmir'
    },
    {
        id: '18',
        author: 'Rushikesh Bhatt',
        rating: 5.0,
        date: 'December 2024',
        content: `I just finished my couple trip of Shimla - Manali. I booked my whole trip by Truedeal and this company gave me the best facilities with best price. I like to give special credits to Mr.Asif who provide us the best resort with beautiful location and view. All the resorts which were given by Truedeal had best food and rooms facilities. Also Truedeal provided us good quality of car and guide cum driver.
        So I must said that our trip was very beautiful just because of Truedeal facilities and hard work.
        Thanks a lot Mr Asif bhaiya and Truedeal 
`,
        media: [],
        booked: 'Kashmir'
    },
    {
        id: '19',
        author: 'Krishna',
        rating: 5.0,
        date: 'December 2024',
        content: `Thank you to the company Truedeal, especially Mr. Rashid.

Mr. Rashid's expertise in planning our itinerary for a 9-day stay in Bali was phenomenal. Thanks to him, we were able to make the most of every moment and create memories that will last a lifetime.

We highly recommend the company Truedeal to anyone visiting this beautiful island!
`,
        media: [],
        booked: 'Bali'
    },
    {
        id: '20',
        author: 'Amrita S.',
        rating: 5.0,
        date: 'December 2024',
        content: `Trip was well planned by True deal. Got support throughout my Dubai trip. Team is very proactive in providing support at every step of the travel.
`,
        media: [],
        booked: 'Dubai'
    },
    {
        id: '21',
        author: 'Abhijeet Gond',
        rating: 5.0,
        date: 'December 2024',
        content: `
        I recently had the pleasure of planning my trip through Truedeal Travel Agency, and I must say, it was an absolutely wonderful experience! From the initial inquiry to the final goodbye, everything was handled with great professionalism and care.

A special shoutout to Vineet Singh, our tour consultant, who truly went above and beyond to ensure every detail of our journey was perfectly arranged. His in-depth knowledge, prompt responses, and personalized recommendations made all the difference in creating a seamless and memorable trip.

The itinerary was well-organized, accommodations were top-notch, and all the travel arrangements were smooth. Truedeal made sure we could focus on enjoying the experience without worrying about the logistics.

I highly recommend Truedeal Travel Agency to anyone looking for hassle-free and unforgettable travel planning. Thank you, Vineet and the Truedeal team, for making this trip truly special!

Looking forward to booking my next adventure with you.
`,
        media: [],
        booked: 'Bangkok & Pattaya'
    },
    {
        id: '22',
        author: 'Prem Kumar Puri',
        rating: 5.0,
        date: 'December 2024',
        content: `
        Our recent trip to Bali was an absolute delight, all thanks to the seamless arrangements made by Mr. Vineet and Mr. Gaurav. From the very beginning, their professionalism, attention to detail, and personalized service ensured that our journey was hassle-free and enjoyable. They were always available to answer our questions and made sure every aspect of the trip was well-planned.

A special mention goes to our guide and driver Mr. Detria in Bali, who truly made the trip unforgettable. The guide was incredibly knowledgeable, sharing fascinating insights about Balis culture, history, and hidden gems, which enriched our experience. They were not just informative but also warm and friendly, making us feel at home throughout the journey.

Our driver was equally impressive — always punctual, polite, and exceptionally skilled at navigating Balis roads. They ensured our safety and comfort at every step, and their local tips helped us explore Bali in the best possible way.

Together, the guide and driver went above and beyond to make our trip special, catering to our needs with a smile and ensuring we created memories that will last a lifetime.

Thank you, Mr. Vineet and Mr. Gaurav, for such impeccable service and for providing us with such an amazing team in Bali. We highly recommend your agency to anyone planning a trip and will certainly be booking with you again for our future travels!
`,
        media: [],
        booked: 'Bali'
    },
    {
        id: '23',
        author: 'Nivedita Patnaik',
        rating: 5.0,
        date: 'December 2024',
        content: `
        True deal justifies its name by getting the best deals for my travel needs…. End to end perfect planning and execution. Since last 3 years its my only trusted place for my entire family and friends too…. Keep up the good work
`,
        media: [],
        booked: 'Singapore'
    },
    {
        id: '24',
        author: 'Pranav Ramesh',
        rating: 5.0,
        date: 'December 2024',
        content: `
        We had a mixture of good and bad experiences. Finding the driver and  reaching the hotel were smooth and comfortable. Day 1 comprised of visit to to Tanah lot temple and view of the sunset, which is amazing. Day 2 was supposed to be water activities, however the same was removed by the team at the 11th hour (payment included water activities) due to some festival in Bali. We were informed that there won't be any water activities in Bali in this festival duration. But we have seen people doing water activities at Nusa Penida. When enquired, I realised that the cost of every water sports activities are very high. Coming back to Day 2; so the team planned a visit to Garuda Vishnu temple instead, which would have benefited the travel team as the ticket cost are less compared to water activities. My recommendation to include 1 day Ubud day tour was not considered. After walking kilometers under the hot sun in GWT (buggy was included in our package), we went for lunch followed by visit to Uluwatu temple. Kechak dance and view at Uluwatu is really amazing. Day 3 we visited Nusa Penida. The team planned 2 days stay in Nusa Penida. However, our visits to 3 beaches were completed by 0330 pm (for those who didn't understand I will tell you, we just visited every place for taking photo and returned back). Our driver asked us to return within 15-30 min from every site. Our boat to Bali was on next day 4:30 pm. If we had 1 full day of free time, why did the driver rushed everything and completed trip by 03:30. In the hotel we stayed at Nusa Penida, we saw snake falling from the roof top to bed. After wasting 1 day in Nusa Penida (Day 4) we boarded the ferry to Bali port which is close to airport (next day early morning we have our return flight from Bali). From there we travelled 2-3 hrs north and reached Ubud at 09:30 pm. I was amazed with the ambience in Ubud. Beautiful crowd and party vibe everywhere. But our excitement didn't last long we were tired and the street slowly winded up the parties in another 1 -2 hrs. Next day we got up at 5am and left to airport at 6am. Travelled all the way down to south for the airport. As I said earlier, our trip to Bali was a mixture of good and bad experience.
`,
        media: [],
        booked: 'Bali'
    },
    {
        id: '25',
        author: 'Priyanka Singh',
        rating: 5.0,
        date: 'December 2024',
        content: `
        Our recent trip to Thailand was planned and arranged by true deal. It was an unforgettable experience. The travel logistics were seamless throughout the trip. They arranged our trip at affordable prices. I recommend everyone to book their international trips from them. Thank you true deal for crafting such a memorable trip for us. We look forward to travelling with you again!
`,
        media: [],
        booked: 'Thailand'
    },
    {
        id: '26',
        author: 'Rashid Alvi',
        rating: 5.0,
        date: 'December 2024',
        content: `
        It was very supportive and wonderful experience with True Deal. And The Team provide support everywhere until your tour complete and the guidance to aware about the frauds happening in Abroad...
`,
        media: [],
        booked: 'Thailand'
    },
    {
        id: '27',
        author: 'Snehil shrivastava',
        rating: 5.0,
        date: 'September 2024',
        content: `
        Exceptional service from Truedeal from CEO Aman Arora and Mr Vineet singh from the start to finish! The travel company was knowledgeable, friendly, and went above and beyond to ensure our trip was perfect."
`,
        media: [],
        booked: 'Thailand'
    },
    {
        id: '28',
        author: 'Shekhar Bhardwaj',
        rating: 5.0,
        date: 'February 2024',
        content: `
        I couldn't be happier with the service provided by this travel advisor agency! My flight agent Mr.Malik went above and beyond to help me book my international flight, ensuring I got the best deal and smoothest itinerary possible. Their attention to detail and personalized assistance made the entire process stress-free. Highly recommend their services to anyone planning their next adventure
`,
        media: [],
        booked: 'Thailand'
    },
    {
        id: '29',
        author: 'Vaibhav Gupta',
        rating: 5.0,
        date: 'December 2024',
        content: `
        Superb service! Forex delivered to home within 2 hours of booking, express delivery. Kudos! Keep Growing 🤗
`,
        media: [],
        booked: 'Forex Services'
    },
    {
        id: '30',
        author: 'Vishal Verma',
        rating: 5.0,
        date: 'December 2024',
        content: `
        It's staff is very helpful and they provide very nice service and hospitality.
Thanks a lot to Mr. Aman Arora and Vineet Singh to making my trip awesome 👍
Great service keep it up 👍
`,
        media: [],
        booked: 'Dubai'
    },



]

export default function ReviewsPage() {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(-1)
    const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0)

    const openModal = (reviewIndex: number, mediaIndex: number) => {
        setCurrentReviewIndex(reviewIndex)
        setSelectedMediaIndex(mediaIndex)
    }

    const closeModal = () => {
        setSelectedMediaIndex(-1)
    }

    const nextMedia = () => {
        const totalMedia = reviews[currentReviewIndex].media.length
        setSelectedMediaIndex((prev) => (prev + 1) % totalMedia)
    }

    const prevMedia = () => {
        const totalMedia = reviews[currentReviewIndex].media.length
        setSelectedMediaIndex((prev) => (prev - 1 + totalMedia) % totalMedia)
    }

    const MediaPreview = ({ item, onClick }: { item: MediaItem; onClick: () => void }) => {
        if (item.type === 'video') {
            return (
                <div
                    className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                    onClick={onClick}
                >
                    <video
                        src={item.url}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-10 transition-opacity">
                        <PlayIcon className="h-12 w-12 text-white" />
                    </div>
                </div>
            )
        }

        return (
            <div
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={onClick}
            >
                <Image
                    src={item.url}
                    alt="Review media"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
        )
    }

    const MediaModal = () => {
        if (selectedMediaIndex === -1) return null

        const currentMedia = reviews[currentReviewIndex].media[selectedMediaIndex]

        const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
            const video = event.target as HTMLVideoElement
            if (video.muted) {
                video.muted = false
            } else {
                video.muted = true
            }
        }

        return (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                <button
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                    onClick={closeModal}
                >
                    <XMarkIcon className="h-8 w-8" />
                </button>

                <button
                    className="absolute left-4 text-white hover:text-gray-300"
                    onClick={prevMedia}
                >
                    <ChevronLeftIcon className="h-12 w-12" />
                </button>

                <div className="relative h-[80vh] w-[80vw]">
                    {currentMedia.type === 'video' ? (
                        <video
                            src={currentMedia.url}
                            controls
                            className="h-full w-full cursor-pointer"
                            autoPlay
                            muted
                            loop
                            onClick={handleVideoClick}
                            playsInline
                        />
                    ) : (
                        <Image
                            src={currentMedia.url}
                            alt={`Review media ${selectedMediaIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    )}
                </div>

                <button
                    className="absolute right-4 text-white hover:text-gray-300"
                    onClick={nextMedia}
                >
                    <ChevronRightIcon className="h-12 w-12" />
                </button>

                <div className="absolute bottom-4 text-white text-center w-full">
                    {selectedMediaIndex + 1} / {reviews[currentReviewIndex].media.length}
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative w-full h-[300px] mb-12 rounded-lg overflow-hidden mt-10">
                <Image
                    src="/UGCImages/HD IMAGES/Finland/horizontal/3.jpg"
                    alt="Reviews Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-yellow-400">
                    <h1 className="text-4xl font-bold mb-4">TRUEDEAL REVIEWS</h1>
                    <p className="text-xl">Endless real stories from travellers like you</p>
                </div>
            </div>

            <div className="space-y-12">
                {reviews.map((review, reviewIndex) => (
                    <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4 flex items-center justify-center">
                                {review.media.length > 0 ? (
                                    <Image
                                        src={review.media[0].url}
                                        alt={review.author}
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <span className="text-gray-600 font-semibold text-lg">
                                        {review.author.split(' ').map(name => name[0]).join('')}
                                    </span>
                                )}
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{review.author}</h3>
                                <div className="flex items-center">
                                    <span className="text-green-500 flex items-center">
                                        {review.rating}
                                        <StarIcon className="h-5 w-5 ml-1" />
                                    </span>
                                    <span className="text-gray-500 ml-2">• {review.date}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-gray-600 mb-2">Booked: {review.booked}</p>
                            <p className="text-gray-800 whitespace-pre-line">{review.content}</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                            {review.media.map((item, mediaIndex) => (
                                <MediaPreview
                                    key={mediaIndex}
                                    item={item}
                                    onClick={() => openModal(reviewIndex, mediaIndex)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <MediaModal />
        </div>
    )
}
