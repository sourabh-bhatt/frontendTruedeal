import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Chatbot } from "./components/chatbot/Chatbot";
// import Script from 'next/script'
// import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from '../components/GoogleAnalytics';
import { Poppins } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';

// Dynamically import ClerkProvider with fallback
const ClerkProvider = dynamic(
  () => {
    if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
      return import('@clerk/nextjs').then((mod) => mod.ClerkProvider);
    }
    return Promise.resolve(({ children }: { children: React.ReactNode }) => <>{children}</>);
  },
  { ssr: true }
);

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.truedeal4u.com'),
  title: {
    default: 'TrueDeal | Best Tour & Travel Agency',
    template: '%s | TrueDeal'
  },
  description: "Plan your next adventure with TrueDeal. We offer custom travel packages, international tours, and expert guidance for memorable journeys.",
  keywords: [
    'international tours',
    'holiday packages',
    'travel agency',
    'custom travel packages',
    'group tours',
    'luxury travel',
    'adventure trips',
    'honeymoon packages',
    'family vacation',
    'business travel',
    'visa services',
    'flight booking',
    'hotel booking',
    'travel insurance',
    'destination guides'
  ].join(', '),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.truedeal4u.com',
    siteName: 'TrueDeal',
    title: 'TrueDeal | Best Tour & Travel Agency',
    description: "Plan your next adventure with TrueDeal. We offer custom travel packages, international tours, and expert guidance for memorable journeys.",
    images: [
      {
        url: 'https://www.truedeal4u.com/Assets/NavbarImages/logo.png',
        width: 1200,
        height: 630,
        alt: 'TrueDeal Logo',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=2wyPdrWOgtbDk0m_GbZfczCwx6g46vqbXpbP-INhwy0',
  },
  alternates: {
    canonical: 'https://www.truedeal4u.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueDeal | Best Tour & Travel Agency',
    description: "Plan your next adventure with TrueDeal. We offer custom travel packages, international tours, and expert guidance for memorable journeys.",
    site: '@truedeal4u',
    creator: '@truedeal4u',
    images: ['https://www.truedeal4u.com/Assets/NavbarImages/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-NTPTHZPG" />
        <body className={poppins.className}>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTPTHZPG"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <GoogleAnalytics />
          
            <Navbar />
              {children}
            <SpeedInsights />
            <Chatbot />
            <Footer />
          
          <Analytics />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}