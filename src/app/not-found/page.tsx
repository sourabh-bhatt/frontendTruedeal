"use client"

import { Suspense } from "react"
import NotFoundContent from "./not-found-content"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <Suspense
                fallback={
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold">Loading...</h2>
                    </div>
                }
            >
                <NotFoundContent />
            </Suspense>
        </div>
    )
}

