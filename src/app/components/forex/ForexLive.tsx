"use client";

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { currencies } from '../../types/currency'
import MoneyTransfer from './MoneyTransfer'
import CurrencyExchange from './CurrencyExchange'

const ForexLive = () => {
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState<'exchange' | 'transfer' | null>(null)

    const handleOpenModal = (content: 'exchange' | 'transfer') => {
        setModalContent(content)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setModalContent(null)
    }

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8">
                    <p className="text-gray-600 text-sm mb-1 font-poppins font-semibold">ONE STOP SHOP FOR ALL YOUR</p>
                    <h1 className="text-5xl font-extrabold mb-6 font-poppins bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text">
                        FOREX NEEDS!
                    </h1>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Currency Exchange Card */}
                        <div 
                            onClick={() => handleOpenModal('exchange')}
                            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold">Currency Exchange</h2>
                            </div>
                            <p className="text-gray-600">Exchange your currency with the best rates available in the market.</p>
                        </div>

                        {/* Money Transfer Card */}
                        <div 
                            onClick={() => handleOpenModal('transfer')}
                            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold">Money Transfer</h2>
                            </div>
                            <p className="text-gray-600">Send money internationally with secure and fast transfers.</p>
                        </div>
                    </div>
                </div>

                {/* Currency Carousel */}
                <div className="relative mt-12">
                    <div className="flex items-center">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <ChevronLeft className="w-6 h-6 text-gray-400" />
                        </button>

                        <div className="flex-1 overflow-hidden">
                            <div className="flex gap-4 justify-between">
                                {currencies.map((currency) => (
                                    <div key={currency.code} className="flex flex-col items-center text-center min-w-[100px]">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                                            <Image
                                                src={currency.flagUrl}
                                                alt={`${currency.name} flag`}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="text-sm text-gray-600">{currency.name}</div>
                                        <div className="text-xs text-gray-500">({currency.code})</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <ChevronRight className="w-6 h-6 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={(e) => {
                        // Close modal when clicking outside
                        if (e.target === e.currentTarget) {
                            handleCloseModal();
                        }
                    }}
                >
                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg">
                        {modalContent === 'exchange' && <CurrencyExchange onClose={handleCloseModal} />}
                        {modalContent === 'transfer' && <MoneyTransfer onClose={handleCloseModal} />}
                    </div>
                </div>
            )}
        </>
    )
}

export default ForexLive

