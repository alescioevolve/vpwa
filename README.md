# Next.js PWA Demo

A lightweight Progressive Web App built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Progressive Web App (PWA) with offline support
- ✅ Mobile-first responsive design
- ✅ Demo authentication system
- ✅ Protected dashboard route
- ✅ Service worker for offline functionality
- ✅ Installable on mobile and desktop
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

\`\`\`bash
npm run build
npm start
\`\`\`

## Demo Credentials

- **Email:** demo@demo.com
- **Password:** demo123

## Deployment

This app is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

## PWA Features

- **Installable:** Add to home screen on mobile devices
- **Offline Support:** Works without internet connection
- **Service Worker:** Caches assets for faster loading
- **Manifest:** Configured for standalone app experience

## Project Structure

\`\`\`
├── app/
│   ├── api/auth/          # Authentication API routes
│   ├── dashboard/         # Protected dashboard page
│   ├── signin/            # Sign in page
│   ├── _offline/          # Offline fallback page
│   └── layout.tsx         # Root layout with PWA meta tags
├── components/            # React components
├── public/
│   ├── manifest.json      # PWA manifest
│   └── icons/             # App icons
└── middleware.ts          # Route protection
\`\`\`

## License

MIT
