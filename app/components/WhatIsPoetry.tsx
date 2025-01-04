"use client"
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";


// 


interface PoetryAspectProps {
  title: string;
  description: string;
}

const PoetryAspect: React.FC<PoetryAspectProps> = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-emerald-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
  >
    <h3 className="text-lg font-serif mb-2 text-emerald-600 dark:text-emerald-400">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </motion.div>
);

export default function WhatIsPoetry() {
  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="w-12 h-12 mb-6 text-emerald-600" />
            <h2 className="text-3xl font-serif mb-6 dark:text-white">
              What Does Poetry Even Mean?
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
            >
              Poetry is more than just words on a page—it&apos;s the art of distilling human 
              experience into language that moves, challenges, and transforms. It&apos;s where 
              emotion meets expression, where ordinary words become extraordinary vessels 
              of meaning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Like music without instruments, poetry creates rhythm and melody through 
              carefully chosen words. It&apos;s the space where metaphors paint pictures, 
              where silence between words speaks as loudly as the words themselves.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <PoetryAspect
              title="Expression"
              description="A voice for emotions that prose cannot capture"
            />
            <PoetryAspect
              title="Connection"
              description="Bridge between hearts and minds across time"
            />
            <PoetryAspect
              title="Discovery"
              description="Journey into deeper understanding of self"
            />
            <PoetryAspect
              title="Freedom"
              description="Liberation from conventional language rules"
            />
          </div>
        </div>
      </div>
    </section>
  );
}