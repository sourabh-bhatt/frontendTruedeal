# Environment Variables Setup

Create a `.env.local` file in your root directory with these variables:

```bash
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=truedeal_travel
DB_USER=your_db_user
DB_PASSWORD=your_db_password

# AWS S3 Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=eu-north-1
AWS_S3_BUCKET=truedeal-assets

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Admin Access (optional)
ADMIN_EMAIL=admin@truedeal.com
ADMIN_PASSWORD=secure_password
```

## Database Setup

1. Install PostgreSQL
2. Create database: `CREATE DATABASE truedeal_travel;`
3. Run the schema provided in the API documentation
4. Install required packages: `npm install pg @types/pg`
