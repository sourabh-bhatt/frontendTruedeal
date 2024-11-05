import { Users, Shield, Filter, ThumbsUp } from "lucide-react"

export default function Ad() {
    const features = [
        {
            icon: Users,
            title: "No Third Party Mess",
            description: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!"
        },
        {
            icon: Shield,
            title: "Transparency & Security",
            description: "Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!"
        },
        {
            icon: Filter,
            title: "Co-Travelers Filtering",
            description: "Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!"
        },
        {
            icon: ThumbsUp,
            title: "One Stop Hassle Free Experience",
            description: "Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!"
        }
    ]

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
                WHY <span className="border-b-4 border-rose-500">WE ARE THE BEST</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="bg-rose-500 p-6 rounded-hexagon mb-4">
                            <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}