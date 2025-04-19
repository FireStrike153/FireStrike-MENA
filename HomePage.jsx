
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitch as Discord } from 'lucide-react';

const HomePage = () => {
  const handleDiscord = () => {
    window.open("https://discord.gg/qHwfQGGU", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-effect rounded-lg p-8 w-full max-w-md text-center"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          Inferno Mena
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold mb-8 text-white"
        >
          نحن قادمون قريباً
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleDiscord}
            className="w-full text-lg h-12 bg-[#5865F2] hover:bg-[#4752C4] flex items-center justify-center gap-2"
          >
            <Discord className="w-6 h-6" />
            انضم إلى Discord
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
