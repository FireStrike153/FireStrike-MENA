
import React from "react";
import { motion } from "framer-motion";
import { Crown, Gift, Star, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const InfernoPassPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-lg p-8 w-full max-w-4xl"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2"
          >
            <Crown className="w-8 h-8 text-yellow-500" />
            Inferno Pass
            <Crown className="w-8 h-8 text-yellow-500" />
          </motion.h1>
          <img  alt="Inferno Pass banner" className="w-full h-48 object-cover rounded-lg mb-8" src="https://images.unsplash.com/photo-1569496507125-e82f47abe651" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Gift className="w-6 h-6 text-purple-500" />
              المكافآت الحصرية
            </h2>
            <img  alt="Exclusive rewards" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1504724214140-2efb1714769b" />
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              عرض المكافآت
            </Button>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              المميزات الخاصة
            </h2>
            <img  alt="Special features" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1569096273578-a4b71b127bf1" />
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
              اكتشف المميزات
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-500" />
              مميزات VIP
            </h2>
            <img  alt="VIP benefits" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1569096273578-a4b71b127bf1" />
            <Button className="w-full bg-blue-500 hover:bg-blue-600 mt-4">
              احصل على VIP الآن
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfernoPassPage;
