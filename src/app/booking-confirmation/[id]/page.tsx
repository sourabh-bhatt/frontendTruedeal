import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BookingConfirmation({ params }: { params: { id: string } }) {
    const bookingId = `TD${params.id}${Math.floor(Math.random() * 10000)}`

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-xl mb-8">Thank you for booking with Truedeal Travel Engine.</p>
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8" role="alert">
                <strong className="font-bold">Booking ID: </strong>
                <span className="block sm:inline">{bookingId}</span>
            </div>
            <p className="mb-8">
                We&apos;ve sent a confirmation email with all the details of your booking.
                If you have any questions, please don&apos;t hesitate to contact our customer support.
            </p>
            <div className="space-y-4">
                <Button asChild>
                    <Link href="/">Return to Home</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href={`/package/${params.id}`}>View Package Details</Link>
                </Button>
            </div>
        </div>
    )
}

