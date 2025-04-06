# Deploying Your Portfolio to Netlify

This guide walks you through deploying your portfolio website to Netlify.

## Prerequisites

1. A Netlify account (sign up at [netlify.com](https://netlify.com))
2. Git repository with your code (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. **Login to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Login with your account

2. **Create a New Site**
   - Click "Add new site" > "Import an existing project"
   - Connect to your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   - Branch to deploy: `main` (or your default branch)
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Set Environment Variables**
   - Go to Site Settings > Environment variables
   - Add the following variables:
     - `EMAIL_USER`: Your Gmail account
     - `EMAIL_PASS`: Your Gmail app password
     - `EMAIL_TO`: Your recipient email (ashishdodiya2656@gmail.com)

5. **Deploy**
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI globally** (if not already installed)
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify in your project**
   ```bash
   cd ashish-portfolio
   netlify init
   ```
   - Follow the prompts to create a new site or connect to an existing one

4. **Set Environment Variables**
   ```bash
   netlify env:set EMAIL_USER your-email@gmail.com
   netlify env:set EMAIL_PASS your-app-password
   netlify env:set EMAIL_TO ashishdodiya2656@gmail.com
   ```

5. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Testing the Deployment

1. Visit your Netlify site URL
2. Navigate to the contact form
3. Submit a test message
4. Verify you receive the email

## Troubleshooting

### Functions Not Working

If your contact form doesn't work after deployment:

1. **Check Function Logs**
   - In Netlify Dashboard, go to Functions
   - Check the logs for your contact function

2. **Verify Environment Variables**
   - Make sure all environment variables are set correctly

3. **Test Locally**
   - Run `netlify dev` to test the site with functions locally
   - Use the browser developer console to check for errors

### Email Not Sending

If emails aren't being sent:

1. **Check Gmail Settings**
   - Ensure "Less secure app access" is enabled or use an App Password
   - Check if your account has hit Gmail's sending limits

2. **Verify App Password**
   - Make sure you're using a valid app password for Gmail

## Modifying Your Site After Deployment

1. **Make changes to your code**
2. **Commit and push to your Git repository**
3. **Netlify will automatically deploy the changes**

Or deploy manually:
```bash
netlify deploy --prod
```

## Additional Resources

- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Netlify Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)
- [Troubleshooting Guide](https://docs.netlify.com/configure-builds/troubleshooting-tips/) 