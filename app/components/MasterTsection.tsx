// components/MasterTheCraftSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MasterTheCraftSection() {
  return (
    <div className="relative -mx-4 sm:-mx-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/red.webp')`, // Make sure this path is correct
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
        className="min-h-screen flex items-center justify-center text-center relative z-10 px-4 sm:px-8"
      >
        <div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.6 }}
            className="h-px bg-gray-600 mx-auto mb-8"
          />
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 tracking-tight">
            Master the Craft
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Develop your poetic voice through essential techniques, guided
            practice, and timeless wisdom.
          </p>
        </div>
      </motion.div>
    </div>
  );
}