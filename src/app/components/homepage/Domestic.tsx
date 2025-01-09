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
        image: '/UGCImages/Hd images2/shimla/vertical/1.webp',
        slug: 'amritsar_to_shimla'
    },
    {
        name: 'Bhutan',
        price: '12,999',
        image: '/UGCImages/HD IMAGES/Bhutan/vertical/4.png',
        slug: 'bhutan'
    },
    {
        name: 'Kashmir',
        price: '24,499',
        image: '/UGCImages/Hd images2/kashmir/vertical/3.webp',
        slug: 'kashmir'
    },
    {
        name: 'Sikkim',
        price: '7,999',
        image: '/UGCImages/Hd images2/sikkim/vertical/2.webp',
        slug: 'sikkim'
    },
    {
        name: 'Punjab',
        price: '12,999',
        image: '/UGCImages/folder3/punjab/vertical/3.webp',
        slug: 'punjab'
    },
    {
        name: 'Himanchal Pradesh',
        price: '12,999',
        image: '/UGCImages/folder3/himachal pradesh/vertical/3.webp',
        slug: 'himachal'
    },
]

export default function Domestic() {
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
                        playsInline
                        webkit-playsinline="true"
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="https://res.cloudinary.com/dwwyljy3m/video/upload/v1735911751/india_dooqfo.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

                    <div className="relative z-10 h-full flex flex-col px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 max-w-[1400px] mx-auto">
                        <div className="text-white">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">Explore India</h1>
                            <p className="text-base md:text-lg font-light">A Journey Through Time, Colour And Culture</p>
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
                                className="relative w-[140px] md:w-[150px] lg:w-[160px] h-[200px] md:h-[220px] lg:h-[240px] rounded-2xl overflow-hidden flex-shrink-0 group shadow-xl cursor-pointer"
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