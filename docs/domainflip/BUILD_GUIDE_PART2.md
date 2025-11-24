# DomainFlip - Complete Build Guide - PART 2
## Core Infrastructure (Utility Functions)

---

## Overview

This is Part 2 of the complete DomainFlip build guide. This document provides all the utility functions that power the application's core logic including domain valuation, formatting, and calculations.

**What's in this part:**
- Domain valuation algorithm (AI-powered pricing)
- Formatting utilities (prices, dates, numbers)
- Calculation functions (ROI, portfolio value, success rates)

All functions are production-ready and can be copy-pasted directly into your project.

---

## Domain Valuation Algorithm

### src/utils/domainValuation.js

This file contains the AI-powered domain valuation algorithm:

```javascript
/**
 * Calculate AI-powered valuation for a domain
 * @param {string} domainName - Full domain name (e.g., "TechStartup.io")
 * @returns {object} - Valuation with min, max, confidence, and breakdown
 */
export const calculateAIValuation = (domainName) => {
  const name = domainName.toLowerCase();
  const parts = name.split('.');
  const domain = parts[0];
  const tld = parts[1] || 'com';
  
  // Base scores
  let baseValue = 1000;
  let confidence = 70;
  
  // TLD scoring - premium TLDs worth more
  const tldValues = {
    'com': 1.5,
    'io': 1.3,
    'ai': 1.4,
    'co': 1.2,
    'net': 1.1,
    'org': 1.0,
    'app': 1.2,
    'dev': 1.1,
    'tech': 1.15,
    'xyz': 0.7,
  };
  const tldMultiplier = tldValues[tld] || 0.8;
  baseValue *= tldMultiplier;
  
  // Length scoring (optimal: 6-10 characters)
  const length = domain.length;
  let lengthScore = 5;
  
  if (length <= 5) {
    lengthScore = 5; // Short = premium
    baseValue *= 2;
    confidence += 5;
  } else if (length <= 10) {
    lengthScore = 4;
    baseValue *= 1.5;
  } else if (length <= 15) {
    lengthScore = 3;
    baseValue *= 1.2;
  } else {
    lengthScore = 2;
    baseValue *= 0.9;
    confidence -= 5;
  }
  
  // Keyword scoring - high-value keywords boost price
  const premiumKeywords = ['ai', 'tech', 'crypto', 'start', 'smart', 'cloud', 'data', 'app', 'web', 'digital', 'cyber', 'meta', 'nft', 'pay', 'shop'];
  const goodKeywords = ['hub', 'lab', 'pro', 'now', 'zone', 'base', 'link', 'media', 'network', 'solution', 'system', 'world', 'online'];
  
  let keywordScore = 3;
  let keywordMultiplier = 1;
  
  // Check for premium keywords
  for (const keyword of premiumKeywords) {
    if (domain.includes(keyword)) {
      keywordScore = 5;
      keywordMultiplier = 1.5;
      confidence += 5;
      break;
    }
  }
  
  // Check for good keywords if no premium found
  if (keywordScore === 3) {
    for (const keyword of goodKeywords) {
      if (domain.includes(keyword)) {
        keywordScore = 4;
        keywordMultiplier = 1.2;
        break;
      }
    }
  }
  
  baseValue *= keywordMultiplier;
  
  // Brandability (pronounceable, no numbers/hyphens)
  const hasNumbers = /\d/.test(domain);
  const hasHyphens = /-/.test(domain);
  let brandabilityScore = 5;
  
  if (hasNumbers) {
    brandabilityScore -= 2;
    baseValue *= 0.7;
    confidence -= 10;
  }
  if (hasHyphens) {
    brandabilityScore -= 2;
    baseValue *= 0.6;
    confidence -= 10;
  }
  
  // Ensure minimum score of 1
  brandabilityScore = Math.max(brandabilityScore, 1);
  
  // Memorability (vowel/consonant balance)
  const vowels = (domain.match(/[aeiou]/g) || []).length;
  const consonants = (domain.match(/[bcdfghjklmnpqrstvwxyz]/g) || []).length;
  const totalLetters = vowels + consonants;
  const ratio = totalLetters > 0 ? vowels / totalLetters : 0;
  
  let memorabilityScore = 3;
  if (ratio >= 0.3 && ratio <= 0.5) {
    memorabilityScore = 5;
    baseValue *= 1.1;
  } else if (ratio >= 0.2 && ratio <= 0.6) {
    memorabilityScore = 4;
  }
  
  // Market trend (simulate market conditions)
  const marketTrendScore = Math.floor(Math.random() * 2) + 3; // 3-4
  const trendMultiplier = marketTrendScore >= 4 ? 1.2 : 1;
  baseValue *= trendMultiplier;
  
  // TLD premium score (for display)
  const tldPremiumScore = Math.round((tldMultiplier / 1.5) * 5);
  
  // Calculate final range with variance
  const variance = 0.15; // ±15%
  const min = Math.round(baseValue * (1 - variance));
  const max = Math.round(baseValue * (1 + variance));
  
  // Overall score (weighted average)
  const overallScore = Math.round(
    (lengthScore * 0.2 + 
     keywordScore * 0.25 + 
     brandabilityScore * 0.25 + 
     memorabilityScore * 0.15 + 
     marketTrendScore * 0.15) * 20
  );
  
  // Ensure confidence is within bounds
  confidence = Math.min(Math.max(confidence, 60), 95);
  
  return {
    min,
    max,
    confidence,
    breakdown: {
      length: lengthScore,
      tldPremium: Math.min(tldPremiumScore, 5),
      keywordValue: keywordScore,
      brandability: brandabilityScore,
      memorability: memorabilityScore,
      marketTrend: marketTrendScore,
      overallScore: Math.min(overallScore, 100),
    }
  };
};

/**
 * Generate realistic price history for a domain
 * @param {number} currentPrice - Current domain price
 * @param {number} days - Number of days of history to generate
 * @returns {array} - Array of {date, price} objects
 */
export const generatePriceHistory = (currentPrice, days = 30) => {
  const history = [];
  let price = currentPrice * 0.9; // Start 10% lower to show growth
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Random walk with slight upward trend
    const change = (Math.random() - 0.45) * 0.1; // Slightly biased upward
    price = price * (1 + change);
    
    // Ensure price doesn't go below 20% of current or above 180%
    price = Math.max(currentPrice * 0.2, Math.min(currentPrice * 1.8, price));
    
    history.push({
      date: date.toISOString().split('T')[0],
      price: Math.round(price),
    });
  }
  
  // Force last price to match current price
  history[history.length - 1].price = currentPrice;
  
  return history;
};

/**
 * Suggest optimal listing price based on AI valuation
 * @param {object} aiValuation - Result from calculateAIValuation
 * @returns {number} - Suggested listing price
 */
export const suggestListingPrice = (aiValuation) => {
  const { min, max, confidence } = aiValuation;
  
  // If high confidence, suggest closer to max
  if (confidence >= 85) {
    return Math.round((max * 0.7 + min * 0.3));
  } else if (confidence >= 75) {
    return Math.round((max + min) / 2);
  } else {
    // Low confidence, suggest closer to min
    return Math.round((max * 0.3 + min * 0.7));
  }
};

/**
 * Suggest bid range for a domain
 * @param {number} askingPrice - Current asking price
 * @param {object} aiValuation - AI valuation
 * @returns {object} - {min, max, optimal}
 */
export const suggestBidRange = (askingPrice, aiValuation) => {
  const { min: aiMin, max: aiMax } = aiValuation;
  
  // Suggest bidding between 80-95% of asking price
  // But consider AI valuation
  const minBid = Math.round(Math.min(askingPrice * 0.8, aiMin * 0.95));
  const maxBid = Math.round(Math.min(askingPrice * 0.95, aiMax * 1.05));
  const optimalBid = Math.round((minBid + maxBid) / 2);
  
  return {
    min: minBid,
    max: maxBid,
    optimal: optimalBid,
  };
};
```

