import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Chatbot } from "./components/chatbot/Chatbot";
import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from '../components/GoogleAnalytics';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.truedeal4u.com'),
  title: "TrueDeal | Best Tour & Travel Agency for Memorable Trips",
  description: "Plan your next adventure with TrueDeal4U, a trusted tour and travel agency. Explore custom packages, affordable deals, and expert guidance for a hassle-free journey.",
  keywords: "tour, travel, agency, packages, deals, expert, guidance, hassle-free, memorable, trips, adventure, explore, custom, affordable, trusted, TrueDeal, tour packages, tours and packages, india tours, tours and travels, india tour packages from kerala, india tour trip, trip package, package travels, travel tours, tours to nepal, trips to ladakh, travel for solos, cheap tour packages, india tour packages, india travel packages, holiday packages in india, india trip packages, india travels, india travel agency delhi, tours and travels, india tour packages from kerala, india tour trip, trip package, package travels, travel tours, tours to nepal, trips to ladakh, travel for solos, cheap tour packages, india tour packages, india travel packages, holiday packages in india, india trip packages, india travels, india travel agency delhi, holiday trip in india, sri lanka tours, tour sri lanka, sri lanka trips, adventure travels, tours for families, agency travels, travelling package, ladakh trip, travel by tour, arunachal pradesh trip, arunachal tours, tour to arunachal pradesh, leh ladakh tour, cheap tourist packages, leh ladakh tour package, ladakh trip package, leh ladakh trip package, travel agency delhi, leh ladakh packages, maldives, Famous places in Baku, Cheapest flights, Flight for thailand, best destination for honeymoon, Group tour packages",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.truedeal4u.com',
    siteName: 'TrueDeal',
    title: "TrueDeal | Best Tour & Travel Agency for Memorable Trips",
    description: "Plan your next adventure with TrueDeal, a trusted tour and travel agency. Explore custom packages, affordable deals, and expert guidance for a hassle-free journey.",
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
    googleBot: {
      index: true,
      follow: true,
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
    title: "TrueDeal | Best Tour & Travel Agency for Memorable Trips",
    description: "Plan your next adventure with TrueDeal4U, a trusted tour and travel agency. Explore custom packages, affordable deals, and expert guidance for a hassle-free journey.",
    site: '@truedeal4u', // Replace with your Twitter handle
    creator: '@truedeal4u', // Replace with your Twitter handle
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
        <head>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
            }}
          />
        </head>
        <body
          className={poppins.className}
        >
          <GoogleAnalytics />
          <Navbar />
          {children}
          <SpeedInsights />
          <Chatbot />
          <Footer />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
