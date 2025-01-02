// 'use client'

// import { useRef, useState, useEffect } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

// interface Testimonial {
//     name: string
//     videoUrl: string
// }

// const testimonials: Testimonial[] = [
//     { name: "Anupama", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821588/ugcUtvBikeRide_jkfvqs.mp4" },
//     { name: "Amyra Dastur", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821589/catDance_ky6dcj.mp4" },
//     { name: "Divya Bharathi", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821576/aeroplaneView_rjfn1g.mov" },
//     { name: "Megha Akash", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821575/atvBikeRideSunset_vtflt1.mov" },
//     { name: "Rashmika Mandanna", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821572/IMG_9626_qhjfu5.mov" },
//     { name: "Samantha Akkineni", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821566/ceoDubai_oxkpib.mp4" },

// ]

// export default function WallOfLove() {
//     const scrollContainerRef = useRef<HTMLDivElement>(null)
//     const [showLeftButton, setShowLeftButton] = useState(false)
//     const [showRightButton, setShowRightButton] = useState(false)

//     const updateButtonVisibility = () => {
//         if (scrollContainerRef.current) {
//             const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
//             setShowLeftButton(scrollLeft > 0)
//             setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1)
//         }
//     }

//     useEffect(() => {
//         updateButtonVisibility()
//         window.addEventListener('resize', updateButtonVisibility)
//         return () => window.removeEventListener('resize', updateButtonVisibility)
//     }, [])

//     const scroll = (direction: 'left' | 'right') => {
//         if (scrollContainerRef.current) {
//             const scrollAmount = scrollContainerRef.current.clientWidth
//             scrollContainerRef.current.scrollBy({
//                 left: direction === 'left' ? -scrollAmount : scrollAmount,
//                 behavior: 'smooth'
//             })
//         }
//     }

//     return (
//         <section className="bg-gradient-to-r from-[#328cdb] to-[#00f6ff] text-white px-4 sm:px-6 py-12 overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 <div className="mb-8">
//                     <h2 className="text-3xl sm:text-4xl font-bold mb-2">Dubai Memories</h2>
//                     <p className="text-white/90 mb-4">
//                         Loved by travellers & industry partners across the world
//                     </p>

//                     <div className="flex items-center gap-4">
//                         <div className="flex items-center gap-2">
//                             <img src="/Assets/Icons/icons8-google.svg" alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
//                             <img src="/Assets/Icons/icons8-instagram.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="font-semibold">4.6</span>
//                             <Star className="w-4 h-4 fill-current text-yellow-400" />
//                             <span className="text-sm text-white/75">7400+ reviews</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="relative">
//                     <div
//                         ref={scrollContainerRef}
//                         className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//                         onScroll={updateButtonVisibility}
//                     >
//                         {testimonials.map((testimonial, index) => (
//                             <Card
//                                 key={index}
//                                 className="flex-none w-[280px] sm:w-[320px] bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden snap-center"
//                             >
//                                 <video
//                                     className="w-full aspect-[3/4] object-cover"
//                                     autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                 >
//                                     <source src={testimonial.videoUrl} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video>
//                                 <div className="p-4">
//                                     <h3 className="font-medium">{testimonial.name}</h3>
//                                 </div>
//                             </Card>
//                         ))}
//                     </div>

//                     {showLeftButton && (
//                         <Button
//                             onClick={() => scroll('left')}
//                             className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2"
//                             size="icon"
//                             variant="ghost"
//                             aria-label="Scroll left"
//                         >
//                             <ChevronLeft className="h-6 w-6" />
//                         </Button>
//                     )}

//                     {showRightButton && (
//                         <Button
//                             onClick={() => scroll('right')}
//                             className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2"
//                             size="icon"
//                             variant="ghost"
//                             aria-label="Scroll right"
//                         >
//                             <ChevronRight className="h-6 w-6" />
//                         </Button>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

'use client'

import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
    name: string
    videoUrl: string
}

const testimonials: Testimonial[] = [
    { name: "Anupama", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821588/ugcUtvBikeRide_jkfvqs.mp4" },
    { name: "Amyra Dastur", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821589/catDance_ky6dcj.mp4" },
    { name: "Divya Bharathi", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821576/aeroplaneView_rjfn1g.mov" },
    { name: "Megha Akash", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821575/atvBikeRideSunset_vtflt1.mov" },
    { name: "Rashmika Mandanna", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821572/IMG_9626_qhjfu5.mov" },
    { name: "Samantha Akkineni", videoUrl: "https://res.cloudinary.com/dwwyljy3m/video/upload/v1735821566/ceoDubai_oxkpib.mp4" },
]

export default function WallOfLove() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftButton, setShowLeftButton] = useState(false)
    const [showRightButton, setShowRightButton] = useState(false)

    const updateButtonVisibility = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftButton(scrollLeft > 0)
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    useEffect(() => {
        updateButtonVisibility()
        window.addEventListener('resize', updateButtonVisibility)
        return () => window.removeEventListener('resize', updateButtonVisibility)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="bg-[#7C3AED] text-white px-4 sm:px-6 py-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute bottom-0 left-0 text-white/5 w-[800px] h-[800px] -translate-x-1/2 translate-y-1/4" viewBox="0 0 100 100">
                    <path d="M0,50 a1,1 0 0,0 100,0" fill="none" stroke="currentColor" strokeWidth="20" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="mb-12">
                    <h2 className="text-5xl font-extrabold mb-4 tracking-tight">Dubai Memories</h2>
                    <p className="text-xl text-white/90 mb-6">
                        Loved by travellers & industry partners across the world
                    </p>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white rounded-full p-1.5">
                                <img src="/Assets/Icons/icons8-google.svg" alt="Google" className="w-5 h-5" />
                            </div>
                            <div className="bg-white rounded-full p-1.5">
                                <img src="/Assets/Icons/icons8-instagram.svg" alt="Instagram" className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">4.6</span>
                            <Star className="w-5 h-5 fill-current text-yellow-400" />
                            <span className="text-base text-white/90">7400+ reviews</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                        onScroll={updateButtonVisibility}
                    >
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="flex-none w-[300px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden snap-center border-0"
                            >
                                <video
                                    className="w-full aspect-[3/4] object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={testimonial.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {showLeftButton && (
                        <Button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 p-0"
                            size="icon"
                            variant="ghost"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </Button>
                    )}

                    {showRightButton && (
                        <Button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-12 h-12 p-0"
                            size="icon"
                            variant="ghost"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}