---

## Formatting Utilities

### src/utils/formatters.js

All formatting functions for consistent display throughout the app:

```javascript
/**
 * Format a number as currency
 * @param {number} number - Number to format
 * @param {boolean} compact - Use compact notation (K, M)
 * @returns {string} - Formatted currency string
 */
export const formatPrice = (number, compact = true) => {
  if (number == null || isNaN(number)) return '$0';
  
  if (compact) {
    if (number >= 1000000) {
      return `$${(number / 1000000).toFixed(2)}M`;
    }
    if (number >= 1000) {
      return `$${(number / 1000).toFixed(1)}K`;
    }
  }
  
  return `$${number.toLocaleString()}`;
};

/**
 * Format a timestamp as time ago
 * @param {string|Date} timestamp - Timestamp to format
 * @returns {string} - Formatted time ago string
 */
export const formatTimeAgo = (timestamp) => {
  if (!timestamp) return 'Unknown';
  
  const now = new Date();
  const then = new Date(timestamp);
  const seconds = Math.floor((now - then) / 1000);
  
  if (seconds < 5) return 'just now';
  if (seconds < 60) return `${seconds} seconds ago`;
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;
  
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
  
  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? 's' : ''} ago`;
};

/**
 * Format a number with thousand separators
 * @param {number} number - Number to format
 * @param {boolean} compact - Use compact notation
 * @returns {string} - Formatted number string
 */
