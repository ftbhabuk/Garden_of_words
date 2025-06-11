"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import Image from "next/image"

const PoetryDemoSection = () => {
  const [currentExample, setCurrentExample] = useState(0)

  const poetryExamples = [
    {
      prompt: "Write a haiku about morning coffee",
      tags: ["Haiku", "Contemplative", "Morning"],
      result: `Steam rises gentle,\nDarkness yields to golden light—\nDay's first sacred sip.`,
    },
    {
      prompt: "A sonnet about lost memories",
      tags: ["Sonnet", "Melancholic", "Reflective"],
      result: `In chambers of the heart where echoes dwell,\nLie fragments of the days we used to know...\n\n(Generated in 3 seconds)`,
    },
    {
      prompt: "Free verse about city rain",
      tags: ["Free Verse", "Urban", "Atmospheric"],
      result: `The city weeps\nin silver sheets,\neach drop a story\ntold in concrete whispers...`,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % poetryExamples.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 relative min-h-screen">
      {/* New Background with Pen Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pen.webp"
          alt="Floating fountain pens with holographic effects"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Additional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-[1]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
            See Words Come to Life
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Watch how a simple thought transforms into beautiful verse. From idea to inspiration in moments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video/Demo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <svg className="w-8 h-8 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-white/60 text-base font-light">Your creation process unfolds here</p>
                  <p className="text-white/40 text-sm mt-2 font-light">Showing the poetry generation journey</p>
                </div>
              </div>
            </div>

            {/* Glowing corner accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-white/20 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-white/20 rounded-br-2xl" />
          </motion.div>

          {/* Right: Live Examples */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-extralight text-white tracking-wide">From Thought to Poetry</h3>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExample}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Input Section */}
                  <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                    <div className="text-sm text-white/50 mb-3 font-light">You whisper:</div>
                    <div className="text-white/90 italic font-light text-lg">
                      "{poetryExamples[currentExample].prompt}"
                    </div>
                    <div className="flex gap-2 mt-4">
                      {poetryExamples[currentExample].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/70 text-xs rounded-full border border-white/10 font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Output Section */}
                  <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl">
                    <div className="text-sm text-white/50 mb-4 font-light">Magic unfolds:</div>
                    <div className="text-white font-light text-lg leading-relaxed whitespace-pre-line">
                      {poetryExamples[currentExample].result}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex justify-center gap-3">
                {poetryExamples.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExample(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentExample ? "bg-white/80 w-8" : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Glossy divider line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="space-y-6">
              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400/80 rounded-full shadow-sm shadow-emerald-400/50"></div>
                  <span className="font-light">Instant creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400/80 rounded-full shadow-sm shadow-blue-400/50"></div>
                  <span className="font-light">Multiple styles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400/80 rounded-full shadow-sm shadow-purple-400/50"></div>
                  <span className="font-light">Custom refinement</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            className="bg-white/8 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm rounded-full px-12 py-4 text-lg font-light transition-all duration-300"
          >
            Begin Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default PoetryDemoSection
