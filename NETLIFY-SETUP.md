# Netlify Deployment Setup

This project is set up to deploy both the React frontend and API functions to Netlify. Follow these steps to get everything working correctly:

## 1. Install Dependencies

First, install all required dependencies:

```bash
npm install
```

## 2. Set Up Environment Variables

In Netlify dashboard, add these environment variables:

- `RESEND_API_KEY`: Your Resend API key
- `RESEND_SENDER_EMAIL`: Email address to send from (must be verified in Resend)

For local development, create a `.env` file:

```
RESEND_API_KEY=re_your_key_here
RESEND_SENDER_EMAIL=onboarding@resend.dev
```

## 3. Local Development

Run the development server which will start both frontend and Netlify Functions:

```bash
npm run dev
```

This will start:

- Frontend at http://localhost:5173
- Netlify dev server at http://localhost:8888

## 4. Deploy to Netlify

The easiest way to deploy is by connecting your GitHub repository to Netlify:

1. Create a new site in Netlify
2. Connect to your GitHub repository
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
4. Add the environment variables mentioned above
5. Deploy!

## Testing the API

To test if your API is working:

- In development: Visit `http://localhost:8888/.netlify/functions/api/health`
- In production: Visit `https://your-netlify-site.netlify.app/.netlify/functions/api/health`

You should see a JSON response with status information.
