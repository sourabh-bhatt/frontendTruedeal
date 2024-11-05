import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Assets/HeroSectionImages/heroBg.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-2xl font-bold">Welcome to the beta release of Truedeal Travel Engine !!!</h1>
                <div className="relative right-[13rem]">
                    <p className="mt-4 text-lg">GET READY FOR TAKE OFF</p>
                </div>
                <h2 className="mt-4 text-3xl font-bold relative right-[11rem] mr-2">
                    Search <span className="underline">your Holiday</span>
                </h2>

                {/* Search Form */}
                <div className="mt-8 bg-white p-4 rounded-lg shadow-md w-full max-w-2xl border-2 border-red-600">
                    <div className="flex flex-col md:flex-row justify-between space-y-4  md:space-y-0 md:space-x-4">
                        {/* Destination */}
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Select Your Destination :</label>
                            <select className="mt-2 p-2 border rounded-md text-gray-700">
                                <option>All Destinations</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Select Your Date :</label>
                            <input type="date" className="mt-2 p-2 border rounded-md text-gray-700" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Max Price :</label>
                            <div className="flex items-center mt-2 space-x-2">
                                <input type="range" min="0" max="100000" defaultValue="50000" className="w-full" />
                                <span className="text-gray-700 font-semibold">₹100000</span>
                            </div>
                            <label className="flex items-center space-x-2 mt-2 text-gray-600">
                                <input type="checkbox" className="form-checkbox" />
                                <span>See only promotions</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-6 relative top-7 flex justify-center">
                        <button className="px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600">
                            More Filters
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10">
                <button className="bg-pink-500 p-4 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none">
                    <i className="fas fa-robot text-white text-2xl"></i>
                </button>
            </div>
        </div>
    );
}
