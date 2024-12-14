'use client';

import Destinations from "../components/homepage/Destinations";
import Trending from "../components/homepage/Trending";
import ForexLive from "../components/forex/ForexLive";
import HappyCustomers from "../components/Ad/HappyCustomers";

export default function DestinationPackagePage() {
    return (
        <div>
            <main className="space-y-12">
                <Destinations />
                <Trending />
                <div className="bg-gray-50 py-12">
                    <ForexLive />
                </div>
            </main>
            <HappyCustomers />
        </div>
    );
} 