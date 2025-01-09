'use client';

import Destinations from "../components/homepage/Destinations";
import Trending from "../components/homepage/Trending";
import ForexLive from "../components/forex/ForexLive";
import HappyCustomers from "../components/Ad/HappyCustomers";
import Ugc from "../components/homepage/Ugc";
import ExoticDestinations from "../components/homepage/Exotic";

export default function DestinationPackagePage() {
    return (
        <div>
            <main className="space-y-12 mt-10">
                <Destinations />
                <Trending />
                <div className="bg-gray-50 py-12">
                    <ForexLive />
                </div>
                <ExoticDestinations />
            </main>
            <HappyCustomers />
            <Ugc />
        </div>
    );
} 