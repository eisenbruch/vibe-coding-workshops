# DomainFlip - Complete Build Guide - PART 1
## Setup & Foundation

---

## Overview

This is Part 1 of the complete DomainFlip build guide. This document covers all the initial setup, project structure, dependencies, and configuration needed to start building the proof-of-concept demo website.

**What you'll build:** A fully functional demo showcasing all DomainFlip features without requiring authentication, real domain registration, or payment processing.

**Technology Stack:**
- React 18+ with functional components and hooks
- Tailwind CSS for all styling
- Lucide React for icons
- Recharts for data visualization
- React Router for navigation
- No backend - all data mocked in frontend
- Fully client-side, no authentication required

---

## Quick Start Commands

```bash
# Create new React app
npx create-react-app domainflip-poc
cd domainflip-poc

# Install dependencies
npm install react-router-dom lucide-react recharts canvas-confetti

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start development server
npm start
```

---

## Complete Project Structure

Create this exact folder structure in your `src/` directory:

```
domainflip-poc/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Avatar.jsx
│   │   │   └── Toast.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TrendingDomains.jsx
│   │   │   ├── RecentSales.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   └── StatsSection.jsx
│   │   ├── marketplace/
│   │   │   ├── DomainCard.jsx
│   │   │   ├── DomainGrid.jsx
│   │   │   ├── FilterSidebar.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── domain/
│   │   │   ├── PriceChart.jsx
│   │   │   ├── BidSection.jsx
│   │   │   ├── CommentsSection.jsx
│   │   │   └── SimilarDomains.jsx
│   │   ├── profile/
│   │   │   ├── Portfolio.jsx
│   │   │   ├── TradingStats.jsx
│   │   │   └── AchievementBadges.jsx
│   │   ├── trading/
│   │   │   ├── BuyNowModal.jsx
│   │   │   ├── BidModal.jsx
│   │   │   ├── TradeProposalModal.jsx
│   │   │   └── ListDomainModal.jsx
│   │   └── social/
│   │       ├── ActivityFeed.jsx
│   │       ├── Leaderboard.jsx
│   │       └── FollowButton.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── MarketplacePage.jsx
│   │   ├── DomainDetailPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── LeaderboardPage.jsx
│   │   └── DemoPage.jsx
│   ├── data/
│   │   ├── mockDomains.js
│   │   ├── mockUsers.js
│   │   ├── mockTransactions.js
│   │   ├── mockComments.js
│   │   └── mockAchievements.js
│   ├── utils/
│   │   ├── domainValuation.js
│   │   ├── formatters.js
│   │   └── calculations.js
│   ├── hooks/
│   │   ├── useToast.js
│   │   └── useModal.js
│   ├── context/
│   │   ├── AppContext.jsx
│   │   └── ToastContext.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Tailwind CSS Configuration

### tailwind.config.js

Create this file in your project root:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-small': 'bounceSmall 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSmall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
```

### src/index.css

Replace the contents of `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-all duration-200;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-sm border border-gray-200;
  }
  
  .card-hover {
    @apply hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer;
  }
  
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600;
  }
}
```

---

## React Router Setup

### src/App.jsx

