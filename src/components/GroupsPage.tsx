import { useState } from 'react';
import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { 
  Users, 
  Plus, 
  MessageCircle, 
  Star,
  Search,
  Filter,
  TrendingUp,
  Calendar,
  MapPin,
  Briefcase,
  Rocket,
  BookOpen,
  Heart,
  Code,
  DollarSign
} from 'lucide-react';

interface GroupsPageProps {
  onNavigate: (page: string) => void;
}

interface AlumniGroup {
  id: string;
  name: string;
  description: string;
  category: 'Professional' | 'Geographic' | 'Interest' | 'Academic' | 'Social';
  members: number;
  icon: string;
  isJoined: boolean;
  recentActivity: string;
  activityTime: string;
  matchScore?: number;
}

export function GroupsPage({ onNavigate }: GroupsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const groups: AlumniGroup[] = [
    {
      id: '1',
      name: 'Tech Entrepreneurs',
      description: 'Connect with fellow alumni who are building the next generation of technology companies. Share insights, find co-founders, and grow your startup.',
      category: 'Professional',
      members: 1247,
      icon: '🚀',
      isJoined: true,
      recentActivity: 'Sarah posted about fundraising strategies',
      activityTime: '2 hours ago',
      matchScore: 95
    },
    {
      id: '2',
      name: 'AI & Machine Learning',
      description: 'Discuss latest developments in artificial intelligence, share research papers, and collaborate on ML projects.',
      category: 'Interest',
      members: 892,
      icon: '🤖',
      isJoined: false,
      recentActivity: 'New paper shared on transformer models',
      activityTime: '4 hours ago',
      matchScore: 92
    },
    {
      id: '3',
      name: 'San Francisco Bay Area',
      description: 'Local alumni community in the San Francisco Bay Area. Organize meetups, networking events, and social gatherings.',
      category: 'Geographic',
      members: 2156,
      icon: '🌉',
      isJoined: true,
      recentActivity: 'Monthly meetup scheduled for next week',
      activityTime: '1 day ago'
    },
    {
      id: '4',
      name: 'Finance Professionals',
      description: 'Alumni working in finance, investment banking, private equity, and related fields. Share market insights and career opportunities.',
      category: 'Professional',
      members: 1534,
      icon: '💰',
      isJoined: false,
      recentActivity: 'Discussion on market trends',
      activityTime: '3 hours ago',
      matchScore: 78
    },
    {
      id: '5',
      name: 'Women in Leadership',
      description: 'Supporting women alumni in achieving leadership positions across all industries. Mentorship, networking, and empowerment.',
      category: 'Social',
      members: 1823,
      icon: '👩‍💼',
      isJoined: false,
      recentActivity: 'Leadership workshop announced',
      activityTime: '6 hours ago',
      matchScore: 85
    },
    {
      id: '6',
      name: 'Computer Science Alumni',
      description: 'For graduates of the Computer Science program. Technical discussions, job opportunities, and academic connections.',
      category: 'Academic',
      members: 3421,
      icon: '💻',
      isJoined: true,
      recentActivity: 'New job posting at Meta',
      activityTime: '5 hours ago'
    },
    {
      id: '7',
      name: 'Healthcare Innovation',
      description: 'Alumni working in healthcare, medical technology, and life sciences. Advance the future of medicine together.',
      category: 'Professional',
      members: 767,
      icon: '🏥',
      isJoined: false,
      recentActivity: 'Biotech startup showcase event',
      activityTime: '8 hours ago',
      matchScore: 72
    },
    {
      id: '8',
      name: 'New York City Network',
      description: 'Connect with alumni living and working in the Big Apple. Professional networking and social events.',
      category: 'Geographic',
      members: 1932,
      icon: '🗽',
      isJoined: false,
      recentActivity: 'Rooftop networking event this Friday',
      activityTime: '1 day ago'
    }
  ];

  const categories = ['All', 'Professional', 'Geographic', 'Interest', 'Academic', 'Social'];

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const suggestedGroups = groups
    .filter(group => !group.isJoined && group.matchScore && group.matchScore > 80)
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
    .slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Professional': return 'bg-blue-100 text-blue-700';
      case 'Geographic': return 'bg-green-100 text-green-700';
      case 'Interest': return 'bg-purple-100 text-purple-700';
      case 'Academic': return 'bg-amber-100 text-amber-700';
      case 'Social': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavigation onNavigate={onNavigate} currentPage="groups" />
      
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
              Alumni Groups & Communities
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join communities of like-minded alumni. Share experiences, build networks, 
              and collaborate on projects that matter to you.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search groups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* AI Suggested Groups */}
            {suggestedGroups.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Suggested Groups for You
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suggestedGroups.map((group, index) => (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl">{group.icon}</div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-amber-500 mr-1" />
                              <span className="text-sm text-amber-600">{group.matchScore}% match</span>
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-lg mb-2">{group.name}</h3>
                          <Badge className={`${getCategoryColor(group.category)} mb-3 border-0 text-xs`}>
                            {group.category}
                          </Badge>
                          
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{group.description}</p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {group.members.toLocaleString()} members
                            </span>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-3 mb-4">
                            <div className="text-xs text-gray-600 mb-1">Recent Activity:</div>
                            <div className="text-sm">{group.recentActivity}</div>
                            <div className="text-xs text-gray-500 mt-1">{group.activityTime}</div>
                          </div>
                          
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Join Group
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Category Filters */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Groups</h2>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{filteredGroups.length} groups</Badge>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                      className={selectedCategory === category 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'hover:bg-blue-50'
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Groups Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{group.icon}</div>
                        {group.isJoined && (
                          <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                            Joined
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2">{group.name}</h3>
                      <Badge className={`${getCategoryColor(group.category)} mb-3 border-0 text-xs`}>
                        {group.category}
                      </Badge>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{group.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {group.members.toLocaleString()} members
                        </span>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="text-xs text-gray-600 mb-1">Recent Activity:</div>
                        <div className="text-sm line-clamp-2">{group.recentActivity}</div>
                        <div className="text-xs text-gray-500 mt-1">{group.activityTime}</div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {group.isJoined ? (
                          <>
                            <Button variant="outline" size="sm" className="flex-1">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1">
                              Leave
                            </Button>
                          </>
                        ) : (
                          <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                            <Plus className="w-3 h-3 mr-1" />
                            Join Group
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Your Groups */}
            <Card>
              <CardHeader>
                <CardTitle>Your Groups</CardTitle>
                <CardDescription>Groups you've joined</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {groups.filter(group => group.isJoined).map((group) => (
                  <div key={group.id} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="text-xl">{group.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm line-clamp-1">{group.name}</div>
                      <div className="text-xs text-gray-600">{group.members} members</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Groups
                </Button>
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Professional', count: 24, icon: Briefcase },
                  { name: 'Geographic', count: 18, icon: MapPin },
                  { name: 'Interest', count: 15, icon: Heart },
                  { name: 'Academic', count: 12, icon: BookOpen },
                  { name: 'Social', count: 9, icon: Users }
                ].map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <category.icon className="w-4 h-4 text-gray-600" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count} groups
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Group Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Groups</span>
                  <span className="font-semibold">78</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Members</span>
                  <span className="font-semibold">15,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Your Groups</span>
                  <span className="font-semibold">{groups.filter(g => g.isJoined).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Activity Score</span>
                  <Badge className="bg-green-100 text-green-700">Very Active</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Create Group CTA */}
            <Card>
              <CardHeader>
                <CardTitle>Start Your Own Group</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Create a new group and bring alumni together around your interests.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
}