import Image from 'next/image'

export default function Founder() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 font-poppins">
                        OUR FOUNDER
                        <div className="h-1 w-48 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mx-auto mt-2" />
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-[694/844] w-full max-w-[694px] mx-auto rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/Assets/Founder/founderceo.png"
                                alt="Founder and CEO of TrueDeal"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                                quality={100}
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 694px"
                                priority
                            />
                        </div>

                        <div className="relative bg-white p-8 rounded-xl shadow-lg">
                            <div className="absolute top-0 left-0 w-20 h-20 -translate-x-3 -translate-y-3">
                                <svg className="text-[#017ae3] w-full h-full opacity-50" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                            </div>
                            <blockquote className="relative z-10 mt-8 italic text-xl text-gray-700 font-poppins">
                                &ldquo;At TrueDeal, we believe travel is not just about reaching a destination; it's about the journey of learning, growth, and discovery. Travel until you earn the knowledge, memories, and experiences that last a lifetime. With every trip you take, you broaden your horizons, connect with new cultures, and transform your perspective. We are here to make your travel dreams come true, providing you with unforgettable experiences, personalized services, and exceptional value. Join us and let your adventure begin with TrueDeal!
                                &rdquo;
                            </blockquote>
                            <div className="mt-8 border-t pt-4">
                                <h3 className="text-2xl font-bold text-gray-900 font-poppins">Mr. Aman Arora</h3>
                                <p className="text-gray-600 font-poppins">Founder & CEO, TrueDeal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

