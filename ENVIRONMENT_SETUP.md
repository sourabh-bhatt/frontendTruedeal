# Environment Setup for PayU Integration

## Quick Fix for Immediate Testing

Create a `.env.local` file in your project root with these test credentials:

```bash
# PayU Test Environment Credentials
NEXT_PUBLIC_PAYU_KEY=JPM7Fg
PAYU_SALT=TuxqAugd
NEXT_PUBLIC_PAYU_URL=https://test.payu.in/_payment
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## What Was Fixed

1. **Updated Test Credentials**: Changed from incorrect test credentials to official PayU test credentials from their documentation
2. **Added All Mandatory Parameters**: Ensured all required fields are sent to PayU
3. **Fixed Hash Generation**: Updated salt value to match official test environment
4. **Added Field Validation**: Added proper validation for required fields before payment
5. **Fixed Salt Mismatch**: Updated to use correct salt `TuxqAugd` for merchant key `JPM7Fg`
6. **Fixed URL Issue**: Added proper base URL configuration to handle port changes

## PayU Integration Requirements

### Mandatory Parameters for PayU Hosted Checkout

The following parameters are required by PayU:
- `key` - Merchant key
- `txnid` - Transaction ID
- `amount` - Payment amount
- `productinfo` - Product description
- `firstname` - Customer first name
- `email` - Customer email
- `phone` - Customer phone
- `surl` - Success URL
- `furl` - Failure URL
- `hash` - SHA512 hash for security

### Environment Variables

| Variable | Description | Test Value | Required |
|----------|-------------|------------|----------|
| `NEXT_PUBLIC_PAYU_KEY` | PayU merchant key | `JPM7Fg` | Yes |
| `PAYU_SALT` | PayU salt for hash generation | `TuxqAugd` | Yes |
| `NEXT_PUBLIC_PAYU_URL` | PayU payment URL | `https://test.payu.in/_payment` | Yes |
| `NEXT_PUBLIC_BASE_URL` | Your app's base URL | `http://localhost:3000` | Yes |

### Test vs Production

**Test Environment:**
- Key: `JPM7Fg`
- Salt: `TuxqAugd`
- URL: `https://test.payu.in/_payment`
- Base URL: `http://localhost:3000` (adjust port as needed)

**Production Environment:**
- Get your actual credentials from PayU merchant dashboard
- URL: `https://secure.payu.in/_payment`
- Base URL: `https://yourdomain.com`

## Testing the Integration

1. Create `.env.local` with test credentials above
2. Restart your development server: `npm run dev`
3. Note the port your server is running on (might be 3001 instead of 3000)
4. Update `NEXT_PUBLIC_BASE_URL` if needed
5. Try making a test payment
6. Use test card: `4111111111111111` with any future date and CVV

## Common Issues Fixed

1. **"Invalid amount" error** - Fixed by ensuring amount is properly formatted
2. **Missing mandatory parameters** - Added all required fields
3. **Hash mismatch** - Updated to correct test salt `TuxqAugd` for key `JPM7Fg`
4. **Form not submitting** - Fixed form field mapping
5. **"Transaction failed due to incorrectly calculated hash parameter"** - Fixed salt value
6. **"TypeError: Invalid URL"** - Fixed by proper base URL configuration

## Hash Calculation Formula

PayU uses this formula for hash calculation:
```
sha512(key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||SALT)
```

For our test setup:
```
sha512(JPM7Fg|txnid|amount|productinfo|firstname|email|||||||||||TuxqAugd)
```

## Port Issues

If your Next.js server runs on a different port (like 3001), make sure to:
1. Update `NEXT_PUBLIC_BASE_URL` in `.env.local`
2. Access your app using the correct port URL
3. The success/failure URLs will automatically use the correct port

## Security Notes

- Never expose `PAYU_SALT` in client-side code
- Hash generation is done server-side for security
- Always validate payment responses on your server
- Use HTTPS in production
- Key and Salt pairs are specific - ensure they match

## Next Steps

1. Test the payment flow with the updated configuration
2. Verify success/failure page handling
3. Test with different payment methods
4. Set up production credentials when ready to go live 