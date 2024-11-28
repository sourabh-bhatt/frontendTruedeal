// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { Radio, Card, Button } from 'antd'
// import { ArrowRightOutlined } from '@ant-design/icons'

// export default function CreateTrip() {
//     const router = useRouter()
//     const [duration, setDuration] = useState<string>('')
//     const [travelGroup, setTravelGroup] = useState<string>('')

//     const handleSearch = () => {
//         router.push('/results')
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl mx-auto">
//                 <h1 className="text-3xl font-bold text-center mb-8">Plan Your Trip</h1>

//                 <Card className="mb-8">
//                     <h2 className="text-xl font-semibold mb-4">What's the duration of your holiday?</h2>
//                     <Radio.Group onChange={(e) => setDuration(e.target.value)} value={duration}>
//                         <Radio.Button value="3-5">3-5 days</Radio.Button>
//                         <Radio.Button value="6-8">6-8 days</Radio.Button>
//                         <Radio.Button value="9-11">9-11 days</Radio.Button>
//                         <Radio.Button value="12-15">12-15 days</Radio.Button>
//                     </Radio.Group>
//                 </Card>

//                 <Card className="mb-8">
//                     <h2 className="text-xl font-semibold mb-4">Who is travelling with you?</h2>
//                     <Radio.Group onChange={(e) => setTravelGroup(e.target.value)} value={travelGroup}>
//                         <Radio.Button value="couple">Couple</Radio.Button>
//                         <Radio.Button value="family">Family</Radio.Button>
//                         <Radio.Button value="friends">Friends</Radio.Button>
//                         <Radio.Button value="solo">Solo</Radio.Button>
//                     </Radio.Group>
//                 </Card>

//                 <div className="text-center">
//                     <Button
//                         type="primary"
//                         icon={<ArrowRightOutlined />}
//                         size="large"
//                         onClick={handleSearch}
//                         disabled={!duration || !travelGroup}
//                         className="bg-blue-500 hover:bg-blue-600"
//                     >
//                         Show Destinations
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";

import { useState } from 'react';
import { Card, Radio, Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function CreateTrip() {
    const router = useRouter();
    const [duration, setDuration] = useState('');
    const [travelGroup, setTravelGroup] = useState('');

    const handleContinue = () => {
        if (duration && travelGroup) {
            router.push('/destinations');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Customize Your Trip</h1>
                    <p className="mt-2 text-gray-600">Tell us more about your travel preferences</p>
                </div>

                <Card className="shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">What's the duration of your holiday?</h2>
                    <Radio.Group
                        onChange={e => setDuration(e.target.value)}
                        value={duration}
                        className="space-y-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <Radio value="3-5">3-5 days</Radio>
                            <Radio value="6-8">6-8 days</Radio>
                            <Radio value="9-11">9-11 days</Radio>
                            <Radio value="12-15">12-15 days</Radio>
                        </div>
                    </Radio.Group>
                </Card>

                <Card className="shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Who is travelling with you?</h2>
                    <Radio.Group
                        onChange={e => setTravelGroup(e.target.value)}
                        value={travelGroup}
                        className="space-y-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <Radio value="couple">Couple</Radio>
                            <Radio value="family">Family</Radio>
                            <Radio value="friends">Friends</Radio>
                            <Radio value="solo">Solo</Radio>
                        </div>
                    </Radio.Group>
                </Card>

                <div className="flex justify-center">
                    <Button
                        type="primary"
                        size="large"
                        onClick={handleContinue}
                        disabled={!duration || !travelGroup}
                        className="px-8 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                    >
                        Continue to Destinations
                    </Button>
                </div>
            </div>
        </div>
    );
}