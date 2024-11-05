// import { FaExchangeAlt, FaCreditCard, FaGlobe } from "react-icons/fa";

// export default function Forex() {
//     return (
//         <div className="w-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
//             <div className="max-w-7xl mx-auto flex justify-around py-4">
//                 <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
//                     Need <br />
//                     <span className="text-4xl md:text-5xl font-extrabold text-white">Foreign <br /></span>
//                     <span className="underline text-4xl md:text-5xl font-extrabold text-white">Currency?</span>
//                 </h1>

//                 {/* Foreign Currency Exchange */}
//                 <div className="flex flex-col items-center space-y-2 mt-8">
//                     <FaExchangeAlt className="text-3xl" />
//                     <p className="text-center font-semibold">Foreign Currency Exchange</p>
//                 </div>

//                 {/* Forex Card */}
//                 <div className="flex flex-col items-center space-y-2 mt-8">
//                     <FaCreditCard className="text-3xl" />
//                     <p className="text-center font-semibold">Forex Card</p>
//                 </div>

//                 {/* Remittance */}
//                 <div className="flex flex-col items-center space-y-2 mt-8">
//                     <FaGlobe className="text-3xl" />
//                     <p className="text-center font-semibold">Remittance</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// "use client"

// import { FaExchangeAlt, FaCreditCard, FaGlobe } from "react-icons/fa"
// import Image from 'next/image'
// import forexBanner from '../../../../public/Assets/Forex/forexBanner.jpg' // Adjust the path as necessary

// export default function Forex() {
//     return (
//         <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 text-white">
//             {/* Background Image */}
//             <Image
//                 src={forexBanner}
//                 alt="Forex Background"
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute top-0 left-0 z-0 opacity-30"
//             />

//             {/* Content Container */}
//             <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col items-center justify-center py-4">
//                 <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-center">
//                     Need <br />
//                     <span className="text-4xl md:text-5xl font-extrabold text-white">Foreign <br /></span>
//                     <span className="underline text-4xl md:text-5xl font-extrabold text-white">Currency?</span>
//                 </h1>

//                 {/* Flex container for the service options */}
//                 <div className="flex space-x-8 mt-8">
//                     {/* Foreign Currency Exchange */}
//                     <div className="flex flex-col items-center">
//                         <FaExchangeAlt className="text-3xl mb-2" />
//                         <p className="text-center font-semibold">Foreign Currency Exchange</p>
//                     </div>

//                     {/* Forex Card */}
//                     <div className="flex flex-col items-center">
//                         <FaCreditCard className="text-3xl mb-2" />
//                         <p className="text-center font-semibold">Forex Card</p>
//                     </div>

//                     {/* Remittance */}
//                     <div className="flex flex-col items-center">
//                         <FaGlobe className="text-3xl mb-2" />
//                         <p className="text-center font-semibold">Remittance</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// fixxes:

"use client"

import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { CircleDollarSign, CreditCard, Globe } from "lucide-react"

export default function Forex() {
    return (
        <div className="w-full">
            <div className="relative h-[200px] overflow-hidden bg-gradient-to-r from-violet-600 to-red-600">
                {/* Background with reduced opacity */}
                <div className="absolute inset-0 bg-[url('/Assets/Forex/forexBanner.jpg')] bg-cover bg-center opacity-20" />

                {/* Content Container */}
                <div className="relative h-full max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between h-full">
                        {/* Left side - Text */}
                        <div className="flex flex-col ml-[8rem]">
                            <h1 className="text-white space-y-1">
                                <span className="block text-2xl font-medium">NEED</span>
                                <span className="block text-3xl font-bold">FOREIGN</span>
                                <span className="block text-3xl font-bold border-b-2 border-white">CURRENCY?</span>
                            </h1>
                        </div>

                        {/* Right side - Services */}
                        <div className="flex items-center gap-12 mr-[20rem]">
                            {/* Foreign Currency Exchange */}
                            <div className="flex flex-col items-center gap-3 text-white">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <CircleDollarSign className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-center whitespace-nowrap">
                                    Foreign Currency<br />Exchange
                                </p>
                            </div>

                            {/* Forex Card */}
                            <div className="flex flex-col items-center gap-3 text-white">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <CreditCard className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-center">
                                    Forex Card
                                </p>
                            </div>

                            {/* Remittance */}
                            <div className="flex flex-col items-center gap-3 text-white">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <Globe className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-center">
                                    Remittance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}