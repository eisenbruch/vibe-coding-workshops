# DomainFlip - Complete Build Guide - PART 4
## Mock Data

---

## Overview

This is Part 4 of the complete DomainFlip build guide. This document provides all the mock data needed to populate the demo application with realistic content.

**What's in this part:**
- 30+ sample domains with complete details
- 10+ user profiles with stats and badges
- 50+ transaction records
- Comments with replies
- 20+ achievement badges

All data is production-ready and can be copy-pasted directly into your project.

---

## Mock Domains Data

### src/data/mockDomains.js

Complete domain data with all properties:

```javascript
export const mockDomains = [
  {
    id: 1,
    name: "TechStartup.io",
    price: 5000,
    aiValuation: { min: 4500, max: 6200, confidence: 89 },
    status: "listed",
    listingType: ["buyNow", "offers", "trade"],
    tld: "io",
    category: "tech",
    length: 11,
    listedBy: "domainKing",
    listedAt: "2024-01-15T14:30:00Z",
    views: 1234,
    likes: 87,
    likedBy: ["demoUser", "techPro"],
    comments: 12,
    trending: true,
    isNew: false,
    badges: ["hot", "premium"],
    seoMetrics: {
      searchVolume: 12100,
      domainAuthority: 15,
      backlinks: 0,
      keywords: ["tech", "startup", "business"]
    },
    aiAnalysis: {
      brandability: 5,
      memorability: 4,
      keywordValue: 4,
      tldPremium: 4,
      marketTrend: 4,
      overallScore: 89
    },
    registrationInfo: {
      registered: "2019",
      expires: "2026-12",
      registrar: "DomainFlip Escrow"
    },
    priceHistory: [
      { date: "2024-01-10", price: 6000 },
      { date: "2024-01-12", price: 5500 },
      { date: "2024-01-15", price: 5000 }
    ],
    bids: [
      { username: "buyer123", amount: 4800, timestamp: "2024-01-15T16:30:00Z" },
      { username: "trader456", amount: 4500, timestamp: "2024-01-15T11:20:00Z" }
    ],
    openToTrades: true,
    tradePreferences: "Similar value domains (.com only), Tech/Startup related"
  },
  {
    id: 2,
    name: "AIRevolution.com",
    price: 12000,
    aiValuation: { min: 10500, max: 13500, confidence: 92 },
    status: "listed",
    listingType: ["buyNow", "offers"],
    tld: "com",
    category: "tech",
    length: 12,
    listedBy: "domainKing",
    listedAt: "2024-01-10T09:00:00Z",
    views: 2341,
    likes: 156,
    likedBy: ["demoUser"],
    comments: 23,
    trending: true,
    isNew: false,
    badges: ["hot", "premium"],
    seoMetrics: {
      searchVolume: 24500,
      domainAuthority: 0,
      backlinks: 0,
      keywords: ["ai", "artificial intelligence", "revolution"]
    },
    aiAnalysis: {
      brandability: 5,
      memorability: 5,
      keywordValue: 5,
      tldPremium: 5,
      marketTrend: 5,
      overallScore: 92
    },
    registrationInfo: {
      registered: "2018",
      expires: "2025-08",
      registrar: "DomainFlip Escrow"
    },
    priceHistory: [
      { date: "2024-01-05", price: 15000 },
      { date: "2024-01-08", price: 13000 },
      { date: "2024-01-10", price: 12000 }
    ],
    bids: [
      { username: "aiEnthusiast", amount: 11500, timestamp: "2024-01-14T10:00:00Z" },
      { username: "techInvestor", amount: 11000, timestamp: "2024-01-13T15:30:00Z" }
    ],
    openToTrades: false,
    tradePreferences: null
  },
  {
    id: 3,
    name: "CryptoHub.com",
    price: 8500,
    aiValuation: { min: 7800, max: 9200, confidence: 85 },
    status: "listed",
    listingType: ["buyNow", "offers", "trade"],
    tld: "com",
    category: "crypto",
    length: 10,
    listedBy: "cryptoQueen",
    listedAt: "2024-01-14T11:00:00Z",
    views: 987,
    likes: 64,
    likedBy: [],
    comments: 8,
    trending: false,
    isNew: true,
    badges: ["new"],
    seoMetrics: {
      searchVolume: 18200,
      domainAuthority: 0,
      backlinks: 0,
      keywords: ["crypto", "cryptocurrency", "bitcoin"]
    },
    aiAnalysis: {
      brandability: 4,
      memorability: 4,
      keywordValue: 5,
      tldPremium: 5,
      marketTrend: 4,
      overallScore: 85
    },
    registrationInfo: {
      registered: "2020",
      expires: "2027-03",
      registrar: "DomainFlip Escrow"
    },
    priceHistory: [
      { date: "2024-01-14", price: 8500 }
    ],
    bids: [],
    openToTrades: true,
    tradePreferences: "Crypto or tech domains, flexible on value"
  },
  {
    id: 4,
    name: "SmartData.ai",
    price: 6200,
    aiValuation: { min: 5500, max: 7000, confidence: 88 },
    status: "listed",
    listingType: ["buyNow", "offers"],
    tld: "ai",
    category: "tech",
    length: 9,
    listedBy: "dataScientist",
    listedAt: "2024-01-13T16:45:00Z",
    views: 654,
    likes: 42,
    likedBy: [],
    comments: 5,
    trending: false,
    isNew: true,
    badges: ["new"],
    seoMetrics: {
      searchVolume: 8900,
      domainAuthority: 0,
      backlinks: 0,
      keywords: ["smart", "data", "analytics"]
    },
    aiAnalysis: {
      brandability: 5,
      memorability: 4,
      keywordValue: 4,
      tldPremium: 4,
      marketTrend: 5,
      overallScore: 88
    },
    registrationInfo: {
      registered: "2021",
      expires: "2026-01",
      registrar: "DomainFlip Escrow"
    },
    priceHistory: [
      { date: "2024-01-13", price: 6200 }
    ],
    bids: [
      { username: "mlExpert", amount: 5800, timestamp: "2024-01-14T12:00:00Z" }
    ],
    openToTrades: false,
    tradePreferences: null
  },
  {
    id: 5,
    name: "HealthTrack.io",
    price: 4200,
    aiValuation: { min: 3800, max: 4800, confidence: 82 },
    status: "listed",
    listingType: ["buyNow", "offers", "trade"],
    tld: "io",
    category: "health",
    length: 11,
    listedBy: "healthTechPro",
    listedAt: "2024-01-12T08:30:00Z",
    views: 432,
    likes: 28,
    likedBy: [],
    comments: 3,
    trending: false,
    isNew: false,
    badges: [],
    seoMetrics: {
      searchVolume: 6500,
      domainAuthority: 0,
      backlinks: 0,
      keywords: ["health", "track", "fitness"]
    },
    aiAnalysis: {
      brandability: 4,
      memorability: 4,
      keywordValue: 3,
      tldPremium: 4,
      marketTrend: 4,
      overallScore: 82
    },
    registrationInfo: {
      registered: "2020",
      expires: "2025-12",
      registrar: "DomainFlip Escrow"
    },
    priceHistory: [
      { date: "2024-01-08", price: 4500 },
      { date: "2024-01-12", price: 4200 }
    ],
    bids: [],
    openToTrades: true,
    tradePreferences: "Health/wellness related domains"
  },
  {
    id: 6,
    name: "DevTools.com",
    price: 15000,
    aiValuation: { min: 13000, max: 17000, confidence: 91 },
    status: "listed",
    listingType: ["buyNow"],
    tld: "com",
    category: "tech",
    length: 8,
    listedBy: "domainKing",
    listedAt: "2024-01-08T10:00:00Z",
    views: 3421,
    likes: 234,
    likedBy: ["demoUser", "techPro", "startupGuru"],
    comments: 45,
    trending: true,
    isNew: false,
    badges: ["hot", "premium"],
    seoMetrics: {
      searchVolume: 45000,
      domainAuthority: 0,
      backlinks: 0,
      keywords: ["dev", "developer", "tools"]
    },
    aiAnalysis: {
      brandability: 5,
      memorability: 5,
      keywordValue: 5,
      tldPremium: 5,
      marketTrend: 4,
      overallScore: 91
    },
    registrationInfo: {
      registered: "2017",
      expires: "2026-06",
      registrar: "DomainFlip Escrow"
    },
    priceHistory: [
      { date: "2024-01-01", price: 18000 },
      { date: "2024-01-05", price: 16000 },
      { date: "2024-01-08", price: 15000 }
    ],
    bids: [],
    openToTrades: false,
    tradePreferences: null
  },
];

// Additional domain names to generate
const additionalDomainNames = [
  "CloudBase.io", "StartupLab.com", "TechHub.ai", "DataFlow.io",
  "AppForge.com", "CodeCraft.io", "WebPro.net", "SmartLink.io",
  "CryptoVault.com", "BlockChain.io", "NFTMarket.io", "GameZone.com",
  "FinanceHub.com", "PaymentPro.io", "TradeSmart.com", "InvestNow.io",
  "HealthPlus.com", "MediCare.io", "FitTrack.app", "WellBeing.io",
  "EduLearn.com", "StudyHub.io", "OnlineCourse.com", "SkillUp.io",
  "MarketPlace.co", "ShopNow.com", "BizGrowth.io", "SalesBoost.com"
];

// Auto-generate additional domains
additionalDomainNames.forEach((name, index) => {
  const parts = name.split('.');
  const domain = parts[0];
  const tld = parts[1];
  
  const categories = ["tech", "crypto", "finance", "health", "education", "business"];
  const sellers = ["domainKing", "cryptoQueen", "techPro", "startupGuru", "dataScientist"];
  
  const price = Math.floor(Math.random() * 10000) + 1000;
  const variance = 0.2;
  
  mockDomains.push({
    id: mockDomains.length + 1,
    name,
    price,
    aiValuation: {
      min: Math.floor(price * (1 - variance)),
      max: Math.floor(price * (1 + variance)),
      confidence: Math.floor(Math.random() * 20) + 75
    },
    status: "listed",
    listingType: Math.random() > 0.5 ? ["buyNow", "offers"] : ["buyNow"],
    tld,
    category: categories[Math.floor(Math.random() * categories.length)],
    length: domain.length,
    listedBy: sellers[Math.floor(Math.random() * sellers.length)],
    listedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    views: Math.floor(Math.random() * 2000) + 100,
    likes: Math.floor(Math.random() * 100) + 10,
    likedBy: [],
    comments: Math.floor(Math.random() * 20),
    trending: Math.random() > 0.8,
    isNew: Math.random() > 0.7,
    badges: [],
    seoMetrics: {
      searchVolume: Math.floor(Math.random() * 50000) + 1000,
      domainAuthority: 0,
      backlinks: 0,
      keywords: []
    },
    aiAnalysis: {
      brandability: Math.floor(Math.random() * 3) + 3,
      memorability: Math.floor(Math.random() * 3) + 3,
      keywordValue: Math.floor(Math.random() * 3) + 3,
      tldPremium: Math.floor(Math.random() * 3) + 3,
      marketTrend: Math.floor(Math.random() * 3) + 3,
      overallScore: Math.floor(Math.random() * 20) + 75
    },
    registrationInfo: {
      registered: String(2015 + Math.floor(Math.random() * 8)),
      expires: `202${5 + Math.floor(Math.random() * 3)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}`,
      registrar: "DomainFlip Escrow"
    },
    priceHistory: [
      { 
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], 
        price: Math.floor(price * 1.1) 
      },
      { 
        date: new Date().toISOString().split('T')[0], 
        price 
      }
    ],
    bids: [],
    openToTrades: Math.random() > 0.6,
    tradePreferences: Math.random() > 0.6 ? "Open to fair trades" : null
  });
});

export default mockDomains;
```

