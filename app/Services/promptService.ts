// Poetry Type Definitions
export type PoetryForm = 
  | "Free Verse"
  | "Haiku"
  | "Sonnet"
  | "Limerick"
  | "Tanka"
  | "Villanelle"
  | "Acrostic"
  | "Cinquain"
  | "Blank Verse"
  | "Prose Poetry";

export type PoetryStyle = 
  | "Romantic"
  | "Contemporary"
  | "Nature"
  | "Urban"
  | "Philosophical"
  | "Emotional"
  | "Narrative"
  | "Minimalist";

export type PoetryTone =
  | "Lyrical"
  | "Dramatic"
  | "Contemplative"
  | "Whimsical"
  | "Melancholic"
  | "Optimistic"
  | "Dark"
  | "Hopeful";

// Tag Type Definition
export interface Tag {
  id: string;
  label: string;
  icon: string;
  category: 'form' | 'style' | 'tone';
  type: PoetryForm | PoetryStyle | PoetryTone;
}

// Poetry Tags Data
export const POETRY_TAGS: Tag[] = [
  // Forms
  { id: "free-verse", label: "Free Verse", icon: "🌿", category: "form", type: "Free Verse" },
  { id: "haiku", label: "Haiku", icon: "🍃", category: "form", type: "Haiku" },
  { id: "sonnet", label: "Sonnet", icon: "📜", category: "form", type: "Sonnet" },
  { id: "limerick", label: "Limerick", icon: "🎭", category: "form", type: "Limerick" },
  { id: "tanka", label: "Tanka", icon: "🌸", category: "form", type: "Tanka" },
  { id: "villanelle", label: "Villanelle", icon: "📖", category: "form", type: "Villanelle" },
  { id: "prose-poetry", label: "Prose Poetry", icon: "✍️", category: "form", type: "Prose Poetry" },
  
  // Styles
  { id: "romantic", label: "Romantic", icon: "❤️", category: "style", type: "Romantic" },
  { id: "contemporary", label: "Contemporary", icon: "🌆", category: "style", type: "Contemporary" },
  { id: "nature", label: "Nature", icon: "🌳", category: "style", type: "Nature" },
  { id: "philosophical", label: "Philosophical", icon: "🤔", category: "style", type: "Philosophical" },
  { id: "emotional", label: "Emotional", icon: "💫", category: "style", type: "Emotional" },
  
  // Tones
  { id: "lyrical", label: "Lyrical", icon: "🎵", category: "tone", type: "Lyrical" },
  { id: "dramatic", label: "Dramatic", icon: "🎭", category: "tone", type: "Dramatic" },
  { id: "contemplative", label: "Contemplative", icon: "🌙", category: "tone", type: "Contemplative" },
  { id: "whimsical", label: "Whimsical", icon: "✨", category: "tone", type: "Whimsical" },
  { id: "melancholic", label: "Melancholic", icon: "🌧️", category: "tone", type: "Melancholic" }
];

export interface PromptConfig {
  text: string;
  prompt: string;
  selectedTags: any[];
  temperature?: number;
}

export class PromptService {
  private static readonly DEFAULT_SYSTEM_MESSAGE = `You are an experienced poet specializing in various poetic forms and styles...`;

  static buildPrompt(config: PromptConfig): string {
    const { text, prompt, selectedTags, temperature = 0.7 } = config;
    let instructions: string[] = [`Original Prompt: ${prompt}`];

    if (text) {
      instructions.push(`Initial Text: ${text}`);
    }

    // Group tags by category and add their instructions
    const formTag = selectedTags.find(tag => tag.category === 'form');
    const styleTag = selectedTags.find(tag => tag.category === 'style');
    const toneTag = selectedTags.find(tag => tag.category === 'tone');

    if (formTag) {
      instructions.push(`Form Instructions: ${this.FORM_INSTRUCTIONS[formTag.type as PoetryForm]}`);
    }

    if (styleTag) {
      instructions.push(`Style Guidelines: ${this.STYLE_INSTRUCTIONS[styleTag.type as PoetryStyle]}`);
    }

    if (toneTag) {
      instructions.push(`Tonal Direction: ${this.TONE_INSTRUCTIONS[toneTag.type as PoetryTone]}`);
    }

    instructions.push(`Temperature: ${temperature} - Adjust creativity and variation accordingly.`);
    instructions.push("Please create or modify the poetry according to these specifications while maintaining artistic quality.");

    return instructions.join("\n\n");
  }

  static getSystemMessage(): string {
    return this.DEFAULT_SYSTEM_MESSAGE;
  }
  private static readonly FORM_INSTRUCTIONS = {
    "Free Verse": "Create poetry without formal metrical structure, focusing on natural rhythm and flow.",
    "Haiku": "Compose in traditional 5-7-5 syllable pattern, capturing a moment in nature or emotion.",
    "Sonnet": "Write in 14 lines following iambic pentameter, with a rhyme scheme of ABAB CDCD EFEF GG.",
    "Limerick": "Create a five-line poem with AABBA rhyme scheme, humorous or light in nature.",
    "Tanka": "Compose in 5-7-5-7-7 syllable pattern, exploring emotions and nature.",
    "Villanelle": "Write 19 lines with repeating refrains, following ABA rhyme scheme.",
    "Acrostic": "Create a poem where the first letter of each line spells out a word or phrase.",
    "Cinquain": "Compose in five lines with 2-4-6-8-2 syllable pattern.",
    "Blank Verse": "Write in unrhymed iambic pentameter.",
    "Prose Poetry": "Create poetic prose that maintains poetic qualities without line breaks."
  };

  private static readonly STYLE_INSTRUCTIONS = {
    "Romantic": "Express deep emotions, love, and connection to nature with rich imagery.",
    "Contemporary": "Use modern language and themes, reflecting current experiences.",
    "Nature": "Focus on natural elements, seasons, and environmental themes.",
    "Urban": "Explore city life, modern society, and metropolitan experiences.",
    "Philosophical": "Delve into existential questions and deep contemplation.",
    "Emotional": "Prioritize raw emotional expression and personal experiences.",
    "Narrative": "Tell a story through poetic elements and structure.",
    "Minimalist": "Use sparse, carefully chosen words for maximum impact."
  };

  private static readonly TONE_INSTRUCTIONS = {
    "Lyrical": "Create musical, song-like quality in the verses.",
    "Dramatic": "Express intense emotions and conflicts.",
    "Contemplative": "Maintain a thoughtful, meditative atmosphere.",
    "Whimsical": "Include playful, light-hearted elements.",
    "Melancholic": "Express sadness, longing, or nostalgia.",
    "Optimistic": "Maintain a positive, hopeful outlook.",
    "Dark": "Explore shadows, mystery, and deeper emotions.",
    "Hopeful": "Focus on inspiration and positive transformation."
  };

 
}