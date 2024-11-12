import { QuoteIcon } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Abhilash",
            title: "Businessman",
            image: "/public/Assets/HeroSectionImages/heroBg.jpg",
            content: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims! 100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
            rating: 4
        },
        {
            name: "Abhilash",
            title: "Businessman",
            image: "/placeholder.svg?height=80&width=80",
            content: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims! 100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
            rating: 4
        },
        {
            name: "Abhilash",
            title: "Businessman",
            image: "/placeholder.svg?height=80&width=80",
            content: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims! 100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
            rating: 4
        }
    ]

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="border-b-4 border-gradient-to-r from-[#017ae3] to-[#00f6ff] font-poppins">
                            HAPPY CUSTOMERS
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg font-poppins">
                        We deliver what we promise. See what clients are expressing about us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg relative"
                        >
                            {/* Quote marks */}
                            <QuoteIcon className="absolute text-gray-200 w-8 h-8 -top-4 -left-4 transform -rotate-180" />
                            <QuoteIcon className="absolute text-gray-200 w-8 h-8 -bottom-4 -right-4" />

                            {/* Profile image with gradient border */}
                            <div className="flex justify-center mb-4">
                                <div className="rounded-full p-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                    <div className="rounded-full overflow-hidden border-2 border-red-600">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial content */}
                            <p className="text-gray-600 text-center mb-4">
                                {testimonial.content}
                            </p>

                            {/* Name and title */}
                            <div className="text-center mb-2">
                                <h3 className="text-blue-600 font-semibold text-lg">
                                    {testimonial.name}
                                </h3>
                                <p className="text-gray-500 text-sm">{testimonial.title}</p>
                            </div>

                            {/* Rating stars */}
                            <div className="flex justify-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                            }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
