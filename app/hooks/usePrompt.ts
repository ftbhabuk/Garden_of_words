// hooks/usePrompt.ts

import { useState } from 'react';
import { useCompletion } from 'ai/react';
import { toast } from 'sonner';
// import { PromptService, Tag } from '@/services/promptService';
import { PromptService, Tag } from '../Services/promptService';

export function usePrompt() {
    const [text, setText] = useState("");
    const [selectedTag, setSelectedTag] = useState<Tag | "">("");

    const {
        completion,
        input,
        isLoading,
        handleInputChange,
        handleSubmit: baseHandleSubmit,
        setInput,
    } = useCompletion({
        api: '/api/generate',
        body: { text, tag: selectedTag },
        onFinish: (prompt, completion) => setText(completion.trim()),
        onError: (error) => toast.error(error.message),
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const promptConfig = {
                text,
                prompt: input,
                tag: selectedTag as Tag
            };

            // Create the final prompt using PromptService
            const finalPrompt = PromptService.buildPrompt(promptConfig);
            
            // Call the base handleSubmit with the event only
            // The completion API will use the body we configured above
            await baseHandleSubmit(e);
            setInput("");
        } catch (error) {
            toast.error("Failed to process prompt");
        }
    };

    return {
        text,
        setText,
        selectedTag,
        setSelectedTag,
        completion,
        input,
        isLoading,
        handleInputChange,
        handleSubmit,
        setInput,
    };
}