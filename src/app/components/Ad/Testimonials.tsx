import Image from 'next/image'
import { QuoteIcon } from 'lucide-react'

const testimonials = [
    {
        name: "Rashid Ali",
        role: "Team Lead @Truedeal",
        content:
            "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
        avatar: "/Assets/UserImages/rashid.jpg",
    },
    {
        name: "Abhilash",
        role: "Businessman",
        content:
            "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
        avatar: "/Assets/UserImages/user1.webp",
    },
    {
        name: "Abhilash",
        role: "Businessman",
        content:
            "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
        avatar: "/Assets/UserImages/user2.webp",
    },
]

export default function HappyCustomers() {
    return (
        <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white ">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-3xl font-bold text-center mb-2 font-poppins">
                    <span
                        className="pb-1 relative"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #017ae3, #00f6ff)',
                            backgroundSize: '100% 2px',
                            backgroundPosition: '0 100%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        HAPPY CUSTOM
                    </span>
                    ERS
                </h2>
                <p className="text-md text-center text-gray-600 mb-8 font-poppins">
                    We deliver what we promise. See what clients are expressing about us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative rounded-lg p-0.5 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] shadow-[0_0_20px_rgba(1,122,227,0.3)]">
                            <div className="bg-white rounded-lg p-6 flex flex-col h-full relative">
                                {/* Inverted commas */}

                                <QuoteIcon className="text-4xl text-gray-300 absolute top-[-1.1rem] left-2" />
                                <QuoteIcon className="text-4xl text-gray-300 absolute bottom-[-1.1rem] left-[23vw]" />

                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-0.5">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover rounded-full"
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <blockquote className="text-center mt-6 flex-grow font-poppins font-semibold">{testimonial.content}</blockquote>
                                <div className="flex justify-between items-end mt-4">
                                    <div>
                                        <h3 className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent font-poppins font-bold">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 font-poppins font-semibold">{testimonial.role}</p>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#star-gradient)" />
                                                <defs>
                                                    <linearGradient id="star-gradient" x1="2" y1="2" x2="22" y2="21.02" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#017ae3" />
                                                        <stop offset="1" stopColor="#00f6ff" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}