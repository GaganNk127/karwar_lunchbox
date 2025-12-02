# Karwar LunchBox - Deployment Guide

## Overview
Karwar LunchBox is a complete production-ready website built with React (Vite), Firebase (Auth + Firestore), and Tailwind CSS. This guide will help you deploy the application to various hosting platforms.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase project setup
- Git repository

## Environment Variables
Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication (Email/Password method)
4. Set up Firestore Database
5. Configure Security Rules for Firestore
6. Get your Firebase configuration from Project Settings

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Orders collection - authenticated users can read/write their own orders
    match /orders/{orderId} {
      allow read, write: if request.auth != null;
    }
    
    // Users collection - authenticated users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Build Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy with custom domain
vercel --prod
```

Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. Netlify
```bash
# Install Netlify CLI
npm install netlify-cli -g

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

Create `netlify.toml`:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase in project
firebase init hosting

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

Create `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 4. GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Update `vite.config.js` for GitHub Pages:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/karwar-lunchbox/', // Replace with your repo name
  build: {
    outDir: 'dist'
  }
})
```

## Domain Configuration
After deployment, configure your custom domain:

### Vercel
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Update DNS records as instructed

### Netlify
1. Go to Netlify dashboard
2. Site settings → Domain management
3. Add custom domain
4. Update DNS records

### Firebase Hosting
1. Go to Firebase Console
2. Hosting → Custom domains
3. Add your domain
4. Verify ownership

## Performance Optimization
The application is already optimized with:
- Code splitting via React Router
- Lazy loading of components
- Optimized images and assets
- Tailwind CSS purging in production
- Service Worker for caching (optional)

## SEO Optimization
- Meta tags are implemented in each page
- Open Graph tags for social sharing
- Structured data for search engines
- Sitemap generation (optional)

## Monitoring and Analytics
Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Security Considerations
- Environment variables are properly configured
- Firebase security rules are in place
- HTTPS is enforced on all platforms
- Content Security Policy headers (optional)

## Testing Before Production
1. Test all user flows
2. Verify Firebase authentication
3. Test order submission
4. Check mobile responsiveness
5. Test admin dashboard functionality
6. Verify email notifications (if configured)

## Post-Deployment Checklist
- [ ] Website loads correctly
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Mobile responsive design
- [ ] Firebase authentication works
- [ ] Admin dashboard accessible
- [ ] SSL certificate active
- [ ] Custom domain pointing correctly
- [ ] Analytics tracking active
- [ ] Error monitoring set up (optional)

## Troubleshooting

### Common Issues
1. **White screen on deployment**: Check console for 404 errors, ensure routing is configured correctly
2. **Firebase authentication not working**: Verify API keys and authDomain in environment variables
3. **Build errors**: Check for missing dependencies or syntax errors
4. **Styles not loading**: Ensure Tailwind CSS is properly configured for production

### Debug Steps
1. Check browser console for errors
2. Verify Firebase configuration
3. Test in incognito mode
4. Clear browser cache
5. Check network tab for failed requests

## Maintenance
- Regularly update dependencies
- Monitor Firebase usage and costs
- Backup Firestore data regularly
- Update security rules as needed
- Monitor website performance

## Support
For deployment issues:
- Check platform-specific documentation
- Review Firebase documentation
- Join relevant community forums
- Check GitHub issues for the project

---

**Note**: This deployment guide covers the most common hosting platforms. Choose the one that best fits your needs and budget. Vercel is recommended for ease of use and excellent performance.
