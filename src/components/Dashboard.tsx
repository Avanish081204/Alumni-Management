import { useState } from 'react';
import { motion } from 'motion/react';
import { PostLoginNavigation, PostLoginFooter } from './PostLoginNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Bell,
  Calendar,
  DollarSign,
  GraduationCap,
  Heart,
  LogOut,
  MessageCircle,
  Network,
  Settings,
  TrendingUp,
  User,
  Users,
  Handshake,
  Award,
  Target,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  Plus,
  BookOpen,
  Briefcase
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Dashboard({ onNavigate, onLogout }: DashboardProps) {
  const [currentTab, setCurrentTab] = useState('overview');

  const userData = {
    name: 'Sarah Chen',
    title: 'Software Engineer at Google',
    graduationYear: '2018',
    degree: 'Computer Science',
    location: 'San Francisco, CA',
    profileCompletion: 85
  };

  const quickStats = [
    { label: 'Connections', value: '247', icon: Users, change: '+12' },
    { label: 'Events Attended', value: '18', icon: Calendar, change: '+3' },
    { label: 'Mentees', value: '5', icon: Handshake, change: '+2' },
    { label: 'Donations', value: '$2,500', icon: Heart, change: '+$500' }
  ];

  const upcomingEvents = [
    {
      title: 'Tech Alumni Networking',
      date: 'Dec 15, 2024',
      time: '6:00 PM',
      location: 'San Francisco, CA',
      attendees: 127,
      rsvp: false
    },
    {
      title: 'Annual Homecoming',
      date: 'Jan 20, 2025',
      time: '10:00 AM',
      location: 'Main Campus',
      attendees: 2400,
      rsvp: true
    },
    {
      title: 'Virtual Career Fair',
      date: 'Feb 5, 2025',
      time: '2:00 PM',
      location: 'Online',
      attendees: 850,
      rsvp: false
    }
  ];

  const mentorshipRequests = [
    {
      name: 'Alex Rodriguez',
      degree: 'Computer Science',
      year: '2023',
      message: 'Looking for guidance in transitioning to tech industry',
      avatar: 'AR'
    },
    {
      name: 'Emily Johnson',
      degree: 'Business',
      year: '2024',
      message: 'Seeking mentorship for startup ventures',
      avatar: 'EJ'
    }
  ];

  const aiRecommendations = [
    {
      type: 'Connection',
      title: 'Connect with Michael Kim',
      description: 'Software Engineer at Meta, graduated 2017',
      reason: 'Similar career path and location'
    },
    {
      type: 'Event',
      title: 'Women in Tech Meetup',
      description: 'Dec 20, 2024 in Palo Alto',
      reason: 'Based on your interests'
    },
    {
      type: 'Opportunity',
      title: 'Guest Speaker Opportunity',
      description: 'CS Department seeking industry speakers',
      reason: 'Your expertise matches their needs'
    }
  ];

  const notifications = [
    {
      type: 'event',
      message: 'New event: Tech Alumni Networking',
      time: '2 hours ago',
      unread: true
    },
    {
      type: 'mentorship',
      message: 'Alex Rodriguez sent a mentorship request',
      time: '5 hours ago',
      unread: true
    },
    {
      type: 'connection',
      message: 'Michael Kim accepted your connection request',
      time: '1 day ago',
      unread: false
    },
    {
      type: 'message',
      message: 'New message from Emily Johnson',
      time: '2 days ago',
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PostLoginNavigation onNavigate={onNavigate} onLogout={onLogout} currentPage="dashboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Welcome back, {userData.name}!</h1>
                    <p className="text-blue-100 mb-4">
                      {userData.title} • Class of {userData.graduationYear}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-blue-100">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {userData.location}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {userData.degree}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-1">{userData.profileCompletion}%</div>
                    <div className="text-blue-100 text-sm mb-2">Profile Complete</div>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="bg-white/20 hover:bg-white/30 border-0"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="w-8 h-8 text-blue-600" />
                        <Badge variant="secondary" className="text-green-600 bg-green-50">
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Main Dashboard Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upcoming Events */}
              <Card className="col-span-full lg:col-span-1">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Upcoming Events
                    </CardTitle>
                    <CardDescription>Events you might be interested in</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => onNavigate('events')}>
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.location}
                          </span>
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          {event.attendees} attendees
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant={event.rsvp ? "secondary" : "default"}
                        className={event.rsvp ? "bg-green-100 text-green-700" : ""}
                      >
                        {event.rsvp ? 'RSVP\'d' : 'RSVP'}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Mentorship Requests */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Handshake className="w-5 h-5 mr-2 text-purple-600" />
                      Mentorship Requests
                    </CardTitle>
                    <CardDescription>Students seeking your guidance</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => onNavigate('mentorships')}>
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mentorshipRequests.map((request, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                            {request.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">{request.name}</h4>
                            <span className="text-xs text-gray-500">Class of {request.year}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">{request.degree}</div>
                          <p className="text-sm text-gray-700 mb-3">{request.message}</p>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Accept
                            </Button>
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-amber-600" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>Personalized suggestions based on your profile and activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {aiRecommendations.map((rec, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <Badge variant="secondary" className="mb-2">{rec.type}</Badge>
                      <h4 className="font-semibold text-gray-900 mb-1">{rec.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                      <p className="text-xs text-blue-600 mb-3">{rec.reason}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Learn More
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{userData.profileCompletion}%</span>
                    </div>
                    <Progress value={userData.profileCompletion} className="h-2" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Basic information completed
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Professional details added
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                      Add profile photo
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                      Complete skills section
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-blue-600" />
                  Notifications
                </CardTitle>
                <Badge variant="secondary">{notifications.filter(n => n.unread).length}</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.slice(0, 4).map((notification, index) => (
                  <div key={index} className={`p-3 rounded-lg ${notification.unread ? 'bg-blue-50' : 'bg-gray-50'}`}>
                    <div className="flex items-start space-x-2">
                      {notification.unread && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="w-5 h-5 mr-2 text-purple-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => onNavigate('networking')}>
                  <Network className="w-4 h-4 mr-2" />
                  Find Alumni
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => onNavigate('events')}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Browse Events
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => onNavigate('donations')}>
                  <Heart className="w-4 h-4 mr-2" />
                  Make Donation
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => onNavigate('chat')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
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