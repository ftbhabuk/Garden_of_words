"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { BookOpen, Heart, Sparkles, HelpCircle, Feather, Copy, Check, Share2, BookmarkPlus } from "lucide-react";

// Theme configurations with enhanced styling
const aspectThemes = {
  "The Art of Expression": {
    icon: BookOpen,
    bgGradient: "bg-gradient-to-br from-blue-100/60 to-purple-100/60",
    iconBg: "bg-blue-50/80 backdrop-blur-sm",
    iconColor: "text-blue-700",
    poemBackground: "bg-gradient-to-br from-blue-100/20 via-blue-50/20 to-purple-100/20 backdrop-blur-md border border-white/30",
  },
  "Emotional Resonance": {
    icon: Heart,
    bgGradient: "bg-gradient-to-br from-rose-100/60 to-pink-100/60",
    iconBg: "bg-rose-50/80 backdrop-blur-sm",
    iconColor: "text-rose-700",
    poemBackground: "bg-gradient-to-br from-rose-100/20 via-pink-50/20 to-orange-100/20 backdrop-blur-md border border-white/30",
  },
  "Creative Freedom": {
    icon: Sparkles,
    bgGradient: "bg-gradient-to-br from-emerald-100/60 to-teal-100/60",
    iconBg: "bg-emerald-50/80 backdrop-blur-sm",
    iconColor: "text-emerald-700",
    poemBackground: "bg-gradient-to-br from-green-100/20 via-emerald-50/20 to-teal-100/20 backdrop-blur-md border border-white/30",
  },
};

// Poetry content (unchanged)
const poems = {
  "The Art of Expression": {
    style: "Lyric Poetry",
    content: `In silence deep, words take their flight,
Through metaphors of day and night.
Each syllable, a brushstroke pure,
Creates expressions that endure.`,
    interpretation: "This poem emphasizes the transformative power of poetic language, comparing words to brushstrokes that paint emotional landscapes."
  },
  "Emotional Resonance": {
    style: "Confessional Poetry",
    content: `Beneath the surface of my days,
Emotions dance in countless ways.
Through verses shared, hearts understand
The truth that flows like grains of sand.`,
    interpretation: "A reflection on how poetry serves as a medium for emotional truth, using natural imagery to convey the flow of feelings."
  },
  "Creative Freedom": {
    style: "Experimental Poetry",
    content: `Words     scatter
             like     stars
    across    blank    space
         breaking
                 free
    from     every     trace
         of     bounds`,
    interpretation: "The spatial arrangement mirrors the theme of breaking free from conventional forms, with words scattered like stars to embody creative liberation."
  },
};

// Line-by-line animation variants
const poemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

// TypewriterText Component (replaced with LineFadeInText)
const LineFadeInText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [isComplete, setIsComplete] = useState(false);
  const lines = text.split("\n");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, lines.length * 600); // 600ms per line for animation

    return () => clearTimeout(timer);
  }, [text, onComplete, lines.length]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.6, // Stagger each line
          },
        },
      }}
      className="font-serif text-gray-800 leading-relaxed"
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={poemVariants} className="whitespace-pre-line">
          {line}
        </motion.div>
      ))}
      {isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-0.5 w-16 bg-gray-300/70 mt-4 mx-auto"
        />
      )}
    </motion.div>
  );
};

// PoemActions Component (unchanged)
const PoemActions = ({ onCopy, onShare }: { onCopy: () => void; onShare: () => void }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleCopy = () => {
    onCopy();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex justify-center gap-4 mt-6"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-gray-200/50 transition-all duration-300"
        onClick={handleCopy}
      >
        {isCopied ? 
          <Check className="w-5 h-5 text-green-600" /> : 
          <Copy className="w-5 h-5 text-gray-600" />
        }
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-gray-200/50 transition-all duration-300"
        onClick={onShare}
      >
        <Share2 className="w-5 h-5 text-gray-600" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-gray-200/50 transition-all duration-300"
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <BookmarkPlus className={`w-5 h-5 ${isBookmarked ? 'text-blue-600' : 'text-gray-600'}`} />
      </motion.button>
    </motion.div>
  );
};

// PoetryAspect Component
interface PoetryAspectProps {
  title: string;
  description: string;
  index: number;
}

export const PoetryAspect: React.FC<PoetryAspectProps> = ({ title, description, index }) => {
  const theme = aspectThemes[title as keyof typeof aspectThemes];
  const Icon = theme?.icon || HelpCircle;
  const [showPoem, setShowPoem] = useState(false);
  const [showInterpretation, setShowInterpretation] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const poem = poems[title as keyof typeof poems];

  useEffect(() => {
    const poemTimer = setTimeout(() => {
      setShowPoem(true);
    }, 1500 + index * 300);

    return () => clearTimeout(poemTimer);
  }, [index]);

  const handlePoemComplete = () => {
    setTimeout(() => {
      setShowInterpretation(true);
      setShowActions(true); // Show actions only after interpretation
    }, 500);
  };

  const handleCopy = () => {
    if (poem) {
      navigator.clipboard.writeText(poem.content);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className={`${theme.bgGradient} backdrop-blur-md p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 w-full max-w-full mx-auto font-serif`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`p-4 ${theme.iconBg} rounded-lg shadow-inner mx-auto sm:mx-0`}
        >
          <Icon className={`w-7 h-7 ${theme.iconColor}`} />
        </motion.div>
        
        <div className="space-y-6 sm:space-y-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            // ignore
            // animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-3 sm:mb-4">{title}</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
          
          {showPoem && poem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`${theme.poemBackground} p-4 sm:p-8 rounded-xl text-center relative group shadow-lg w-full min-h-[400px] sm:min-h-[450px]`}
            >
              <motion.div className={`text-sm sm:text-base ${theme.iconColor} mb-4 sm:mb-6 italic flex items-center justify-center gap-2 font-medium`}>
                <Feather className="w-4 h-4 sm:w-5 sm:h-5" />
                {poem.style}
              </motion.div>
              
              <div className="text-base sm:text-lg max-w-prose mx-auto">
                <LineFadeInText 
                  text={poem.content} 
                  onComplete={handlePoemComplete}
                />
              </div>
              
              <AnimatePresence>
                {showActions && (
                  <PoemActions onCopy={handleCopy} onShare={() => alert("Sharing functionality would go here!")} />
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {showInterpretation && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-300/50 text-sm sm:text-base text-gray-700 italic leading-relaxed"
                  >
                    {poem.interpretation}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};