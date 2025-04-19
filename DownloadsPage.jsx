
import React from "react";
import { motion } from "framer-motion";
import { Download, Monitor, Smartphone, Gamepad } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DownloadsPage = () => {
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
            <Download className="w-8 h-8 text-blue-500" />
            مركز التحميل
            <Download className="w-8 h-8 text-blue-500" />
          </motion.h1>
          <img  alt="Downloads center" className="w-full h-48 object-cover rounded-lg mb-8" src="https://images.unsplash.com/photo-1589241062313-35890684416a" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Monitor className="w-6 h-6 text-green-500" />
              نسخة الكمبيوتر
            </h2>
            <img  alt="PC version" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1606656045173-11497b411b2b" />
            <Button className="w-full bg-green-500 hover:bg-green-600">
              <Download className="w-4 h-4 mr-2" />
              تحميل للكمبيوتر
            </Button>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-purple-500" />
              نسخة الموبايل
            </h2>
            <img  alt="Mobile version" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1663547082532-8b11c1238e1d" />
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              <Download className="w-4 h-4 mr-2" />
              تحميل للموبايل
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
              <Gamepad className="w-6 h-6 text-red-500" />
              متطلبات التشغيل
            </h2>
            <img  alt="System requirements" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1689170912283-624f9bab069e" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DownloadsPage;
