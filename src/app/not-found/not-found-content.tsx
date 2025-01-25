"use client"

import { usePathname } from "next/navigation"
import { useEffect, Suspense } from "react"
import { pageview } from "@/lib/gtag"

const NotFoundContent = () => {
    const pathname = usePathname()

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '')
        pageview(url)
    }, [pathname])

    return (
        <div>
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground">Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

export default function NotFound() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NotFoundContent />
        </Suspense>
    )
}

