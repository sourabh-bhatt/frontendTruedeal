// "use client";

// import { Filter } from 'lucide-react';

// export default function HeroSection() {
//     return (
//         <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Assets/HeroSectionImages/heroBg.jpg')` }}>
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-white px-4 sm:px-8 md:px-20">
//                 <h1 className="text-xl sm:text-2xl md:text-3xl mb-2 ml-[8%] mt-[4%] sm:mt-[2%]">
//                     <span className='font-poppins font-semibold'>Welcome to the beta release of</span>{' '}
//                     <span className='font-poppins font-bold'>Truedeal Travel Engine !!!</span>
//                 </h1>
//                 <p className="text-xs sm:text-sm md:text-md mb-4 ml-[8%] relative top-2 sm:top-4 md:top-9 font-poppins font-semibold">GET READY FOR TAKE OFF</p>
//                 <h2 className="text-2xl sm:text-3xl md:text-3xl mb-4 sm:mb-6 md:mb-8 ml-[8%] relative top-2 sm:top-4 md:top-6 font-poppins font-bold">
//                     Search <span className="underline">your Holida</span>y
//                 </h2>

//                 {/* Search Form */}
//                 <div className="bg-white p-2 sm:p-6 md:p-6 w-[84%] sm:w-[92%] md:w-full max-w-4xl ml-[8%] sm:ml-[4%] md:ml-[9%] font-poppins mt-8 ">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 font-poppins">
//                         {/* Destination */}
//                         <div className="flex flex-col">
//                             <label className="text-gray-600 mb-2 text-sm sm:text-base font-bold">Select Your Destination :</label>
//                             <select className="p-2 border rounded-md text-gray-700 text-sm sm:text-base">

//                                 <option>All Destinations</option>
//                                 <option>China</option>
//                                 <option>Japan</option>
//                                 <option>Baku</option>
//                             </select>

//                         </div>

//                         {/* Date */}
//                         <div className="flex flex-col">
//                             <label className="text-gray-600 font-semibold mb-2 text-sm sm:text-base">Select Your Date :</label>
//                             <input type="date" className="p-2 border rounded-md text-gray-700 text-sm sm:text-base" />
//                         </div>

//                         {/* Price Range */}
//                         <div className="flex flex-col">
//                             <label className="text-gray-600 font-semibold mb-2 text-sm sm:text-base">Max Price :</label>
//                             <div className="flex items-center space-x-2">
//                                 <input
//                                     type="range"
//                                     min="0"
//                                     max="100000"
//                                     defaultValue="50000"
//                                     className="w-full appearance-none h-2 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"
//                                 />
//                                 <span className="text-gray-700 font-semibold text-sm sm:text-base">₹100000</span>
//                             </div>
//                             <label className="flex items-center space-x-2 mt-2 text-gray-600 text-sm sm:text-base">
//                                 <input type="checkbox" className="form-checkbox" />
//                                 <span>See only promotions</span>
//                             </label>
//                         </div>
//                     </div>

//                     <div className="mt-6 sm:mt-8 md:mt-6 flex justify-center relative top-4 sm:top-6 md:top-10">
//                         <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center text-sm sm:text-base font-poppins">
//                             <Filter className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
//                             SEARCH
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10">
//                 <button className="bg-pink-500 p-3 sm:p-4 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none">
//                     <i className="fas fa-robot text-white text-xl sm:text-2xl"></i>
//                 </button>
//             </div>
//         </div >
//     );
// }

// Let the select their destination, date and price range.
// Use a search icon to submit the form.
// User will click on select your destination and can type to select their destination.

