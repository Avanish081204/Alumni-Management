import { useState } from 'react';
import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Handshake, 
  Star, 
  Calendar, 
  Clock,
  MessageCircle,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  Quote,
  Filter,
  Search
} from 'lucide-react';

interface MentorshipPageProps {
  onNavigate: (page: string) => void;
}

interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  availability: 'Available' | 'Limited' | 'Full';
  rating: number;
  totalMentees: number;
  yearsExperience: number;
  avatar: string;
  bio: string;
  matchScore?: number;
}

interface Testimonial {
  id: string;
  mentee: string;
  mentor: string;
  content: string;
  rating: number;
  year: string;
}

export function MentorshipPage({ onNavigate }: MentorshipPageProps) {
  const [activeTab, setActiveTab] = useState('find-mentor');

  const mentors: Mentor[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      title: 'Senior Engineering Manager',
      company: 'Infosys',
      expertise: ['Software Engineering', 'Career Growth', 'Leadership', 'Technical Interviews'],
      availability: 'Available',
      rating: 4.9,
      totalMentees: 47,
      yearsExperience: 8,
      avatar: 'PS',
      bio: 'Passionate about helping early-career engineers navigate the tech industry and develop leadership skills in the Indian IT ecosystem.',
      matchScore: 95
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      title: 'VP of Product',
      company: 'TCS',
      expertise: ['Product Management', 'Strategy', 'Team Building', 'Digital Transformation'],
      availability: 'Limited',
      rating: 4.8,
      totalMentees: 32,
      yearsExperience: 12,
      avatar: 'RK',
      bio: 'Experienced product leader focused on building world-class products and mentoring the next generation of product managers.',
      matchScore: 88
    },
    {
      id: '3',
      name: 'Dr. Kavya Reddy',
      title: 'Principal Research Scientist',
      company: 'ISRO',
      expertise: ['Space Technology', 'Research Methods', 'Academic Career', 'Project Management'],
      availability: 'Available',
      rating: 5.0,
      totalMentees: 18,
      yearsExperience: 15,
      avatar: 'KR',
      bio: 'Leading space technology researcher committed to advancing Indian space programme and mentoring aspiring scientists.',
      matchScore: 92
    },
    {
      id: '4',
      name: 'Amit Agarwal',
      title: 'Startup Founder & CEO',
      company: 'EduTech Solutions',
      expertise: ['Entrepreneurship', 'Fundraising', 'Business Development', 'Scaling'],
      availability: 'Limited',
      rating: 4.7,
      totalMentees: 23,
      yearsExperience: 10,
      avatar: 'AA',
      bio: 'Serial entrepreneur with multiple successful ventures, passionate about building the Indian startup ecosystem.',
      matchScore: 85
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      mentee: 'Arjun Patel',
      mentor: 'Priya Sharma',
      content: 'Sarah\'s guidance was instrumental in helping me transition from individual contributor to team lead. Her practical advice and regular check-ins made all the difference.',
      rating: 5,
      year: '2024'
    },
    {
      id: '2',
      mentee: 'Maria Garcia',
      mentor: 'Michael Rodriguez',
      content: 'Michael taught me how to think strategically about product decisions. The frameworks he shared have been invaluable in my current PM role.',
      rating: 5,
      year: '2023'
    },
    {
      id: '3',
      mentee: 'James Wilson',
      mentor: 'Dr. Aisha Patel',
      content: 'Aisha helped me navigate the academic research landscape and ultimately land my dream PhD position. Her insights into research methodology were game-changing.',
      rating: 5,
      year: '2024'
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'bg-green-100 text-green-700';
      case 'Limited': return 'bg-amber-100 text-amber-700';
      case 'Full': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavigation onNavigate={onNavigate} currentPage="mentorship" />
      
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
              Alumni Mentorship Program
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect with experienced alumni mentors or share your expertise by becoming a mentor. 
              Build meaningful relationships that drive career growth and success.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                <Handshake className="w-4 h-4 mr-2" />
                Find a Mentor
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Award className="w-4 h-4 mr-2" />
                Become a Mentor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Active Mentors', value: '347', icon: Users },
            { label: 'Successful Matches', value: '1,250', icon: Handshake },
            { label: 'Average Rating', value: '4.8/5', icon: Star },
            { label: 'Success Rate', value: '94%', icon: TrendingUp }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="find-mentor">Find a Mentor</TabsTrigger>
                <TabsTrigger value="become-mentor">Become a Mentor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="find-mentor" className="space-y-8">
                {/* AI Recommended Mentors */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Recommended Mentors for You
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {mentors.filter(mentor => mentor.matchScore && mentor.matchScore > 85).map((mentor) => (
                      <motion.div
                        key={mentor.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4 mb-4">
                              <Avatar className="w-16 h-16">
                                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                                  {mentor.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                                  <div className="flex items-center">
                                    <Star className="w-4 h-4 text-amber-500 mr-1" />
                                    <span className="text-sm text-amber-600">{mentor.matchScore}%</span>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600">{mentor.title}</p>
                                <p className="text-sm text-blue-600">{mentor.company}</p>
                                <Badge className={`${getAvailabilityColor(mentor.availability)} mt-2 border-0 text-xs`}>
                                  {mentor.availability}
                                </Badge>
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-700 mb-4">{mentor.bio}</p>
                            
                            <div className="flex flex-wrap gap-1 mb-4">
                              {mentor.expertise.slice(0, 3).map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {mentor.expertise.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{mentor.expertise.length - 3}
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                              <span className="flex items-center">
                                <Star className="w-3 h-3 mr-1" />
                                {mentor.rating}/5 ({mentor.totalMentees} mentees)
                              </span>
                              <span>{mentor.yearsExperience}+ years experience</span>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="flex-1">
                                <MessageCircle className="w-3 h-3 mr-1" />
                                Message
                              </Button>
                              <Button 
                                size="sm" 
                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                disabled={mentor.availability === 'Full'}
                              >
                                <Handshake className="w-3 h-3 mr-1" />
                                Request Mentorship
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* All Mentors */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">All Available Mentors</h2>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">{mentors.length} mentors</Badge>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mentors.map((mentor) => (
                      <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                {mentor.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium line-clamp-1">{mentor.name}</h3>
                              <p className="text-xs text-gray-600 line-clamp-1">{mentor.title}</p>
                              <div className="flex items-center mt-1">
                                <Star className="w-3 h-3 text-amber-500 mr-1" />
                                <span className="text-xs">{mentor.rating}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {mentor.expertise.slice(0, 2).map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <Badge className={`${getAvailabilityColor(mentor.availability)} mb-3 border-0 text-xs`}>
                            {mentor.availability}
                          </Badge>
                          
                          <Button 
                            size="sm" 
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                            disabled={mentor.availability === 'Full'}
                          >
                            Request Mentorship
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="become-mentor" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Become a Mentor</CardTitle>
                    <CardDescription>
                      Share your expertise and help shape the next generation of professionals in your field.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Share Knowledge</h3>
                        <p className="text-sm text-gray-600">Guide mentees through career challenges and share your professional insights.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Give Back</h3>
                        <p className="text-sm text-gray-600">Contribute to your alma mater community and help fellow alumni succeed.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="w-8 h-8 text-orange-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Recognition</h3>
                        <p className="text-sm text-gray-600">Gain recognition as a thought leader and expand your professional network.</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3">
                        Apply to Become a Mentor
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Quote className="w-5 h-5 mr-2 text-blue-600" />
                  Success Stories
                </CardTitle>
                <CardDescription>
                  Hear from mentees who found success through our program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{testimonial.content}"</p>
                    <div className="text-xs text-gray-500">
                      <strong>{testimonial.mentee}</strong> mentored by <strong>{testimonial.mentor}</strong> • {testimonial.year}
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Read More Stories
                </Button>
              </CardContent>
            </Card>

            {/* Program Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Program Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Monthly Check-ins</p>
                    <p className="text-gray-600">Regular 1-hour sessions with your mentor/mentee</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Goal Setting</p>
                    <p className="text-gray-600">Define clear objectives and track progress</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">6-Month Commitment</p>
                    <p className="text-gray-600">Minimum engagement period for meaningful impact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Platform Support</p>
                    <p className="text-gray-600">Tools and resources to facilitate mentorship</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Mentorship Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Current Mentors</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sessions Completed</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Goals Achieved</span>
                  <span className="font-semibold">5/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Satisfaction Score</span>
                  <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
}