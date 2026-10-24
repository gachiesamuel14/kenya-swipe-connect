# Kenya Swipe Connect 💕

Location-based online dating platform for people in Kenya.

Connect with nearby users in Nairobi, Mombasa, Kisumu, Kiambu and across the country.

## Core Idea: Location-Based Matchmaking

- Users create profiles (photos, age, bio, interests, tribe, religion, lifestyle)
- App requests GPS location
- Shows nearby people sorted by distance
- Swipe left/right, like, match, and chat
- Filters: county, distance, age, tribe, interests, religion

## Features Planned

1. User registration / login
2. Profile setup & photo uploads
3. GPS / location tracking
4. Matching algorithm (proximity + preferences)
5. Real-time chat
6. Notifications
7. Safety / report system
8. Premium / subscription (optional, M-Pesa friendly)

## Tech Stack Recommendation

- **Frontend**: React + Vite + Tailwind CSS (deployed on Netlify)
- **Backend**: Supabase (Auth, Postgres + PostGIS for location, Realtime chat, Storage for photos)
- **Hosting**: Netlify (frontend) + Supabase (backend)
- **Payments**: M-Pesa via Daraja API or Stripe for international

### Why Supabase + Netlify?

Netlify is excellent for the frontend (instant deploys from GitHub, CDN, forms, functions).
Supabase gives you a full Postgres database, authentication, real-time subscriptions for chat, and file storage in one place — perfect for a dating app MVP.

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/gachiesamuel14/kenya-swipe-connect.git
   cd kenya-swipe-connect
   npm install
   npm run dev
   ```

2. For production deploy:
   - Connect this GitHub repo to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variables for Supabase once set up

## Next Steps for Full App

1. Create a free Supabase project
2. Set up tables for profiles, likes, matches, messages
3. Enable PostGIS for efficient nearby queries
4. Implement auth with Supabase
5. Add photo upload to Supabase Storage
6. Build real-time chat with Supabase Realtime
7. Add M-Pesa for premium features

## Localization for Kenya

- County filters (Nairobi, Mombasa, Kisumu, Nakuru, etc.)
- Tribe / ethnicity preferences
- Sheng support in bios
- Modes: Student, Professional, Church / Faith-based

Happy matching! 🇰🇪