---

## Mock Users Data

### src/data/mockUsers.js

User profiles with complete stats and badges:

```javascript
export const mockUsers = [
  {
    username: "domainKing",
    displayName: "Kevin Chen",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Professional domain trader. Love finding the next big brand. DM for trades.",
    memberSince: "2024-01-01",
    location: "San Francisco, CA",
    badges: ["topTrader", "speedDemon", "eliteMember"],
    stats: {
      totalDomains: 47,
      totalSales: 89,
      totalVolume: 324890,
      winRate: 94,
      avgFlipTime: 12,
      roi: 287
    },
    rating: 4.8,
    reviewCount: 124,
    followers: 2341,
    following: 156,
    tier: "elite"
  },
  {
    username: "cryptoQueen",
    displayName: "Sarah Martinez",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Crypto domain specialist. Building the future, one domain at a time.",
    memberSince: "2024-01-05",
    location: "Austin, TX",
    badges: ["topTrader", "cryptoExpert"],
    stats: {
      totalDomains: 34,
      totalSales: 56,
      totalVolume: 187340,
      winRate: 88,
      avgFlipTime: 18,
      roi: 156
    },
    rating: 4.6,
    reviewCount: 78,
    followers: 1456,
    following: 89,
    tier: "pro"
  },
  {
    username: "startupGuru",
    displayName: "Mike Johnson",
    avatar: "https://i.pravatar.cc/150?img=8",
    bio: "Helping startups find their perfect domain. 10+ years experience.",
    memberSince: "2024-01-03",
    location: "New York, NY",
    badges: ["topTrader", "helper"],
    stats: {
      totalDomains: 28,
      totalSales: 67,
      totalVolume: 234560,
      winRate: 92,
      avgFlipTime: 15,
      roi: 198
    },
    rating: 4.9,
    reviewCount: 102,
    followers: 1823,
    following: 134,
    tier: "pro"
  },
  {
    username: "techPro",
    displayName: "Alex Wong",
    avatar: "https://i.pravatar.cc/150?img=15",
    bio: "Tech domain investor. Always looking for the next unicorn.",
    memberSince: "2024-01-08",
    location: "Seattle, WA",
    badges: ["topTrader"],
    stats: {
      totalDomains: 23,
      totalSales: 41,
      totalVolume: 145230,
      winRate: 85,
      avgFlipTime: 21,
      roi: 134
    },
    rating: 4.7,
    reviewCount: 56,
    followers: 987,
    following: 67,
    tier: "pro"
  },
  {
    username: "dataScientist",
    displayName: "Emily Rivera",
    avatar: "https://i.pravatar.cc/150?img=9",
    bio: "Data-driven domain investing. AI & analytics focus.",
    memberSince: "2024-01-12",
    location: "Boston, MA",
    badges: ["risingStart"],
    stats: {
      totalDomains: 15,
      totalSales: 23,
      totalVolume: 67890,
      winRate: 78,
      avgFlipTime: 25,
      roi: 89
    },
    rating: 4.5,
    reviewCount: 34,
    followers: 456,
    following: 98,
    tier: "free"
  },
  {
    username: "healthTechPro",
    displayName: "David Kim",
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Health tech domains. Passionate about healthcare innovation.",
    memberSince: "2024-01-10",
    location: "Los Angeles, CA",
    badges: [],
    stats: {
      totalDomains: 12,
      totalSales: 18,
      totalVolume: 45600,
      winRate: 72,
      avgFlipTime: 30,
      roi: 67
    },
    rating: 4.4,
    reviewCount: 23,
    followers: 234,
    following: 45,
    tier: "free"
  },
  {
    username: "buyer123",
    displayName: "James Wilson",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Looking for great domains for my projects.",
    memberSince: "2024-01-14",
    location: "Chicago, IL",
    badges: [],
    stats: {
      totalDomains: 8,
      totalSales: 3,
      totalVolume: 12400,
      winRate: 50,
      avgFlipTime: 45,
      roi: 23
    },
    rating: 4.2,
    reviewCount: 8,
    followers: 89,
    following: 156,
    tier: "free"
  },
  {
    username: "trader456",
    displayName: "Lisa Chen",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "Active trader, love the thrill of the flip!",
    memberSince: "2024-01-11",
    location: "Miami, FL",
    badges: ["speedDemon"],
    stats: {
      totalDomains: 19,
      totalSales: 34,
      totalVolume: 89560,
      winRate: 81,
      avgFlipTime: 14,
      roi: 112
    },
    rating: 4.6,
    reviewCount: 45,
    followers: 567,
    following: 234,
    tier: "pro"
  },
  {
    username: "aiEnthusiast",
    displayName: "Robert Taylor",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "AI domains are the future. Collecting the best.",
    memberSince: "2024-01-06",
    location: "San Diego, CA",
    badges: [],
    stats: {
      totalDomains: 16,
      totalSales: 21,
      totalVolume: 78900,
      winRate: 75,
      avgFlipTime: 22,
      roi: 95
    },
    rating: 4.5,
    reviewCount: 29,
    followers: 345,
    following: 123,
    tier: "free"
  },
  {
    username: "techInvestor",
    displayName: "Maria Garcia",
    avatar: "https://i.pravatar.cc/150?img=6",
    bio: "Tech investor. Portfolio diversification through domains.",
    memberSince: "2024-01-09",
    location: "Denver, CO",
    badges: ["portfolioKing"],
    stats: {
      totalDomains: 52,
      totalSales: 45,
      totalVolume: 198760,
      winRate: 86,
      avgFlipTime: 28,
      roi: 145
    },
    rating: 4.7,
    reviewCount: 67,
    followers: 1234,
    following: 89,
    tier: "elite"
  },
  {
    username: "mlExpert",
    displayName: "Chris Anderson",
    avatar: "https://i.pravatar.cc/150?img=14",
    bio: "Machine learning & AI domain collector.",
    memberSince: "2024-01-07",
    location: "Portland, OR",
    badges: [],
    stats: {
      totalDomains: 11,
      totalSales: 15,
      totalVolume: 34200,
      winRate: 68,
      avgFlipTime: 35,
      roi: 54
    },
    rating: 4.3,
    reviewCount: 18,
    followers: 198,
    following: 76,
    tier: "free"
  },
];

export default mockUsers;
```

