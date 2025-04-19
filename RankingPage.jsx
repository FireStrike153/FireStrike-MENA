
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Medal, Crown } from 'lucide-react';

const RankingPage = () => {
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
            <Trophy className="w-8 h-8 text-yellow-500" />
            التصنيف العالمي
            <Trophy className="w-8 h-8 text-yellow-500" />
          </motion.h1>
          <img  alt="Ranking banner" className="w-full h-48 object-cover rounded-lg mb-8" src="https://images.unsplash.com/photo-1698502475216-768a05912f5f" />
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
                <Star className="w-6 h-6 text-yellow-500" />
                أفضل اللاعبين
              </h2>
              <img  alt="Top players" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1576990049702-8418081b420e" />
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Medal className="w-6 h-6 text-blue-500" />
                الفرق المتصدرة
              </h2>
              <img  alt="Top teams" className="w-full h-32 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1662064656795-11dcb3f7d0a0" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Crown className="w-6 h-6 text-purple-500" />
              البطولات القادمة
            </h2>
            <img  alt="Upcoming tournaments" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1576990049702-8418081b420e" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RankingPage;
