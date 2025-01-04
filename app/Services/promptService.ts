// services/promptService.ts

export type Tag = "Free Verse" | "Formal" | "Poetic" | "Short";

export interface PromptConfig {
    text: string;
    prompt: string;
    tag?: Tag;
}

export class PromptService {
    private static readonly DEFAULT_SYSTEM_MESSAGE = `You are a literature writer. You will be given a prompt and a text to edit, which may be empty or incomplete. Edit the text to match the prompt and selected tag, and only respond with the full edited version of the text.`;

    private static readonly TAG_INSTRUCTIONS = {
        "Free Verse": "Please respond in a poetic free verse way.",
        "Formal": "Please respond being formal.",
        "Poetic": "Please respond with a poetic tone.",
        "Short": "Please keep the response short."
    };

    static buildPrompt(config: PromptConfig): string {
        const { text, prompt, tag } = config;
        let finalPrompt = `Prompt: ${prompt}\nText: ${text}`;

        if (tag && this.TAG_INSTRUCTIONS[tag]) {
            finalPrompt = `${this.TAG_INSTRUCTIONS[tag]}\n${finalPrompt}`;
        }

        return finalPrompt;
    }

    static getSystemMessage(): string {
        return this.DEFAULT_SYSTEM_MESSAGE;
    }

    // Add new prompt types here
    static async getCustomPrompt(type: string, text: string): Promise<string> {
        switch (type) {
            case "story":
                return `Create a story based on: ${text}`;
            case "poem":
                return `Transform this into poetry: ${text}`;
            case "academic":
                return `Rewrite this in academic style: ${text}`;
            default:
                return text;
        }
    }
}