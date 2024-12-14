"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Item {
    name: string;
    icon: string;
    color: string;
    time: string;
}

const notifications = [
    {
        name: "Rishabh booked a trip to Bali",
        time: "15s ago",
        icon: "✈️",
        color: "#00C9A7",
    },
    {
        name: "Priya booked a trip to Maldives",
        time: "45s ago",
        icon: "🏖️",
        color: "#1E86FF",
    },
    {
        name: "Amit reserved Thailand package",
        time: "1m ago",
        icon: "🌴",
        color: "#FFB800",
    },
    {
        name: "Sarah booked Dubai adventure",
        time: "2m ago",
        icon: "🌇",
        color: "#FF3D71",
    },
    {
        name: "Raj exploring Singapore",
        time: "3m ago",
        icon: "🌆",
        color: "#00C9A7",
    },
    {
        name: "Maya chose Vietnam tour",
        time: "4m ago",
        icon: "🏯",
        color: "#1E86FF",
    },
    {
        name: "John booked Paris getaway",
        time: "5m ago",
        icon: "🗼",
        color: "#FFB800",
    },
    {
        name: "Neha exploring Greece",
        time: "6m ago",
        icon: "🏛️",
        color: "#FF3D71",
    },
    {
        name: "Alex booked Swiss Alps tour",
        time: "7m ago",
        icon: "🏔️",
        color: "#00C9A7",
    },
    {
        name: "Riya chose Mauritius package",
        time: "8m ago",
        icon: "🏝️",
        color: "#1E86FF",
    },
    {
        name: "David exploring Egypt",
        time: "9m ago",
        icon: "🏺",
        color: "#FFB800",
    },
    {
        name: "Anita booked Japan tour",
        time: "10m ago",
        icon: "⛩️",
        color: "#FF3D71",
    },
    {
        name: "Mike chose New Zealand",
        time: "11m ago",
        icon: "🥝",
        color: "#00C9A7",
    },
    {
        name: "Sonia exploring Morocco",
        time: "12m ago",
        icon: "🕌",
        color: "#1E86FF",
    },
    {
        name: "Tom booked Brazil vacation",
        time: "13m ago",
        icon: "🌴",
        color: "#FFB800",
    },
    {
        name: "Lisa chose South Africa safari",
        time: "14m ago",
        icon: "🦁",
        color: "#FF3D71",
    },
    {
        name: "Rahul exploring Australia",
        time: "15m ago",
        icon: "🦘",
        color: "#00C9A7",
    },
    {
        name: "Emma booked Iceland tour",
        time: "16m ago",
        icon: "🌋",
        color: "#1E86FF",
    },
    {
        name: "Arjun chose Bhutan package",
        time: "17m ago",
        icon: "🏔️",
        color: "#FFB800",
    },
    {
        name: "Sophie exploring Cambodia",
        time: "18m ago",
        icon: "🏛️",
        color: "#FF3D71",
    }
];

export default function CardsSwap({ name, icon, color, time }: Item) {
    return (
        <figure
            className={cn(
                "h-full flex items-center px-2",
                "transition-all duration-200 ease-in-out hover:bg-gray-50",
            )}
        >
            <div className="flex items-center gap-2 w-full">
                <div
                    className="flex size-6 items-center justify-center rounded-lg"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-sm">{icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-sm">
                        <span className="truncate font-medium">{name}</span>
                        <span className="text-gray-400 flex-shrink-0">·</span>
                        <span className="text-xs text-gray-400 flex-shrink-0">{time}</span>
                    </div>
                </div>
            </div>
        </figure>
    );
}

export function AnimatedListDemo({
    className,
}: {
    className?: string;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === notifications.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-4 left-4 z-50 w-[280px] overflow-hidden rounded-lg shadow-lg",
                "h-[48px]",
                "bg-white/80 backdrop-blur-sm",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shine",
                className,
            )}
            style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
            }}
        >
            <CardsSwap {...notifications[currentIndex]} />
        </div>
    );
}
