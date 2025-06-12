import { StreamingTextResponse } from "ai";
import { OpenAIStream } from "ai";
import OpenAI from "openai";
import { PromptService } from "@/app/Services/promptService";

// Initialize Groq client
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  // Parse request body
  const { text, prompt, tags, temperature } = await req.json();

  if (!prompt) {
    return new Response("Prompt is required", { status: 400 });
  }

  try {
    // Build the prompt using PromptService
    const promptConfig = {
      text,
      prompt,
      selectedTags: Array.isArray(tags) ? tags : [],
      temperature: temperature || 0.7,
    };

    const finalPrompt = PromptService.buildPrompt(promptConfig);
    const systemMessage = PromptService.getSystemMessage();

    // Create the stream with temperature parameter
    const response = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: finalPrompt },
      ],
      temperature: temperature || 0.7,
      stream: true,
    });

    // Convert the OpenAI stream to a ReadableStream
    const stream = OpenAIStream(response as any);

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", { status: 500 });
  }
}