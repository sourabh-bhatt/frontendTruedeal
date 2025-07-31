# 🚀 Complete Setup Guide: PostgreSQL + Prisma + Next.js

## **Current Status ✅**

You now have:

- ✅ Prisma ORM installed and configured
- ✅ Database schema defined (`prisma/schema.prisma`)
- ✅ API routes updated to use Prisma instead of raw SQL
- ✅ React hooks for data fetching
- ✅ Admin interface for media management
- ✅ S3 upload integration
- ✅ Sample seed data script

## **🎯 Next Steps (Follow in Order)**

### **Step 1: Install & Setup PostgreSQL**

#### **Windows Users:**

1. Download PostgreSQL from: https://www.postgresql.org/download/windows/
2. Install with these settings:
   - Port: 5432
   - Username: postgres
   - **Remember your password!**
3. Verify installation:
   ```bash
   psql --version
   ```

#### **Alternative - Using Package Manager:**

```bash
# Windows (PowerShell as Admin)
winget install PostgreSQL.PostgreSQL

# macOS
brew install postgresql
brew services start postgresql

# Ubuntu/Linux
sudo apt update && sudo apt install postgresql postgresql-contrib
```

### **Step 2: Create Database**

Open Command Prompt/Terminal and run:

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE truedeal_travel;

# Exit
\q
```

### **Step 3: Configure Environment**

Create `.env.local` file in your project root:

```bash
# Database Connection
DATABASE_URL="postgresql://postgres:YOUR_POSTGRES_PASSWORD@localhost:5432/truedeal_travel"

# AWS S3 (use your existing credentials)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=eu-north-1
AWS_S3_BUCKET=truedeal-assets

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here
```

**⚠️ Important:** Replace `YOUR_POSTGRES_PASSWORD` with the password you set during PostgreSQL installation.

### **Step 4: Setup Database Schema**

Run these commands in your project directory:

```bash
# Generate Prisma client
npm run db:generate

# Create and apply database migrations
npm run db:migrate

# Seed sample data (Singapore + Dubai with media)
npm run db:seed
```

### **Step 5: Test Your Setup**

Start your development server:

```bash
npm run dev
```

**Test these URLs in your browser:**

1. **All destinations API:**  
   http://localhost:3000/api/destinations

2. **Singapore details:**  
   http://localhost:3000/api/destinations/singapore

3. **Media assets:**  
   http://localhost:3000/api/media

4. **Database viewer (Prisma Studio):**
   ```bash
   npm run db:studio
   ```
   Opens at: http://localhost:5555

## **🖼️ Your Singapore Images Setup**

After completing the setup, you can:

### **Option 1: Use Admin Interface**

1. Visit: http://localhost:3000/admin/media
2. Select "Singapore" from dropdown
3. Upload your 10 banner images (1.png to 10.png)
4. Set asset type as "banner"
5. Mark one as "primary"

### **Option 2: Use API Directly**

```bash
# Add each image via API
curl -X POST http://localhost:3000/api/media \
  -H "Content-Type: application/json" \
  -d '{
    "destination_id": 1,
    "asset_type": "banner",
    "file_type": "image",
    "file_format": "png",
    "s3_url": "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png",
    "alt_text": "Singapore banner 1",
    "display_order": 1,
    "is_primary": true
  }'
```

### **Option 3: Bulk Insert Script**

Create a script to add all 10 images at once:

```typescript
// scripts/add-singapore-images.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addSingaporeImages() {
  const singaporeImages = Array.from({ length: 10 }, (_, i) => ({
    destinationId: 1,
    assetType: "banner",
    fileType: "image",
    fileFormat: "png",
    s3Url: `https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/${
      i + 1
    }.png`,
    altText: `Singapore banner ${i + 1}`,
    displayOrder: i + 1,
    isPrimary: i === 0, // First image is primary
  }));

  await prisma.mediaAsset.createMany({
    data: singaporeImages,
  });

  console.log("✅ All Singapore banner images added!");
}

addSingaporeImages();
```

## **🔄 Replace Your Hard-coded Components**

### **Before (Your current code):**

```tsx
const destinations = [
  { name: "Singapore", price: 66000, image: "/IMAGES/singapore/1/1.webp" },
];
```

### **After (New API-driven code):**

```tsx
import { useDestinations } from "@/hooks/useDestinations";

function MyDestinations() {
  const { destinations, loading } = useDestinations({
    continent: "Asia",
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {destinations.map((dest) => (
        <div key={dest.id}>
          <h3>{dest.name}</h3>
          <img src={dest.media_assets[0]?.s3_url} alt={dest.name} />
          <p>₹{dest.min_price?.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
```

## **📱 Available API Endpoints**

| Method | Endpoint                      | Description            |
| ------ | ----------------------------- | ---------------------- |
| GET    | `/api/destinations`           | List all destinations  |
| GET    | `/api/destinations/singapore` | Get Singapore details  |
| POST   | `/api/destinations`           | Create new destination |
| GET    | `/api/media`                  | List media assets      |
| POST   | `/api/media`                  | Add media asset        |
| PUT    | `/api/media`                  | Update media asset     |
| DELETE | `/api/media?id=1`             | Delete media asset     |
| POST   | `/api/upload-s3`              | Upload file to S3      |

## **🛠️ Useful Commands**

```bash
# Database Management
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Run migrations
npm run db:seed        # Seed sample data
npm run db:studio      # Open database viewer
npm run db:setup       # Complete setup (generate + migrate + seed)

# Development
npm run dev           # Start development server
npm run build         # Build for production
npm run lint          # Run linter

# Database Reset (if needed)
npm run db:migrate:reset  # Reset and re-run all migrations
```

## **🎯 Benefits You'll Get**

✅ **No more hard-coded URLs** - Everything is dynamic  
✅ **Easy content management** - Web-based admin interface  
✅ **Scalable architecture** - Add destinations without touching code  
✅ **Type safety** - Prisma provides full TypeScript types  
✅ **Fast performance** - Optimized database queries  
✅ **SEO-friendly** - Clean URLs with slugs

## **🆘 Troubleshooting**

### **PostgreSQL Issues:**

```bash
# Check if PostgreSQL is running
pg_isready -h localhost -p 5432

# Windows: Restart PostgreSQL service
net stop postgresql-x64-15
net start postgresql-x64-15
```

### **Database Connection Issues:**

- Verify `.env.local` has correct DATABASE_URL
- Check PostgreSQL username/password
- Ensure database `truedeal_travel` exists

### **Prisma Issues:**

```bash
# Reset everything and start fresh
npm run db:migrate:reset
npm run db:setup
```

### **API Issues:**

- Check `npm run dev` is running
- Open browser dev tools → Network tab
- Look for error messages in terminal

## **🎉 You're Ready!**

Once you complete these steps:

1. Your APIs will be working with real database data
2. You can manage images via the admin interface
3. Your website will load images dynamically from S3
4. You can add new destinations without touching code
5. Your Singapore banner images (1.png to 10.png) will load dynamically

**Need help?** Check the troubleshooting section or test each API endpoint individually to identify any issues.

Happy coding! 🚀
