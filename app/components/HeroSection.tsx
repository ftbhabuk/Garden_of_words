"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Stars, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50"
        />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(3)].map((_, i) => (
          <Feather
            key={i}
            className="absolute text-blue-400 opacity-20"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
              transform: `rotate(${i * 45}deg)`,
              width: `${4 + i}rem`,
              height: `${4 + i}rem`
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Sparkles className="w-16 h-16 mx-auto text-emerald-600 mb-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-serif mb-8"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Garden of Words
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Where Technology Nurtures the Art of Poetry
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 space-x-4"
        >
          
          <button className="px-8 py-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-lg shadow-lg hover:bg-white/90 transition-colors duration-300">
          Start Writing
          </button>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
      />
    </div>
  );
};

export default HeroSection;