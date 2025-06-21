# 🚀 Repository Setup Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **"New"** button (green button)
3. Fill repository details:
   - **Name**: `aditya-portfolio`
   - **Description**: "Aditya Deshmukh - Personal Portfolio Website"
   - **Public** repository
   - **Don't** check "Add README"

## Step 2: Initialize Local Repository

Open terminal in your project folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "🎉 Initial commit: Complete Aditya Deshmukh Portfolio

✅ Features:
- Hero section with animations
- About section with statistics
- Experience & Projects showcase
- Leadership & NCC activities
- Skills with progress bars
- Photo gallery (30+ images)
- Contact form
- Featured Projects: GitaGPT, eVISION, Bindisa
- Responsive design with Framer Motion
- Ready for deployment"
```

## Step 3: Connect to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/aditya-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import your `aditya-portfolio` repository
5. Click **"Deploy"**

## Step 5: Update Links

After deployment, update these in README.md:

- Portfolio URL (from Vercel)
- GitHub repository URL
- Your personal email and contact details

## Troubleshooting

### Git Issues

```bash
# If remote already exists
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/aditya-portfolio.git

# If push fails
git push -f origin main
```

### Build Issues

```bash
# Test build locally first
npm run build

# Check for errors
npm run typecheck
```

## Pro Tips

1. **Repository Name Ideas**:

   - `aditya-portfolio`
   - `aditya-deshmukh-portfolio`
   - `portfolio-website`

2. **Professional Description**:
   "Personal portfolio showcasing projects, experience, and skills of Aditya Deshmukh - IIIT-A Student & Full-Stack Developer"

3. **Add Topics on GitHub**:
   - `portfolio`
   - `react`
   - `typescript`
   - `vite`
   - `framer-motion`
   - `tailwindcss`

Happy coding! 🎉
