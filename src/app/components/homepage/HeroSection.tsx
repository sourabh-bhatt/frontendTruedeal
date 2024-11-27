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

// "use client";

// import { useState, useEffect } from 'react';
// import { Filter } from 'lucide-react';
// import { Combobox } from '@headlessui/react';
// import countryData from '@/lib/country.json';

// type Destination = {
//   type: 'country' | 'city';
//   name: string;
// };

// export default function HeroSection() {
//     const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
//     const [query, setQuery] = useState('');
//     const [destinations, setDestinations] = useState<Destination[]>([]);

//     useEffect(() => {
//         const allDestinations: Destination[] = [];
//         countryData.Sheet1.forEach((item) => {
//             if (item && item.Country) {
//                 allDestinations.push({ type: 'country', name: item.Country });
//                 if (item['Popular Travel Cities']) {
//                     item['Popular Travel Cities'].split(', ').forEach((city: string) => {
//                         allDestinations.push({ type: 'city', name: city });
//                     });
//                 }
//             }
//         });
//         setDestinations(allDestinations);
//     }, []);

//     const filteredDestinations =
//         query === ''
//             ? destinations.slice(0, 5)
//             : destinations.filter((destination) =>
//                 destination.name.toLowerCase().includes(query.toLowerCase())
//               ).slice(0, 5);

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
//                             <Combobox value={selectedDestination} onChange={setSelectedDestination}>
//                                 <div className="relative">
//                                     <Combobox.Input
//                                         className="w-full p-2 border rounded-md text-gray-700 text-sm sm:text-base"
//                                         displayValue={(destination: Destination | null) => destination?.name ?? ''}
//                                         onChange={(event) => setQuery(event.target.value)}
//                                     />
//                                     <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                                         {filteredDestinations.map((destination) => (
//                                             <Combobox.Option
//                                                 key={`${destination.type}-${destination.name}`}
//                                                 value={destination}
//                                                 className={({ active }) =>
//                                                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                                                         active ? 'bg-blue-600 text-white' : 'text-gray-900'
//                                                     }`
//                                                 }
//                                             >
//                                                 {({ selected, active }) => (
//                                                     <>
//                                                         <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
//                                                             {destination.name} ({destination.type})
//                                                         </span>
//                                                         {selected ? (
//                                                             <span
//                                                                 className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                                                                     active ? 'text-white' : 'text-blue-600'
//                                                                 }`}
//                                                             >
//                                                                 ✓
//                                                             </span>
//                                                         ) : null}
//                                                     </>
//                                                 )}
//                                             </Combobox.Option>
//                                         ))}
//                                     </Combobox.Options>
//                                 </div>
//                             </Combobox>
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
//         </div>
//     );
// }

// fixxx

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AutoComplete, DatePicker, Slider, InputNumber, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import countryData from '@/lib/country.json'

const { RangePicker } = DatePicker

type OptionType = {
    value: string
    label: string
}

export default function HeroSection() {
    const router = useRouter()
    const [destination, setDestination] = useState<string>('')
    const [budget, setBudget] = useState<number>(50000)
    const [options, setOptions] = useState<OptionType[]>([])

    const handleSearch = (value: string) => {
        const allDestinations: OptionType[] = []
        countryData.Sheet1.forEach((item) => {
            if (item && item.Country) {
                allDestinations.push({ value: item.Country, label: `${item.Country} (Country)` })
                if (item['Popular Travel Cities']) {
                    item['Popular Travel Cities'].split(', ').forEach((city: string) => {
                        allDestinations.push({ value: city, label: `${city} (City)` })
                    })
                }
            }
        })

        const filteredOptions = allDestinations
            .filter((option) => option.value.toLowerCase().includes(value.toLowerCase()))
            .slice(0, 5)

        setOptions(filteredOptions)
    }

    const onSelect = (value: string) => {
        setDestination(value)
    }

    const handleSearchClick = () => {
        router.push('/create')
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

                <div className="bg-white p-6 w-full max-w-4xl ml-[8%] font-poppins mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <label className="text-gray-600 mb-2 text-sm font-bold">Select Your Destination:</label>
                            <AutoComplete
                                style={{ width: '100%' }}
                                onSearch={handleSearch}
                                onSelect={onSelect}
                                placeholder="Search destinations"
                                options={options}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold mb-2 text-sm">Select Your Dates:</label>
                            <RangePicker style={{ width: '100%' }} />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold mb-2 text-sm">Max Budget (₹):</label>
                            <div className="flex items-center">
                                <Slider
                                    min={0}
                                    max={100000}
                                    onChange={(value: number) => setBudget(value)}
                                    value={typeof budget === 'number' ? budget : 0}
                                    style={{ flex: 1, marginRight: 16 }}
                                />
                                <InputNumber
                                    min={0}
                                    max={100000}
                                    style={{ width: 100 }}
                                    value={budget}
                                    onChange={(value: number | null) => setBudget(value ?? 0)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            size="large"
                            onClick={handleSearchClick}
                            className="bg-blue-500 hover:bg-blue-600"
                        >
                            SEARCH
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

