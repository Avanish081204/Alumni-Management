import { useState } from 'react';
import { motion } from 'motion/react';
import { PostLoginNavigation, PostLoginFooter } from './PostLoginNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
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
  Search,
  Video,
  FileText,
  Target,
  BookOpen,
  Briefcase,
  Plus,
  ArrowRight
} from 'lucide-react';

interface PostLoginMentorshipsPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
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
  isOnline: boolean;
}

interface MentorshipSession {
  id: string;
  mentorName: string;
  mentorAvatar: string;
  date: string;
  time: string;
  topic: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  duration: string;
  notes?: string;
}

interface MentorshipGoal {
  id: string;
  title: string;
  description: string;
  progress: number;
  targetDate: string;
  status: 'in-progress' | 'completed' | 'paused';
}

export function PostLoginMentorshipsPage({ onNavigate, onLogout }: PostLoginMentorshipsPageProps) {
  const [activeTab, setActiveTab] = useState('find-mentor');

  const mentors: Mentor[] = [
    {
      id: '1',
      name: 'Dr. Michael Rodriguez',
      title: 'VP of Product',
      company: 'Microsoft',
      expertise: ['Product Management', 'Strategy', 'Team Building', 'Innovation'],
      availability: 'Available',
      rating: 4.9,
      totalMentees: 47,
      yearsExperience: 12,
      avatar: 'MR',
      bio: 'Experienced product leader focused on building world-class products and mentoring the next generation of PMs.',
      matchScore: 95,
      isOnline: true
    },
    {
      id: '2',
      name: 'Dr. Aisha Patel',
      title: 'Principal Research Scientist',
      company: 'OpenAI',
      expertise: ['AI Research', 'Machine Learning', 'Academic Career', 'Research Methods'],
      availability: 'Limited',
      rating: 5.0,
      totalMentees: 18,
      yearsExperience: 15,
      avatar: 'AP',
      bio: 'Leading AI researcher committed to advancing the field and mentoring aspiring researchers.',
      matchScore: 92,
      isOnline: false
    },
    {
      id: '3',
      name: 'Sarah Chen',
      title: 'Senior Engineering Manager',
      company: 'Google',
      expertise: ['Software Engineering', 'Career Growth', 'Leadership', 'Tech Interviews'],
      availability: 'Available',
      rating: 4.8,
      totalMentees: 32,
      yearsExperience: 8,
      avatar: 'SC',
      bio: 'Passionate about helping early-career engineers navigate the tech industry and develop leadership skills.',
      matchScore: 88,
      isOnline: true
    }
  ];

  const mySessions: MentorshipSession[] = [
    {
      id: '1',
      mentorName: 'Dr. Michael Rodriguez',
      mentorAvatar: 'MR',
      date: '2024-12-20',
      time: '2:00 PM',
      topic: 'Product Strategy & Roadmapping',
      status: 'upcoming',
      duration: '60 min'
    },
    {
      id: '2',
      mentorName: 'Sarah Chen',
      mentorAvatar: 'SC',
      date: '2024-12-15',
      time: '3:00 PM',
      topic: 'Career Growth Planning',
      status: 'completed',
      duration: '45 min',
      notes: 'Great session! Discussed promotion timeline and skills development.'
    },
    {
      id: '3',
      mentorName: 'Dr. Aisha Patel',
      mentorAvatar: 'AP',
      date: '2024-12-25',
      time: '10:00 AM',
      topic: 'Research Methodology',
      status: 'upcoming',
      duration: '90 min'
    }
  ];

  const myGoals: MentorshipGoal[] = [
    {
      id: '1',
      title: 'Technical Leadership Skills',
      description: 'Develop skills to lead technical teams and projects effectively',
      progress: 75,
      targetDate: '2025-03-01',
      status: 'in-progress'
    },
    {
      id: '2',
      title: 'Product Management Transition',
      description: 'Learn product management fundamentals to transition from engineering',
      progress: 45,
      targetDate: '2025-06-01',
      status: 'in-progress'
    },
    {
      id: '3',
      title: 'Public Speaking Confidence',
      description: 'Improve presentation skills and confidence in public speaking',
      progress: 100,
      targetDate: '2024-12-01',
      status: 'completed'
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getGoalStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'paused': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PostLoginNavigation onNavigate={onNavigate} onLogout={onLogout} currentPage="mentorships" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mentorship Hub
          </h1>
          <p className="text-xl text-gray-600">
            Connect with experienced mentors, track your growth, and achieve your career goals.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Mentors', value: '3', icon: Users, color: 'text-blue-600' },
            { label: 'Sessions Completed', value: '8', icon: CheckCircle, color: 'text-green-600' },
            { label: 'Goals Achieved', value: '5', icon: Target, color: 'text-purple-600' },
            { label: 'Hours Mentored', value: '12', icon: Clock, color: 'text-orange-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="find-mentor">Find Mentors</TabsTrigger>
                <TabsTrigger value="my-sessions">My Sessions</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
                <TabsTrigger value="workspace">Workspace</TabsTrigger>
              </TabsList>
              
              <TabsContent value="find-mentor" className="space-y-6">
                {/* AI Recommended Mentors */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Recommended Mentors for You
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mentors.map((mentor, index) => (
                      <motion.div
                        key={mentor.id}
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
                                    {mentor.avatar}
                                  </AvatarFallback>
                                </Avatar>
                                {mentor.isOnline && (
                                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                                )}
                              </div>
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
                            
                            <p className="text-sm text-gray-700 mb-4 line-clamp-2">{mentor.bio}</p>
                            
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
                              <span>{mentor.yearsExperience}+ years exp</span>
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
                                Request
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="my-sessions" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">My Mentorship Sessions</h2>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule Session
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {mySessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Avatar className="w-12 h-12">
                                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                  {session.mentorAvatar}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-lg">{session.topic}</h3>
                                <p className="text-sm text-gray-600">with {session.mentorName}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                  <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {new Date(session.date).toLocaleDateString()}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {session.time} • {session.duration}
                                  </span>
                                </div>
                                {session.notes && (
                                  <p className="text-sm text-gray-600 mt-2 italic">"{session.notes}"</p>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge className={`${getStatusColor(session.status)} border-0`}>
                                {session.status.replace('-', ' ')}
                              </Badge>
                              {session.status === 'upcoming' && (
                                <div className="flex space-x-2">
                                  <Button size="sm" variant="outline">
                                    <Video className="w-3 h-3 mr-1" />
                                    Join
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    Reschedule
                                  </Button>
                                </div>
                              )}
                              {session.status === 'completed' && (
                                <Button size="sm" variant="outline">
                                  <FileText className="w-3 h-3 mr-1" />
                                  Notes
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="goals" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Mentorship Goals</h2>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Goal
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {myGoals.map((goal, index) => (
                    <motion.div
                      key={goal.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg">{goal.title}</h3>
                                <Badge className={`${getGoalStatusColor(goal.status)} border-0`}>
                                  {goal.status.replace('-', ' ')}
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-4">{goal.description}</p>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Progress</span>
                                  <span>{goal.progress}%</span>
                                </div>
                                <Progress value={goal.progress} className="h-3" />
                              </div>
                              
                              <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                                <span>Target Date: {new Date(goal.targetDate).toLocaleDateString()}</span>
                                <Button size="sm" variant="outline">
                                  Update Progress
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="workspace" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Virtual Workspace</h2>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => onNavigate('virtual-workspaces')}
                  >
                    Open Full Workspace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Document Sharing</h3>
                      <p className="text-sm text-gray-600 mb-4">Share and collaborate on documents with your mentors</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Upload Document
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Video className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Video Calls</h3>
                      <p className="text-sm text-gray-600 mb-4">Schedule and join video calls with mentors</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Start Call
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Task Tracking</h3>
                      <p className="text-sm text-gray-600 mb-4">Track progress on mentorship tasks and assignments</p>
                      <Button size="sm" variant="outline" className="w-full">
                        View Tasks
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-sm text-gray-600">Overall Progress</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Goals Completed</span>
                    <span className="font-semibold">5/7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sessions This Month</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Mentor Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 mr-1" />
                      <span className="font-semibold">4.8/5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mySessions.filter(session => session.status === 'upcoming').slice(0, 2).map((session) => (
                  <div key={session.id} className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                          {session.mentorAvatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-1">{session.topic}</h4>
                        <p className="text-xs text-gray-600">{session.mentorName}</p>
                        <p className="text-xs text-gray-500">{new Date(session.date).toLocaleDateString()} at {session.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Sessions
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Mentor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Update Goals
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Become Mentor
                </Button>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Quote className="w-5 h-5 mr-2 text-purple-600" />
                  Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">"The mentorship program helped me transition from engineering to product management successfully!"</p>
                  <p className="text-xs text-gray-500">- Alex Johnson, Class of 2020</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Read More Stories
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <PostLoginFooter />
    </div>
  );
}