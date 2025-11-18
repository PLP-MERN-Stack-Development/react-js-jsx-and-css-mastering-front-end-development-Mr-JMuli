# Climate Tracker for Agriculture 🌾

**Live Demo:** https://react-js-jsx-and-css-mastering-fron-blond-eight.vercel.app/

A fully responsive web application built with React.js and Tailwind CSS that helps farmers and agribusinesses monitor real-time climate and weather conditions critical for crop growth and farm planning.

## Features ✨

- **Location Search** – Type any city worldwide and get instant weather data
- **Real-time Climate Data** powered by the Open-Meteo API (no API key required)
  - Current temperature, humidity, precipitation, wind speed, soil moisture
  - 7-day detailed forecast
- **Agricultural Risk Alerts**
  - Heat stress risk
  - Fungal disease risk (high humidity)
  - Flooding/drought indicators
- **Light / Dark Mode** toggle with persistence
- **Fully Responsive** – works perfectly on mobile, tablet, and desktop
- **Clean, Modern UI** built entirely with Tailwind CSS
- **Client-side Routing** using React Router v6
  - `/` → Home/Dashboard
  - `/details/:location` → Detailed climate view
  - `/about` → About page

## Tech Stack 🛠️

- **React 18** + Vite (fast development & build)
- **Tailwind CSS** for styling
- **React Router DOM** for navigation
- **Lucide React** for beautiful icons
- **date-fns** for date formatting
- **Open-Meteo API** for free, high-quality weather & soil data
- **Context API** for theme management
- **Custom Hook** (`useClimateData`) for reusable data fetching logic

## Project Structure
src/
├── api/              → API functions (Open-Meteo integration)
├── components/       → Reusable UI components (Navbar, SearchBar, Cards, etc.)
├── context/          → ThemeContext (dark/light mode)
├── hooks/            → Custom hooks (useClimateData)
├── pages/            → Page components (Dashboard, Details, About)
├── utils/            → Helper functions
├── App.jsx           → Main app + routing
└── main.jsx          → Entry point

## How to Run Locally

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
npm run dev

##Open http://localhost:5173

Deployment
Deployed on Vercel
Every push to the main branch automatically redeploys the app.
Author
JMuli – PLP Academy MERN FullStack Week 3 Assignment
100% complete, fully functional, and deployed with live demo ✅
