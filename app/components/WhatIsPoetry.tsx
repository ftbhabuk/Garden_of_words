import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { MaxWidthWrapper } from "./max-width-wrapper";

interface PoetryAspectProps {
  title: string;
  description: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PoetryAspect: React.FC<PoetryAspectProps> = ({ title, description }) => (
  <motion.div
    variants={itemVariants}
    className="bg-emerald-50 dark:bg-gray-700 p-6 rounded-lg"
  >
    <h3 className="text-lg font-serif mb-2 text-emerald-600 dark:text-emerald-400">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export const WhatIsPoetry = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <MaxWidthWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4"
        >
          <div>
            <motion.div variants={itemVariants}>
              <HelpCircle className="w-12 h-12 mb-6 text-emerald-600" />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-serif mb-6"
            >
              What Does Poetry Even Mean?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
            >
              Poetry is more than just words on a page—it&apos;s the art of distilling human 
              experience into language that moves, challenges, and transforms. It&apos;s where 
              emotion meets expression, where ordinary words become extraordinary vessels 
              of meaning.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Like music without instruments, poetry creates rhythm and melody through 
              carefully chosen words. It&apos;s the space where metaphors paint pictures, 
              where silence between words speaks as loudly as the words themselves, 
              and where personal truth becomes universal understanding.
            </motion.p>
          </div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
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
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};