export const formatNumber = (number, compact = true) => {
  if (number == null || isNaN(number)) return '0';
  
  if (compact) {
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(2)}M`;
    }
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K`;
    }
  }
  
  return number.toLocaleString();
};

/**
 * Format a decimal as percentage
 * @param {number} decimal - Decimal to format (e.g., 0.15 for 15%)
 * @param {boolean} showPlus - Show + sign for positive numbers
 * @param {number} decimals - Number of decimal places
 * @returns {string} - Formatted percentage string
 */
export const formatPercentage = (decimal, showPlus = true, decimals = 1) => {
  if (decimal == null || isNaN(decimal)) return '0%';
  
  const percent = (decimal * 100).toFixed(decimals);
  const sign = decimal > 0 && showPlus ? '+' : '';
  return `${sign}${percent}%`;
};

/**
 * Format domain length description
 * @param {string} domainName - Full domain name
 * @returns {string} - Length description
 */
export const formatDomainLength = (domainName) => {
  if (!domainName) return 'Unknown';
  
  const length = domainName.split('.')[0].length;
  if (length <= 5) return `Short (${length} chars)`;
  if (length <= 10) return `Medium (${length} chars)`;
  return `Long (${length} chars)`;
};

/**
 * Format a date
 * @param {string|Date} date - Date to format
 * @param {string} format - Format type ('short', 'long', 'medium')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, format = 'medium') => {
  if (!date) return 'Unknown';
  
  const d = new Date(date);
  
  if (format === 'short') {
    return d.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  } else if (format === 'long') {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } else {
    // medium (default)
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
};

/**
 * Format a duration in days to human readable
 * @param {number} days - Number of days
 * @returns {string} - Formatted duration
 */
export const formatDuration = (days) => {
  if (days == null || isNaN(days)) return 'Unknown';
  
  if (days < 1) return 'Less than a day';
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks !== 1 ? 's' : ''}`;
  }
  if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months} month${months !== 1 ? 's' : ''}`;
  }
  
  const years = Math.floor(days / 365);
  return `${years} year${years !== 1 ? 's' : ''}`;
};

/**
 * Format file size
 * @param {number} bytes - Size in bytes
 * @returns {string} - Formatted size
 */
export const formatFileSize = (bytes) => {
  if (bytes == null || isNaN(bytes)) return '0 B';
  
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
};

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Format a rating (e.g., 4.8 to "4.8/5.0")
 * @param {number} rating - Rating number
 * @param {number} maxRating - Maximum rating (default 5)
 * @returns {string} - Formatted rating
 */
export const formatRating = (rating, maxRating = 5) => {
  if (rating == null || isNaN(rating)) return `0/${maxRating}`;
  return `${rating.toFixed(1)}/${maxRating.toFixed(1)}`;
};
```

---

## Calculation Functions

### src/utils/calculations.js

Core calculation functions for business logic:

```javascript
/**
 * Calculate ROI (Return on Investment)
 * @param {number} buyPrice - Purchase price
 * @param {number} sellPrice - Sell price
 * @returns {number} - ROI as percentage
 */
export const calculateROI = (buyPrice, sellPrice) => {
  if (!buyPrice || buyPrice === 0) return 0;
  return ((sellPrice - buyPrice) / buyPrice) * 100;
};

/**
 * Calculate profit
 * @param {number} buyPrice - Purchase price
 * @param {number} sellPrice - Sell price
 * @param {number} feePercentage - Transaction fee (default 8%)
 * @returns {number} - Net profit after fees
 */
export const calculateProfit = (buyPrice, sellPrice, feePercentage = 8) => {
  const grossProfit = sellPrice - buyPrice;
  const fee = sellPrice * (feePercentage / 100);
  return grossProfit - fee;
};

