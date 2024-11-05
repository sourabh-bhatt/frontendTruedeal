import Image from "next/image"

export default function Sponsors() {
    const topPartners = [
        { name: "Amadeus", logo: "/Assets/DestinationsImage/1.jpg" },
        { name: "Expedia", logo: "/Assets/Forex/forexBanner.jpg" },
        { name: "Malindo Air", logo: "/Assets/DestinationsImage/2.jpg" },
        { name: "Viator", logo: "/Assets/DestinationsImage/3.jpg" },
        { name: "IATA", logo: "/Assets/DestinationsImage/4.jpg" },
        { name: "Dubai Expert", logo: "/Assets/DestinationsImage/5.jpg" },
    ]

    const bottomPartners = [
        { name: "Certification 1", logo: "/Assets/DestinationsImage/6.jpg" },
        { name: "Certification 2", logo: "/Assets/DestinationsImage/7.jpg" },
        { name: "New Zealand Tourism", logo: "/Assets/DestinationsImage/8.jpg" },
        { name: "Iceland Inspired", logo: "/Assets/DestinationsImage/9.jpg" },
    ]

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl text-center mb-12">
                    Partnered <span className="text-gray-500">with the best in the industry</span>
                </h2>

                {/* Top row partners */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    {topPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 hover:opacity-75 transition-opacity"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={120}
                                height={50}
                                className="grayscale object-contain h-12"
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom row certifications */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {bottomPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 hover:opacity-75 transition-opacity"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={80}
                                height={80}
                                className="grayscale object-contain h-20"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}