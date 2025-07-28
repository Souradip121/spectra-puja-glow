# Deployment Guide

## Netlify Deployment

### Option 1: Deploy Frontend Only (Recommended)

1. Deploy your backend server separately on a service like Render.com, Heroku, or Railway
2. In the Netlify dashboard, add this environment variable:
   - Key: `RESEND_API_KEY` (required if you're using Netlify functions for the API)
   - Key: `RESEND_SENDER_EMAIL` (required if you're using Netlify functions for the API)

3. Update the redirect rule in `netlify.toml` to point to your deployed API:
   ```toml
   [[redirects]]
     from = "/api/*"
     to = "https://your-deployed-api-url.com/api/:splat"
     status = 200
     force = true
   ```

### Option 2: Deploy Frontend and API Together Using Netlify Functions

1. In the Netlify dashboard, add these environment variables:
   - Key: `RESEND_API_KEY`  
   - Key: `RESEND_SENDER_EMAIL`

2. Create Netlify Functions in the `netlify/functions/` directory to handle API requests

## Local Development

For local development:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example`

3. Run the development server:
   ```bash
   npm run dev
   ```

## Troubleshooting

If you encounter build errors:

1. Make sure you've installed all dependencies:
   ```bash
   npm install
   ```

2. If you get Netlify CLI errors, you can skip the Netlify CLI build step by using:
   ```bash
   npm run build:netlify
   ```

3. Check that your API server is running and accessible
```
