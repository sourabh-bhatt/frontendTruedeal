'use client'

import { useState, useEffect } from 'react'
import { Card, Row, Col } from 'antd'
import Link from 'next/link'

const { Meta } = Card

type Destination = {
    id: string
    name: string
    image: string
    price: number
    duration: string
}

export default function Results() {
    const [destinations, setDestinations] = useState<Destination[]>([])

    useEffect(() => {
        // In a real application, you would fetch this data from an API
        const mockDestinations: Destination[] = [
            { id: '1', name: 'Phuket', image: '/placeholder.svg', price: 475080, duration: '6 nights' },
            { id: '2', name: 'Bali', image: '/placeholder.svg', price: 525000, duration: '7 nights' },
            // Add more mock destinations here
        ]
        setDestinations(mockDestinations)
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Recommended Destinations</h1>
                <Row gutter={[16, 16]}>
                    {destinations.map((destination) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={destination.id}>
                            <Link href={`/destination/${destination.id}`}>
                                <Card
                                    hoverable
                                    cover={<img alt={destination.name} src={destination.image} />}
                                >
                                    <Meta
                                        title={destination.name}
                                        description={`${destination.duration} | ₹${destination.price.toLocaleString()}`}
                                    />
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

