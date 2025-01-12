import React from 'react';
import { motion } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const GlowingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1.5, 0],
      opacity: [0, 0.8, 0],
      y: [-20, -40],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const FlowerPetal = ({ rotate = 0, delay = 0, scale = 1 }) => (
  <motion.div
    className="absolute origin-bottom"
    style={{ rotate }}
    initial={{ scale: 0 }}
    animate={{
      scale: [0, scale, scale, 0],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="relative">
      <div className="w-5 h-16 bg-gradient-to-t from-pink-300/30 via-rose-200/20 to-transparent rounded-full backdrop-blur-sm" />
      <div className="absolute inset-0 w-5 h-16 bg-gradient-to-t from-purple-300/20 via-fuchsia-200/10 to-transparent rounded-full mix-blend-overlay" />
      <div className="absolute inset-0 w-5 h-16 animate-pulse bg-gradient-to-t from-white/5 to-transparent rounded-full" />
    </div>
  </motion.div>
);

const FlowerCore = ({ delay = 0 }) => (
  <div className="relative">
    <motion.div
      className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2"
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1.2, 1, 0],
        rotate: [0, 90],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-rose-200/40 to-purple-300/40 rounded-full backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full animate-pulse" />
    </motion.div>
    <Sparkles className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white/30 animate-pulse" />
  </div>
);

const Flower = ({ position, delay = 0, scale = 1 }) => (
  <div className="absolute" style={position}>
    <div className="relative">
      {[...Array(12)].map((_, i) => (
        <FlowerPetal
          key={i}
          rotate={i * 30}
          delay={delay + i * 0.1}
          scale={scale}
        />
      ))}
      <FlowerCore delay={delay} />
      {[...Array(6)].map((_, i) => (
        <GlowingParticle
          key={i}
          delay={delay + i * 0.5}
        />
      ))}
    </div>
  </div>
);

const FlowerAnimation = () => {
  const flowers = [
    { scale: 1, position: { top: '20%', left: '20%' }, delay: 0 },
    { scale: 0.8, position: { top: '60%', left: '70%' }, delay: 1 },
    { scale: 1.2, position: { top: '30%', left: '80%' }, delay: 2 },
    { scale: 0.7, position: { top: '70%', left: '30%' }, delay: 3 },
    { scale: 0.9, position: { top: '40%', left: '50%' }, delay: 4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute w-full h-full">
        {flowers.map((flower, i) => (
          <Flower
            key={i}
            position={flower.position}
            delay={flower.delay}
            scale={flower.scale}
          />
        ))}
      </div>
      {/* Adjusted background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/10" />
    </div>
  );
};

export default FlowerAnimation;