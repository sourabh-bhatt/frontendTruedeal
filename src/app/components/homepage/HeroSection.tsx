'use client';

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'
import { Slider as AntSlider } from 'antd'

const destinations = [
    'Maldives', 'Dubai', 'Europe', 'Thailand', 'Bali', 'Azerbaijan', 'Malaysia', 'Fiji',
    'Australia', 'New Zealand', 'USA', 'Canada', 'Brazil', 'Argentina', 'Peru', 'Chile', 'Mexico',
    'Egypt', 'South Africa', 'Kenya', 'Tanzania', 'Morocco', 'Mauritius',
    'Japan', 'China', 'Hong Kong', 'Macau', 'South Korea', 'Philippines',
    'India', 'Almaty', 'Baku', 'Singapore', 'Turkey', 'Kashmir', 'Manali', 'Shimla', 'Kerala', 'Andaman',
]

export default function HeroSection() {
    const [destination, setDestination] = useState('')
    const [date, setDate] = useState('')
    const [maxPrice, setMaxPrice] = useState(100000)
    const [promotionsOnly, setPromotionsOnly] = useState(false)
    const router = useRouter()

    const handleSearch = () => {
        const searchParams = new URLSearchParams({
            destination,
            date,
            maxPrice: maxPrice.toString(),
            promotionsOnly: promotionsOnly.toString()
        })
        router.push(`/search?${searchParams.toString()}`)
    }

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Assets/HeroSectionImages/heroBg.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-white px-4 sm:px-8 md:px-20">
                <h1 className="text-xl sm:text-2xl md:text-3xl mb-2 ml-[8%] mt-[4%] sm:mt-[2%]">
                    <span className='font-poppins font-semibold'>Welcome to the beta release of</span>{' '}
                    <span className='font-poppins font-bold'>Truedeal Travel Engine !!!</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-md mb-4 ml-[8%] relative top-2 sm:top-4 md:top-9 font-poppins font-semibold">GET READY FOR TAKE OFF</p>
                <h2 className="text-2xl sm:text-3xl md:text-3xl mb-4 sm:mb-6 md:mb-8 ml-[8%] relative top-2 sm:top-4 md:top-6 font-poppins font-bold">
                    Search <span className="underline">your Holida</span>y
                </h2>

                <div className="bg-white p-6 w-full max-w-4xl ml-[8%] sm:ml-[4%] md:ml-[9%] font-poppins mt-8 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <Label htmlFor="destination" className="text-gray-600 mb-2 font-bold">Select Your Destination:</Label>
                            <Select onValueChange={setDestination} value={destination}>
                                <SelectTrigger id="destination" className="bg-white text-gray-900 border-gray-300">
                                    <SelectValue placeholder="All Destinations" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg">
                                    {destinations.map((dest) => (
                                        <SelectItem key={dest} value={dest} className="text-gray-900 hover:bg-gray-100">
                                            {dest}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col">
                            <Label htmlFor="date" className="text-gray-600 font-semibold mb-2">Select Your Date:</Label>
                            <Input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="p-2 border rounded-md text-gray-900 bg-white"
                            />
                        </div>

                        <div className="flex flex-col">
                            <Label htmlFor="price-range" className="text-gray-600 font-semibold mb-2">Max Price: ₹{maxPrice}</Label>
                            <AntSlider
                                id="price-range"
                                min={0}
                                max={100000}
                                step={1000}
                                value={maxPrice}
                                onChange={(value) => setMaxPrice(value)}
                                className="w-full"
                                tooltip={{
                                    formatter: (value) => `₹${value}`
                                }}
                            />
                            <div className="flex items-center space-x-2 mt-4">
                                <Checkbox
                                    id="promotions"
                                    checked={promotionsOnly}
                                    onCheckedChange={(checked) => setPromotionsOnly(checked as boolean)}
                                    className="border-gray-400"
                                />
                                <Label htmlFor="promotions" className="text-gray-600 text-sm">See only promotions</Label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Button
                            onClick={handleSearch}
                            className="px-6 py-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
                        >
                            <Search className="mr-2 h-5 w-5" />
                            SEARCH
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10">
                <Button className="bg-pink-500 p-4 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none">
                    <i className="fas fa-robot text-white text-2xl"></i>
                </Button>
            </div>

            <style jsx global>{`
                .ant-slider-rail {
                    background-color: #e2e8f0;
                }
                .ant-slider-track {
                    background-color: #017ae3;
                }
                .ant-slider-handle {
                    border-color: #017ae3;
                }
                .ant-slider-handle:focus {
                    box-shadow: 0 0 0 5px rgba(1, 122, 227, 0.2);
                }
                .ant-slider-tooltip .ant-tooltip-inner {
                    background-color: #017ae3;
                    color: white;
                }
            `}</style>
        </div>
    )
}