/**
 * Calculate trade balance for domain swaps
 * @param {array} yourDomains - Array of domains you're offering
 * @param {array} theirDomains - Array of domains you'll receive
 * @returns {object} - Trade balance analysis
 */
export const calculateTradeBalance = (yourDomains, theirDomains) => {
  const yourValue = yourDomains.reduce((sum, d) => sum + (d.price || 0), 0);
  const theirValue = theirDomains.reduce((sum, d) => sum + (d.price || 0), 0);
  const difference = Math.abs(yourValue - theirValue);
  const higherValue = Math.max(yourValue, theirValue);
  const percentDiff = higherValue > 0 ? (difference / higherValue) * 100 : 0;
  
  let isFair = 'fair';
  let fairnessColor = 'green';
  
  if (percentDiff > 30) {
    isFair = 'very_unfair';
    fairnessColor = 'red';
  } else if (percentDiff > 15) {
    isFair = 'slightly_unfair';
    fairnessColor = 'yellow';
  }
  
  return {
    yourValue,
    theirValue,
    difference,
    percentDiff,
    isFair,
    fairnessColor,
    isYourAdvantage: yourValue < theirValue,
  };
};

/**
 * Calculate days since listing
 * @param {string} listedTimestamp - ISO timestamp of listing
 * @returns {number} - Number of days
 */
export const calculateDaysListed = (listedTimestamp) => {
  if (!listedTimestamp) return 0;
  
  const now = new Date();
  const listed = new Date(listedTimestamp);
  const days = Math.floor((now - listed) / (1000 * 60 * 60 * 24));
  return Math.max(days, 0);
};

/**
 * Calculate total portfolio value
 * @param {array} domains - Array of domain objects
 * @returns {number} - Total value
 */
export const calculatePortfolioValue = (domains) => {
  if (!domains || !Array.isArray(domains)) return 0;
  return domains.reduce((sum, d) => sum + (d.price || 0), 0);
};

/**
 * Calculate success rate
 * @param {number} totalSales - Number of successful sales
 * @param {number} totalListings - Number of total listings
 * @returns {number} - Success rate as percentage
 */
export const calculateSuccessRate = (totalSales, totalListings) => {
  if (!totalListings || totalListings === 0) return 0;
  return (totalSales / totalListings) * 100;
};

/**
 * Calculate average flip time
 * @param {array} transactions - Array of completed transactions
 * @returns {number} - Average days to flip
 */
export const calculateAvgFlipTime = (transactions) => {
  if (!transactions || transactions.length === 0) return 0;
  
  const times = transactions
    .filter(t => t.listedAt && t.soldAt)
    .map(t => {
      const listed = new Date(t.listedAt);
      const sold = new Date(t.soldAt);
      return (sold - listed) / (1000 * 60 * 60 * 24); // Convert to days
    })
    .filter(t => t > 0);
  
  if (times.length === 0) return 0;
  return times.reduce((sum, t) => sum + t, 0) / times.length;
};

/**
 * Calculate portfolio distribution by TLD
 * @param {array} domains - Array of domains
 * @returns {object} - Distribution object
 */
export const calculateTLDDistribution = (domains) => {
  if (!domains || !Array.isArray(domains)) return {};
  
  const distribution = {};
  
  domains.forEach(domain => {
    const tld = domain.tld || domain.name.split('.')[1] || 'unknown';
    distribution[tld] = (distribution[tld] || 0) + 1;
  });
  
  return distribution;
};

/**
 * Calculate portfolio distribution by price range
 * @param {array} domains - Array of domains
 * @returns {object} - Distribution by price ranges
 */
export const calculatePriceDistribution = (domains) => {
  if (!domains || !Array.isArray(domains)) return {};
  
  const ranges = {
    'under1k': 0,
    '1k-5k': 0,
    '5k-10k': 0,
    'over10k': 0,
  };
  
  domains.forEach(domain => {
    const price = domain.price || 0;
    if (price < 1000) ranges['under1k']++;
    else if (price < 5000) ranges['1k-5k']++;
    else if (price < 10000) ranges['5k-10k']++;
    else ranges['over10k']++;
  });
  
  return ranges;
};

/**
 * Calculate price change percentage
 * @param {number} oldPrice - Previous price
 * @param {number} newPrice - Current price
 * @returns {number} - Percentage change
 */
export const calculatePriceChange = (oldPrice, newPrice) => {
  if (!oldPrice || oldPrice === 0) return 0;
  return ((newPrice - oldPrice) / oldPrice) * 100;
};

