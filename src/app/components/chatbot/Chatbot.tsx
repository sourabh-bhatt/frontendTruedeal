'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Message = {
    text: string
    isBot: boolean
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [step, setStep] = useState(0)
    const [userData, setUserData] = useState({ name: '', phone: '', query: '' })
    const [isTyping, setIsTyping] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false)
    const [isInputDisabled, setIsInputDisabled] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const botMessages = [
        "Hello! I'm Sarah, your personal assistant. May I know your name?",
        "It's great to meet you, {name}! Could you please provide your phone number?",
        "Thank you, {name}. How can I assist you today?",
        "We will surely look into that, {name}. I'm connecting you with our specialized support team on WhatsApp for personalized assistance.",
        "Connecting you to our WhatsApp support team now. You'll be redirected shortly.",
    ]

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => addBotMessage(botMessages[0]), 1000)
        }
    }, [isOpen])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const addBotMessage = (text: string) => {
        setIsTyping(true)
        let i = 0
        const interval = setInterval(() => {
            if (i < text.length) {
                setMessages((prev) => [
                    ...prev.slice(0, -1),
                    { text: text.slice(0, i + 1), isBot: true },
                ])
                i++
            } else {
                clearInterval(interval)
                setIsTyping(false)
            }
        }, 30)
    }

    const handleSendMessage = () => {
        if (input.trim() === '') return

        setMessages((prev) => [...prev, { text: input, isBot: false }])
        setInput('')

        switch (step) {
            case 0:
                setUserData((prev) => ({ ...prev, name: input }))
                setStep(1)
                setTimeout(() => addBotMessage(botMessages[1].replace('{name}', input)), 1000)
                break
            case 1:
                setUserData((prev) => ({ ...prev, phone: input }))
                setStep(2)
                setIsInputDisabled(true)
                setTimeout(() => {
                    addBotMessage(botMessages[2].replace('{name}', userData.name))
                    setIsInputDisabled(false)
                }, 1000)
                break
            case 2:
                setUserData((prev) => ({ ...prev, query: input }))
                setStep(3)
                setTimeout(() => {
                    addBotMessage(botMessages[3].replace('{name}', userData.name))
                    setTimeout(() => {
                        setIsConnecting(true)
                        addBotMessage(botMessages[4])
                        setTimeout(() => {
                            redirectToWhatsApp()
                        }, 4000)
                    }, 2000)
                }, 1000)
                break
        }
    }

    const redirectToWhatsApp = () => {
        const phoneNumber = '918447498498'
        const message = encodeURIComponent(
            `Hi Team Truedeal, my name is ${userData.name} and my phone number is ${userData.phone}

I enquired on your website for:
${userData.query ? `• ${userData.query}` : '• No specific enquiry provided'}

Looking forward for your immediate response.

Warm Regards,
${userData.name}`
        )
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
        setIsOpen(false)
        resetChat()
    }

    const resetChat = () => {
        setMessages([])
        setStep(0)
        setUserData({ name: '', phone: '', query: '' })
        setIsConnecting(false)
        setIsInputDisabled(false)
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="bg-white rounded-lg shadow-xl w-full sm:w-96 overflow-hidden mb-4 max-h-[80vh] flex flex-col"
                    >
                        <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-4 flex justify-between items-center rounded-t-lg">
                            <h2 className="text-white text-lg font-semibold">Chat with Us</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-200 focus:outline-none"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'
                                        }`}
                                >
                                    <div
                                        className={`max-w-[75%] rounded-lg px-4 py-2 ${message.isBot
                                            ? 'bg-gray-100 text-gray-800'
                                            : 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start mb-4">
                                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 shadow">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 40 }}
                                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                            className="h-2 bg-gray-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            )}
                            {isConnecting && (
                                <div className="text-center mb-4">
                                    <span className="inline-block rounded-lg px-4 py-2 bg-yellow-100 text-yellow-800">
                                        Connecting to WhatsApp support...
                                    </span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="p-4 bg-white border-t">
                            <div className="flex rounded-lg overflow-hidden shadow-sm">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    placeholder="Type your message..."
                                    className="flex-grow px-4 py-2 focus:outline-none"
                                    disabled={isInputDisabled || step === 3}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2 hover:opacity-90 transition-opacity disabled:opacity-50 focus:outline-none"
                                    disabled={isInputDisabled || step === 3}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12l-8-8v5H4v6h8v5l8-8z"
                    />
                </svg>
            </motion.button>
        </div>
    )
}

export default Chatbot