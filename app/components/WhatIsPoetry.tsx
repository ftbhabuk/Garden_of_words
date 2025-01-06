"use client"
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, BookOpen, Heart, Sparkles } from "lucide-react";

const icons = {
  "The Art of Expression": BookOpen,
  "Emotional Resonance": Heart,
  "Creative Freedom": Sparkles,
};

interface PoetryAspectProps {
  title: string;
  description: string;
  index: number;
}

const PoetryAspect: React.FC<PoetryAspectProps> = ({ title, description, index }) => {
  const Icon = icons[title as keyof typeof icons] || HelpCircle;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="text-xl font-medium text-gray-800 mb-2"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="text-gray-600 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhatIsPoetry() {
  const aspects = [
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

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 mx-auto mb-6 text-gray-600 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-serif mb-6 text-gray-800"
          >
            What Does Poetry Mean?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Poetry transcends ordinary communication, weaving thoughts and emotions into a tapestry of carefully chosen words that speak directly to the soul.
          </motion.p>
        </motion.div>

        <div className="grid gap-8">
          {aspects.map((aspect, index) => (
            <PoetryAspect
              key={aspect.title}
              title={aspect.title}
              description={aspect.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}