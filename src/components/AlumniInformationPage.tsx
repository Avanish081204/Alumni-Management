import { useState } from 'react';
import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
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
  Eye
} from 'lucide-react';

interface AlumniInformationPageProps {
  onNavigate: (page: string) => void;
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
}

export function AlumniInformationPage({ onNavigate }: AlumniInformationPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const alumni: AlumniProfile[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'San Francisco, CA',
      graduationYear: '2018',
      degree: 'Computer Science',
      avatar: 'SC',
      skills: ['React', 'Python', 'Machine Learning', 'System Design'],
      connections: 247,
      isConnected: false,
      industry: 'Technology',
      matchScore: 95
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Seattle, WA',
      graduationYear: '2016',
      degree: 'Business Administration',
      avatar: 'MR',
      skills: ['Product Strategy', 'Analytics', 'Leadership', 'Agile'],
      connections: 189,
      isConnected: true,
      industry: 'Technology',
      matchScore: 88
    },
    {
      id: '3',
      name: 'Dr. Aisha Patel',
      title: 'Research Scientist',
      company: 'OpenAI',
      location: 'San Francisco, CA',
      graduationYear: '2015',
      degree: 'Computer Science PhD',
      avatar: 'AP',
      skills: ['AI Research', 'Deep Learning', 'NLP', 'Research'],
      connections: 312,
      isConnected: false,
      industry: 'Research',
      matchScore: 92
    },
    {
      id: '4',
      name: 'David Kim',
      title: 'Startup Founder & CEO',
      company: 'FinTech Innovations',
      location: 'Austin, TX',
      graduationYear: '2019',
      degree: 'Engineering',
      avatar: 'DK',
      skills: ['Entrepreneurship', 'Blockchain', 'FinTech', 'Leadership'],
      connections: 156,
      isConnected: false,
      industry: 'Finance',
      matchScore: 78
    },
    {
      id: '5',
      name: 'Emily Johnson',
      title: 'Marketing Director',
      company: 'Tesla',
      location: 'Austin, TX',
      graduationYear: '2017',
      degree: 'Marketing',
      avatar: 'EJ',
      skills: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking', 'Analytics'],
      connections: 203,
      isConnected: false,
      industry: 'Automotive',
      matchScore: 85
    },
    {
      id: '6',
      name: 'James Wilson',
      title: 'Investment Banker',
      company: 'Goldman Sachs',
      location: 'New York, NY',
      graduationYear: '2014',
      degree: 'Finance',
      avatar: 'JW',
      skills: ['Investment Banking', 'Financial Analysis', 'M&A', 'Valuation'],
      connections: 267,
      isConnected: true,
      industry: 'Finance',
      matchScore: 76
    }
  ];

  const suggestedConnections = alumni
    .filter(person => !person.isConnected && person.matchScore && person.matchScore > 80)
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

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavigation onNavigate={onNavigate} currentPage="alumni-information" />
      
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
              Alumni Directory
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect with thousands of graduates worldwide. Find mentors, collaborators, 
              and expand your professional network within our alumni community.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search by name, company, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Filters */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </span>
                  <Button variant="ghost" onClick={clearFilters} className="text-sm">
                    Clear All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                            {person.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg line-clamp-1">{person.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-1">{person.title}</p>
                          <p className="text-sm text-blue-600 line-clamp-1">{person.company}</p>
                          {person.matchScore && (
                            <div className="flex items-center mt-1">
                              <Star className="w-3 h-3 text-amber-500 mr-1" />
                              <span className="text-xs text-amber-600">{person.matchScore}% match</span>
                            </div>
                          )}
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
                          {person.connections} connections
                        </span>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          View Profile
                        </Button>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Message
                        </Button>
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
                  Suggested Alumni to Connect With
                </CardTitle>
                <CardDescription>
                  AI-powered recommendations based on your profile, interests, and career goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedConnections.map((person) => (
                  <div key={person.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {person.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-1">{person.name}</h4>
                      <p className="text-xs text-gray-600 line-clamp-1">{person.title}</p>
                      <p className="text-xs text-blue-600 line-clamp-1">{person.company}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-3 h-3 text-amber-500 mr-1" />
                        <span className="text-xs text-amber-600">{person.matchScore}% match</span>
                      </div>
                      <Button size="sm" className="mt-2 text-xs bg-gradient-to-r from-blue-600 to-purple-600">
                        Connect
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Suggestions
                </Button>
              </CardContent>
            </Card>

            {/* Directory Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Directory Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Alumni</span>
                  <span className="font-semibold">15,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Countries</span>
                  <span className="font-semibold">67</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Industries</span>
                  <span className="font-semibold">28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Your Connections</span>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Profile Views</span>
                  <Badge className="bg-green-100 text-green-700">+15% this month</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Popular Industries */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Industries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Technology', count: 4230, percentage: 27 },
                  { name: 'Finance', count: 2890, percentage: 18 },
                  { name: 'Healthcare', count: 2156, percentage: 14 },
                  { name: 'Education', count: 1675, percentage: 11 },
                  { name: 'Consulting', count: 1432, percentage: 9 }
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

      <SharedFooter />
    </div>
  );
}