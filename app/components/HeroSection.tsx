"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import FlowerAnimation from "./FlowerAnimation";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-stone-40">
      <FlowerAnimation />
      <div className="absolute inset-0 opacity-5">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px pink-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Sparkles className="w-8 h-8 mx-auto text-stone-600 opacity-60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl mb-6 tracking-wide text-stone-800"
        >
          Garden of Words
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-stone-500 mb-12 font-light leading-relaxed max-w-2xl mx-auto"
        >
          A sanctuary where thoughts bloom into poetry, where every word finds
          its perfect place in the garden of imagination
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const chatSection = document.getElementById("chat");
              chatSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-stone-50 text-stone-700 rounded-md border border-stone-200 
                       shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300"
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute top-8 left-8 w-32 h-32 border-l border-t border-stone-200 rounded-tl-xl" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r border-b border-stone-200 rounded-br-xl" />

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-800 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 9 + i,
            repeat: Infinity,
            delay: i * 1.8,
          }}
          style={{
            left: `${30 + i * 20}%`,
            top: `${40 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;