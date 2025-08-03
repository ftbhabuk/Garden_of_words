"use client";
import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Brain,
  Palette,
  Music,
  BookOpen,
  Feather,
  BookMarked,
  Star,
  Users,
  Lightbulb,
  ChevronDown,
  Ear,
  Clock,
  Eye,
  Moon,
} from "lucide-react";

import MasterTheCraftSection from "./MasterTsection";

type TechniqueCardProps = {
  title: string;
  description: string;
  tagline: string;
  tips: string[];
  icon: any;
  index: number;
  imageUrl: string;
};

type PoetryFormCardProps = {
  title: string;
  description: string;
  example: string;
  author: string;
  icon: any;
  index: number;
  imageUrl: string;
};

type ExerciseCardProps = {
  title: string;
  description: string;
  prompt: string;
  difficulty: string;
  duration: string;
  icon: any;
  index: number;
  imageUrl: string;
};

const techniques: Array<Omit<TechniqueCardProps, "index">> = [
  {
    title: "Imagery",
    description:
      "Transform ordinary moments into extraordinary experiences through vivid, sensory language that allows readers to see, hear, feel, and taste your words.",
    tagline: "Paint with words",
    icon: Palette,
    imageUrl:
      "https://pbs.twimg.com/media/Gv_XArzXcAAojyo?format=jpg&name=medium",
      // need to have gradeint overaly over image to make it look more darker for image plus blurred or faded edges
    tips: [
      "Use specific, concrete details over abstract concepts",
      "Appeal to multiple senses, not just sight",
      "Create unexpected but meaningful comparisons",
      "Show scenes that linger in memory",
    ],
  },
  {
    title: "Sound & Rhythm",
    description:
      "Craft the musical heartbeat of your poetry through deliberate sound patterns, rhythm variations, and the natural flow of language that guides your reader's journey.",
    tagline: "Music in motion",
    icon: Music,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1747852026439-b159abd44ee2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8emFfUHFOdWNIX2t8fGVufDB8fHx8fA%3D%3D",
    tips: [
      "Experiment with alliteration and consonance for texture",
      "Use internal rhyme and assonance for melody",
      "Vary line lengths to control pacing and breath",
      "Listen for the natural cadence in spoken words",
    ],
  },
  {
    title: "Metaphor & Symbolism",
    description:
      "Layer your poetry with deeper meaning through carefully chosen comparisons and symbols that resonate beyond their literal surface, creating rich interpretive possibilities.",
    tagline: "Layers of meaning",
    icon: Brain,
    imageUrl:
      "https://pbs.twimg.com/media/GxOyXlebcAA5QXb?format=jpg&name=4096x4096",
    tips: [
      "Develop fresh comparisons that surprise yet feel inevitable",
      "Build extended metaphors that sustain throughout the poem",
      "Choose symbols that carry personal and universal weight",
      "Allow multiple interpretations without losing focus",
    ],
  },
  {
    title: "Emotional Truth",
    description:
      "Connect authentically with your readers by excavating genuine emotions and expressing them with precision, vulnerability, and universal resonance that transcends personal experience.",
    tagline: "Authentic connection",
    icon: Heart,
    imageUrl:
      "https://images.unsplash.com/photo-1740448374472-1cb706feb965?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzB8fHxlbnwwfHx8fHw%3D",
    tips: [
      "Mine your personal experiences for universal truths",
      "Express complex emotions with surgical precision",
      "Find the specific details that unlock broader themes",
      "Balance vulnerability with artistic control and purpose",
    ],
  },
  {
    title: "Structure & Form",
    description:
      "Shape your poems with intentional architectural choices that serve your content, whether embracing traditional constraints or forging innovative structures that enhance meaning.",
    tagline: "Purposeful design",
    icon: BookMarked,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1747851905755-c8dad9d3fe24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDZ8emFfUHFOdWNIX2t8fGVufDB8fHx8fA%3D%3D",
    tips: [
      "Select forms that complement your subject matter",
      "Use line breaks and stanza breaks with intention",
      "Experiment with hybrid forms and variations",
      "Create productive tension between form and content",
    ],
  },
  {
    title: "Voice & Perspective",
    description:
      "Cultivate your distinctive poetic voice through consistent stylistic choices while remaining flexible enough to serve each poem's unique needs and emotional landscape.",
    tagline: "Your unique voice",
    icon: Users,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1747852026439-b159abd44ee2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8emFfUHFOdWNIX2t8fGVufDB8fHx8fA%3D%3D",
    tips: [
      "Develop authentic expression that feels genuinely yours",
      "Experiment with different personas and speakers",
      "Balance consistency with adaptability across poems",
      "Consider the relationship between speaker and subject",
    ],
  },
];

