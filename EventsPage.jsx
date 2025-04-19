
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Gift, Trophy, Star } from 'lucide-react';

const EventsPage = () => {
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
            <Calendar className="w-8 h-8 text-purple-500" />
            الفعاليات
            <Calendar className="w-8 h-8 text-purple-500" />
          </motion.h1>
          <img  alt="Events banner" className="w-full h-48 object-cover rounded-lg mb-8" src="https://images.unsplash.com/photo-1576990049702-8418081b420e" />
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
                <Trophy className="w-6 h-6 text-yellow-500" />
                البطولات الحالية
              </h2>
              <img  alt="Current tournaments" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1576990049702-8418081b420e" />
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-red-500" />
                الجوائز والمكافآت
              </h2>
              <img  alt="Prizes and rewards" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1698502744215-6cc8dbc2d606" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-blue-500" />
              الفعاليات القادمة
            </h2>
            <img  alt="Upcoming events" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1598550468793-d6306cd481c1" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventsPage;
