"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, BookOpen, Heart, Sparkles, Copy, Check, Share2, BookmarkPlus, Feather } from "lucide-react";

const icons = {
  "The Art of Expression": BookOpen,
  "Emotional Resonance": Heart,
  "Creative Freedom": Sparkles,
};

const poems = {
  "The Art of Expression": {
    style: "Lyric Poetry",
    content: `In silence deep, words take their flight,
Through metaphors of day and night.
Each syllable, a brushstroke pure,
Creates expressions that endure.`,
    background: "bg-gradient-to-br from-blue-100 to-purple-100",
    interpretation: "This poem emphasizes the transformative power of poetic language, comparing words to brushstrokes that paint emotional landscapes."
  },
  "Emotional Resonance": {
    style: "Confessional Poetry",
    content: `Beneath the surface of my days,
Emotions dance in countless ways.
Through verses shared, hearts understand
The truth that flows like grains of sand.`,
    background: "bg-gradient-to-br from-rose-100 to-orange-100",
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
    background: "bg-gradient-to-br from-green-100 to-teal-100",
    interpretation: "The spatial arrangement mirrors the theme of breaking free from conventional forms, with words scattered like stars to embody creative liberation."
  }
};

interface PoetryAspectProps {
  title: string;
  description: string;
  index: number;
}

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex justify-center gap-4 mt-6"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-gray-200/50 transition-colors"
        onClick={handleCopy}
      >
        {isCopied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-gray-200/50 transition-colors"
        onClick={onShare}
      >
        <Share2 className="w-5 h-5 text-gray-600" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full hover:bg-gray-200/50 transition-colors"
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <BookmarkPlus className={`w-5 h-5 ${isBookmarked ? 'text-blue-600' : 'text-gray-600'}`} />
      </motion.button>
    </motion.div>
  );
};

const PoetryAspect: React.FC<PoetryAspectProps> = ({ title, description, index }) => {
  const Icon = icons[title as keyof typeof icons] || HelpCircle;
  const [showPoem, setShowPoem] = useState(false);
  const [showInterpretation, setShowInterpretation] = useState(false);
  const poem = poems[title as keyof typeof poems];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoem(true);
    }, 2000 + index * 500);
    
    return () => clearTimeout(timer);
  }, [index]);

  const handleCopy = () => {
    if (poem) {
      navigator.clipboard.writeText(poem.content);
    }
  };

  const handleShare = () => {
    // Implement sharing functionality
    alert("Sharing functionality would go here!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-100 rounded-lg">
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
        <div className="space-y-6 w-full">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              className="text-2xl font-medium text-gray-800 mb-3"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
          
          {showPoem && poem && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${poem.background} p-8 rounded-lg text-center relative group shadow-sm`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-base text-gray-600 mb-6 italic flex items-center justify-center gap-2 font-medium"
              >
                <Feather className="w-5 h-5" />
                {poem.style}
              </motion.div>
              <div className="text-lg text-gray-800 leading-relaxed">
                <TypewriterText 
                  text={poem.content} 
                  onComplete={() => setTimeout(() => setShowInterpretation(true), 500)}
                />
              </div>
              <PoemActions onCopy={handleCopy} onShare={handleShare} />
              
              <AnimatePresence>
                {showInterpretation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-300 text-base text-gray-700 italic leading-relaxed"
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
    <section className="py-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
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