---

## Mock Transactions Data

### src/data/mockTransactions.js

Transaction history for activity feeds:

```javascript
export const mockTransactions = [
  {
    id: 1,
    type: "sale",
    domain: "AIRevolution.com",
    domainId: 2,
    price: 12000,
    buyer: "aiEnthusiast",
    seller: "domainKing",
    timestamp: "2024-01-14T10:15:00Z",
    profit: 10800,
    buyPrice: 1200
  },
  {
    id: 2,
    type: "sale",
    domain: "QuickStart.com",
    domainId: 20,
    price: 8500,
    buyer: "startupGuru",
    seller: "cryptoQueen",
    timestamp: "2024-01-14T08:30:00Z",
    profit: 3500,
    buyPrice: 5000
  },
  {
    id: 3,
    type: "trade",
    domain: "TechBlog.com",
    domainId: 21,
    domains: ["TechBlog.com", "DevNews.io"],
    tradedFor: ["StartupHub.com"],
    buyer: "techPro",
    seller: "domainKing",
    timestamp: "2024-01-13T15:45:00Z"
  },
  {
    id: 4,
    type: "sale",
    domain: "CryptoDaily.com",
    domainId: 22,
    price: 7200,
    buyer: "cryptoQueen",
    seller: "trader456",
    timestamp: "2024-01-13T12:20:00Z",
    profit: 2200,
    buyPrice: 5000
  },
  {
    id: 5,
    type: "purchase",
    domain: "DataFlow.io",
    domainId: 23,
    price: 4500,
    buyer: "dataScientist",
    seller: "domainKing",
    timestamp: "2024-01-12T16:00:00Z"
  },
  {
    id: 6,
    type: "sale",
    domain: "HealthPlus.com",
    domainId: 24,
    price: 9800,
    buyer: "healthTechPro",
    seller: "startupGuru",
    timestamp: "2024-01-12T11:30:00Z",
    profit: 4800,
    buyPrice: 5000
  },
  {
    id: 7,
    type: "sale",
    domain: "AppForge.com",
    domainId: 25,
    price: 6700,
    buyer: "techInvestor",
    seller: "techPro",
    timestamp: "2024-01-11T14:15:00Z",
    profit: 1700,
    buyPrice: 5000
  },
  {
    id: 8,
    type: "trade",
    domain: "SmartAI.io",
    domainId: 26,
    domains: ["SmartAI.io", "MLHub.com"],
    tradedFor: ["DataScience.com", "AITools.io"],
    buyer: "aiEnthusiast",
    seller: "dataScientist",
    timestamp: "2024-01-11T09:00:00Z"
  },
  {
    id: 9,
    type: "sale",
    domain: "GameZone.com",
    domainId: 27,
    price: 11200,
    buyer: "buyer123",
    seller: "domainKing",
    timestamp: "2024-01-10T13:45:00Z",
    profit: 6200,
    buyPrice: 5000
  },
  {
    id: 10,
    type: "sale",
    domain: "FinanceHub.com",
    domainId: 28,
    price: 8900,
    buyer: "techInvestor",
    seller: "cryptoQueen",
    timestamp: "2024-01-10T10:20:00Z",
    profit: 3900,
    buyPrice: 5000
  },
];

// Generate more transactions
for (let i = 11; i <= 50; i++) {
  const users = ["domainKing", "cryptoQueen", "startupGuru", "techPro", "dataScientist", "buyer123", "trader456", "aiEnthusiast", "techInvestor"];
  const types = ["sale", "purchase"];
  const type = types[Math.floor(Math.random() * types.length)];
  
  const price = Math.floor(Math.random() * 10000) + 2000;
  
  mockTransactions.push({
    id: i,
    type,
    domain: `Domain${i}.com`,
    domainId: i + 20,
    price,
    buyer: users[Math.floor(Math.random() * users.length)],
    seller: users[Math.floor(Math.random() * users.length)],
    timestamp: new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000).toISOString(),
    profit: type === "sale" ? Math.floor(Math.random() * 5000) + 500 : undefined,
    buyPrice: type === "sale" ? Math.floor(Math.random() * 5000) + 1000 : undefined,
  });
}

export default mockTransactions;
```

