"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Tabs, Descriptions, Button } from 'antd';

const { TabPane } = Tabs;

export default function DestinationDetails() {
    const params = useParams();
    const [destination, setDestination] = useState<any>(null);

    useEffect(() => {
        // In a real application, you would fetch this data from an API
        // based on the destination ID
        const mockDestination = {
            id: params.id,
            name: 'Phuket',
            nights: 6,
            price: 475080,
            inclusions: [
                '6 nights stay in Phuket',
                'Phuket - Phi Phi Island By Speed Boat With Lunch with Shared Transfer',
                'Phuket-Combo 7 - Rock Beach Swing, Phuket City Tour,Big Buddha, Old Town with Shared Transfers',
                // ... more inclusions
            ],
            itinerary: [
                { day: 1, activities: ['Arrive in Phuket airport', 'Get transferred to your hotel', 'At leisure'] },
                { day: 2, activities: ['Phuket - Phi Phi Island By Speed Boat With Lunch with Shared Transfer'] },
                // ... more days
            ],
            reviews: [
                { author: 'John D.', rating: 5, comment: 'Amazing trip! Highly recommended.' },
                { author: 'Sarah M.', rating: 4, comment: 'Great experience overall. The hotel was fantastic.' },
                // ... more reviews
            ],
        };
        setDestination(mockDestination);
    }, [params.id]);

    if (!destination) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{destination.name}</h1>
            <p className="text-xl mb-4">{destination.nights} nights</p>
            <p className="text-2xl font-bold mb-6">₹{destination.price.toLocaleString()}</p>

            <Tabs defaultActiveKey="1">
                <TabPane tab="Your Trip" key="1">
                    <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
                    {destination.itinerary.map((day: any) => (
                        <div key={day.day} className="mb-4">
                            <h3 className="text-xl font-semibold">Day {day.day}</h3>
                            <ul className="list-disc list-inside">
                                {day.activities.map((activity: string, index: number) => (
                                    <li key={index}>{activity}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </TabPane>
                <TabPane tab="Inclusions" key="2">
                    <ul className="list-disc list-inside">
                        {destination.inclusions.map((inclusion: string, index: number) => (
                            <li key={index}>{inclusion}</li>
                        ))}
                    </ul>
                </TabPane>
                <TabPane tab="Reviews" key="3">
                    {destination.reviews.map((review: any, index: number) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{review.author} - {review.rating}/5</p>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </TabPane>
            </Tabs>

            <Button type="primary" size="large" className="mt-8">
                Book Trip
            </Button>
        </div>
    );
}

