'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, Clock } from 'lucide-react';
import { groupToursList } from '@/data/groupTours';

import ChardhamYatra from '@/app/chardhamYatra/page';
import FixedDepartures from '@/app/components/fd/page';
import Gallery from '@/app/components/homepage/Gallery';
// import WallOfLove from '@/app/components/homepage/Ugc';
import Sponsors from '@/app/components/Ad/Sponsers';
import ReviewsGlimpse from '@/app/components/homepage/ReviewsGlimpse';

export default function GroupTours() {
    return (
        <div className="min-h-screen bg-gray-50 mt-20">
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                    Group Tours
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupToursList.map((tour) => (
                        <Link
                            key={tour.id}
                            href={`/group-tours/${tour.id}`}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={tour.image}
                                    alt={tour.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {tour.description}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{tour.startDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{tour.duration.days} Days</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Users className="w-4 h-4" />
                                        <span>{tour.groupSize}</span>
                                    </div>
                                    <div className="text-lg font-bold text-[#017ae3]">
                                        ₹{tour.price.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                
                <ChardhamYatra />
                <FixedDepartures />
                <Gallery />
                {/* <WallOfLove /> */}
                <Sponsors />
                <ReviewsGlimpse />
            </main>
        </div>
    );
}