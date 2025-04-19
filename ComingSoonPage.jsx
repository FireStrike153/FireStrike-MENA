
import React from "react";
import { motion } from "framer-motion";

const ComingSoonPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center pt-16">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-effect rounded-lg p-8 text-center"
    >
      <h1 className="text-3xl font-bold text-white mb-4">قريباً</h1>
      <p className="text-white/80">هذه الصفحة قيد الإنشاء</p>
    </motion.div>
  </div>
);

export default ComingSoonPage;
