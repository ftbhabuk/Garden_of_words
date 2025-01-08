"use client"
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { PoetryAspect } from "./PoetryAspects";

const poetryAspects = [
  {
    title: "The Art of Expression",
    description: "Poetry is the canvas where words paint emotions that conventional language cannot capture. It transforms ordinary thoughts into extraordinary revelations, giving voice to the deepest corners of human experience."
  },
  {
    title: "Emotional Resonance",
    description: "Through carefully chosen words and rhythmic patterns, poetry creates an emotional bridge between the poet and reader. It resonates with universal human experiences while maintaining deeply personal connections."
  },
  {
    title: "Creative Freedom",
    description: "Poetry breaks free from the constraints of traditional writing, allowing for experimental forms and unique expressions. It's a space where rules can be bent or broken in service of artistic vision."
  }
];

export default function WhatIsPoetry() {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div 
        className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 text-gray-600 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <HelpCircle className="w-10 h-10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-serif mb-8 text-gray-800 tracking-tight"
          >
            What Does Poetry Mean?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Poetry transcends ordinary communication, weaving thoughts and emotions into a tapestry of carefully chosen words that speak directly to the soul.
          </motion.p>
        </div>

        <div className="grid gap-10">
          {poetryAspects.map((aspect, index) => (
            <PoetryAspect
              key={aspect.title}
              title={aspect.title}
              description={aspect.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}