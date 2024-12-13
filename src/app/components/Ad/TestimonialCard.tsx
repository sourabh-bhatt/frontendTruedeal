import Image from 'next/image'
import { QuoteIcon } from 'lucide-react'

interface TestimonialCardProps {
    name: string
    role: string
    content: string
    avatar: string
    onClick: () => void
}

export function TestimonialCard({ name, role, content, avatar, onClick }: TestimonialCardProps) {
    return (
        <div
            className="relative rounded-lg p-0.5 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] shadow-[0_0_20px_rgba(1,122,227,0.3)] cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={onClick}
        >
            <div className="bg-white rounded-lg p-6 flex flex-col h-full relative">
                <QuoteIcon className="text-4xl text-gray-300 absolute top-[-1.1rem] left-2" />
                <QuoteIcon className="text-4xl text-gray-300 absolute bottom-[-1.1rem] right-2" />

                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-0.5">
                    <Image
                        src={avatar}
                        alt={name}
                        className="w-full h-full object-cover rounded-full"
                        width={80}
                        height={80}
                    />
                </div>

                <blockquote className="text-center mt-6 flex-grow font-poppins font-semibold">{content}</blockquote>
                <div className="flex justify-between items-end mt-4">
                    <div>
                        <h3 className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent font-poppins font-bold">
                            {name}
                        </h3>
                        <p className="text-sm text-gray-600 font-poppins font-semibold">{role}</p>
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
    )
}

