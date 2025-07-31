# 🐘 PostgreSQL Installation Guide

## **Windows Installation (Recommended)**

### Option 1: Official Installer (Easiest)

1. Go to https://www.postgresql.org/download/windows/
2. Download PostgreSQL 15 or 16 (latest stable)
3. Run the installer as Administrator
4. **Important settings during installation:**
   - Port: 5432 (default)
   - Username: postgres
   - **Remember your password!** (you'll need this)
   - Install Stack Builder: Yes (optional but helpful)

### Option 2: Using Chocolatey

```bash
# Open PowerShell as Administrator
choco install postgresql
```

### Option 3: Using winget

```bash
# Open PowerShell as Administrator
winget install PostgreSQL.PostgreSQL
```

## **After Installation**

### 1. Verify Installation

```bash
# Open Command Prompt or PowerShell
psql --version
```

### 2. Connect to PostgreSQL

```bash
# Connect as postgres user
psql -U postgres
```

### 3. Create Your Database

```sql
-- Once connected to psql, run:
CREATE DATABASE truedeal_travel;

-- Create a user for your app (optional but recommended)
CREATE USER truedeal_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE truedeal_travel TO truedeal_user;

-- Exit psql
\q
```

## **Environment Setup**

Create `.env.local` file:

```bash
# Database URL for Prisma
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/truedeal_travel"

# Or if you created a custom user:
DATABASE_URL="postgresql://truedeal_user:your_secure_password@localhost:5432/truedeal_travel"

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=eu-north-1
AWS_S3_BUCKET=truedeal-assets

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

## **Troubleshooting**

### PostgreSQL not in PATH

If `psql --version` doesn't work:

1. Find PostgreSQL installation directory (usually `C:\Program Files\PostgreSQL\15\bin`)
2. Add to Windows PATH environment variable
3. Restart Command Prompt/PowerShell

### Connection Issues

- Check if PostgreSQL service is running: `services.msc` → PostgreSQL service
- Verify port 5432 is not blocked by firewall
- Check username/password combination

### Permission Issues

- Make sure you're running as Administrator when needed
- Check PostgreSQL user permissions

## **Next Steps**

Once PostgreSQL is installed and working:

1. Install Prisma dependencies
2. Set up Prisma schema
3. Run database migrations
4. Test your setup
