# DomainFlip - Complete Build Guide - PART 6
## Component Specifications

---

## Overview

This is Part 6 - detailed specifications for feature components that are used within pages. These are the smaller, reusable components that provide specific functionality across the application.

Reference: TECHNICAL_GUIDE_V0.md

---

## Component Categories

1. **Trading Components** - Purchase, bidding, trading modals
2. **Social Components** - Comments, activity feeds, follow functionality
3. **Analytics Components** - Charts, graphs, calculators
4. **Filter Components** - Search, filters, sorting

---

## Trading Components

### 1. BuyNowModal

**Purpose:** Handle instant domain purchases with payment simulation.

**File:** `src/components/trading/BuyNowModal.jsx`

**Props:**
```javascript
{
  isOpen: boolean,
  onClose: function,
  domain: object,
  onConfirm: function
}
```

**Features:**
- Domain name and price display
- Order summary with platform fees
- Mock payment method selector
- Terms and conditions checkbox
- "Complete Purchase" CTA button
- Success animation with confetti

**Implementation:**

```javascript
const BuyNowModal = ({ isOpen, onClose, domain, onConfirm }) => {
  const [accepted, setAccepted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { showToast } = useToast();
  
  const platformFee = domain.price * 0.05; // 5% fee
  const total = domain.price + platformFee;
  
  const handlePurchase = () => {
    if (!accepted) {
      showToast({ type: 'error', message: 'Please accept terms' });
      return;
    }
    
    // Simulate purchase
    onConfirm(domain);
    showToast({ 
      type: 'success', 
      message: `${domain.name} added to your portfolio!` 
    });
    onClose();
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Purchase Domain" size="md">
      <div className="space-y-6">
        {/* Domain info */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{domain.name}</h3>
          <Badge variant="success">Buy Now</Badge>
        </div>
        
        {/* Order summary */}
        <Card className="p-4 bg-gray-50">
          <h4 className="font-bold mb-3">Order Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Domain Price</span>
              <span className="font-bold">{formatPrice(domain.price)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Platform Fee (5%)</span>
              <span>{formatPrice(platformFee)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </Card>
        
        {/* Payment method */}
        <div>
          <label className="block font-medium mb-2">Payment Method</label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <CreditCard className="w-5 h-5" />
              <span>Credit/Debit Card</span>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <Wallet className="w-5 h-5" />
              <span>PayPal</span>
            </label>
          </div>
        </div>
        
        {/* Card details (mock) */}
        {paymentMethod === 'card' && (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border rounded-lg"
              defaultValue="•••• •••• •••• 4242"
              readOnly
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-2 border rounded-lg"
                defaultValue="12/25"
                readOnly
              />
              <input
                type="text"
                placeholder="CVC"
                className="px-4 py-2 border rounded-lg"
                defaultValue="123"
                readOnly
              />
            </div>
          </div>
        )}
        
        {/* Terms */}
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-gray-600">
            I agree to the terms and conditions and understand this is a demo purchase
          </span>
        </label>
        
        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" fullWidth onClick={onClose}>
            Cancel
          </Button>
          <Button variant="success" fullWidth onClick={handlePurchase}>
            <Lock className="w-4 h-4 mr-2" />
            Complete Purchase
          </Button>
        </div>
      </div>
    </Modal>
  );
};
```

---

### 2. BidModal

**Purpose:** Allow users to make offers on domains.

**File:** `src/components/trading/BidModal.jsx`

**Props:**
```javascript
{
  isOpen: boolean,
  onClose: function,
  domain: object,
  currentHighestBid: number,
  onSubmit: function
}
```

**Features:**
- Current highest bid display
- Bid amount input with validation
- AI-suggested bid range
- Minimum bid enforcement
- Real-time bid comparison

**Implementation:**

