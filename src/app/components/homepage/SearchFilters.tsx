'use client';

import { useState } from 'react'
import { Slider } from 'antd'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function SearchFilters() {
    const [duration, setDuration] = useState<[number, number]>([1, 30])
    const [rating,  setRating] = useState<number>(0)

    const amenities = ['Wi-Fi', 'Pool', 'Gym', 'Restaurant', 'Spa']
    const categories = ['Honeymoon', 'Family', 'Friends', 'Solo', 'Group', 'Couple']
    const continents = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia']

    const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold mb-2">Duration (days)</h3>
                <Slider
                    range
                    min={1}
                    max={30}
                    value={duration}
                    onChange={(value: [number, number]) => setDuration(value)}
                    tipFormatter={(value) => `${value} days`}
                />
                <div className="flex justify-between mt-2">
                    <span>{duration[0]} days</span>
                    <span>{duration[1]} days</span>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Rating</h3>
                <Slider
                    min={0}
                    max={5}
                    step={0.5}
                    value={rating}
                    onChange={(value: number) => setRating(value)}
                    tipFormatter={(value) => `${value} stars`}
                />
                <div className="mt-2">
                    <span>{rating} stars and above</span>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                <div className="space-y-2">
                    {amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center">
                            <Checkbox id={`amenity-${amenity}`} />
                            <Label htmlFor={`amenity-${amenity}`} className="ml-2">{amenity}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <div key={category} className="flex items-center">
                            <Checkbox id={`category-${category}`} />
                            <Label htmlFor={`category-${category}`} className="ml-2">{category}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Continents</h3>
                <div className="space-y-2">
                    {continents.map((continent) => (
                        <div key={continent} className="flex items-center">
                            <Checkbox id={`continent-${continent}`} />
                            <Label htmlFor={`continent-${continent}`} className="ml-2">{continent}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
        </div>
    )
}