//Destinations will be:
// Maldives, Dubai, Europe, Thailand, Bali,
// {Europe- Austria, Finland, Norway, Italy, Switzerland, France, United Kingdom, Turkey, Spain}
// {Thailand- Bangkok, Pattaya, Phuket, Krabi, Chiang Mai, Koh Samui, Hua Hin, Koh Phi Phi, Koh Lanta, Koh Tao}
// {Bali- Kuta, Ubud, Seminyak, Nusa Dua, Nusa Penida}
// Azerbaijan, Malasia, Fiji, Thailand, Seychellas, Maldives
//{Oceania- Australia, New Zealand, Melbourne, Perth, Sydney}
//{Middle East- Dubai, Abu Dhabi, Bahrain, Qatar, AIUIa, Saudi Arabia,}
//{Africa- Egypt, South Africa, Kenya, Tanzania, Morocco, Mauritius, Seychelles,}
//{America- USA, Canada, Brazil, Argentina, Peru, Chile, Mexico,}
//{Europe- Austria, Finland, Norway, Italy, Switzerland, France, United Kingdom, Turkey, Spain}
//{Asia- Thailand, Malaysia, Singapore, Indonesia, Maldives, Sri Lanka, Bhutan, Nepal, Vietnam, Cambodia, Japan, China, Hong Kong, Macau, South Korea, Philippines,}
// {India- Delhi, Mumbai, Chennai, Kolkata, Punjab, Haryana, Jammu, Kashmir, Himachal Pradesh, Uttarakhand, Rajasthan, Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana, Odisha, West Bengal, Bihar, Jharkhand, Chhattisgarh, Madhya Pradesh, Uttar Pradesh, Assam, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, Sikkim, Andaman, Nicobar, Lakshadweep, Puducherry, Chandigarh, Dadra, Nagar Haveli, Daman, Diu, Ladakh, Leh, Kargil, Jammu, Kashmir, Himachal Pradesh, Uttarakhand, Rajasthan, Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana, Odisha, West Bengal, Bihar, Jharkhand, Chhattisgarh, Madhya Pradesh}

// they can see these destinations, and select one of them.
// They can select their date.
// They can select their price range.
// then once they click on search, they will be redirected to the search page.
// In the search page, they can see the results of their search.
// They can see the details of the package.
// They can see the price of the package.
// They can see the duration of the package.
// They can see the amenities of the package.
// They can see the image of the package.
// They can see the discount on the package.
// They can see the original price of the package.
// They can see the discounted price of the package.
// They can see the rating of the package.
// They can see the reviews of the package.
// They can see the location of the package.
// On the search page, they can see the filters on the left side.
// They can filter the results by price.
// They can filter the results by duration.
// They can filter the results by amenities.
// They can filter the results by rating.
// They can filter the results by location.
// They can filter the results by discount.
// They can filter the results by reviews.
// They can filter the results by original price.
// They can filter the results by discounted price.
// They can filter the results by name.
// They can filter the results by location.
// They can filter by category of the package as honeymoon, family, friends, solo, group, couple, etc.
// They can filter by continent of the package.
// They can select the no of days of the package.
// They can click on package and can see the full details of that package
// They can see the reviews of that package.
// they can see images, day wise itinerary, inclusions, exclusions, terms and conditions, etc., stays, accomodation, meals, transfers, sightseeing, etc.
// reviews of the pacakge

// they will book the package.
// they will pay the amount.
// they will get the confirmation of the booking.
// they will get the booking id.
// they will get the invoice.
// they will get the voucher.
// they will get the ticket.
// they will get the itinerary.
// they will get the contact details of the agent.
// they can contact the agent.
// they can chat with the agent.
// they can call the agent.
// they can email the agent.
// they can whatsapp the agent.

// fix

'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'

const destinations = [
    'Maldives', 'Dubai', 'Europe', 'Thailand', 'Bali', 'Azerbaijan', 'Malaysia', 'Fiji', 'Seychelles',
    'Australia', 'New Zealand', 'USA', 'Canada', 'Brazil', 'Argentina', 'Peru', 'Chile', 'Mexico',
    'Egypt', 'South Africa', 'Kenya', 'Tanzania', 'Morocco', 'Mauritius',
    'Japan', 'China', 'Hong Kong', 'Macau', 'South Korea', 'Philippines',
    'India'
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
                                <SelectTrigger id="destination">
                                    <SelectValue placeholder="All Destinations" />
                                </SelectTrigger>
                                <SelectContent>
                                    {destinations.map((dest) => (
                                        <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col">
                            <Label htmlFor="date" className="text-gray-600 font-semibold mb-2">Select Your Date:</Label>
                            <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 border rounded-md text-gray-700" />
                        </div>

                        <div className="flex flex-col">
                            <Label htmlFor="price-range" className="text-gray-600 font-semibold mb-2">Max Price: ₹{maxPrice}</Label>
                            <Slider
                                id="price-range"
                                min={0}
                                max={100000}
                                step={1000}
                                value={[maxPrice]}
                                onValueChange={(value) => setMaxPrice(value[0])}
                                className="w-full"
                            />
                            <div className="flex items-center space-x-2 mt-2">
                                <Checkbox id="promotions" checked={promotionsOnly} onCheckedChange={(checked) => setPromotionsOnly(checked as boolean)} />
                                <Label htmlFor="promotions" className="text-gray-600 text-sm">See only promotions</Label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Button onClick={handleSearch} className="px-6 py-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full font-semibold hover:opacity-90 transition-opacity duration-300">
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
        </div>
    )
}