```javascript
const BidModal = ({ isOpen, onClose, domain, currentHighestBid, onSubmit }) => {
  const [bidAmount, setBidAmount] = useState('');
  const { showToast } = useToast();
  
  const suggestedMin = domain.aiValuation.min * 0.9;
  const suggestedMax = domain.aiValuation.max * 1.1;
  const minimumBid = currentHighestBid ? currentHighestBid + 100 : domain.price * 0.7;
  
  const handleSubmit = () => {
    const amount = parseFloat(bidAmount);
    
    if (!amount || amount < minimumBid) {
      showToast({ 
        type: 'error', 
        message: `Bid must be at least ${formatPrice(minimumBid)}` 
      });
      return;
    }
    
    onSubmit({ domain, amount });
    showToast({ type: 'success', message: 'Bid submitted successfully!' });
    onClose();
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Make an Offer" size="md">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{domain.name}</h3>
          <p className="text-gray-600">
            Listed at {formatPrice(domain.price)}
          </p>
        </div>
        
        {/* Current highest bid */}
        {currentHighestBid && (
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Current Highest Bid</p>
                <p className="text-xl font-bold">{formatPrice(currentHighestBid)}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
          </Card>
        )}
        
        {/* AI suggestion */}
        <Card className="p-4 bg-purple-50 border-purple-200">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
            <div>
              <p className="font-bold text-purple-900 mb-1">AI Recommendation</p>
              <p className="text-sm text-purple-800">
                Bid between {formatPrice(suggestedMin)} - {formatPrice(suggestedMax)} for best chance of acceptance
              </p>
            </div>
          </div>
        </Card>
        
        {/* Bid input */}
        <div>
          <label className="block font-medium mb-2">Your Offer</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder={`Minimum ${formatPrice(minimumBid)}`}
              className="w-full pl-10 pr-4 py-3 border rounded-lg text-lg font-bold"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Minimum bid: {formatPrice(minimumBid)}
          </p>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" fullWidth onClick={onClose}>
            Cancel
          </Button>
          <Button fullWidth onClick={handleSubmit}>
            Submit Offer
          </Button>
        </div>
      </div>
    </Modal>
  );
};
```

---

### 3. TradeProposalModal

**Purpose:** Facilitate domain-for-domain trading.

**File:** `src/components/trading/TradeProposalModal.jsx`

**Props:**
```javascript
{
  isOpen: boolean,
  onClose: function,
  targetDomain: object,
  userDomains: array,
  onSubmit: function
}
```

**Features:**
- Multi-select from user's portfolio
- Live value comparison
- Fairness indicator
- Personal message field
- AI trade suggestions

**Implementation:**

