"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PoetryDemoSection = () => {
  const [currentExample, setCurrentExample] = useState(0);

  const poetryExamples = [
    {
      prompt: "Write a haiku about morning coffee",
      tags: ["Haiku", "Contemplative", "Morning"],
      result: `Steam rises gentle,\nDarkness yields to golden light—\nDay's first sacred sip.`
    },
    {
      prompt: "A sonnet about lost memories",
      tags: ["Sonnet", "Melancholic", "Reflective"],
      result: `In chambers of the heart where echoes dwell,\nLie fragments of the days we used to know...\n\n(Generated in 3 seconds)`
    },
    {
      prompt: "Free verse about city rain",
      tags: ["Free Verse", "Urban", "Atmospheric"],
      result: `The city weeps\nin silver sheets,\neach drop a story\ntold in concrete whispers...`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % poetryExamples.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl text-stone-800 mb-4">
            See Poetry Come to Life
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-light">
            Watch how a simple thought transforms into beautiful verse. 
            From idea to inspiration in moments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video/GIF Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-white rounded-lg border border-stone-200 shadow-sm overflow-hidden">
              {/* Placeholder for your screen recording */}
              <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-stone-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-stone-500 text-sm">
                    Your screen recording will appear here
                  </p>
                  <p className="text-stone-400 text-xs mt-1">
                    Showing the poetry generation process
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subtle corner accent */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-stone-300 rounded-tl-lg opacity-40" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-stone-300 rounded-br-lg opacity-40" />
          </motion.div>

          {/* Right: Live Examples */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-stone-800">
                From Prompt to Poetry
              </h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExample}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  {/* Input Section */}
                  <div className="p-4 bg-white rounded-lg border border-stone-200">
                    <div className="text-sm text-stone-500 mb-2">You type:</div>
                    <div className="text-stone-700 italic">
                      "{poetryExamples[currentExample].prompt}"
                    </div>
                    <div className="flex gap-2 mt-3">
                      {poetryExamples[currentExample].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Output Section */}
                  <div className="p-4 bg-stone-800 text-stone-100 rounded-lg">
                    <div className="text-sm text-stone-400 mb-3">AI generates:</div>
                    <div className="font-serif text-stone-100 leading-relaxed whitespace-pre-line">
                      {poetryExamples[currentExample].result}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2">
                {poetryExamples.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExample(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentExample 
                        ? 'bg-stone-600 w-6' 
                        : 'bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200">
              <div className="flex items-center gap-4 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Instant generation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Multiple styles
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Custom refinement
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const chatSection = document.getElementById("chat");
              chatSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-stone-800 text-stone-100 rounded-md 
                     hover:bg-stone-700 transition-all duration-300 font-light"
          >
            Try It Yourself
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PoetryDemoSection;