# 🧪 API Testing Guide

## **Setup Instructions**

### 1. **Install PostgreSQL**

Follow instructions in `POSTGRESQL-SETUP.md`

### 2. **Set Environment Variables**

Create `.env.local` file:

```bash
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/truedeal_travel"
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=eu-north-1
AWS_S3_BUCKET=truedeal-assets
```

### 3. **Generate Prisma Client & Run Migrations**

```bash
# Generate Prisma client
npx prisma generate

# Create and apply migrations
npx prisma migrate dev --name init

# Seed sample data
npx prisma db seed
```

### 4. **Start Development Server**

```bash
npm run dev
```

## **🚀 API Endpoints to Test**

### **Destinations API**

#### **GET /api/destinations**

Get all destinations with optional filters:

```bash
# Get all destinations
curl http://localhost:3000/api/destinations

# Get Asian destinations
curl "http://localhost:3000/api/destinations?continent=Asia"

# Limit results
curl "http://localhost:3000/api/destinations?limit=5"
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Singapore",
      "slug": "singapore",
      "description": "Experience the Lion City...",
      "continent": "Asia",
      "country": "Singapore",
      "base_price": "66000.00",
      "media_assets": [
        {
          "id": 1,
          "asset_type": "banner",
          "file_type": "image",
          "s3_url": "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png",
          "is_primary": true
        }
      ],
      "package_count": 1,
      "min_price": 66000
    }
  ],
  "count": 1
}
```

#### **GET /api/destinations/[slug]**

Get specific destination with packages:

```bash
# Get Singapore details
curl http://localhost:3000/api/destinations/singapore
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Singapore",
    "slug": "singapore",
    "packages": [
      {
        "id": 1,
        "package_name": "Singapore Explorer",
        "duration_days": 5,
        "duration_nights": 4,
        "price": "66000.00",
        "itinerary": [
          {
            "day_number": 1,
            "title": "Arrival & Marina Bay",
            "description": "Arrive in Singapore...",
            "activities": ["Airport pickup", "Hotel check-in"]
          }
        ],
        "inclusions": [
          "4 nights accommodation in 4-star hotel",
          "Daily breakfast"
        ],
        "exclusions": [
          "International flights",
          "Personal expenses"
        ]
      }
    ],
    "organized_media": {
      "banners": [...],
      "gallery": [...],
      "videos": [...],
      "thumbnails": [...]
    }
  }
}
```

#### **POST /api/destinations**

Create new destination:

```bash
curl -X POST http://localhost:3000/api/destinations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Thailand",
    "slug": "thailand",
    "description": "Beautiful beaches and rich culture",
    "continent": "Asia",
    "country": "Thailand",
    "basePrice": 45000
  }'
```

### **Media API**

#### **GET /api/media**

Get media assets with filters:

```bash
# Get all media
curl http://localhost:3000/api/media

# Get Singapore banners only
curl "http://localhost:3000/api/media?destination_id=1&asset_type=banner"

# Get all videos
curl "http://localhost:3000/api/media?file_type=video"
```

#### **POST /api/media**

Add new media asset:

```bash
curl -X POST http://localhost:3000/api/media \
  -H "Content-Type: application/json" \
  -d '{
    "destination_id": 1,
    "asset_type": "banner",
    "file_type": "image",
    "file_format": "png",
    "s3_url": "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/4.png",
    "alt_text": "Singapore banner 4",
    "display_order": 4,
    "is_primary": false
  }'
```

### **S3 Upload API**

#### **POST /api/upload-s3**

Upload file to S3:

```bash
# Using a form with file upload
curl -X POST http://localhost:3000/api/upload-s3 \
  -F "file=@/path/to/your/image.jpg" \
  -F "destination_id=1"
```

## **🖥️ Frontend Testing**

### **Test Updated Components**

1. **Replace your destinations component** with the new API-driven one:

```tsx
// In your page/component file
import DestinationsUpdated from "@/app/components/homepage/DestinationsUpdated";

// Replace old component with:
<DestinationsUpdated />;
```

2. **Use the media hooks** for displaying Singapore images:

```tsx
import { useMediaAssets } from "@/hooks/useDestinations";

function SingaporeBanners() {
  const { mediaAssets, loading } = useMediaAssets({
    destinationId: 1, // Singapore's ID
    assetType: "banner",
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-5 gap-4">
      {mediaAssets.map((asset) => (
        <img key={asset.id} src={asset.s3_url} alt={asset.alt_text} />
      ))}
    </div>
  );
}
```

## **🔍 Database Inspection**

### **Prisma Studio**

Open visual database browser:

```bash
npx prisma studio
```

Access at: http://localhost:5555

### **Direct Database Access**

```bash
# Connect to PostgreSQL
psql -U postgres -d truedeal_travel

# List tables
\dt

# View destinations
SELECT * FROM destinations;

# View media assets
SELECT * FROM media_assets;

# Exit
\q
```

## **📊 Sample Test Data**

After running the seed script, you'll have:

- **2 destinations**: Singapore, Dubai
- **4 media assets** for Singapore (3 banner images + 1 background video)
- **1 package** for Singapore with 3-day itinerary
- **Package details**: inclusions, exclusions, cancellation policy

## **🛠️ Troubleshooting**

### **Database Connection Issues**

```bash
# Check if PostgreSQL is running
pg_isready -h localhost -p 5432

# Restart PostgreSQL service (Windows)
net stop postgresql-x64-15
net start postgresql-x64-15
```

### **Prisma Issues**

```bash
# Reset database completely
npx prisma migrate reset

# Generate client after schema changes
npx prisma generate

# Format schema file
npx prisma format
```

### **API Testing Issues**

- Check `npm run dev` is running
- Verify `.env.local` has correct DATABASE_URL
- Check browser console for frontend errors
- Use browser dev tools Network tab to inspect API calls

### **S3 Upload Issues**

- Verify AWS credentials in `.env.local`
- Check S3 bucket permissions
- Ensure bucket allows public read access for images

## **🎯 Next Steps**

1. **Test all API endpoints** using curl or Postman
2. **Upload some images** via the admin interface at `/admin/media`
3. **Replace existing components** with the new API-driven ones
4. **Migrate your existing data** using a custom script
5. **Add more destinations** via the API or admin interface

Happy testing! 🚀
