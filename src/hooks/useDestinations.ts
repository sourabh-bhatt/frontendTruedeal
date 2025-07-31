import { useState, useEffect } from 'react';

export interface MediaAsset {
    id: number;
    asset_type: 'banner' | 'gallery' | 'background' | 'thumbnail';
    file_type: 'image' | 'video';
    file_format: string;
    s3_url: string;
    alt_text?: string;
    is_primary: boolean;
    display_order: number;
}

export interface OrganizedMedia {
    banners: MediaAsset[];
    gallery: MediaAsset[];
    videos: MediaAsset[];
    thumbnails: MediaAsset[];
}

export interface Package {
    id: number;
    package_name: string;
    duration_days: number;
    duration_nights: number;
    price: number;
    description: string;
    is_featured: boolean;
    itinerary?: Array<{
        day_number: number;
        title: string;
        description: string;
        activities: string[];
    }>;
    inclusions?: string[];
    exclusions?: string[];
    cancellation_policy?: string[];
}

export interface Destination {
    id: number;
    name: string;
    slug: string;
    description: string;
    continent: string;
    country: string;
    base_price: number;
    is_active: boolean;
    media_assets: MediaAsset[];
    organized_media?: OrganizedMedia;
    packages: Package[];
    package_count: number;
    min_price: number;
}

interface UseDestinationsOptions {
    continent?: string;
    featured?: boolean;
    limit?: number;
}

interface UseDestinationsReturn {
    destinations: Destination[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useDestinations(options: UseDestinationsOptions = {}): UseDestinationsReturn {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchDestinations = async () => {
        try {
            setLoading(true);
            setError(null);

            const params = new URLSearchParams();
            if (options.continent) params.append('continent', options.continent);
            if (options.featured) params.append('featured', 'true');
            if (options.limit) params.append('limit', options.limit.toString());

            const response = await fetch(`/api/destinations?${params.toString()}`);
            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Failed to fetch destinations');
            }

            setDestinations(data.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDestinations();
    }, [options.continent, options.featured, options.limit]);

    return {
        destinations,
        loading,
        error,
        refetch: fetchDestinations
    };
}

interface UseDestinationReturn {
    destination: Destination | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useDestination(slug: string): UseDestinationReturn {
    const [destination, setDestination] = useState<Destination | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchDestination = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`/api/destinations/${slug}`);
            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Failed to fetch destination');
            }

            setDestination(data.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchDestination();
        }
    }, [slug]);

    return {
        destination,
        loading,
        error,
        refetch: fetchDestination
    };
}

interface UseMediaAssetsOptions {
    destinationId?: number;
    assetType?: 'banner' | 'gallery' | 'background' | 'thumbnail';
    fileType?: 'image' | 'video';
    limit?: number;
}

interface UseMediaAssetsReturn {
    mediaAssets: MediaAsset[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useMediaAssets(options: UseMediaAssetsOptions = {}): UseMediaAssetsReturn {
    const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMediaAssets = async () => {
        try {
            setLoading(true);
            setError(null);

            const params = new URLSearchParams();
            if (options.destinationId) params.append('destination_id', options.destinationId.toString());
            if (options.assetType) params.append('asset_type', options.assetType);
            if (options.fileType) params.append('file_type', options.fileType);
            if (options.limit) params.append('limit', options.limit.toString());

            const response = await fetch(`/api/media?${params.toString()}`);
            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Failed to fetch media assets');
            }

            setMediaAssets(data.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMediaAssets();
    }, [options.destinationId, options.assetType, options.fileType, options.limit]);

    return {
        mediaAssets,
        loading,
        error,
        refetch: fetchMediaAssets
    };
}