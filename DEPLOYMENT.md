# Deploying Aditya Deshmukh Portfolio to Vercel

This guide will help you deploy your portfolio website to Vercel hosting platform.

## Prerequisites

1. **GitHub Account**: Your code should be pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

## Step-by-Step Deployment Guide

### 1. Prepare Your Repository

Make sure all your code is committed and pushed to GitHub:

```bash
# Add all files
git add .

# Commit your changes
git commit -m "Portfolio ready for deployment"

# Push to GitHub
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub repositories

### 3. Import Your Project

1. Click "New Project" or "Add New..."
2. Find your portfolio repository in the list
3. Click "Import" next to your repository

### 4. Configure Project Settings

Vercel should automatically detect your project settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

If not automatically detected, set these manually.

### 5. Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your portfolio will be live at a URL like: `your-portfolio-name.vercel.app`

### 6. Custom Domain (Optional)

To use a custom domain:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Build Optimization

Your project includes:

- ✅ Optimized Vite build configuration
- ✅ Proper asset caching headers
- ✅ SPA routing configuration
- ✅ Static asset optimization

## Performance Features

- **Fast Loading**: Vite's optimized bundling
- **Image Optimization**: Proper caching headers for images
- **CDN Distribution**: Vercel's global edge network
- **Automatic HTTPS**: SSL certificates included

## Troubleshooting

### Build Errors

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test locally with `npm run build`

### Routing Issues

- The `vercel.json` file handles SPA routing
- All routes will fallback to `index.html`

### Performance Issues

- Use Vercel Analytics for insights
- Enable Speed Insights in project settings

## Environment Variables (If Needed)

If you add any API keys or environment variables:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy the project

## Automatic Deployments

Once connected:

- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- You can configure different branches for different environments

Your portfolio is now live and ready to showcase your work! 🚀