```javascript
const TradeProposalModal = ({ isOpen, onClose, targetDomain, userDomains, onSubmit }) => {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [message, setMessage] = useState('');
  const { showToast } = useToast();
  
  const yourValue = selectedDomains.reduce((sum, d) => sum + d.price, 0);
  const theirValue = targetDomain.price;
  const difference = yourValue - theirValue;
  const differencePercent = (Math.abs(difference) / theirValue) * 100;
  
  const isFair = differencePercent <= 15;
  const tradeStatus = 
    differencePercent <= 10 ? 'excellent' :
    differencePercent <= 15 ? 'fair' :
    differencePercent <= 25 ? 'unfair' : 'very-unfair';
  
  const toggleDomain = (domain) => {
    if (selectedDomains.find(d => d.id === domain.id)) {
      setSelectedDomains(selectedDomains.filter(d => d.id !== domain.id));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };
  
  const handleSubmit = () => {
    if (selectedDomains.length === 0) {
      showToast({ type: 'error', message: 'Please select at least one domain' });
      return;
    }
    
    onSubmit({
      yourDomains: selectedDomains,
      theirDomain: targetDomain,
      message
    });
    showToast({ type: 'success', message: 'Trade proposal sent!' });
    onClose();
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Propose Domain Trade" size="xl">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Your domains */}
          <div className="md:col-span-1">
            <h3 className="font-bold mb-3">Your Domains</h3>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {userDomains.map(domain => (
                <label
                  key={domain.id}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedDomains.find(d => d.id === domain.id)
                      ? 'bg-blue-50 border-blue-300'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={!!selectedDomains.find(d => d.id === domain.id)}
                    onChange={() => toggleDomain(domain)}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{domain.name}</p>
                    <p className="text-sm text-gray-600">{formatPrice(domain.price)}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          {/* Trade balance */}
          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-1">Trade Value</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold">{formatPrice(yourValue)}</span>
                <ArrowRight className="w-5 h-5" />
                <span className="text-xl font-bold">{formatPrice(theirValue)}</span>
              </div>
            </div>
            
            <div className={`w-full max-w-[200px] p-4 rounded-lg text-center ${
              tradeStatus === 'excellent' ? 'bg-green-100 border-green-300' :
              tradeStatus === 'fair' ? 'bg-yellow-100 border-yellow-300' :
              tradeStatus === 'unfair' ? 'bg-orange-100 border-orange-300' :
              'bg-red-100 border-red-300'
            } border-2`}>
              {tradeStatus === 'excellent' && <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />}
              {tradeStatus === 'fair' && <AlertCircle className="w-8 h-8 mx-auto mb-2 text-yellow-600" />}
              {(tradeStatus === 'unfair' || tradeStatus === 'very-unfair') && <XCircle className="w-8 h-8 mx-auto mb-2 text-red-600" />}
              
              <p className="font-bold mb-1">
                {tradeStatus === 'excellent' && 'Excellent Trade!'}
                {tradeStatus === 'fair' && 'Fair Trade'}
                {tradeStatus === 'unfair' && 'Slightly Unfair'}
                {tradeStatus === 'very-unfair' && 'Very Unfair'}
              </p>
              <p className="text-sm">
                {difference > 0 ? '+' : ''}{formatPrice(Math.abs(difference))} 
                ({differencePercent.toFixed(1)}%)
              </p>
            </div>
            
            {tradeStatus !== 'excellent' && tradeStatus !== 'fair' && (
              <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg text-sm">
                <p className="font-medium text-purple-900 mb-1">💡 AI Tip</p>
                <p className="text-purple-800">
                  {difference > 0 
                    ? 'Your offer is too high. Consider removing a domain.'
                    : 'Your offer is too low. Consider adding another domain.'}
                </p>
              </div>
            )}
          </div>
          
          {/* Their domain */}
          <div className="md:col-span-1">
            <h3 className="font-bold mb-3">You'll Receive</h3>
            <Card className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
              <h4 className="text-xl font-bold mb-2">{targetDomain.name}</h4>
              <p className="text-2xl font-bold text-blue-600 mb-3">
                {formatPrice(targetDomain.price)}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Valuation</span>
                  <span className="font-medium">
                    {formatPrice(targetDomain.aiValuation.min)} - {formatPrice(targetDomain.aiValuation.max)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium capitalize">{targetDomain.category}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Message */}
        <div>
          <label className="block font-medium mb-2">Message to Seller (Optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi! I'd love to trade for your domain..."
            className="w-full px-4 py-3 border rounded-lg"
            rows={3}
          />
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" fullWidth onClick={onClose}>
            Cancel
          </Button>
          <Button fullWidth onClick={handleSubmit} disabled={selectedDomains.length === 0}>
            <Send className="w-4 h-4 mr-2" />
            Propose Trade
          </Button>
        </div>
      </div>
    </Modal>
  );
};
```

---

### 4. ListDomainModal

**Purpose:** Create new domain listings.

**File:** `src/components/trading/ListDomainModal.jsx`

**Props:**
```javascript
{
  isOpen: boolean,
  onClose: function,
  onSubmit: function
}
```

**Features:**
- Domain name input
- AI valuation on input
- Listing type selection
- Price setting
- Trade preferences

