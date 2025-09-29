import { useState } from 'react';
import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
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
  Star
} from 'lucide-react';

interface FundRaisingPageProps {
  onNavigate: (page: string) => void;
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
  image: string;
  featured: boolean;
}

interface ImpactStory {
  id: string;
  title: string;
  description: string;
  image: string;
  amount: number;
  beneficiaries: number;
}

export function FundRaisingPage({ onNavigate }: FundRaisingPageProps) {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Student Scholarship Endowment',
      description: 'Help provide financial assistance to deserving students from underrepresented communities, ensuring education remains accessible to all.',
      category: 'Scholarships',
      raised: 2850000,
      goal: 5000000,
      donors: 847,
      daysLeft: 45,
      image: 'https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtbmklMjBzdWNjZXNzJTIwc3Rvcnl8ZW58MXx8fHwxNzU4MjkyMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: '2',
      title: 'Innovation Lab Construction',
      description: 'Build a state-of-the-art innovation lab equipped with cutting-edge technology for hands-on learning and research.',
      category: 'Infrastructure',
      raised: 12000000,
      goal: 20000000,
      donors: 423,
      daysLeft: 120,
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4Mjc4NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true
    },
    {
      id: '3',
      title: 'AI Research Initiative',
      description: 'Support groundbreaking artificial intelligence research that will shape the future of technology and society.',
      category: 'Research',
      raised: 7500000,
      goal: 15000000,
      donors: 234,
      daysLeft: 90,
      image: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgyNTI3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    },
    {
      id: '4',
      title: 'Campus Sustainability Project',
      description: 'Transform our campus into a model of environmental sustainability with renewable energy and green infrastructure.',
      category: 'Infrastructure',
      raised: 450000,
      goal: 800000,
      donors: 567,
      daysLeft: 60,
      image: 'https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1ODI1Mzc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false
    }
  ];

  const impactStories: ImpactStory[] = [
    {
      id: '1',
      title: 'First-Generation Graduate Success',
      description: 'Thanks to alumni donations, Maria became the first in her family to graduate college and now works as a software engineer at a Fortune 500 company.',
      image: 'https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtbmklMjBzdWNjZXNzJTIwc3Rvcnl8ZW58MXx8fHwxNzU4MjkyMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      amount: 25000,
      beneficiaries: 1
    },
    {
      id: '2',
      title: 'Research Breakthrough',
      description: 'Alumni-funded research led to a breakthrough in cancer treatment, potentially saving thousands of lives worldwide.',
      image: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgyNTI3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      amount: 500000,
      beneficiaries: 10000
    },
    {
      id: '3',
      title: 'State-of-the-Art Facilities',
      description: 'New learning spaces funded by alumni have transformed the educational experience for over 2,000 students annually.',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4Mjc4NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      amount: 2000000,
      beneficiaries: 2000
    }
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

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavigation onNavigate={onNavigate} currentPage="fund-raising" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Support Your Alma Mater
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your generosity creates opportunities, funds innovation, and ensures future generations 
              have access to world-class education. Every contribution makes a lasting impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">$12.4M</div>
                <div className="text-blue-100">Raised This Year</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">3,247</div>
                <div className="text-blue-100">Active Donors</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">1,856</div>
                <div className="text-blue-100">Students Supported</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {/* Featured Campaigns */}
            <section>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Campaigns
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {campaigns.filter(campaign => campaign.featured).map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                      <div className="relative">
                        <ImageWithFallback
                          src={campaign.image}
                          alt={campaign.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <Badge className={`${getCategoryColor(campaign.category)} border-0`}>
                            {campaign.category}
                          </Badge>
                          {campaign.featured && (
                            <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{campaign.title}</h3>
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
                          <span>{campaign.daysLeft} days left</span>
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => setSelectedCampaign(campaign.id)}
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          Donate Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* All Campaigns */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">All Campaigns</h2>
                <Badge variant="secondary">{campaigns.length} active campaigns</Badge>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign, index) => {
                  const CategoryIcon = getCategoryIcon(campaign.category);
                  return (
                    <motion.div
                      key={campaign.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                              <CategoryIcon className="w-6 h-6 text-blue-600" />
                            </div>
                            <Badge className={`${getCategoryColor(campaign.category)} border-0 text-xs`}>
                              {campaign.category}
                            </Badge>
                          </div>
                          
                          <h3 className="font-semibold mb-2 line-clamp-2">{campaign.title}</h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{campaign.description}</p>
                          
                          <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1">
                              <span>${campaign.raised.toLocaleString()}</span>
                              <span>${campaign.goal.toLocaleString()}</span>
                            </div>
                            <Progress 
                              value={(campaign.raised / campaign.goal) * 100} 
                              className="h-2"
                            />
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                            <span>{campaign.donors} donors</span>
                            <span>{Math.round((campaign.raised / campaign.goal) * 100)}% funded</span>
                          </div>
                          
                          <Button 
                            size="sm" 
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                            onClick={() => setSelectedCampaign(campaign.id)}
                          >
                            Donate
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Impact Stories */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Impact Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {impactStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-40 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{story.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{story.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Impact: ${story.amount.toLocaleString()}</span>
                          <span>{story.beneficiaries.toLocaleString()} beneficiaries</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Donation Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Quick Donate */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                  Quick Donate
                </CardTitle>
                <CardDescription>
                  Make a secure donation to support our mission
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Amount</label>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={donationAmount === amount ? "default" : "outline"}
                        onClick={() => setDonationAmount(amount)}
                        className="text-sm"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <Input
                    placeholder="Custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Designation</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Where needed most</option>
                    <option>Scholarships</option>
                    <option>Research</option>
                    <option>Infrastructure</option>
                  </select>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate ${donationAmount || '0'}
                </Button>
                
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-600 mr-1" />
                    <span>Secure payment processing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-600 mr-1" />
                    <span>Tax-deductible receipt</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-600 mr-1" />
                    <span>Monthly giving options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donor Recognition */}
            <Card>
              <CardHeader>
                <CardTitle>Top Donors This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'John Smith', amount: 50000, type: 'Major Gift' },
                  { name: 'Sarah Johnson', amount: 25000, type: 'Annual Fund' },
                  { name: 'Alumni Class of 2010', amount: 15000, type: 'Class Gift' },
                  { name: 'Tech Alumni Group', amount: 12000, type: 'Group Donation' }
                ].map((donor, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-sm">{donor.name}</div>
                      <div className="text-xs text-gray-600">{donor.type}</div>
                    </div>
                    <Badge variant="secondary">${donor.amount.toLocaleString()}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card>
              <CardHeader>
                <CardTitle>Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <p>All donations are tax-deductible to the full extent allowed by law.</p>
                <p>Tax ID: 12-3456789</p>
                <p>You will receive an official receipt for your records.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
}