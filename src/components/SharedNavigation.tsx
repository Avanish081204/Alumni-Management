import { Button } from './ui/button';
import { GraduationCap } from 'lucide-react';

interface SharedNavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export function SharedNavigation({ onNavigate, currentPage }: SharedNavigationProps) {
  const navItems = [
    { key: 'news-stories', label: 'News & Stories' },
    { key: 'events', label: 'Events' },
    { key: 'alumni-information', label: 'Alumni Information' },
    { key: 'mentorship', label: 'Mentorship' },
    { key: 'fund-raising', label: 'Fund Raising' },
    { key: 'groups', label: 'Groups' },
    { key: 'about', label: 'About' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AlumniHub
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => onNavigate('login')}
                className="hover:bg-blue-50 transition-colors"
              >
                Login
              </Button>
              <Button 
                onClick={() => onNavigate('signup')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14 overflow-x-auto">
            <div className="flex items-center space-x-8 min-w-max">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`whitespace-nowrap px-3 py-2 rounded-md transition-all duration-200 font-medium ${
                    currentPage === item.key
                      ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export function SharedFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">AlumniHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting graduates worldwide and fostering lifelong relationships.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Directory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-gray-400 mb-4">
              Email: alumni@alumnihub.edu<br />
              Phone:+91 9503658089
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AlumniHub Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}