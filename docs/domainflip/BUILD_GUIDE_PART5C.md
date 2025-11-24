# DomainFlip - Complete Build Guide - PART 5C
## Final Page Specifications

---

## Overview

This is Part 5C - the final part of page specifications. This document covers the last 2 pages: LeaderboardPage and DemoPage.

---

## 7. LeaderboardPage (/leaderboard)

**Purpose:** Display competitive rankings across multiple categories with podium winners, detailed tables, and filtering options.

**File:** `src/pages/LeaderboardPage.jsx`

### Layout Structure

```
┌─────────────────────────────────────────┐
│  Header + Category Tabs                 │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  🥇 🥈 🥉 Podium Top 3                  │
└─────────────────────────────────────────┘
┌──────────────────────┬──────────────────┐
│                      │                  │
│   Rankings Table     │  Sidebar         │
│   (4th place onward) │  - Your Rank     │
│                      │  - Prizes        │
│                      │  - Categories    │
└──────────────────────┴──────────────────┘
```

### Key Features

- **Multiple Categories**: Volume, Profit, Sales, Speed (avg flip time), ROI, Activity
- **Podium Display**: Animated top 3 with avatars, medals, and stats
- **Time Periods**: Daily, Weekly, Monthly, All-Time filters
- **Rankings Table**: Sortable table starting from 4th place
- **User Highlight**: Current user's rank highlighted in blue
- **Search**: Filter by username
- **Rank Changes**: Show movement up/down with arrows

### Core Data Structure

```javascript
const categories = [
  { id: 'volume', label: 'Trading Volume', icon: DollarSign, metric: 'totalVolume' },
  { id: 'profit', label: 'Total Profit', icon: TrendingUp, metric: 'totalProfit' },
  { id: 'sales', label: 'Most Sales', icon: ShoppingCart, metric: 'totalSales' },
  { id: 'speed', label: 'Speed Demon', icon: Zap, metric: 'avgFlipTime' },
  { id: 'roi', label: 'Best ROI', icon: Target, metric: 'roi' },
  { id: 'activity', label: 'Most Active', icon: Activity, metric: 'totalTransactions' }
];
```

### Implementation Notes

```javascript
const LeaderboardPage = () => {
  const [activeCategory, setActiveCategory] = useState('volume');
  const [timePeriod, setTimePeriod] = useState('monthly');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sort users by active category metric
  const rankedUsers = users
    .filter(u => u.stats[activeConfig.metric] > 0)
    .sort((a, b) => b.stats[activeConfig.metric] - a.stats[activeConfig.metric])
    .map((user, index) => ({ ...user, rank: index + 1 }));
  
  const top3 = rankedUsers.slice(0, 3);
  const rest = rankedUsers.slice(3);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header with categories */}
      {/* Podium for top 3 */}
      {/* Rankings table */}
      {/* Sidebar with your rank, prizes, stats */}
    </div>
  );
};
```

### Podium Component

```javascript
// 2nd, 1st, 3rd arrangement with different heights
<div className="flex items-end justify-center gap-4">
  {/* 2nd Place - Silver - Medium height */}
  {/* 1st Place - Gold - Tallest */}
  {/* 3rd Place - Bronze - Shortest */}
</div>
```

### Sidebar Cards

1. **Your Rank Card** - Highlighted with gradient background
2. **Monthly Prizes** - 🥇 $500, 🥈 $250, 🥉 $100
3. **Competition Stats** - Total traders, active this month
4. **All Rankings** - Show user's rank in each category
5. **Share Button** - Share rank on social media

---

## 8. DemoPage (/demo)

**Purpose:** Interactive guided walkthrough showing how the platform works with step-by-step instructions.

**File:** `src/pages/DemoPage.jsx`

### Layout Structure

```
┌─────────────────────────────────────────┐
│  Progress Bar + Step Indicator          │
└─────────────────────────────────────────┘
┌──────────────────────┬──────────────────┐
│                      │                  │
│   Interactive Demo   │  Instructions    │
│   Area (simulated)   │  - Current Step  │
│                      │  - Tips          │
│                      │  - Navigation    │
└──────────────────────┴──────────────────┘
```

