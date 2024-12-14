'use client';

import { useState, useCallback } from 'react'
import { Slider } from 'antd'
// import type { SliderRef } from 'antd/es/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function SearchFilters() {
    const [durationRange, setDurationRange] = useState<[number, number]>([1, 30])
    const [ratingValue, setRatingValue] = useState<number>(0)
    // const durationSliderRef = useRef<SliderRef>(null)
    // const ratingSliderRef = useRef<SliderRef>(null)

    const amenities = ['Wi-Fi', 'Pool', 'Gym', 'Restaurant', 'Spa']
    const categories = ['Honeymoon', 'Family', 'Friends', 'Solo', 'Group', 'Couple']
    const continents = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia']

    const handleDurationChange = useCallback((value: number[]) => {
        setDurationRange(value as [number, number])
    }, [])

    const handleRatingChange = useCallback((value: number) => {
        setRatingValue(value)
    }, [])

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold mb-2">Duration (days)</h3>
                <Slider
                    // ref={durationSliderRef}
                    range
                    min={1}
                    max={30}
                    value={durationRange}
                    onChange={handleDurationChange}
                    tooltip={{
                        formatter: (value) => `${value} days`
                    }}
                />
                <div className="flex justify-between mt-2">
                    <span>{durationRange[0]} days</span>
                    <span>{durationRange[1]} days</span>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Rating</h3>
                <Slider
                    // ref={ratingSliderRef}
                    min={0}
                    max={5}
                    step={0.5}
                    value={ratingValue}
                    onChange={handleRatingChange}
                    tooltip={{
                        formatter: (value) => `${value} stars`
                    }}
                />
                <div className="mt-2">
                    <span>{ratingValue} stars and above</span>
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