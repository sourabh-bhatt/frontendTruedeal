import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const destinationId = searchParams.get('destination_id');
        const assetType = searchParams.get('asset_type');
        const fileType = searchParams.get('file_type');
        const limit = parseInt(searchParams.get('limit') || '50');

        const mediaAssets = await prisma.mediaAsset.findMany({
            where: {
                ...(destinationId && { destinationId: parseInt(destinationId) }),
                ...(assetType && { assetType }),
                ...(fileType && { fileType })
            },
            include: {
                destination: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            },
            orderBy: [
                { destinationId: 'asc' },
                { assetType: 'asc' },
                { displayOrder: 'asc' },
                { isPrimary: 'desc' }
            ],
            take: limit
        });

        // Transform data to match frontend expectations
        const transformedAssets = mediaAssets.map(asset => ({
            id: asset.id,
            destination_id: asset.destinationId,
            asset_type: asset.assetType,
            file_type: asset.fileType,
            file_format: asset.fileFormat,
            s3_url: asset.s3Url,
            alt_text: asset.altText,
            display_order: asset.displayOrder,
            is_primary: asset.isPrimary,
            created_at: asset.createdAt,
            destination_name: asset.destination.name,
            destination_slug: asset.destination.slug
        }));

        return NextResponse.json({
            success: true,
            data: transformedAssets,
            count: transformedAssets.length
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch media assets' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            destination_id,
            asset_type,
            file_type,
            file_format,
            s3_url,
            alt_text,
            display_order = 0,
            is_primary = false
        } = body;

        // If setting as primary, remove primary flag from other assets of same type
        if (is_primary) {
            await prisma.mediaAsset.updateMany({
                where: {
                    destinationId: destination_id,
                    assetType: asset_type
                },
                data: {
                    isPrimary: false
                }
            });
        }

        const mediaAsset = await prisma.mediaAsset.create({
            data: {
                destinationId: destination_id,
                assetType: asset_type,
                fileType: file_type,
                fileFormat: file_format,
                s3Url: s3_url,
                altText: alt_text,
                displayOrder: display_order,
                isPrimary: is_primary
            },
            include: {
                destination: {
                    select: {
                        name: true,
                        slug: true
                    }
                }
            }
        });

        return NextResponse.json({
            success: true,
            data: {
                id: mediaAsset.id,
                destination_id: mediaAsset.destinationId,
                asset_type: mediaAsset.assetType,
                file_type: mediaAsset.fileType,
                file_format: mediaAsset.fileFormat,
                s3_url: mediaAsset.s3Url,
                alt_text: mediaAsset.altText,
                display_order: mediaAsset.displayOrder,
                is_primary: mediaAsset.isPrimary,
                created_at: mediaAsset.createdAt,
                destination_name: mediaAsset.destination.name,
                destination_slug: mediaAsset.destination.slug
            }
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create media asset' },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            id,
            asset_type,
            file_type,
            file_format,
            s3_url,
            alt_text,
            display_order,
            is_primary
        } = body;

        // If setting as primary, remove primary flag from other assets of same type
        if (is_primary) {
            const currentAsset = await prisma.mediaAsset.findUnique({
                where: { id: parseInt(id) }
            });

            if (currentAsset) {
                await prisma.mediaAsset.updateMany({
                    where: {
                        destinationId: currentAsset.destinationId,
                        assetType: asset_type,
                        id: { not: parseInt(id) }
                    },
                    data: {
                        isPrimary: false
                    }
                });
            }
        }

        const mediaAsset = await prisma.mediaAsset.update({
            where: {
                id: parseInt(id)
            },
            data: {
                assetType: asset_type,
                fileType: file_type,
                fileFormat: file_format,
                s3Url: s3_url,
                altText: alt_text,
                displayOrder: display_order,
                isPrimary: is_primary
            },
            include: {
                destination: {
                    select: {
                        name: true,
                        slug: true
                    }
                }
            }
        });

        return NextResponse.json({
            success: true,
            data: {
                id: mediaAsset.id,
                destination_id: mediaAsset.destinationId,
                asset_type: mediaAsset.assetType,
                file_type: mediaAsset.fileType,
                file_format: mediaAsset.fileFormat,
                s3_url: mediaAsset.s3Url,
                alt_text: mediaAsset.altText,
                display_order: mediaAsset.displayOrder,
                is_primary: mediaAsset.isPrimary,
                created_at: mediaAsset.createdAt,
                destination_name: mediaAsset.destination.name,
                destination_slug: mediaAsset.destination.slug
            }
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update media asset' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { success: false, error: 'Media asset ID is required' },
                { status: 400 }
            );
        }

        await prisma.mediaAsset.delete({
            where: {
                id: parseInt(id)
            }
        });

        return NextResponse.json({
            success: true,
            message: 'Media asset deleted successfully'
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete media asset' },
            { status: 500 }
        );
    }
}