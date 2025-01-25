"use client"

import AnalyticsSuspense from "@/app/components/AnalyticsWrapper"

export default function NotFoundPage() {
    return (
        <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground">Sorry, the page you are looking for does not exist.</p>
            <AnalyticsSuspense />
        </div>
    )
}

