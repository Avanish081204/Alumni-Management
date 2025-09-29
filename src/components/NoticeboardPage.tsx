import { useState } from 'react';
import { motion } from 'motion/react';
import { PostLoginNavigation, PostLoginFooter } from './PostLoginNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Bell, 
  Plus, 
  Search, 
  Filter,
  Pin,
  Calendar,
  Briefcase,
  TrendingUp,
  Award,
  Users,
  MessageCircle,
  Share,
  Eye,
  ThumbsUp,
  Clock,
  AlertCircle,
  Info,
  CheckCircle,
  X
} from 'lucide-react';

interface NoticeboardPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

interface Notice {
  id: string;
  title: string;
  content: string;
  category: 'Events' | 'Jobs' | 'Updates' | 'Announcements' | 'Opportunities';
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  isPinned: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  likes: number;
  comments: number;
  views: number;
  tags: string[];
  expiryDate?: string;
  isUserAdmin: boolean;
}

export function NoticeboardPage({ onNavigate, onLogout }: NoticeboardPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: '',
    content: '',
    category: 'Updates',
    priority: 'medium',
    tags: '',
    expiryDate: ''
  });

  const notices: Notice[] = [
    {
      id: '1',
      title: 'New Alumni Portal Features Released',
      content: 'We\'re excited to announce several new features in our alumni portal, including enhanced networking capabilities, improved event management, and AI-powered recommendations. Explore these features to make the most of your alumni experience.',
      category: 'Updates',
      author: 'Alumni Relations Team',
      authorRole: 'Administrator',
      authorAvatar: 'AR',
      date: '2024-12-10',
      isPinned: true,
      priority: 'high',
      likes: 45,
      comments: 12,
      views: 340,
      tags: ['Portal', 'Features', 'Technology'],
      isUserAdmin: false
    },
    {
      id: '2',
      title: 'Software Engineering Position at Meta',
      content: 'Meta is looking for experienced software engineers to join their Reality Labs team. This is an excellent opportunity for alumni with VR/AR experience. Competitive salary, equity, and benefits package. Apply through our career portal.',
      category: 'Jobs',
      author: 'Career Services',
      authorRole: 'Career Counselor',
      authorAvatar: 'CS',
      date: '2024-12-08',
      isPinned: false,
      priority: 'medium',
      likes: 28,
      comments: 8,
      views: 156,
      tags: ['Software Engineering', 'Meta', 'VR/AR'],
      expiryDate: '2025-01-15',
      isUserAdmin: false
    },
    {
      id: '3',
      title: 'Annual Homecoming Registration Now Open',
      content: 'Join us for the biggest alumni celebration of the year! Homecoming 2025 features campus tours, networking sessions, keynote speakers, and the traditional football game. Early bird pricing available until December 31st.',
      category: 'Events',
      author: 'Event Coordination',
      authorRole: 'Event Manager',
      authorAvatar: 'EC',
      date: '2024-12-05',
      isPinned: true,
      priority: 'high',
      likes: 87,
      comments: 25,
      views: 520,
      tags: ['Homecoming', 'Registration', 'Campus'],
      expiryDate: '2025-01-20',
      isUserAdmin: false
    },
    {
      id: '4',
      title: 'Alumni Scholarship Fund Update',
      content: 'Thanks to your generous donations, we\'ve reached 85% of our $500K scholarship fund goal! Your contributions are directly helping deserving students access quality education. Every donation makes a difference.',
      category: 'Announcements',
      author: 'Development Office',
      authorRole: 'Fundraising Director',
      authorAvatar: 'DO',
      date: '2024-12-03',
      isPinned: false,
      priority: 'medium',
      likes: 52,
      comments: 15,
      views: 289,
      tags: ['Scholarship', 'Fundraising', 'Impact'],
      isUserAdmin: false
    },
    {
      id: '5',
      title: 'Mentorship Program Expansion',
      content: 'Due to overwhelming success, we\'re expanding our mentorship program! We need more experienced alumni to serve as mentors. If you\'re interested in giving back and shaping the next generation, please sign up.',
      category: 'Opportunities',
      author: 'Mentorship Committee',
      authorRole: 'Program Coordinator',
      authorAvatar: 'MC',
      date: '2024-12-01',
      isPinned: false,
      priority: 'medium',
      likes: 34,
      comments: 9,
      views: 198,
      tags: ['Mentorship', 'Volunteer', 'Giving Back'],
      isUserAdmin: false
    },
    {
      id: '6',
      title: 'System Maintenance Scheduled',
      content: 'The alumni portal will undergo scheduled maintenance on December 15th from 2:00 AM to 6:00 AM EST. During this time, some features may be temporarily unavailable. We apologize for any inconvenience.',
      category: 'Updates',
      author: 'IT Department',
      authorRole: 'System Administrator',
      authorAvatar: 'IT',
      date: '2024-11-28',
      isPinned: false,
      priority: 'urgent',
      likes: 8,
      comments: 3,
      views: 167,
      tags: ['Maintenance', 'System', 'Downtime'],
      expiryDate: '2024-12-16',
      isUserAdmin: false
    }
  ];

  const categories = ['All', 'Events', 'Jobs', 'Updates', 'Announcements', 'Opportunities'];

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const pinnedNotices = filteredNotices.filter(notice => notice.isPinned);
  const regularNotices = filteredNotices.filter(notice => !notice.isPinned);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Events': return 'bg-blue-100 text-blue-700';
      case 'Jobs': return 'bg-green-100 text-green-700';
      case 'Updates': return 'bg-purple-100 text-purple-700';
      case 'Announcements': return 'bg-orange-100 text-orange-700';
      case 'Opportunities': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-700 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'low': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent': return AlertCircle;
      case 'high': return TrendingUp;
      case 'medium': return Info;
      case 'low': return CheckCircle;
      default: return Info;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Events': return Calendar;
      case 'Jobs': return Briefcase;
      case 'Updates': return Bell;
      case 'Announcements': return TrendingUp;
      case 'Opportunities': return Award;
      default: return Info;
    }
  };

  const handleCreateNotice = () => {
    // Mock create notice functionality
    console.log('Creating notice:', newNotice);
    setShowCreateForm(false);
    setNewNotice({
      title: '',
      content: '',
      category: 'Updates',
      priority: 'medium',
      tags: '',
      expiryDate: ''
    });
  };

  const NoticeCard = ({ notice, isPinned = false }: { notice: Notice, isPinned?: boolean }) => {
    const CategoryIcon = getCategoryIcon(notice.category);
    const PriorityIcon = getPriorityIcon(notice.priority);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className={`hover:shadow-lg transition-all duration-300 ${isPinned ? 'ring-2 ring-blue-200 bg-blue-50/50' : ''}`}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                {isPinned && (
                  <Pin className="w-4 h-4 text-blue-600 mt-1" />
                )}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={`${getCategoryColor(notice.category)} border-0`}>
                      <CategoryIcon className="w-3 h-3 mr-1" />
                      {notice.category}
                    </Badge>
                    <Badge className={`${getPriorityColor(notice.priority)} border`}>
                      <PriorityIcon className="w-3 h-3 mr-1" />
                      {notice.priority}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{notice.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{notice.content}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                  {notice.authorAvatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{notice.author}</p>
                <p className="text-xs text-gray-500">{notice.authorRole}</p>
              </div>
              <div className="text-xs text-gray-500 ml-auto">
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(notice.date).toLocaleDateString()}
                </div>
                {notice.expiryDate && (
                  <div className="flex items-center mt-1 text-orange-600">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Expires {new Date(notice.expiryDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>

            {notice.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {notice.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {notice.likes}
                </span>
                <span className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {notice.comments}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {notice.views}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="ghost">
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  Like
                </Button>
                <Button size="sm" variant="ghost">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Comment
                </Button>
                <Button size="sm" variant="ghost">
                  <Share className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PostLoginNavigation onNavigate={onNavigate} onLogout={onLogout} currentPage="noticeboard" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Alumni Noticeboard
            </h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest announcements, opportunities, and community news.
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => setShowCreateForm(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Post New Notice
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filters */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search notices, announcements, and updates..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
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
              </CardContent>
            </Card>

            {/* Create Notice Form */}
            {showCreateForm && (
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Post New Notice</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => setShowCreateForm(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Title</label>
                    <Input
                      placeholder="Enter notice title..."
                      value={newNotice.title}
                      onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Content</label>
                    <Textarea
                      placeholder="Write your notice content..."
                      rows={4}
                      value={newNotice.content}
                      onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <Select value={newNotice.category} onValueChange={(value) => setNewNotice({...newNotice, category: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Events">Events</SelectItem>
                          <SelectItem value="Jobs">Jobs</SelectItem>
                          <SelectItem value="Updates">Updates</SelectItem>
                          <SelectItem value="Announcements">Announcements</SelectItem>
                          <SelectItem value="Opportunities">Opportunities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Priority</label>
                      <Select value={newNotice.priority} onValueChange={(value) => setNewNotice({...newNotice, priority: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tags (comma-separated)</label>
                      <Input
                        placeholder="tag1, tag2, tag3"
                        value={newNotice.tags}
                        onChange={(e) => setNewNotice({...newNotice, tags: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Expiry Date (optional)</label>
                      <Input
                        type="date"
                        value={newNotice.expiryDate}
                        onChange={(e) => setNewNotice({...newNotice, expiryDate: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={handleCreateNotice}
                    >
                      Post Notice
                    </Button>
                    <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pinned Notices */}
            {pinnedNotices.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Pin className="w-6 h-6 mr-2 text-blue-600" />
                  Pinned Notices
                </h2>
                <div className="space-y-4">
                  {pinnedNotices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} isPinned={true} />
                  ))}
                </div>
              </section>
            )}

            {/* Regular Notices */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Notices</h2>
                <Badge variant="secondary">{regularNotices.length} notices</Badge>
              </div>
              <div className="space-y-4">
                {regularNotices.map((notice) => (
                  <NoticeCard key={notice.id} notice={notice} />
                ))}
              </div>
            </section>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8 py-3">
                Load More Notices
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Noticeboard Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Notices</span>
                  <span className="font-semibold">{notices.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pinned</span>
                  <span className="font-semibold">{pinnedNotices.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Your Posts</span>
                  <span className="font-semibold">0</span>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.slice(1).map((category) => {
                  const count = notices.filter(n => n.category === category).length;
                  const CategoryIcon = getCategoryIcon(category);
                  return (
                    <Button 
                      key={category} 
                      variant="ghost" 
                      className="w-full justify-start text-left"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <CategoryIcon className="w-4 h-4 mr-2" />
                      <span className="flex-1">{category}</span>
                      <Badge variant="secondary" className="text-xs">
                        {count}
                      </Badge>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Portal', 'Homecoming', 'Technology', 'Scholarship', 'Networking', 'Career', 'Mentorship', 'Events'].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { action: 'New job posting added', time: '2 hours ago', type: 'job' },
                  { action: 'Homecoming notice updated', time: '4 hours ago', type: 'event' },
                  { action: 'Portal maintenance scheduled', time: '1 day ago', type: 'update' },
                  { action: 'Scholarship fund milestone', time: '2 days ago', type: 'announcement' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <PostLoginFooter />
    </div>
  );
}