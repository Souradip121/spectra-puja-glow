# Setting Up Resend Email Service

This guide will help you correctly set up the Resend email service for your application.

## 1. Create a Resend Account

If you haven't already, sign up for a Resend account at [https://resend.com](https://resend.com).

## 2. Generate an API Key

1. Log in to your Resend dashboard
2. Navigate to the API Keys section at [https://resend.com/api-keys](https://resend.com/api-keys)
3. Click on "Create API Key"
4. Give it a name (e.g., "Spectra Puja App")
5. Copy the API key (you won't be able to see it again)

## 3. Verify Your Domain or Email

To send emails from your domain or a specific email address, you need to verify it:

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click "Add Domain" or "Add Sender Identity"
3. Follow the verification steps

**Important:** Until you verify a domain or email, you can only use the `onboarding@resend.dev` email for testing.

## 4. Configure Environment Variables

Add these environment variables to your server:

- `RESEND_API_KEY` - Your Resend API key
- `RESEND_SENDER_EMAIL` - Your verified email address (or use `onboarding@resend.dev` for testing)

## 5. Test the Setup

Run the test script to verify your setup:

```bash
node resend-test.js
```

If successful, you should see a confirmation message with the email ID.

## Troubleshooting

If you encounter errors:

1. **API Key Issues**: Verify your API key is correct and has the right permissions
2. **Sender Email Issues**: Make sure you're using a verified email address or domain
3. **Network Issues**: Ensure your server can make outbound HTTPS requests
4. **Rate Limiting**: Check if you've hit any rate limits

For persistent issues, check the [Resend Documentation](https://resend.com/docs) or contact Resend support.
