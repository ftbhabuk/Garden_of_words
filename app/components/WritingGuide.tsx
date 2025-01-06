"use client"

import React from "react";
import { motion } from "framer-motion";
import { 
  PenTool, BookOpen, Heart, Brain, 
  Sparkles, Music, Palette, Feather, 
  LucideIcon
} from "lucide-react";

type TechniqueProps = {
    title: string;
    description: string;
    tips: string[];
    icon: LucideIcon;
    index: number;
  };
  
  type ExerciseProps = {
    title: string;
    prompt: string;
    example?: string;
    icon: LucideIcon;
    index: number;
  };

  const TechniqueCard: React.FC<TechniqueProps> = ({ title, description, tips, icon: Icon, index }) => (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-4 mb-6">
      <div className="p-3 bg-emerald-50 rounded-lg shrink-0">
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <ul className="space-y-3">
      {tips.map((tip, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
          className="flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-gray-600">{tip}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const ExerciseCard: React.FC<ExerciseProps> = ({ title, prompt, example, icon: Icon, index }) => (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md"
  >
    <Icon className="w-6 h-6 text-emerald-600 mb-4" />
    <h4 className="text-lg font-medium text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600 mb-4">{prompt}</p>
    {example && (
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-700 italic font-serif">{example}</p>
      </div>
    )}
  </motion.div>
);

export default function PoetryGuide() {
  const techniques = [
    {
      title: "Imagery",
      description: "Paint pictures with words that engage the senses.",
      icon: Palette,
      tips: [
        "Use specific, concrete details",
        "Appeal to multiple senses",
        "Choose vivid, unexpected comparisons",
        "Show, don't tell"
      ]
    },
    {
      title: "Sound & Rhythm",
      description: "Create musical patterns that enhance meaning.",
      icon: Music,
      tips: [
        "Experiment with alliteration",
        "Play with consonance and assonance",
        "Vary line lengths for effect",
        "Read your work aloud"
      ]
    },
    {
      title: "Metaphor & Symbolism",
      description: "Use figurative language to deepen meaning.",
      icon: Brain,
      tips: [
        "Find fresh comparisons",
        "Develop extended metaphors",
        "Use symbolic objects or actions",
        "Create meaningful connections"
      ]
    },
    {
      title: "Emotional Truth",
      description: "Connect with readers through authentic expression.",
      icon: Heart,
      tips: [
        "Write from personal experience",
        "Be specific about emotions",
        "Find universal in particular",
        "Stay honest and vulnerable"
      ]
    }
  ];

  const exercises = [
    {
      title: "Sensory Walk",
      prompt: "Take a walk and note one detail for each sense. Create a poem from your observations.",
      example: "Crunch of autumn leaves\nBitter coffee on my tongue\nWind whispers secrets",
      icon: Sparkles
    },
    {
      title: "Object Study",
      prompt: "Choose an ordinary object and describe it in extraordinary ways.",
      example: "The old kettle sings\nits steam-breath rising like prayers\nto kitchen ceiling",
      icon: Feather
    },
    {
      title: "Memory Poem",
      prompt: "Recall a vivid memory and focus on its sensory details.",
      example: "Grandmother's kitchen:\ncinamon clouds, rolling pins,\nflour-dusted love",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 min-h-screen">
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
            transition={{ duration: 0.5, type: "spring" }}
            className="w-16 h-16 mx-auto mb-6 text-emerald-600 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <PenTool className="w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl font-serif mb-6 text-gray-800">Master the Craft</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Develop your poetic voice through essential techniques and guided practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techniques.map((technique, index) => (
            <TechniqueCard key={technique.title} {...technique} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-serif mb-4 text-gray-800">Writing Exercises</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Put theory into practice with these creative exercises designed to spark inspiration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={exercise.title} {...exercise} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}