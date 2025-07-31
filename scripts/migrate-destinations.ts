import { Pool } from 'pg';
import { destinationData } from '../src/app/destinations/destinationData';

// Configure your PostgreSQL connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

interface ExistingDestination {
    name: string;
    price?: number;
    image: string;
    baseImage?: string;
    packages: number;
    description: string;
    duration?: {
        days: number;
        nights: number;
    };
    itinerary?: Array<{
        day: number;
        title: string;
        description: string;
    }>;
    inclusions: string[];
    exclusions: string[];
    cancellationPolicy: string[];
    galleryImages: string[];
    variants?: Array<{
        id: string;
        name: string;
        price: number;
        image: string;
        duration: {
            days: number;
            nights: number;
        };
        description: string;
        itinerary: Array<{
            day: number;
            title: string;
            description: string;
        }>;
    }>;
}

async function migrateDestinations() {
    try {
        console.log('🚀 Starting destination migration...');

        for (const [slug, destData] of Object.entries(destinationData as Record<string, ExistingDestination>)) {
            console.log(`📍 Migrating ${destData.name}...`);

            // 1. Insert destination
            const destinationResult = await pool.query(
                `INSERT INTO destinations (name, slug, description, continent, country, base_price, is_active)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (slug) DO UPDATE SET
         name = EXCLUDED.name,
         description = EXCLUDED.description,
         base_price = EXCLUDED.base_price
         RETURNING id`,
                [
                    destData.name,
                    slug,
                    destData.description,
                    getContinent(destData.name), // You'll need to implement this mapping
                    getCountry(destData.name),   // You'll need to implement this mapping
                    destData.price || 0,
                    true
                ]
            );

            const destinationId = destinationResult.rows[0].id;

            // 2. Insert main images
            if (destData.image) {
                await insertMediaAsset(destinationId, destData.image, 'banner', 'image', true);
            }

            if (destData.baseImage && destData.baseImage !== destData.image) {
                await insertMediaAsset(destinationId, destData.baseImage, 'background', 'image', false);
            }

            // 3. Insert gallery images
            for (let i = 0; i < destData.galleryImages.length; i++) {
                await insertMediaAsset(
                    destinationId,
                    destData.galleryImages[i],
                    'gallery',
                    'image',
                    false,
                    i
                );
            }

            // 4. Insert main package
            if (destData.duration) {
                const packageResult = await pool.query(
                    `INSERT INTO packages (destination_id, package_name, duration_days, duration_nights, price, description, is_featured)
           VALUES ($1, $2, $3, $4, $5, $6, $7)
           RETURNING id`,
                    [
                        destinationId,
                        `${destData.name} Package`,
                        destData.duration.days,
                        destData.duration.nights,
                        destData.price || 0,
                        destData.description,
                        true
                    ]
                );

                const packageId = packageResult.rows[0].id;

                // Insert itinerary
                if (destData.itinerary) {
                    for (const dayItem of destData.itinerary) {
                        await pool.query(
                            `INSERT INTO itinerary (package_id, day_number, title, description, activities)
               VALUES ($1, $2, $3, $4, $5)`,
                            [
                                packageId,
                                dayItem.day,
                                dayItem.title,
                                dayItem.description,
                                JSON.stringify([]) // Convert activities to JSON array if needed
                            ]
                        );
                    }
                }

                // Insert inclusions
                for (let i = 0; i < destData.inclusions.length; i++) {
                    await pool.query(
                        `INSERT INTO package_details (package_id, detail_type, detail_text, display_order)
             VALUES ($1, $2, $3, $4)`,
                        [packageId, 'inclusion', destData.inclusions[i], i]
                    );
                }

                // Insert exclusions
                for (let i = 0; i < destData.exclusions.length; i++) {
                    await pool.query(
                        `INSERT INTO package_details (package_id, detail_type, detail_text, display_order)
             VALUES ($1, $2, $3, $4)`,
                        [packageId, 'exclusion', destData.exclusions[i], i]
                    );
                }

                // Insert cancellation policy
                for (let i = 0; i < destData.cancellationPolicy.length; i++) {
                    await pool.query(
                        `INSERT INTO package_details (package_id, detail_type, detail_text, display_order)
             VALUES ($1, $2, $3, $4)`,
                        [packageId, 'cancellation_policy', destData.cancellationPolicy[i], i]
                    );
                }
            }

            // 5. Insert variants as separate packages
            if (destData.variants) {
                for (const variant of destData.variants) {
                    const variantPackageResult = await pool.query(
                        `INSERT INTO packages (destination_id, package_name, duration_days, duration_nights, price, description, is_featured)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             RETURNING id`,
                        [
                            destinationId,
                            variant.name,
                            variant.duration.days,
                            variant.duration.nights,
                            variant.price,
                            variant.description,
                            false
                        ]
                    );

                    const variantPackageId = variantPackageResult.rows[0].id;

                    // Insert variant image
                    if (variant.image) {
                        await insertMediaAsset(destinationId, variant.image, 'banner', 'image', false);
                    }

                    // Insert variant itinerary
                    for (const dayItem of variant.itinerary) {
                        await pool.query(
                            `INSERT INTO itinerary (package_id, day_number, title, description, activities)
               VALUES ($1, $2, $3, $4, $5)`,
                            [
                                variantPackageId,
                                dayItem.day,
                                dayItem.title,
                                dayItem.description,
                                JSON.stringify([])
                            ]
                        );
                    }
                }
            }

            console.log(`✅ Successfully migrated ${destData.name}`);
        }

        console.log('🎉 Migration completed successfully!');

    } catch (error) {
        console.error('❌ Migration failed:', error);
    } finally {
        await pool.end();
    }
}

