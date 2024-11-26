import Image from "next/image";

const TrendingOffers = () => {
    const offers = [
        {
            title: "Breeze Through Bangkok & Pattaya",
            nights: 2,
            days: 3,
            originalPrice: 26500,
            discountedPrice: 21059,
            image: "/Assets/DestinationsImage/china.jpg",
            discount: 18,
            amenities: ["Stay", "Transfers"]
        },
        {
            title: "Breeze Through Bangkok & Pattaya",
            nights: 2,
            days: 3,
            originalPrice: 26500,
            discountedPrice: 21059,
            image: "/Assets/DestinationsImage/china.jpg",
            discount: 18,
            amenities: ["Stay", "Transfers"]
        },
        {
            title: "Breeze Through Bangkok & Pattaya",
            nights: 2,
            days: 3,
            originalPrice: 26500,
            discountedPrice: 21059,
            image: "/Assets/DestinationsImage/china.jpg",
            discount: 18,
            amenities: ["Stay", "Transfers"]
        },
        {
            title: "Breeze Through Bangkok & Pattaya",
            nights: 2,
            days: 3,
            originalPrice: 26500,
            discountedPrice: 21059,
            image: "/Assets/DestinationsImage/china.jpg",
            discount: 18,
            amenities: ["Stay", "Transfers"]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <div className="relative">
                    <h1 className="text-3xl font-bold mt-2">TRENDING OFFERS</h1>
                    <div className="h-1 w-48 bg-cyan-400 mx-auto mt-2"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {offers.map((offer, index) => (
                    <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg">
                        <div className="relative">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                width={100}
                                height={38}
                                className="w-full h-38 object-cover rounded-t-2xl"
                            />
                            <div className="absolute top-4 flex items-center">
                                <div className="bg-red-500 text-white px-1 py-1 flex items-center font-poppins font-semibold">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                    {offer.discount}% OFF
                                </div>
                                <div
                                    className="border-t-[16px] border-t-transparent border-l-[16px] border-l-red-500 border-b-[16px] border-b-transparent"
                                />
                            </div>
                        </div>

                        <div >
                            <div className="px-2">
                                <h3 className="font-semibold font-poppins text-md mb-2">{offer.title}</h3>

                                <div className="flex gap-2 mb-3">
                                    <span className="bg-blue-50 text-gray-700 px-4 py-1 rounded-full text-sm font-poppins font-semibold">
                                        {offer.nights} Nights
                                    </span>
                                    <span className="bg-blue-50 text-gray-700 px-4 py-1 rounded-full text-sm font-poppins font-semibold">
                                        {offer.days} Days
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl font-poppins font-bold">₹{offer.discountedPrice.toLocaleString()}</span>
                                    <span className="text-red-500 line-through">₹{offer.originalPrice.toLocaleString()}</span>
                                    <span className="text-gray-500 text-sm font-poppins font-semibold">Per Person</span>
                                </div>

                                <div className="flex gap-3 mb-4">
                                    {offer.amenities.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center gap-1 text-gray-600">
                                            <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-2 relative bg-blue-50 text-blue-600 rounded-b-3xl hover:bg-blue-100 transition-colors font-poppins font-semibold">
                                View Itinerary
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingOffers;