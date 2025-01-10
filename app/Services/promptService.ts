// services/promptService.ts

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

// Add Tag type that was missing
export type Tag = {
  id: string;
  name: string;
  type: 'form' | 'style' | 'tone';
};

export interface PromptConfig {
  text: string;
  prompt: string;
  form?: PoetryForm;
  style?: PoetryStyle;
  tone?: PoetryTone;
  maxLines?: number;
}

export class PromptService {
  private static readonly DEFAULT_SYSTEM_MESSAGE = `You are an experienced poet specializing in various poetic forms and styles. Your task is to create or edit poetry based on the given parameters, maintaining artistic integrity while following the specified form, style, and tone. Always respect the formal requirements of traditional poetry forms when specified.`;

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

  static buildPrompt(config: PromptConfig): string {
    const { text, prompt, form, style, tone, maxLines } = config;
    let instructions: string[] = [`Original Prompt: ${prompt}`];

    if (text) {
      instructions.push(`Initial Text: ${text}`);
    }

    if (form && this.FORM_INSTRUCTIONS[form]) {
      instructions.push(`Form Instructions: ${this.FORM_INSTRUCTIONS[form]}`);
    }

    if (style && this.STYLE_INSTRUCTIONS[style]) {
      instructions.push(`Style Guidelines: ${this.STYLE_INSTRUCTIONS[style]}`);
    }

    if (tone && this.TONE_INSTRUCTIONS[tone]) {
      instructions.push(`Tonal Direction: ${this.TONE_INSTRUCTIONS[tone]}`);
    }

    if (maxLines) {
      instructions.push(`Length Constraint: Please limit the poem to ${maxLines} lines.`);
    }

    instructions.push("Please create or modify the poetry according to these specifications. Maintain artistic quality while adhering to the formal requirements.");

    return instructions.join("\n\n");
  }

  static getSystemMessage(): string {
    return this.DEFAULT_SYSTEM_MESSAGE;
  }
}