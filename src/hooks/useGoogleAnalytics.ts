'use client';

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/lib/gtag'

export const useGoogleAnalytics = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (pathname) {
            const url = pathname + searchParams.toString()
            pageview(url)
        }
    }, [pathname, searchParams])
} 