---

## Mock Comments Data

### src/data/mockComments.js

Comments with replies for domain discussions:

```javascript
export const mockComments = [
  {
    id: 1,
    domainId: 1,
    username: "startupGuru",
    avatar: "https://i.pravatar.cc/150?img=8",
    text: "Great domain for a SaaS company! Should flip fast.",
    timestamp: "2024-01-15T12:00:00Z",
    likes: 5,
    likedBy: ["domainKing", "cryptoQueen"],
    replies: [
      {
        id: 101,
        username: "domainKing",
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "Thanks! Open to reasonable offers.",
        timestamp: "2024-01-15T12:15:00Z",
        likes: 2,
        likedBy: []
      }
    ]
  },
  {
    id: 2,
    domainId: 1,
    username: "techPro",
    avatar: "https://i.pravatar.cc/150?img=15",
    text: "Seems a bit high for .io, but decent brand.",
    timestamp: "2024-01-15T11:30:00Z",
    likes: 3,
    likedBy: ["buyer123"],
    replies: []
  },
  {
    id: 3,
    domainId: 2,
    username: "aiEnthusiast",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "This is exactly what I've been looking for! AI domains are 🔥",
    timestamp: "2024-01-14T09:30:00Z",
    likes: 8,
    likedBy: ["domainKing", "cryptoQueen", "techPro"],
    replies: [
      {
        id: 102,
        username: "dataScientist",
        avatar: "https://i.pravatar.cc/150?img=9",
        text: "Agreed! AI keyword is super valuable right now.",
        timestamp: "2024-01-14T10:00:00Z",
        likes: 4,
        likedBy: []
      }
    ]
  },
  {
    id: 4,
    domainId: 2,
    username: "cryptoQueen",
    avatar: "https://i.pravatar.cc/150?img=5",
    text: "Premium .com with trending keyword. Worth every penny.",
    timestamp: "2024-01-13T16:45:00Z",
    likes: 12,
    likedBy: ["domainKing", "startupGuru", "techInvestor"],
    replies: []
  },
  {
    id: 5,
    domainId: 3,
    username: "buyer123",
    avatar: "https://i.pravatar.cc/150?img=3",
    text: "Would you accept a trade for TechNews.io?",
    timestamp: "2024-01-14T14:20:00Z",
    likes: 1,
    likedBy: [],
    replies: [
      {
        id: 103,
        username: "cryptoQueen",
        avatar: "https://i.pravatar.cc/150?img=5",
        text: "Possibly! Send me a formal trade offer.",
        timestamp: "2024-01-14T15:00:00Z",
        likes: 2,
        likedBy: []
      }
    ]
  },
  {
    id: 6,
    domainId: 4,
    username: "techInvestor",
    avatar: "https://i.pravatar.cc/150?img=6",
    text: "Love the .ai TLD. This will appreciate nicely.",
    timestamp: "2024-01-13T18:00:00Z",
    likes: 6,
    likedBy: ["dataScientist", "aiEnthusiast"],
    replies: []
  },
  {
    id: 7,
    domainId: 5,
    username: "healthTechPro",
    avatar: "https://i.pravatar.cc/150?img=13",
    text: "Perfect for a fitness app startup!",
    timestamp: "2024-01-12T10:15:00Z",
    likes: 4,
    likedBy: ["startupGuru"],
    replies: []
  },
  {
    id: 8,
    domainId: 6,
    username: "techPro",
    avatar: "https://i.pravatar.cc/150?img=15",
    text: "DevTools.com is a goldmine. Wish I had the budget!",
    timestamp: "2024-01-11T14:00:00Z",
    likes: 15,
    likedBy: ["domainKing", "startupGuru", "cryptoQueen"],
    replies: [
      {
        id: 104,
        username: "domainKing",
        avatar: "https://i.pravatar.cc/150?img=12",
        text: "It's a premium domain for sure. Feel free to make an offer!",
        timestamp: "2024-01-11T15:30:00Z",
        likes: 3,
        likedBy: []
      }
    ]
  },
];

export default mockComments;
```

