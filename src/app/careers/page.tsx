import { Mail } from "lucide-react"

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
                    <p className="text-lg text-gray-600">
                        Be part of our journey in revolutionizing the travel industry
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
                        <p className="text-gray-600 mb-6">
                            We&apos;re always looking for talented individuals to join our team. If you&apos;re passionate about travel and
                            want to make a difference, we&apos;d love to hear from you.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                                Send us your Resume
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Email your resume and cover letter to:
                            </p>
                            <a
                                href="mailto:web@truedeal4u.com"
                                className="inline-block bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
                            >
                                web@truedeal4u.com
                            </a>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold">What we look for:</h3>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>Passion for travel and tourism</li>
                                <li>Strong communication skills</li>
                                <li>Customer-focused mindset</li>
                                <li>Ability to work in a fast-paced environment</li>
                                <li>Problem-solving abilities</li>
                                <li>Team player attitude</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 