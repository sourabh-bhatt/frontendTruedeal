'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function SearchFilters() {
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [duration, setDuration] = useState([1, 30])
  const [rating, setRating] = useState(0)

  const amenities = ['Wi-Fi', 'Pool', 'Gym', 'Restaurant', 'Spa']
  const categories = ['Honeymoon', 'Family', 'Friends', 'Solo', 'Group', 'Couple']
  const continents = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia']

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <Slider
          min={0}
          max={100000}
          step={1000}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Duration (days)</h3>
        <Slider
          min={1}
          max={30}
          step={1}
          value={duration}
          onValueChange={setDuration}
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
          value={[rating]}
          onValueChange={(value) => setRating(value[0])}
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

