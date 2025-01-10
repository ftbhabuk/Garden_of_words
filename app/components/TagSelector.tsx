"use client";

import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { PoetryForm, PoetryStyle, PoetryTone } from '../Services/promptService';

interface PoetryOptionsSelectorProps {
  onSelectForm: (form: PoetryForm | undefined) => void;
  onSelectStyle: (style: PoetryStyle | undefined) => void;
  onSelectTone: (tone: PoetryTone | undefined) => void;
}

export default function PoetryOptionsSelector({
  onSelectForm,
  onSelectStyle,
  onSelectTone
}: PoetryOptionsSelectorProps) {
  const [selectedForm, setSelectedForm] = useState<PoetryForm | undefined>();
  const [selectedStyle, setSelectedStyle] = useState<PoetryStyle | undefined>();
  const [selectedTone, setSelectedTone] = useState<PoetryTone | undefined>();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const forms: PoetryForm[] = [
    "Free Verse", "Haiku", "Sonnet", "Limerick", "Tanka",
    "Villanelle", "Acrostic", "Cinquain", "Blank Verse", "Prose Poetry"
  ];

  const styles: PoetryStyle[] = [
    "Romantic", "Contemporary", "Nature", "Urban",
    "Philosophical", "Emotional", "Narrative", "Minimalist"
  ];

  const tones: PoetryTone[] = [
    "Lyrical", "Dramatic", "Contemplative", "Whimsical",
    "Melancholic", "Optimistic", "Dark", "Hopeful"
  ];

  const handleSelect = (type: 'form' | 'style' | 'tone', value: string) => {
    switch (type) {
      case 'form':
        setSelectedForm(value as PoetryForm);
        onSelectForm(value as PoetryForm);
        break;
      case 'style':
        setSelectedStyle(value as PoetryStyle);
        onSelectStyle(value as PoetryStyle);
        break;
      case 'tone':
        setSelectedTone(value as PoetryTone);
        onSelectTone(value as PoetryTone);
        break;
    }
    setActiveDropdown(null);
  };

  const removeSelection = (type: 'form' | 'style' | 'tone') => {
    switch (type) {
      case 'form':
        setSelectedForm(undefined);
        onSelectForm(undefined);
        break;
      case 'style':
        setSelectedStyle(undefined);
        onSelectStyle(undefined);
        break;
      case 'tone':
        setSelectedTone(undefined);
        onSelectTone(undefined);
        break;
    }
  };

  return (
    <div className="w-full">
      {/* Always visible selector bar */}
      <div className="flex items-center gap-4 mb-6">
        {/* Form Selector */}
        <div className="relative">
          {selectedForm ? (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full">
              <Pencil className="w-4 h-4" />
              <span>{selectedForm}</span>
              <button
                onClick={() => removeSelection('form')}
                className="ml-1 text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ) : (
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'form' ? null : 'form')}
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Select form
            </button>
          )}
          
          {activeDropdown === 'form' && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <div className="p-2">
                {forms.map(form => (
                  <button
                    key={form}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                    onClick={() => handleSelect('form', form)}
                  >
                    {form}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Style Selector */}
        <div className="relative">
          {selectedStyle ? (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full">
              <Pencil className="w-4 h-4" />
              <span>{selectedStyle}</span>
              <button
                onClick={() => removeSelection('style')}
                className="ml-1 text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ) : (
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'style' ? null : 'style')}
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Select style
            </button>
          )}
          
          {activeDropdown === 'style' && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <div className="p-2">
                {styles.map(style => (
                  <button
                    key={style}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                    onClick={() => handleSelect('style', style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tone Selector */}
        <div className="relative">
          {selectedTone ? (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 rounded-full">
              <Pencil className="w-4 h-4" />
              <span>{selectedTone}</span>
              <button
                onClick={() => removeSelection('tone')}
                className="ml-1 text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ) : (
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'tone' ? null : 'tone')}
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Select tone
            </button>
          )}
          
          {activeDropdown === 'tone' && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <div className="p-2">
                {tones.map(tone => (
                  <button
                    key={tone}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                    onClick={() => handleSelect('tone', tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <textarea
        placeholder="Plant your poetic seeds here..."
        className="w-full h-32 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
    </div>
  );
}