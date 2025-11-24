# DomainFlip - Complete Build Guide - PART 5
## Page Specifications

---

## Overview

This is Part 5 of the complete DomainFlip build guide. This document provides detailed specifications for building all 8 main pages of the application.

**What's in this part:**
- Complete specifications for each page
- Layout guidelines
- Content requirements
- Component integration
- User interaction flows

Use these specs to build each page component. All supporting components and data are already created in previous parts.

---

## Table of Contents

1. [HomePage](#1-homepage-)
2. [FeaturesPage](#2-featurespage-features)
3. [PricingPage](#3-pricingpage-pricing)
4. [MarketplacePage](#4-marketplacepage-marketplace)
5. [DomainDetailPage](#5-domaindetailpage-domaindomain-name)
6. [ProfilePage](#6-profilepage-profileusername)
7. [LeaderboardPage](#7-leaderboardpage-leaderboard)
8. [DemoPage](#8-demopage-demo)

---

## 1. HomePage (/)

**Purpose:** Landing page that immediately conveys value proposition and showcases platform activity.

**File:** `src/pages/HomePage.jsx`

### Layout Structure

```
┌─────────────────────────────────────────┐
│  Hero Section (full viewport height)   │
│  - Headline, subheadline, CTAs         │
│  - Animated gradient background         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Live Activity Ticker (scrolling)       │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Trending Domains (grid of 6)           │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  How It Works (3-step process)          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Social Proof (testimonials)            │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Stats Section (platform metrics)       │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Recent Big Sales (table/list)          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Features Preview (grid of 6)           │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Final CTA Section                      │
└─────────────────────────────────────────┘
```

### Sections Detail

#### Hero Section
```javascript
<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
      Trade Domains Like NFTs. Instant. Social. Profitable.
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
      The fastest way to buy, sell, and swap premium domain names. 
      AI-powered valuations. Real-time trading. Join 10,000+ domain traders.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" onClick={() => navigate('/marketplace')}>
        Start Trading
      </Button>
      <Button size="lg" variant="outline" onClick={() => navigate('/demo')}>
        Watch Demo
      </Button>
    </div>
  </div>
</section>
```

**Key Features:**
- Full viewport height
- Gradient background
- Large, bold headline with text-gradient class
- Two prominent CTAs
- Responsive text sizing

#### Live Activity Ticker
```javascript
<div className="bg-white border-y border-gray-200 py-4 overflow-hidden">
  <div className="flex animate-scroll whitespace-nowrap">
    {recentActivity.map((activity, index) => (
      <div key={index} className="inline-flex items-center mx-8">
        <span className="text-sm text-gray-600">
          {activity.text}
        </span>
      </div>
    ))}
  </div>
</div>
```

**Implementation:**
- Auto-scrolling horizontal ticker
- Shows recent sales, listings, bids
- Updates every 3-5 seconds
- Example activities:
  - "TechStartup.io just sold for $5,000"
  - "@DomainKing listed AIRevolution.com"
  - "CryptoHub.com received bid of $12,000"

#### Trending Domains Section
```javascript
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4">
      🔥 Hot Domains Right Now
    </h2>
    <p className="text-gray-600 text-center mb-12">
      Most popular domains in the last 24 hours
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trendingDomains.slice(0, 6).map(domain => (
        <DomainCard key={domain.id} domain={domain} />
      ))}
    </div>
  </div>
</section>
```

**Key Features:**
- Show 6 trending domains
- Use DomainCard component
- Grid layout (1 col mobile, 2 tablet, 3 desktop)
- Auto-rotate every 10 seconds

#### How It Works
```javascript
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">{step.icon}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Steps:**
1. 🔍 "Find Your Domain" - Search or browse AI-recommended domains
2. ⚡ "Trade Instantly" - Buy now, bid, or swap with other domains
3. 📈 "Profit & Repeat" - Track portfolio, flip for profit, climb leaderboards

#### Social Proof Section
```javascript
<section className="py-20 bg-blue-600 text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Join Top Domain Traders
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-white/10 border-white/20 backdrop-blur">
          <div className="flex items-center gap-4 mb-4">
            <Avatar src={testimonial.avatar} size="lg" />
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-blue-200">{testimonial.username}</p>
            </div>
          </div>
          <p className="text-white/90">{testimonial.quote}</p>
          <p className="text-blue-200 text-sm mt-4">{testimonial.stats}</p>
        </Card>
      ))}
    </div>
  </div>
</section>
```

**Testimonials Example:**
- "@DomainKing - Flipped 47 domains in 30 days, $127K profit"
- "@StartupQueen - Found perfect domain for my SaaS in 5 minutes"
- "@CryptoFlip - Made 400% ROI on AINews.io"

#### Stats Section
```javascript
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
            {stat.value}
          </p>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Stats to Show:**
- "$5.2M+ Traded"
- "10,000+ Domains Listed"
- "8,500+ Active Traders"
- "4.2M+ Total Transactions"

**Implementation:** Use counting animation on scroll into view

#### Recent Big Sales
```javascript
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Recent Big Sales</h2>
    <div className="space-y-4">
      {recentSales.slice(0, 5).map(sale => (
        <Card key={sale.id} className="flex items-center justify-between p-4">
          <div>
            <p className="font-bold text-lg">{sale.domain}</p>
            <p className="text-sm text-gray-600">
              {sale.seller} → {sale.buyer} • {formatTimeAgo(sale.timestamp)}
            </p>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {formatPrice(sale.price)}
          </p>
        </Card>
      ))}
    </div>
  </div>
</section>
```

#### Features Preview
```javascript
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16">
      Powerful Features
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card key={index} hover className="p-6">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  </div>
</section>
```

**Features:**
- ⚡ "Instant Trading" - Buy and sell in seconds
- 🤖 "AI Valuations" - Smart pricing recommendations
- 🔄 "Domain Swaps" - Trade domains for other domains
- 📊 "Live Leaderboards" - Compete with top traders
- 💬 "Social Trading" - Follow, comment, discover
- 🏆 "Achievements" - Earn badges and rewards

#### Final CTA
```javascript
<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
    <p className="text-xl mb-8">Join thousands of domain traders today</p>
    <Button size="xl" variant="secondary">
      Explore Marketplace
    </Button>
  </div>
</section>
```

---

## 2. FeaturesPage (/features)

**Purpose:** Deep dive into all platform capabilities with interactive demos.

**File:** `src/pages/FeaturesPage.jsx`

### Layout Structure

Each feature section alternates between left-right layout for visual interest.

### Sections

#### Feature 1: Instant Trading
```javascript
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <Badge variant="primary" className="mb-4">Core Feature</Badge>
        <h2 className="text-4xl font-bold mb-6">Instant Trading</h2>
        <p className="text-lg text-gray-600 mb-6">
          List domains in seconds. Buy with one click. No waiting days for 
          transfers or approvals. Our escrow system makes trading instant and secure.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <span>One-click purchases</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <span>Instant listing updates</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <span>Secure escrow system</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <span>Real-time notifications</span>
          </li>
        </ul>
      </div>
      <div>
        {/* Visual: Animated mockup or illustration */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-center">
            <div className="text-6xl mb-4">⚡</div>
            <p className="text-2xl font-bold mb-2">3 seconds</p>
            <p className="text-gray-600">Average transaction time</p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>
```

#### Feature 2: AI-Powered Valuations (Interactive Demo)
```javascript
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Reverse order on desktop */}
      <div className="order-2 lg:order-1">
        <Card className="p-6">
          <h3 className="font-bold mb-4">Try It Yourself</h3>
          <input
            type="text"
            placeholder="Enter a domain name..."
            className="w-full px-4 py-3 border rounded-lg mb-4"
            value={testDomain}
            onChange={(e) => setTestDomain(e.target.value)}
          />
          <Button fullWidth onClick={analyzeDemo}>
            Analyze Domain
          </Button>
          
          {valuation && (
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-gray-600">Estimated Value</p>
                <p className="text-3xl font-bold text-blue-600">
                  {formatPrice(valuation.min)} - {formatPrice(valuation.max)}
                </p>
                <p className="text-sm text-gray-600">
                  Confidence: {valuation.confidence}%
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Length</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-4 h-4 rounded ${i < valuation.breakdown.length ? 'bg-blue-600' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                </div>
                {/* Repeat for other factors */}
              </div>
            </div>
          )}
        </Card>
      </div>
      
      <div className="order-1 lg:order-2">
        <Badge variant="info" className="mb-4">AI Technology</Badge>
        <h2 className="text-4xl font-bold mb-6">AI-Powered Valuations</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our proprietary algorithm analyzes dozens of factors to give you 
          accurate domain valuations instantly. No more guessing.
        </p>
        <p className="text-gray-600">
          Factors analyzed: Length, TLD premium, keyword value, brandability, 
          memorability, and market trends.
        </p>
      </div>
    </div>
  </div>
</section>
```

#### Feature 3: Multiple Trading Methods (Tabs)
```javascript
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4">
      Multiple Trading Methods
    </h2>
    <p className="text-center text-gray-600 mb-12">
      Choose the method that works best for you
    </p>
    
    <div className="max-w-4xl mx-auto">
      {/* Tab buttons */}
      <div className="flex gap-2 mb-8 border-b">
        {tradingMethods.map(method => (
          <button
            key={method.id}
            onClick={() => setActiveTab(method.id)}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === method.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {method.label}
          </button>
        ))}
      </div>
      
      {/* Tab content */}
      <Card className="p-8">
        {activeTab === 'buyNow' && (
          <div>
            <h3 className="text-2xl font-bold mb-4">Buy Now</h3>
            <p className="text-gray-600 mb-6">
              Fixed price, instant purchase. The fastest way to acquire a domain.
            </p>
            {/* Visual example */}
          </div>
        )}
        {/* Other tabs... */}
      </Card>
    </div>
  </div>
</section>
```

**Continue with similar patterns for:**
- Feature 4: Domain-for-Domain Trading
- Feature 5: Social Discovery
- Feature 6: Leaderboards & Gamification
- Feature 7: Portfolio Management
- Feature 8: Real-Time Alerts
- Feature 9: Premium Analytics

Each feature should have:
- Badge indicating category
- Headline
- Description
- Visual or interactive demo
- Key benefits list

**Bottom CTA:**
```javascript
<section className="py-20 bg-blue-600 text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4">Experience It Yourself</h2>
    <div className="flex gap-4 justify-center">
      <Button size="lg" variant="secondary" onClick={() => navigate('/demo')}>
        Try Demo
      </Button>
      <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
        See Pricing
      </Button>
    </div>
  </div>
</section>
```

---

## 3. PricingPage (/pricing)

**Purpose:** Clear pricing tiers with feature comparison and value proposition.

**File:** `src/pages/PricingPage.jsx`

### Layout

```javascript
<div className="min-h-screen py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
      <p className="text-xl text-gray-600">
        Choose the plan that fits your trading style
      </p>
      
      {/* Annual/Monthly toggle */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <span className={!isAnnual ? 'font-bold' : 'text-gray-600'}>Monthly</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-14 h-7 bg-gray-300 rounded-full transition-colors"
        >
          <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-7' : ''}`} />
        </button>
        <span className={isAnnual ? 'font-bold' : 'text-gray-600'}>
          Annual <Badge variant="success" size="sm">Save 20%</Badge>
        </span>
      </div>
    </div>
    
    {/* Pricing cards grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingTiers.map(tier => (
        <PricingCard key={tier.id} tier={tier} isAnnual={isAnnual} />
      ))}
    </div>
    
    {/* Transaction fee comparison */}
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Transaction Fee Comparison
      </h2>
      <Card className="max-w-2xl mx-auto p-8">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Tier</th>
              <th className="text-right py-3">Fee</th>
              <th className="text-right py-3">On $10K Sale</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">Free</td>
              <td className="text-right">8%</td>
              <td className="text-right text-red-600">-$800</td>
            </tr>
            <tr className="border-b">
              <td className="py-3">Pro</td>
              <td className="text-right">5%</td>
              <td className="text-right text-orange-600">-$500</td>
            </tr>
            <tr>
              <td className="py-3">Elite</td>
              <td className="text-right">3%</td>
              <td className="text-right text-green-600">-$300</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Elite members save $500 per $10,000 sale compared to Free tier
        </p>
      </Card>
    </div>
    
    {/* FAQ */}
    <div className="mt-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <Card key={index} className="p-6">
            <h3 className="font-bold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </div>
  </div>
</div>
```

### PricingCard Component

```javascript
const PricingCard = ({ tier, isAnnual, highlighted }) => {
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const savings = isAnnual && tier.annualSavings;
  
  return (
    <Card className={`relative p-8 ${highlighted ? 'border-2 border-blue-600 scale-105' : ''}`}>
      {highlighted && (
        <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{tier.tagline}</p>
        <div>
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        {savings && (
          <p className="text-sm text-green-600 mt-2">Save ${savings}/year</p>
        )}
      </div>
      
      <Button fullWidth className="mb-6">
        {tier.cta}
      </Button>
      
      <div className="space-y-3">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.included ? (
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? '' : 'text-gray-400'}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};
```

### Pricing Tiers Data

```javascript
const pricingTiers = [
  {
    id: 'free',
    name: 'Trader',
    tagline: 'Perfect for getting started',
    monthlyPrice: 0,
    annualPrice: 0,
    cta: 'Start Free',
    features: [
      { text: 'Buy and sell domains', included: true },
      { text: 'Basic AI valuations', included: true },
      { text: 'Public portfolio', included: true },
      { text: 'Community access', included: true },
      { text: 'Standard transaction fees (8%)', included: true },
      { text: 'Make/receive trade offers', included: true },
      { text: 'Early access to listings', included: false },
      { text: 'Advanced analytics', included: false },
    ]
  },
  {
    id: 'pro',
    name: 'Pro Trader',
    tagline: 'For serious domain investors',
    monthlyPrice: 49,
    annualPrice: 39,
    annualSavings: 120,
    cta: 'Start Pro Trial',
    highlighted: true,
    features: [
      { text: 'Everything in Free', included: true },
      { text: 'Early access to listings (30 min)', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'Reduced transaction fees (5%)', included: true },
      { text: 'Priority trade matching', included: true },
      { text: 'Market trend predictions', included: true },
      { text: 'Pro badge on profile', included: true },
      { text: '10 custom alerts', included: true },
    ]
  },
  {
    id: 'elite',
    name: 'Elite Trader',
    tagline: 'For domain trading professionals',
    monthlyPrice: 199,
    annualPrice: 159,
    annualSavings: 480,
    cta: 'Start Elite Trial',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Even lower fees (3%)', included: true },
      { text: '60 minutes early access', included: true },
      { text: 'AI-powered trade recommendations', included: true },
      { text: 'Unlimited custom alerts', included: true },
      { text: 'White-glove concierge service', included: true },
      { text: 'Exclusive Elite badge', included: true },
      { text: 'Portfolio insurance (up to $10K)', included: true },
    ]
  },
];
```

---

## 4. MarketplacePage (/marketplace)

**Purpose:** Browse and discover all available domains with filtering and sorting.

**File:** `src/pages/MarketplacePage.jsx`

### Layout Structure

```
┌─────────────────────────────────────────┐
│  Search Bar + View Toggle + Sort        │
└─────────────────────────────────────────┘
┌─────┬───────────────────────────────────┐
│     │  Results count + Active filters   │
│  F  ├───────────────────────────────────┤
│  I  │                                   │
│  L  │                                   │
│  T  │      Domain Grid (3-4 cols)      │
│  E  │                                   │
│  R  │                                   │
│  S  │                                   │
│     ├───────────────────────────────────┤
│     │         Pagination                │
└─────┴───────────────────────────────────┘
```

### Implementation

```javascript
const MarketplacePage = () => {
  const { domains } = useApp();
  const [filteredDomains, setFilteredDomains] = useState(domains);
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 100000,
    tlds: [],
    categories: [],
    listingTypes: [],
    length: [],
    trending: false,
    isNew: false,
  });
  const [sortBy, setSortBy] = useState('recentlyListed');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  
  // Apply filters
  useEffect(() => {
    let result = [...domains];
    
    // Price filter
    result = result.filter(d => d.price >= filters.priceMin && d.price <= filters.priceMax);
    
    // TLD filter
    if (filters.tlds.length > 0) {
      result = result.filter(d => filters.tlds.includes(d.tld));
    }
    
    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter(d => filters.categories.includes(d.category));
    }
    
    // Trending/New
    if (filters.trending) {
      result = result.filter(d => d.trending);
    }
    if (filters.isNew) {
      result = result.filter(d => d.isNew);
    }
    
    // Sort
    switch (sortBy) {
      case 'priceLowHigh':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'mostPopular':
        result.sort((a, b) => b.views - a.views);
        break;
      case 'trending':
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      default: // recentlyListed
        result.sort((a, b) => new Date(b.listedAt) - new Date(a.listedAt));
    }
    
    setFilteredDomains(result);
  }, [domains, filters, sortBy]);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Domain Marketplace</h1>
          
          {/* Search and controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search domains by keyword, TLD, or price..."
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-lg border"
              >
                <option value="recentlyListed">Recently Listed</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="mostPopular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>
              
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="px-4 py-3 border rounded-lg hover:bg-gray-100"
              >
                {viewMode === 'grid' ? <List /> : <Grid />}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex gap-8">
          {/* Filters sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* Results count and active filters */}
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                {filteredDomains.length} domains found
              </p>
              
              {/* Active filter chips */}
              <div className="flex flex-wrap gap-2">
                {filters.tlds.map(tld => (
                  <Badge key={tld} variant="info">
                    .{tld}
                    <button onClick={() => removeTldFilter(tld)} className="ml-2">×</button>
                  </Badge>
                ))}
                {/* More filter chips... */}
              </div>
            </div>
            
            {/* Domain grid/list */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDomains.map(domain => (
                  <DomainCard key={domain.id} domain={domain} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredDomains.map(domain => (
                  <DomainCard key={domain.id} domain={domain} view="list" />
                ))}
              </div>
            )}
            
            {/* Empty state */}
            {filteredDomains.length === 0 && (
              <Card className="p-12 text-center">
                <p className="text-xl text-gray-600 mb-4">
                  No domains match your filters
                </p>
                <Button onClick={() => setFilters({})}>
                  Clear All Filters
                </Button>
              </Card>
            )}
            
            {/* Pagination */}
            {filteredDomains.length > 20 && (
              <div className="mt-12 flex justify-center">
                <div className="flex gap-2">
                  <Button variant="outline">Previous</Button>
                  <Button>1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
```

### FilterSidebar Component

```javascript
const FilterSidebar = ({ filters, setFilters }) => {
  const tldOptions = ['com', 'io', 'ai', 'net', 'org', 'app'];
  const categoryOptions = ['tech', 'crypto', 'finance', 'health', 'education', 'business'];
  
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-bold mb-4">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="100000"
            value={filters.priceMax}
            onChange={(e) => setFilters({...filters, priceMax: parseInt(e.target.value)})}
            className="w-full"
          />
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceMin}
              onChange={(e) => setFilters({...filters, priceMin: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.priceMax}
              onChange={(e) => setFilters({...filters, priceMax: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <h3 className="font-bold mb-4">TLD</h3>
        <div className="space-y-2">
          {tldOptions.map(tld => (
            <label key={tld} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.tlds.includes(tld)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({...filters, tlds: [...filters.tlds, tld]});
                  } else {
                    setFilters({...filters, tlds: filters.tlds.filter(t => t !== tld)});
                  }
                }}
              />
              <span>.{tld}</span>
            </label>
          ))}
        </div>
      </Card>
      
      <Card className="p-6">
        <h3 className="font-bold mb-4">Category</h3>
        <div className="space-y-2">
          {categoryOptions.map(category => (
            <label key={category} className="flex items-center gap-2 capitalize">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({...filters, categories: [...filters.categories, category]});
                  } else {
                    setFilters({...filters, categories: filters.categories.filter(c => c !== category)});
                  }
                }}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </Card>
      
      <Card className="p-6">
        <h3 className="font-bold mb-4">Activity</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.trending}
              onChange={(e) => setFilters({...filters, trending: e.target.checked})}
            />
            <span>🔥 Trending</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.isNew}
              onChange={(e) => setFilters({...filters, isNew: e.target.checked})}
            />
            <span>🆕 New (24h)</span>
          </label>
        </div>
      </Card>
      
      <Button fullWidth variant="outline" onClick={() => setFilters({})}>
        Clear All Filters
      </Button>
    </div>
  );
};
```

---

Due to length constraints, I'll create a second file for the remaining pages (5-8). Should I continue with Part 5B containing DomainDetailPage, ProfilePage, LeaderboardPage, and DemoPage?

