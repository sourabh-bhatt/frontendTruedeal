// Google Analytics measurement ID
export const GA_MEASUREMENT_ID = 'G-JSZ8M226ZH'

// Define types for gtag
type GtagEvent = {
    action: string
    category: string
    label: string
    value?: number
}

type Gtag = {
    (command: 'config', targetId: string, config?: { page_path?: string }): void
    (command: 'event', action: string, params: {
        event_category: string
        event_label: string
        value?: number
    }): void
}

// Initialize gtag function
declare global {
    interface Window {
        gtag: Gtag
    }
}

// Log page views
export const pageview = (url: string) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    })
}

// Log specific events
export const event = ({ action, category, label, value }: GtagEvent) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
} 