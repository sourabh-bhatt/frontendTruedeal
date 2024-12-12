import Image from "next/image"
import Link from "next/link"

export default function Services() {
    const services = [
        {
            title: "Holiday Packages",
            image: "/Assets/DestinationsImage/1.jpg",
            alt: "Couple taking photos on mountain top",
            link: "/destinationpackage"
        },
        {
            title: "Trending Destinations",
            image: "/Assets/DestinationsImage/3.jpg",
            alt: "Commercial airplane at airport",
            link: "/trendingpackage"
        },
        {
            title: "Exclusive Deals",
            image: "/Assets/DestinationsImage/4.jpg",
            alt: "Cruise ship on ocean",
            link: "/exclusive"
        }
    ]

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 font-poppins">
                        SERVICES WE PROVIDE
                        <div className="h-1 w-48 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mx-auto mt-2" />
                    </h2>
                    <p className="text-gray-600 text-lg font-poppins font-bold">
                        Truedeal equips a broad range of services to our customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mr-10">
                    {services.map((service, index) => (
                        <Link href={service.link} key={index}>
                            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                                <div className="relative h-[300px] w-full">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <h3 className="absolute bottom-6 left-6 text-white text-xl font-bold font-poppins">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

