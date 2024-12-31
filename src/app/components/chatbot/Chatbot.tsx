// 'use client'

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Send } from 'lucide-react';
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import Image from 'next/image';

// type ChatStep = 'greeting' | 'name' | 'phone' | 'query' | 'finished';

// interface ChatMessage {
//     text: string;
//     isUser: boolean;
// }

// function formatWhatsAppMessage(name: string, phone: string, query: string): string {
//     return encodeURIComponent(
//         `Hi Team Truedeal,

// I am ${name} and my phone number is ${phone}.

// I am looking for your help in: ${query}

// Warm Regards,
// ${name}`
//     );
// }

// export function Chatbot() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [step, setStep] = useState<ChatStep>('greeting');
//     const [messages, setMessages] = useState<ChatMessage[]>([]);
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [query, setQuery] = useState('');
//     const [input, setInput] = useState('');
//     const messagesEndRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (isOpen && messages.length === 0) {
//             addBotMessage("Hello! I'm True Friend, your personal assistant. May I know your name?");
//         }
//     }, [isOpen, messages.length]);

//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, [messages]);

//     const addBotMessage = (text: string) => {
//         setMessages(prev => [...prev, { text, isUser: false }]);
//     };

//     const addUserMessage = (text: string) => {
//         setMessages(prev => [...prev, { text, isUser: true }]);
//     };

//     const handleUserInput = (input: string) => {
//         addUserMessage(input);

