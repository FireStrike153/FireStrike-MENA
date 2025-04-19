
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { User, Key, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      password: ''
    };

    if (!formData.username) {
      newErrors.username = "اسم المستخدم مطلوب";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "خطأ في النموذج",
        description: "الرجاء التحقق من جميع الحقول",
        variant: "destructive"
      });
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => 
        (u.username === formData.username || u.email === formData.username) && 
        u.password === formData.password
      );

      if (!user) {
        toast({
          title: "خطأ في تسجيل الدخول",
          description: "اسم المستخدم أو كلمة المرور غير صحيحة",
          variant: "destructive"
        });
        return;
      }

      // تحديث آخر تسجيل دخول
      user.lastLogin = new Date().toISOString();
      localStorage.setItem('users', JSON.stringify(users));
      
      // حفظ بيانات المستخدم الحالي
      localStorage.setItem('currentUser', JSON.stringify({
        username: user.username,
        email: user.email,
        lastLogin: user.lastLogin
      }));

      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: `مرحباً بك في Inferno Mena`,
      });

      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء تسجيل الدخول. الرجاء المحاولة مرة أخرى",
        variant: "destructive"
      });
    }
  };

  const handleForgotPassword = () => {
    toast({
      title: "نسيت كلمة المرور",
      description: "سيتم إضافة هذه الميزة قريباً",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect rounded-lg p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Welcome to Inferno Mena! 👋</h1>
            <p className="text-white/80">Please sign-in to your account and start the adventure</p>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Username Input */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-white/10 rounded-md p-3">
                <User className="w-5 h-5 text-white" />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className={`bg-transparent w-full text-white placeholder-white/60 outline-none ${
                    errors.username ? 'border-red-500' : ''
                  }`}
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({...formData, username: e.target.value});
                    setErrors({...errors, username: ''});
                  }}
                  required
                />
              </div>
              {errors.username && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.username}</span>
                </div>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-white/80">Password</label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-white/80 hover:text-white"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-md p-3">
                <Key className="w-5 h-5 text-white" />
                <input
                  type="password"
                  placeholder="············"
                  className={`bg-transparent w-full text-white placeholder-white/60 outline-none ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({...formData, password: e.target.value});
                    setErrors({...errors, password: ''});
                  }}
                  required
                />
              </div>
              {errors.password && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-colors"
          >
            تسجيل الدخول
          </Button>

          <p className="text-center text-white/80 mt-4">
            New on our game?{" "}
            <Link to="/register" className="text-white hover:underline">
              Create an account
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