async function insertMediaAsset(
    destinationId: number,
    url: string,
    assetType: string,
    fileType: string,
    isPrimary: boolean = false,
    displayOrder: number = 0
) {
    // Convert local URLs to S3 URLs if needed
    const s3Url = convertToS3Url(url);

    await pool.query(
        `INSERT INTO media_assets (destination_id, asset_type, file_type, file_format, s3_url, alt_text, display_order, is_primary)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     ON CONFLICT DO NOTHING`,
        [
            destinationId,
            assetType,
            fileType,
            getFileFormat(url),
            s3Url,
            `Image for destination`,
            displayOrder,
            isPrimary
        ]
    );
}

function convertToS3Url(localUrl: string): string {
    // Convert local URLs to S3 URLs
    if (localUrl.startsWith('/')) {
        return `https://truedeal-assets.s3.eu-north-1.amazonaws.com${localUrl}`;
    }
    return localUrl;
}

function getFileFormat(url: string): string {
    const extension = url.split('.').pop()?.toLowerCase();
    return extension || 'jpg';
}

function getContinent(destinationName: string): string {
    // Implement mapping logic based on destination name
    const asianCountries = ['thailand', 'singapore', 'japan', 'china', 'dubai', 'bali', 'indonesia'];
    const europeanCountries = ['greece', 'finland'];

    const lowerName = destinationName.toLowerCase();

    if (asianCountries.some(country => lowerName.includes(country))) {
        return 'Asia';
    }
    if (europeanCountries.some(country => lowerName.includes(country))) {
        return 'Europe';
    }

    return 'Asia'; // Default
}

function getCountry(destinationName: string): string {
    // Implement mapping logic based on destination name
    const countryMap: Record<string, string> = {
        'thailand': 'Thailand',
        'singapore': 'Singapore',
        'japan': 'Japan',
        'china': 'China',
        'dubai': 'UAE',
        'bali': 'Indonesia',
        'indonesia': 'Indonesia',
        'greece': 'Greece',
        'finland': 'Finland',
        // Add more mappings as needed
    };

    const lowerName = destinationName.toLowerCase();

    for (const [key, value] of Object.entries(countryMap)) {
        if (lowerName.includes(key)) {
            return value;
        }
    }

    return 'Unknown';
}

// Run migration if this file is executed directly
if (require.main === module) {
    migrateDestinations();
}

export { migrateDestinations };