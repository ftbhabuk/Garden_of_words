"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  BookOpen,
  Heart,
  Brain,
  Sparkles,
  Music,
  Palette,
  Feather,
  Star,
  BookMarked,
  Clock,
  Users,
  Lightbulb,
  Quote,
  ChevronDown,
} from "lucide-react";

import MasterTheCraftSection from "./MasterTsection";

type TechniqueCardProps = {
  title: string;
  description: string;
  tips: string[];
  icon: any;
  index: number;
  imagePrompt: string;
};

type PoetryFormCardProps = {
  title: string;
  description: string;
  example: string;
  author: string;
  icon: any;
  index: number;
  imagePrompt: string;
};

type ExerciseCardProps = {
  title: string;
  description: string;
  prompt: string;
  difficulty: string;
  duration: string;
  icon: any;
  index: number;
  imagePrompt: string;
};

const techniques: Array<Omit<TechniqueCardProps, "index">> = [
  {
    title: "Imagery",
    description: "Paint pictures with words that engage the senses and create vivid mental landscapes.",
    icon: Palette,
    imagePrompt: "Abstract geometric shapes representing visual imagery - clean lines, simple forms, monochrome",
    tips: [
      "Use specific, concrete details that readers can visualize",
      "Appeal to multiple senses: sight, sound, touch, taste, smell",
      "Choose vivid, unexpected comparisons that surprise readers",
      "Create memorable scenes through careful observation",
    ],
  },
  {
    title: "Sound & Rhythm",
    description: "Create musical patterns that enhance meaning and guide the reader's experience.",
    icon: Music,
    imagePrompt: "Sound waves or musical notation in minimal black and white design",
    tips: [
      "Experiment with alliteration and consonance for emphasis",
      "Use assonance to create internal rhymes and melody",
      "Vary line lengths and rhythms to control pacing",
      "Master the natural cadence of spoken language",
    ],
  },
  {
    title: "Metaphor & Symbolism",
    description: "Use figurative language to deepen meaning and create layers of interpretation.",
    icon: Brain,
    imagePrompt: "Interconnected neural pathways or maze-like patterns in simple black lines",
    tips: [
      "Create fresh comparisons that surprise and illuminate",
      "Develop extended metaphors throughout a poem",
      "Choose symbols that resonate with universal meaning",
      "Layer multiple levels of interpretation",
    ],
  },
  {
    title: "Emotional Truth",
    description: "Connect with readers through authentic expression and genuine vulnerability.",
    icon: Heart,
    imagePrompt: "Simple heart outline with radiating lines representing emotional connection",
    tips: [
      "Draw from personal experiences and observations",
      "Express complex emotions with precision and nuance",
      "Find universal themes in specific moments",
      "Stay vulnerable while maintaining artistic control",
    ],
  },
  {
    title: "Structure & Form",
    description: "Shape your poems with purposeful design that serves your artistic vision.",
    icon: BookMarked,
    imagePrompt: "Grid patterns or architectural framework in clean geometric lines",
    tips: [
      "Choose forms that complement your content",
      "Use line breaks and stanza breaks meaningfully",
      "Experiment with traditional and free verse forms",
      "Create tension between form and content",
    ],
  },
  {
    title: "Voice & Perspective",
    description: "Develop your unique poetic voice that resonates with authenticity.",
    icon: Users,
    imagePrompt: "Multiple overlapping speech bubbles or voice wave patterns in minimal design",
    tips: [
      "Find your authentic writing voice",
      "Experiment with different personas",
      "Balance consistency with variation",
      "Consider the relationship between speaker and subject",
    ],
  },
];

const poetryForms: Array<Omit<PoetryFormCardProps, "index">> = [
  {
    title: "Haiku",
    description: "Japanese form focusing on nature and moments in time. Three lines capturing a single moment.",
    example: "Morning frost glitters\nOn spider webs stretched between\nBare autumn branches",
    author: "Traditional Form",
    icon: BookMarked,
    imagePrompt: "Three horizontal lines with nature elements - minimal bamboo or cherry blossom silhouette",
  },
  {
    title: "Sonnet",
    description: "14-line form exploring a single theme, often with a turn or volta near the end.",
    example: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate...",
    author: "William Shakespeare",
    icon: Star,
    imagePrompt: "Classical column or renaissance-style frame with 14 small lines representing structure",
  },
  {
    title: "Free Verse",
    description: "Modern form without fixed patterns, emphasizing natural rhythms and imagery.",
    example: "The red wheelbarrow\nglazed with rain\nwater\nbeside the white\nchickens",
    author: "William Carlos Williams",
    icon: Feather,
    imagePrompt: "Flowing organic lines breaking free from structured grid - abstract freedom representation",
  },
];

const exercises: Array<Omit<ExerciseCardProps, "index">> = [
  {
    title: "Object Study",
    description: "Transform the ordinary into extraordinary through focused observation.",
    prompt: "Choose an everyday object and write about it for 10 minutes without stopping. Focus on its texture, weight, history, and emotional resonance.",
    difficulty: "Beginner",
    duration: "10 minutes",
    icon: Lightbulb,
    imagePrompt: "Simple everyday object silhouette with magnifying glass - focus and observation theme",
  },
  {
    title: "Memory Fragment",
    description: "Capture a fleeting moment from your past with vivid detail.",
    prompt: "Write about a memory that lasts only 30 seconds. Focus on sensory details and the emotions of that brief moment.",
    difficulty: "Intermediate",
    duration: "15 minutes",
    icon: Clock,
    imagePrompt: "Clock with fragmented pieces or puzzle pieces representing memory fragments",
  },
  {
    title: "Voice Experiment",
    description: "Explore different perspectives and personas in your writing.",
    prompt: "Write the same event from three different viewpoints: a child, an elder, and an inanimate object present at the scene.",
    difficulty: "Advanced",
    duration: "25 minutes",
    icon: Users,
    imagePrompt: "Three different perspective angles or viewpoints - geometric representation of multiple views",
  },
];