**Implementation Summary:**
- 3-step form: Domain Info → Pricing → Details
- AI suggests price range
- Checkboxes for: Buy Now, Accept Offers, Open to Trades
- Real-time validation
- Preview before publishing

---

## Social Components

### 5. CommentSection

**Purpose:** Allow users to comment on domains.

**File:** `src/components/social/CommentSection.jsx`

**Props:**
```javascript
{
  domainId: string,
  comments: array,
  onAddComment: function,
  currentUser: object
}
```

**Features:**
- Comment input with avatar
- Sorted comments (Recent/Popular toggle)
- Like/reply functionality
- Timestamps
- User profile links

---

### 6. ActivityFeed

**Purpose:** Display real-time platform activity.

**File:** `src/components/social/ActivityFeed.jsx`

**Props:**
```javascript
{
  activities: array,
  filter: string // 'all', 'following', 'mentions'
}
```

**Activity Types:**
- Domain listed
- Domain sold
- Bid made/received
- Trade proposed
- Achievement earned
- User followed

**Implementation:**
```javascript
const ActivityFeed = ({ activities, filter = 'all' }) => {
  const filteredActivities = activities.filter(activity => {
    if (filter === 'all') return true;
    // Additional filtering logic
    return true;
  });
  
  return (
    <div className="space-y-3">
      {filteredActivities.map(activity => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

const ActivityItem = ({ activity }) => {
  const getIcon = () => {
    switch (activity.type) {
      case 'sale': return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'bid': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'listing': return <Tag className="w-5 h-5 text-purple-600" />;
      case 'trade': return <Repeat className="w-5 h-5 text-orange-600" />;
      case 'achievement': return <Award className="w-5 h-5 text-yellow-600" />;
      default: return <Activity className="w-5 h-5 text-gray-600" />;
    }
  };
  
  return (
    <Card className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-full bg-gray-100">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="text-sm">
            <Link to={`/profile/${activity.username}`} className="font-bold hover:text-blue-600">
              @{activity.username}
            </Link>
            {' '}{activity.description}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {formatTimeAgo(activity.timestamp)}
          </p>
        </div>
        {activity.domainName && (
          <Link 
            to={`/domain/${activity.domainName}`}
            className="text-blue-600 hover:underline font-medium"
          >
            {activity.domainName}
          </Link>
        )}
      </div>
    </Card>
  );
};
```

---

### 7. FollowButton

**Purpose:** Follow/unfollow users.

**File:** `src/components/social/FollowButton.jsx`

```javascript
const FollowButton = ({ username, isFollowing, onToggle }) => {
  return (
    <Button
      variant={isFollowing ? 'outline' : 'primary'}
      size="sm"
      onClick={() => onToggle(username)}
    >
      {isFollowing ? (
        <>
          <UserCheck className="w-4 h-4 mr-2" />
          Following
        </>
      ) : (
        <>
          <UserPlus className="w-4 h-4 mr-2" />
          Follow
        </>
      )}
    </Button>
  );
};
```

---

## Analytics Components

### 8. PriceChart

**Purpose:** Display domain price history.

**File:** `src/components/analytics/PriceChart.jsx`

**Props:**
```javascript
{
  priceHistory: array, // [{date, price}]
  height: number
}
```

**Implementation:**
```javascript
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PriceChart = ({ priceHistory, height = 300 }) => {
  const priceChange = priceHistory.length > 1
    ? ((priceHistory[priceHistory.length - 1].price - priceHistory[0].price) / priceHistory[0].price) * 100
    : 0;
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold">Price History</h4>
        <Badge variant={priceChange >= 0 ? 'success' : 'danger'}>
          {priceChange >= 0 ? '↑' : '↓'} {Math.abs(priceChange).toFixed(1)}%
        </Badge>
      </div>
      
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={priceHistory}>
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          />
          <YAxis 
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip 
            formatter={(value) => formatPrice(value)}
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
```

---

### 9. PerformanceGraph

