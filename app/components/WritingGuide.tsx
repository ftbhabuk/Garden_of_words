"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  PenTool, BookOpen, Heart, Brain, 
  Sparkles, Music, Palette, Feather,
  Star, BookMarked, Clock, Users,
  Lightbulb, Quote, LucideIcon
} from "lucide-react";

// Enhanced type definitions
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
  difficulty: string; // Change this line
  
  timeEstimate: string;
  icon: LucideIcon;
  index: number;
};

type PoetryFormProps = {
  title: string;
  description: string;
  example: string;
  author: string;
  icon: LucideIcon;
  index: number;
};

const QuoteCard = ({ quote, author, index }: { quote: string; author: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-emerald-50 p-6 rounded-xl relative"
  >
    <Quote className="w-8 h-8 text-emerald-200 absolute -top-4 -left-4" />
    <p className="text-gray-700 font-serif text-lg mb-2 italic">{quote}</p>
    <p className="text-right text-emerald-600 font-medium">— {author}</p>
  </motion.div>
);

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

const ExerciseCard: React.FC<ExerciseProps> = ({ 
  title, 
  prompt, 
  example, 
  difficulty, 
  timeEstimate,
  icon: Icon, 
  index 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md"
  >
    <div className="flex justify-between items-start mb-4">
      <Icon className="w-6 h-6 text-emerald-600" />
      <div className="flex items-center gap-2">
        <span className={`text-sm px-2 py-1 rounded ${
          difficulty === "Beginner" ? "bg-green-100 text-green-700" :
          difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
          "bg-red-100 text-red-700"
        }`}>
          {difficulty}
        </span>
        <span className="text-sm text-gray-500 flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {timeEstimate}
        </span>
      </div>
    </div>
    <h4 className="text-lg font-medium text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600 mb-4">{prompt}</p>
    {example && (
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-700 italic font-serif">{example}</p>
      </div>
    )}
  </motion.div>
);

const PoetryFormCard: React.FC<PoetryFormProps> = ({
  title,
  description,
  example,
  author,
  icon: Icon,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-md"
  >
    <Icon className="w-6 h-6 text-emerald-600 mb-4" />
    <h4 className="text-xl font-medium text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="bg-emerald-50 p-4 rounded-lg mb-2">
      <p className="text-gray-700 italic font-serif">{example}</p>
    </div>
    <p className="text-right text-sm text-gray-500">— {author}</p>
  </motion.div>
);

export default function PoetryGuide() {

  const techniques = [
    {
      title: "Imagery",
      description: "Paint pictures with words that engage the senses.",
      icon: Palette,
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
      tips: [
        "Find your authentic writing voice",
        "Experiment with different personas",
        "Balance consistency with variation",
        "Consider the relationship between speaker and subject"
      ]
    }
  ];

  const exercises = [
    {
      title: "Sensory Walk",
      prompt: "Take a mindful walk and note one detail for each sense. Create a poem from your observations.",
      example: "Crunch of autumn leaves\nBitter coffee on my tongue\nWind whispers secrets",
      difficulty: "Beginner",
      timeEstimate: "30 mins",
      icon: Sparkles
    },
    {
      title: "Object Study",
      prompt: "Choose an ordinary object and describe it in extraordinary ways using metaphor and imagery.",
      example: "The old kettle sings\nits steam-breath rising like prayers\nto kitchen ceiling",
      difficulty: "Beginner",
      timeEstimate: "45 mins",
      icon: Feather
    },
    {
      title: "Memory Poem",
      prompt: "Recall a vivid memory and focus on its sensory details and emotional resonance.",
      example: "Grandmother's kitchen:\ncinnamon clouds, rolling pins,\nflour-dusted love",
      difficulty: "Intermediate",
      timeEstimate: "1 hour",
      icon: BookOpen
    },
    {
      title: "Persona Poem",
      prompt: "Write from the perspective of someone or something entirely different from yourself.",
      example: "I am the moon, watching\nover lovers' whispered dreams\nand thieves' secret paths",
      difficulty: "Advanced",
      timeEstimate: "1.5 hours",
      icon: Users
    },
    {
      title: "Word Chain",
      prompt: "Start with one word and let each new line connect through sound or meaning.",
      example: "Light\nflight\nnight\nfright\nsight",
      difficulty: "Beginner",
      timeEstimate: "30 mins",
      icon: Lightbulb
    }
  ];

  const poetryForms = [
    {
      title: "Haiku",
      description: "Japanese form focusing on nature and moments in time. Three lines of 5-7-5 syllables.",
      example: "Morning frost glitters\nOn spider webs stretched between\nBare autumn branches",
      author: "Traditional Form",
      icon: BookMarked
    },
    {
      title: "Sonnet",
      description: "14-line form exploring a single theme, often with a turn or volta near the end.",
      example: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate...",
      author: "William Shakespeare",
      icon: Star
    },
    {
      title: "Free Verse",
      description: "Modern form without fixed patterns, emphasizing natural rhythms and imagery.",
      example: "The red wheelbarrow\nglazed with rain\nwater\nbeside the white\nchickens",
      author: "William Carlos Williams",
      icon: Feather
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
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
          <h2 className="text-4xl font-serif mb-6 text-gray-800">Master the Craft of Poetry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Develop your poetic voice through essential techniques, guided practice, and timeless wisdom.
          </p>
        </motion.div>

        {/* Techniques Section */}
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

        {/* Poetry Forms Section */}
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
 {/* Writing Exercises Section */}
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

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-serif mb-4 text-gray-800">Begin Your Poetry Journey</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Every great poet started with a single word. Your journey begins now.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
            Start Writing
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}