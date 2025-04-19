
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Shield, Ban, AlertTriangle } from 'lucide-react';

const ShameListPage = () => {
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
            <AlertCircle className="w-8 h-8 text-red-500" />
            قائمة العار
            <AlertCircle className="w-8 h-8 text-red-500" />
          </motion.h1>
          <img  alt="Shame list banner" className="w-full h-48 object-cover rounded-lg mb-8" src="https://images.unsplash.com/photo-1615801515481-8ff9713044f0" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-effect p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-500" />
                نظام الحماية
              </h2>
              <img  alt="Protection system" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1693341089979-b80dc1fc966d" />
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Ban className="w-6 h-6 text-red-500" />
                المخالفات
              </h2>
              <img  alt="Violations" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              التحذيرات الأخيرة
            </h2>
            <img  alt="Recent warnings" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1597650487241-40b67033bf7d" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShameListPage;
