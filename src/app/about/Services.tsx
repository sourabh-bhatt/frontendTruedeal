import Image from "next/image"

export default function Services() {
    const services = [
        {
            title: "Foreign Currency Exchange",
            icon: "💱"
        },
        {
            title: "Remittance",
            icon: "📤"
        },
        {
            title: "T-Flex Card",
            icon: "💳"
        },
        {
            title: "Visa",
            icon: "🛂"
        },
        {
            title: "Air Ticket",
            icon: "✈️"
        },
        {
            title: "Hotel",
            icon: "🏨"
        },
        {
            title: "Land Package",
            icon: "🚗"
        },
        {
            title: "Cruise",
            icon: "🚢"
        },
        {
            title: "Sightseeing",
            icon: "🔭"
        },
        {
            title: "Transfer",
            icon: "🚖"
        },
        {
            title: "Travel Insurance",
            icon: "🛡️"
        },
        {
            title: "Holiday Package",
            icon: "🏖️"
        }
    ]

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 font-poppins">
                        OUR SERVICES
                        <div className="h-1 w-48 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mx-auto mt-2" />
                    </h2>
                    <p className="text-gray-600 text-lg font-poppins font-bold">
                        Comprehensive travel and financial services at your fingertips
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex flex-col items-center text-center space-y-3">
                                <span className="text-4xl">{service.icon}</span>
                                <h3 className="text-lg font-semibold font-poppins text-gray-800">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

