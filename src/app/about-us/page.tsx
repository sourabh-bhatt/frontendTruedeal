import React from 'react';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Target, Eye } from 'lucide-react'
import Services from "./Services"
import Founder from "../components/common/Founder";
// import NumberTicker from "@/components/magicui/number-ticker";
import NumberTicker from "../../components/ui/number-ticker"

const AboutPage: React.FC = () => {
    return (
        <div>
            <section className="relative h-96">
                <Image
                    src="/Assets/About/bannerFlight.webp"
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
                            <h1 className="text-5xl font-bold tracking-tight font-poppins">TRUEDEAL</h1>
                            <div className="h-1 w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]" />
                        </div>
                        <p className="text-gray-600 leading-relaxed max-w-xl font-poppins">
                        Welcome to TrueDeal, your ultimate travel companion for 
                        unforgettable journeys and unbeatable deals. As a premier 
                        travel agency, we specialize in providing customized vacation 
                        packages, unforgettable travel experiences, and exceptional 
                        customer service to adventurers of all types. Whether you are 
                        planning a luxurious getaway, a family vacation, or a 
                        thrilling solo Journey, we have the perfect travel solutions 
                        for you.
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

                        <div className="relative">
                            {/* Gradient shadow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-3xl blur-xl opacity-50 -z-10"></div>

                            <div className="relative">
                                {/* Gradient shadow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-3xl blur-xl opacity-50 -z-10"></div>

                                {/* Card content */}
                                <div className="bg-white rounded-3xl p-4 shadow-lg border relative z-10">
                                    <div className="grid grid-cols-2 gap-4 relative">
                                        {/* Vertical gradient line */}
                                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#017ae3] to-[#00f6ff]"></div>

                                        <div className="text-center">
                                            <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">

                                                <NumberTicker className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold" value={40} />
                                            </div>
                                            <div className="text-gray-800 font-semibold font-poppins">
                                                + Years of<br />Experience
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">

                                                <NumberTicker className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold" value={10000} /></div>
                                            <div className="text-gray-800 font-semibold font-poppins">
                                                + Happy<br />Customers
                                            </div>
                                        </div>
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
                                OUR MISSION
                                <div className="h-1 w-24 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mt-2" />
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-poppins">
                            Our mission at TrueDeal is simple to provide 
                            you with affordable, hassle-free, and personalized 
                            travel experiences. We believe that travel should be 
                            accessible to everyone, and thats why we focus on 
                            delivering cost-effective solutions without compromising 
                            quality. We are dedicated to helping you find the best 
                            travel deals, discounted vacation packages, and tailored 
                            travel plans that meet your unique preferences.
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
                                OUR VISION
                                <div className="h-1 w-24 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mt-2" />
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-poppins">
                            We are committed to delivering top-tier travel packages, hotels to excursions and local experiences, all while maintaining the highest level of customer satisfaction. With a strong focus on quality, reliability, and integrity, TrueDeal continues to grow as a leader in the travel industry, shaping the future of travel one experience at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <Founder />
        </div>
    );
};

export default AboutPage;

