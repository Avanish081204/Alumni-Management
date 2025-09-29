import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft,
  Search,
  Filter,
  MapPin,
  Calendar,
  Users,
  Heart,
  DollarSign,
  Handshake,
  Award,
  Building,
  GraduationCap,
  Star,
  MessageCircle,
  UserPlus,
  CheckCircle,
  CreditCard,
  Globe,
  TrendingUp,
  Target,
  BookOpen,
  Megaphone
} from 'lucide-react';

interface FunctionalPagesProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function FunctionalPages({ currentPage, onNavigate }: FunctionalPagesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  if (currentPage === 'networking') {
    const alumni = [
      {
        id: '1',
        name: 'Sarah Chen',
        title: 'Software Engineer at Google',
        location: 'San Francisco, CA',
        graduationYear: '2018',
        degree: 'Computer Science',
        skills: ['React', 'Python', 'Machine Learning'],
        avatar: 'SC',
        connections: 247,
        isConnected: false
      },
      {
        id: '2',
        name: 'Michael Rodriguez',
        title: 'Product Manager at Microsoft',
        location: 'Seattle, WA',
        graduationYear: '2016',
        degree: 'Business Administration',
        skills: ['Product Strategy', 'Analytics', 'Leadership'],
        avatar: 'MR',
        connections: 189,
        isConnected: true
      },
      {
        id: '3',
        name: 'Dr. Aisha Patel',
        title: 'Research Scientist at OpenAI',
        location: 'San Francisco, CA',
        graduationYear: '2015',
        degree: 'Computer Science PhD',
        skills: ['AI Research', 'Deep Learning', 'NLP'],
        avatar: 'AP',
        connections: 312,
        isConnected: false
      },
      {
        id: '4',
        name: 'David Kim',
        title: 'Startup Founder',
        location: 'Austin, TX',
        graduationYear: '2019',
        degree: 'Engineering',
        skills: ['Entrepreneurship', 'Blockchain', 'FinTech'],
        avatar: 'DK',
        connections: 156,
        isConnected: false
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Alumni Network</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search alumni..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                          {person.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{person.name}</h3>
                        <p className="text-gray-600 text-sm">{person.title}</p>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {person.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Class of {person.graduationYear}</span>
                        <span className="text-blue-600">{person.degree}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {person.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t">
                        <span className="text-xs text-gray-500">
                          {person.connections} connections
                        </span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Message
                          </Button>
                          <Button 
                            size="sm" 
                            className={person.isConnected ? "bg-gray-400" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"}
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'events') {
    const events = [
      {
        id: '1',
        title: 'Tech Alumni Networking Night',
        date: 'December 15, 2024',
        time: '6:00 PM - 9:00 PM',
        location: 'San Francisco, CA',
        type: 'Networking',
        attendees: 127,
        image: 'https://images.unsplash.com/photo-1745970747689-52782301cfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzU4MjA4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rsvp: false
      },
      {
        id: '2',
        title: 'Annual Homecoming Celebration',
        date: 'January 20, 2025',
        time: '10:00 AM - 6:00 PM',
        location: 'Main Campus',
        type: 'Social',
        attendees: 2400,
        image: 'https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1ODI1Mzc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rsvp: true
      },
      {
        id: '3',
        title: 'Global Virtual Career Fair',
        date: 'February 5, 2025',
        time: '2:00 PM - 6:00 PM',
        location: 'Online',
        type: 'Career',
        attendees: 850,
        image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4Mjc4NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        rsvp: false
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Alumni Events</h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="my-events">My Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="relative h-48">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-blue-600">{event.type}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees} attendees
                          </div>
                        </div>
                        <Button 
                          className={`w-full ${event.rsvp ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'}`}
                        >
                          {event.rsvp ? 'RSVP\'d ✓' : 'RSVP Now'}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  if (currentPage === 'donations') {
    const donationPrograms = [
      {
        id: '1',
        title: 'Student Scholarship Fund',
        description: 'Support deserving students with financial assistance for their education.',
        raised: 125000,
        goal: 200000,
        donors: 324,
        category: 'Education'
      },
      {
        id: '2',
        title: 'Campus Infrastructure',
        description: 'Help improve campus facilities and learning environments.',
        raised: 75000,
        goal: 150000,
        donors: 156,
        category: 'Infrastructure'
      },
      {
        id: '3',
        title: 'Research Innovation Grant',
        description: 'Fund cutting-edge research projects and innovation initiatives.',
        raised: 90000,
        goal: 120000,
        donors: 89,
        category: 'Research'
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Support Your Alma Mater</h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
              <p className="text-blue-100 mb-6">
                Your contribution helps current and future students achieve their dreams and 
                keeps our institution at the forefront of education and innovation.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold">$847K</div>
                  <div className="text-blue-100 text-sm">Total Raised This Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1,250</div>
                  <div className="text-blue-100 text-sm">Active Donors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">456</div>
                  <div className="text-blue-100 text-sm">Students Supported</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {donationPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{program.category}</Badge>
                      <Heart className="w-5 h-5 text-red-500" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>${program.raised.toLocaleString()} / ${program.goal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          style={{ width: `${(program.raised / program.goal) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{program.donors} donors</span>
                      <span>{Math.round((program.raised / program.goal) * 100)}% funded</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Donate Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'mentorships') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Mentorship Center</h1>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Handshake className="w-4 h-4 mr-2" />
              Become a Mentor
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <Tabs defaultValue="requests" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="requests">Pending Requests</TabsTrigger>
              <TabsTrigger value="active">Active Mentorships</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="opportunities">Find Mentors</TabsTrigger>
            </TabsList>
            
            <TabsContent value="requests" className="space-y-4">
              <div className="grid gap-4">
                {[1, 2, 3].map((_, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            AR
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Alex Rodriguez</h3>
                            <Badge variant="secondary">Computer Science</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Class of 2023 • Looking for career guidance</p>
                          <p className="text-gray-700 mt-2">
                            "I'm a recent graduate looking to transition into the tech industry. 
                            I would appreciate guidance on building a strong portfolio and interview preparation."
                          </p>
                          <div className="flex space-x-3 mt-4">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Accept Request
                            </Button>
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                            <Button size="sm" variant="ghost">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  if (currentPage === 'noticeboard') {
    const announcements = [
      {
        id: '1',
        title: 'New Alumni Directory Features',
        content: 'We\'ve added enhanced search and filtering capabilities to help you connect with fellow alumni more easily.',
        date: '2 days ago',
        type: 'Feature Update',
        important: false
      },
      {
        id: '2',
        title: 'Annual Alumni Survey',
        content: 'Help us improve by participating in our annual alumni satisfaction survey. Your feedback is valuable to us.',
        date: '1 week ago',
        type: 'Survey',
        important: true
      },
      {
        id: '3',
        title: 'University Ranking Achievement',
        content: 'Our university has been ranked #15 in the national engineering programs ranking. Thank you for being part of our success!',
        date: '2 weeks ago',
        type: 'Achievement',
        important: false
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Alumni Noticeboard</h1>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`hover:shadow-lg transition-all duration-300 ${announcement.important ? 'border-amber-200 bg-amber-50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          announcement.important 
                            ? 'bg-amber-100' 
                            : 'bg-gradient-to-r from-blue-100 to-purple-100'
                        }`}>
                          <Megaphone className={`w-6 h-6 ${
                            announcement.important ? 'text-amber-600' : 'text-blue-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-lg">{announcement.title}</h3>
                            {announcement.important && (
                              <Badge className="bg-amber-100 text-amber-800">Important</Badge>
                            )}
                          </div>
                          <Badge variant="secondary" className="mb-3">{announcement.type}</Badge>
                          <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}