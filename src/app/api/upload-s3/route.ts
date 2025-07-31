import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

// Configure S3 client
const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'eu-north-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || 'truedeal-assets';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const destinationId = formData.get('destination_id') as string;

        if (!file) {
            return NextResponse.json(
                { success: false, error: 'No file provided' },
                { status: 400 }
            );
        }

        // Validate file type
        const allowedTypes = [
            'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif',
            'video/mp4', 'video/mpeg', 'video/quicktime'
        ];

        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { success: false, error: 'Invalid file type' },
                { status: 400 }
            );
        }

        // Validate file size (max 50MB)
        const maxSize = 50 * 1024 * 1024; // 50MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { success: false, error: 'File too large. Maximum size is 50MB' },
                { status: 400 }
            );
        }

        // Generate unique filename
        const fileExtension = file.name.split('.').pop();
        const uniqueId = uuidv4();
        const fileName = `${uniqueId}.${fileExtension}`;

        // Determine folder structure based on file type and destination
        const fileType = file.type.startsWith('video/') ? 'video' : 'image';
        const folder = destinationId ? `destination-${destinationId}` : 'general';
        const s3Key = `${folder}/${fileType}/${fileName}`;

        // Convert file to buffer
        const buffer = Buffer.from(await file.arrayBuffer());

        // Upload to S3
        const uploadCommand = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: s3Key,
            Body: buffer,
            ContentType: file.type,
            Metadata: {
                originalName: file.name,
                uploadedAt: new Date().toISOString(),
                destinationId: destinationId || 'none'
            }
        });

        await s3Client.send(uploadCommand);

        // Generate S3 URL
        const s3Url = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;

        return NextResponse.json({
            success: true,
            data: {
                s3_url: s3Url,
                file_name: fileName,
                file_type: fileType,
                file_format: fileExtension,
                file_size: file.size,
                original_name: file.name
            }
        });

    } catch (error) {
        console.error('S3 upload error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to upload file to S3' },
            { status: 500 }
        );
    }
}

// Helper function to generate presigned URLs for direct uploads (optional)
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const fileName = searchParams.get('fileName');
        const fileType = searchParams.get('fileType');
        const destinationId = searchParams.get('destinationId');

        if (!fileName || !fileType) {
            return NextResponse.json(
                { success: false, error: 'Missing fileName or fileType' },
                { status: 400 }
            );
        }

        // Generate presigned URL for direct client-side upload
        const { getSignedUrl } = await import('@aws-sdk/s3-request-presigner');

        const fileExtension = fileName.split('.').pop();
        const uniqueId = uuidv4();
        const newFileName = `${uniqueId}.${fileExtension}`;

        const mediaType = fileType.startsWith('video/') ? 'video' : 'image';
        const folder = destinationId ? `destination-${destinationId}` : 'general';
        const s3Key = `${folder}/${mediaType}/${newFileName}`;

        const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: s3Key,
            ContentType: fileType,
        });

        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // 1 hour

        const finalS3Url = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;

        return NextResponse.json({
            success: true,
            data: {
                presigned_url: signedUrl,
                s3_url: finalS3Url,
                file_name: newFileName,
                file_type: mediaType,
                file_format: fileExtension
            }
        });

    } catch (error) {
        console.error('Presigned URL generation error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to generate presigned URL' },
            { status: 500 }
        );
    }
}