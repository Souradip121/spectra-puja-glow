# Deployment Guide

## Netlify Deployment

### Option 1: Deploy Frontend Only (Recommended)

1. Deploy your backend server separately on a service like Render.com, Azure Web Apps, Heroku, or Railway
2. In the Netlify dashboard, add this environment variable:
   - Key: `VITE_API_URL` - Value: URL of your deployed API server

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

## Azure Deployment Option

### Deploy Backend on Azure Web Apps

1. Create an Azure Web App for Node.js
2. Deploy the server code from the `/server` directory
3. Configure Application Settings (environment variables):
   - Key: `RESEND_API_KEY`
   - Key: `RESEND_SENDER_EMAIL`
   - Key: `NODE_ENV` - Value: `production`

4. Update your Netlify configuration to point to your Azure Web App URL

### Using GitHub Actions for Azure Deployment

You can set up CI/CD with GitHub Actions to automatically deploy your backend:

1. Create a GitHub workflow file at `.github/workflows/azure-deploy.yml`
2. Configure it to deploy to your Azure Web App whenever you push changes
3. Store sensitive values like your Resend API key as GitHub Secrets

## Local Development

For local development:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the server directory with these values:
   ```
   RESEND_API_KEY=your_resend_api_key
   RESEND_SENDER_EMAIL=your_verified_email@example.com
   ```

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

3. Check that your API server is running and accessible by visiting the `/api/health` endpoint

4. For email sending issues:
   - Verify your Resend API key is valid
   - Ensure you have a verified sender email in your Resend account
   - Check the server logs for detailed error messages
