
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send, LogIn, UserPlus, Bot, User } from 'lucide-react';

const ChatPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // التحقق من نوع الطلب
    if (lowerMessage.includes("كود") || lowerMessage.includes("برمجة")) {
      return `حسناً، سأساعدك في كتابة الكود. ما هي لغة البرمجة التي تريدها؟`;
    }
    
    if (lowerMessage.includes("تصحيح") || lowerMessage.includes("خطأ")) {
      return `سأساعدك في تصحيح الكود. هل يمكنك مشاركة الكود الذي تريد تصحيحه؟`;
    }
    
    if (lowerMessage.includes("شرح") || lowerMessage.includes("توضيح")) {
      return `بالتأكيد! سأقوم بشرح ذلك لك بالتفصيل. ما هو الجزء الذي تريد فهمه بشكل أفضل؟`;
    }

    if (lowerMessage.includes("مساعدة") || lowerMessage.includes("help")) {
      return `مرحباً! أنا هنا لمساعدتك. يمكنني:
      - كتابة وتصحيح الأكواد البرمجية
      - شرح المفاهيم البرمجية
      - المساعدة في حل المشاكل التقنية
      - تقديم اقتراحات وحلول
      
      كيف يمكنني مساعدتك اليوم؟`;
    }

    // إذا كان السؤال يحتوي على كلمات مفتاحية تقنية
    const technicalKeywords = ["javascript", "python", "java", "react", "html", "css", "php", "sql", "database"];
    if (technicalKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return `أفهم أنك تسأل عن ${technicalKeywords.find(k => lowerMessage.includes(k))}. 
      يمكنني مساعدتك في:
      - كتابة الكود
      - تصحيح الأخطاء
      - شرح المفاهيم
      
      ما الذي تريد معرفته بالتحديد؟`;
    }

    // الردود العامة
    const responses = [
      "كيف يمكنني مساعدتك في مشروعك البرمجي اليوم؟",
      "هل تريد مساعدة في كتابة أو تصحيح الكود؟",
      "هل لديك أي أسئلة محددة عن البرمجة؟",
      "يمكنني مساعدتك في حل المشاكل التقنية. ما هي المشكلة التي تواجهها؟",
      "هل تريد تعلم المزيد عن أي لغة برمجة معينة؟"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (!currentUser) {
      toast({
        title: "تنبيه",
        description: "يرجى تسجيل الدخول أولاً للمحادثة",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // إضافة رسالة المستخدم
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // محاكاة معالجة الطلب
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const aiResponse = {
        id: Date.now() + 1,
        text: generateAIResponse(userMessage.text),
        sender: 'ai',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء معالجة طلبك",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        className="w-64 bg-[#202123] p-4 flex flex-col"
      >
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Chat Inferno
          </motion.h1>
        </div>

        <div className="space-y-2">
          {!currentUser ? (
            <>
              <Button
                onClick={() => navigate("/register")}
                className="w-full bg-transparent hover:bg-[#2A2B32] text-white border border-white/20"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                التسجيل
              </Button>
              <Button
                onClick={() => navigate("/login")}
                className="w-full bg-transparent hover:bg-[#2A2B32] text-white border border-white/20"
              >
                <LogIn className="w-4 h-4 mr-2" />
                تسجيل الدخول
              </Button>
            </>
          ) : (
            <div className="text-white text-center">
              <p className="mb-2">مرحباً بك</p>
              <p className="text-sm opacity-75">{currentUser.id}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 ${
                  msg.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`p-2 rounded-full ${
                  msg.sender === 'user' ? 'bg-blue-500' : 'bg-green-500'
                }`}>
                  {msg.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`glass-effect rounded-lg p-4 max-w-[80%] ${
                  msg.sender === 'user' ? 'bg-blue-500/10' : 'bg-green-500/10'
                }`}>
                  <p className="text-white whitespace-pre-line">{msg.text}</p>
                </div>
              </motion.div>
            ))}
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-white/60"
              >
                مرحباً! أنا مساعدك في البرمجة. كيف يمكنني مساعدتك اليوم؟
              </motion.div>
            )}
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-white/60"
              >
                <span className="animate-pulse">●</span>
                <span className="animate-pulse delay-100">●</span>
                <span className="animate-pulse delay-200">●</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-white/20 p-4">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب طلبك هنا..."
              className="flex-1 bg-[#40414F] text-white rounded-lg p-4 outline-none"
              disabled={isProcessing}
            />
            <Button
              type="submit"
              className="bg-[#10A37F] hover:bg-[#1A7F64] text-white p-4 rounded-lg"
              disabled={isProcessing}
            >
              <Send className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
