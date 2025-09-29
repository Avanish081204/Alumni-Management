import { useState } from 'react';
import { motion } from 'motion/react';
import { PostLoginNavigation, PostLoginFooter } from './PostLoginNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Heart, 
  DollarSign, 
  Users, 
  TrendingUp,
  CreditCard,
  Award,
  Target,
  BookOpen,
  Building,
  Zap,
  CheckCircle,
  Star,
  Calendar,
  ArrowUp,
  Download,
  Share
} from 'lucide-react';

interface PostLoginDonationsPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

interface Campaign {
  id: string;
  title: string;
  description: string;
  category: 'Education' | 'Infrastructure' | 'Research' | 'Scholarships' | 'Athletics';
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  featured: boolean;
}

interface Donation {
  id: string;
  campaign: string;
  amount: number;
  date: string;
  type: 'one-time' | 'recurring';
  status: 'completed' | 'pending' | 'failed';
}

export function PostLoginDonationsPage({ onNavigate, onLogout }: PostLoginDonationsPageProps) {
  const [activeTab, setActiveTab] = useState('campaigns');

  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Student Scholarship Endowment',
      description: 'Help provide financial assistance to deserving students from underrepresented communities.',
      category: 'Scholarships',
      raised: 385000,
      goal: 500000,
      donors: 847,
      daysLeft: 45,
      featured: true
    },
    {
      id: '2',
      title: 'Innovation Lab Construction',
      description: 'Build a state-of-the-art innovation lab equipped with cutting-edge technology.',
      category: 'Infrastructure',
      raised: 1200000,
      goal: 2000000,
      donors: 423,
      daysLeft: 120,
      featured: true
    },
    {
      id: '3',
      title: 'AI Research Initiative',
      description: 'Support groundbreaking artificial intelligence research.',
      category: 'Research',
      raised: 750000,
      goal: 1500000,
      donors: 234,
      daysLeft: 90,
      featured: false
    },
    {
      id: '4',
      title: 'Campus Sustainability Project',
      description: 'Transform our campus into a model of environmental sustainability.',
      category: 'Infrastructure',
      raised: 450000,
      goal: 800000,
      donors: 567,
      daysLeft: 60,
      featured: false
    }
  ];

  const myDonations: Donation[] = [
    {
      id: '1',
      campaign: 'Student Scholarship Endowment',
      amount: 500,
      date: '2024-12-01',
      type: 'one-time',
      status: 'completed'
    },
    {
      id: '2',
      campaign: 'Innovation Lab Construction',
      amount: 250,
      date: '2024-11-15',
      type: 'recurring',
      status: 'completed'
    },
    {
      id: '3',
      campaign: 'AI Research Initiative',
      amount: 750,
      date: '2024-10-20',
      type: 'one-time',
      status: 'completed'
    },
    {
      id: '4',
      campaign: 'Campus Sustainability Project',
      amount: 100,
      date: '2024-09-30',
      type: 'recurring',
      status: 'completed'
    }
  ];

  // Chart data
  const donationTrendData = [
    { month: 'Jan', amount: 200 },
    { month: 'Feb', amount: 350 },
    { month: 'Mar', amount: 180 },
    { month: 'Apr', amount: 400 },
    { month: 'May', amount: 320 },
    { month: 'Jun', amount: 500 },
    { month: 'Jul', amount: 280 },
    { month: 'Aug', amount: 600 },
    { month: 'Sep', amount: 100 },
    { month: 'Oct', amount: 750 },
    { month: 'Nov', amount: 250 },
    { month: 'Dec', amount: 500 }
  ];

  const categoryData = [
    { name: 'Scholarships', value: 1250, color: '#3B82F6' },
    { name: 'Research', value: 750, color: '#8B5CF6' },
    { name: 'Infrastructure', value: 350, color: '#F59E0B' },
    { name: 'Athletics', value: 200, color: '#10B981' }
  ];

  const impactData = [
    { category: 'Students Supported', value: 12 },
    { category: 'Research Projects', value: 3 },
    { category: 'Facilities Improved', value: 2 },
    { category: 'Programs Funded', value: 5 }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Scholarships': return 'bg-blue-100 text-blue-700';
      case 'Infrastructure': return 'bg-purple-100 text-purple-700';
      case 'Research': return 'bg-green-100 text-green-700';
      case 'Education': return 'bg-amber-100 text-amber-700';
      case 'Athletics': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Scholarships': return BookOpen;
      case 'Infrastructure': return Building;
      case 'Research': return Zap;
      case 'Education': return BookOpen;
      case 'Athletics': return Award;
      default: return Target;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-amber-100 text-amber-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const totalDonated = myDonations.reduce((sum, donation) => sum + donation.amount, 0);
  const totalCampaigns = new Set(myDonations.map(d => d.campaign)).size;
  const currentMonthDonations = myDonations.filter(d => new Date(d.date).getMonth() === new Date().getMonth()).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <PostLoginNavigation onNavigate={onNavigate} onLogout={onLogout} currentPage="donations" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Donation Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Track your contributions, explore campaigns, and see the impact of your generosity.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Donated', value: `$${totalDonated.toLocaleString()}`, icon: DollarSign, change: '+$500 this month', color: 'text-green-600' },
            { label: 'Campaigns Supported', value: totalCampaigns.toString(), icon: Heart, change: '2 active', color: 'text-red-600' },
            { label: 'Donations This Month', value: currentMonthDonations.toString(), icon: TrendingUp, change: '+25% from last month', color: 'text-blue-600' },
            { label: 'Impact Score', value: '95', icon: Award, change: 'Top 10% donors', color: 'text-purple-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                  <div className="text-xs text-green-600 flex items-center">
                    <ArrowUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="campaigns">Active Campaigns</TabsTrigger>
                <TabsTrigger value="history">Donation History</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="campaigns" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Active Campaigns</h2>
                  <Badge variant="secondary">{campaigns.length} campaigns</Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {campaigns.map((campaign, index) => {
                    const CategoryIcon = getCategoryIcon(campaign.category);
                    return (
                      <motion.div
                        key={campaign.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                <CategoryIcon className="w-6 h-6 text-blue-600" />
                              </div>
                              <div className="flex space-x-2">
                                <Badge className={`${getCategoryColor(campaign.category)} border-0 text-xs`}>
                                  {campaign.category}
                                </Badge>
                                {campaign.featured && (
                                  <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0 text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <h3 className="font-semibold text-lg mb-3">{campaign.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{campaign.description}</p>
                            
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="font-medium">Progress</span>
                                <span>${campaign.raised.toLocaleString()} / ${campaign.goal.toLocaleString()}</span>
                              </div>
                              <Progress 
                                value={(campaign.raised / campaign.goal) * 100} 
                                className="h-3"
                              />
                            </div>
                            
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {campaign.donors} donors
                              </span>
                              <span className="flex items-center">
                                <Target className="w-4 h-4 mr-1" />
                                {Math.round((campaign.raised / campaign.goal) * 100)}% funded
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {campaign.daysLeft} days left
                              </span>
                            </div>
                            
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                              <Heart className="w-4 h-4 mr-2" />
                              Donate Now
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Donation History</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {myDonations.map((donation, index) => (
                    <motion.div
                      key={donation.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-green-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg">{donation.campaign}</h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                  <span>${donation.amount.toLocaleString()}</span>
                                  <span>•</span>
                                  <span>{new Date(donation.date).toLocaleDateString()}</span>
                                  <span>•</span>
                                  <Badge variant="outline" className="text-xs">
                                    {donation.type.replace('-', ' ')}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Badge className={`${getStatusColor(donation.status)} border-0`}>
                              {donation.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-6">
                <h2 className="text-2xl font-bold">Donation Analytics</h2>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Donation Trend */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Donation Trend (2024)</CardTitle>
                      <CardDescription>Your monthly donation amounts throughout the year</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={donationTrendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                          <Line 
                            type="monotone" 
                            dataKey="amount" 
                            stroke="#3B82F6" 
                            strokeWidth={3}
                            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Category Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Donation by Category</CardTitle>
                      <CardDescription>Distribution of your donations across different causes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Impact Metrics */}
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle>Your Impact</CardTitle>
                      <CardDescription>How your donations have made a difference</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={impactData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Quick Donate */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                  Quick Donate
                </CardTitle>
                <CardDescription>Make a donation to your favorite causes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {['$25', '$50', '$100'].map((amount) => (
                    <Button key={amount} variant="outline" className="h-12">
                      {amount}
                    </Button>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            {/* Donation Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Annual Giving Goal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${totalDonated.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">of $5,000 goal</div>
                </div>
                <Progress value={(totalDonated / 5000) * 100} className="h-3" />
                <div className="text-sm text-gray-600 text-center">
                  {Math.round((totalDonated / 5000) * 100)}% complete • ${(5000 - totalDonated).toLocaleString()} remaining
                </div>
              </CardContent>
            </Card>

            {/* Impact Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-600" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Students Helped</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Research Projects</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Donor Rank</span>
                    <Badge className="bg-gold-100 text-gold-700">Gold Supporter</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Impact Score</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="font-semibold">95/100</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recognition */}
            <Card>
              <CardHeader>
                <CardTitle>Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Gold Supporter</p>
                    <p className="text-xs text-gray-600">Donated $2,000+ this year</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Community Champion</p>
                    <p className="text-xs text-gray-600">Top 10% of donors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <PostLoginFooter />
    </div>
  );
}