"use client";
import React, { useState, useRef, useEffect } from "react";
import { useCompletion } from "ai/react";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader, Tag, X, Sliders } from "lucide-react";

export default function EnhancedChatComponent() {
  const [text, setText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const tags = [
    { id: "free-verse", label: "Free Verse", icon: "🌿" },
    { id: "formal", label: "Formal", icon: "📜" },
    { id: "poetic", label: "Poetic", icon: "🎭" },
    { id: "short", label: "Short", icon: "✨" },
  ];

  const { completion, input, isLoading, handleInputChange, handleSubmit, setInput } = useCompletion({
    body: { text, tag: selectedTag, temperature },
    onFinish: (prompt, completion) => setText(completion.trim()),
    onError: (error) => toast.error(error.message),
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (sliderRef.current && !sliderRef.current.contains(event.target as Node)) {
        setIsSliderVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // CSS for the dotted slider track
  const sliderStyles = `
    .dotted-slider {
      background: linear-gradient(to right, #10B981 0%, #10B981 ${temperature * 100}%, #E5E7EB ${temperature * 100}%, #E5E7EB 100%);
      background-size: 100%;
      height: 2px;
      position: relative;
    }
    .dotted-slider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 2px;
      background-image: linear-gradient(to right, #fff 50%, transparent 50%);
      background-size: 10px 1px;
      opacity: 0.5;
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200"
    >
      <style>{sliderStyles}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-serif mb-4 text-gray-800">Ignite Your Poetry with AI</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Every great poem starts with an idea. Let AI help you discover and shape your unique voice.
        </p>
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 mb-4">
          Start Writing!
        </button>
      </motion.div>

      <form
        className="relative flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          setInput("");
        }}
      >
        <div className="relative">
          <div className="absolute left-4 -top-3 flex items-center space-x-2">
            {selectedTag ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-1 bg-emerald-100 px-3 py-1 rounded-full text-sm text-emerald-600 shadow-sm"
              >
                <span>{tags.find((t) => t.id === selectedTag)?.icon}</span>
                <span>{tags.find((t) => t.id === selectedTag)?.label}</span>
                <X
                  className="w-4 h-4 cursor-pointer hover:text-emerald-800"
                  onClick={() => setSelectedTag("")}
                />
              </motion.div>
            ) : (
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors shadow-sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Tag className="w-4 h-4" />
                <span>Select Style</span>
              </motion.button>
            )}
          </div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 top-8 bg-white rounded-lg shadow-xl p-2 z-10 grid grid-cols-1 gap-2 min-w-[160px] border border-gray-200"
              >
                {tags.map((tag) => (
                  <motion.button
                    key={tag.id}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedTag === tag.id
                        ? "bg-emerald-100 text-emerald-600"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedTag(tag.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span>{tag.icon}</span>
                    <span>{tag.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <TextareaAutosize
            value={isLoading && completion.length > 0 ? completion.trim() : text}
            onChange={(e) => {
              if (!isLoading) setText(e.target.value);
            }}
            className="w-full rounded-xl bg-gray-50 border border-gray-300 px-4 pt-12 pb-4 min-h-[128px] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm hover:shadow-md resize-none text-black"
            placeholder="Plant your poetic seeds here..."
            aria-label="Text"
            onKeyDown={(e) => {
              if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
          />
        </div>

        <div className="flex items-center space-x-4">
          <motion.input
            className="flex-1 bg-gray-50 rounded-full py-2.5 px-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-300 shadow-sm hover:shadow-md text-black"
            placeholder="How shall we tend to your words?"
            onChange={handleInputChange}
            value={input}
            aria-label="Prompt"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Submit"
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center"
          >
            {isLoading ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Sparkles className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Animated Creativity Control with Dotted Slider */}
        <div className="relative h-12" ref={sliderRef}>
          <AnimatePresence mode="wait">
            {!isSliderVisible ? (
              <motion.button
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="absolute left-0 top-0 flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition-colors"
                onClick={() => setIsSliderVisible(true)}
              >
                <Sliders className="w-4 h-4" />
                <span className="text-sm">Adjust creativity</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="absolute left-0 top-0 bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className="flex items-center space-x-3 p-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 min-w-max">
                    <Sliders className="w-4 h-4" />
                    <span>Creativity: {(temperature * 100).toFixed(0)}%</span>
                  </div>
                  <div className="flex-1 relative">
                    <div className="dotted-slider rounded-full"></div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="absolute top-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
}