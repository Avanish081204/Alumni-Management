import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PostLoginNavigation } from "./PostLoginNavigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import {
  ArrowLeft,
  Search,
  Send,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  Users,
  User,
  MessageCircle,
  Clock,
  Check,
  CheckCheck,
} from "lucide-react";

interface ChatPageProps {
  onNavigate: (page: string) => void;
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  type: "individual" | "group";
  graduationYear?: string;
  currentRole?: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  status: "sent" | "delivered" | "read";
  type: "text" | "image" | "file";
}

export function ChatPage({ onNavigate }: ChatPageProps) {
  const [selectedContact, setSelectedContact] =
    useState<Contact | null>(null);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const contacts: Contact[] = [
    {
      id: "1",
      name: "Sarah Chen",
      avatar: "SC",
      lastMessage: "Thanks for the mentorship session today!",
      timestamp: "2 min ago",
      unreadCount: 2,
      isOnline: true,
      type: "individual",
      graduationYear: "2020",
      currentRole: "Product Manager at Microsoft",
    },
    {
      id: "2",
      name: "Tech Alumni Group",
      avatar: "TAG",
      lastMessage:
        "Michael: Anyone attending the networking event?",
      timestamp: "10 min ago",
      unreadCount: 0,
      isOnline: false,
      type: "group",
    },
    {
      id: "3",
      name: "Alex Rodriguez",
      avatar: "AR",
      lastMessage: "Could we schedule a coffee chat next week?",
      timestamp: "1 hour ago",
      unreadCount: 1,
      isOnline: true,
      type: "individual",
      graduationYear: "2019",
      currentRole: "Software Engineer at Google",
    },
    {
      id: "4",
      name: "Emily Johnson",
      avatar: "EJ",
      lastMessage: "The startup pitch event was amazing!",
      timestamp: "2 hours ago",
      unreadCount: 0,
      isOnline: false,
      type: "individual",
      graduationYear: "2021",
      currentRole: "Entrepreneur",
    },
    {
      id: "5",
      name: "Class of 2018",
      avatar: "18",
      lastMessage:
        "Don't forget about our reunion planning meeting",
      timestamp: "1 day ago",
      unreadCount: 3,
      isOnline: false,
      type: "group",
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      senderId: "1",
      content:
        "Hi! Thanks for accepting my mentorship request.",
      timestamp: "10:30 AM",
      status: "read",
      type: "text",
    },
    {
      id: "2",
      senderId: "me",
      content:
        "You're welcome! I'm excited to help you with your career journey.",
      timestamp: "10:32 AM",
      status: "read",
      type: "text",
    },
    {
      id: "3",
      senderId: "1",
      content:
        "I was wondering if you could share some insights about transitioning from academia to industry?",
      timestamp: "10:35 AM",
      status: "read",
      type: "text",
    },
    {
      id: "4",
      senderId: "me",
      content:
        "Absolutely! The key is to focus on practical skills and building a strong portfolio. I can share some resources that helped me.",
      timestamp: "10:38 AM",
      status: "read",
      type: "text",
    },
    {
      id: "5",
      senderId: "1",
      content:
        "That would be incredibly helpful. Should we schedule a video call to discuss this further?",
      timestamp: "10:40 AM",
      status: "read",
      type: "text",
    },
    {
      id: "6",
      senderId: "me",
      content:
        "Great idea! How about next Tuesday at 3 PM? I'll send you a calendar invite.",
      timestamp: "10:42 AM",
      status: "delivered",
      type: "text",
    },
    {
      id: "7",
      senderId: "1",
      content:
        "Perfect! Thanks for the mentorship session today!",
      timestamp: "10:45 AM",
      status: "sent",
      type: "text",
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (message.trim() && selectedContact) {
      // Simulate sending message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("dashboard")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold">
                Messages
              </h1>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Users className="w-4 h-4 mr-2" />
            New Group
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-80 bg-white border-r flex flex-col">
          {/* Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Contacts List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {filteredContacts.map((contact) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg cursor-pointer transition-all mb-2 ${
                    selectedContact?.id === contact.id
                      ? "bg-blue-50 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback
                          className={`${
                            contact.type === "group"
                              ? "bg-gradient-to-r from-purple-500 to-blue-500"
                              : "bg-gradient-to-r from-blue-500 to-purple-500"
                          } text-white`}
                        >
                          {contact.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {contact.isOnline &&
                        contact.type === "individual" && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate">
                          {contact.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {contact.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {contact.lastMessage}
                      </p>
                      {contact.graduationYear && (
                        <p className="text-xs text-blue-600">
                          Class of {contact.graduationYear}
                        </p>
                      )}
                    </div>
                    {contact.unreadCount > 0 && (
                      <Badge className="bg-blue-600 text-white">
                        {contact.unreadCount}
                      </Badge>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="bg-white border-b p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback
                          className={`${
                            selectedContact.type === "group"
                              ? "bg-gradient-to-r from-purple-500 to-blue-500"
                              : "bg-gradient-to-r from-blue-500 to-purple-500"
                          } text-white`}
                        >
                          {selectedContact.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {selectedContact.isOnline &&
                        selectedContact.type ===
                          "individual" && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {selectedContact.name}
                      </h3>
                      {selectedContact.type === "individual" ? (
                        <div className="text-sm text-gray-600">
                          {selectedContact.isOnline
                            ? "Online"
                            : "Last seen 2 hours ago"}
                          {selectedContact.currentRole && (
                            <span className="block text-xs text-blue-600">
                              {selectedContact.currentRole}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-sm text-gray-600">
                          {
                            contacts.filter(
                              (c) => c.type === "group",
                            ).length
                          }{" "}
                          members
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.senderId === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md ${msg.senderId === "me" ? "order-2" : "order-1"}`}
                      >
                        {msg.senderId !== "me" && (
                          <div className="flex items-center space-x-2 mb-1">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                                {selectedContact.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-gray-600">
                              {selectedContact.name}
                            </span>
                          </div>
                        )}
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            msg.senderId === "me"
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">
                            {msg.content}
                          </p>
                        </div>
                        <div
                          className={`flex items-center space-x-1 mt-1 ${
                            msg.senderId === "me"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <span className="text-xs text-gray-500">
                            {msg.timestamp}
                          </span>
                          {msg.senderId === "me" && (
                            <div className="text-gray-500">
                              {msg.status === "sent" && (
                                <Check className="w-3 h-3" />
                              )}
                              {msg.status === "delivered" && (
                                <CheckCheck className="w-3 h-3" />
                              )}
                              {msg.status === "read" && (
                                <CheckCheck className="w-3 h-3 text-blue-500" />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="bg-white border-t p-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) =>
                        setMessage(e.target.value)
                      }
                      onKeyPress={handleKeyPress}
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* No Chat Selected */
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Select a conversation
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose from your existing conversations or
                  start a new one
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Users className="w-4 h-4 mr-2" />
                  Start New Conversation
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}