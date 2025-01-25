'use client';

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from '@/lib/gtag'

export const useGoogleAnalytics = () => {
    const pathname = usePathname()

    useEffect(() => {
        if (pathname) {
            const searchParams = new URLSearchParams(window.location.search)
            const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '')
            pageview(url)
        }
    }, [pathname])
} 