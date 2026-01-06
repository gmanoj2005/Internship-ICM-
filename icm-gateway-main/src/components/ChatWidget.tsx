import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! 👋 Welcome to ICM. I'm your virtual assistant. How can I help you today?",
    isBot: true,
    time: "Just now",
  },
];

const quickReplies = [
  "Course options",
  "Visa process",
  "Scholarships",
  "Speak to counselor",
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text,
      isBot: false,
      time: "Just now",
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(text),
        isBot: true,
        time: "Just now",
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    
    if (lower.includes("course") || lower.includes("program")) {
      return "We offer guidance for various programs including Bachelor's, Master's, PhD, and diploma courses. Which level are you interested in? You can also book a free consultation for personalized course recommendations.";
    }
    if (lower.includes("visa")) {
      return "Our visa experts have a 98% success rate! We assist with student visas for UK, USA, Canada, Australia, Germany, and more. Would you like to know the visa requirements for a specific country?";
    }
    if (lower.includes("scholarship")) {
      return "We help students access various scholarships including merit-based, need-based, and country-specific awards. Some of our students have received up to 100% funding! Want me to share scholarship options for your preferred destination?";
    }
    if (lower.includes("counselor") || lower.includes("speak") || lower.includes("call")) {
      return "I'd be happy to connect you with a counselor! Please click the 'Free Consultation' button at the top of the page, or call us at +1 (234) 567-890. Our team is available Mon-Sat, 9 AM - 6 PM.";
    }
    
    return "Thank you for your message! For detailed assistance, I recommend booking a free consultation with our expert counselors. They can provide personalized guidance based on your profile. Is there anything specific about studying abroad you'd like to know?";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 glow-secondary ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground rounded-t-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">ICM Assistant</h4>
              <p className="text-xs text-primary-foreground/80">Online | Typically replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isBot
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}
              >
                {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div
                className={`max-w-[75%] p-3 rounded-2xl ${
                  message.isBot
                    ? "bg-muted rounded-tl-sm"
                    : "bg-secondary text-secondary-foreground rounded-tr-sm"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => sendMessage(reply)}
              className="text-xs bg-muted text-foreground px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 pt-2 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" variant="secondary">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
