'use client';

import Exclusive from "../components/forex/Exclusive";
import ForexLive from "../components/forex/ForexLive";

export default function ExclusivePage() {
    return (
        <main className="space-y-12">
            <Exclusive />
            <div className="bg-gray-50 py-12">
                <ForexLive />
            </div>
        </main>
    );
} 