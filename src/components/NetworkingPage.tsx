import { useState } from 'react';
import { motion } from 'motion/react';
import { PostLoginNavigation, PostLoginFooter } from './PostLoginNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Star,
  MessageCircle,
  UserPlus,
  CheckCircle,
  Users,
  TrendingUp,
  Eye,
  Video,
  Phone,
  Calendar
} from 'lucide-react';

interface NetworkingPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

interface AlumniProfile {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  graduationYear: string;
  degree: string;
  avatar: string;
  skills: string[];
  connections: number;
  isConnected: boolean;
  industry: string;
  matchScore?: number;
  isOnline: boolean;
  mutualConnections: number;
}

export function NetworkingPage({ onNavigate, onLogout }: NetworkingPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const alumni: AlumniProfile[] = [
    {
      id: '1',
      name: 'Dr. Michael Rodriguez',
      title: 'VP of Product',
      company: 'Microsoft',
      location: 'Seattle, WA',
      graduationYear: '2016',
      degree: 'Computer Science',
      avatar: 'MR',
      skills: ['Product Management', 'Strategy', 'Leadership', 'AI'],
      connections: 2847,
      isConnected: false,
      industry: 'Technology',
      matchScore: 95,
      isOnline: true,
      mutualConnections: 23
    },
    {
      id: '2',
      name: 'Dr. Aisha Patel',
      title: 'Principal Research Scientist',
      company: 'OpenAI',
      location: 'San Francisco, CA',
      graduationYear: '2015',
      degree: 'Computer Science PhD',
      avatar: 'AP',
      skills: ['AI Research', 'Deep Learning', 'NLP', 'Research'],
      connections: 1892,
      isConnected: true,
      industry: 'Research',
      matchScore: 92,
      isOnline: false,
      mutualConnections: 15
    },
    {
      id: '3',
      name: 'David Kim',
      title: 'Startup Founder & CEO',
      company: 'FinTech Innovations',
      location: 'Austin, TX',
      graduationYear: '2019',
      degree: 'Engineering',
      avatar: 'DK',
      skills: ['Entrepreneurship', 'Blockchain', 'FinTech', 'Leadership'],
      connections: 1456,
      isConnected: false,
      industry: 'Finance',
      matchScore: 88,
      isOnline: true,
      mutualConnections: 8
    },
    {
      id: '4',
      name: 'Emily Johnson',
      title: 'Marketing Director',
      company: 'Tesla',
      location: 'Austin, TX',
      graduationYear: '2017',
      degree: 'Marketing',
      avatar: 'EJ',
      skills: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking', 'Analytics'],
      connections: 2103,
      isConnected: false,
      industry: 'Automotive',
      matchScore: 85,
      isOnline: false,
      mutualConnections: 12
    },
    {
      id: '5',
      name: 'James Wilson',
      title: 'Investment Partner',
      company: 'Sequoia Capital',
      location: 'Menlo Park, CA',
      graduationYear: '2014',
      degree: 'Finance',
      avatar: 'JW',
      skills: ['Venture Capital', 'Investment', 'Due Diligence', 'Startups'],
      connections: 3267,
      isConnected: true,
      industry: 'Finance',
      matchScore: 82,
      isOnline: true,
      mutualConnections: 31
    },
    {
      id: '6',
      name: 'Lisa Zhang',
      title: 'Head of Engineering',
      company: 'Stripe',
      location: 'San Francisco, CA',
      graduationYear: '2018',
      degree: 'Computer Science',
      avatar: 'LZ',
      skills: ['Engineering Leadership', 'Distributed Systems', 'Payments', 'Scaling'],
      connections: 1876,
      isConnected: false,
      industry: 'Technology',
      matchScore: 90,
      isOnline: true,
      mutualConnections: 19
    }
  ];

  const suggestedConnections = alumni
    .filter(person => !person.isConnected && person.matchScore && person.matchScore > 85)
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
    .slice(0, 3);

  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = !selectedYear || person.graduationYear === selectedYear;
    const matchesDegree = !selectedDegree || person.degree === selectedDegree;
    const matchesLocation = !selectedLocation || person.location.includes(selectedLocation);
    const matchesIndustry = !selectedIndustry || person.industry === selectedIndustry;
    
    return matchesSearch && matchesYear && matchesDegree && matchesLocation && matchesIndustry;
  });

  const years = Array.from({ length: 15 }, (_, i) => (2024 - i).toString());
  const degrees = ['Computer Science', 'Business Administration', 'Engineering', 'Finance', 'Marketing', 'Medicine', 'Law'];
  const locations = ['San Francisco, CA', 'Seattle, WA', 'Austin, TX', 'New York, NY', 'Boston, MA', 'Chicago, IL'];
  const industries = ['Technology', 'Finance', 'Healthcare', 'Automotive', 'Research', 'Education'];

  const clearFilters = () => {
    setSelectedYear('');
    setSelectedDegree('');
    setSelectedLocation('');
    setSelectedIndustry('');
    setSearchTerm('');
  };

  const startVideoCall = (personName: string) => {
    // Mock video call functionality
    alert(`Starting video call with ${personName}...`);
  };

  const sendMessage = (personName: string) => {
    // Navigate to chat with pre-selected person
    onNavigate('chat');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PostLoginNavigation onNavigate={onNavigate} onLogout={onLogout} currentPage="networking" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Alumni Networking
          </h1>
          <p className="text-xl text-gray-600">
            Connect with fellow graduates, expand your professional network, and discover collaboration opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filters */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    Search Alumni
                  </span>
                  <Button variant="ghost" onClick={clearFilters} className="text-sm">
                    Clear All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search by name, company, or role..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Graduation Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={year}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedDegree} onValueChange={setSelectedDegree}>
                    <SelectTrigger>
                      <SelectValue placeholder="Degree/Program" />
                    </SelectTrigger>
                    <SelectContent>
                      {degrees.map(degree => (
                        <SelectItem key={degree} value={degree}>{degree}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map(industry => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Search Results */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Alumni Profiles</h2>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{filteredAlumni.length} profiles found</Badge>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="year">Graduation Year</SelectItem>
                    <SelectItem value="connections">Most Connected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Alumni Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredAlumni.map((person, index) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="relative">
                          <Avatar className="w-16 h-16">
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                              {person.avatar}
                            </AvatarFallback>
                          </Avatar>
                          {person.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg line-clamp-1">{person.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-1">{person.title}</p>
                          <p className="text-sm text-blue-600 line-clamp-1">{person.company}</p>
                          <div className="flex items-center mt-2 space-x-4">
                            {person.matchScore && (
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-amber-500 mr-1" />
                                <span className="text-xs text-amber-600">{person.matchScore}% match</span>
                              </div>
                            )}
                            {person.mutualConnections > 0 && (
                              <span className="text-xs text-gray-500">{person.mutualConnections} mutual</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {person.location}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {person.degree} • Class of {person.graduationYear}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {person.industry}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {person.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {person.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{person.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {person.connections.toLocaleString()} connections
                        </span>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          View Profile
                        </Button>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => sendMessage(person.name)}
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Message
                        </Button>
                        {person.isOnline && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => startVideoCall(person.name)}
                          >
                            <Video className="w-3 h-3" />
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          className={`flex-1 ${person.isConnected 
                            ? 'bg-gray-400 hover:bg-gray-500' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                          }`}
                          disabled={person.isConnected}
                        >
                          {person.isConnected ? (
                            <>
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Connected
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-3 h-3 mr-1" />
                              Connect
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="px-8 py-3">
                Load More Profiles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* AI Suggested Connections */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-amber-500" />
                  AI Suggested Connections
                </CardTitle>
                <CardDescription>
                  High-potential connections based on your profile and interests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedConnections.map((person) => (
                  <div key={person.id} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {person.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {person.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-1">{person.name}</h4>
                      <p className="text-xs text-gray-600 line-clamp-1">{person.title}</p>
                      <p className="text-xs text-blue-600 line-clamp-1">{person.company}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-amber-500 mr-1" />
                          <span className="text-xs text-amber-600">{person.matchScore}% match</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={() => sendMessage(person.name)}>
                            <MessageCircle className="w-3 h-3" />
                          </Button>
                          <Button size="sm" className="h-6 text-xs px-2 bg-gradient-to-r from-blue-600 to-purple-600">
                            Connect
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Suggestions
                </Button>
              </CardContent>
            </Card>

            {/* Network Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Network</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Connections</span>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Network Growth</span>
                  <Badge className="bg-green-100 text-green-700">+12 this month</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Profile Views</span>
                  <Badge className="bg-blue-100 text-blue-700">+25% this week</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Messages Sent</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Video Calls</span>
                  <span className="font-semibold">5</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => onNavigate('chat')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start New Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Browse Groups
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Popular Industries */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Industries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Technology', count: 4230, percentage: 32 },
                  { name: 'Finance', count: 2890, percentage: 22 },
                  { name: 'Healthcare', count: 2156, percentage: 16 },
                  { name: 'Consulting', count: 1432, percentage: 11 }
                ].map((industry) => (
                  <div key={industry.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{industry.name}</span>
                      <span className="text-gray-500">{industry.count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${industry.percentage}%` }}
                      ></div>
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