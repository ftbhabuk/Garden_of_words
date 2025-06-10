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
                    <img src="data:image/jpeg;base64,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" alt="" />
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