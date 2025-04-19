
import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Home, Newspaper, Trophy, ShoppingBag, Download, AlertCircle, Calendar, Crown, LogIn, UserPlus } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const navItems = [
    { 
      name: "الرئيسية", 
      icon: Home, 
      path: "/",
      bgImage: <img  alt="Home background" src="https://images.unsplash.com/photo-1603810252209-272d6b570817" />
    },
    { 
      name: "الأخبار", 
      icon: Newspaper, 
      path: "/news",
      bgImage: <img  alt="News background" src="https://images.unsplash.com/photo-1544205497-14a3194fe440" />
    },
    { 
      name: "التصنيف", 
      icon: Trophy, 
      path: "/ranking",
      bgImage: <img  alt="Ranking background" src="https://images.unsplash.com/photo-1533237264985-ee62f6d342bb" />
    },
    { 
      name: "المتجر", 
      icon: ShoppingBag, 
      path: "/shop",
      bgImage: <img  alt="Shop background" src="https://images.unsplash.com/photo-1692095306892-bafdb76d0e28" />
    },
    { 
      name: "التحميلات", 
      icon: Download, 
      path: "/downloads",
      bgImage: <img  alt="Downloads background" src="https://images.unsplash.com/photo-1544205497-14a3194fe440" />
    },
    { 
      name: "قائمة العار", 
      icon: AlertCircle, 
      path: "/shame",
      bgImage: <img  alt="Shame list background" src="https://images.unsplash.com/photo-1618503886688-5929548e3466" />
    },
    { 
      name: "الفعاليات", 
      icon: Calendar, 
      path: "/events",
      bgImage: <img  alt="Events background" src="https://images.unsplash.com/photo-1649433391719-2e784576d044" />
    },
    { 
      name: "باس انفيرنو", 
      icon: Crown, 
      path: "/pass",
      bgImage: <img  alt="Inferno pass background" src="https://images.unsplash.com/photo-1569496507125-e82f47abe651" />
    },
  ];

  const handleNavigation = (path, name) => {
    if (path === location.pathname) return;
    
    navigate(path);
    toast({
      title: "تنقل",
      description: `تم الانتقال إلى ${name}`,
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-effect fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className={`nav-button flex items-center gap-2 relative overflow-hidden ${
                  location.pathname === item.path ? 'bg-white/20' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigation(item.path, item.name)}
              >
                <div className="absolute inset-0 w-full h-full opacity-20">
                  {item.bgImage}
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-4"
          >
            <motion.button
              className="nav-button flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("/register", "التسجيل")}
            >
              <div className="absolute inset-0 w-full h-full opacity-20">
                <img  alt="Register background" src="https://images.unsplash.com/photo-1542868727-1d2c316ed573" />
              </div>
              <div className="relative z-10 flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                <span>التسجيل</span>
              </div>
            </motion.button>
            <motion.button
              className="nav-button flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("/login", "تسجيل الدخول")}
            >
              <div className="absolute inset-0 w-full h-full opacity-20">
                <img  alt="Login background" src="https://images.unsplash.com/photo-1661229978118-fc02b873bdaf" />
              </div>
              <div className="relative z-10 flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                <span>تسجيل الدخول</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