const ImageComponent: React.FC<{ title: string; className?: string }> = ({ title, className = "" }) => (
  <div className={`${className} overflow-hidden`}>
    <img 
      src="/image.png" 
      alt={`${title} illustration`}
      className="w-full h-full object-cover"
    />
  </div>
);

const TechniqueCard: React.FC<TechniqueCardProps> = ({
  title,
  description,
  tips,
  icon: Icon,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/60 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-gray-800 border border-gray-600 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-gray-300" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left flex items-center justify-between p-4 bg-gray-800/60 border border-gray-600 rounded-lg hover:bg-gray-700/60 transition-all duration-200"
      >
        <span className="text-sm text-gray-200 font-medium">View Techniques</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3">
              {tips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-900/40 border border-gray-700 rounded-lg"
                >
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 shrink-0" />
                  <span className="text-sm text-gray-300 leading-relaxed">
                    {tip}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PoetryFormCard: React.FC<PoetryFormCardProps> = ({
  title,
  description,
  example,
  author,
  icon: Icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-gray-300" />
        <h4 className="text-xl font-semibold text-white">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="bg-gray-800/60 border border-gray-600 p-4 rounded-lg mb-3">
        <p className="text-gray-300 italic font-serif text-sm leading-relaxed whitespace-pre-line">
          {example}
        </p>
      </div>
      <p className="text-right text-xs text-gray-500">— {author}</p>
    </motion.div>
  );
};

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  description,
  prompt,
  difficulty,
  duration,
  icon: Icon,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-gray-300" />
        <h4 className="text-xl font-semibold text-white">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs text-gray-300 bg-gray-800 border border-gray-600 px-3 py-1 rounded-lg">
          {difficulty}
        </span>
        <span className="text-xs text-gray-300 bg-gray-800 border border-gray-600 px-3 py-1 rounded-lg">
          {duration}
        </span>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left flex items-center justify-between p-4 bg-gray-800/60 border border-gray-600 rounded-lg hover:bg-gray-700/60 transition-all duration-200"
      >
        <span className="text-sm text-gray-200 font-medium">View Prompt</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 p-4 bg-gray-900/40 border border-gray-700 rounded-lg">
              <p className="text-sm text-gray-300 leading-relaxed">
                {prompt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function PoetryGuide() {
  return (
    <div className="min-h-screen relative bg-gray-900">
      <MasterTheCraftSection />

      <section className="relative z-10 py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.6 }}
              className="h-px bg-gray-600 mb-6"
            />
            <h3 className="text-2xl font-light text-white mb-3">
              Essential Techniques
            </h3>
            <p className="text-gray-400 max-w-2xl mb-10 font-light">
              Master these fundamental elements to craft powerful and moving poetry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {techniques.map((technique, index) => (
              <div key={technique.title} className="grid gap-6">
                {index % 2 === 0 ? (
                  <>
                    <ImageComponent title={technique.title} className="h-64 bg-gray-800 rounded-lg" />
                    <TechniqueCard {...technique} index={index} />
                  </>
                ) : (
                  <>
                    <TechniqueCard {...technique} index={index} />
                    <ImageComponent title={technique.title} className="h-64 bg-gray-800 rounded-lg" />
                  </>
                )}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.6 }}
              className="h-px bg-gray-600 mb-6"
            />
            <h3 className="text-2xl font-light text-white mb-3">
              Classical Forms
            </h3>
            <p className="text-gray-400 max-w-2xl mb-10 font-light">
              Explore traditional poetic structures that have stood the test of time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {poetryForms.map((form, index) => (
              <div key={form.title} className="grid gap-6">
                {index % 2 === 0 ? (
                  <>
                    <ImageComponent title={form.title} className="h-48 bg-gray-800 rounded-lg" />
                    <PoetryFormCard {...form} index={index} />
                  </>
                ) : (
                  <>
                    <PoetryFormCard {...form} index={index} />
                    <ImageComponent title={form.title} className="h-48 bg-gray-800 rounded-lg" />
                  </>
                )}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.6 }}
              className="h-px bg-gray-600 mb-6"
            />
            <h3 className="text-2xl font-light text-white mb-3">
              Writing Exercises
            </h3>
            <p className="text-gray-400 max-w-2xl mb-10 font-light">
              Put theory into practice with these creative exercises designed to spark inspiration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {exercises.map((exercise, index) => (
              <div key={exercise.title} className="grid gap-6">
                {index % 2 === 0 ? (
                  <>
                    <ImageComponent title={exercise.title} className="h-48 bg-gray-800 rounded-lg" />
                    <ExerciseCard {...exercise} index={index} />
                  </>
                ) : (
                  <>
                    <ExerciseCard {...exercise} index={index} />
                    <ImageComponent title={exercise.title} className="h-48 bg-gray-800 rounded-lg" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}