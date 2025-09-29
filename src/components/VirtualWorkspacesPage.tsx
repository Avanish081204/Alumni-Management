import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { 
  ArrowLeft,
  Users, 
  Plus, 
  FileText, 
  Video,
  Calendar,
  CheckSquare,
  Star,
  Clock,
  Target,
  Briefcase,
  Code,
  Lightbulb,
  TrendingUp,
  MessageCircle,
  Share,
  Settings
} from 'lucide-react';

interface VirtualWorkspacesPageProps {
  onNavigate: (page: string) => void;
}

interface Workspace {
  id: string;
  name: string;
  description: string;
  type: 'Project' | 'Research' | 'Startup' | 'Study Group' | 'Networking';
  members: number;
  progress: number;
  dueDate: string;
  isActive: boolean;
  recentActivity: string;
  tools: string[];
  matchScore?: number;
}

interface Task {
  id: string;
  title: string;
  assignee: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export function VirtualWorkspacesPage({ onNavigate }: VirtualWorkspacesPageProps) {
  const [activeTab, setActiveTab] = useState('my-workspaces');

  const workspaces: Workspace[] = [
    {
      id: '1',
      name: 'AI Healthcare Solutions',
      description: 'Developing machine learning models to improve patient diagnosis and treatment outcomes.',
      type: 'Research',
      members: 8,
      progress: 75,
      dueDate: '2025-03-15',
      isActive: true,
      recentActivity: 'Sarah uploaded new dataset',
      tools: ['Jupyter', 'Google Drive', 'Slack', 'Zoom'],
      matchScore: 95
    },
    {
      id: '2',
      name: 'EduTech Startup Incubator',
      description: 'Collaborative workspace for alumni working on education technology startups.',
      type: 'Startup',
      members: 12,
      progress: 45,
      dueDate: '2025-06-01',
      isActive: true,
      recentActivity: 'New pitch deck shared',
      tools: ['Figma', 'Notion', 'Discord', 'Google Meet'],
      matchScore: 88
    },
    {
      id: '3',
      name: 'Climate Tech Innovation Lab',
      description: 'Research and development of sustainable technology solutions for environmental challenges.',
      type: 'Project',
      members: 15,
      progress: 60,
      dueDate: '2025-04-30',
      isActive: true,
      recentActivity: 'Michael scheduled team meeting',
      tools: ['GitHub', 'Slack', 'Figma', 'Zoom'],
      matchScore: 82
    },
    {
      id: '4',
      name: 'Alumni Mentorship Network',
      description: 'Building connections between recent graduates and experienced professionals.',
      type: 'Networking',
      members: 45,
      progress: 30,
      dueDate: '2025-05-15',
      isActive: false,
      recentActivity: 'New mentee applications reviewed',
      tools: ['Calendly', 'Zoom', 'Google Workspace'],
      matchScore: 76
    }
  ];

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Complete market research analysis',
      assignee: 'You',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-12-20'
    },
    {
      id: '2',
      title: 'Review prototype designs',
      assignee: 'Sarah Chen',
      status: 'todo',
      priority: 'medium',
      dueDate: '2024-12-22'
    },
    {
      id: '3',
      title: 'Update project documentation',
      assignee: 'Michael Rodriguez',
      status: 'completed',
      priority: 'low',
      dueDate: '2024-12-18'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Project': return 'bg-blue-100 text-blue-700';
      case 'Research': return 'bg-purple-100 text-purple-700';
      case 'Startup': return 'bg-green-100 text-green-700';
      case 'Study Group': return 'bg-amber-100 text-amber-700';
      case 'Networking': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Project': return Briefcase;
      case 'Research': return Lightbulb;
      case 'Startup': return TrendingUp;
      case 'Study Group': return Users;
      case 'Networking': return MessageCircle;
      default: return Target;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'todo': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('dashboard')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold">Virtual Workspaces</h1>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Workspace
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="my-workspaces">My Workspaces</TabsTrigger>
                <TabsTrigger value="discover">Discover</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-workspaces" className="space-y-6">
                {/* Active Workspaces */}
                <section>
                  <h2 className="text-2xl font-bold mb-6">Active Workspaces</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {workspaces.filter(ws => ws.isActive).map((workspace, index) => {
                      const TypeIcon = getTypeIcon(workspace.type);
                      return (
                        <motion.div
                          key={workspace.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                    <TypeIcon className="w-6 h-6 text-blue-600" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-lg">{workspace.name}</h3>
                                    <Badge className={`${getTypeColor(workspace.type)} border-0 text-xs mt-1`}>
                                      {workspace.type}
                                    </Badge>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <Settings className="w-4 h-4" />
                                </Button>
                              </div>
                              
                              <p className="text-gray-600 mb-4 line-clamp-2">{workspace.description}</p>
                              
                              <div className="mb-4">
                                <div className="flex justify-between text-sm mb-2">
                                  <span>Progress</span>
                                  <span>{workspace.progress}%</span>
                                </div>
                                <Progress value={workspace.progress} className="h-2" />
                              </div>
                              
                              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                <span className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {workspace.members} members
                                </span>
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  Due {new Date(workspace.dueDate).toLocaleDateString()}
                                </span>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                <div className="text-xs text-gray-600 mb-1">Recent Activity:</div>
                                <div className="text-sm">{workspace.recentActivity}</div>
                              </div>
                              
                              <div className="flex flex-wrap gap-1 mb-4">
                                {workspace.tools.slice(0, 3).map((tool) => (
                                  <Badge key={tool} variant="outline" className="text-xs">
                                    {tool}
                                  </Badge>
                                ))}
                                {workspace.tools.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{workspace.tools.length - 3} more
                                  </Badge>
                                )}
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button size="sm" className="flex-1">
                                  Enter Workspace
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Share className="w-3 h-3" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="discover" className="space-y-6">
                {/* AI Recommended Workspaces */}
                <section>
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Recommended Workspaces
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workspaces.filter(ws => ws.matchScore && ws.matchScore > 75).map((workspace, index) => {
                      const TypeIcon = getTypeIcon(workspace.type);
                      return (
                        <motion.div
                          key={workspace.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="hover:shadow-lg transition-all duration-300 h-full">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-3">
                                <TypeIcon className="w-8 h-8 text-blue-600" />
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-amber-500 mr-1" />
                                  <span className="text-sm text-amber-600">{workspace.matchScore}%</span>
                                </div>
                              </div>
                              
                              <h3 className="font-semibold mb-2 line-clamp-1">{workspace.name}</h3>
                              <Badge className={`${getTypeColor(workspace.type)} mb-3 border-0 text-xs`}>
                                {workspace.type}
                              </Badge>
                              
                              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{workspace.description}</p>
                              
                              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                <span>{workspace.members} members</span>
                                <span>{workspace.progress}% complete</span>
                              </div>
                              
                              <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                                <Plus className="w-3 h-3 mr-1" />
                                Join Workspace
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>
              </TabsContent>
              
              <TabsContent value="archived">
                <Card>
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">No Archived Workspaces</h3>
                    <p className="text-gray-600">Your completed and archived workspaces will appear here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Workspace
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Video className="w-4 h-4 mr-2" />
                  Schedule Team Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Share Document
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Invite Collaborators
                </Button>
              </CardContent>
            </Card>

            {/* Your Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2" />
                  Your Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm line-clamp-2">{task.title}</h4>
                      <Badge className={`${getPriorityColor(task.priority)} border-0 text-xs ml-2`}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <Badge className={`${getStatusColor(task.status)} border-0`}>
                        {task.status.replace('-', ' ')}
                      </Badge>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Tasks
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { action: 'Sarah Chen uploaded new dataset', time: '2 hours ago', workspace: 'AI Healthcare' },
                  { action: 'Michael scheduled team meeting', time: '4 hours ago', workspace: 'Climate Tech' },
                  { action: 'New pitch deck shared', time: '1 day ago', workspace: 'EduTech Startup' },
                  { action: 'Task completed by John', time: '2 days ago', workspace: 'AI Healthcare' }
                ].map((activity, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm">{activity.action}</div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                      <span>{activity.workspace}</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Workspace Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Workspaces</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Completed Projects</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Collaborators</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Productivity Score</span>
                  <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}