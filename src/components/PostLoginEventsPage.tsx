import { useState } from 'react';
import { motion } from 'motion/react';
import { PostLoginNavigation, PostLoginFooter } from './PostLoginNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar } from './ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  Users, 
  Plus,
  Star,
  Video,
  Globe,
  Filter,
  Search,
  Check,
  X,
  UserCheck,
  Bell
} from 'lucide-react';

interface PostLoginEventsPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  type: 'Networking' | 'Social' | 'Career' | 'Academic' | 'Virtual';
  attendees: number;
  maxAttendees?: number;
  speakers: Array<{
    name: string;
    title: string;
    avatar: string;
  }>;
  organizer: string;
  rsvpStatus: 'none' | 'attending' | 'interested' | 'declined';
  featured: boolean;
  tags: string[];
  liveLink?: string;
  isRecurring: boolean;
}

export function PostLoginEventsPage({ onNavigate, onLogout }: PostLoginEventsPageProps) {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: 'Tech Alumni Networking Night',
      description: 'Join fellow tech professionals for an evening of networking, knowledge sharing, and career insights. Connect with industry leaders and discover new opportunities in the evolving tech landscape.',
      date: '2024-12-15',
      time: '6:00 PM',
      endTime: '9:00 PM',
      location: 'San Francisco, CA',
      type: 'Networking',
      attendees: 127,
      maxAttendees: 200,
      speakers: [
        { name: 'Sarah Chen', title: 'Engineering Manager at Google', avatar: 'SC' },
        { name: 'Michael Rodriguez', title: 'VP of Product at Microsoft', avatar: 'MR' }
      ],
      organizer: 'Tech Alumni Chapter',
      rsvpStatus: 'attending',
      featured: true,
      tags: ['Technology', 'Networking', 'Career'],
      isRecurring: false
    },
    {
      id: '2',
      title: 'AI & Machine Learning Summit',
      description: 'Explore the latest developments in AI and ML with leading researchers and practitioners. Learn about cutting-edge applications and future trends.',
      date: '2024-12-20',
      time: '9:00 AM',
      endTime: '5:00 PM',
      location: 'Online',
      type: 'Virtual',
      attendees: 350,
      speakers: [
        { name: 'Dr. Aisha Patel', title: 'Principal Research Scientist at OpenAI', avatar: 'AP' },
        { name: 'David Kim', title: 'AI Research Director', avatar: 'DK' }
      ],
      organizer: 'AI Research Group',
      rsvpStatus: 'interested',
      featured: true,
      tags: ['AI', 'Technology', 'Research'],
      liveLink: 'https://meet.google.com/abc-def-ghi',
      isRecurring: false
    },
    {
      id: '3',
      title: 'Annual Homecoming Celebration',
      description: 'Come back home for our biggest celebration of the year! Reconnect with classmates, tour updated facilities, and celebrate our shared legacy.',
      date: '2025-01-20',
      time: '10:00 AM',
      endTime: '6:00 PM',
      location: 'Main Campus',
      type: 'Social',
      attendees: 2400,
      maxAttendees: 3000,
      speakers: [
        { name: 'President Johnson', title: 'University President', avatar: 'PJ' },
        { name: 'Alumni Board', title: 'Distinguished Alumni Panel', avatar: 'AB' }
      ],
      organizer: 'Alumni Relations',
      rsvpStatus: 'none',
      featured: true,
      tags: ['Homecoming', 'Social', 'Campus'],
      isRecurring: true
    },
    {
      id: '4',
      title: 'Career Development Workshop',
      description: 'Enhance your professional skills with expert-led workshops on leadership, communication, and career advancement strategies.',
      date: '2025-02-05',
      time: '2:00 PM',
      endTime: '5:00 PM',
      location: 'Online',
      type: 'Career',
      attendees: 85,
      maxAttendees: 100,
      speakers: [
        { name: 'Lisa Zhang', title: 'Career Coach & Consultant', avatar: 'LZ' }
      ],
      organizer: 'Career Services',
      rsvpStatus: 'none',
      featured: false,
      tags: ['Career', 'Workshop', 'Skills'],
      liveLink: 'https://zoom.us/j/123456789',
      isRecurring: true
    }
  ];

  const pastEvents: Event[] = [
    {
      id: '5',
      title: 'Alumni Excellence Awards Gala',
      description: 'Celebrated outstanding achievements of our alumni community with awards ceremony and networking reception.',
      date: '2024-11-15',
      time: '7:00 PM',
      endTime: '11:00 PM',
      location: 'Grand Ballroom, Downtown',
      type: 'Social',
      attendees: 450,
      speakers: [],
      organizer: 'Alumni Relations',
      rsvpStatus: 'attending',
      featured: false,
      tags: ['Awards', 'Gala', 'Excellence'],
      isRecurring: true
    }
  ];

  const recommendedEvents = upcomingEvents.filter(event => event.featured || event.type === 'Networking').slice(0, 3);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Networking': return 'bg-blue-100 text-blue-700';
      case 'Social': return 'bg-purple-100 text-purple-700';
      case 'Career': return 'bg-green-100 text-green-700';
      case 'Academic': return 'bg-amber-100 text-amber-700';
      case 'Virtual': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRSVPColor = (status: string) => {
    switch (status) {
      case 'attending': return 'bg-green-100 text-green-700';
      case 'interested': return 'bg-amber-100 text-amber-700';
      case 'declined': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const updateRSVP = (eventId: string, status: 'attending' | 'interested' | 'declined') => {
    // Mock RSVP update functionality
    console.log(`Updated RSVP for event ${eventId} to ${status}`);
  };

  const EventCard = ({ event, showPastStatus = false }: { event: Event, showPastStatus?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex space-x-2">
              <Badge className={`${getEventTypeColor(event.type)} border-0`}>
                {event.type}
              </Badge>
              {event.featured && (
                <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              {event.isRecurring && (
                <Badge variant="outline" className="text-xs">
                  Recurring
                </Badge>
              )}
            </div>
            <Badge className={`${getRSVPColor(event.rsvpStatus)} border-0 text-xs`}>
              {event.rsvpStatus === 'none' ? 'No RSVP' : event.rsvpStatus}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{event.description}</p>
          
          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {event.time} - {event.endTime}
            </div>
            <div className="flex items-center">
              {event.type === 'Virtual' ? (
                <Globe className="w-4 h-4 mr-2" />
              ) : (
                <MapPin className="w-4 h-4 mr-2" />
              )}
              {event.location}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              {event.attendees} attendees
              {event.maxAttendees && ` / ${event.maxAttendees} max`}
            </div>
          </div>

          {/* Speakers */}
          {event.speakers.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Speakers:</p>
              <div className="flex flex-wrap gap-2">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                        {speaker.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs font-medium">{speaker.name}</p>
                      <p className="text-xs text-gray-600">{speaker.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1 mb-4">
            {event.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {!showPastStatus ? (
            <div className="space-y-2">
              {event.liveLink && (
                <Button variant="outline" size="sm" className="w-full">
                  <Video className="w-3 h-3 mr-1" />
                  Join Live Event
                </Button>
              )}
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className={`flex-1 ${event.rsvpStatus === 'attending' ? 'bg-green-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}
                  onClick={() => updateRSVP(event.id, 'attending')}
                >
                  <Check className="w-3 h-3 mr-1" />
                  {event.rsvpStatus === 'attending' ? 'Attending' : 'Attend'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className={`flex-1 ${event.rsvpStatus === 'interested' ? 'bg-amber-100 text-amber-700' : ''}`}
                  onClick={() => updateRSVP(event.id, 'interested')}
                >
                  <Star className="w-3 h-3 mr-1" />
                  {event.rsvpStatus === 'interested' ? 'Interested' : 'Maybe'}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => updateRSVP(event.id, 'declined')}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1" disabled>
                Event Completed
              </Button>
              <Button variant="outline" size="sm">
                View Recording
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <PostLoginNavigation onNavigate={onNavigate} onLogout={onLogout} currentPage="events" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Alumni Events
          </h1>
          <p className="text-xl text-gray-600">
            Discover, attend, and engage with events designed to keep our alumni community connected.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <div className="flex items-center justify-between">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </div>
              
              <TabsContent value="upcoming" className="space-y-8">
                {/* Featured Events */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Featured Events
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    {upcomingEvents.filter(event => event.featured).map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>

                {/* All Upcoming Events */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">All Upcoming Events</h2>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">{upcomingEvents.length} events</Badge>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="past" className="space-y-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Past Events</h2>
                  <Badge variant="secondary">{pastEvents.length} events</Badge>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} showPastStatus={true} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Calendar Widget */}
            <Card>
              <CardHeader>
                <CardTitle>Event Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* AI Recommended Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-amber-500" />
                  Recommended for You
                </CardTitle>
                <CardDescription>
                  AI-powered event suggestions based on your interests and activity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedEvents.map((event) => (
                  <div key={event.id} className="flex space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      {event.type === 'Virtual' ? (
                        <Globe className="w-6 h-6 text-blue-600" />
                      ) : (
                        <CalendarIcon className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">{event.title}</h4>
                      <div className="text-xs text-gray-600 mt-1">
                        <div className="flex items-center">
                          <CalendarIcon className="w-3 h-3 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center mt-1">
                          <Users className="w-3 h-3 mr-1" />
                          {event.attendees} attending
                        </div>
                      </div>
                      <Button size="sm" className="mt-2 h-6 text-xs bg-gradient-to-r from-blue-600 to-purple-600">
                        RSVP
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Recommendations
                </Button>
              </CardContent>
            </Card>

            {/* Your Event Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Event Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Events This Month</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Attended</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Upcoming RSVPs</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Attendance Rate</span>
                  <Badge className="bg-green-100 text-green-700">94%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Favorite Type</span>
                  <Badge className="bg-blue-100 text-blue-700">Networking</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Event Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-blue-600" />
                  Event Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm">Tech Networking Night</p>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">Tomorrow</Badge>
                  </div>
                  <p className="text-xs text-gray-600">6:00 PM • San Francisco, CA</p>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm">AI Summit</p>
                    <Badge className="bg-purple-100 text-purple-700 text-xs">Dec 20</Badge>
                  </div>
                  <p className="text-xs text-gray-600">9:00 AM • Online Event</p>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Manage Notifications
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