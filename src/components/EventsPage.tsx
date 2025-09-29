import { useState } from 'react';
import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Plus,
  Star,
  Bookmark,
  Share,
  CalendarPlus,
  Filter,
  Search,
  Globe
} from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'Networking' | 'Social' | 'Career' | 'Academic' | 'Virtual';
  attendees: number;
  maxAttendees?: number;
  image: string;
  organizer: string;
  rsvpStatus: 'none' | 'attending' | 'interested';
  featured: boolean;
  tags: string[];
}

export function EventsPage({ onNavigate }: EventsPageProps) {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: 'Tech Alumni Networking Evening',
      description: 'Join fellow tech professionals for an evening of networking, knowledge sharing, and career insights. Connect with industry leaders from top IT companies and discover new opportunities.',
      date: '2024-12-15',
      time: '6:00 PM - 9:00 PM',
      location: 'Bengaluru, Karnataka',
      type: 'Networking',
      attendees: 187,
      maxAttendees: 250,
      image: 'https://images.unsplash.com/photo-1745970747689-52782301cfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzU4MjA4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      organizer: 'Tech Alumni Chapter',
      rsvpStatus: 'none',
      featured: true,
      tags: ['Technology', 'Networking', 'Career']
    },
    {
      id: '2',
      title: 'Annual Alumni Reunion',
      description: 'Come back home for our biggest celebration of the year! Reconnect with batchmates, tour updated facilities, and celebrate our shared legacy.',
      date: '2025-01-20',
      time: '10:00 AM - 6:00 PM',
      location: 'Main Campus',
      type: 'Social',
      attendees: 3200,
      maxAttendees: 4000,
      image: 'https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1ODI1Mzc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      organizer: 'Alumni Relations Cell',
      rsvpStatus: 'attending',
      featured: true,
      tags: ['Reunion', 'Cultural', 'Campus']
    },
    {
      id: '3',
      title: 'Virtual Placement Drive',
      description: 'Connect with top employers across India in this virtual placement drive. Perfect for freshers and experienced professionals seeking new opportunities.',
      date: '2025-02-05',
      time: '2:00 PM - 6:00 PM',
      location: 'Online',
      type: 'Virtual',
      attendees: 1250,
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4Mjc4NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      organizer: 'Training & Placement Cell',
      rsvpStatus: 'interested',
      featured: false,
      tags: ['Placement', 'Virtual', 'Career']
    },
    {
      id: '4',
      title: 'Startup India Workshop Series',
      description: 'Learn from successful alumni entrepreneurs in this intensive workshop series covering startup fundamentals, funding, and scaling strategies in the Indian ecosystem.',
      date: '2025-02-12',
      time: '9:00 AM - 5:00 PM',
      location: 'Innovation Hub, Hyderabad',
      type: 'Academic',
      attendees: 65,
      maxAttendees: 80,
      image: 'https://images.unsplash.com/photo-1661286178389-e067299f907e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwb2ZmaWNlfGVufDF8fHx8MTc1ODI5MjMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      organizer: 'Entrepreneurship Development Cell',
      rsvpStatus: 'none',
      featured: false,
      tags: ['Entrepreneurship', 'Workshop', 'Startup India']
    }
  ];

  const pastEvents: Event[] = [
    {
      id: '5',
      title: 'Alumni Excellence Awards Night',
      description: 'Celebrated outstanding achievements of our alumni community with awards ceremony and networking reception.',
      date: '2024-11-15',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Ballroom, Mumbai',
      type: 'Social',
      attendees: 450,
      image: 'https://images.unsplash.com/photo-1659080925666-16001612bc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtbmklMjBzdWNjZXNzJTIwc3Rvcnl8ZW58MXx8fHwxNzU4MjkyMzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      organizer: 'Alumni Relations',
      rsvpStatus: 'attending',
      featured: false,
      tags: ['Awards', 'Gala', 'Excellence']
    },
    {
      id: '6',
      title: 'AI & Machine Learning Summit',
      description: 'Featured leading AI researchers and practitioners sharing insights on the latest developments in artificial intelligence and Industry 4.0.',
      date: '2024-10-20',
      time: '9:00 AM - 5:00 PM',
      location: 'IIT Delhi Conference Center',
      type: 'Academic',
      attendees: 320,
      image: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTgyNTI3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      organizer: 'AI Research Group',
      rsvpStatus: 'attending',
      featured: false,
      tags: ['AI', 'Technology', 'Research']
    }
  ];

  const recommendedEvents = upcomingEvents.slice(0, 3);

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

  const getRSVPStatus = (status: string) => {
    switch (status) {
      case 'attending': return { text: 'Attending', color: 'bg-green-600' };
      case 'interested': return { text: 'Interested', color: 'bg-amber-600' };
      default: return { text: 'RSVP', color: 'bg-gradient-to-r from-blue-600 to-purple-600' };
    }
  };

  const EventCard = ({ event, showPastStatus = false }: { event: Event, showPastStatus?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
        <div className="relative">
          <ImageWithFallback
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4 flex space-x-2">
            <Badge className={`${getEventTypeColor(event.type)} border-0`}>
              {event.type}
            </Badge>
            {event.featured && (
              <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-0">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold line-clamp-2">{event.title}</h3>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
          
          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
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
              {event.maxAttendees && ` / ${event.maxAttendees} max`}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {event.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-2">
            {!showPastStatus ? (
              <>
                <Button
                  className={`flex-1 ${getRSVPStatus(event.rsvpStatus).color} text-white hover:opacity-90`}
                  disabled={event.rsvpStatus === 'attending' || event.rsvpStatus === 'interested'}
                >
                  {getRSVPStatus(event.rsvpStatus).text}
                </Button>
                <Button variant="outline" size="sm">
                  <CalendarPlus className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button variant="outline" className="flex-1" disabled>
                Event Completed
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavigation onNavigate={onNavigate} currentPage="events" />
      
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
              Alumni Events
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover networking opportunities, technical workshops, and cultural gatherings 
              designed to keep our alumni community connected and thriving across India.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Filter className="w-4 h-4 mr-2" />
                Filter Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              
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
                    <Badge variant="secondary">{upcomingEvents.length} events</Badge>
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
            {/* AI Recommended Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-amber-500" />
                  Recommended for You
                </CardTitle>
                <CardDescription>
                  AI-powered event suggestions based on your interests and profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedEvents.map((event) => (
                  <div key={event.id} className="flex space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">{event.title}</h4>
                      <div className="text-xs text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Recommendations
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Event Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Events This Month</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Your RSVPs</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Events Attended</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Networking Score</span>
                  <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Event Types */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {['Networking', 'Social', 'Career', 'Academic', 'Virtual'].map((type) => (
                  <Button key={type} variant="ghost" className="w-full justify-start text-left">
                    <Badge className={`${getEventTypeColor(type)} mr-2 border-0`}>
                      {type}
                    </Badge>
                    <span className="flex-1">{type} Events</span>
                    <span className="text-sm text-gray-500">
                      {type === 'Social' ? '8' : type === 'Networking' ? '6' : '3'}
                    </span>
                  </Button>
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