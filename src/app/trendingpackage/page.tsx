'use client';

import Trending from "../components/homepage/Trending";
import Destinations from "../components/homepage/Destinations";
import ForexLive from "../components/forex/ForexLive";
import HappyCustomers from "../components/Ad/HappyCustomers";
import ExoticDestinations from "../components/homepage/Exotic";
import Ugc from "../components/homepage/Ugc";

export default function TrendingPackagePage() {
    return (
        <div>


            <main className="space-y-12">
                <Trending />
                <Destinations />
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