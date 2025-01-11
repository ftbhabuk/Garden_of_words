"use client";

import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { PoetryForm, PoetryStyle, PoetryTone, POETRY_TAGS } from '../Services/promptService';

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
  const [activeDropdown, setActiveDropdown] = useState<'form' | 'style' | 'tone' | null>(null);

  // Filter tags by category
  const formTags = POETRY_TAGS.filter(tag => tag.category === 'form');
  const styleTags = POETRY_TAGS.filter(tag => tag.category === 'style');
  const toneTags = POETRY_TAGS.filter(tag => tag.category === 'tone');

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
                {formTags.map(tag => (
                  <button
                    key={tag.id}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                    onClick={() => handleSelect('form', tag.type)}
                  >
                    <span>{tag.icon}</span>
                    <span>{tag.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Style Selector - Similar structure as Form Selector */}
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
                {styleTags.map(tag => (
                  <button
                    key={tag.id}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                    onClick={() => handleSelect('style', tag.type)}
                  >
                    <span>{tag.icon}</span>
                    <span>{tag.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tone Selector - Similar structure as Form Selector */}
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
                {toneTags.map(tag => (
                  <button
                    key={tag.id}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2"
                    onClick={() => handleSelect('tone', tag.type)}
                  >
                    <span>{tag.icon}</span>
                    <span>{tag.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}