### Demo Steps

```javascript
const demoSteps = [
  {
    id: 'welcome',
    title: 'Welcome to DomainFlip!',
    description: 'Let\'s take a quick tour',
    component: 'welcome'
  },
  {
    id: 'browse',
    title: 'Browse Marketplace',
    description: 'Discover thousands of premium domains',
    component: 'marketplace',
    tips: ['Filter by price', 'Sort by trending', 'Save favorites']
  },
  {
    id: 'view-domain',
    title: 'View Domain Details',
    description: 'See detailed info and AI analysis',
    component: 'domain-detail'
  },
  {
    id: 'purchase',
    title: 'Make a Purchase',
    description: 'Buy instantly or make an offer',
    component: 'purchase-flow'
  },
  {
    id: 'list',
    title: 'List Your Domain',
    description: 'Sell your domains in 3 easy steps',
    component: 'list-flow'
  },
  {
    id: 'portfolio',
    title: 'Manage Portfolio',
    description: 'Track all your domains and profits',
    component: 'portfolio'
  },
  {
    id: 'compete',
    title: 'Climb the Leaderboard',
    description: 'Compete and earn prizes',
    component: 'leaderboard'
  },
  {
    id: 'complete',
    title: 'You\'re Ready to Trade!',
    description: 'Start your domain trading journey',
    component: 'complete'
  }
];
```

### Implementation

```javascript
const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  
  const progress = ((currentStep + 1) / demoSteps.length) * 100;
  
  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowCelebration(true);
      setTimeout(() => navigate('/marketplace'), 3000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress bar at top */}
      {/* Step indicators */}
      {/* Main content area with demo simulation */}
      {/* Sidebar with instructions */}
      {/* Celebration modal on completion */}
    </div>
  );
};
```

### Demo Step Components

Each step renders a simplified, simulated version of the actual feature:

```javascript
const DemoStepContent = ({ step }) => {
  switch (step.component) {
    case 'welcome':
      return <WelcomeStep />; // Welcome screen with 3 features
    case 'marketplace':
      return <MarketplaceDemoStep />; // Mock domain cards
    case 'domain-detail':
      return <DomainDetailDemoStep />; // Simulated detail view
    case 'purchase-flow':
      return <PurchaseDemoStep />; // Checkout simulation
    case 'list-flow':
      return <ListDomainDemoStep />; // Listing form
    case 'portfolio':
      return <PortfolioDemoStep />; // Stats and activity
    case 'leaderboard':
      return <LeaderboardDemoStep />; // Rankings preview
    case 'complete':
      return <CompleteStep />; // Completion with checkmarks
  }
};
```

### Key Features

1. **Progress Tracking** - Visual bar and step indicators
2. **Navigation** - Next/Previous/Skip buttons
3. **Contextual Tips** - Helpful hints for each step
4. **Simulated Interactions** - Click-through demos (no real actions)
5. **Completion Celebration** - Achievement unlock and redirect

### Sidebar Elements

- **Instruction Card** - Blue gradient with step title and description
- **Tips Card** - 💡 Quick tips bullet list
- **Navigation Buttons** - Large Next button, Previous, Skip
- **Progress Stats** - Steps completed, time spent
- **Help Button** - Contact support option

---

## Summary

**BUILD_GUIDE_PART5C** completes all page specifications:

### LeaderboardPage
- Multi-category competitive rankings
- Podium display for top 3 winners
- Comprehensive rankings table
- Time period filtering
- User rank highlighting
- Prize information

### DemoPage  
- 8-step interactive walkthrough
- Simulated platform features
- Progress tracking
- Contextual help and tips
- Completion celebration

---

## Next Steps

All 8 pages are now specified. The next phase will involve:

1. **Implementation** - Build each page component
2. **Integration** - Connect with routing and state management
3. **Testing** - Ensure all features work correctly
4. **Refinement** - Polish UI/UX details
5. **Deployment** - Launch the complete application

Refer to TECHNICAL_GUIDE documents for implementation details and best practices.

---

**End of BUILD_GUIDE_PART5C**
