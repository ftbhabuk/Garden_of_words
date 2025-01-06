"use client"
import React from "react";
import { motion } from "framer-motion";
import { History, Scroll, Globe, BookOpen, LucideIcon } from "lucide-react";

// Define types for HistoricalEra props
interface HistoricalEraProps {
    era: string;
    description: string;
    date: string;
    icon: LucideIcon; // Type for Lucide icons
    index: number;
  }
  
  // Define types for Quote props
  interface QuoteProps {
    text: string;
    author: string;
    role?: string; // Optional role
    index: number;
  }

  const HistoricalEra: React.FC<HistoricalEraProps> = ({ era, description, date, icon: Icon, index }) => (
    <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gray-50 rounded-lg shrink-0">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <div>
        <div className="text-sm text-emerald-600 mb-1">{date}</div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">{era}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Quote: React.FC<QuoteProps> = ({ text, author, role, index }) => (
    <motion.blockquote
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md"
  >
    <p className="text-lg italic text-gray-700 mb-4">{text}</p>
    <footer className="text-sm text-gray-600">
      <cite className="font-medium">{author}</cite>
      {role && <span className="block text-gray-500">{role}</span>}
    </footer>
  </motion.blockquote>
);

export default function PoetryOrigins() {
  const historicalEras = [
    {
      era: "Ancient Oral Traditions",
      date: "Before 3000 BCE",
      description: "Poetry began as oral traditions, with ancient civilizations using rhythm and rhyme to remember and share stories, laws, and cultural knowledge across generations.",
      icon: History
    },
    {
      era: "Classical Period",
      date: "800 BCE - 500 CE",
      description: "Greek and Roman poets established many forms we still use today, from epic poetry like Homer's Iliad to Sappho's intimate lyric poems.",
      icon: Scroll
    },
    {
      era: "Global Renaissance",
      date: "500 - 1500 CE",
      description: "Poetry flourished globally, from Tang Dynasty Chinese poetry to Persian Sufi verses, each culture developing unique forms and traditions.",
      icon: Globe
    },
    {
      era: "Modern Evolution",
      date: "1500 CE - Present",
      description: "Poetry transformed through movements like Romanticism, Modernism, and free verse, becoming more experimental and personally expressive.",
      icon: BookOpen
    }
  ];

  const quotes = [
    {
      text: "Poetry is the spontaneous overflow of powerful feelings; it takes its origin from emotion recollected in tranquility.",
      author: "William Wordsworth",
      role: "English Romantic Poet"
    },
    {
      text: "If I read a book and it makes my whole body so cold no fire can ever warm me, I know that is poetry.",
      author: "Emily Dickinson",
      role: "American Poet"
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 mx-auto mb-6 text-gray-600 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <History className="w-8 h-8" />
          </motion.div>
          <h2 className="text-4xl font-serif mb-6 text-gray-800">The Origins of Poetry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Journey through time to discover how poetry has evolved from ancient oral traditions 
            to become one of humanity's most profound forms of expression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {historicalEras.map((era, index) => (
            <HistoricalEra key={era.era} {...era} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {quotes.map((quote, index) => (
            <Quote key={quote.author} {...quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}