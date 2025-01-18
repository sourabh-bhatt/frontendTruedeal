// Google Analytics measurement ID
export const GA_MEASUREMENT_ID = 'G-JSZ8M226ZH'

// Initialize gtag function
declare global {
    interface Window {
        gtag: (...args: any[]) => void
    }
}

// Log page views
export const pageview = (url: string) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    })
}

// Log specific events
export const event = ({ action, category, label, value }: {
    action: string
    category: string
    label: string
    value?: number
}) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
} 