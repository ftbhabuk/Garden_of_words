import React from "react";
import ChatComponent from "./ChatComponent";
import { BookOpen, Feather, History, Users } from "lucide-react";

const GardenOfWords = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-serif mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Garden of Words
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Where Technology Nurtures the Art of Poetry
          </p>
        </div>
      </div>

      {/* Poetry Origins Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <History className="w-12 h-12 mb-6 text-emerald-600" />
            <h2 className="text-3xl font-serif mb-6">The Origins of Poetry</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Poetry, the oldest form of literature, emerged from ancient oral traditions 
              and ritual chants. From Mesopotamian hymns to Greek epics, it has served 
              as humanity&apos;s vessel for preserving stories, expressing emotions, and 
              capturing the essence of human experience.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
            <blockquote className="text-lg italic border-l-4 border-emerald-600 pl-4">
              &quot;Poetry is the spontaneous overflow of powerful feelings; it takes its 
              origin from emotion recollected in tranquility.&quot;
              <footer className="text-sm mt-2 text-gray-500">— William Wordsworth</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Writing Guide Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Feather className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
            <h2 className="text-3xl font-serif mb-6">Begin Your Poetry Journey</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Find Your Voice",
                description: "Start with free verse to express your authentic voice without constraints."
              },
              {
                title: "Master the Craft",
                description: "Learn traditional forms like sonnets and haikus to understand structure."
              },
              {
                title: "Share Your Story",
                description: "Join our community to share your work and receive gentle feedback."
              }
            ].map((step, i) => (
              <div key={i} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
                <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
          <h2 className="text-3xl font-serif mb-6">Your AI Writing Companion</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            Let our AI guide you through the creative process, offering suggestions 
            while preserving your unique voice.
          </p>
          <ChatComponent />
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Users className="w-12 h-12 mx-auto mb-6 text-emerald-600" />
          <h2 className="text-3xl font-serif mb-6">Join Our Community</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with fellow poets, share your work, and grow together in our 
            supportive community of writers.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-colors">
            Join the Garden
          </button>
        </div>
      </section>
    </div>
  );
};

export default GardenOfWords;
