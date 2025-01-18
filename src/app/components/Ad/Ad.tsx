import Image from "next/image";

export default function Component() {
    const features = [
        {
            src: "/Assets/Forex/1.webp",
            title: "No Third Party Mess",
            description: "We handle everything in-house for all our trips, ensuring 100% transparency and efficiency. With no third parties involved, you can trust us for genuine services and no hidden surprises."
        },
        {
            src: "/Assets/Forex/2.webp",
            title: "Transparency & Security",
            description: "Your safety is our top priority. We provide real-time monitoring for all trips through our dedicated ground team. With accurate updates on routes and weather conditions, you can travel stress-free."
        },
        {
            src: "/Assets/Forex/3.webp",
            title: "Co-Travelers Filtering",
            description: "Enjoy your journey with like-minded travelers! Our multi-step filtering process ensures you are traveling with people who share similar vibes, making your trips more enjoyable and fuss-free."
        },
        {
            src: "/Assets/Forex/4.webp",
            title: "Hassle Free Experience",
            description: "From comfortable stays to trained drivers, hospitable staff, and friendly trip leaders, we focus on providing a seamless experience so you can focus on creating memories."
        }
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-poppins">
                WHY <span className="relative inline-block">
                    <span>
                        WE ARE THE BEST
                    </span>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"></span>
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div>
                            <Image
                                src={feature.src}
                                alt={feature.title}
                                width={94}
                                height={64}
                                className="object-contain flex justify-between"
                            />
                        </div>
                        <h3 className="font-semibold text-xl mb-2 mt-4 font-poppins">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed font-poppins">{feature.description}</p>
                        {index < features.length - 1 && (
                            <div className="hidden lg:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black to-transparent" style={{ left: `${(index + 1) * 25 - 0.5}%` }}></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}