---

## Mock Achievements Data

### src/data/mockAchievements.js

Achievement badges for gamification:

```javascript
export const mockAchievements = [
  {
    id: "firstPurchase",
    name: "First Steps",
    description: "Made your first domain purchase",
    icon: "🎉",
    rarity: "common",
    category: "trading",
    condition: "Purchase 1 domain",
    points: 10
  },
  {
    id: "firstSale",
    name: "First Sale",
    description: "Sold your first domain",
    icon: "💰",
    rarity: "common",
    category: "trading",
    condition: "Sell 1 domain",
    points: 10
  },
  {
    id: "speedDemon",
    name: "Speed Demon",
    description: "Sold a domain within 24 hours of listing",
    icon: "⚡",
    rarity: "rare",
    category: "trading",
    condition: "Sell domain within 24 hours",
    points: 50
  },
  {
    id: "portfolioKing",
    name: "Portfolio King",
    description: "Own 50+ domains simultaneously",
    icon: "👑",
    rarity: "epic",
    category: "portfolio",
    condition: "Own 50 domains",
    points: 100
  },
  {
    id: "tenXMaster",
    name: "10x Master",
    description: "Made a 10x return on a domain investment",
    icon: "📈",
    rarity: "epic",
    category: "trading",
    condition: "Achieve 10x ROI on single domain",
    points: 150
  },
  {
    id: "streakMaster",
    name: "Streak Master",
    description: "Traded every day for 30 consecutive days",
    icon: "🔥",
    rarity: "rare",
    category: "engagement",
    condition: "30 day trading streak",
    points: 75
  },
  {
    id: "top100",
    name: "Top 100",
    description: "Ranked in the top 100 traders",
    icon: "🏆",
    rarity: "rare",
    category: "leaderboard",
    condition: "Reach top 100 in any leaderboard",
    points: 50
  },
  {
    id: "highRoller",
    name: "High Roller",
    description: "Completed a single sale over $10,000",
    icon: "💎",
    rarity: "epic",
    category: "trading",
    condition: "Single sale over $10K",
    points: 100
  },
  {
    id: "influencer",
    name: "Influencer",
    description: "Gained 1,000+ followers",
    icon: "⭐",
    rarity: "rare",
    category: "social",
    condition: "Reach 1,000 followers",
    points: 75
  },
  {
    id: "fastSeller",
    name: "Fast Seller",
    description: "Average flip time under 14 days",
    icon: "🚀",
    rarity: "rare",
    category: "trading",
    condition: "Avg flip time < 14 days",
    points: 60
  },
  {
    id: "negotiator",
    name: "Master Negotiator",
    description: "Successfully completed 10 domain trades",
    icon: "🤝",
    rarity: "rare",
    category: "trading",
    condition: "Complete 10 domain swaps",
    points: 50
  },
  {
    id: "earlyBird",
    name: "Early Bird",
    description: "Purchased a domain within 1 hour of listing",
    icon: "🐦",
    rarity: "common",
    category: "trading",
    condition: "Buy domain within 1 hour of listing",
    points: 25
  },
  {
    id: "collector",
    name: "Collector",
    description: "Own domains from 5 different TLDs",
    icon: "📚",
    rarity: "common",
    category: "portfolio",
    condition: "Own domains from 5 TLDs",
    points: 30
  },
  {
    id: "socialButterfly",
    name: "Social Butterfly",
    description: "Posted 100 comments",
    icon: "🦋",
    rarity: "common",
    category: "social",
    condition: "Post 100 comments",
    points: 25
  },
  {
    id: "helpful",
    name: "Helpful",
    description: "Received 50 likes on your comments",
    icon: "💙",
    rarity: "common",
    category: "social",
    condition: "Get 50 comment likes",
    points: 20
  },
  {
    id: "legendary",
    name: "Legendary Trader",
    description: "Reached #1 on any leaderboard",
    icon: "🌟",
    rarity: "legendary",
    category: "leaderboard",
    condition: "Rank #1 overall",
    points: 500
  },
  {
    id: "diamondHands",
    name: "Diamond Hands",
    description: "Held a domain for over 1 year before selling",
    icon: "💎",
    rarity: "rare",
    category: "portfolio",
    condition: "Hold domain 1+ year",
    points: 75
  },
  {
    id: "sniper",
    name: "Sniper",
    description: "Won an auction in the final second",
    icon: "🎯",
    rarity: "rare",
    category: "trading",
    condition: "Win auction in last second",
    points: 50
  },
  {
    id: "diversified",
    name: "Diversified",
    description: "Own domains in 5 different categories",
    icon: "🌈",
    rarity: "common",
    category: "portfolio",
    condition: "Own domains from 5 categories",
    points: 30
  },
  {
    id: "profitMaster",
    name: "Profit Master",
    description: "Made $100K+ total profit",
    icon: "💰",
    rarity: "epic",
    category: "trading",
    condition: "Total profit over $100K",
    points: 200
  },
  {
    id: "cryptoExpert",
    name: "Crypto Expert",
    description: "Own 10+ crypto-related domains",
    icon: "₿",
    rarity: "rare",
    category: "portfolio",
    condition: "Own 10+ crypto domains",
    points: 60
  },
  {
    id: "topTrader",
    name: "Top Trader",
    description: "Reached top 10 on the leaderboard",
    icon: "🥇",
    rarity: "epic",
    category: "leaderboard",
    condition: "Reach top 10",
    points: 150
  },
  {
    id: "eliteMember",
    name: "Elite Member",
    description: "Subscribed to Elite tier",
    icon: "👑",
    rarity: "rare",
    category: "membership",
    condition: "Subscribe to Elite",
    points: 100
  },
  {
    id: "risingStart",
    name: "Rising Star",
    description: "Moved up 50+ ranks in one week",
    icon: "🌠",
    rarity: "rare",
    category: "leaderboard",
    condition: "Climb 50 ranks in 7 days",
    points: 75
  },
  {
    id: "helper",
    name: "Community Helper",
    description: "Helped 20+ users with advice",
    icon: "🤗",
    rarity: "common",
    category: "social",
    condition: "Give helpful advice 20 times",
    points: 40
  },
];

export default mockAchievements;
```

