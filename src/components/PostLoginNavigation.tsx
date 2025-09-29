import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { 
  GraduationCap, 
  Bell, 
  MessageCircle, 
  ChevronDown,
  Settings,
  LogOut,
  User
} from 'lucide-react';

interface PostLoginNavigationProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
  currentPage?: string;
}

export function PostLoginNavigation({ onNavigate, onLogout, currentPage }: PostLoginNavigationProps) {
  const [notificationCount] = useState(3);
  const [messageCount] = useState(5);

  const navItems = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'networking', label: 'Networking' },
    { key: 'mentorships', label: 'Mentorships' },
    { key: 'donations', label: 'Donations' },
    { key: 'events', label: 'Events' },
    { key: 'noticeboard', label: 'Noticeboard' }
  ];

  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduConnect
              </span>
            </div>
            
            {/* Navigation Items */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
                    currentPage === item.key
                      ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side - Notifications, Messages, Profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                  {notificationCount}
                </Badge>
              )}
            </Button>

            {/* Messages */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => onNavigate('chat')}
            >
              <MessageCircle className="w-5 h-5" />
              {messageCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center p-0">
                  {messageCount}
                </Badge>
              )}
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 hover:bg-blue-50">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm">
                      SC
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium">Sarah Chen</div>
                    <div className="text-xs text-gray-500">Software Engineer at Google</div>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate('profile')}>
                  <User className="w-4 h-4 mr-2" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('settings')}>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout} className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PostLoginFooter() {
  return (
    <footer className="bg-gray-50 border-t py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">EduConnect Alumni</span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting graduates worldwide and fostering lifelong relationships.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Networking</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Mentorships</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <p className="text-sm text-gray-600 mb-3">
              Email: support@educonnect.edu<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 EduConnect Alumni Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}