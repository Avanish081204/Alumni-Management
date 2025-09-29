import { motion } from 'motion/react';
import { SharedNavigation, SharedFooter } from './SharedNavigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Smartphone,
  Award,
  TrendingUp,
  Globe,
  Send
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Director of Alumni Relations',
      bio: 'Leading alumni engagement initiatives for over 15 years with a passion for building lifelong connections.',
      avatar: 'SM',
      email: 'sarah.mitchell@educonnect.edu'
    },
    {
      name: 'Michael Chen',
      role: 'Platform Technology Lead',
      bio: 'Former software engineer turned EdTech entrepreneur, committed to innovative alumni solutions.',
      avatar: 'MC',
      email: 'michael.chen@educonnect.edu'
    },
    {
      name: 'Jennifer Rodriguez',
      role: 'Community Manager',
      bio: 'Expert in building and nurturing online communities with a focus on meaningful connections.',
      avatar: 'JR',
      email: 'jennifer.rodriguez@educonnect.edu'
    },
    {
      name: 'David Park',
      role: 'Data Analytics Manager',
      bio: 'Specialist in alumni engagement analytics and AI-driven recommendation systems.',
      avatar: 'DP',
      email: 'david.park@educonnect.edu'
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: '15,000+ Alumni Connected',
      description: 'Building bridges across generations and geographies'
    },
    {
      icon: Award,
      title: 'Award-Winning Platform',
      description: 'Recognized for excellence in alumni engagement technology'
    },
    {
      icon: TrendingUp,
      title: '94% Satisfaction Rate',
      description: 'Consistently high ratings from our alumni community'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting alumni across 67 countries worldwide'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SharedNavigation onNavigate={onNavigate} currentPage="about" />
      
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
              About EduConnect Alumni
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're dedicated to building the world's most vibrant and connected alumni community, 
              fostering lifelong relationships and creating opportunities for growth and collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To create a thriving global community where alumni can connect, collaborate, and contribute 
                    to their alma mater's continued success. We believe in the power of relationships to transform 
                    careers, advance knowledge, and make a positive impact on the world.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be the premier platform for alumni engagement, setting the standard for how educational 
                    institutions connect with their graduates and how alumni support current students and each other 
                    throughout their professional journeys.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Our Values</h2>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Connection:</strong> Building meaningful relationships that last a lifetime</li>
                    <li>• <strong>Innovation:</strong> Leveraging technology to enhance alumni experiences</li>
                    <li>• <strong>Impact:</strong> Creating positive change in communities worldwide</li>
                    <li>• <strong>Excellence:</strong> Maintaining the highest standards in everything we do</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738949538812-aebbb54a0592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc1ODI1Mzc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alumni community"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating milestones that reflect our commitment to alumni success and community building
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind the EduConnect Alumni platform
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Mail className="w-3 h-3 mr-1" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Have questions or suggestions? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Downloads */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">alumni@educonnect.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-600">123 University Ave<br />City, State 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Downloads */}
            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>
                  Download our resources and mobile app
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Alumni Platform Brochure (PDF)
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Community Guidelines (PDF)
                </Button>
                
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-3">Mobile Apps</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Download for iOS
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Download for Android
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  All times are in Eastern Time Zone
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <SharedFooter />
    </div>
  );
}