---

## Using Mock Data

### Importing in Components

```javascript
// Import individual data files
import mockDomains from '../data/mockDomains';
import mockUsers from '../data/mockUsers';
import mockTransactions from '../data/mockTransactions';
import mockComments from '../data/mockComments';
import mockAchievements from '../data/mockAchievements';

// Use in components
const MyComponent = () => {
  const domains = mockDomains;
  const trendingDomains = domains.filter(d => d.trending);
  
  return (
    <div>
      {trendingDomains.map(domain => (
        <div key={domain.id}>{domain.name}</div>
      ))}
    </div>
  );
};
```

### Accessing via Context

The AppContext already imports and uses this data:

```javascript
import { useApp } from '../context/AppContext';

const MyComponent = () => {
  const { domains, users, getDomainById } = useApp();
  
  const domain = getDomainById(1);
  
  return <div>{domain.name}</div>;
};
```

---

## Data Statistics

Your mock data includes:

- **34+ Domains** - Varied prices, categories, and TLDs
- **11 Users** - Different experience levels and tiers
- **50+ Transactions** - Sales, purchases, and trades
- **8 Comment Threads** - With replies
- **25 Achievements** - Across all categories and rarities

This provides enough data to showcase all features without overwhelming the demo.

---

## Checklist

Before proceeding to Part 5, ensure you have:

- [ ] Created `src/data/mockDomains.js` with 30+ domains
- [ ] Created `src/data/mockUsers.js` with 10+ users
- [ ] Created `src/data/mockTransactions.js` with 50+ transactions
- [ ] Created `src/data/mockComments.js` with comments
- [ ] Created `src/data/mockAchievements.js` with 20+ badges
- [ ] All data files export correctly
- [ ] No syntax errors in data files
- [ ] Can import data in components without errors

---

## What's Next?

With Part 4 complete, you now have:
- ✅ Complete mock domain database
- ✅ User profiles with full stats
- ✅ Transaction history
- ✅ Social interactions (comments)
- ✅ Achievement system

**Next: PART 5 - Page Specifications**

This will include detailed specifications for building all 8 pages:
- HomePage, FeaturesPage, PricingPage, MarketplacePage
- DomainDetailPage, ProfilePage, LeaderboardPage, DemoPage

---

**✅ Part 4 Complete!** Your data layer is ready. Proceed to Part 5 when ready.
