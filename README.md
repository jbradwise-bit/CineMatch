# 🎬 CineMatch - Movie Discovery App

A modern, mobile-first movie discovery application that helps users build personalized watch profiles and find content they'll love across multiple streaming platforms.

## ✨ Features

- **Profile Building**: Swipe-style interface to rate movies (Dislike/Like/Love)
- **Smart Recommendations**: Algorithm-based suggestions based on your preferences
- **Advanced Filtering**: Filter by genre, rating, IMDb/RT scores, runtime, year, and platform
- **Multi-Platform Support**: Netflix, Hulu, Disney+, HBO Max, Prime Video, Apple TV+, Paramount+, Peacock
- **Watchlist Management**: Save movies you want to watch
- **Responsive Design**: Optimized for mobile and desktop

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Install Netlify CLI** (optional, for command line deployment):
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your app**:
   ```bash
   npm install
   npm run build
   ```

3. **Deploy**:
   - **Drag & Drop Method**:
     - Go to [netlify.com](https://netlify.com)
     - Sign up/login
     - Drag the `dist` folder to the upload area
   
   - **CLI Method**:
     ```bash
     netlify deploy --prod
     ```

4. **Configure**:
   - Your app will be live at: `https://your-site-name.netlify.app`
   - Add a custom domain in Netlify settings (optional)

### Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   npm install
   vercel --prod
   ```

3. **Or use the web interface**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite and configures everything

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   },
   "homepage": "https://yourusername.github.io/cinematch-app"
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Web Hosting (Shared Hosting)

1. **Build the app**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload the `dist` folder** to your web hosting via FTP/cPanel:
   - All files from the `dist` folder go to your `public_html` or `www` directory

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
cinematch-app/
├── src/
│   ├── App.jsx          # Main application component
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🔧 Environment Variables (For Production)

When you're ready to connect to real movie APIs, create a `.env` file:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

## 🎯 Next Steps for Production

1. **Get API Keys**:
   - [TMDB API](https://www.themoviedb.org/settings/api) - Movie data, posters, ratings
   - [OMDb API](http://www.omdbapi.com/apikey.aspx) - Additional ratings data
   - [Streaming Availability API](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability) - Platform availability

2. **Add Backend** (Optional but recommended):
   - Set up a simple Node.js/Express server to handle API requests
   - Store user preferences in a database (MongoDB, PostgreSQL)
   - Implement user authentication (Firebase, Auth0, or custom)

3. **Enhance Features**:
   - Real movie data integration
   - User accounts and saved preferences
   - Social sharing
   - Collaborative watchlists
   - Push notifications for new releases

## 📱 Mobile App Version

To convert this to a native mobile app:
- **React Native**: Rewrite using React Native
- **Capacitor/Ionic**: Wrap this web app in a native container
- **PWA**: Add service worker for offline support and "Add to Home Screen"

## 🐛 Troubleshooting

**Build errors?**
- Make sure you have Node.js 16+ installed
- Delete `node_modules` and run `npm install` again

**Blank page after deployment?**
- Check browser console for errors
- Ensure `base` in `vite.config.js` is set correctly
- For GitHub Pages, base should be `'/your-repo-name/'`

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes!

## 🤝 Contributing

This is a starter template - customize it to your needs!

---

**Need help?** Check out:
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
