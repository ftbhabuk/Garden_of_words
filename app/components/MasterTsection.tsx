"use client";
import { motion } from "framer-motion";

export default function MasterTheCraftSection() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image - Full Viewport Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full scale-110"
          style={{
            backgroundImage: `url('https://assets.objkt.media/file/assets-003/QmQbjyKsYw5Z9ZApmUNoNP7zqwT271gjuk2wfEwjdFFc7g/artifact')`,
          }}
        />
        {/* Elegant overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full h-full flex items-center justify-center text-center px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-tight">
            Master the Craft
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-thin tracking-wide max-w-3xl mx-auto leading-relaxed">
            Develop your poetic voice through essential techniques, guided
            practice, and timeless wisdom.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
