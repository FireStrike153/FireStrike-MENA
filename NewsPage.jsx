
import React from "react";
import { motion } from "framer-motion";
import { Flame, Bomb, Globe, Gamepad, Skull } from 'lucide-react';

const NewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-lg p-8 w-full max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-2 mb-2">
            <Flame className="w-8 h-8 text-red-500" />
            Inferno MENA
            <Flame className="w-8 h-8 text-red-500" />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 text-white text-lg"
        >
          <motion.p
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <Flame className="w-6 h-6 text-red-500 flex-shrink-0" />
            Rising from the ashes, we are Inferno MENA — a Middle Eastern storm in the world of Crossfire!
          </motion.p>

          <motion.p
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <Bomb className="w-6 h-6 text-yellow-500 flex-shrink-0" />
            Built on precision, passion, and pure skill, we're not just players — we're legends in the making.
          </motion.p>

          <motion.p
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <Globe className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <Gamepad className="w-6 h-6 text-purple-500 flex-shrink-0" />
            We bring the heat. We own the battlefield.
          </motion.p>

          <motion.p
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 text-xl font-bold"
          >
            <Flame className="w-6 h-6 text-red-500 flex-shrink-0" />
            <Skull className="w-6 h-6 text-gray-300 flex-shrink-0" />
            #InfernoMENA – Where the fire never dies.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewsPage;
