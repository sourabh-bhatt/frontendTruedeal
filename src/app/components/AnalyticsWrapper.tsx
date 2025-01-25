"use client"

import { Suspense } from "react"
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics"

const AnalyticsWrapper = () => {
    useGoogleAnalytics()
    return null
}

export default function AnalyticsSuspense() {
    return (
        <Suspense fallback={null}>
            <AnalyticsWrapper />
        </Suspense>
    )
} 