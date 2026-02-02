# 🚀 Quick Deployment Guide

## Fastest Method: Netlify Drag & Drop (5 minutes)

### Step 1: Prepare Your Files
```bash
# If you have Node.js installed:
npm install
npm run build

# This creates a 'dist' folder with your compiled app
```

### Step 2: Deploy
1. Go to https://app.netlify.com/drop
2. Drag the entire `dist` folder onto the page
3. Done! Your app is live at a unique URL

### Step 3: Custom Domain (Optional)
- In Netlify dashboard, go to "Domain settings"
- Add your custom domain
- Netlify provides free SSL automatically

---

## Alternative: Use Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build your app
npm install
npm run build

# Deploy to Netlify
netlify deploy --prod

# Follow the prompts:
# - Authorize with your Netlify account
# - Create a new site or select existing
# - Publish directory: dist
```

---

## Alternative: GitHub + Netlify (Automatic Deployments)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/cinematch-app.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to https://netlify.com
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 3: Automatic Updates
- Every time you push to GitHub, Netlify automatically rebuilds and deploys
- Perfect for ongoing development!

---

## Don't Have Node.js Installed?

### Download the Build (No Setup Required)
If you just want to deploy without installing anything:

1. I can provide you with a pre-built version
2. Just download the files
3. Upload to any static hosting service:
   - Netlify Drop (drag & drop)
   - Vercel
   - GitHub Pages
   - Any web host with FTP access

### Install Node.js (Recommended)
- Download from: https://nodejs.org
- Choose the LTS version
- Install and restart your terminal
- Verify: `node --version`

---

## Cost Breakdown

| Service | Free Tier | Cost |
|---------|-----------|------|
| **Netlify** | 100GB bandwidth/month, unlimited sites | FREE |
| **Vercel** | Unlimited bandwidth, 100GB/month | FREE |
| **GitHub Pages** | 1GB storage, 100GB bandwidth | FREE |
| **Custom Domain** | N/A | $10-15/year |

**Recommendation**: Start with Netlify's free tier. It's more than enough for most apps!

---

## Troubleshooting

**Q: I get errors when running `npm install`**
- Make sure Node.js is installed (v16 or higher)
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

**Q: The app shows a blank page after deployment**
- Check the browser console (F12) for errors
- Make sure all files from the `dist` folder were uploaded
- Clear your browser cache

**Q: Images or assets aren't loading**
- Check that the `base` path in `vite.config.js` is correct
- For root domain: `base: './'`
- For subdirectory: `base: '/subdirectory/'`

**Q: How do I update my deployed app?**
- Netlify Drop: Just drag the new `dist` folder again
- Netlify CLI: Run `netlify deploy --prod` again
- GitHub integration: Just push your changes to GitHub

---

## Next Steps After Deployment

1. **Share your app**: Your unique Netlify URL is ready to share!
2. **Add custom domain**: Make it professional with your own domain
3. **Monitor**: Check Netlify analytics to see usage
4. **Iterate**: Make changes locally, rebuild, redeploy

Need help? The Netlify and Vercel documentation is excellent, and their support communities are very active!
