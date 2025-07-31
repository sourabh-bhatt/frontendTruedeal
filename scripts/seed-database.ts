import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seeding...');

    // Create sample destinations
    const singapore = await prisma.destination.upsert({
        where: { slug: 'singapore' },
        update: {},
        create: {
            name: 'Singapore',
            slug: 'singapore',
            description: 'Experience the Lion City with its stunning skyline, vibrant culture, and world-class attractions.',
            continent: 'Asia',
            country: 'Singapore',
            basePrice: 66000,
            isActive: true
        }
    });

    const dubai = await prisma.destination.upsert({
        where: { slug: 'dubai' },
        update: {},
        create: {
            name: 'Dubai',
            slug: 'dubai',
            description: 'Discover the modern marvel of Dubai with luxury shopping, stunning architecture, and desert adventures.',
            continent: 'Asia',
            country: 'UAE',
            basePrice: 54000,
            isActive: true
        }
    });

    console.log('✅ Destinations created:', { singapore: singapore.id, dubai: dubai.id });

    // Create sample media assets for Singapore
    await prisma.mediaAsset.createMany({
        data: [
            {
                destinationId: singapore.id,
                assetType: 'banner',
                fileType: 'image',
                fileFormat: 'png',
                s3Url: 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png',
                altText: 'Singapore skyline banner 1',
                displayOrder: 1,
                isPrimary: true
            },
            {
                destinationId: singapore.id,
                assetType: 'banner',
                fileType: 'image',
                fileFormat: 'png',
                s3Url: 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/2.png',
                altText: 'Singapore skyline banner 2',
                displayOrder: 2,
                isPrimary: false
            },
            {
                destinationId: singapore.id,
                assetType: 'banner',
                fileType: 'image',
                fileFormat: 'png',
                s3Url: 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/3.png',
                altText: 'Singapore skyline banner 3',
                displayOrder: 3,
                isPrimary: false
            },
            {
                destinationId: singapore.id,
                assetType: 'background',
                fileType: 'video',
                fileFormat: 'mp4',
                s3Url: 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/video/singaporeBG.mp4',
                altText: 'Singapore background video',
                displayOrder: 1,
                isPrimary: true
            }
        ]
    });

    console.log('✅ Sample media assets created for Singapore');

    // Create sample package for Singapore
    const singaporePackage = await prisma.package.create({
        data: {
            destinationId: singapore.id,
            packageName: 'Singapore Explorer',
            durationDays: 5,
            durationNights: 4,
            price: 66000,
            description: 'Explore the best of Singapore in 5 days',
            isFeatured: true
        }
    });

    // Create sample itinerary
    await prisma.itinerary.createMany({
        data: [
            {
                packageId: singaporePackage.id,
                dayNumber: 1,
                title: 'Arrival & Marina Bay',
                description: 'Arrive in Singapore and explore Marina Bay Sands',
                activities: ['Airport pickup', 'Hotel check-in', 'Marina Bay Sands visit', 'Light show']
            },
            {
                packageId: singaporePackage.id,
                dayNumber: 2,
                title: 'Gardens by the Bay',
                description: 'Visit the iconic Gardens by the Bay',
                activities: ['Cloud Forest', 'Flower Dome', 'Supertree Grove', 'OCBC Skyway']
            },
            {
                packageId: singaporePackage.id,
                dayNumber: 3,
                title: 'Sentosa Island',
                description: 'Full day at Sentosa Island',
                activities: ['Universal Studios', 'S.E.A. Aquarium', 'Sentosa beaches', 'Cable car ride']
            }
        ]
    });

    // Create package details
    await prisma.packageDetail.createMany({
        data: [
            // Inclusions
            {
                packageId: singaporePackage.id,
                detailType: 'inclusion',
                detailText: '4 nights accommodation in 4-star hotel',
                displayOrder: 1
            },
            {
                packageId: singaporePackage.id,
                detailType: 'inclusion',
                detailText: 'Daily breakfast',
                displayOrder: 2
            },
            {
                packageId: singaporePackage.id,
                detailType: 'inclusion',
                detailText: 'Airport transfers',
                displayOrder: 3
            },
            {
                packageId: singaporePackage.id,
                detailType: 'inclusion',
                detailText: 'All entrance fees as per itinerary',
                displayOrder: 4
            },
            // Exclusions
            {
                packageId: singaporePackage.id,
                detailType: 'exclusion',
                detailText: 'International flights',
                displayOrder: 1
            },
            {
                packageId: singaporePackage.id,
                detailType: 'exclusion',
                detailText: 'Personal expenses',
                displayOrder: 2
            },
            {
                packageId: singaporePackage.id,
                detailType: 'exclusion',
                detailText: 'Travel insurance',
                displayOrder: 3
            },
            // Cancellation Policy
            {
                packageId: singaporePackage.id,
                detailType: 'cancellation_policy',
                detailText: '50% refund if cancelled 30 days before departure',
                displayOrder: 1
            },
            {
                packageId: singaporePackage.id,
                detailType: 'cancellation_policy',
                detailText: '25% refund if cancelled 15 days before departure',
                displayOrder: 2
            },
            {
                packageId: singaporePackage.id,
                detailType: 'cancellation_policy',
                detailText: 'No refund if cancelled within 15 days',
                displayOrder: 3
            }
        ]
    });

    console.log('✅ Sample package and details created for Singapore');
    console.log('🎉 Database seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });