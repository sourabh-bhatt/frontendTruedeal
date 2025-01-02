'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Destination {
    name: string
    price: string
    image: string
    slug: string
}

const destinations: Destination[] = [
    {
        name: 'Shimla',
        price: '29,999',
        image: '/IMAGES/Shimla/2/1.webp',
        slug: 'amritsar_to_shimla'
    },
    {
        name: 'Bhutan',
        price: '12,999',
        image: '/IMAGES/Shimla/2/2.webp',
        slug: 'bhutan'
    },
    {
        name: 'Kashmir',
        price: '24,499',
        image: '/IMAGES/Shimla/2/3.webp',
        slug: 'kashmir'
    },
    {
        name: 'Sikkim',
        price: '7,999',
        image: '/IMAGES/Shimla/2/4.webp',
        slug: 'sikkim'
    },
    {
        name: 'Punjab',
        price: '12,999',
        image: '/IMAGES/Shimla/2/1.webp',
        slug: 'punjab'
    },
    {
        name: 'Himanchal Pradesh',
        price: '12,999',
        image: '/IMAGES/Shimla/2/2.webp',
        slug: 'himachal'
    },
]

export default function Domestic() {
    const router = useRouter()

    const handleCardClick = (slug: string) => {
        router.push(`/destinations/${slug}`)
    }

    return (
        <section className="relative w-full mb-40 md:mb-60 lg:mb-40">
            <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] px-4 md:px-6 lg:px-8">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821203/indian_places_fqvnzx.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

                    <div className="relative z-10 h-full flex flex-col px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12 max-w-[1400px] mx-auto">
                        <div className="text-white">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">Explore India</h1>
                            <p className="text-lg md:text-xl font-light mb-4 md:mb-6">A Journey Through Time, Colour And Culture</p>
                            <button className="px-6 md:px-8 py-2 md:py-2.5 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-500 transition-colors text-sm">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
                <div className="relative">
                    <div className="flex gap-3 md:gap-4 lg:gap-5 overflow-x-auto pb-4 md:pb-6 lg:justify-center scrollbar-hide">
                        {destinations.map((destination, index) => (
                            <motion.div
                                key={`${destination.name}-${index}`}
                                className="relative w-[160px] md:w-[170px] lg:w-[180px] h-[240px] md:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden flex-shrink-0 group shadow-xl cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1
                                }}
                                onClick={() => handleCardClick(destination.slug)}
                            >
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                        {destination.name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-white/90">
                                        Starting Price Rs. {destination.price}/-
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}