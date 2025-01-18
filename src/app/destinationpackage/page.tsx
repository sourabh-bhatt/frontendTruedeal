'use client';

import Destinations from "../components/homepage/Destinations";
import Trending from "../components/homepage/Trending";
import ForexLive from "../components/forex/ForexLive";
// import HappyCustomers from "../components/Ad/HappyCustomers";
import Ugc from "../components/homepage/Ugc";
import Sponsors from "../components/Ad/Sponsers"
import Gallery from "../components/homepage/Gallery";
import ReviewsGlimpse from "../components/homepage/ReviewsGlimpse";
import Domestic from "../components/homepage/Domestic";

export default function DestinationPackagePage() {
    return (
        <div>
            <main className="space-y-8 mt-8">
                <Destinations />
                <div className=" relative bottom-16">
                    <Trending />
                </div>
                <div className="bg-gray-50 py-12 relative bottom-16">
                    <Domestic />

                </div>
            </main>
            {/* <HappyCustomers /> */}
            <Gallery />
            <Sponsors />
            <ReviewsGlimpse />
            <ForexLive />
            <Ugc />
        </div>
    );
} 