Create the main App component with routing:

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import MarketplacePage from './pages/MarketplacePage';
import DomainDetailPage from './pages/DomainDetailPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <Router>
      <AppProvider>
        <ToastProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/domain/:domainName" element={<DomainDetailPage />} />
                <Route path="/profile/:username" element={<ProfilePage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/demo" element={<DemoPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ToastProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
```

### src/index.js

Update your index.js if needed:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## Context Providers

### src/context/AppContext.jsx

This manages all global state for the application:

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockDomains } from '../data/mockDomains';
import { mockUsers } from '../data/mockUsers';
import { mockTransactions } from '../data/mockTransactions';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Current logged-in user (for demo purposes)
  const [currentUser] = useState({
    username: 'demoUser',
    displayName: 'Demo User',
    avatar: 'https://i.pravatar.cc/150?img=1',
    tier: 'pro',
    bio: 'Exploring DomainFlip!',
    memberSince: '2024-01-15',
    stats: {
      totalDomains: 8,
      totalSales: 3,
      totalVolume: 12400,
      winRate: 50,
      avgFlipTime: 45,
      roi: 23
    }
  });

  // All domains data
  const [domains, setDomains] = useState(mockDomains);
  
  // All users data
  const [users] = useState(mockUsers);
  
  // Transactions
  const [transactions, setTransactions] = useState(mockTransactions);
  
  // User's portfolio (domains they own)
  const [portfolio, setPortfolio] = useState([]);
  
  // User's watchlist
  const [watchlist, setWatchlist] = useState([]);
  
  // User's notifications
  const [notifications, setNotifications] = useState([]);

  // Initialize demo user portfolio with a few domains
  useEffect(() => {
    // Give demo user a few domains to start with
    const demoPortfolio = [
      {
        id: 100,
        name: 'MyStartup.com',
        price: 3500,
        aiValuation: { min: 3200, max: 4000, confidence: 85 },
        status: 'unlisted',
        owner: 'demoUser',
        purchasedAt: '2024-01-10T10:00:00Z'
      },
      {
        id: 101,
        name: 'TechVenture.io',
        price: 2800,
        aiValuation: { min: 2500, max: 3200, confidence: 82 },
        status: 'unlisted',
        owner: 'demoUser',
        purchasedAt: '2024-01-12T14:30:00Z'
      }
    ];
    setPortfolio(demoPortfolio);
  }, []);

  // Domain operations
  const buyDomain = (domainId, price) => {
    const domain = domains.find(d => d.id === domainId);
    if (!domain) return;

    // Update domain status
    setDomains(prev => prev.map(d => 
      d.id === domainId 
        ? { ...d, status: 'sold', soldTo: currentUser.username }
        : d
    ));
    
    // Add to portfolio
    setPortfolio(prev => [...prev, { 
      ...domain, 
      owner: currentUser.username,
      purchasedAt: new Date().toISOString(),
      status: 'unlisted'
    }]);
    
    // Add transaction
    const newTransaction = {
      id: transactions.length + 1,
      type: 'purchase',
      domain: domain.name,
      domainId,
      price,
      buyer: currentUser.username,
      seller: domain.listedBy,
      timestamp: new Date().toISOString(),
    };
    setTransactions(prev => [newTransaction, ...prev]);

    // Add notification
    addNotification({
      type: 'success',
      message: `Successfully purchased ${domain.name} for $${price.toLocaleString()}`,
      timestamp: new Date().toISOString()
    });
  };

  const listDomain = (domainId, listingData) => {
    setDomains(prev => prev.map(d => 
      d.id === domainId 
        ? { ...d, status: 'listed', ...listingData, listedAt: new Date().toISOString() }
        : d
    ));

    setPortfolio(prev => prev.map(d =>
      d.id === domainId
        ? { ...d, status: 'listed', ...listingData }
        : d
    ));

    addNotification({
      type: 'success',
      message: `Successfully listed domain for sale`,
      timestamp: new Date().toISOString()
    });
  };

  const placeBid = (domainId, amount) => {
    setDomains(prev => prev.map(d => 
      d.id === domainId 
        ? { 
            ...d, 
            bids: [...(d.bids || []), {
              username: currentUser.username,
              amount,
              timestamp: new Date().toISOString(),
            }].sort((a, b) => b.amount - a.amount)
          }
        : d
    ));

    addNotification({
      type: 'success',
      message: `Bid of $${amount.toLocaleString()} placed successfully`,
      timestamp: new Date().toISOString()
    });
  };

  const toggleLike = (domainId) => {
    setDomains(prev => prev.map(d => {
      if (d.id === domainId) {
        const isLiked = d.likedBy?.includes(currentUser.username);
        return {
          ...d,
          likes: isLiked ? d.likes - 1 : d.likes + 1,
          likedBy: isLiked
            ? d.likedBy.filter(u => u !== currentUser.username)
            : [...(d.likedBy || []), currentUser.username]
        };
      }
      return d;
    }));
  };

  const addToWatchlist = (domainId) => {
    if (!watchlist.includes(domainId)) {
      setWatchlist(prev => [...prev, domainId]);
      addNotification({
        type: 'info',
        message: 'Domain added to watchlist',
        timestamp: new Date().toISOString()
      });
    }
  };

  const removeFromWatchlist = (domainId) => {
    setWatchlist(prev => prev.filter(id => id !== domainId));
  };

  const addNotification = (notification) => {
    setNotifications(prev => [
      { id: Date.now(), ...notification },
      ...prev
    ].slice(0, 50)); // Keep only last 50 notifications
  };

  const clearNotification = (notificationId) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const getDomainById = (id) => {
    return domains.find(d => d.id === parseInt(id));
  };

  const getDomainByName = (name) => {
    return domains.find(d => d.name.toLowerCase() === name.toLowerCase());
  };

  const getUserByUsername = (username) => {
    if (username === currentUser.username) return currentUser;
    return users.find(u => u.username === username);
  };

  const value = {
    currentUser,
    domains,
    users,
    transactions,
    portfolio,
    watchlist,
    notifications,
    buyDomain,
    listDomain,
    placeBid,
    toggleLike,
    addToWatchlist,
    removeFromWatchlist,
    addNotification,
    clearNotification,
    getDomainById,
    getDomainByName,
    getUserByUsername,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
```

### src/context/ToastContext.jsx

Manages toast notifications throughout the app:

```javascript
import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/ui/Toast';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = ({ type = 'info', message, duration = 5000 }) => {
    const id = Date.now();
    const newToast = { id, type, message, duration };
    
    setToasts(prev => [...prev, newToast]);

    // Auto-dismiss after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container - fixed position top-right */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
            duration={toast.duration}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
```

---

## Custom Hooks

### src/hooks/useModal.js

Simple hook for managing modal state:

```javascript
import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};
```

### src/hooks/useToast.js

Export from ToastContext for convenience:

```javascript
export { useToast } from '../context/ToastContext';
```

---

## Package.json Dependencies

Your `package.json` should include these dependencies:

```json
{
  "name": "domainflip-poc",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.263.1",
    "recharts": "^2.10.3",
    "canvas-confetti": "^1.9.2"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

---

## Environment Setup Checklist

Before proceeding to Part 2, ensure you have:

- [ ] Node.js 16+ installed
- [ ] npm or yarn package manager
- [ ] Code editor (VS Code recommended)
- [ ] Created React app with `create-react-app`
- [ ] Installed all dependencies
- [ ] Configured Tailwind CSS
- [ ] Created all folder structure
- [ ] Set up App.jsx with routing
- [ ] Created AppContext.jsx
- [ ] Created ToastContext.jsx
- [ ] Created custom hooks
- [ ] Updated index.css with Tailwind
- [ ] Can run `npm start` without errors

---

## Testing Your Setup

After completing this part, you should be able to:

1. Run `npm start` and see the app load (it will be mostly blank)
2. Navigate to different routes (they'll show placeholder pages)
3. Open browser console with no errors
4. See Tailwind styles working

---

## Common Setup Issues & Fixes

### Issue: Tailwind styles not applying
**Fix:** Make sure you ran `npx tailwindcss init -p` and that your `tailwind.config.js` has the correct `content` paths.

### Issue: Import errors for context
**Fix:** Ensure the folder structure is exact and files are in the correct locations.

### Issue: React Router not working
**Fix:** Make sure `react-router-dom` is installed and you're using `BrowserRouter` not `HashRouter`.

### Issue: Module not found errors
**Fix:** Double-check all imports and that files exist where they're expected.

---

## What's Next?

Now that your foundation is set up, you're ready to move on to:

**PART 2:** Core Infrastructure (Utility Functions)
- Domain valuation algorithm
- Formatting utilities
- Calculation functions

After Part 2, you'll build the UI components in Part 3.

---

## Quick Reference

### Import AppContext:
```javascript
import { useApp } from '../context/AppContext';

// In component:
const { domains, buyDomain, currentUser } = useApp();
```

### Import Toast:
```javascript
import { useToast } from '../hooks/useToast';

// In component:
const { showToast } = useToast();
showToast({ type: 'success', message: 'Action completed!' });
```

### Import Modal Hook:
```javascript
import { useModal } from '../hooks/useModal';

// In component:
const { isOpen, openModal, closeModal } = useModal();
```

---

**✅ Part 1 Complete!** You now have a solid foundation. Proceed to Part 2 when ready.
