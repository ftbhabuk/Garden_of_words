"use client";
import { motion } from "framer-motion";

export default function WhatIsPoetry() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{
              backgroundImage: `url('/statue.jpg')`,
            }}
          />
          {/* Elegant overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 lg:px-24 py-12">
          
          {/* Floating Quote - Top Left */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xs"
          >
            <p className="text-white/40 text-sm font-light italic tracking-wide leading-relaxed">
              "In marble dreams and whispered verse, the soul finds its eternal voice..."
            </p>
          </motion.div>

          {/* Main Title - Center Right */}
          <div className="flex-grow flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-right"
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin text-white leading-none tracking-tighter">
                Poetry
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                className="h-px bg-gradient-to-l from-white/60 to-transparent mt-4"
              />
            </motion.div>
          </div>

          {/* Bottom Content */}
          <div className="flex justify-between items-end">
            
            {/* Left Side - Artistic Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden md:block"
            >
              <div className="flex flex-col space-y-3">
                <div className="w-16 h-px bg-white/30" />
                <div className="w-8 h-px bg-white/30" />
                <div className="w-12 h-px bg-white/30" />
              </div>
            </motion.div>

            {/* Right Side - Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-right max-w-md space-y-6"
            >
              <h2 className="text-xl md:text-2xl text-white/80 font-extralight tracking-widest uppercase">
                Carved in Time
              </h2>
              
              <p className="text-white/70 text-base md:text-lg font-light leading-loose tracking-wide">
                Like sculptures hewn from living stone, poetry shapes raw emotion into eternal form. Each verse, a chisel stroke across the canvas of human experience.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="pt-4"
              >
                <div className="w-20 h-px bg-gradient-to-r from-white/50 to-transparent ml-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Animation Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, delay: 1 }}
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/30 rounded-full"
        />
      </section>
    </div>
  );
}