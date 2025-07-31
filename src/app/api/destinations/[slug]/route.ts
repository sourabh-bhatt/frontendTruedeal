import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    // Get destination with all related data using Prisma
    const destination = await prisma.destination.findUnique({
      where: {
        slug: slug,
        isActive: true
      },
      include: {
        mediaAssets: {
          orderBy: [
            { displayOrder: 'asc' },
            { isPrimary: 'desc' }
          ]
        },
        packages: {
          include: {
            itinerary: {
              orderBy: {
                dayNumber: 'asc'
              }
            },
            packageDetails: {
              orderBy: [
                { detailType: 'asc' },
                { displayOrder: 'asc' }
              ]
            }
          }
        }
      }
    });

    if (!destination) {
      return NextResponse.json(
        { success: false, error: 'Destination not found' },
        { status: 404 }
      );
    }

    // Transform data to match frontend expectations
    const transformedDestination = {
      id: destination.id,
      name: destination.name,
      slug: destination.slug,
      description: destination.description,
      continent: destination.continent,
      country: destination.country,
      base_price: destination.basePrice,
      is_active: destination.isActive,
      media_assets: destination.mediaAssets.map(asset => ({
        id: asset.id,
        asset_type: asset.assetType,
        file_type: asset.fileType,
        file_format: asset.fileFormat,
        s3_url: asset.s3Url,
        alt_text: asset.altText,
        is_primary: asset.isPrimary,
        display_order: asset.displayOrder
      })),
      packages: destination.packages.map(pkg => ({
        id: pkg.id,
        package_name: pkg.packageName,
        duration_days: pkg.durationDays,
        duration_nights: pkg.durationNights,
        price: pkg.price,
        description: pkg.description,
        is_featured: pkg.isFeatured,
        itinerary: pkg.itinerary.map(day => ({
          day_number: day.dayNumber,
          title: day.title,
          description: day.description,
          activities: day.activities
        })),
        inclusions: pkg.packageDetails
          .filter(detail => detail.detailType === 'inclusion')
          .map(detail => detail.detailText),
        exclusions: pkg.packageDetails
          .filter(detail => detail.detailType === 'exclusion')
          .map(detail => detail.detailText),
        cancellation_policy: pkg.packageDetails
          .filter(detail => detail.detailType === 'cancellation_policy')
          .map(detail => detail.detailText)
      }))
    };

    // Organize media by type for easier frontend consumption
    const organizedMedia = {
      banners: transformedDestination.media_assets.filter(asset => asset.asset_type === 'banner'),
      gallery: transformedDestination.media_assets.filter(asset => asset.asset_type === 'gallery'),
      videos: transformedDestination.media_assets.filter(asset => asset.file_type === 'video'),
      thumbnails: transformedDestination.media_assets.filter(asset => asset.asset_type === 'thumbnail')
    };

    return NextResponse.json({
      success: true,
      data: {
        ...transformedDestination,
        organized_media: organizedMedia
      }
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch destination details' },
      { status: 500 }
    );
  }
}