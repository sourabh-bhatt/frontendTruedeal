'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function BookingPage({ params }: { params: { id: string } }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        specialRequests: '',
    })
    const router = useRouter()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the booking data to your backend
        console.log('Booking submitted:', { packageId: params.id, ...formData })

        // Simulate a successful booking
        router.push(`/booking-confirmation/${params.id}`)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Book Your Package</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="specialRequests">Special Requests</Label>
                        <Textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <Button type="submit" className="w-full mt-6">
                    Confirm Booking
                </Button>
            </form>
        </div>
    )
}

