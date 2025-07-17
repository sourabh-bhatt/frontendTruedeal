# Truedeal Frontend - Comprehensive API Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Components](#components)
4. [Hooks](#hooks)
5. [UI Components](#ui-components)
6. [API Routes](#api-routes)
7. [Types & Interfaces](#types--interfaces)
8. [Utilities](#utilities)
9. [Constants](#constants)
10. [Setup & Installation](#setup--installation)

## Project Overview

Truedeal Frontend is a Next.js 15 application built with TypeScript, React 18, and Tailwind CSS. It's a travel booking platform that provides:

- Travel package browsing and booking
- Job application system
- Trip planning functionality
- User authentication via Clerk
- Email notifications via SendGrid
- Google Analytics integration

### Tech Stack

- **Framework**: Next.js 15
- **Runtime**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: Radix UI + Custom Components
- **Authentication**: Clerk
- **Email Service**: SendGrid
- **Analytics**: Google Analytics
- **Animation**: Framer Motion

## Architecture

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
├── hooks/              # Custom React hooks
├── lib/                # Library functions and utilities
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── constants/          # Application constants
```

## Components

### JobApplicationForm

A comprehensive job application form component with file upload functionality.

**Props:**
```typescript
interface JobApplicationFormProps {
    isOpen: boolean;      // Controls modal visibility
    onClose: () => void;  // Callback when modal closes
    position: string;     // Job position to apply for
}
```

**Usage:**
```tsx
import JobApplicationForm from '@/components/JobApplicationForm';

function JobListings() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState('');

    return (
        <>
            <button onClick={() => {
                setSelectedPosition('Software Engineer');
                setIsFormOpen(true);
            }}>
                Apply Now
            </button>
            
            <JobApplicationForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                position={selectedPosition}
            />
        </>
    );
}
```

**Features:**
- Form validation with real-time error display
- File upload for resume (PDF, DOC, DOCX)
- Phone number formatting and validation
- Submission status tracking
- Toast notifications for user feedback
- Responsive design

### TripPlanPopup

A modal component for displaying detailed trip planning information.

**Usage:**
```tsx
import TripPlanPopup from '@/components/TripPlanPopup';

function TravelPage() {
    return (
        <TripPlanPopup 
            // Props will be based on the component's interface
        />
    );
}
```

### TripPlanRequest

A component for handling trip planning requests from users.

**Usage:**
```tsx
import TripPlanRequest from '@/components/TripPlanRequest';

function PlanningPage() {
    return (
        <TripPlanRequest 
            // Props will be based on the component's interface
        />
    );
}
```

### PageWrapper

A layout component that provides consistent page animations using Framer Motion.

**Props:**
```typescript
interface PageWrapperProps {
    children: ReactNode;  // Child components to wrap
}
```

**Usage:**
```tsx
import { PageWrapper } from '@/components/page-wrapper';

function MyPage() {
    return (
        <PageWrapper>
            <h1>Page Content</h1>
            <p>This content will have smooth animations</p>
        </PageWrapper>
    );
}
```

**Features:**
- Fade-in animation on mount
- Slide-up effect (20px)
- 0.3s transition duration
- Consistent exit animations

### GoogleAnalytics

A component for integrating Google Analytics tracking.

**Usage:**
```tsx
import GoogleAnalytics from '@/components/GoogleAnalytics';

function RootLayout() {
    return (
        <html>
            <body>
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    );
}
```

## Hooks

### useMobile

A custom hook for detecting mobile viewport sizes.

**Returns:**
```typescript
boolean  // true if viewport width < 768px
```

**Usage:**
```tsx
import { useMobile } from '@/hooks/use-mobile';

function ResponsiveComponent() {
    const isMobile = useMobile();

    return (
        <div>
            {isMobile ? (
                <MobileLayout />
            ) : (
                <DesktopLayout />
            )}
        </div>
    );
}
```

**Features:**
- Responsive breakpoint at 768px
- Automatic updates on window resize
- Proper cleanup of event listeners
- SSR-safe implementation

### useToast

A powerful hook for managing toast notifications throughout the application.

**Returns:**
```typescript
{
    toast: (props: ToastProps) => void;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
}
```

**Usage:**
```tsx
import { useToast } from '@/hooks/use-toast';

function MyComponent() {
    const { toast } = useToast();

    const showSuccess = () => {
        toast({
            title: "Success!",
            description: "Your action was completed successfully.",
            variant: "default",
        });
    };

    const showError = () => {
        toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
        });
    };

    return (
        <div>
            <button onClick={showSuccess}>Show Success</button>
            <button onClick={showError}>Show Error</button>
        </div>
    );
}
```

**Toast Options:**
```typescript
interface ToastProps {
    title?: ReactNode;
    description?: ReactNode;
    action?: ToastActionElement;
    variant?: "default" | "destructive";
    duration?: number;
}
```

### useGoogleAnalytics

A hook for tracking Google Analytics events and page views.

**Usage:**
```tsx
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

function TrackingComponent() {
    const { trackEvent, trackPageView } = useGoogleAnalytics();

    const handleButtonClick = () => {
        trackEvent({
            action: 'button_click',
            category: 'engagement',
            label: 'hero_cta'
        });
    };

    return <button onClick={handleButtonClick}>Track Me</button>;
}
```

## UI Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}
```

**Usage:**
```tsx
import { Button } from '@/components/ui/button';

function Examples() {
    return (
        <div className="space-x-2">
            {/* Default button */}
            <Button>Click me</Button>
            
            {/* Variant examples */}
            <Button variant="destructive">Delete</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            
            {/* Size examples */}
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🔍</Button>
            
            {/* With custom styling */}
            <Button className="w-full">Full Width</Button>
            
            {/* As child (renders as different element) */}
            <Button asChild>
                <a href="/link">Link Button</a>
            </Button>
        </div>
    );
}
```

### Input

A styled input component for form fields.

**Props:**
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
```

**Usage:**
```tsx
import { Input } from '@/components/ui/input';

function FormExample() {
    return (
        <div className="space-y-4">
            <Input placeholder="Enter your name" />
            <Input type="email" placeholder="Enter your email" />
            <Input type="password" placeholder="Enter your password" />
            <Input disabled placeholder="Disabled input" />
        </div>
    );
}
```

### Card

A flexible card component for content containers.

**Components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardContent` - Main content area
- `CardFooter` - Footer section
- `CardTitle` - Title text
- `CardDescription` - Description text

**Usage:**
```tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

function CardExample() {
    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle>Travel Package</CardTitle>
                <CardDescription>
                    Explore the beautiful destinations of Thailand
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>5 days, 4 nights package including flights and accommodation.</p>
            </CardContent>
            <CardFooter>
                <Button>Book Now</Button>
            </CardFooter>
        </Card>
    );
}
```

### Dialog

A modal dialog component for overlays and popups.

**Components:**
- `Dialog` - Root component
- `DialogTrigger` - Trigger element
- `DialogContent` - Modal content
- `DialogHeader` - Header section
- `DialogTitle` - Title
- `DialogDescription` - Description
- `DialogFooter` - Footer section

**Usage:**
```tsx
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

function DialogExample() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm Booking</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to book this travel package?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
```

### Select

A dropdown select component with search functionality.

**Components:**
- `Select` - Root component
- `SelectTrigger` - Trigger button
- `SelectContent` - Dropdown content
- `SelectItem` - Individual option
- `SelectValue` - Display value

**Usage:**
```tsx
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

function SelectExample() {
    return (
        <Select>
            <SelectTrigger className="w-48">
                <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="thailand">Thailand</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
                <SelectItem value="dubai">Dubai</SelectItem>
            </SelectContent>
        </Select>
    );
}
```

### Toast

A notification component for user feedback.

**Components:**
- `Toast` - Main toast container
- `ToastAction` - Action button
- `ToastClose` - Close button
- `ToastDescription` - Description text
- `ToastTitle` - Title text
- `ToastProvider` - Context provider
- `ToastViewport` - Toast container viewport
- `Toaster` - Toast manager

**Usage:**
```tsx
import { Toaster } from '@/components/ui/toast';

// Add to your root layout
function RootLayout() {
    return (
        <html>
            <body>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
```

### Carousel

A carousel component for image galleries and content sliders.

**Usage:**
```tsx
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

function CarouselExample() {
    const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];

    return (
        <Carousel className="w-full max-w-lg">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
```

### Accordion

A collapsible content component.

**Usage:**
```tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

function FAQ() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>What's included in the package?</AccordionTrigger>
                <AccordionContent>
                    The package includes flights, accommodation, meals, and guided tours.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Can I cancel my booking?</AccordionTrigger>
                <AccordionContent>
                    Yes, you can cancel up to 48 hours before departure.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
```

## API Routes

### POST /api/send-booking-email

Sends booking inquiry emails to the sales team.

**Request Body:**
```typescript
{
    destination: string;      // Travel destination
    departureCity: string;    // City of departure  
    name: string;            // Customer name
    phone: string;           // Customer phone number
    email: string;           // Customer email
}
```

**Response:**
```typescript
// Success
{ success: true }

// Error
{ error: string }
```

**Usage:**
```typescript
const sendBookingEmail = async (data: BookingData) => {
    try {
        const response = await fetch('/api/send-booking-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
```

### POST /api/job-application

Handles job application submissions with file uploads.

**Request:** Multipart form data with:
- Personal information fields
- Resume file
- Cover letter

**Response:**
```typescript
// Success
{ success: true, message: string }

// Error  
{ error: string }
```

### POST /api/trip-plan

Handles trip planning requests from users.

**Usage:**
```typescript
const submitTripPlan = async (planData: TripPlanData) => {
    const response = await fetch('/api/trip-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(planData),
    });
    
    return response.json();
};
```

### GET /api/blob/*

Handles file storage and retrieval via Vercel Blob.

**Usage:**
```typescript
// Upload file
const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/blob/upload', {
        method: 'POST',
        body: formData,
    });
    
    return response.json();
};
```

## Types & Interfaces

### TravelPackage

Core interface for travel package data.

```typescript
interface TravelPackage {
    id: number;
    name: string;
    destination: string;
    duration: {
        nights: number;
        days: number;
    };
    price: number;
    advancePayment: number;
    image: string;
    description: string;
    itinerary: PackageDay[];
    packageOptions: PackageOptions;
    inclusions: string[];
    exclusions: string[];
    cancellationPolicy: string[];
    galleryImages: string[];
    rating?: number;
    reviews?: number;
}
```

**Usage:**
```typescript
import { TravelPackage } from '@/types/package';

const displayPackage = (pkg: TravelPackage) => {
    return (
        <div>
            <h2>{pkg.name}</h2>
            <p>Duration: {pkg.duration.days} days, {pkg.duration.nights} nights</p>
            <p>Price: ₹{pkg.price}</p>
            <p>Advance Payment: ₹{pkg.advancePayment}</p>
        </div>
    );
};
```

### PackageDay

Interface for individual days in a travel itinerary.

```typescript
interface PackageDay {
    day: number;
    title: string;
    description: string;
}
```

### PackageOptions

Flexible options structure for package customization.

```typescript
interface PackageOptions {
    [key: string]: {
        [key: string]: string;
    };
}
```

**Example:**
```typescript
const packageOptions: PackageOptions = {
    "accommodation": {
        "standard": "3-star hotels",
        "deluxe": "4-star hotels",
        "luxury": "5-star hotels"
    },
    "meals": {
        "breakfast": "Breakfast only",
        "halfBoard": "Breakfast + Dinner",
        "fullBoard": "All meals included"
    }
};
```

### Destination

Interface for destination information.

```typescript
interface Destination {
    name: string;
    images: string[];
    price: number;
    duration: { nights: number; days: number };
    itinerary: { day: number; activities: string[] }[];
    sightseeing: string[];
}
```

### Review

Interface for customer reviews.

```typescript
interface Review {
    id: string;
    rating: number;
    comment: string;
    author: string;
    date: string;
}
```

## Utilities

### cn (Class Name Utility)

A utility function for merging CSS classes with Tailwind CSS conflict resolution.

**Function:**
```typescript
function cn(...inputs: ClassValue[]): string
```

**Usage:**
```tsx
import { cn } from '@/lib/utils';

function Component({ className, isActive }: { className?: string; isActive?: boolean }) {
    return (
        <div 
            className={cn(
                "base-class text-sm", // base classes
                isActive && "bg-blue-500 text-white", // conditional classes
                className // override classes
            )}
        >
            Content
        </div>
    );
}

// Usage
<Component className="custom-class" isActive={true} />
```

**Features:**
- Merges multiple class name sources
- Resolves Tailwind CSS conflicts (e.g., `text-sm text-lg` → `text-lg`)
- Handles conditional classes
- Type-safe with ClassValue type

### Google Analytics Utilities

#### pageview

Tracks page views for Google Analytics.

**Function:**
```typescript
function pageview(url: string): void
```

**Usage:**
```typescript
import { pageview } from '@/lib/gtag';

// In Next.js router event handler
router.events.on('routeChangeComplete', pageview);

// Manual tracking
pageview('/contact-us');
```

#### event

Tracks custom events for Google Analytics.

**Function:**
```typescript
function event({ action, category, label, value }: GtagEvent): void
```

**Usage:**
```typescript
import { event } from '@/lib/gtag';

// Track button clicks
event({
    action: 'click',
    category: 'engagement',
    label: 'hero_cta',
    value: 1
});

// Track form submissions
event({
    action: 'submit',
    category: 'form',
    label: 'contact_form'
});

// Track purchases
event({
    action: 'purchase',
    category: 'ecommerce',
    label: 'package_booking',
    value: 15000
});
```

### Safe Window Utility

Provides safe access to window object for SSR compatibility.

**Usage:**
```typescript
import { safeWindow } from '@/utils/safe-window';

// Safe window access
const isClient = safeWindow !== undefined;
const width = safeWindow?.innerWidth || 0;
```

## Constants

### Countries

List of supported countries for the application.

**Usage:**
```typescript
import { countries } from '@/constants/countries';

function CountrySelect() {
    return (
        <select>
            {countries.map(country => (
                <option key={country.code} value={country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    );
}
```

### Destinations

Destination-specific data and configurations.

**Usage:**
```typescript
import { destinationsData } from '@/lib/destinations-data';

function DestinationPage({ destination }: { destination: string }) {
    const data = destinationsData[destination];
    
    if (!data) {
        return <div>Destination not found</div>;
    }
    
    return (
        <div>
            <h1>{data.name}</h1>
            <p>Price: ₹{data.price}</p>
            <p>Duration: {data.duration.days} days</p>
        </div>
    );
}
```

## Setup & Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd truedeal-frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Setup:**
Create a `.env.local` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# SendGrid Email Service
SENDGRID_API_KEY=your_sendgrid_api_key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-SR9YQK2TPK

# Vercel Blob Storage (if using)
BLOB_READ_WRITE_TOKEN=your_blob_token
```

4. **Development Server:**
```bash
npm run dev
```

5. **Production Build:**
```bash
npm run build
npm start
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure Best Practices

1. **Components:** Place reusable UI components in `/components/ui/`
2. **Page Components:** Place page-specific components in `/components/`
3. **Hooks:** Place custom hooks in `/hooks/`
4. **Types:** Define TypeScript interfaces in `/types/`
5. **Utilities:** Place helper functions in `/utils/` or `/lib/`
6. **API Routes:** Follow Next.js convention in `/app/api/`

### Styling Guidelines

1. **Use Tailwind CSS** for styling
2. **Component variants** should use `class-variance-authority`
3. **Use `cn` utility** for conditional classes
4. **Follow design system** patterns established in UI components

### Development Tips

1. **Use TypeScript** for type safety
2. **Implement proper error handling** in API routes
3. **Use React Suspense** for loading states
4. **Optimize images** using Next.js Image component
5. **Follow accessibility guidelines** (WCAG)

---

This documentation covers all major components, hooks, utilities, and APIs in the Truedeal Frontend application. For specific implementation details, refer to the individual component files in the source code.