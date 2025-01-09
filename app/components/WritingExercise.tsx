"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Feather, BookOpen, 
  Users, Lightbulb, Clock,
  Save, RotateCcw, LucideIcon 
} from "lucide-react";

const exerciseThemes = {
  sensory: {
    gradient: "from-purple-50/50 to-pink-50/50",
    accent: "bg-gradient-to-br from-purple-200/30 via-pink-100/30 to-purple-200/30",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50"
  },
  object: {
    gradient: "from-blue-50/50 to-cyan-50/50",
    accent: "bg-gradient-to-br from-blue-200/30 via-cyan-100/30 to-blue-200/30",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50"
  },
  memory: {
    gradient: "from-amber-50/50 to-yellow-50/50",
    accent: "bg-gradient-to-br from-amber-200/30 via-yellow-100/30 to-amber-200/30",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50"
  },
  persona: {
    gradient: "from-rose-50/50 to-pink-50/50",
    accent: "bg-gradient-to-br from-rose-200/30 via-pink-100/30 to-rose-200/30",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50"
  },
  wordchain: {
    gradient: "from-emerald-50/50 to-green-50/50",
    accent: "bg-gradient-to-br from-emerald-200/30 via-green-100/30 to-emerald-200/30",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50"
  }
};

type ExerciseProps = {
  title: string;
  prompt: string;
  example?: string;
  difficulty: string;
  timeEstimate: string;
  icon: LucideIcon;
  theme?: keyof typeof exerciseThemes;
  index: number;
};

const ExerciseCard: React.FC<ExerciseProps> = ({ 
  title, 
  prompt, 
  example, 
  difficulty, 
  timeEstimate,
  icon: Icon, 
  theme = "sensory",
  index 
}) => {
  const [text, setText] = useState(example || '');
  const [savedText, setSavedText] = useState(example || '');
  const [isSaved, setIsSaved] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const styles = exerciseThemes[theme];

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
      className={`bg-gradient-to-br ${styles.gradient} backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 ${styles.iconBg} rounded-lg shrink-0`}>
          <Icon className={`w-6 h-6 ${styles.iconColor}`} />
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-sm px-2 py-1 rounded-full font-medium ${
            difficulty === "Beginner" ? "bg-green-100 text-green-700" :
            difficulty === "Intermediate" ? "bg-amber-100 text-amber-700" :
            "bg-rose-100 text-rose-700"
          }`}>
            {difficulty}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1 bg-white/50 px-2 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            {timeEstimate}
          </span>
        </div>
      </div>
      <h4 className="text-lg font-medium text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{prompt}</p>
      {example && (
        <div className={`${styles.accent} p-4 rounded-lg group relative`}>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-transparent text-gray-700 italic font-serif resize-none focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded p-2 transition-all duration-200"
            placeholder="Start writing your poem here..."
            rows={1}
          />
          <div className="absolute right-2 bottom-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full hover:bg-white/50 transition-colors"
              title="Reset to original"
            >
              <RotateCcw className={`w-4 h-4 ${styles.iconColor}`} />
            </button>
            <button
              onClick={handleSave}
              disabled={isSaved}
              className={`p-1.5 rounded-full transition-colors ${
                isSaved 
                  ? `${styles.iconColor} hover:bg-white/50` 
                  : 'text-gray-500 hover:bg-white/50'
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
          50% { background-color: rgba(255, 255, 255, 0.3); }
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
    icon: Sparkles,
    theme: "sensory"
  },
  {
    title: "Object Study",
    prompt: "Choose an ordinary object and describe it in extraordinary ways using metaphor and imagery.",
    example: "The old kettle sings\nits steam-breath rising like prayers\nto kitchen ceiling",
    difficulty: "Beginner",
    timeEstimate: "45 mins",
    icon: Feather,
    theme: "object"
  },
  {
    title: "Memory Poem",
    prompt: "Recall a vivid memory and focus on its sensory details and emotional resonance.",
    example: "Grandmother's kitchen:\ncinnamon clouds, rolling pins,\nflour-dusted love",
    difficulty: "Intermediate",
    timeEstimate: "1 hour",
    icon: BookOpen,
    theme: "memory"
  },
  {
    title: "Persona Poem",
    prompt: "Write from the perspective of someone or something entirely different from yourself.",
    example: "I am the moon, watching\nover lovers' whispered dreams\nand thieves' secret paths",
    difficulty: "Advanced",
    timeEstimate: "1.5 hours",
    icon: Users,
    theme: "persona"
  },
  {
    title: "Word Chain",
    prompt: "Start with one word and let each new line connect through sound or meaning.",
    example: "Light\nflight\nnight\nfright\nsight",
    difficulty: "Beginner",
    timeEstimate: "30 mins",
    icon: Lightbulb,
    theme: "wordchain"
  }
];

export default ExerciseCard;