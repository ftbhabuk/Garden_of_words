"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Feather, Zap, Edit3, Palette, BookOpen, Sparkles } from "lucide-react";

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Multiple Poetry Styles",
      description: "From classical sonnets to modern free verse, haikus to ballads - explore every poetic form."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Generation",
      description: "Watch your ideas transform into beautiful poetry in seconds, not hours."
    },
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Easy Refinement",
      description: "Fine-tune tone, style, and emotion until your poem captures exactly what you envision."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Customizable Themes",
      description: "Love, nature, melancholy, joy - express any emotion or explore any theme you desire."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learn While You Create",
      description: "Understand poetic techniques and structures as you generate and refine your work."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Inspiration On Demand",
      description: "Never face writer's block again - generate ideas and starting points instantly."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl text-stone-800 mb-4">
            Everything You Need to Create
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-light">
            Powerful tools designed to nurture your creativity and bring your poetic vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-lg border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300">
                <div className="text-stone-600 mb-4 group-hover:text-stone-800 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl text-stone-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of poetry can it generate?",
      answer: "Our AI can create various poetry forms including haikus, sonnets, free verse, ballads, limericks, acrostic poems, and more. You can specify the style you want or let the AI choose the most fitting form for your prompt."
    },
    {
      question: "How does the AI work?",
      answer: "The AI analyzes your prompt for themes, emotions, and imagery, then crafts poetry using advanced language models trained on classical and contemporary poetry. It understands poetic devices like meter, rhyme, and metaphor to create authentic verse."
    },
    {
      question: "Can I edit the generated poems?",
      answer: "Absolutely! You can refine the tone, adjust specific lines, change the style, or request variations. Think of the AI as your collaborative writing partner - it provides the foundation, and you shape it to perfection."
    },
    {
      question: "Is there a limit to how many poems I can create?",
      answer: "You can generate as many poems as inspiration strikes! There's no daily limit - whether you're writing one poem or exploring dozens of variations, the garden of words is always open."
    },
    {
      question: "Can I save and share my poems?",
      answer: "Yes! Once you're happy with your poem, you can easily copy it, save it to your device, or share it with friends and family. Your creative work is yours to keep and share as you wish."
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "Simply try again! You can regenerate with the same prompt for different variations, adjust your prompt for better results, or use our refinement tools to guide the AI toward your vision."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl text-stone-800 mb-4">
            Questions & Answers
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-light">
            Everything you need to know about creating poetry with AI.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left hover:bg-stone-50 transition-colors duration-200 focus:outline-none focus:bg-stone-50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-stone-800 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-stone-500 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-stone-600 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-stone-600 font-light mb-4">
            Still have questions? 
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const chatSection = document.getElementById("chat");
              chatSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2 text-stone-700 border border-stone-300 rounded-md hover:border-stone-400 hover:shadow-sm transition-all duration-300 font-light"
          >
            Try It Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Combined Export Component
const FAQAndFeatures = () => {
  return (
    <>
      <FeaturesSection />
      <FAQSection />
    </>
  );
};

export default FAQAndFeatures;