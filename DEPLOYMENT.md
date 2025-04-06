# Portfolio Website Deployment Guide

This guide provides instructions for deploying the portfolio website with its backend API.

## Project Structure

- `ashish-portfolio/` - Frontend React application
- `backend/` - Express.js backend API

## Option 1: Deploy Frontend and Backend Separately

### Frontend Deployment

The frontend can be deployed to any static hosting service:

1. **Build the frontend:**

```bash
cd ashish-portfolio
npm run build
```

2. **Deploy to one of these services:**
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

3. **Set the environment variable:**
   - In your hosting provider, set `VITE_API_URL` to point to your deployed backend API URL

### Backend Deployment

The backend can be deployed to any Node.js hosting service:

1. **Deploy to one of these services:**
   - Heroku
   - DigitalOcean App Platform
   - Render
   - Railway
   - AWS Elastic Beanstalk

2. **Set environment variables:**
   - `PORT`: Port to run the server on (often set automatically by the platform)
   - `NODE_ENV`: Set to "production"
   - `EMAIL_USER`: Gmail account for sending emails
   - `EMAIL_PASS`: App password for your Gmail account
   - `EMAIL_TO`: Recipient email (your email address)
   - `CORS_ORIGIN`: URL of your frontend (e.g., https://your-portfolio-domain.com)

## Option 2: Full-Stack Deployment (Same Server)

You can also deploy both frontend and backend on the same server:

1. **Update the backend to serve the frontend:**

```javascript
// In backend/src/server.js, add:

// Serve the frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app build directory
  app.use(express.static(path.join(__dirname, '../../ashish-portfolio/dist')));

  // For any route not matching the API, serve the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../ashish-portfolio/dist/index.html'));
  });
}
```

2. **Build the frontend:**

```bash
cd ashish-portfolio
npm run build
```

3. **Deploy the entire project folder to a Node.js hosting service**

4. **Set the frontend environment variable in .env.production:**

```
VITE_API_URL=/api
```

## Continuous Deployment

Consider setting up continuous deployment with GitHub Actions or your hosting provider's CI/CD:

1. **GitHub Actions example for frontend:**

```yaml
name: Deploy Frontend

on:
  push:
    branches: [ main ]
    paths:
      - 'ashish-portfolio/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: cd ashish-portfolio && npm ci
      - name: Build
        run: cd ashish-portfolio && npm run build
      - name: Deploy to hosting provider
        # Add deployment steps for your hosting provider
```

2. **GitHub Actions example for backend:**

```yaml
name: Deploy Backend

on:
  push:
    branches: [ main ]
    paths:
      - 'backend/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: cd backend && npm ci
      - name: Deploy to hosting provider
        # Add deployment steps for your backend hosting provider
```

## Testing the Deployment

After deployment:

1. Verify the frontend loads correctly
2. Test the contact form by submitting a message
3. Check that emails are being received
4. Verify all links and navigation work correctly

## Troubleshooting

- **CORS issues**: Ensure `CORS_ORIGIN` is set correctly on the backend
- **Email not sending**: Check your Gmail account settings and app password
- **API connection errors**: Verify your frontend environment variable is pointing to the correct backend URL
- **404 errors**: Make sure routing is configured correctly for both frontend and backend 