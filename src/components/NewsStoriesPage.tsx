import { useState } from 'react';
import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  TrendingUp, 
  Award,
  Briefcase,
  BookOpen,
  ChevronRight,
  Clock,
  Eye
} from 'lucide-react';

interface NewsStoriesPageProps {
  onNavigate: (page: string) => void;
}

interface Story {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'Career' | 'Events' | 'Achievements' | 'Articles';
  author: string;
  date: string;
  image: string;
  readTime: string;
  views: number;
  featured: boolean;
}

export function NewsStoriesPage({ onNavigate }: NewsStoriesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories: Story[] = [
    {
      id: '1',
      title: 'Alumni Startup Raises $50M Series B Round',
      summary: 'Sarah Chen, Class of 2018, leads her AI company to major funding milestone with groundbreaking machine learning platform.',
      content: 'Sarah Chen, a Computer Science graduate from the Class of 2018, has successfully raised $50 million in Series B funding for her artificial intelligence startup, TechVision AI. The company, which she founded just three years ago, has developed a revolutionary machine learning platform that helps businesses automate complex decision-making processes...',
      category: 'Career',
      author: 'Alumni Relations Team',
      date: '2024-12-10',
      image: 'https://images.unsplash.com/photo-1661286178389-e067299f907e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwb2ZmaWNlfGVufDF8fHx8MTc1ODI5MjMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
      views: 1245,
      featured: true
    },
    {
      id: '2',
      title: 'Annual Homecoming Sets New Attendance Record',
      summary: 'Over 3,000 alumni returned to campus for the largest homecoming celebration in university history.',
      content: 'This year\'s Annual Homecoming celebration welcomed over 3,000 alumni back to campus, setting a new attendance record. The weekend featured keynote speeches, networking sessions, campus tours, and the traditional homecoming football game...',
      category: 'Events',
      author: 'Event Coordination Team',
      date: '2024-12-08',
      image: 'https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1ODI1Mzc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '3 min read',
      views: 892,
      featured: true
    },
    {
      id: '3',
      title: 'Dr. Michael Rodriguez Wins Nobel Prize in Medicine',
      summary: 'Class of 2005 alumnus receives highest honor for groundbreaking research in gene therapy.',
      content: 'Dr. Michael Rodriguez, a distinguished alumnus from the Class of 2005, has been awarded the Nobel Prize in Physiology or Medicine for his pioneering work in gene therapy. His research has led to breakthrough treatments for previously incurable genetic disorders...',
      category: 'Achievements',
      author: 'Academic Affairs',
      date: '2024-12-05',
      image: 'https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtbmklMjBzdWNjZXNzJTIwc3Rvcnl8ZW58MXx8fHwxNzU4MjkyMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '7 min read',
      views: 2103,
      featured: false
    },
    {
      id: '4',
      title: 'The Future of Remote Work: Alumni Perspectives',
      summary: 'Industry leaders share insights on how the workplace has evolved and what lies ahead.',
      content: 'As remote work continues to reshape the professional landscape, we spoke with several alumni who are leading this transformation. From Fortune 500 CEOs to startup founders, our graduates share their perspectives on the future of work...',
      category: 'Articles',
      author: 'Alumni Magazine',
      date: '2024-12-03',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4Mjc4NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '10 min read',
      views: 678,
      featured: false
    },
    {
      id: '5',
      title: 'Tech Innovation Summit Features Alumni Speakers',
      summary: 'Leading alumni technologists share insights at industry\'s premier innovation conference.',
      content: 'The annual Tech Innovation Summit featured an impressive lineup of alumni speakers who are driving technological advancement across various industries. The conference highlighted emerging trends in AI, blockchain, and sustainable technology...',
      category: 'Events',
      author: 'Tech Relations',
      date: '2024-12-01',
      image: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgyNTI3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 min read',
      views: 534,
      featured: false
    },
    {
      id: '6',
      title: 'Alumni Mentorship Program Reaches 1000 Connections',
      summary: 'Milestone achievement in connecting current students with successful graduates.',
      content: 'Our Alumni Mentorship Program has successfully facilitated over 1,000 meaningful connections between current students and accomplished graduates. This program has become a cornerstone of our career development initiatives...',
      category: 'Achievements',
      author: 'Career Services',
      date: '2024-11-28',
      image: 'https://images.unsplash.com/photo-1745970747689-52782301cfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzU4MjA4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '4 min read',
      views: 756,
      featured: false
    }
  ];

  const categories = ['All', 'Career', 'Events', 'Achievements', 'Articles'];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredStories = stories.filter(story => story.featured);
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Career': return <Briefcase className="w-4 h-4" />;
      case 'Events': return <Calendar className="w-4 h-4" />;
      case 'Achievements': return <Award className="w-4 h-4" />;
      case 'Articles': return <BookOpen className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Career': return 'bg-blue-100 text-blue-700';
      case 'Events': return 'bg-purple-100 text-purple-700';
      case 'Achievements': return 'bg-amber-100 text-amber-700';
      case 'Articles': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavigation onNavigate={onNavigate} currentPage="news-stories" />
      
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
              Alumni News & Stories
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest achievements, events, and inspiring stories 
              from our global alumni community.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Stories */}
        {featuredStories.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Stories
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                    <div className="relative">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getCategoryColor(story.category)} border-0`}>
                          <span className="flex items-center space-x-1">
                            {getCategoryIcon(story.category)}
                            <span>{story.category}</span>
                          </span>
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="secondary" className="bg-black/50 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{story.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{story.summary}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {story.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(story.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {story.readTime}
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {story.views}
                          </span>
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            onClick={() => setSelectedStory(story)}
                          >
                            Read More
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{story.title}</DialogTitle>
                            <DialogDescription>
                              Read the full story about {story.title}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <ImageWithFallback
                              src={story.image}
                              alt={story.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <Badge className={`${getCategoryColor(story.category)} border-0`}>
                                {story.category}
                              </Badge>
                              <span>By {story.author}</span>
                              <span>{new Date(story.date).toLocaleDateString()}</span>
                              <span>{story.readTime}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{story.content}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Category Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold">All Stories</h2>
            <Badge variant="secondary">{filteredStories.length} stories</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${selectedCategory === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'hover:bg-blue-50'
                  } transition-all`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                <div className="relative">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getCategoryColor(story.category)} border-0 text-xs`}>
                      <span className="flex items-center space-x-1">
                        {getCategoryIcon(story.category)}
                        <span>{story.category}</span>
                      </span>
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">{story.summary}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{new Date(story.date).toLocaleDateString()}</span>
                    <div className="flex items-center space-x-2">
                      <span>{story.readTime}</span>
                      <span>•</span>
                      <span>{story.views} views</span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => setSelectedStory(story)}
                      >
                        Read More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{story.title}</DialogTitle>
                        <DialogDescription>
                          Read the full story about {story.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <ImageWithFallback
                          src={story.image}
                          alt={story.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <Badge className={`${getCategoryColor(story.category)} border-0`}>
                            {story.category}
                          </Badge>
                          <span>By {story.author}</span>
                          <span>{new Date(story.date).toLocaleDateString()}</span>
                          <span>{story.readTime}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{story.content}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="px-8 py-3 hover:bg-blue-50 transition-colors"
          >
            Load More Stories
          </Button>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
}