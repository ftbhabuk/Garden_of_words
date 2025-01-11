import { useState } from 'react';
import { useCompletion } from 'ai/react';
import { toast } from 'sonner';
import { PromptService, Tag } from '../Services/promptService';

export function usePrompt() {
    const [text, setText] = useState("");
    // Update state to handle array of tags
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const {
        completion,
        input,
        isLoading,
        handleInputChange,
        handleSubmit: baseHandleSubmit,
        setInput,
    } = useCompletion({
        api: '/api/generate',
        body: { text, tags: selectedTags }, // Update body to use tags array
        onFinish: (prompt, completion) => setText(completion.trim()),
        onError: (error) => toast.error(error.message),
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const promptConfig = {
                text,
                prompt: input,
                selectedTags, // Use the array of tags directly
                temperature: 0.7 // Add default temperature if needed
            };

            // Create the final prompt using PromptService
            const finalPrompt = PromptService.buildPrompt(promptConfig);

            // Call the base handleSubmit with the event only
            await baseHandleSubmit(e);
            setInput("");
        } catch (error) {
            toast.error("Failed to process prompt");
        }
    };

    // Update return value to include new state handlers
    return {
        text,
        setText,
        selectedTags,
        setSelectedTags, // Return the new setter
        completion,
        input,
        isLoading,
        handleInputChange,
        handleSubmit,
        setInput,
    };
}