'use client';

import Destinations from "../components/homepage/Destinations";
import Trending from "../components/homepage/Trending";
import ForexLive from "../components/forex/ForexLive";
// import HappyCustomers from "../components/Ad/HappyCustomers";
import Ugc from "../components/homepage/Ugc";
import ExoticDestinations from "../components/homepage/Exotic";
import Sponsors from "../components/Ad/Sponsers"
import Gallery from "../components/homepage/Gallery";
import ReviewsGlimpse from "../components/homepage/ReviewsGlimpse";
import Europe from "../components/homepage/Europe";

export default function DestinationPackagePage() {
    return (
        <div>
            <main className="space-y-8 mt-8">
                <Trending />
                <ExoticDestinations />
                <div className=" relative bottom-16">
                    <Destinations />

                </div>
                <div className="bg-gray-50 py-12 relative bottom-16">
                    <Europe />

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