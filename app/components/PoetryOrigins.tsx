"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { History, Scroll, Globe, BookOpen, LucideIcon, Trees, Feather, ChevronDown, Sparkles, Star } from "lucide-react";

interface HistoricalEraProps {
  era: string;
  description: string;
  date: string;
  icon: LucideIcon;
  index: number;
  examples: Array<{
    title: string;
    content: string;
    translation?: string;
    form: string;
  }>;
}

interface QuoteProps {
  text: string;
  author: string;
  role?: string;
  era?: string;
  index: number;
}

const PoetryExample = ({ title, content, translation, form }: { 
  title: string; 
  content: string; 
  translation?: string;
  form: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-4 bg-white/40 rounded-lg p-4"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <Feather className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
            <div className="pt-4 space-y-3">
              <div className="italic text-gray-600">{content}</div>
              {translation && (
                <div className="text-sm text-gray-500 border-t border-gray-200 pt-2">
                  Translation: {translation}
                </div>
              )}
              <div className="text-xs text-emerald-600 font-medium">
                Form: {form}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HistoricalEra: React.FC<HistoricalEraProps> = ({ 
  era, 
  description, 
  date, 
  icon: Icon, 
  index,
  examples 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-emerald-600 mb-1 font-medium"
          >
            {date}
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-medium text-gray-800 mb-2"
          >
            {era}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {isExpanded ? "Hide Examples" : "View Examples"}
          </motion.button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {examples.map((example, idx) => (
                  <PoetryExample key={idx} {...example} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Quote: React.FC<QuoteProps> = ({ text, author, role, era, index }) => (
  <motion.blockquote
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm p-8 rounded-xl shadow-lg relative group"
  >
    {/* fkin need quote here */}
    <Trees className="w-8 h-8 text-emerald-500/20 absolute top-4 left-4" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <p className="text-lg italic text-gray-700 mb-4 relative z-10">{text}</p>
      <footer className="text-sm text-gray-600">
        <cite className="font-medium flex items-center gap-2">
          <Star className="w-4 h-4 text-emerald-500" />
          {author}
        </cite>
        {role && <span className="block text-gray-500 mt-1">{role}</span>}
        {era && <span className="block text-emerald-600 text-xs mt-1">{era}</span>}
      </footer>
    </motion.div>
  </motion.blockquote>
);

export default function PoetryOrigins() {
  const historicalEras = [
    {
      era: "Ancient Oral Traditions",
      date: "Before 3000 BCE",
      description: "Poetry began as oral traditions, with ancient civilizations using rhythm and rhyme to remember and share stories, laws, and cultural knowledge across generations.",
      icon: History,
      examples: [
        {
          title: "Epic of Gilgamesh",
          content: "He who saw the Deep, the country's foundation...",
          translation: "The one who saw all, who was the foundation of the land...",
          form: "Ancient Mesopotamian Epic Poetry"
        },
        {
          title: "Vedic Hymns",
          content: "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्",
          translation: "I praise Agni, the foremost priest, the divine minister of the sacrifice",
          form: "Sanskrit Devotional Verse"
        }
      ]
    },
    {
      era: "Classical Period",
      date: "800 BCE - 500 CE",
      description: "Greek and Roman poets established many forms we still use today, from epic poetry like Homer's Iliad to Sappho's intimate lyric poems.",
      icon: Scroll,
      examples: [
        {
          title: "Sappho's Lyric",
          content: "φαίνεταί μοι κῆνος ἴσος θέοισιν...",
          translation: "He seems to me equal to the gods...",
          form: "Ancient Greek Lyric Poetry"
        },
        {
          title: "Virgil's Aeneid",
          content: "Arma virumque cano...",
          translation: "I sing of arms and the man...",
          form: "Latin Epic Poetry"
        }
      ]
    },
    {
      era: "Global Renaissance",
      date: "500 - 1500 CE",
      description: "Poetry flourished globally, from Tang Dynasty Chinese poetry to Persian Sufi verses, each culture developing unique forms and traditions.",
      icon: Globe,
      examples: [
        {
          title: "Li Bai's Night Thoughts",
          content: "床前明月光，疑是地上霜...",
          translation: "Before my bed, the bright moonlight, seems like frost on the ground...",
          form: "Tang Dynasty Regulated Verse"
        },
        {
          title: "Rumi's Mystical Verse",
          content: "در درون من نمی گنجد، نشانم می دهد...",
          translation: "What you seek is seeking you...",
          form: "Persian Ghazal"
        }
      ]
    },
    {
      era: "Modern Evolution",
      date: "1500 CE - Present",
      description: "Poetry transformed through movements like Romanticism, Modernism, and free verse, becoming more experimental and personally expressive.",
      icon: BookOpen,
      examples: [
        {
          title: "Walt Whitman's Free Verse",
          content: "I celebrate myself, and sing myself...",
          form: "Modern Free Verse"
        },
        {
          title: "Sylvia Plath's Confessional",
          content: "I shut my eyes and all the world drops dead...",
          form: "Confessional Poetry"
        }
      ]
    }
  ];

  const quotes = [
    {
      text: "Poetry is the spontaneous overflow of powerful feelings; it takes its origin from emotion recollected in tranquility.",
      author: "William Wordsworth",
      role: "English Romantic Poet",
      era: "Romantic Period (1800)"
    },
    {
      text: "If I read a book and it makes my whole body so cold no fire can ever warm me, I know that is poetry.",
      author: "Emily Dickinson",
      role: "American Poet",
      era: "Victorian Era (1862)"
    },
    {
      text: "Poetry is not a turning loose of emotion, but an escape from emotion; it is not the expression of personality, but an escape from personality.",
      author: "T.S. Eliot",
      role: "Modernist Poet",
      era: "Modern Period (1921)"
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-white to-gray-50">
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-serif mb-6 text-gray-800"
          >
            The Origins of Poetry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Journey through time to discover how poetry has evolved from ancient oral traditions 
            to become one of humanity's most profound forms of expression.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {historicalEras.map((era, index) => (
            <HistoricalEra key={era.era} {...era} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {quotes.map((quote, index) => (
            <Quote key={quote.author} {...quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}