// components/TagSelector.tsx
"use client";

import { useState } from 'react';
// import { Tag } from '@/services/promptService';
import { Tag } from '../Services/promptService';

interface TagSelectorProps {
    selectedTag: string;
    onSelectTag: (tag: Tag | "") => void;
}

export default function TagSelector({ selectedTag, onSelectTag }: TagSelectorProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const tags: Tag[] = ["Free Verse", "Formal", "Poetic", "Short"];

    return (
        <div className="absolute -top-7 left-0 flex items-center space-x-4">
            {selectedTag ? (
                <span
                    className="text-sm text-gray-800 dark:text-gray-300 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {selectedTag}
                </span>
            ) : (
                <span
                    className="text-sm text-gray-800 dark:text-gray-300 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    #Tags
                </span>
            )}

            {isDropdownOpen && (
                <div className="flex space-x-2 bg-transparent rounded-lg shadow-lg p-2 z-10">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-sm cursor-pointer text-gray-800 dark:text-gray-300 hover:text-blue-500 transition-colors ${
                                selectedTag === tag ? "text-blue-600" : ""
                            }`}
                            onClick={() => {
                                onSelectTag(tag);
                                setIsDropdownOpen(false);
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}