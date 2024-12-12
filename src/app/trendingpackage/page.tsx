'use client';

import Trending from "../components/homepage/Trending";
import Destinations from "../components/homepage/Destinations";
import ForexLive from "../components/forex/ForexLive";

export default function TrendingPackagePage() {
    return (
        <main className="space-y-12">
            <Trending />
            <Destinations />
            <div className="bg-gray-50 py-12">
                <ForexLive />
            </div>
        </main>
    );
} 