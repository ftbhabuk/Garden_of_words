import { Button } from "./ui/button"
import Image from "next/image"
import Navbar from "./navbar"

export default function Component() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/flower.jpg"
          alt="Delicate flower blooming in a poetic garden"
          fill
          className="object-cover object-[center_20%]" 
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navbar - Now overlaid on the hero section */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content - Full Viewport Hero */}
        <main className="min-h-screen flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Hero Text */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white leading-tight tracking-tight">
                    Garden of Words
                  </h1>
                  <p className="text-2xl md:text-3xl text-white/70 font-extralight tracking-wide">
                    Where Poetry Blossoms.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Button and Description */}
              <div className="flex flex-col h-[600px]">
                <div className="flex-grow" />
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <Button
                      size="lg"
                      className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-full px-10 py-4 text-lg font-light transition-all duration-300"
                    >
                      Begin Your Verse
                    </Button>
                  </div>
                  
                  {/* Glossy Horizontal Line */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/100 to-transparent backdrop-blur-sm mt-4" />
                  
                  <div className="space-y-4 text-white/70 mt-12">
                    <p className="text-base leading-relaxed font-light">
                      Poetry begins with a single word, a seed that grows into verses. In this garden, every thought finds its rhythm.
                    </p>
                    <p className="text-base leading-relaxed font-light">
                      Garden of Words is your sanctuary for creativity. A space to weave emotions, craft stanzas, and let imagination bloom. Less chaos. More poetry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}