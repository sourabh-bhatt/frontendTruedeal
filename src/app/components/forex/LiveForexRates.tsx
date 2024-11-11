import { FaChartLine } from "react-icons/fa";
import Image from "next/image";

export default function LiveForexRates() {
    return (
        <div className="flex flex-col items-center py-10 bg-gradient-to-b from-gray-200 via-gray-100 to-white space-y-8">
            <div className="bg-white shadow-md rounded-md flex items-center w-1/2 max-w-2xl ">

                <Image src="/Assets/Forex/forexGraph.webp" width={152} height={100} alt="Image live graph" />

                <div className="flex-grow p-3">
                    <h2 className="text-xl font-bold text-gray-800 text-center font-poppins">LIVE RATES</h2>
                    <p className="text-gray-600 text-sm text-center mt-2">
                        Check the latest live rates for forex cards and foreign currency exchange. <br />
                        Updated in real-time to ensure you get the best rates.
                    </p>
                    <div className=" mt-2 flex justify-center">

                        {/* <span
                            className="rounded-full p-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] inline-block">
                            <h1
                                className="bg-white text-transparent bg-clip-text relative font-bold border-2 border-transparent pl-4 pr-4">
                                Click here to view the latest rates
                            </h1>
                        </span> */}
                        <button
                            className="px-6 py-2 rounded-full font-medium bg-white relative group"
                        >
                            <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent relative font-bold">
                                Click here to view the latest rates
                            </span>
                            <span
                                className="absolute inset-0 rounded-full border-2 border-transparent"
                                style={{
                                    background: 'linear-gradient(to right,  #017ae3, #00f6ff) border-box',
                                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                }}
                            />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}