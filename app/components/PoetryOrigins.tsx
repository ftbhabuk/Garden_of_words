"use client";
import React from "react";
import { motion } from "framer-motion";
import { History, Scroll, Globe, BookOpen } from "lucide-react";
import { HistoricalEra, type HistoricalEraProps } from "./OriginComponents";

interface EraData extends Omit<HistoricalEraProps, 'index'> {}

const historicalEras: EraData[] = [
  {
    era: "Ancient Oral Traditions",
    date: "Before 3000 BCE",
    description: "Poetry began as oral traditions, with ancient civilizations using rhythm and rhyme to remember and share stories, laws, and cultural knowledge across generations.",
    icon: History,
    color: "bg-gradient-to-br from-amber-50/50 to-orange-50/50",
    accentColor: "bg-gradient-to-br from-amber-200/30 via-orange-100/30 to-yellow-200/30",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    examples: [
      {
        title: "Epic of Gilgamesh",
        content: "He who saw the Deep, the country's foundation...",
        translation: "The one who saw all, who was the foundation of the land...",
        form: "Ancient Mesopotamian Epic Poetry"
      },
      {
        title: "Vedic Hymns",
        content: "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्",
        translation: "I praise Agni, the foremost priest, the divine minister of the sacrifice",
        form: "Sanskrit Devotional Verse"
      }
    ]
  },
  {
    era: "Classical Period",
    date: "800 BCE - 500 CE",
    description: "Greek and Roman poets established many forms we still use today, from epic poetry like Homer's Iliad to Sappho's intimate lyric poems.",
    icon: Scroll,
    color: "bg-gradient-to-br from-blue-50/50 to-indigo-50/50",
    accentColor: "bg-gradient-to-br from-blue-200/30 via-indigo-100/30 to-cyan-200/30",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    examples: [
      {
        title: "Sappho's Lyric",
        content: "φαίνεταί μοι κῆνος ἴσος θέοισιν...",
        translation: "He seems to me equal to the gods...",
        form: "Ancient Greek Lyric Poetry"
      },
      {
        title: "Virgil's Aeneid",
        content: "Arma virumque cano...",
        translation: "I sing of arms and the man...",
        form: "Latin Epic Poetry"
      }
    ]
  },
  {
    era: "Global Renaissance",
    date: "500 - 1500 CE",
    description: "Poetry flourished globally, from Tang Dynasty Chinese poetry to Persian Sufi verses, each culture developing unique forms and traditions.",
    icon: Globe,
    color: "bg-gradient-to-br from-emerald-50/50 to-teal-50/50",
    accentColor: "bg-gradient-to-br from-emerald-200/30 via-teal-100/30 to-green-200/30",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    examples: [
      {
        title: "Li Bai's Night Thoughts",
        content: "床前明月光，疑是地上霜...",
        translation: "Before my bed, the bright moonlight, seems like frost on the ground...",
        form: "Tang Dynasty Regulated Verse"
      },
      {
        title: "Rumi's Mystical Verse",
        content: "در درون من نمی گنجد، نشانم می دهد...",
        translation: "What you seek is seeking you...",
        form: "Persian Ghazal"
      }
    ]
  },
  {
    era: "Modern Evolution",
    date: "1500 CE - Present",
    description: "Poetry transformed through movements like Romanticism, Modernism, and free verse, becoming more experimental and personally expressive.",
    icon: BookOpen,
    color: "bg-gradient-to-br from-violet-50/50 to-purple-50/50",
    accentColor: "bg-gradient-to-br from-violet-200/30 via-purple-100/30 to-fuchsia-200/30",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    examples: [
      {
        title: "Walt Whitman's Free Verse",
        content: "I celebrate myself, and sing myself...",
        form: "Modern Free Verse"
      },
      {
        title: "Sylvia Plath's Confessional",
        content: "I shut my eyes and all the world drops dead...",
        form: "Confessional Poetry"
      }
    ]
  }
];

export default function PoetryOrigins() {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 mx-auto mb-6 text-gray-700 bg-gradient-to-br from-gray-100 to-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
          >
            <History className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-serif mb-6 text-gray-800 tracking-wide"
          >
            The Origins of Poetry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            Journey through time to discover how poetry has evolved from ancient oral traditions 
            to become one of humanity's most profound forms of expression.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {historicalEras.map((era, index) => (
            <HistoricalEra 
              key={era.era}
              {...era}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}