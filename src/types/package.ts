export interface PackageDay {
    day: number;
    title: string;
    description: string;
}

export interface PackageOptions {
    [key: string]: {
        [key: string]: string;
    };
}

export interface TravelPackage {
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