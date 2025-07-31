# 🗃️ Database Setup Instructions

## **1. Create `.env.local` file**

Create a `.env.local` file in your project root with:

```bash
# Database URL for Prisma
# Replace 'your_password' with your actual PostgreSQL password
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/truedeal_travel"

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_key_here
AWS_REGION=eu-north-1
AWS_S3_BUCKET=truedeal-assets

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_key_here
```

## **2. Generate Prisma Client**

```bash
npx prisma generate
```

## **3. Create and Run Migrations**

```bash
# Create migration from schema
npx prisma migrate dev --name init

# If you want to reset and start fresh
npx prisma migrate reset
```

## **4. View Database**

```bash
# Open Prisma Studio (web-based database viewer)
npx prisma studio
```

## **5. Seed Database (Optional)**

```bash
# Run seed script (after creating it)
npx prisma db seed
```

## **Quick Commands Reference**

```bash
# Generate Prisma client
npx prisma generate

# Create new migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# Deploy migrations to production
npx prisma migrate deploy

# View database in browser
npx prisma studio

# Format schema file
npx prisma format
```
