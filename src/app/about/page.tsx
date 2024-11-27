// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export default function TravelWebsite() {
//     return (
//         <div>
//             <section className="relative h-96">
//                 <Image
//                     src="/Assets/NavbarImages/bgAerro.png"
//                     alt="Airplane flying above clouds"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//                 <div className="relative container mx-auto px-4 h-full flex items-center">
//                     <div className="max-w-2xl text-white">
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                             Discover Your Next Adventure
//                         </h2>
//                         <p className="text-xl mb-8">
//                             Experience the ultimate travel journey with Truedeal
//                         </p>
//                         <Button className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
//                             Book Now
//                         </Button>
//                     </div>
//                 </div>
//             </section>
//             {/* Section 2 */}

//             <div className="container mx-auto px-4 py-12">
//                 <div className="grid lg:grid-cols-2 gap-8 items-center">
//                     {/* Left Column */}
//                     <div className="space-y-6">
//                         <div className="max-w-[200px]">
//                             <h1 className="text-3xl font-bold tracking-tight font-poppins">TRUEDEAL</h1>
//                             <div className="h-1 w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]" />
//                         </div>
//                         <p className="text-gray-600 leading-relaxed max-w-xl font-poppins">
//                             We, at TrueDeal are committed to providing exceptional travel services and ensuring that
//                             every customer has an unforgettable and trouble-free trip. Our travel packages are
//                             tailored to meet all of your travel needs and we manage your trips from start to finish.
//                             We specialise in designing personalised itineraries and experiences for individuals,
//                             groups, and travel agents. So, we promise to provide you with a trip full of memories,
//                             fun, and adventure!
//                         </p>
//                     </div>

//                     {/* Right Column */}
//                     <div className="space-y-8">
//                         <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins">
//                             We Provide the{" "}
//                             <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Best Deal</span> For Your{" "}
//                             <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Ultimate Travel</span>{" "}
//                             <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Experience</span>
//                         </h2>

//                         <div className="bg-white rounded-3xl p-4 shadow-lg border border-blue">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="text-center">
//                                     <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">3</div>
//                                     <div className="text-gray-800 font-semibold font-poppins">
//                                         + Decades of<br />Experience
//                                     </div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">1M</div>
//                                     <div className="text-gray-800 font-semibold font-poppins">
//                                         + Happy<br />Customers
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// fix

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Target, Eye } from 'lucide-react'
import Services from "./Services"
import Founder from "../components/common/Founder";


export default function TravelWebsite() {
    return (
        <div>
            <section className="relative h-96">
                <Image
                    src="/Assets/NavbarImages/bgAerro.png"
                    alt="Airplane flying above clouds"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Discover Your Next Adventure
                        </h2>
                        <p className="text-xl mb-8">
                            Experience the ultimate travel journey with Truedeal
                        </p>
                        <Button className="px-2 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Book Now
                        </Button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="max-w-[200px]">
                            <h1 className="text-3xl font-bold tracking-tight font-poppins">TRUEDEAL</h1>
                            <div className="h-1 w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]" />
                        </div>
                        <p className="text-gray-600 leading-relaxed max-w-xl font-poppins">
                            We, at TrueDeal are committed to providing exceptional travel services and ensuring that
                            every customer has an unforgettable and trouble-free trip. Our travel packages are
                            tailored to meet all of your travel needs and we manage your trips from start to finish.
                            We specialise in designing personalised itineraries and experiences for individuals,
                            groups, and travel agents. So, we promise to provide you with a trip full of memories,
                            fun, and adventure!
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins">
                            We Provide the{" "}
                            <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Best Deal</span> For Your{" "}
                            <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Ultimate Travel</span>{" "}
                            <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Experience</span>
                        </h2>

                        <div className="bg-white rounded-3xl p-4 shadow-lg border border-blue">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">3</div>
                                    <div className="text-gray-800 font-semibold font-poppins">
                                        + Decades of<br />Experience
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">1M</div>
                                    <div className="text-gray-800 font-semibold font-poppins">
                                        + Happy<br />Customers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4 py-16">
                    {/* Mission */}
                    <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center mb-16">
                        <div className="flex justify-center">
                            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                <Target className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4 font-poppins">
                                MISSION
                                <div className="h-1 w-24 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mt-2" />
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-poppins">
                                TrueDeal is dedicated to providing exceptional travel experiences in Thailand and hassle free foreign
                                exchange services through personalised services for everyone and in-depth knowledge in the business. With
                                our DMC, we strive to create memorable and authentic travel experiences that exceed your expectations while
                                making sure everything is tailored to fit your needs. Also we promote sustainable tourism practices.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="grid md:grid-cols-[200px,1fr] gap-8 items-center">
                        <div className="flex justify-center">
                            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                <Eye className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4 font-poppins">
                                VISION
                                <div className="h-1 w-24 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mt-2" />
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-poppins">
                                TrueDeal aims to be nothing less than the best Thailand-based travel DMC, known for delivering
                                unparalleled travel experiences that are customized to each client&apos;s unique needs and interests. We envision a
                                future where we are recognized as a trusted partner for those looking to explore the beauty and culture of
                                Thailand, while also making a positive impact on the local communities we visit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <Founder />
        </div>
    )
}

