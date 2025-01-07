"use client";
import React, { useState, useRef, useEffect } from "react";
import { useCompletion } from "ai/react";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "sonner";
import { motion } from "framer-motion";
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
    { id: "short", label: "Short", icon: "✨" }
  ];

  const { completion, input, isLoading, handleInputChange, handleSubmit, setInput } = useCompletion({
    body: { text, tag: selectedTag, temperature },
    onFinish: (prompt, completion) => setText(completion.trim()),
    onError: (error) => toast.error(error.message),
  });

  // Close dropdowns when clicking outside
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

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      {/* Call to Action */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mt-20">
        <h3 className="text-2xl font-serif mb-4 text-gray-800">Ignite Your Poetry with AI</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8"> Every great poem starts with an idea. Let AI help you discover and shape your unique voice. </p>
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 mb-4"> Start Writing! </button>
      </motion.div>

      <form className="relative flex flex-col space-y-4" onSubmit={(e) => { handleSubmit(e); setInput(""); }}>
        <div className="relative">
          <div className="absolute left-4 -top-3 flex items-center space-x-2">
            {selectedTag ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center space-x-1 bg-emerald-100 px-3 py-1 rounded-full text-sm text-emerald-600 shadow-sm">
                <span>{tags.find(t => t.id === selectedTag)?.icon}</span>
                <span>{tags.find(t => t.id === selectedTag)?.label}</span>
                <X className="w-4 h-4 cursor-pointer hover:text-emerald-800" onClick={() => setSelectedTag("")} />
              </motion.div>
            ) : (
              <motion.button type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors shadow-sm" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Tag className="w-4 h-4" />
                <span>Select Style</span>
              </motion.button>
            )}
          </div>

          {/* Dropdown for Tags */}
          {isDropdownOpen && (
            <motion.div ref={dropdownRef} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute left-0 top-8 bg-white rounded-lg shadow-xl p-2 z-10 grid grid-cols-1 gap-2 min-w-[160px] border border-gray-200">
              {tags.map((tag) => (
                <motion.button key={tag.id} type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${selectedTag === tag.id ? "bg-emerald-100 text-emerald-600" : "hover:bg-gray-100 text-gray-600"}`} onClick={() => { setSelectedTag(tag.id); setIsDropdownOpen(false); }}>
                  <span>{tag.icon}</span>
                  <span>{tag.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Textarea for Input */}
          <TextareaAutosize value={isLoading && completion.length > 0 ? completion.trim() : text} onChange={(e) => { if (!isLoading) setText(e.target.value); }} className="w-full rounded-xl bg-gray-50 border border-gray-300 px-4 pt-12 pb-4 min-h-[128px] focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm hover:shadow-md resize-none text-black" placeholder="Plant your poetic seeds here..." aria-label="Text" onKeyDown={(e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); e.currentTarget.form?.requestSubmit(); } }} />
        </div>

        {/* Input and Submit Button */}
        <div className="flex items-center space-x-4">
          <motion.input className="flex-1 bg-gray-[50] rounded-full py-[10px] px-[24px] focus:outline-none focus:ring-[2px] focus:ring-green border border-gray-[300] shadow-sm hover:shadow-md text-black" placeholder="How shall we tend to your words?" onChange={handleInputChange} value={input} aria-label="Prompt" required />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Submit" type="submit" 
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center">
            {isLoading ? (
              <Loader className="w-[20px] h-[20px] animate-spin" />
            ) : (
              <Sparkles className="w-[20px] h-[20px]" />
            )}
          </motion.button>
        </div>

        {/* Adjust Creativeness Button */}
        <div className="flex items-center justify-between mt-[24px]" ref={sliderRef}>
          <button type="button" 
          className="flex items-center space-x-[8px] bg-gray-[100] px-[16px] py-[8px] rounded-full text-sm text-gray-[600] hover:bg-gray-[200] shadow-sm transition-all" 
          onClick={() => setIsSliderVisible(!isSliderVisible)}>
            <Sliders className="w-[16px] h-[16px]" />
            <span>Adjust Creativeness</span>
          </button>
        </div>

        {/* Slider for Temperature Adjustment */}
        {isSliderVisible && (
          <div className="mt-[16px]">
            <label htmlFor="temperature" className="block text-sm font-medium text-gray-[700]">Creative ({temperature.toFixed(2)}) </label>
            <input type="range" id="temperature" name="temperature" min="0" max="1" step="0.01" value={temperature} 
            onChange={(e) => setTemperature(parseFloat(e.target.value))} 
            className="w-full mt-[8px] rounded-lg appearance-none bg-gray-[200] accent-green h-[8px]" />
          </div>
        )}
      </form>
    </motion.div>
  );
}
