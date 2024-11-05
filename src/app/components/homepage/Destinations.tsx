// import Image from "next/image";

// export default function Destination() {
//     return (
//         <div className="py-16 bg-white text-center">
//             {/* Heading */}
//             <div className="mb-12">
//                 <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
//                     Our Proposals
//                 </h3>
//                 <h2 className="text-4xl font-bold text-gray-800">
//                     Our <span className="text-pink-500 underline">Destinations</span>
//                 </h2>
//             </div>

//             {/* Destination Cards Container */}
//             <div className="flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-8">
//                 {/* Asia Card */}
//                 <div className="relative bg-gray-800 rounded-lg overflow-hidden text-left w-72 h-96 shadow-lg">
//                     <Image
//                         src="/Assets/DestinationsImage/1.jpg"
//                         alt="Asia"
//                         width={288} // Exact width
//                         height={384} // Exact height
//                         className="object-cover opacity-80"
//                     />
//                     <div className="absolute inset-0 bg-black opacity-30"></div>
//                     <div className="absolute bottom-4 left-4 text-white">
//                         <div className="flex items-center space-x-2 mb-1">
//                             <span className="text-4xl absolute bottom-[20rem]">🗼</span>
//                             <h3 className="text-xl font-bold">Asia</h3>
//                         </div>
//                         <p className="text-sm">4 Packages</p>
//                     </div>
//                 </div>

//                 {/* Asia Sub-cards */}
//                 <div className="space-y-10">
//                     <DestinationSubCard name="Singapore" price="8000" image="/Assets/DestinationsImage/1.jpg" />
//                     <DestinationSubCard name="Japan" price="8000" image="/Assets/DestinationsImage/8.jpg" />
//                     <DestinationSubCard name="Korea" price="8000" image="/Assets/DestinationsImage/4.jpg" />
//                 </div>

//                 {/* Europe Card */}
//                 <div className="relative bg-gray-800 rounded-lg overflow-hidden text-left w-72 h-96 shadow-lg">
//                     <Image
//                         src="/Assets/DestinationsImage/8.jpg"
//                         alt="Europe"
//                         width={288}
//                         height={384}
//                         className="object-cover opacity-80"
//                     />
//                     <div className="absolute inset-0 bg-black opacity-30"></div>
//                     <div className="absolute bottom-4 left-4 text-white">
//                         <div className="flex items-center space-x-2 mb-1">
//                             <span className="text-4xl absolute bottom-[20rem]">🗼</span>
//                             <h3 className="text-xl font-bold">Europe</h3>
//                         </div>
//                         <p className="text-sm">4 Packages</p>
//                     </div>
//                 </div>

//                 {/* Europe Sub-cards */}
//                 <div className="space-y-10">
//                     <DestinationSubCard name="Paris" price="8000" image="/Assets/DestinationsImage/3.jpg" />
//                     <DestinationSubCard name="Rome" price="8000" image="/Assets/DestinationsImage/7.jpg" />
//                     <DestinationSubCard name="London" price="8000" image="/Assets/DestinationsImage/2.jpg" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// function DestinationSubCard({ name, price, image }) {
//     return (
//         <div className="flex space-x-4 items-center rounded-lg p-2 shadow-lg w-72 h-24 bg-white">
//             {/* Image Section */}
//             <div className=" rounded-lg overflow-hidden w-20 h-20 flex-shrink-0">
//                 <Image
//                     src={image}
//                     alt={name}
//                     width={80}  // Exact width
//                     height={80} // Exact height
//                     className="object-cover"
//                 />
//             </div>

//             {/* Text Section */}
//             <div className="flex flex-col justify-center text-left">
//                 <h4 className="text-gray-800 font-semibold text-lg">{name}</h4>
//                 <div className="text-white font-bold rounded-full bg-red-500 px-3 py-1 inline-block mt-2">
//                     From {price} ₹
//                 </div>
//             </div>
//         </div>
//     );
// }

// fix

'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const destinations = {
    asia: [
        { name: "Thailand", price: 8000, image: "/Assets/DestinationsImage/1.jpg", packages: 4 },
        { name: "Indonesia", price: 8000, image: "/Assets/DestinationsImage/8.jpg", packages: 3 },
        { name: "Bali", price: 8000, image: "/Assets/DestinationsImage/4.jpg", packages: 5 },

    ],
    europe: [
        { name: "Switzerland", price: 8000, image: "/Assets/DestinationsImage/3.jpg", packages: 6 },
        { name: "Vietnam", price: 8000, image: "/Assets/DestinationsImage/7.jpg", packages: 4 },
        { name: "Croatia", price: 8000, image: "/Assets/DestinationsImage/2.jpg", packages: 5 },

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
        <div className="py-16 bg-white text-center">
            <div className="mb-12">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Our Proposals
                </h3>
                <h2 className="text-4xl font-bold text-gray-800">
                    Our <span className="text-pink-500 underline">Destinations</span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-8">
                <DestinationCard continent="Asia" destinations={destinations.asia} currentIndex={asiaIndex} />
                <div className="space-y-10">
                    {destinations.asia.map((dest, index) => (
                        <DestinationSubCard key={dest.name} {...dest} />
                    ))}
                </div>

                <DestinationCard continent="Europe" destinations={destinations.europe} currentIndex={europeIndex} />
                <div className="space-y-10">
                    {destinations.europe.map((dest, index) => (
                        <DestinationSubCard key={dest.name} {...dest} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function DestinationCard({ continent, destinations, currentIndex }) {
    const router = useRouter()
    const currentDest = destinations[currentIndex]

    return (
        <div
            className="relative bg-gray-800 rounded-lg overflow-hidden text-left w-72 h-96 shadow-lg cursor-pointer"
            onClick={() => router.push(`/destinations/${currentDest.name.toLowerCase()}`)}
        >
            <Image
                src={currentDest.image}
                alt={currentDest.name}
                width={288}
                height={384}
                className="object-cover opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-1">
                    <span className="text-4xl absolute bottom-[20rem]">🗼</span>
                    <h3 className="text-xl font-bold">{continent}</h3>
                </div>
                <p className="text-sm">{currentDest.packages} Packages</p>
            </div>
        </div>
    )
}

function DestinationSubCard({ name, price, image }) {
    const router = useRouter()

    return (
        <div
            className="flex space-x-4 items-center rounded-lg p-2 shadow-lg w-72 h-24 bg-white cursor-pointer"
            onClick={() => router.push(`/destinations/${name.toLowerCase()}`)}
        >
            <div className="rounded-lg overflow-hidden w-20 h-20 flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    width={80}
                    height={80}
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-center text-left">
                <h4 className="text-gray-800 font-semibold text-lg">{name}</h4>
                <div className="text-white font-bold rounded-full bg-red-500 px-3 py-1 inline-block mt-2">
                    From {price} ₹
                </div>
            </div>
            <ChevronRight className="text-gray-400" />
        </div>
    )
}