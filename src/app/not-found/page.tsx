"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { pageview } from "@/lib/gtag"

export default function NotFound() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
        pageview(url)
    }, [pathname, searchParams])

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

