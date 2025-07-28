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

- `RESEND_API_KEY`: Your Resend API key
- `RESEND_SENDER_EMAIL`: Your verified email (or use the default)
- `NODE_ENV`: production

## 4. Update Netlify Configuration

After deployment, you'll get a URL for your API (like `https://spectra-puja-api.onrender.com`).

Go to your Netlify dashboard:

1. Navigate to your site
2. Go to "Site settings" > "Build & deploy" > "Environment variables"
3. Add a new variable:
   - Key: `VITE_API_URL`
   - Value: Your Render.com API URL (e.g., `https://spectra-puja-api.onrender.com`)

## 5. Trigger a new Netlify deployment

In your Netlify dashboard, go to "Deploys" and click "Trigger deploy" > "Deploy site".

## Alternative Options

You can also deploy your server to:

- Vercel
- Heroku
- Railway
- DigitalOcean App Platform

Each platform has similar steps: deploy your server code and set the environment variables.

## Testing

After deployment, visit `https://your-api-url/api/health` to verify your server is running correctly.