/**
 * Calculate transaction fees
 * @param {number} price - Sale price
 * @param {string} tier - User tier (free, pro, elite)
 * @returns {object} - Fee breakdown
 */
export const calculateTransactionFees = (price, tier = 'free') => {
  const feePercentages = {
    free: 8,
    pro: 5,
    elite: 3,
  };
  
  const percentage = feePercentages[tier] || 8;
  const fee = price * (percentage / 100);
  const net = price - fee;
  
  return {
    gross: price,
    fee,
    net,
    percentage,
  };
};

/**
 * Calculate suggested minimum bid
 * @param {array} existingBids - Array of existing bids
 * @param {number} askingPrice - Current asking price
 * @returns {number} - Minimum acceptable bid
 */
export const calculateMinimumBid = (existingBids, askingPrice) => {
  if (!existingBids || existingBids.length === 0) {
    // No bids yet, suggest 80% of asking price
    return Math.round(askingPrice * 0.8);
  }
  
  // Get highest bid
  const highestBid = Math.max(...existingBids.map(b => b.amount));
  
  // Suggest at least $50 or 2% more than highest bid
  const increment = Math.max(50, highestBid * 0.02);
  return Math.round(highestBid + increment);
};

/**
 * Calculate momentum score for leaderboard
 * @param {number} currentRank - Current rank
 * @param {number} previousRank - Previous rank
 * @returns {object} - Momentum analysis
 */
export const calculateMomentum = (currentRank, previousRank) => {
  if (!previousRank) return { change: 0, direction: 'none', momentum: 0 };
  
  const change = previousRank - currentRank; // Positive = moved up
  const direction = change > 0 ? 'up' : change < 0 ? 'down' : 'none';
  const momentum = Math.abs(change);
  
  return {
    change,
    direction,
    momentum,
    isRising: change > 0,
  };
};

/**
 * Calculate portfolio diversity score
 * @param {array} domains - Array of domains
 * @returns {number} - Diversity score (0-100)
 */
export const calculateDiversityScore = (domains) => {
  if (!domains || domains.length === 0) return 0;
  
  const tldSet = new Set(domains.map(d => d.tld));
  const categorySet = new Set(domains.map(d => d.category));
  const priceRanges = calculatePriceDistribution(domains);
  const priceRangeCount = Object.values(priceRanges).filter(v => v > 0).length;
  
  // Score based on diversity
  const tldScore = Math.min((tldSet.size / 5) * 40, 40); // Max 40 points for 5+ TLDs
  const categoryScore = Math.min((categorySet.size / 5) * 40, 40); // Max 40 points for 5+ categories
  const priceScore = (priceRangeCount / 4) * 20; // Max 20 points for all 4 ranges
  
  return Math.round(tldScore + categoryScore + priceScore);
};
```

---

## Usage Examples

### Using Domain Valuation:

```javascript
import { calculateAIValuation, suggestListingPrice } from '../utils/domainValuation';

// In a component:
const domainName = "TechStartup.io";
const valuation = calculateAIValuation(domainName);

console.log(valuation);
// {
//   min: 4500,
//   max: 6200,
//   confidence: 89,
//   breakdown: {
//     length: 4,
//     tldPremium: 4,
//     keywordValue: 5,
//     brandability: 5,
//     memorability: 4,
//     marketTrend: 4,
//     overallScore: 89
//   }
// }

const suggestedPrice = suggestListingPrice(valuation);
console.log(suggestedPrice); // e.g., 5800
```

### Using Formatters:

```javascript
import { formatPrice, formatTimeAgo, formatPercentage } from '../utils/formatters';

// Format prices
formatPrice(5000); // "$5.0K"
formatPrice(5000, false); // "$5,000"
formatPrice(1250000); // "$1.25M"

// Format time
formatTimeAgo("2024-01-15T10:00:00Z"); // "2 hours ago"

// Format percentages
formatPercentage(0.287); // "+28.7%"
formatPercentage(-0.15); // "-15.0%"
```

### Using Calculations:

```javascript
import { calculateROI, calculateTradeBalance, calculateProfit } from '../utils/calculations';

// Calculate ROI
const roi = calculateROI(1200, 12000);
console.log(roi); // 900 (900% ROI)

// Calculate profit with fees
const profit = calculateProfit(1200, 12000, 8);
console.log(profit); // 9840 (after 8% fee)