//         switch (step) {
//             case 'greeting':
//                 setName(input);
//                 setStep('name');
//                 addBotMessage(`${input}, could you please provide your phone number?`);
//                 break;
//             case 'name':
//                 setPhone(input);
//                 setStep('phone');
//                 addBotMessage(`Thank you, ${name}. How can I assist you today?`);
//                 break;
//             case 'phone':
//                 setQuery(input);
//                 setStep('query');
//                 addBotMessage(`I will surely look into that, ${name}.`);
//                 setTimeout(() => {
//                     addBotMessage("I will connect you to our WhatsApp chat support so that you can get the answer.");
//                     setTimeout(() => {
//                         addBotMessage("Connecting to WhatsApp support...");
//                         setStep('finished');
//                     }, 2000);
//                 }, 2000);
//                 break;
//         }
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (input.trim()) {
//             handleUserInput(input.trim());
//             setInput('');
//         }
//     };

//     const handleWhatsAppRedirect = () => {
//         const whatsappMessage = formatWhatsAppMessage(name, phone, query);
//         setTimeout(() => {
//             setMessages([]);
//             setStep('greeting');
//             setName('');
//             setPhone('');
//             setQuery('');
//             setIsOpen(false);
//         }, 100);
//         window.open(`https://wa.me/919911179796?text=${whatsappMessage}`, '_blank');
//     };

//     return (
//         <>
//             <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 animate={{
//                     scale: [1, 1.1, 1],
//                     transition: {
//                         duration: 2,
//                         repeat: Infinity,
//                         repeatType: "reverse"
//                     }
//                 }}
//                 className="fixed bottom-4 right-4 z-50"
//             >
//                 <Button
//                     onClick={() => setIsOpen(true)}
//                     className="rounded-full shadow-lg bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"
//                     size="icon"
//                 >
//                     <Image
//                         src="/Assets/chatbot/botGif.gif"
//                         alt="Chatbot"
//                         width={34}
//                         height={24}
//                     />
//                     <span className="sr-only">Open chat</span>
//                 </Button>
//             </motion.div>
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         className="fixed bottom-4 right-4 w-96 h-[32rem] bg-background rounded-lg shadow-xl flex flex-col z-50"
//                     >
//                         <Card className="w-full h-full flex flex-col">
//                             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
//                                 <CardTitle className="text-lg font-semibold text-white">True Friend</CardTitle>
//                                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
//                                     <X className="h-4 w-4" />
//                                     <span className="sr-only">Close chat</span>
//                                 </Button>
//                             </CardHeader>
//                             <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
//                                 {messages.map((message, index) => (
//                                     <motion.div
//                                         key={index}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className={`max-w-[80%] p-3 rounded-lg ${message.isUser
//                                             ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white ml-auto'
//                                             : 'bg-gray-100 text-gray-800'
//                                             }`}
//                                     >
//                                         {message.text}
//                                     </motion.div>
//                                 ))}
//                                 <div ref={messagesEndRef} />
//                             </CardContent>
//                             <CardFooter>
//                                 {step === 'finished' ? (
//                                     <Button
//                                         onClick={handleWhatsAppRedirect}
//                                         className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white"
//                                     >
//                                         Connect on WhatsApp
//                                     </Button>
//                                 ) : (
//                                     <form onSubmit={handleSubmit} className="flex w-full space-x-2">
//                                         <Input
//                                             type="text"
//                                             value={input}
//                                             onChange={(e) => setInput(e.target.value)}
//                                             placeholder="Type your message..."
//                                             className="flex-1"
//                                         />
//                                         <Button type="submit" size="icon" className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
//                                             <Send className="h-4 w-4 text-white" />
//                                             <span className="sr-only">Send message</span>
//                                         </Button>
//                                     </form>
//                                 )}
//                             </CardFooter>
//                         </Card>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// }

'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

type ChatStep = 'greeting' | 'name' | 'phone' | 'query' | 'finished';

interface ChatMessage {
    text: string;
    isUser: boolean;
}

function formatWhatsAppMessage(name: string, phone: string, query: string): string {
    return encodeURIComponent(
        `Hi Team Truedeal,

I am ${name} and my phone number is +91${phone}.

I am looking for your help in: ${query}

Looking forward to your response.

Warm Regards,
${name}`
    );
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<ChatStep>('greeting');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [query, setQuery] = useState('');
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage("Hello! I'm True Friend, your personal assistant. May I know your name?");
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const addBotMessage = (text: string) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { text, isUser: false }]);
            setIsTyping(false);
        }, 1000);
    };

    const addUserMessage = (text: string) => {
        setMessages(prev => [...prev, { text, isUser: true }]);
    };

    const handleUserInput = (input: string) => {
        addUserMessage(input);

        switch (step) {
            case 'greeting':
                setName(input);
                setStep('name');
                addBotMessage(`${input}, could you please provide your phone number?`);
                break;
            case 'name':
                setPhone(input);
                setStep('phone');
                addBotMessage(`Thank you, ${name}. How can I assist you today?`);
                break;
            case 'phone':
                setQuery(input);
                setStep('query');
                addBotMessage(`I will surely look into that, ${name}.`);
                setTimeout(() => {
                    addBotMessage("I will connect you to our WhatsApp chat support so that you can get the answer.");
                    setTimeout(() => {
                        addBotMessage("Connecting to WhatsApp support...");
                        setStep('finished');
                    }, 2000);
                }, 2000);
                break;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            handleUserInput(input.trim());
            setInput('');
        }
    };

    const handleWhatsAppRedirect = () => {
        const whatsappMessage = formatWhatsAppMessage(name, phone, query);
        setTimeout(() => {
            setMessages([]);
            setStep('greeting');
            setName('');
            setPhone('');
            setQuery('');
            setIsOpen(false);
        }, 100);
        window.open(`https://wa.me/919911179796?text=${whatsappMessage}`, '_blank');
    };

    return (
        <>
            <motion.div
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
                className="fixed bottom-4 right-4 z-50"
            >
                <Button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full shadow-lg bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-0 w-14 h-14"
                    size="icon"
                >
                    <Image
                        src="/Assets/chatbot/botGif.gif"
                        alt="Chatbot"
                        width={38}
                        height={48}
                        className="rounded-full"
                    />
                    <span className="sr-only">Open chat</span>
                </Button>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-4 right-4 w-96 h-[32rem] bg-background rounded-lg shadow-xl flex flex-col z-50"
                    >
                        <Card className="w-full h-full flex flex-col overflow-hidden">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                <CardTitle className="text-lg font-semibold text-white">True Friend</CardTitle>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close chat</span>
                                </Button>
                            </CardHeader>
                            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((message, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className={`max-w-[80%] p-3 rounded-lg ${message.isUser
                                            ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white ml-auto'
                                            : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {message.text}
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex space-x-2 items-center"
                                    >
                                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
                                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </CardContent>
                            <CardFooter>
                                {step === 'finished' ? (
                                    <Button
                                        onClick={handleWhatsAppRedirect}
                                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white"
                                    >
                                        Connect on WhatsApp
                                    </Button>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                                        <Input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Type your message..."
                                            className="flex-1"
                                        />
                                        <Button type="submit" size="icon" className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                            <Send className="h-4 w-4 text-white" />
                                            <span className="sr-only">Send message</span>
                                        </Button>
                                    </form>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

