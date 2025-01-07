"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, Sparkles, HelpCircle, Feather, Copy, Check, Share2, BookmarkPlus } from "lucide-react";

// Theme configurations
const aspectThemes = {
  "The Art of Expression": {
    icon: BookOpen,
    bgGradient: "bg-gradient-to-br from-blue-50/50 to-purple-50/50",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    poemBackground: "bg-gradient-to-br from-blue-200/30 via-blue-100/30 to-purple-200/30", // Adjusted opacity
  },
  "Emotional Resonance": {
    icon: Heart,
    bgGradient: "bg-gradient-to-br from-rose-50/50 to-pink-50/50",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    poemBackground: "bg-gradient-to-br from-rose-200/30 via-pink-100/30 to-orange-200/30"
  },
  "Creative Freedom": {
    icon: Sparkles,
    bgGradient: "bg-gradient-to-br from-emerald-50/50 to-teal-50/50",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
   poemBackground: "bg-gradient-to-br from-green-200/30 via-emerald-100/30 to-teal-200/30"
  }
};

// Poetry content
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
  }
};

// TypewriterText Component
const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
        onComplete?.();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-serif"
    >
      <div className="whitespace-pre-line">{displayedText}</div>
      {isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-0.5 w-16 bg-gray-300 mt-4 mx-auto"
        />
      )}
    </motion.div>
  );
};

// PoemActions Component
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
  const poem = poems[title as keyof typeof poems];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoem(true);
    }, 1500 + index * 300);
    
    return () => clearTimeout(timer);
  }, [index]);

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
      className={`${theme.bgGradient} backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20`}
    >
      <div className="flex items-start gap-6">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`p-4 ${theme.iconBg} rounded-lg shadow-inner`}
        >
          <Icon className={`w-7 h-7 ${theme.iconColor}`} />
        </motion.div>
        
        <div className="space-y-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-medium text-gray-800 mb-4">{title}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
          
          {showPoem && poem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`${theme.poemBackground} p-8 rounded-xl text-center relative group shadow-lg backdrop-blur-sm`}
            >
              <motion.div className={`text-base ${theme.iconColor} mb-6 italic flex items-center justify-center gap-2 font-medium`}>
                <Feather className="w-5 h-5" />
                {poem.style}
              </motion.div>
              
              <div className="text-lg text-gray-800 leading-relaxed">
                <TypewriterText 
                  text={poem.content} 
                  onComplete={() => setTimeout(() => setShowInterpretation(true), 500)}
                />
              </div>
              
              <PoemActions onCopy={handleCopy} onShare={() => alert("Sharing functionality would go here!")} />
              
              <AnimatePresence>
                {showInterpretation && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 pt-6 border-t border-gray-300/50 text-base text-gray-700 italic leading-relaxed"
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