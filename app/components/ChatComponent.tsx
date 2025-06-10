"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCompletion } from "ai/react";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader, Tag, X, Sliders } from "lucide-react";
import { POETRY_TAGS } from "../Services/promptService";

interface SelectedTag {
  id: string;
  category: "form" | "style" | "tone";
}

export default function ElegantPoetryChat() {
  const [text, setText] = useState("");
  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([]);
  const [activeCategoryDropdown, setActiveCategoryDropdown] = useState<
    "form" | "style" | "tone" | null
  >(null);
  const [temperature, setTemperature] = useState(0.7);
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const { completion, input, isLoading, handleInputChange, handleSubmit, setInput } = useCompletion({
    body: {
      text,
      tags: selectedTags.map((tag) => tag.id),
      temperature,
    },
    onFinish: (prompt, completion) => setText(completion.trim()),
    onError: (error) => toast.error(error.message),
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveCategoryDropdown(null);
      }
      if (
        sliderRef.current &&
        !sliderRef.current.contains(event.target as Node)
      ) {
        setIsSliderVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTagSelect = (tagId: string) => {
    const tag = POETRY_TAGS.find((t) => t.id === tagId);
    if (!tag) return;

    const updatedTags = selectedTags.filter(
      (existingTag) => existingTag.category !== tag.category,
    );

    setSelectedTags([...updatedTags, { id: tag.id, category: tag.category }]);

    const allCategories = ["form", "style", "tone"] as const;
    const selectedCategories = new Set(
      [...updatedTags, { id: tag.id, category: tag.category }].map(
        (t) => t.category,
      ),
    );

    if (selectedCategories.size === allCategories.length) {
      setActiveCategoryDropdown(null);
    } else {
      const nextCategory = allCategories.find(
        (category) => !selectedCategories.has(category),
      );
      if (nextCategory) {
        setActiveCategoryDropdown(nextCategory);
      } else {
        setActiveCategoryDropdown(null);
      }
    }
  };

  const handleCategoryClick = (category: "form" | "style" | "tone") => {
    setActiveCategoryDropdown(
      activeCategoryDropdown === category ? null : category,
    );
  };

  const removeTag = (tagId: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== tagId));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(e);
    setInput("");
  };

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif mb-4 text-4xl text-stone-800">
            Craft Your Poetry
          </h2>
          <p className="mx-auto max-w-2xl font-light text-stone-600">
            Share your thoughts, choose your style, and watch as AI weaves your
            words into beautiful verse.
          </p>
        </motion.div>

        {/* Main Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-xl border border-stone-200 bg-stone-50 p-8 shadow-sm"
        >
          <div className="space-y-6">
            {/* Tags Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-700">
                <Tag className="h-4 w-4" />
                <span className="text-sm font-medium">Poetry Style</span>
              </div>

              <div className="relative">
                {/* Selected Tags or Category Buttons */}
                <div className="flex flex-wrap gap-2">
                  {selectedTags.length > 0 ? (
                    selectedTags.map((selectedTag) => {
                      const tag = POETRY_TAGS.find(
                        (t) => t.id === selectedTag.id,
                      );
                      if (!tag) return null;

                      return (
                        <motion.div
                          key={tag.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 shadow-sm"
                        >
                          <span>{tag.icon}</span>
                          <span>{tag.label}</span>
                          <button
                            type="button"
                            onClick={() => removeTag(tag.id)}
                            className="text-stone-400 transition-colors hover:text-stone-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </motion.div>
                      );
                    })
                  ) : (
                    (["form", "style", "tone"] as const).map((category) => (
                      <motion.button
                        key={category}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`rounded-lg border px-4 py-2 text-sm transition-all duration-200 ${
                          activeCategoryDropdown === category
                            ? "border-stone-300 bg-stone-100 text-stone-700"
                            : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                        }`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        Choose {category}
                      </motion.button>
                    ))
                  )}
                </div>

                {/* Category Dropdown */}
                <AnimatePresence>
                  {activeCategoryDropdown && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 top-full z-10 mt-2 grid min-w-[300px] grid-cols-2 gap-2 rounded-xl border border-stone-200 bg-white p-4 shadow-lg"
                    >
                      {POETRY_TAGS.filter(
                        (tag) => tag.category === activeCategoryDropdown,
                      ).map((tag) => (
                        <motion.button
                          key={tag.id}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ${
                            selectedTags.some((st) => st.id === tag.id)
                              ? "border border-stone-300 bg-stone-100 text-stone-700"
                              : "text-stone-600 hover:bg-stone-50"
                          }`}
                          onClick={() => handleTagSelect(tag.id)}
                        >
                          <span>{tag.icon}</span>
                          <span>{tag.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Text Area */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Your Poetry
              </label>
              <TextareaAutosize
                value={isLoading && completion.length > 0 ? completion.trim() : text}
                onChange={(e) => {
                  if (!isLoading) setText(e.target.value);
                }}
                className="min-h-[120px] w-full resize-none rounded-lg border border-stone-200 bg-white px-4 py-4 font-serif leading-relaxed text-stone-800 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-400"
                placeholder="Begin with a thought, a feeling, or a moment you'd like to capture in verse..."
                disabled={isLoading}
              />
            </div>

            {/* Prompt Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">
                Instructions for AI
              </label>
              <div className="flex gap-3">
                <input
                  className="flex-1 rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-800 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-400"
                  placeholder="How would you like to refine or transform your poetry?"
                  onChange={handleInputChange}
                  value={input}
                  required
                  disabled={isLoading}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleFormSubmit}
                  disabled={isLoading}
                  className="flex items-center gap-2 rounded-lg bg-stone-800 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-stone-700 disabled:bg-stone-400"
                >
                  {isLoading ? (
                    <>
                      <Loader className="h-4 w-4 animate-spin" />
                      Crafting...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Creativity Slider */}
            <div className="space-y-2" ref={sliderRef}>
              <AnimatePresence mode="wait">
                {!isSliderVisible ? (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type="button"
                    className="flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-600"
                    onClick={() => setIsSliderVisible(true)}
                  >
                    <Sliders className="h-4 w-4" />
                    <span>Adjust creativity level</span>
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="rounded-lg border border-stone-200 bg-white p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="min-w-max flex items-center gap-2 text-sm text-stone-600">
                        <Sliders className="h-4 w-4" />
                        <span>Creativity: {Math.round(temperature * 100)}%</span>
                      </div>
                      <div className="relative flex-1">
                        <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                          <div
                            className="h-full rounded-full bg-stone-600 transition-all duration-200"
                            style={{ width: `${temperature * 100}%` }}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={temperature}
                          onChange={(e) => setTemperature(parseFloat(e.target.value))}
                          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Subtle decorative elements */}
        <div className="absolute left-8 top-8 h-16 w-16 rounded-tl-lg border-l border-t border-stone-200 opacity-40" />
        <div className="absolute bottom-8 right-8 h-16 w-16 rounded-br-lg border-b border-r border-stone-200 opacity-40" />
      </div>
    </section>
  );
}