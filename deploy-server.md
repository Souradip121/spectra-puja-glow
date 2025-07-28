# Server Deployment Guide

To fix the form submission on your Netlify site, you need to deploy your backend server to a cloud hosting service. Here's how to do it with Render.com (a free and easy option):

## 1. Create a Render.com account

Sign up at https://render.com/ if you don't have an account already.

## 2. Create a new Web Service

1. Click on "New +" and select "Web Service"
2. Connect your GitHub repository or deploy from a public repository
3. Configure your service:
   - Name: spectra-puja-api (or any name you prefer)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server/index.js`
   - Plan: Free

## 3. Add Environment Variables

In the Render dashboard, add these environment variables:

- `RESEND_API_KEY`: Your Resend API key (get it from https://resend.com/api-keys)
- `RESEND_SENDER_EMAIL`: Your verified email in Resend (or use the default)
- `NODE_ENV`: production

### Important: Verify Your Email in Resend

1. Log in to your Resend account (https://resend.com)
2. Go to "Domains & Email" section
3. Add your domain or verify an email address to use as the sender

Without a verified email, you might encounter "permission denied" errors.

## 4. Update Netlify Configuration

After deployment, you'll get a URL for your API (like `https://spectra-puja-api.onrender.com`).

Go to your Netlify dashboard:

1. Navigate to your site
2. Go to "Site settings" > "Build & deploy" > "Environment variables"
3. Add a new variable:
   - Key: `VITE_API_URL`
   - Value: Your Render.com API URL (e.g., `https://spectra-puja-api.onrender.com`)

## 5. Update netlify.toml

Make sure your netlify.toml file points to your new API:

```toml
[[redirects]]
from = "/api/*"
to = "https://your-render-api-url.onrender.com/api/:splat"
status = 200
force = true
```

## 6. Trigger a new Netlify deployment

In your Netlify dashboard, go to "Deploys" and click "Trigger deploy" > "Deploy site".

## Testing

After deployment:

1. Visit `https://your-api-url/api/health` to verify your server is running correctly.
2. Check that environment variables are properly set by looking at the response.
3. Submit a test form to verify the entire process works.

## Troubleshooting

If you're still having issues:

1. **Check the Logs**: In Render.com dashboard, check the logs for error messages
2. **Test Email Sending**: Try sending a test email directly using the Resend API
3. **API Key Permissions**: Verify your Resend API key has sending permissions
4. **CORS Issues**: Check if there are CORS errors in the browser console
