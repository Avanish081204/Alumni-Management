import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  Calendar, 
  Heart, 
  Award, 
  ChevronRight,
  Network,
  Handshake,
  DollarSign,
  BookOpen,
  Globe,
  Star
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { label: 'Active Alumni', value: '25,847', icon: Users },
    { label: 'Pan-India Events', value: '345', icon: Calendar },
    { label: 'Total Donations', value: '₹18.4 Cr', icon: Heart },
    { label: 'Success Stories', value: '2,130', icon: Award }
  ];

  const features = [
    {
      icon: Network,
      title: 'Alumni Directory',
      description: 'Connect with fellow graduates across India and expand your professional network.'
    },
    {
      icon: Handshake,
      title: 'Mentorship Program',
      description: 'Give back or seek guidance through our structured mentor-mentee matching system.'
    },
    {
      icon: Calendar,
      title: 'Pan-India Events',
      description: 'Attend regional meetups, tech talks, and our annual reunion celebrations.'
    },
    {
      icon: DollarSign,
      title: 'Donation Platform',
      description: 'Support current students and institutional development through secure contributions.'
    },
    {
      icon: BookOpen,
      title: 'Career Journey',
      description: 'Share your professional growth story and inspire juniors.'
    },
    {
      icon: Globe,
      title: 'AI Recommendations',
      description: 'Get personalised suggestions for connections, events, and career opportunities.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Senior Software Engineer at Infosys',
      year: 'B.Tech 2018',
      content: 'The mentorship programme connected me with incredible professionals who guided my career journey.',
      avatar: 'PS'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Entrepreneur & Startup Founder',
      year: 'M.Tech 2015',
      content: 'Alumni network helped me find my co-founder and secure our first funding round.',
      avatar: 'RK'
    },
    {
      name: 'Dr. Kavya Reddy',
      role: 'Research Scientist at ISRO',
      year: 'Ph.D 2012',
      content: 'This platform keeps me connected with my alma mater and fellow graduates across India.',
      avatar: 'KR'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Tech Alumni Networking',
      date: 'Dec 15, 2024',
      location: 'Bangalore, Karnataka',
      attendees: 187
    },
    {
      title: 'Annual Alumni Meet',
      date: 'Jan 20, 2025',
      location: 'Main Campus',
      attendees: 3200
    },
    {
      title: 'Virtual Reunion Meetup',
      date: 'Feb 5, 2025',
      location: 'Online',
      attendees: 1250
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SharedNavigation onNavigate={onNavigate} currentPage="home" />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1ODI1Mzc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="University graduation ceremony"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ textShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)' }}>
              Stay Connected.
              <br />
              Grow Together.
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Centralised Alumni Data Management & Engagement Platform. Connect with thousands of graduates across India, 
              access mentorship opportunities, and build lasting professional relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => onNavigate('signup')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 transition-all transform hover:scale-105"
              >
                Create Account
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onNavigate('login')}
                className="text-lg px-8 py-6 border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Alumni Login
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to stay connected with your alma mater and fellow graduates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Upcoming Events
                </span>
              </h2>
              <p className="text-xl text-gray-600">Connect with fellow alumni at these exciting events</p>
            </div>
            <Button variant="outline" className="hover:bg-blue-50" onClick={() => onNavigate('events')}>
              View All Events
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0">
                        {event.date}
                      </Badge>
                      <span className="text-sm text-gray-500">{event.attendees} attending</span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="flex items-center text-gray-600">
                      <Globe className="w-4 h-4 mr-2" />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      RSVP Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alumni Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600">Hear from our global community of graduates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-blue-600">Class of {testimonial.year}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}