**Purpose:** Show portfolio value over time.

**File:** `src/components/analytics/PerformanceGraph.jsx`

**Features:**
- Line chart of portfolio value
- Time period selector (7d, 30d, 90d, All)
- Profit/loss indicators
- Annotations for major events

---

### 10. ROICalculator

**Purpose:** Calculate and display return on investment.

**File:** `src/components/analytics/ROICalculator.jsx`

```javascript
const ROICalculator = ({ buyPrice, sellPrice }) => {
  const profit = sellPrice - buyPrice;
  const roi = ((profit / buyPrice) * 100).toFixed(1);
  const isProfit = profit > 0;
  
  return (
    <Card className={`p-4 ${isProfit ? 'bg-green-50' : 'bg-red-50'}`}>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-1">Return on Investment</p>
        <p className={`text-3xl font-bold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
          {isProfit ? '+' : ''}{roi}%
        </p>
        <p className="text-sm mt-2">
          Profit: {isProfit ? '+' : ''}{formatPrice(profit)}
        </p>
      </div>
    </Card>
  );
};
```

---

## Filter Components

### 11. DomainFilters

**Purpose:** Comprehensive filtering for marketplace.

**File:** `src/components/filters/DomainFilters.jsx`

**Props:**
```javascript
{
  filters: object,
  onFilterChange: function,
  onClearFilters: function
}
```

**Filters Include:**
- Price range (slider)
- TLD checkboxes
- Category tags
- Listing type
- Domain length
- AI confidence
- Activity badges

---

### 12. SearchBar

**Purpose:** Search domains with autocomplete.

**File:** `src/components/filters/SearchBar.jsx`

**Features:**
- Debounced search input
- Autocomplete suggestions
- Search by: name, keyword, TLD
- Recent searches
- Clear button

```javascript
const SearchBar = ({ onSearch, placeholder = "Search domains..." }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query.length >= 2) {
        // Generate suggestions
        const mockSuggestions = domains
          .filter(d => d.name.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 5);
        setSuggestions(mockSuggestions);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    }, 300);
    
    return () => clearTimeout(debounce);
  }, [query]);
  
  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border rounded-lg"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setShowSuggestions(false);
              onSearch('');
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
      
      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-10 p-2">
          {suggestions.map(domain => (
            <button
              key={domain.id}
              onClick={() => {
                setQuery(domain.name);
                setShowSuggestions(false);
                onSearch(domain.name);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              <p className="font-medium">{domain.name}</p>
              <p className="text-sm text-gray-600">{formatPrice(domain.price)}</p>
            </button>
          ))}
        </Card>
      )}
    </div>
  );
};
```

---

### 13. SortOptions

**Purpose:** Dropdown for sorting results.

**File:** `src/components/filters/SortOptions.jsx`

```javascript
const SortOptions = ({ value, onChange }) => {
  const options = [
    { value: 'recent', label: 'Recently Listed' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'trending', label: 'Trending' },
    { value: 'ending-soon', label: 'Ending Soon' }
  ];
  
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border rounded-lg bg-white"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
```

---

## Summary

**BUILD_GUIDE_PART6** provides specifications for 13 key feature components:

### Trading Components (4)
1. BuyNowModal - Instant purchases
2. BidModal - Make offers
3. TradeProposalModal - Domain swaps
4. ListDomainModal - Create listings

### Social Components (3)
5. CommentSection - Domain discussions
6. ActivityFeed - Real-time updates
7. FollowButton - User following

### Analytics Components (3)
8. PriceChart - Price history visualization
9. PerformanceGraph - Portfolio tracking
10. ROICalculator - Investment returns

### Filter Components (3)
11. DomainFilters - Comprehensive filtering
12. SearchBar - Search with autocomplete
13. SortOptions - Result sorting

These components are the building blocks used throughout the application to provide rich, interactive functionality.

---

**End of BUILD_GUIDE_PART6**
