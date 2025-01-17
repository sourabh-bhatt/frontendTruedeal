'use client'

import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

// Using the first few reviews from the reviews page
const featuredReviews = [
    {
        id: '1',
        author: 'Nikita Salunke',
        rating: 4.0,
        date: '15 Dec 2024',
        content: 'Great Service. We are grateful to the True Deal team for organizing our 2nd trip this year. They assisted us every step of the way, from booking flights and exchanging money to arranging all aspects of our trip to Maldives...',
        image: '/GoogleReviews/1/Screenshot 2025-01-07 031446.png',
        booked: 'Maldives'
    },
    {
        id: '2',
        author: 'Kanika Chadha',
        rating: 5.0,
        date: '06 Nov 2023',
        content: 'We had an amazing experience booking our package for Kashmir with Truedeal. Mr. Vineet Singh and Mr. Aman Arora were extremely helpful and responsive throughout the entire process...',
        image: '/GoogleReviews/2/IMG-20250103-WA0046.jpg',
        booked: 'Kashmir'
    },
    {
        id: '3',
        author: 'Shubham Tripathi',
        rating: 5.0,
        date: '10 Nov 2024',
        content: 'Excellent Goa Trip with TrueDeal Travel! I recently had the pleasure of booking my Goa trip with TrueDeal Travel Company, and I must say, it was an unforgettable experience!...',
        image: '/GoogleReviews/3/shubham (1).png',
        booked: 'Goa'
    }
]

export default function ReviewsGlimpse() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        What Our Travelers Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Real experiences from our happy travelers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={review.image}
                                    alt={`${review.author}'s trip`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-lg">{review.author}</h3>
                                    <div className="flex items-center">
                                        <span className="text-green-500 font-medium mr-1">
                                            {review.rating}
                                        </span>
                                        <StarIcon className="h-5 w-5 text-green-500" />
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">
                                    Booked: {review.booked}
                                </p>
                                <p className="text-gray-800 line-clamp-3 mb-4">
                                    {review.content}
                                </p>
                                <p className="text-gray-500 text-sm">{review.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/reviews"
                        className="inline-block px-8 py-3 rounded-lg font-semibold text-white 
                        bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 
                        transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View All Reviews
                    </Link>
                </div>
            </div>
        </section>
    )
} 