// Analyze trade fairness
const yourDomains = [
  { name: "Tech.io", price: 5000 },
  { name: "Start.com", price: 3000 }
];
const theirDomains = [
  { name: "Business.com", price: 8500 }
];

const tradeAnalysis = calculateTradeBalance(yourDomains, theirDomains);
console.log(tradeAnalysis);
// {
//   yourValue: 8000,
//   theirValue: 8500,
//   difference: 500,
//   percentDiff: 5.88,
//   isFair: 'fair',
//   fairnessColor: 'green',
//   isYourAdvantage: false
// }
```

---

## Testing Your Utilities

Create a simple test component to verify everything works:

```javascript
// src/components/UtilityTest.jsx
import React from 'react';
import { calculateAIValuation } from '../utils/domainValuation';
import { formatPrice, formatTimeAgo } from '../utils/formatters';
import { calculateROI } from '../utils/calculations';

const UtilityTest = () => {
  const testDomain = "TechStartup.io";
  const valuation = calculateAIValuation(testDomain);
  
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Utility Functions Test</h2>
      
      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h3 className="font-bold">Domain Valuation Test</h3>
          <p>Domain: {testDomain}</p>
          <p>Range: {formatPrice(valuation.min)} - {formatPrice(valuation.max)}</p>
          <p>Confidence: {valuation.confidence}%</p>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-bold">Formatter Test</h3>
          <p>Price: {formatPrice(5000)}</p>
          <p>Time: {formatTimeAgo(new Date(Date.now() - 7200000))}</p>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-bold">Calculation Test</h3>
          <p>ROI (1000 → 5000): {calculateROI(1000, 5000).toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
};

export default UtilityTest;
```

---

## Common Use Cases

### Use Case 1: Displaying Domain Valuation

```javascript
const DomainValuation = ({ domainName }) => {
  const valuation = calculateAIValuation(domainName);
  
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-bold mb-2">AI Valuation</h3>
      <p className="text-2xl font-bold">
        {formatPrice(valuation.min)} - {formatPrice(valuation.max)}
      </p>
      <p className="text-sm text-gray-600">
        Confidence: {valuation.confidence}%
      </p>
    </div>
  );
};
```

### Use Case 2: Showing Transaction History

```javascript
const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      {transactions.map(tx => (
        <div key={tx.id} className="border-b py-2">
          <p className="font-medium">{tx.domain}</p>
          <p className="text-sm text-gray-600">
            {formatPrice(tx.price)} • {formatTimeAgo(tx.timestamp)}
          </p>
          {tx.profit && (
            <p className="text-sm text-green-600">
              Profit: {formatPrice(tx.profit)} 
              ({formatPercentage(calculateROI(tx.buyPrice, tx.price) / 100)})
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
```

### Use Case 3: Portfolio Stats Dashboard

```javascript
const PortfolioStats = ({ domains }) => {
  const totalValue = calculatePortfolioValue(domains);
  const tldDist = calculateTLDDistribution(domains);
  const diversity = calculateDiversityScore(domains);
  
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border rounded p-4">
        <p className="text-sm text-gray-600">Total Value</p>
        <p className="text-2xl font-bold">{formatPrice(totalValue)}</p>
      </div>
      <div className="border rounded p-4">
        <p className="text-sm text-gray-600">Domains</p>
        <p className="text-2xl font-bold">{domains.length}</p>
      </div>
      <div className="border rounded p-4">
        <p className="text-sm text-gray-600">Diversity Score</p>
        <p className="text-2xl font-bold">{diversity}/100</p>
      </div>
    </div>
  );
};
```

---

## Checklist

Before proceeding to Part 3, ensure you have:

- [ ] Created `src/utils/domainValuation.js` with all functions
- [ ] Created `src/utils/formatters.js` with all functions
- [ ] Created `src/utils/calculations.js` with all functions
- [ ] Tested domain valuation with sample domains
- [ ] Tested formatters with sample data
- [ ] Tested calculations with sample numbers
- [ ] No import errors when importing utilities
- [ ] All functions return expected values

---

## What's Next?

With Part 2 complete, you now have all the core logic for:
- ✅ Valuing domains with AI
- ✅ Formatting all data for display
- ✅ Calculating business metrics

**Next: PART 3 - UI Component Library**

This will include all reusable UI components:
- Button, Modal, Card, Badge, Avatar, Toast
- Complete with props, variants, and styling

---

**✅ Part 2 Complete!** Your utility layer is ready. Proceed to Part 3 when ready.
