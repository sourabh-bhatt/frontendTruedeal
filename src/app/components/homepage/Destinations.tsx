'use client';

import { useState, useEffect } from 'react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

type Destination = {
    name: string;
    price: number;
    image: string;
    packages: number;
};

const destinations: { [key: string]: Destination[] } = {
    asia: [
        { name: "Thailand", price: 25000, image: "/IMAGES/thailand/2/1.webp", packages: 4 },
        { name: "Dubai", price: 54000, image: "/IMAGES/dubai/1080 x 1274/4.webp", packages: 3 },
        { name: "Singapore", price: 66000, image: "/IMAGES/singapore/1/1.webp", packages: 5 },
        { name: "Bali", price: 19500, image: "/IMAGES/bali/1/4.webp", packages: 4 },
    ],
    europe: [
        { name: "Indonesia", price: 55500, image: "/IMAGES/Indonesia/2/4.webp", packages: 6 },
        { name: "Japan", price: 170500, image: "/IMAGES/japan/2/3.webp", packages: 4 },
        { name: "Hongkong", price: 74680, image: "/IMAGES/Hongkong/2/3.webp", packages: 5 },
        { name: "China", price: 120000, image: "/IMAGES/china/1/3.webp", packages: 6 },
    ]
}

export default function Destination() {
    const [asiaIndex, setAsiaIndex] = useState(0)
    const [europeIndex, setEuropeIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setAsiaIndex((prevIndex) => (prevIndex + 1) % destinations.asia.length)
            setEuropeIndex((prevIndex) => (prevIndex + 1) % destinations.europe.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="py-8 md:py-16 bg-white text-center font-poppins">
            <div className="mb-8 md:mb-12 px-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Our Proposals
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    OUR{" "}
                    <span className="relative inline-block">
                        <span>DESTINATIONS</span>
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"></span>
                    </span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16 px-4 lg:px-0">
                <div className="flex flex-col md:flex-row lg:flex-nowrap gap-8 lg:gap-4">
                    <DestinationCard continent="Asia" destinations={destinations.asia} currentIndex={asiaIndex} />
                    <div className="space-y-4">
                        {destinations.asia.map((dest) => (
                            <DestinationSubCard key={dest.name} {...dest} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-nowrap gap-8 lg:gap-4">
                    <DestinationCard continent="Europe" destinations={destinations.europe} currentIndex={europeIndex} />
                    <div className="space-y-4">
                        {destinations.europe.map((dest) => (
                            <DestinationSubCard key={dest.name} {...dest} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function DestinationCard({ continent, destinations, currentIndex }: {
    continent: string,
    destinations: Destination[],
    currentIndex: number
}) {
    const router = useRouter()
    const currentDest = destinations[currentIndex]

    return (
        <div
            className="relative bg-gray-800 rounded-lg overflow-hidden text-left w-full md:w-72 h-64 md:h-96 shadow-lg cursor-pointer"
            onClick={() => router.push(`/destinations/${currentDest.name.toLowerCase()}`)}
        >
            <Image
                src={currentDest.image}
                alt={currentDest.name}
                fill
                className="object-cover opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-1">
                    <span className="text-4xl absolute bottom-40 md:bottom-[20rem]">🗼</span>
                    <h3 className="text-xl font-bold">{continent}</h3>
                </div>
                <p className="text-sm">{currentDest.packages} Packages</p>
            </div>
        </div>
    )
}

function DestinationSubCard({ name, price, image }: Destination) {
    const router = useRouter()

    return (
        <div
            className="flex items-center rounded-lg shadow-lg w-full md:w-72 h-20 bg-white cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => router.push(`/destinations/${name.toLowerCase()}`)}
        >
            <div className="rounded-l-lg overflow-hidden w-20 h-20 flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-grow px-4">
                <h4 className="text-gray-800 font-semibold">{name}</h4>
                <div className="text-white text-sm font-semibold rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] px-3 py-1 inline-block mt-1">
                    FROM {price} ₹
                </div>
            </div>
            <ChevronRight className="text-gray-400 mr-4" />
        </div>
    )
}