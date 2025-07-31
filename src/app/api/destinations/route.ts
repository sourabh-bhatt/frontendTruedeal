import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const continent = searchParams.get('continent');
        const featured = searchParams.get('featured');
        const limit = parseInt(searchParams.get('limit') || '50');

        const destinations = await prisma.destination.findMany({
            where: {
                isActive: true,
                ...(continent && {
                    continent: {
                        equals: continent,
                        mode: 'insensitive'
                    }
                })
            },
            include: {
                mediaAssets: {
                    orderBy: [
                        { displayOrder: 'asc' },
                        { isPrimary: 'desc' }
                    ]
                },
                packages: {
                    select: {
                        id: true,
                        price: true
                    }
                }
            },
            orderBy: {
                name: 'asc'
            },
            take: limit
        });

        // Transform data to match frontend expectations
        const transformedDestinations = destinations.map(dest => ({
            id: dest.id,
            name: dest.name,
            slug: dest.slug,
            description: dest.description,
            continent: dest.continent,
            country: dest.country,
            base_price: dest.basePrice,
            is_active: dest.isActive,
            media_assets: dest.mediaAssets.map(asset => ({
                id: asset.id,
                asset_type: asset.assetType,
                file_type: asset.fileType,
                file_format: asset.fileFormat,
                s3_url: asset.s3Url,
                alt_text: asset.altText,
                is_primary: asset.isPrimary,
                display_order: asset.displayOrder
            })),
            package_count: dest.packages.length,
            min_price: dest.packages.length > 0
                ? Math.min(...dest.packages.map(p => Number(p.price || 0)))
                : null
        }));

        return NextResponse.json({
            success: true,
            data: transformedDestinations,
            count: transformedDestinations.length
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch destinations' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, slug, description, continent, country, basePrice } = body;

        const destination = await prisma.destination.create({
            data: {
                name,
                slug,
                description,
                continent,
                country,
                basePrice
            }
        });

        return NextResponse.json({
            success: true,
            data: destination
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create destination' },
            { status: 500 }
        );
    }
}