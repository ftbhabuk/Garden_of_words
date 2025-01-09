"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feather, ChevronDown, Sparkles, LucideIcon } from "lucide-react";

export interface PoetryExampleProps {
  title: string;
  content: string;
  translation?: string;
  form: string;
}

export interface HistoricalEraProps {
  era: string;
  description: string;
  date: string;
  icon: LucideIcon;
  index: number;
  examples: PoetryExampleProps[];
  color: string;
  accentColor: string;
  iconBg: string;
  iconColor: string;
}

const PoetryExample = ({ title, content, translation, form }: PoetryExampleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-4 bg-white/40 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-2">
          <Feather className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">{title}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-all group-hover:text-gray-600 ${isExpanded ? 'rotate-180' : ''}`}
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
              <div className="italic text-gray-600 font-serif">{content}</div>
              {translation && (
                <div className="text-sm text-gray-500 border-t border-gray-100 pt-2">
                  Translation: {translation}
                </div>
              )}
              <div className="text-xs text-gray-600 font-medium">
                Form: {form}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HistoricalEra = ({ 
  era, 
  description, 
  date, 
  icon: Icon, 
  index,
  examples,
  color,
  accentColor,
  iconBg,
  iconColor
}: HistoricalEraProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden bg-gradient-to-br ${color} backdrop-blur-sm p-4 md:p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative flex gap-4">
        <div className={`p-2.5 md:p-3 rounded-lg shrink-0 shadow-md transition-all duration-300 group-hover:shadow-lg ${iconBg} backdrop-blur-sm self-start`}>
          <Icon className={`w-5 h-5 md:w-6 md:h-6 ${iconColor}`} />
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex flex-col space-y-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-600 font-medium tracking-wide"
            >
              {date}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-medium text-gray-800"
            >
              {era}
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="-ml-10 text-base md:text-lg text-gray-700 leading-relaxed">
            {description}
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-10 text-sm flex items-center gap-2 group/btn text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <Sparkles className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
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

export { HistoricalEra, PoetryExample };