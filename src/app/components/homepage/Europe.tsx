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
        name: 'France',
        price: '29,999',
        image: '/IMAGES/Shimla/2/1.webp',
        slug: 'france'
    },
    {
        name: 'Austria',
        price: '12,999',
        image: '/IMAGES/Shimla/2/2.webp',
        slug: 'austria'
    },
    {
        name: 'Netherlands',
        price: '24,499',
        image: '/IMAGES/Shimla/2/3.webp',
        slug: 'netherlands'
    },
    {
        name: 'Germany',
        price: '7,999',
        image: '/IMAGES/Shimla/2/4.webp',
        slug: 'germany'
    },
    {
        name: 'Greece',
        price: '12,999',
        image: '/IMAGES/Shimla/2/1.webp',
        slug: 'greece'
    },
    {
        name: 'Switzerland',
        price: '12,999',
        image: '/IMAGES/Shimla/2/2.webp',
        slug: 'switzerland'
    },
    {
        name: 'Spain',
        price: '12,999',
        image: '/IMAGES/Shimla/2/3.webp',
        slug: 'spain'
    },
    {
        name: 'Italy',
        price: '12,999',
        image: '/IMAGES/Shimla/2/4.webp',
        slug: 'italy'
    },
    {
        name: 'France',
        price: '29,999',
        image: '/IMAGES/Shimla/2/1.webp',
        slug: 'france'
    }

]

export default function Europe() {
    const router = useRouter()

    const handleCardClick = (slug: string) => {
        router.push(`/destinations/${slug}`)
    }

    return (
        <section className="relative w-full mb-20 md:mb-32 lg:mb-24">
            <div className="h-[40vh] md:h-[45vh] lg:h-[50vh] px-2 md:px-4 lg:px-6">
                <div className="relative w-full max-w-[1200px] mx-auto h-full rounded-2xl overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="https://res.cloudinary.com/dwwyljy3m/video/upload/v1736239820/Europe_xfcadt.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

                    <div className="relative z-10 h-full flex flex-col px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 max-w-[1400px] mx-auto">
                        <div className="text-white">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">Explore Europe</h1>
                            <p className="text-base md:text-lg font-light">A place where you can find the best of world</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 translate-y-1/2">
                <div className="px-2 md:px-4 lg:px-6 max-w-[1200px] mx-auto">
                    <div className="relative">
                        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 md:pb-6 snap-x snap-mandatory scrollbar-hide">
                            {destinations.map((destination, index) => (
                                <motion.div
                                    key={`${destination.name}-${index}`}
                                    className="relative w-[130px] md:w-[140px] lg:w-[150px] h-[180px] md:h-[200px] lg:h-[220px] rounded-xl overflow-hidden flex-shrink-0 group shadow-lg cursor-pointer snap-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => handleCardClick(destination.slug)}
                                >
                                    <Image
                                        src={destination.image}
                                        alt={destination.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
                                    <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-3">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-0.5">
                                            {destination.name}
                                        </h3>
                                        <p className="text-xs text-white/90">
                                            Starting Price Rs. {destination.price}/-
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}