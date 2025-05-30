# PayU Payment Integration Setup

## Environment Variables Required

Add the following environment variables to your `.env.local` file:

```bash
# SendGrid Configuration (existing)
SENDGRID_API_KEY=your_sendgrid_api_key_here

# PayU Payment Gateway Configuration
NEXT_PUBLIC_PAYU_KEY=your_payu_merchant_key_here
PAYU_SALT=your_payu_salt_here
NEXT_PUBLIC_PAYU_URL=https://test.payu.in/_payment

# For production, use:
# NEXT_PUBLIC_PAYU_URL=https://secure.payu.in/_payment
```

## Important Notes

- `NEXT_PUBLIC_PAYU_KEY` is public and will be exposed to the client
- `PAYU_SALT` is private and should only be used on the server
- Get these credentials from your PayU merchant dashboard

## PayU Account Setup

1. **Sign up for PayU**: Visit [PayU India](https://www.payu.in/) and create a merchant account
2. **Complete KYC**: Submit required documents for account verification
3. **Get Credentials**: After approval, get your Merchant Key and Salt from the dashboard
4. **Test Environment**: Start with test credentials for development

## Test Credentials (for development)

PayU provides test credentials for development:
- **Key**: `rjQUPktU` (example test key)
- **Salt**: `e5iIg1jwi8` (example test salt)
- **URL**: `https://test.payu.in/_payment`

## Features Implemented

1. **Dual Booking Options**: Users can choose between "Enquire Now" or "Book Now"
2. **Secure Payment**: PayU integration with hash generation on server
3. **Receipt Generation**: PDF receipt with booking details
4. **Email Confirmation**: Automated email to customer and admin
5. **Payment Success/Failure Pages**: Proper handling of payment responses
6. **Session Management**: Booking data stored in session storage

## File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── BookingOptionsModal.tsx    # Main booking modal
│   │   ├── PaymentModal.tsx           # Payment flow modal
│   │   └── BookingFormModal.tsx       # Original enquiry modal
│   ├── utils/
│   │   ├── paymentUtils.ts            # PayU integration utilities
│   │   └── receiptUtils.ts            # PDF receipt generation
│   ├── api/
│   │   ├── generate-payu-hash/        # Server-side hash generation
│   │   └── send-booking-confirmation/ # Email confirmation API
│   └── payment/
│       ├── success/                   # Payment success page
│       └── failure/                   # Payment failure page
```

## Security Features

1. **Hash Generation**: PayU hash generated on server-side for security
2. **Environment Variables**: Sensitive data stored in environment variables
3. **Transaction Verification**: Payment responses are validated
4. **Email Notifications**: Both customer and admin receive notifications

## Testing

1. Use test credentials for development
2. Test both success and failure scenarios
3. Verify email notifications are working
4. Test PDF receipt generation
5. Check payment response handling

## Production Deployment

1. Replace test credentials with production keys
2. Update PayU URL to production endpoint
3. Ensure SSL certificate is configured
4. Test with small amounts first
5. Monitor transaction logs

## Support

For PayU integration issues:
- PayU Documentation: https://docs.payu.in/
- PayU Support: support@payu.in
- Integration Guide: https://docs.payu.in/docs/

## Troubleshooting

### Common Issues:

1. **Hash Mismatch**: Ensure correct order of parameters in hash string
2. **Environment Variables**: Check if all required variables are set
3. **CORS Issues**: Ensure proper CORS configuration for PayU domain
4. **SSL Required**: PayU requires HTTPS in production

### Debug Tips:

1. Check browser console for JavaScript errors
2. Verify hash generation in server logs
3. Test with PayU test cards
4. Monitor network requests in browser dev tools 