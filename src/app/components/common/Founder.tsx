import Image from "next/image"

export default function Founder() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                <div className="w-full md:w-1/2 relative left-10">
                    <Image
                        src="/Assets/UserImages/ceo.png"
                        alt="Founder portrait"
                        width={100}
                        height={150}
                        className="w-96 grayscale object-cover rounded-lg relative left-10"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-4 relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#017ae3] to-[#00f6ff]" />
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent font-poppins">
                        FOUNDER MESSAGE
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold font-poppins">
                        Founder & CEO
                    </h3>
                    <p className="text-gray-600 text-lg font-poppins">
                        Travel and travel until you earn and learn yourself with us.
                    </p>
                    <p className="text-gray-600 text-lg font-poppins">
                        Because when you travel... You learn so much.
                    </p>
                </div>
            </div>
        </div>
    )
}

