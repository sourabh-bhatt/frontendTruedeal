'use client';

import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthModal = () => {
    const router = useRouter();
    const pathname = usePathname();

    const isSignIn = pathname.includes('sign-in');
    const isSignUp = pathname.includes('sign-up');
    const showModal = isSignIn || isSignUp;

    useEffect(() => {
        // Prevent scrolling when modal is open
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl h-auto md:h-[500px] flex flex-col md:flex-row overflow-hidden">
                {/* Left Side - Decorative */}
                <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#017ae3] to-[#00f6ff] p-8 flex-col justify-center items-center text-white relative">
                    <div className="absolute inset-0 opacity-10">
                        <Image
                            src="/Assets/HeroSectionImages/bg.png"
                            alt="Travel Landmarks"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl font-bold mb-4 font-poppins">Truedeal</h2>
                        <p className="text-sm mb-2 font-poppins">Turning travel mishaps</p>
                        <p className="text-sm mb-2 font-poppins">into memorable achievements</p>
                        <p className="text-sm font-poppins font-bold"> since 2014</p>
                    </div>
                </div>

                {/* Right Side - Auth Form */}
                <div className="p-4 md:p-2 flex flex-col w-full">
                    <div className="flex justify-between items-center mb-4 md:mb-6">
                        <h1 className="text-xl md:text-2xl font-bold flex items-center ml-2 md:ml-[5rem]">
                            Welcome to{' '}
                            <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                {' '}Truedeal
                            </span>
                        </h1>
                        <button
                            onClick={() => router.back()}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        {isSignIn && (
                            <SignIn
                                appearance={{
                                    elements: {
                                        formButtonPrimary:
                                            "bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90",
                                        formFieldInput:
                                            "border-2 focus:border-[#017ae3] rounded-lg",
                                        footerActionLink:
                                            "text-[#017ae3] hover:text-[#00f6ff]"
                                    }
                                }}
                                redirectUrl="/"
                            />
                        )}
                        {isSignUp && (
                            <SignUp
                                appearance={{
                                    elements: {
                                        formButtonPrimary:
                                            "bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90",
                                        formFieldInput:
                                            "border-2 focus:border-[#017ae3] rounded-lg",
                                        footerActionLink:
                                            "text-[#017ae3] hover:text-[#00f6ff]"
                                    }
                                }}
                                redirectUrl="/"
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .bg-white {
                        width: 100%;
                        max-width: 90%;
                        height: auto;
                    }

                    .p-4 {
                        padding: 1rem;
                    }

                    .flex-1 {
                        flex-grow: 1;
                    }

                    h1 {
                        font-size: 1.25rem;
                    }

                    .text-sm {
                        font-size: 0.875rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default AuthModal;