const poetryForms: Array<Omit<PoetryFormCardProps, "index">> = [
  {
    title: "Haiku",
    description:
      "Japanese form focusing on nature and moments in time. Three lines capturing a single moment.",
    example:
      "Morning frost glitters\nOn spider webs stretched between\nBare autumn branches",
    author: "Traditional Form",
    icon: BookMarked,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
  {
    title: "Sonnet",
    description:
      "14-line form exploring a single theme, often with a turn or volta near the end.",
    example:
      "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate...",
    author: "William Shakespeare",
    icon: Star,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
  {
    title: "Free Verse",
    description:
      "Modern form without fixed patterns, emphasizing natural rhythms and imagery.",
    example:
      "The red wheelbarrow\nglazed with rain\nwater\nbeside the white\nchickens",
    author: "William Carlos Williams",
    icon: Feather,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
];

const exercises: Array<Omit<ExerciseCardProps, "index">> = [
  {
    title: "Whispered Secrets",
    description:
      "Discover the hidden stories that objects hold within their silent existence.",
    prompt:
      "Choose an antique or weathered item. Write a poem from its perspective, revealing three secrets it has witnessed across decades. Let each secret unfold through different seasons of its life.",
    difficulty: "Beginner",
    duration: "12 minutes",
    icon: Eye,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
  {
    title: "Midnight Soliloquy",
    description:
      "Explore the profound thoughts that emerge in solitude's embrace.",
    prompt:
      "Write a conversation between yourself and the moon at 3 AM. What questions would you ask? What wisdom might it share? Let the dialogue reveal something unexpected about your inner world.",
    difficulty: "Intermediate",
    duration: "18 minutes",
    icon: Moon,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
  {
    title: "Synesthetic Symphony",
    description:
      "Blend your senses to create poetry that transcends ordinary perception.",
    prompt:
      "Write a piece where colors have sounds, textures have flavors, and emotions have temperatures. Describe a simple moment—like drinking coffee or watching rain—through this heightened sensory lens.",
    difficulty: "Advanced",
    duration: "20 minutes",
    icon: Ear,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
];

const TechniqueCard: React.FC<TechniqueCardProps> = ({
  title,
  description,
  tagline,
  tips,
  icon: Icon,
  index,
  imageUrl,
}) => {
  const isImageLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* Simple Background Image with Minimal Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full scale-110"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        
        {/* Slightly darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto w-full relative">
          <div
            className={`flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16`}
          >
            <div className="w-full md:w-1/2 relative">
              <div className="absolute top-0 left-0 md:-top-8 md:left-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white/90 tracking-wider italic">
                  {tagline}
                </h3>
                <div className="w-80 h-px bg-white/30 mt-4"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 relative">
            <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light max-w-md mt-4 mr-10">
  {description}
</p>
              <div className="space-y-2">
                <h4 className="text-4xl md:text-5xl font-bold text-white/70 tracking-wide">
                  {title}
                </h4>
                <div className="w-24 h-px bg-white/40"></div>
              </div>
              <div className="absolute bottom-0 right-0 md:-bottom-20 md:right-0 max-w-sm">
                <div className="w-20 h-px bg-white/30 mb-3 ml-auto"></div>
                <p className="text-sm md:text-lg text-white/50 font-light italic leading-relaxed">
                  Master this technique to add depth and resonance to every line
                  you write.
                </p>
              </div>
              
              {/* Tips section - positioned to not block content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute top-10 right-10 max-w-xs"
              >
                <div className="bg-black/60 backdrop-blur-sm border border-white/30 rounded-lg p-4">
                  <h5 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">
                    Key Tips
                  </h5>
                  <ul className="space-y-2">
                    {tips.map((tip, tipIndex) => (
                      <li
                        key={tipIndex}
                        className="text-white/90 text-xs leading-relaxed font-light"
                      >
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
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
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group bg-white/80 backdrop-blur-sm rounded-lg border border-gray-300 p-6 hover:bg-white hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full shadow-lg hover:shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-gray-800" />
        <h4 className="text-lg font-medium text-gray-900 tracking-wide">
          {title}
        </h4>
      </div>
      <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow font-light">
        {description}
      </p>
      <div className="bg-gray-100/80 backdrop-blur-sm p-4 rounded-lg mb-4 border border-gray-200">
        <p className="text-gray-800 italic font-light text-sm leading-relaxed whitespace-pre-line">
          "{example}"
        </p>
      </div>
      <p className="text-right text-xs text-gray-500 font-light">— {author}</p>
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
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group bg-white/80 backdrop-blur-sm rounded-lg border border-gray-300 p-6 hover:bg-white hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full shadow-lg hover:shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-gray-800" />
        <h4 className="text-lg font-medium text-gray-900 tracking-wide">
          {title}
        </h4>
      </div>
      <p className="text-gray-700 text-sm mb-6 leading-relaxed font-light">
        {description}
      </p>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-light text-gray-700 bg-gray-100/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
          {difficulty}
        </span>
        <span className="text-xs font-light text-gray-700 bg-gray-100/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300">
          {duration}
        </span>
      </div>
      <div className="mt-auto p-4 bg-gray-100/80 backdrop-blur-sm rounded-lg border border-gray-200">
        <p className="text-sm text-gray-800 leading-relaxed font-light italic">
          {prompt}
        </p>
      </div>
    </motion.div>
  );
};

export default function PoetryGuide() {
  return (
    <div className="w-screen overflow-x-hidden bg-black">
      <MasterTheCraftSection />

      {/* Essential Techniques Section - Full Viewport Coverage */}
      <section className="relative w-screen overflow-hidden">
        {/* Section Header */}
        <div className="w-screen h-screen flex items-center justify-center bg-black relative overflow-hidden">
          {/* Simple background */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full scale-110"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516246830500-1fdf4d7be155?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-6"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-6 tracking-tight">
              Crafting <span className="text-white/70">Masterpieces</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-thin leading-relaxed tracking-wide">
              Foundational elements that breathe life into your verse
            </p>
          </motion.div>
        </div>

        {/* Techniques - Full Screen Each */}
        <div className="w-screen">
          {techniques.map((technique, index) => (
            <TechniqueCard {...technique} index={index} key={index} />
          ))}
        </div>

        {/* Classical Forms Section - Minimalist B/W Theme */}
        <div className="w-screen py-20 bg-gray-50 relative overflow-hidden">
          {/* Subtle paper texture background */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full opacity-10"
              style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23000" opacity="0.2"/><circle cx="75" cy="75" r="1" fill="%23000" opacity="0.2"/><circle cx="50" cy="10" r="0.5" fill="%23000" opacity="0.1"/><circle cx="20" cy="80" r="0.5" fill="%23000" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-white/80 to-gray-50/50" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-tight">
                Timeless Structures
              </h2>
              <div className="w-16 h-px bg-black mx-auto mb-6"></div>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
                Classical forms that have shaped poetry through the ages
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {poetryForms.map((form, index) => (
                <PoetryFormCard {...form} index={index} key={index} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Writing Exercises Section - Elegant White Theme */}
        <div className="w-screen py-20 bg-gray-50 relative overflow-hidden">
          {/* Subtle paper texture background */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full opacity-10"
              style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23000" opacity="0.2"/><circle cx="75" cy="75" r="1" fill="%23000" opacity="0.2"/><circle cx="50" cy="10" r="0.5" fill="%23000" opacity="0.1"/><circle cx="20" cy="80" r="0.5" fill="%23000" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-white/80 to-gray-50/50" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-tight">
                Ignite Your Creativity
              </h2>
              <div className="w-16 h-px bg-black mx-auto mb-6"></div>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
                Transformative exercises to awaken your inner poet
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
            >
              {exercises.map((exercise, index) => (
                <ExerciseCard {...exercise} index={index} key={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
