import { FaChartLine } from "react-icons/fa";

export default function LiveForexRates() {
    return (
        <div className="flex flex-col items-center py-10 bg-gradient-to-b from-gray-200 via-gray-100 to-white space-y-8">
            <div className="bg-white shadow-md rounded-md flex items-center w-1/2 max-w-2xl">
                <div className="bg-gradient-to-br from-violet-500 to-red-500 p-4 rounded-md flex items-center justify-center">
                    <FaChartLine className="text-white text-8xl" />
                </div>

                <div className="flex-grow ">
                    <h2 className="text-xl font-bold text-gray-800 text-center">LIVE RATES</h2>
                    <p className="text-gray-600 text-sm text-center mt-2">
                        Check the latest live rates for forex cards and foreign currency exchange. <br />
                        Updated in real-time to ensure you get the best rates.
                    </p>
                    <div className=" mt-2 flex justify-center">
                        <button className="text-red-500 border border-red-500 px-4 py-2 rounded-md font-medium hover:bg-red-600 hover:text-white transition duration-300 ">
                            Click here to view the latest rates
                        </button>
                    </div>
                </div>
            </div>

            {/* Foreign Currency Services Section */}

        </div>
    );
}