# TrueDeal - Premium Travel & Tour Booking Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.15-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel)](https://vercel.com)

TrueDeal is a comprehensive travel and tour booking platform that offers curated travel experiences across the globe. From international adventure packages to domestic getaways, we provide end-to-end travel solutions with expert guidance and personalized service.
added env
## 🌟 Features

### 🗺️ Travel Services

- **International Packages**: Thailand, Bali, Vietnam, Europe, Dubai, Singapore, Malaysia, Japan, Greece, Turkey
- **Domestic Packages**: Kerala, Rajasthan, Goa, Leh Ladakh, Kashmir, Chardham Yatra
- **Fixed Departure Tours**: Pre-scheduled group tours with guaranteed departures
- **Group Tours**: Organized travel experiences for various destinations
- **Honeymoon Packages**: Romantic getaways for couples
- **MICE Services**: Meetings, Incentives, Conferences, and Exhibitions

### 💼 Additional Services

- **Visa Services**: Comprehensive visa assistance for international travel
- **Hotel Bookings**: Partnered with premium hotels worldwide
- **Flight Bookings**: Competitive airfare deals
- **Travel Insurance**: Comprehensive coverage for peace of mind
- **Forex Services**: Currency exchange and financial services
- **No-Cost EMI**: Flexible payment options

### 🛠️ Technology Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Built with Next.js for excellent search engine visibility
- **Performance Optimized**: Fast loading times with image optimization
- **Analytics Integration**: Google Analytics and Vercel Speed Insights
- **Interactive Chatbot**: AI-powered customer assistance
- **Real-time Search**: Advanced destination search functionality
- **Booking System**: Seamless booking flow with email confirmations

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sourabh-bhatt/frontendtruedeal.git
   cd frontendtruedeal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install additional packages**

   ```bash
   npm install @fortawesome/fontawesome-free
   npm install react-icons
   npm install lucide-react
   ```

4. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SITE_URL=https://www.truedeal4u.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (destinations)/           # Dynamic destination routes
│   │   ├── bali/
│   │   ├── thailand/
│   │   ├── europe/
│   │   └── ...
│   ├── components/               # Reusable components
│   │   ├── common/              # Navbar, Footer, etc.
│   │   ├── homepage/            # Landing page components
│   │   └── ui/                  # Shadcn/ui components
│   ├── config/                  # Configuration files
│   │   └── destinations.ts      # Destination data
│   ├── data/                    # Static data files
│   ├── api/                     # API routes
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Shared components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries
├── types/                        # TypeScript type definitions
└── utils/                        # Helper functions
```

## 🎨 Tech Stack

### Frontend Framework

- **Next.js 15.1.7** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Font Awesome** - Additional icons

### Backend & APIs

- **Next.js API Routes** - Serverless API endpoints
- **SendGrid** - Email services
- **EmailJS** - Client-side email sending
- **AWS S3** - Image storage and optimization

### Analytics & Monitoring

- **Google Analytics** - Web analytics
- **Google Tag Manager** - Tag management
- **Vercel Analytics** - Performance insights
- **Vercel Speed Insights** - Core Web Vitals

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type checking

## 🌐 Supported Destinations

### International Destinations

- **Southeast Asia**: Thailand, Bali, Vietnam, Singapore, Malaysia, Indonesia
- **Europe**: France, Italy, Switzerland, Germany, Netherlands, Czech Republic
- **Middle East**: Dubai, UAE, Turkey
- **East Asia**: Japan, South Korea, Hong Kong
- **Central Asia**: Kazakhstan (Almaty)

### Domestic Destinations (India)

- **North India**: Kashmir, Leh Ladakh, Rajasthan, Delhi
- **South India**: Kerala, Goa
- **Spiritual Tours**: Chardham Yatra, Mansarovar Yatra

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-select": "^2.1.2",
    "framer-motion": "^10.18.0",
    "lucide-react": "^0.460.0",
    "react-icons": "^5.3.0",
    "react-toastify": "^11.0.2",
    "swiper": "^11.2.1"
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Build

```bash
npm run build
npm run start
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (configured via ESLint)

### Performance Optimizations

- **Image Optimization**: AWS S3 with Next.js Image component
- **Code Splitting**: Automatic code splitting with Next.js
- **Caching**: Aggressive caching headers for static assets
- **Bundle Analysis**: Optimized package imports

## 📱 Features Overview

### 🏠 Homepage

- Hero section with dynamic search
- Featured destination banners
- Fixed departure tours showcase
- Customer testimonials
- Gallery and reviews

### 🔍 Search & Discovery

- Advanced destination search
- Filter by destination, duration, budget
- Trending destinations
- Personalized recommendations

### 📋 Booking System

- Multi-step booking process
- Real-time availability
- Email confirmations
- Payment integration
- Cancellation policies

### 👥 Customer Support

- Interactive chatbot
- Contact forms
- WhatsApp integration
- Multiple inquiry channels

## 🎯 Business Features

### For Travel Agents

- Bulk booking capabilities
- Agent portal
- Commission management
- Performance analytics

### For Customers

- Personalized dashboard
- Booking history
- Wishlist functionality
- Loyalty program

## 🔒 Security & Privacy

- **SSL Encryption**: HTTPS enabled
- **Data Protection**: Secure data handling
- **GDPR Compliance**: Privacy-first approach
- **Payment Security**: Secure payment gateways

## 📊 Analytics & SEO

### SEO Features

- **Meta Tags**: Dynamic meta tags for all pages
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine optimization

### Analytics

- **Google Analytics 4**: User behavior tracking
- **Conversion Tracking**: Booking funnel analysis
- **Performance Monitoring**: Core Web Vitals tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and inquiries:

- **Email**: web@truedeal4u.com
- **Phone**: +91-9918461846
- **Website**: [https://www.truedeal4u.com](https://www.truedeal4u.com)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **All Contributors** - For their valuable contributions

---

**Made with ❤️ by TrueDeal Team**

_Plan your next adventure with confidence. TrueDeal - Your trusted travel partner._
