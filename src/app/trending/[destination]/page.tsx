// import Image from "next/image"
// import { MapPin, Calendar, Phone } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"

// const offers = [
//     {
//         title: "Breeze Through Bangkok & Pattaya",
//         nights: 2,
//         days: 3,
//         originalPrice: 26500,
//         discountedPrice: 21059,
//         image: "/Assets/DestinationsImage/china.jpg",
//         discount: 18,
//         amenities: ["Stay", "Transfers"],
//         destination: "bangkok-pattaya",
//         overview: "Pattaya is a city on Thailand's eastern Gulf coast known for its beaches. A quiet fishing village as recently as the 1960s, it's now lined with resort hotels, high-rise condos, shopping malls, cabaret bars and 24-hour clubs. Nearby, hillside Wat Phra Yai Temple features an 18m-tall golden Buddha. The area also features several designer golf courses, some with views of Pattaya Bay.",
//         itinerary: [
//             { day: "Day 01", activity: "Coral Island Tour" },
//             { day: "Day 02", activity: "Alcazar Cabaret Show" },
//             { day: "Day 03", activity: "Tiger Park Pattaya" },
//         ]
//     },
//     // Add other offers here...
// ];

// export default function DestinationDetails({ params }: { params: { destination: string } }) {
//     const offer = offers.find(o => o.destination === params.destination);

//     if (!offer) {
//         return <div>Destination not found</div>;
//     }

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-8">
//             <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
//                 <div className="space-y-8">
//                     <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
//                         <Image
//                             src={offer.image}
//                             alt={offer.title}
//                             className="object-cover"
//                             fill
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         />
//                         <button className="absolute left-4 bottom-4 px-4 py-2 bg-white/90 rounded-lg text-sm font-medium">
//                             View Gallery
//                         </button>
//                     </div>

//                     <div>
//                         <h1 className="text-3xl font-bold">{offer.title}</h1>
//                         <div className="flex items-center gap-2 mt-2 text-muted-foreground">
//                             <MapPin className="w-4 h-4" />
//                             <span>{offer.destination.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
//                             <span>•</span>
//                             <Calendar className="w-4 h-4" />
//                             <span>{offer.nights} Nights</span>
//                             <span>•</span>
//                             <span>{offer.days} Days</span>
//                         </div>
//                     </div>

//                     <div className="space-y-4">
//                         <h2 className="text-2xl font-semibold">Overview</h2>
//                         <p className="text-muted-foreground">{offer.overview}</p>
//                     </div>

//                     <div className="space-y-4">
//                         <h2 className="text-2xl font-semibold">Itinerary</h2>
//                         <div className="space-y-6">
//                             {offer.itinerary.map((item, index) => (
//                                 <div key={index} className="relative pl-8 pb-6 border-l-2 border-muted last:pb-0">
//                                     <div className="absolute left-0 translate-x-[-50%] w-4 h-4 rounded-full bg-primary" />
//                                     <h3 className="font-semibold">{item.day}</h3>
//                                     <p className="text-lg">{item.activity}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <Separator />

//                     <div className="space-y-4">
//                         <h2 className="text-2xl font-semibold">Package Options</h2>
//                         <div className="grid gap-4">
//                             <div className="flex justify-between items-center py-2">
//                                 <span>Single share</span>
//                                 <span className="font-semibold">₹{offer.discountedPrice.toLocaleString()}</span>
//                             </div>
//                             <div className="flex justify-between items-center py-2">
//                                 <span>Twin share</span>
//                                 <span className="font-semibold">₹{offer.discountedPrice.toLocaleString()}</span>
//                             </div>
//                             <div className="flex justify-between items-center py-2">
//                                 <span>Triple share</span>
//                                 <span className="font-semibold">₹{offer.discountedPrice.toLocaleString()}</span>
//                             </div>
//                             <div className="flex justify-between items-center py-2">
//                                 <span>Child with bed</span>
//                                 <span className="font-semibold">-</span>
//                             </div>
//                             <div className="flex justify-between items-center py-2">
//                                 <span>Child without bed</span>
//                                 <span className="font-semibold">-</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="lg:sticky lg:top-8 space-y-6">
//                     <Card>
//                         <CardContent className="p-6">
//                             <div className="space-y-4">
//                                 <div className="flex items-center gap-2">
//                                     <Calendar className="w-4 h-4 text-muted-foreground" />
//                                     <span>Dec 14, 2 Adults, 1 Room</span>
//                                 </div>
//                                 <div>
//                                     <div className="text-3xl font-bold">₹{offer.discountedPrice.toLocaleString()}</div>
//                                     <div className="text-sm text-muted-foreground">Per person</div>
//                                 </div>
//                                 <Button className="w-full" size="lg">
//                                     Book this trip
//                                 </Button>
//                                 <div className="text-sm text-center text-muted-foreground">
//                                     Confirm your trip by paying only ₹{Math.floor(offer.discountedPrice * 0.2).toLocaleString()} now
//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardContent className="p-6 space-y-4">
//                             <h3 className="font-semibold">Need Help?</h3>
//                             <p className="text-sm text-muted-foreground">
//                                 Our Destination expert will be happy to help you resolve your queries for this tour
//                             </p>
//                             <div className="flex items-center gap-2">
//                                 <Phone className="w-4 h-4" />
//                                 <span className="font-semibold">+91 9495000000</span>
//                             </div>
//                         </CardContent>
//                     </Card>

//                     <Card>
//                         <CardContent className="p-6 space-y-6">
//                             <div>
//                                 <h3 className="font-semibold mb-4">Inclusions</h3>
//                                 <ul className="space-y-2">
//                                     <li className="flex items-start gap-2 text-sm">
//                                         <div className="w-4 h-4 mt-1 rounded-full border-2 border-primary" />
//                                         {offer.nights} nights accommodation in 3* hotel
//                                     </li>
//                                     <li className="flex items-start gap-2 text-sm">
//                                         <div className="w-4 h-4 mt-1 rounded-full border-2 border-primary" />
//                                         Daily breakfast and dinner
//                                     </li>
//                                     <li className="flex items-start gap-2 text-sm">
//                                         <div className="w-4 h-4 mt-1 rounded-full border-2 border-primary" />
//                                         All transfers under Pvt basis in air conditioned vehicle for the mentioned itinerary
//                                     </li>
//                                 </ul>
//                             </div>

//                             <div>
//                                 <h3 className="font-semibold mb-4">Exclusions</h3>
//                                 <ul className="space-y-2">
//                                     <li className="flex items-start gap-2 text-sm">
//                                         <div className="w-4 h-4 mt-1 rounded-full border-2 border-destructive" />
//                                         Any meals other than those mentioned in the inclusions
//                                     </li>
//                                     <li className="flex items-start gap-2  h-4 mt-1 rounded-full border-2 border-destructive" />
//                                     Porterage, Beverages, Laundry expenses
//                                 </li>
//                                 <li className="flex items-start gap-2  h-4 mt-1 rounded-full border-2 border-destructive" />
//                                 Expenses caused by factors beyond our control like flight delays, roadblocks, vehicle malfunctions,
//                                 political disturbances, natural calamities etc.
//                             </li>
//                         </ul>
//                     </Card>
//                 </div>
//             </CardContent>
//         </div >
//     )
// }

