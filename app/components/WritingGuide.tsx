// PoetryGuide.tsx
"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  PenTool, BookOpen, Heart, Brain, 
  Sparkles, Music, Palette, Feather,
  Star, BookMarked, Clock, Users,
  Lightbulb, Quote, LucideIcon
} from "lucide-react";
import ExerciseCard, { exercises } from "./WritingExercise";

export const techniqueThemes = {
  imagery: {
    gradient: "from-rose-50/50 to-pink-50/50",
    accent: "bg-gradient-to-br from-rose-200/30 via-pink-100/30 to-rose-200/30",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600"
  },
  sound: {
    gradient: "from-violet-50/50 to-purple-50/50",
    accent: "bg-gradient-to-br from-violet-200/30 via-purple-100/30 to-violet-200/30",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600"
  },
  metaphor: {
    gradient: "from-cyan-50/50 to-blue-50/50",
    accent: "bg-gradient-to-br from-cyan-200/30 via-blue-100/30 to-cyan-200/30",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  emotional: {
    gradient: "from-amber-50/50 to-orange-50/50",
    accent: "bg-gradient-to-br from-amber-200/30 via-orange-100/30 to-amber-200/30",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  structure: {
    gradient: "from-emerald-50/50 to-green-50/50",
    accent: "bg-gradient-to-br from-emerald-200/30 via-green-100/30 to-emerald-200/30",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  voice: {
    gradient: "from-indigo-50/50 to-blue-50/50",
    accent: "bg-gradient-to-br from-indigo-200/30 via-blue-100/30 to-indigo-200/30",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600"
  }
} as const;

export const formThemes = {
  haiku: {
    gradient: "from-teal-50/50 to-emerald-50/50",
    accent: "bg-gradient-to-br from-teal-200/30 via-emerald-100/30 to-teal-200/30",
    iconColor: "text-teal-600"
  },
  sonnet: {
    gradient: "from-purple-50/50 to-indigo-50/50",
    accent: "bg-gradient-to-br from-purple-200/30 via-indigo-100/30 to-purple-200/30",
    iconColor: "text-purple-600"
  },
  freeVerse: {
    gradient: "from-blue-50/50 to-cyan-50/50",
    accent: "bg-gradient-to-br from-blue-200/30 via-cyan-100/30 to-blue-200/30",
    iconColor: "text-blue-600"
  }
} as const;

type TechniqueTheme = keyof typeof techniqueThemes;
type PoetryFormTheme = keyof typeof formThemes;

type TechniqueCardProps = {
  title: string;
  description: string;
  tips: string[];
  icon: LucideIcon;
  theme: TechniqueTheme;
  index: number;
};

type PoetryFormCardProps = {
  title: string;
  description: string;
  example: string;
  author: string;
  icon: LucideIcon;
  theme: PoetryFormTheme;
  index: number;
};

const techniques: Array<Omit<TechniqueCardProps, 'index'>> = [
  {
    title: "Imagery",
    description: "Paint pictures with words that engage the senses.",
    icon: Palette,
    theme: "imagery",
    tips: [
      "Use specific, concrete details that readers can visualize",
      "Appeal to multiple senses: sight, sound, touch, taste, smell",
      "Choose vivid, unexpected comparisons that surprise readers",
      "Create memorable scenes through careful observation"
    ]
  },
  {
    title: "Sound & Rhythm",
    description: "Create musical patterns that enhance meaning.",
    icon: Music,
    theme: "sound",
    tips: [
      "Experiment with alliteration and consonance for emphasis",
      "Use assonance to create internal rhymes and melody",
      "Vary line lengths and rhythms to control pacing",
      "Master the natural cadence of spoken language"
    ]
  },
  {
    title: "Metaphor & Symbolism",
    description: "Use figurative language to deepen meaning.",
    icon: Brain,
    theme: "metaphor",
    tips: [
      "Create fresh comparisons that surprise and illuminate",
      "Develop extended metaphors throughout a poem",
      "Choose symbols that resonate with universal meaning",
      "Layer multiple levels of interpretation"
    ]
  },
  {
    title: "Emotional Truth",
    description: "Connect with readers through authentic expression.",
    icon: Heart,
    theme: "emotional",
    tips: [
      "Draw from personal experiences and observations",
      "Express complex emotions with precision and nuance",
      "Find universal themes in specific moments",
      "Stay vulnerable while maintaining artistic control"
    ]
  },
  {
    title: "Structure & Form",
    description: "Shape your poems with purposeful design.",
    icon: BookMarked,
    theme: "structure",
    tips: [
      "Choose forms that complement your content",
      "Use line breaks and stanza breaks meaningfully",
      "Experiment with traditional and free verse forms",
      "Create tension between form and content"
    ]
  },
  {
    title: "Voice & Perspective",
    description: "Develop your unique poetic voice.",
    icon: Users,
    theme: "voice",
    tips: [
      "Find your authentic writing voice",
      "Experiment with different personas",
      "Balance consistency with variation",
      "Consider the relationship between speaker and subject"
    ]
  }
];

const poetryForms: Array<Omit<PoetryFormCardProps, 'index'>> = [
  {
    title: "Haiku",
    description: "Japanese form focusing on nature and moments in time. Three lines of 5-7-5 syllables.",
    example: "Morning frost glitters\nOn spider webs stretched between\nBare autumn branches",
    author: "Traditional Form",
    icon: BookMarked,
    theme: "haiku"
  },
  {
    title: "Sonnet",
    description: "14-line form exploring a single theme, often with a turn or volta near the end.",
    example: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate...",
    author: "William Shakespeare",
    icon: Star,
    theme: "sonnet"
  },
  {
    title: "Free Verse",
    description: "Modern form without fixed patterns, emphasizing natural rhythms and imagery.",
    example: "The red wheelbarrow\nglazed with rain\nwater\nbeside the white\nchickens",
    author: "William Carlos Williams",
    icon: Feather,
    theme: "freeVerse"
  }
];

const TechniqueCard: React.FC<TechniqueCardProps> = ({ 
  title, 
  description, 
  tips, 
  icon: Icon, 
  theme,
  index 
}) => {
  const styles = techniqueThemes[theme];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br ${styles.gradient} backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-3 ${styles.iconBg} rounded-lg shrink-0 shadow-sm`}>
          <Icon className={`w-6 h-6 ${styles.iconColor}`} />
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
            className={`flex items-center gap-2 p-2 rounded-lg ${styles.accent}`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${styles.iconColor}`} />
            <span className="text-gray-600">{tip}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const PoetryFormCard: React.FC<PoetryFormCardProps> = ({
  title,
  description,
  example,
  author,
  icon: Icon,
  theme,
  index
}) => {
  const styles = formThemes[theme];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`bg-gradient-to-br ${styles.gradient} backdrop-blur-sm p-6 rounded-xl shadow-lg`}
    >
      <Icon className={`w-6 h-6 ${styles.iconColor} mb-4`} />
      <h4 className="text-xl font-medium text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className={`${styles.accent} p-4 rounded-lg mb-2`}>
        <p className="text-gray-700 italic font-serif">{example}</p>
      </div>
      <p className="text-right text-sm text-gray-500">— {author}</p>
    </motion.div>
  );
};

export default function PoetryGuide() {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
            className="w-16 h-16 mx-auto mb-6 text-rose-600 bg-rose-50 rounded-full flex items-center justify-center shadow-lg"
          >
            <PenTool className="w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl font-serif mb-6 text-gray-800">Master the Craft of Poetry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Develop your poetic voice through essential techniques, guided practice, and timeless wisdom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-serif mb-4 text-gray-800">Essential Techniques</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master these fundamental elements to craft powerful and moving poetry.
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
          <h3 className="text-2xl font-serif mb-4 text-gray-800">Classical Forms</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore traditional poetic structures that have stood the test of time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {poetryForms.map((form, index) => (
            <PoetryFormCard key={form.title} {...form} index={index} />
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
            <ExerciseCard 
              key={exercise.title} 
              {...exercise} 
              index={index} 
              theme={exercise.theme as "object" | "sensory" | "memory" | "persona" | "wordchain"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}