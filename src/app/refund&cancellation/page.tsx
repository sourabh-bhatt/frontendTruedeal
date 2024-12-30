export default function TermsAndCond() {
    return (
        <section className="min-h-screen bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center p-8 mt-10">
            <div className="bg-white rounded-lg p-8 max-w-3xl w-full shadow-lg transition-all duration-700 ease-in-out">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Terms & Conditions</h1>
                <ul className="list-decimal space-y-4 text-gray-700 ml-4">
                    <li>30 days or more before the date of
                        travel: 25% of the total tour cost will be
                        charged as a cancellation fee</li>
                    <li>15 to 30 days before the date of travel:
                        50% of the total tour cost will be
                        charged as a cancellation fee</li>
                    <li>0 to 15 days before the date of travel:
                        100% of the total tour cost will be
                        charged as a cancellation fee</li>
                </ul>
                <h1 className="text-2xl font-bold mb-4 text-gray-800 mt-10">How to Book</h1>
                <li>30% advance payment is
                    required at the time of
                    booking.
                </li>
                <li>100% of the total tour cost
                    must be paid 21 days before
                    the date of trave
                </li>
            </div>
        </section>
    );
}