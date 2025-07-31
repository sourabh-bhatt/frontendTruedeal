# Required Dependencies

Add these dependencies to your `package.json`:

```bash
# Install PostgreSQL driver
npm install pg @types/pg

# Install AWS SDK for S3 uploads
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner

# Install UUID for unique file names
npm install uuid @types/uuid

# Optional: For database migrations and management
npm install --save-dev @types/node ts-node
```

## package.json scripts to add:

```json
{
  "scripts": {
    "migrate": "ts-node scripts/migrate-destinations.ts",
    "db:setup": "psql -U your_username -d truedeal_travel -f scripts/schema.sql"
  }
}
```
