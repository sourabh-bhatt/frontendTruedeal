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

Special mention to Rashid, the representative who handled my booking. His professionalism, expertise, and warm demeanor made the entire process hassle-free. Rashid's recommendations for accommodations, activities, and local experiences were spot-on, ensuring we made the most of our trip.

The arrangements made by TrueDeal Travel were impeccable:

• Comfortable and clean accommodations at Zuri whitesand and Novotel condolim
• Timely transportation and pickups
• Well-planned itinerary with ample leisure time

Rashid's dedication and responsiveness ensured that all our needs were met, and we faced no issues during the trip.

Highly Recommended!

If you're planning a trip to Goa or anywhere else, look no further than TrueDeal Travel and Rashid. Their exceptional service and attention to detail will make your journey truly memorable.

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
            { type: 'image', url: '/GoogleReviews/1/Screenshot 2025-01-07 031446.png' },
        ],
        booked: 'Maldives'
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
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-10">TRUEDEAL REVIEWS</h1>
                <p className="text-xl text-gray-600">Endless real stories from travellers like you</p>
            </div>

            <div className="space-y-12">
                {reviews.map((review, reviewIndex) => (
                    <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                                <Image
                                    src={review.media[0].url}
                                    alt={review.author}
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
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
