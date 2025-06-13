"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Book, Scroll, Globe, Feather, ChevronDown, LucideIcon } from "lucide-react"

interface PoetryExample {
  title: string
  content: string
  author: string
  significance: string
}

interface HistoricalEra {
  era: string
  date: string
  description: string
  icon: LucideIcon
  example: PoetryExample
  image: string
}

const PoetryExampleComponent = ({ title, content, author, significance }: PoetryExample) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800 transition"
      >
        <div className="flex items-center gap-3">
          <Feather className="w-5 h-5 text-gray-400" />
          <div>
            <h4 className="text-sm font-light text-white">{title}</h4>
            <p className="text-xs text-gray-500">{author}</p>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
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
            <div className="p-4 bg-gray-900/30 rounded-lg mt-2 border border-gray-800">
              <p className="text-sm italic text-gray-300">"{content}"</p>
              <p className="text-xs text-gray-500 mt-4">{significance}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const HistoricalEraComponent = ({ era, date, description, example, image, index }: HistoricalEra & { index: number }) => {
  const isImageLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-24`}
    >
      <motion.div className="w-full md:w-1/2 relative">
        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </motion.div>
      <div className="w-full md:w-1/2 space-y-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.6 }}
          className="h-px bg-gray-600"
        />
        <h2 className="text-3xl font-light text-white">{era}</h2>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-base text-gray-300">{description}</p>
        <PoetryExampleComponent {...example} />
      </div>
    </motion.div>
  )
}

const historicalEras: HistoricalEra[] = [
  {
    era: "Ancient Echoes",
    date: "Before 3000 BCE",
    description: "Words carved in stone and song, capturing humanity’s first dreams.",
    icon: Book,
    image: "https://images.unsplash.com/photo-1539353820286-ee9b2f6ee7eb?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Abstract cave art
    example: {
      title: "Gilgamesh’s Quest",
      content: "He who saw the Deep, wise in all matters!",
      author: "Sumerian Poet",
      significance: "The earliest epic, shaping tales of heroism and mortality."
    }
  },
  {
    era: "Classical Grace",
    date: "800 BCE - 500 CE",
    description: "Verses of marble and muse, crafting timeless emotion.",
    icon: Scroll,
    image: "https://plus.unsplash.com/premium_photo-1736953763940-80e99e1e59d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8", // Abstract Greek columns
    example: {
      title: "Sappho’s Muse",
      content: "He seems equal to gods, listening to your voice.",
      author: "Sappho",
      significance: "Lyric poetry’s birth, voicing personal passion."
    }
  },
  {
    era: "Global Tapestry",
    date: "500 - 1500 CE",
    description: "Poetry wove cultures, threading universal truths.",
    icon: Globe,
    image: "https://plus.unsplash.com/premium_photo-1676316337647-65c35c441c9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", // Abstract silk road
    example: {
      title: "Moonlit Thoughts",
      content: "Moonlight glows, thoughts drift home.",
      author: "Li Bai",
      significance: "Simple verse, profound longing."
    }
  }
]

export default function PoetryHistory() {
  return (
    <div 
      className="min-h-screen bg-black bg-opacity-80"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0,0,0.4)), url('https://images.unsplash.com/photo-1588415232922-98443619860a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8')`, // Replace with abstract black-and-white texture
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="py-24 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-left"
        >
          <h1 className="text-6xl sm:text-7xl font-light text-white mb-4">Poetry’s Path</h1>
          <p className="text-lg sm:text-xl text-gray-400">A journey through time, where words shape the soul.</p>
        </motion.div>
      </section>
      <section className="px-4 sm:px-8 py-16 max-w-6xl mx-auto">
        {historicalEras.map((era, index) => (
          <HistoricalEraComponent key={era.era} {...era} index={index} />
        ))}
      </section>
    </div>
  )
}