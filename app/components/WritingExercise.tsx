"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Feather, BookOpen, 
  Users, Lightbulb, Clock,
  Save, RotateCcw, LucideIcon 
} from "lucide-react";

type ExerciseProps = {
  title: string;
  prompt: string;
  example?: string;
  difficulty: string;
  timeEstimate: string;
  icon: LucideIcon;
  index: number;
};

const ExerciseCard: React.FC<ExerciseProps> = ({ 
  title, 
  prompt, 
  example, 
  difficulty, 
  timeEstimate,
  icon: Icon, 
  index 
}) => {
  const [text, setText] = useState(example || '');
  const [savedText, setSavedText] = useState(example || '');
  const [isSaved, setIsSaved] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  useEffect(() => {
    setIsSaved(text === savedText);
  }, [text, savedText]);

  const handleSave = () => {
    setSavedText(text);
    setIsSaved(true);
    const key = `poetry-exercise-${title}`;
    localStorage.setItem(key, text);
    
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.classList.add('save-flash');
      setTimeout(() => textarea.classList.remove('save-flash'), 500);
    }
  };

  const handleReset = () => {
    setText(example || '');
    setSavedText(example || '');
    setIsSaved(true);
  };

  return (
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
        <div className="bg-gray-50 p-4 rounded-lg group relative">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-transparent text-gray-700 italic font-serif resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded p-2 transition-all duration-200"
            placeholder="Start writing your poem here..."
            rows={1}
          />
          <div className="absolute right-2 bottom-2 flex gap-2">
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
              title="Reset to original"
            >
              <RotateCcw className="w-4 h-4 text-gray-500" />
            </button>
            <button
              onClick={handleSave}
              disabled={isSaved}
              className={`p-1.5 rounded-full transition-colors ${
                isSaved 
                  ? 'text-emerald-500 hover:bg-emerald-50' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
              title="Save changes"
            >
              <Save className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        textarea {
          overflow-y: hidden;
        }
        .save-flash {
          animation: flash 0.5s;
        }
        @keyframes flash {
          0% { background-color: transparent; }
          50% { background-color: rgba(16, 185, 129, 0.1); }
          100% { background-color: transparent; }
        }
      `}</style>
    </motion.div>
  );
};

export const exercises = [
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

export default ExerciseCard;