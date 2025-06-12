"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What types of poetry can it generate?",
      answer:
        "Our AI can create various poetry forms including haikus, sonnets, free verse, ballads, limericks, acrostic poems, and more. You can specify the style you want or let the AI choose the most fitting form for your prompt.",
    },
    {
      question: "How does the AI work?",
      answer:
        "The AI analyzes your prompt for themes, emotions, and imagery, then crafts poetry using advanced language models trained on classical and contemporary poetry. It understands poetic devices like meter, rhyme, and metaphor to create authentic verse.",
    },
    {
      question: "Can I edit the generated poems?",
      answer:
        "You can refine the tone, adjust specific lines, change the style, or request variations. Think of the AI as your collaborative writing partner - it provides the foundation, and you shape it to perfection.",
    },
    {
      question: "Is there a limit to how many poems I can create?",
      answer:
        "You can generate as many poems as inspiration strikes! There's no daily limit - whether you're writing one poem or exploring dozens of variations, the garden of words is always open.",
    },
    {
      question: "Can I save and share my poems?",
      answer:
        "Yes! Once you're happy with your poem, you can easily copy it, save it to your device, or share it with friends and family. Your creative work is yours to keep and share as you wish.",
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer:
        "Simply try again! You can regenerate with the same prompt for different variations, adjust your prompt for better results, or use our refinement tools to guide the AI toward your vision.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-32 relative">
      {/* Background with subtle stars */}
      <div className="absolute inset-0 z-0">
      <Image
          src="/image.png"
          alt="Floating fountain pens with holographic effects"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
        <div className="absolute inset-0 opacity-30">
          {/* Subtle star field effect */}
          
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">Questions & Answers</h2>
          <p className="text-white/70 max-w-2xl mx-auto font-light text-lg leading-relaxed">
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
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left hover:bg-white/10 transition-colors duration-300 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-light text-white pr-4 text-lg">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-white/70 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-white/70 font-light leading-relaxed">{faq.answer}</p>
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
          className="text-center mt-16"
        >
          <p className="text-white/70 font-light mb-6 text-lg">Still have questions?</p>
          <Button
            size="lg"
            className="bg-white/8 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm rounded-full px-10 py-4 text-lg font-light transition-all duration-300"
          >
            Begin Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
