// import React from 'react'

// export default function TermsAndConditions() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-[#017ae3] to-[#00f6ff] text-white p-8 mt-10">
//             <div className="max-w-3xl mx-auto">
//                 <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
//                 <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
//                     <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
//                     <p className="mb-4">
//                         By accessing and using Truedeal&apos;s services, you agree to comply with and be bound by these Terms & Conditions.
//                     </p>

//                     <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
//                     <p className="mb-4">
//                         You agree to use Truedeal&apos;s services for lawful purposes only and in accordance with these Terms & Conditions.
//                     </p>

//                     <h2 className="text-2xl font-semibold mb-4">3. Booking and Payments</h2>
//                     <p className="mb-4">
//                         All bookings are subject to availability and confirmation. Payments are processed securely, and rates are as advertised unless otherwise stated.
//                     </p>

//                     <h2 className="text-2xl font-semibold mb-4">4. Modifications and Cancellations</h2>
//                     <p className="mb-4">
//                         Modifications and cancellations are subject to the policies of Truedeal and our travel partners. Please refer to our Refund & Cancellation Policy for more details.
//                     </p>

//                     <h2 className="text-2xl font-semibold mb-4">5. Liability</h2>
//                     <p className="mb-4">
//                         Truedeal acts as an intermediary between you and travel service providers. We are not liable for any issues arising from the services provided by these third parties.
//                     </p>

//                     <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
//                     <p className="mb-4">
//                         Your use of Truedeal&apos;s services is also governed by our Privacy Policy. Please review it to understand how we collect, use, and protect your personal information.
//                     </p>

//                     <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
//                     <p className="mb-4">
//                         Truedeal reserves the right to modify these Terms & Conditions at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

'use client'

import { useEffect, useRef, useState } from 'react'

export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState('user-agreement')
    const observerRef = useRef<IntersectionObserver | null>(null)

    const sections = [
        { id: 'user-agreement', title: 'User Agreement' },
        { id: 'prices', title: 'Prices' },
        { id: 'payment', title: 'Payment Modes & Policies' },
        { id: 'terms', title: 'Terms of Use' },
        { id: 'communication', title: 'Communication Policy' },
        { id: 'booking', title: 'Booking Policy' },
        { id: 'cancellation', title: 'Flight Cancellation Policy' },
        { id: 'holiday', title: 'Holiday Cancellation Policy' },
        { id: 'refund', title: 'Refund Policy' },
        { id: 'refunds-case', title: 'Refunds Case Wise' },
        { id: 'copyright', title: 'Copyright & Trademark' },
        { id: 'rules', title: 'Rules of Service' },
        { id: 'credit', title: 'Credit Shell' },
        { id: 'visa', title: 'Visa Guidelines' },
        { id: 'transmitted', title: 'Transmitted Material' },
        { id: 'offers', title: 'Offers & Contests' },
        { id: 'disclaimer', title: 'Disclaimer' },
        { id: 'tariffs', title: 'Tariffs & Taxes' },
        { id: 'general', title: 'General Terms' },
        { id: 'credit-policy', title: 'Credit Policy' },
        { id: 'child', title: 'Unaccompanied Child' },
        { id: 'pregnancy', title: 'Pregnancy Rules' },
        { id: 'cancellation-coverage', title: 'Cancellation Coverage' },
    ]

    useEffect(() => {
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        observerRef.current = new IntersectionObserver(callback, {
            rootMargin: '-20% 0px -80% 0px'
        })

        document.querySelectorAll('section[id]').forEach((section) => {
            observerRef.current?.observe(section)
        })

        return () => observerRef.current?.disconnect()
    }, [])

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">TERMS & CONDITIONS</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation - Fixed on Desktop */}
                    <nav className="lg:sticky lg:top-4 h-fit space-y-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === section.id
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </nav>

                    {/* Main Content */}
                    <div className="lg:col-span-3 text-gray-800 space-y-12">
                        {/* All sections are visible at once */}
                        <section id="user-agreement">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Agreement between the Clients & Truedeal</h2>
                            <p className="mb-4">
                                The travel site www.truedeal4u.com, mobile site and Smartphone App Platforms like iOS and Android are maintained by Truedeal. It is an IATA certified travel company compliant with the laws of the Republic of India. By accessing or using this site or using any of its services, you are agreed on terms and conditions mentioned below, including any supplementary guidelines and future modifications.
                            </p>
                            {/* ... rest of the user agreement content ... */}
                        </section>

                        {/* Continue with all other sections */}
                        <section id="transmitted">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Transmitted Material</h2>
                            <p className="mb-4">
                                Internet communications can&apos;t be completely private or secure. You understand that any message or information that you have sent to this site can be intercepted by others unless there is a special notice (for example, credit card information) that is encrypted. Sending a message to Truedeal does not cause the site to have any special responsibility.
                            </p>
                            <p className="mb-4">
                                The copyright in the contents of this website belongs to Truedeal. Copying any part or all the contents of this website without permission of Truedeal is not allowed except to the extent that such copying or printing is essential for the purpose of availing the paid services offered.
                            </p>
                        </section>

                        <section id="offers">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Offers, Contests and Interactions</h2>
                            <p className="mb-4">
                                This site may run contests that may need you to send the materials or information about yourself or to offer prizes. All the offers and contests running on this website have its own rules, which you need to read before getting agreed for participation.
                            </p>
                        </section>

                        {/* Add all remaining sections similarly */}
                        <section id="disclaimer">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Disclaimer and No Warranties</h2>
                            <p className="mb-4">
                                You acknowledge that Truedeal is a conciliator, which is not accountable for any 3rd party obligations due to rates, quality, and all other instances. You particularly agree that use of the services and the site is at your solitary risk.
                            </p>
                            {/* ... rest of disclaimer content ... */}
                        </section>

                        <section id="general">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-600">General Terms</h2>
                            <p className="mb-4">
                                Truedeal, as being a reputed and responsible travel agency, provides you the best possible information about the hotels, airlines, transportation, and railways. However, it is advised to all the clients to make a personal inquiry to avoid any confusion & mess.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Truedeal is not responsible for any loss or breakage of luggage during the travel.</li>
                                <li>We are not responsible for any delay & alteration in your trip due to unavoidable circumstances.</li>
                                <li>We are not responsible for any damage, loss or injury during the holiday packages.</li>
                                <li>We are also not accountable for any human error that gone unnoticed.</li>
                            </ul>
                        </section>

                        {/* Add all remaining sections... */}
                    </div>
                </div>
            </div>
        </div>
    )
}

