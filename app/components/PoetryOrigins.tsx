"use client";
import React from "react";
import { motion } from "framer-motion";
import { History, Scroll, Globe, BookOpen } from "lucide-react";
import { HistoricalEra, PoetryExampleProps, HistoricalEraProps } from "./OriginComponents";

interface EraData extends Omit<HistoricalEraProps, 'index'> {}

const historicalEras: EraData[] = [
  {
    era: "Ancient Oral Traditions",
    date: "Before 3000 BCE",
    description: "Poetry began as oral traditions, with ancient civilizations using rhythm and rhyme to remember and share stories, laws, and cultural knowledge across generations.",
    icon: History,
    color: "from-amber-50/40 to-orange-50/30",
    accentColor: "from-amber-50 to-orange-50",
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
    color: "from-slate-50/40 to-blue-50/30",
    accentColor: "from-slate-50 to-blue-50",
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
    color: "from-emerald-50/40 to-teal-50/30",
    accentColor: "from-emerald-50 to-teal-50",
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
    color: "from-gray-50/40 to-zinc-50/30",
    accentColor: "from-gray-50 to-zinc-50",
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
    <section className="py-20 min-h-screen bg-gradient-to-br from-white to-gray-50/50">
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
            className="w-16 h-16 mx-auto mb-6 text-gray-500/80 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm"
          >
            <History className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-serif mb-6 text-gray-700 tracking-wide"
          >
            The Origins of Poetry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600/90 max-w-2xl mx-auto leading-relaxed"
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