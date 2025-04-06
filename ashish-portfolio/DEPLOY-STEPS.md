# Step-by-Step Deployment Guide for Netlify

Follow these steps exactly to deploy your portfolio website to Netlify:

## 1. Preparation

Make sure all your changes are committed to your Git repository:

```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push
```

## 2. Deploy via Netlify UI (Recommended for First-Time Setup)

1. **Create a Netlify Account**
   - Go to [app.netlify.com](https://app.netlify.com) and sign up/login

2. **Import Your GitHub Repository**
   - Click "Add new site" > "Import an existing project"
   - Choose GitHub (or your Git provider)
   - Authorize Netlify to access your repositories
   - Select your portfolio repository

3. **Configure Build Settings**
   - Owner: Your Netlify team
   - Branch to deploy: `main` (or your default branch)
   - **IMPORTANT**: Base directory: `ashish-portfolio` (since your frontend is in this subdirectory)
   - Build command: `npm run build`
   - Publish directory: `dist` (this is relative to the base directory)
   - Click "Show advanced" and add these environment variables:
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your Gmail app password
     - `EMAIL_TO`: ashishdodiya2656@gmail.com

4. **Deploy**
   - Click "Deploy site"
   - Wait for the deployment to complete

5. **If you encounter a 404 error**:
   - Go to Site settings > Build & deploy > Continuous Deployment
   - Click "Edit settings"
   - Verify the Base directory is set to `ashish-portfolio`
   - Verify the Publish directory is set to `dist`
   - Save and trigger a new deployment

## 3. After Deployment

1. **Configure Your Domain (Optional)**
   - Go to Site settings > Domain management
   - Add a custom domain if you have one, or use the free Netlify subdomain

2. **Test Your Site**
   - Visit your Netlify site URL
   - Navigate to the contact form
   - Send a test message to ensure emails are working

3. **Check Function Logs if Needed**
   - If the contact form doesn't work, go to Functions in the Netlify dashboard
   - Check logs for the "contact" function

## 4. Future Updates

After making changes to your code:

1. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

2. Netlify will automatically detect the changes and redeploy your site

## 5. Local Testing (Optional)

To test the site with serverless functions locally:

```bash
cd ashish-portfolio
npm run netlify-dev
```

## 6. Gmail Setup Notes

For the email functionality to work:

1. **App Password**: Create an app password for your Gmail account:
   - Go to your Google Account > Security
   - Enable 2-Step Verification if not already enabled
   - Go to App passwords, select "Mail" and "Other"
   - Generate and copy the 16-character password
   - Use this password as the `EMAIL_PASS` environment variable

2. **Sending Limits**: Be aware that Gmail has sending limits:
   - 500 emails per day for regular Gmail
   - 2,000 emails per day for Google Workspace

For high-volume contact forms, consider using a service like SendGrid or Mailgun instead. 