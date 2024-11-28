"use client";

import { Filter } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Assets/HeroSectionImages/heroBg.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-white px-4 sm:px-8 md:px-20">
                <h1 className="text-xl sm:text-2xl md:text-3xl mb-2 ml-[8%] mt-[4%] sm:mt-[2%]">
                    <span className='font-poppins font-semibold'>Welcome to the beta release of</span>{' '}
                    <span className='font-poppins font-bold'>Truedeal Travel Engine !!!</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-md mb-4 ml-[8%] relative top-2 sm:top-4 md:top-9 font-poppins font-semibold">GET READY FOR TAKE OFF</p>
                <h2 className="text-2xl sm:text-3xl md:text-3xl mb-4 sm:mb-6 md:mb-8 ml-[8%] relative top-2 sm:top-4 md:top-6 font-poppins font-bold">
                    Search <span className="underline">your Holida</span>y
                </h2>

                {/* Search Form */}
                <div className="bg-white p-2 sm:p-6 md:p-6 w-[84%] sm:w-[92%] md:w-full max-w-4xl ml-[8%] sm:ml-[4%] md:ml-[9%] font-poppins mt-8 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 font-poppins">
                        {/* Destination */}
                        <div className="flex flex-col">
                            <label className="text-gray-600 mb-2 text-sm sm:text-base font-bold">Select Your Destination :</label>
                            <select className="p-2 border rounded-md text-gray-700 text-sm sm:text-base">

                                <option>All Destinations</option>
                                <option>China</option>
                                <option>Japan</option>
                                <option>Baku</option>
                            </select>

                        </div>

                        {/* Date */}
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold mb-2 text-sm sm:text-base">Select Your Date :</label>
                            <input type="date" className="p-2 border rounded-md text-gray-700 text-sm sm:text-base" />
                        </div>

                        {/* Price Range */}
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold mb-2 text-sm sm:text-base">Max Price :</label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="100000"
                                    defaultValue="50000"
                                    className="w-full appearance-none h-2 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"
                                />
                                <span className="text-gray-700 font-semibold text-sm sm:text-base">₹100000</span>
                            </div>
                            <label className="flex items-center space-x-2 mt-2 text-gray-600 text-sm sm:text-base">
                                <input type="checkbox" className="form-checkbox" />
                                <span>See only promotions</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-8 md:mt-6 flex justify-center relative top-4 sm:top-6 md:top-10">
                        <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center text-sm sm:text-base font-poppins">
                            <Filter className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            SEARCH
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10">
                <button className="bg-pink-500 p-3 sm:p-4 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none">
                    <i className="fas fa-robot text-white text-xl sm:text-2xl"></i>
                </button>
            </div>
        </div >
    );
}