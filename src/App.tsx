import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { NewsStoriesPage } from './components/NewsStoriesPage';
import { EventsPage } from './components/EventsPage';
import { AlumniInformationPage } from './components/AlumniInformationPage';
import { MentorshipPage } from './components/MentorshipPage';
import { FundRaisingPage } from './components/FundRaisingPage';
import { GroupsPage } from './components/GroupsPage';
import { AboutPage } from './components/AboutPage';
import { AuthPages } from './components/AuthPages';
import { Dashboard } from './components/Dashboard';
import { ChatPage } from './components/ChatPage';
import { VirtualWorkspacesPage } from './components/VirtualWorkspacesPage';
import { NetworkingPage } from './components/NetworkingPage';
import { PostLoginMentorshipsPage } from './components/PostLoginMentorshipsPage';
import { PostLoginDonationsPage } from './components/PostLoginDonationsPage';
import { PostLoginEventsPage } from './components/PostLoginEventsPage';
import { NoticeboardPage } from './components/NoticeboardPage';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'news-stories' | 'events' | 'alumni-information' | 'mentorship' | 'fund-raising' | 'groups' | 'about' | 'login' | 'signup' | 'forgot-password' | 'dashboard' | 'chat' | 'networking' | 'mentorships' | 'donations' | 'noticeboard' | 'virtual-workspaces';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen">
      {/* Public Pages */}
      {!isLoggedIn && currentPage === 'home' && (
        <HomePage onNavigate={handleNavigation} />
      )}
      
      {!isLoggedIn && currentPage === 'news-stories' && (
        <NewsStoriesPage onNavigate={handleNavigation} />
      )}
      
      {!isLoggedIn && currentPage === 'events' && (
        <EventsPage onNavigate={handleNavigation} />
      )}
      
      {!isLoggedIn && currentPage === 'alumni-information' && (
        <AlumniInformationPage onNavigate={handleNavigation} />
      )}
      
      {!isLoggedIn && currentPage === 'mentorship' && (
        <MentorshipPage onNavigate={handleNavigation} />
      )}
      
      {!isLoggedIn && currentPage === 'fund-raising' && (
        <FundRaisingPage onNavigate={handleNavigation} />
      )}
      
      {!isLoggedIn && currentPage === 'groups' && (
        <GroupsPage onNavigate={handleNavigation} />
      )}
      
      {!isLoggedIn && currentPage === 'about' && (
        <AboutPage onNavigate={handleNavigation} />
      )}
      
      {/* Auth Pages */}
      {(['login', 'signup', 'forgot-password'] as Page[]).includes(currentPage) && (
        <AuthPages 
          currentPage={currentPage} 
          onNavigate={handleNavigation}
          onLogin={handleLogin}
        />
      )}
      
      {/* Protected Pages (Post-Login) */}
      {isLoggedIn && currentPage === 'dashboard' && (
        <Dashboard 
          onNavigate={handleNavigation}
          onLogout={handleLogout}
        />
      )}
      
      {isLoggedIn && currentPage === 'networking' && (
        <NetworkingPage onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
      
      {isLoggedIn && currentPage === 'mentorships' && (
        <PostLoginMentorshipsPage onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
      
      {isLoggedIn && currentPage === 'donations' && (
        <PostLoginDonationsPage onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
      
      {isLoggedIn && currentPage === 'events' && isLoggedIn && (
        <PostLoginEventsPage onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
      
      {isLoggedIn && currentPage === 'noticeboard' && (
        <NoticeboardPage onNavigate={handleNavigation} onLogout={handleLogout} />
      )}
      
      {isLoggedIn && currentPage === 'chat' && (
        <ChatPage onNavigate={handleNavigation} />
      )}
      
      {isLoggedIn && currentPage === 'virtual-workspaces' && (
        <VirtualWorkspacesPage onNavigate={handleNavigation} />
      )}
      
      <Toaster />
    </div>
  );
}