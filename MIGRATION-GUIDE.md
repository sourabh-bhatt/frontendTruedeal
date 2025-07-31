# 🚀 Complete Migration Guide: From Hard-coded to Database-driven Architecture

## 📋 Overview

This guide will help you migrate from your current hard-coded destination data to a scalable PostgreSQL + API architecture that can dynamically manage your destinations, packages, and media assets.

## 🏗️ New Architecture Benefits

✅ **Dynamic Content Management** - Add/edit destinations without code changes  
✅ **Scalable Media Storage** - Organized S3 integration with metadata  
✅ **SEO-friendly URLs** - Clean slugs and structured data  
✅ **Performance Optimized** - Database queries with proper indexing  
✅ **Admin Interface** - Web-based media and content management  
✅ **API-first Design** - Easy integration with mobile apps or other platforms

## 🛠️ Migration Steps

### Step 1: Database Setup

1. **Install PostgreSQL** (if not already installed)
2. **Create Database**:

   ```sql
   CREATE DATABASE truedeal_travel;
   ```

3. **Run Database Schema** (use the provided SQL schema in the API documentation)

### Step 2: Environment Configuration

1. **Create `.env.local`** file with your database and AWS credentials (see `environment-setup.md`)

### Step 3: Install Dependencies

```bash
npm install pg @types/pg @aws-sdk/client-s3 @aws-sdk/s3-request-presigner uuid @types/uuid
npm install --save-dev @types/node ts-node
```

### Step 4: S3 Bucket Organization

Organize your S3 bucket with this structure:

```
truedeal-assets/
├── destination-1/
│   ├── image/
│   │   ├── banners/
│   │   ├── gallery/
│   │   └── thumbnails/
│   └── video/
├── destination-2/
│   ├── image/
│   └── video/
└── general/
```

### Step 5: Data Migration

1. **Review the migration script**: `scripts/migrate-destinations.ts`
2. **Update country/continent mappings** in the script for your destinations
3. **Run migration**:
   ```bash
   npm run migrate
   ```

### Step 6: Update Frontend Components

Replace your existing hard-coded components with the new API-driven ones:

#### Before (Hard-coded):

```tsx
const destinations = [
  { name: "Singapore", price: 66000, image: "/IMAGES/singapore/1/1.webp" },
  // ...
];
```

#### After (API-driven):

```tsx
import { useDestinations } from "@/hooks/useDestinations";

function Destinations() {
  const { destinations, loading, error } = useDestinations({
    continent: "Asia",
    limit: 8,
  });

  // Component renders dynamically from API data
}
```

## 📊 Database Schema Overview

### Core Tables:

- **`destinations`** - Main destination info (name, slug, description, etc.)
- **`media_assets`** - All images/videos with metadata
- **`packages`** - Different package variants for each destination
- **`itinerary`** - Day-by-day plans for packages
- **`package_details`** - Inclusions, exclusions, policies

### Key Features:

- **Slug-based URLs** for SEO
- **Media categorization** (banner, gallery, background, thumbnail)
- **Primary image designation** for each category
- **Flexible package system** with variants
- **Structured itineraries** with JSON activity storage

## 🚀 New API Endpoints

### Destinations

- `GET /api/destinations` - List all destinations with filters
- `GET /api/destinations/[slug]` - Get specific destination with packages
- `POST /api/destinations` - Create new destination (admin)

### Media Management

- `GET /api/media` - List media assets with filters
- `POST /api/media` - Add new media asset
- `PUT /api/media` - Update media asset
- `DELETE /api/media` - Remove media asset

### File Upload

- `POST /api/upload-s3` - Upload files to S3
- `GET /api/upload-s3` - Generate presigned URLs

## 💡 Usage Examples

### Display Singapore Banner Images (1.png to 10.png)

```tsx
import { useMediaAssets } from "@/hooks/useDestinations";

function SingaporeBanners() {
  const { mediaAssets, loading } = useMediaAssets({
    destinationId: 1, // Singapore's ID
    assetType: "banner",
    fileType: "image",
  });

  return (
    <div className="grid grid-cols-5 gap-4">
      {mediaAssets.map((asset) => (
        <Image
          key={asset.id}
          src={asset.s3_url}
          alt={asset.alt_text}
          width={400}
          height={300}
          priority={asset.is_primary}
        />
      ))}
    </div>
  );
}
```

### Display Background Video

```tsx
import { useDestination } from "@/hooks/useDestinations";

function DestinationHero({ slug }: { slug: string }) {
  const { destination } = useDestination(slug);

  const backgroundVideo = destination?.organized_media?.videos?.find(
    (video) => video.asset_type === "background"
  );

  return (
    <div className="relative h-screen">
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          src={backgroundVideo.s3_url}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
```

## 🔧 Admin Interface

Access the media management interface at `/admin/media` to:

- Upload new images/videos
- Organize media by type (banner, gallery, etc.)
- Set primary images
- Update alt text for accessibility
- Delete unused assets

## 🚀 Performance Optimizations

### Database Level:

- **Indexes** on frequently queried columns
- **JSON storage** for flexible data like activities
- **Efficient joins** for related data

### Frontend Level:

- **Next.js Image optimization** with your S3 domain
- **Lazy loading** for gallery images
- **Progressive loading** for large image sets
- **Caching** with proper TTL settings

### S3 Level:

- **CloudFront CDN** (recommended for production)
- **Multiple image formats** (WebP, AVIF)
- **Proper cache headers**

## 🔄 Migration Checklist

- [ ] Database setup complete
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] S3 bucket organized
- [ ] Migration script executed
- [ ] Frontend components updated
- [ ] Hard-coded data files removed
- [ ] Admin interface tested
- [ ] Performance tested

## 🆘 Troubleshooting

### Common Issues:

1. **Database Connection Error**

   - Check environment variables
   - Ensure PostgreSQL is running
   - Verify credentials

2. **S3 Upload Fails**

   - Check AWS credentials
   - Verify bucket permissions
   - Check file size limits

3. **Images Not Loading**
   - Verify S3 URLs in database
   - Check Next.js domain configuration
   - Ensure bucket is publicly readable

## 🔮 Future Enhancements

Once migrated, you can easily add:

- **Content versioning**
- **Multi-language support**
- **SEO metadata management**
- **Analytics integration**
- **Dynamic pricing**
- **Booking integration**
- **Mobile app API**

## 📞 Support

If you encounter issues during migration:

1. Check the database logs
2. Verify API responses in browser dev tools
3. Test S3 upload manually
4. Review environment variables

This architecture will scale with your business and make content management much easier!
