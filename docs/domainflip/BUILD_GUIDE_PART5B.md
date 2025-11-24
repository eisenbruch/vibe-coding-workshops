# DomainFlip - Complete Build Guide - PART 5B
## Page Specifications (Continued)

---

## Overview

This is Part 5B - continuation of page specifications. This document covers the remaining 4 pages: DomainDetailPage, ProfilePage, LeaderboardPage, and DemoPage.

---

## 5. DomainDetailPage (/domain/:domainName)

**Purpose:** Complete information about a specific domain with ability to purchase, bid, or trade.

**File:** `src/pages/DomainDetailPage.jsx`

### Layout Structure

```
┌─────────────────────────────────────────┐
│  Back button + Domain Name + Actions   │
└─────────────────────────────────────────┘
┌──────────────────────┬──────────────────┐
│                      │                  │
│   Price & Actions    │  Comments        │
│   Seller Info        │  Activity Feed   │
│   Bids/Trades        │  Alerts          │
│   Domain Details     │  Share           │
│   AI Analysis        │                  │
│   Similar Domains    │                  │
│                      │                  │
└──────────────────────┴──────────────────┘
```

### Implementation

```javascript
const DomainDetailPage = () => {
  const { domainName } = useParams();
  const { getDomainByName, toggleLike, placeBid, currentUser } = useApp();
  const { showToast } = useToast();
  const navigate = useNavigate();
  
  const domain = getDomainByName(domainName);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showBidModal, setShowBidModal] = useState(false);
  const [showTradeModal, setShowTradeModal] = useState(false);
  
  if (!domain) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Domain Not Found</h1>
        <Button onClick={() => navigate('/marketplace')}>
          Browse Marketplace
        </Button>
      </div>
    );
  }
  
  const isLiked = domain.likedBy?.includes(currentUser.username);
  const seller = getUserByUsername(domain.listedBy);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/marketplace')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Marketplace
          </button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {domain.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {domain.badges?.map(badge => (
                  <Badge key={badge} variant="primary">
                    {badge === 'hot' && '🔥 Hot'}
                    {badge === 'new' && '🆕 New'}
                    {badge === 'premium' && '💎 Premium'}
                  </Badge>
                ))}
                <Badge variant="info">
                  Listed {formatTimeAgo(domain.listedAt)}
                </Badge>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => toggleLike(domain.id)}
                className={`p-3 rounded-lg border transition-colors ${
                  isLiked 
                    ? 'bg-red-50 border-red-200 text-red-600' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 rounded-lg border hover:bg-gray-100">
                <Share2 className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-lg border hover:bg-gray-100">
                <Flag className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price & Purchase Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Current Price</p>
                  <p className="text-4xl font-bold">{formatPrice(domain.price)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">AI Valuation</p>
                  <p className="text-lg font-semibold text-blue-600">
                    {formatPrice(domain.aiValuation.min)} - {formatPrice(domain.aiValuation.max)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {domain.aiValuation.confidence}% confidence
                  </p>
                </div>
              </div>
              
              {/* Price History Chart */}
              <div className="mb-6">
                <h3 className="font-bold mb-3">Price History</h3>
                <PriceChart priceHistory={domain.priceHistory} height={200} />
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                {domain.listingType.includes('buyNow') && (
                  <Button 
                    fullWidth 
                    size="lg" 
                    variant="success"
                    onClick={() => setShowBuyModal(true)}
                  >
                    Buy Now for {formatPrice(domain.price)}
                  </Button>
                )}
                {domain.listingType.includes('offers') && (
                  <Button 
                    fullWidth 
                    size="lg"
                    onClick={() => setShowBidModal(true)}
                  >
                    Make an Offer
                  </Button>
                )}
                {domain.openToTrades && (
                  <Button 
                    fullWidth 
                    size="lg" 
                    variant="outline"
                    onClick={() => setShowTradeModal(true)}
                  >
                    Propose Domain Trade
                  </Button>
                )}
              </div>
            </Card>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <Eye className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <p className="text-2xl font-bold">{formatNumber(domain.views)}</p>
                <p className="text-sm text-gray-600">Views</p>
              </Card>
              <Card className="p-4 text-center">
                <Heart className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <p className="text-2xl font-bold">{domain.likes}</p>
                <p className="text-sm text-gray-600">Likes</p>
              </Card>
              <Card className="p-4 text-center">
                <MessageCircle className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <p className="text-2xl font-bold">{domain.comments}</p>
                <p className="text-sm text-gray-600">Comments</p>
              </Card>
              <Card className="p-4 text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold">+15%</p>
                <p className="text-sm text-gray-600">Interest</p>
              </Card>
            </div>
            
            {/* Seller Information */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Seller Information</h3>
              <div className="flex items-start gap-4">
                <Avatar src={seller.avatar} size="xl" />
                <div className="flex-1">
                  <Link 
                    to={`/profile/${seller.username}`}
                    className="text-xl font-bold hover:text-blue-600"
                  >
                    {seller.displayName}
                  </Link>
                  <p className="text-gray-600">@{seller.username}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="font-bold">⭐ {seller.rating}/5.0</p>
                      <p className="text-xs text-gray-500">
                        ({seller.reviewCount} reviews)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Sales</p>
                      <p className="font-bold">{seller.stats.totalSales}</p>
                      <p className="text-xs text-gray-500">
                        {formatPrice(seller.stats.totalVolume)} volume
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Success Rate</p>
                      <p className="font-bold">{seller.stats.winRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="font-bold">
                        {formatDate(seller.memberSince, 'short')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {seller.badges?.map(badge => (
                      <Badge key={badge} variant="success" size="sm">
                        {badge === 'topTrader' && '🏆 Top Trader'}
                        {badge === 'speedDemon' && '⚡ Speed Demon'}
                        {badge === 'eliteMember' && '💎 Elite'}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="mt-4">Follow</Button>
                </div>
              </div>
            </Card>
            
            {/* Current Bids */}
            {domain.bids && domain.bids.length > 0 && (
              <Card className="p-6">
                <h3 className="font-bold mb-4">Current Bids</h3>
                <div className="space-y-3">
                  {domain.bids.map((bid, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar src={`https://i.pravatar.cc/150?img=${index + 1}`} size="sm" />
                        <div>
                          <p className="font-medium">@{bid.username}</p>
                          <p className="text-xs text-gray-600">
                            {formatTimeAgo(bid.timestamp)}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg font-bold">{formatPrice(bid.amount)}</p>
                    </div>
                  ))}
                </div>
                <Button fullWidth className="mt-4" onClick={() => setShowBidModal(true)}>
                  Place Your Bid
                </Button>
              </Card>
            )}
            
            {/* Trade Offers */}
            {domain.openToTrades && (
              <Card className="p-6">
                <h3 className="font-bold mb-4">Open to Domain Swaps</h3>
                <p className="text-gray-600 mb-4">
                  Seller will consider trading for:
                </p>
                <p className="mb-4">{domain.tradePreferences}</p>
                <Button fullWidth onClick={() => setShowTradeModal(true)}>
                  Propose Trade
                </Button>
              </Card>
            )}
            
            {/* Domain Details */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Domain Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Registered</p>
                  <p className="font-medium">{domain.registrationInfo.registered}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expires</p>
                  <p className="font-medium">{domain.registrationInfo.expires}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">TLD</p>
                  <p className="font-medium">.{domain.tld}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Length</p>
                  <p className="font-medium">{domain.length} characters</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-medium capitalize">{domain.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Registrar</p>
                  <p className="font-medium">{domain.registrationInfo.registrar}</p>
                </div>
              </div>
            </Card>
            
            {/* SEO Metrics */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">SEO Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Search Volume</p>
                  <p className="font-bold">
                    {formatNumber(domain.seoMetrics.searchVolume)}/month
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Domain Authority</p>
                  <p className="font-bold">{domain.seoMetrics.domainAuthority}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Backlinks</p>
                  <p className="font-bold">{domain.seoMetrics.backlinks}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Keywords</p>
                  <div className="flex flex-wrap gap-1">
                    {domain.seoMetrics.keywords.map(keyword => (
                      <Badge key={keyword} size="sm">{keyword}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            {/* AI Analysis */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">AI Analysis Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: 'Brandability', value: domain.aiAnalysis.brandability, desc: 'Excellent' },
                  { label: 'Memorability', value: domain.aiAnalysis.memorability, desc: 'Very Good' },
                  { label: 'Keyword Value', value: domain.aiAnalysis.keywordValue, desc: 'High' },
                  { label: 'TLD Premium', value: domain.aiAnalysis.tldPremium, desc: '.io is valuable' },
                  { label: 'Market Trend', value: domain.aiAnalysis.marketTrend, desc: 'Growing' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-sm text-gray-600">{item.desc}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-2 flex-1 rounded ${
                            i < item.value ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-1">Overall Score</p>
                <p className="text-3xl font-bold text-blue-600">
                  {domain.aiAnalysis.overallScore}/100
                </p>
              </div>
            </Card>
            
            {/* Similar Domains */}
            <div>
              <h3 className="text-2xl font-bold mb-4">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {domains
                  .filter(d => d.category === domain.category && d.id !== domain.id)
                  .slice(0, 4)
                  .map(similarDomain => (
                    <DomainCard key={similarDomain.id} domain={similarDomain} />
                  ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Social & Activity */}
          <div className="space-y-6">
            {/* Comments Section */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">💬 {domain.comments} Comments</h3>
              
              {/* Comment input */}
              <div className="mb-6">
                <div className="flex gap-3">
                  <Avatar src={currentUser.avatar} size="sm" />
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
              
              {/* Comment list */}
              <div className="space-y-4">
                {mockComments
                  .filter(c => c.domainId === domain.id)
                  .map(comment => (
                    <div key={comment.id} className="flex gap-3">
                      <Avatar src={comment.avatar} size="sm" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">@{comment.username}</p>
                        <p className="text-sm text-gray-600 mt-1">{comment.text}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <button className="hover:text-blue-600">
                            <Heart className="w-3 h-3 inline mr-1" />
                            {comment.likes}
                          </button>
                          <span>{formatTimeAgo(comment.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
            
            {/* Activity Feed */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500 mt-0.5" />
                  <div>
                    <p>Became trending</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-500 mt-0.5" />
                  <div>
                    <p>@user3 bid {formatPrice(4800)}</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-red-500 mt-0.5" />
                  <div>
                    <p>Liked by @user5 and 12 others</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Price Alerts */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Price Alerts</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get notified when price changes
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg mb-3"
              />
              <Button fullWidth>Set Alert</Button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                {formatNumber(241)} traders watching
              </p>
            </Card>
            
            {/* Share */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Share This Domain</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Link2 className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <BuyNowModal 
        isOpen={showBuyModal}
        onClose={() => setShowBuyModal(false)}
        domain={domain}
      />
      <BidModal
        isOpen={showBidModal}
        onClose={() => setShowBidModal(false)}
        domain={domain}
      />
      <TradeProposalModal
        isOpen={showTradeModal}
        onClose={() => setShowTradeModal(false)}
        domain={domain}
      />
    </div>
  );
};
```

---

## 6. ProfilePage (/profile/:username)

**Purpose:** Public profile showing user's domains, stats, achievements, and activity.

**File:** `src/pages/ProfilePage.jsx`

### Layout Structure

```
┌─────────────────────────────────────────┐
│  Cover Photo + Avatar + User Info      │
│  Stats Overview Bar                     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Tabs: Portfolio | Activity |           │
│        Achievements | Stats | Reviews   │
└─────────────────────────────────────────┘
┌──────────────────────┬──────────────────┐
│                      │                  │
│   Tab Content        │  Sidebar         │
│   (varies by tab)    │  - Quick Actions │
│                      │  - Similar       │
│                      │  - Followers     │
└──────────────────────┴──────────────────┘
```

### Implementation

```javascript
const ProfilePage = () => {
  const { username } = useParams();
  const { getUserByUsername, domains } = useApp();
  const [activeTab, setActiveTab] = useState('portfolio');
  
  const user = getUserByUsername(username);
  const userDomains = domains.filter(d => d.listedBy === username);
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">User Not Found</h1>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48" />
      
      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-8">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar */}
              <Avatar src={user.avatar} size="2xl" className="-mt-16 border-4 border-white" />
              
              {/* User Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{user.displayName}</h1>
                    <p className="text-gray-600">@{user.username}</p>
                    {user.location && (
                      <p className="text-sm text-gray-500 mt-1">
                        📍 {user.location}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button>Follow</Button>
                    <Button variant="outline">Message</Button>
                    <Button variant="outline" size="md">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {user.badges?.map(badge => (
                    <Badge key={badge} variant="success">
                      {badge === 'topTrader' && '🏆 Top Trader'}
                      {badge === 'speedDemon' && '⚡ Speed Demon'}
                      {badge === 'eliteMember' && '💎 Elite Member'}
                    </Badge>
                  ))}
                </div>
                
                <p className="mt-4 text-gray-600">{user.bio}</p>
                
                <div className="flex gap-6 mt-4 text-sm">
                  <div>
                    <span className="font-bold">{formatNumber(user.followers)}</span>
                    <span className="text-gray-600"> followers</span>
                  </div>
                  <div>
                    <span className="font-bold">{formatNumber(user.following)}</span>
                    <span className="text-gray-600"> following</span>
                  </div>
                  <div className="text-gray-600">
                    Member since {formatDate(user.memberSince, 'short')}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold">{user.stats.totalDomains}</p>
            <p className="text-sm text-gray-600">Total Domains</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold">{user.stats.totalSales}</p>
            <p className="text-sm text-gray-600">Total Sales</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold">{formatPrice(user.stats.totalVolume)}</p>
            <p className="text-sm text-gray-600">Volume</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold">{user.stats.winRate}%</p>
            <p className="text-sm text-gray-600">Win Rate</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold">{user.stats.avgFlipTime}d</p>
            <p className="text-sm text-gray-600">Avg Flip Time</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">+{user.stats.roi}%</p>
            <p className="text-sm text-gray-600">ROI</p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <Card className="mb-6">
              <div className="flex border-b overflow-x-auto">
                {[
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'activity', label: 'Activity' },
                  { id: 'achievements', label: 'Achievements' },
                  { id: 'stats', label: 'Stats' },
                  { id: 'reviews', label: 'Reviews' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </Card>
            
            {/* Tab Content */}
            {activeTab === 'portfolio' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">All</Button>
                    <Button variant="ghost" size="sm">Listed</Button>
                    <Button variant="ghost" size="sm">Unlisted</Button>
                  </div>
                  <select className="px-4 py-2 border rounded-lg">
                    <option>Recently Added</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userDomains.map(domain => (
                    <DomainCard key={domain.id} domain={domain} />
                  ))}
                </div>
                
                {userDomains.length === 0 && (
                  <Card className="p-12 text-center">
                    <p className="text-gray-600">No domains in portfolio yet</p>
                  </Card>
                )}
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div className="space-y-4">
                {mockTransactions
                  .filter(t => t.seller === username || t.buyer === username)
                  .slice(0, 10)
                  .map(transaction => (
                    <Card key={transaction.id} className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${
                          transaction.type === 'sale' ? 'bg-green-100' : 'bg-blue-100'
                        }`}>
                          {transaction.type === 'sale' ? (
                            <DollarSign className="w-5 h-5 text-green-600" />
                          ) : (
                            <ShoppingCart className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {transaction.type === 'sale' ? 'Sold' : 'Purchased'} {transaction.domain}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatTimeAgo(transaction.timestamp)}
                          </p>
                        </div>
                        <p className="text-xl font-bold">{formatPrice(transaction.price)}</p>
                      </div>
                    </Card>
                  ))}
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mockAchievements.map(achievement => {
                    const earned = user.badges?.includes(achievement.id);
                    return (
                      <Card 
                        key={achievement.id}
                        className={`p-6 text-center ${!earned && 'opacity-50'}`}
                      >
                        <div className="text-5xl mb-3">{achievement.icon}</div>
                        <p className="font-bold mb-1">{achievement.name}</p>
                        <p className="text-sm text-gray-600 mb-2">
                          {achievement.description}
                        </p>
                        <Badge 
                          variant={
                            achievement.rarity === 'legendary' ? 'warning' :
                            achievement.rarity === 'epic' ? 'purple' :
                            achievement.rarity === 'rare' ? 'info' : 'default'
                          }
                          size="sm"
                        >
                          {achievement.rarity}
                        </Badge>
                        {earned && (
                          <p className="text-xs text-gray-500 mt-2">
                            Earned on Jan 15, 2024
                          </p>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
            
            {activeTab === 'stats' && (
              <div className="space-y-6">
                {/* Performance chart */}
                <Card className="p-6">
                  <h3 className="font-bold mb-4">Trading Performance</h3>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    [Portfolio Value Chart]
                  </div>
                </Card>
                
                {/* Best stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-bold mb-4">Most Profitable Sale</h3>
                    <p className="text-2xl font-bold mb-2">AIRevolution.com</p>
                    <div className="space-y-1 text-sm">
                      <p>Bought for: {formatPrice(1200)}</p>
                      <p>Sold for: {formatPrice(12000)}</p>
                      <p className="text-green-600 font-bold">ROI: 900%</p>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-bold mb-4">Fastest Flip</h3>
                    <p className="text-2xl font-bold mb-2">QuickStart.com</p>
                    <div className="space-y-1 text-sm">
                      <p>Time to sell: 4 hours</p>
                      <p>Profit: {formatPrice(3500)}</p>
                    </div>
                  </Card>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-bold">{user.rating}</div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(user.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Based on {user.reviewCount} reviews
                    </p>
                  </div>
                </div>
                
                {/* Review list */}
                {[...Array(5)].map((_, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold">@user{i + 1}</p>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">
                          Great seller! Fast response, smooth transaction.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Domain: Example.com</span>
                          <span>•</span>
                          <span>{formatTimeAgo(new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000))}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button fullWidth variant="outline">Send Message</Button>
                <Button fullWidth variant="outline">Propose Trade</Button>
                <Button fullWidth variant="outline">View Active Listings</Button>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-bold mb-4">Similar Traders</h3>
              <div className="space-y-3">
                {mockUsers.slice(0, 3).map(similarUser => (
                  <div key={similarUser.username} className="flex items-center gap-3">
                    <Avatar src={similarUser.avatar} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{similarUser.displayName}</p>
                      <p className="text-xs text-gray-600">{similarUser.stats.totalSales} sales</p>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

Due to length constraints, let me create a final part (5C) for the last 2 pages. Should I continue with LeaderboardPage and DemoPage?

