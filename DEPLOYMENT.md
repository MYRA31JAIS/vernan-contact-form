# Deployment Guide

## GitHub Repository Setup

### 1. Create a new repository on GitHub
- Go to https://github.com/new
- Name your repository (e.g., `vernan-contact-form`)
- Choose public or private
- Do NOT initialize with README (we already have one)

### 2. Push to GitHub

```bash
# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/vernan-contact-form.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect React and configure build settings
6. Click "Deploy"

### Option 2: Netlify

1. Go to https://netlify.com
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy"

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://YOUR_USERNAME.github.io/vernan-contact-form",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

## Environment Variables

No environment variables are required as the API endpoint is hardcoded. If you want to make it configurable:

1. Create `.env` file:
```
REACT_APP_API_URL=https://vernanbackend.ezlab.in/api/contact-us/
```

2. Update ContactForm.js:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'https://vernanbackend.ezlab.in/api/contact-us/';
```

## Testing the Deployment

After deployment, test the following:
1. Form validation (empty fields)
2. Email validation
3. Form submission
4. Success message display
5. Responsive design on different devices

## Postman Collection

Import `Vernan_Contact_API.postman_collection.json` into Postman to test the API independently.
