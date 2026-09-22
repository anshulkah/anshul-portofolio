# Modern Portfolio Website

A sleek, modern portfolio built with Next.js 14, inspired by [cleverdeveloper.in](https://www.cleverdeveloper.in/). Features a split-screen layout with sidebar navigation and fully customizable themes.

## ✨ Features

- **Split Layout Design**: Left sidebar navigation, right content area (inspired by cleverdeveloper.in)
- **Advanced Theme Customization**:
  - 10 accent colors (Blue, Purple, Green, Orange, Pink, Teal, Red, Cyan, Indigo, Emerald)
  - 6 background themes (Slate, Zinc, Stone, Neutral, Navy, Purple)
  - Light/Dark/Auto mode support
  - Real-time preview
  - Persistent storage
- **Medium Blog Integration**: Auto-fetch and display your latest articles
- **Responsive Design**: Mobile-first with hamburger menu
- **Smooth Animations**: Blur-fade effects and transitions
- **Easy Configuration**: Single config file setup

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Framer Motion
- RSS2JSON API (Medium integration)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/anshulkah/anshul-portofolio.git
   cd anshul-portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Update your info**
   Edit `src/data/resume.tsx` with your personal information

4. **Change Medium username** (optional)
   Edit `src/components/medium-articles.tsx` line 46:
   ```typescript
   `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@YOUR_USERNAME`
   ```

5. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

The portfolio features an advanced theme customizer accessible via:
- **Desktop**: "Customize Theme" button in sidebar
- **Mobile**: Palette icon in top-right header

Customize:
- **Accent Color**: Choose from 10 vibrant colors
- **Background Theme**: 6 different background styles
- **Appearance**: Light, Dark, or Auto mode

All preferences are saved automatically!

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with metadata
│   ├── layout-wrapper.tsx            # Client-side layout wrapper
│   ├── page.tsx                      # Main portfolio page
│   └── globals.css                   # Global styles
├── components/
│   ├── sidebar.tsx                   # Desktop sidebar navigation
│   ├── mobile-nav.tsx                # Mobile navigation
│   ├── advanced-theme-customizer.tsx # Theme customization panel
│   ├── medium-articles.tsx           # Medium blog integration
│   └── ui/                           # Reusable UI components
└── data/
    └── resume.tsx                    # Your portfolio data
```

## 🌟 Key Features

### Split Layout
- Fixed sidebar on desktop (inspired by cleverdeveloper.in)
- Smooth section scrolling
- Active section highlighting
- Social links in sidebar footer

### Theme System
- 10 accent colors × 6 backgrounds = 60 combinations
- CSS custom properties for theming
- Smooth transitions
- Persistent user preferences

### Blog Integration
- Auto-fetch Medium articles via RSS
- Beautiful card layout
- Categories and read time
- Responsive grid

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel with one click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🙏 Credits

- Design inspiration: [cleverdeveloper.in](https://www.cleverdeveloper.in/)
- UI components: [Shadcn/UI](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)

## 📄 License

Licensed under the [MIT license](LICENSE.md).
