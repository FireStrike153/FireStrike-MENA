
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from 'lucide-react';

const ShopPage = () => {
  const { toast } = useToast();

  const handlePurchase = () => {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
      toast({
        title: "خطأ",
        description: "يجب تسجيل الدخول أولاً",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "تم الشراء بنجاح",
      description: "تم إضافة السلاح إلى حسابك",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect rounded-lg p-8 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold text-white mb-8 text-center">المتجر</h1>
        
        <div className="flex flex-col items-center space-y-6">
          <img 
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e3b818d0-7b32-45a7-8b69-d66dd83aa900/116c7b2bc68b50a82eba44c983bc29f9.png"
            alt="Terminator-GG-Inf. Dragon"
            className="w-full max-w-md rounded-lg shadow-lg mb-4"
          />
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Terminator-GG-Inf. Dragon</h2>
            <p className="text-white/80 mb-4">سلاح قوي ومميز</p>
            <p className="text-2xl font-bold text-white mb-6">100 جنيه</p>
            
            <Button
              onClick={handlePurchase}
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              شراء الآن
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShopPage;
