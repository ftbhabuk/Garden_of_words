// app/api/generate/route.ts

import { StreamingTextResponse, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
// import { PromptService } from "@/services/promptService";
import { PromptService } from "@/app/Services/promptService";

// Initialize rate limiting
const ratelimit = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? new Ratelimit({
          redis: new Redis({
              url: process.env.KV_REST_API_URL,
              token: process.env.KV_REST_API_TOKEN,
          }),
          limiter: Ratelimit.slidingWindow(10, "5 m"),
          analytics: true,
          prefix: "magic-spell",
      })
    : false;

// Initialize Groq client
const groq = createOpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
    // Rate limiting check
    if (ratelimit) {
        const ip = req.headers.get("x-real-ip") ?? "local";
        const rl = await ratelimit.limit(ip);

        if (!rl.success) {
            return new Response("Rate limit exceeded", { status: 429 });
        }
    }

    // Parse request body
    const { text, prompt, tag } = await req.json();
    
    if (!prompt) {
        return new Response("Prompt is required", { status: 400 });
    }

    try {
        // Build the prompt using our PromptService
        const promptConfig = { text, prompt, tag };
        const finalPrompt = PromptService.buildPrompt(promptConfig);

        // Get the system message from PromptService
        const systemMessage = PromptService.getSystemMessage();

        // Stream the response
        const result = await streamText({
            model: groq("llama3-8b-8192"),
            system: systemMessage,
            prompt: finalPrompt,
        });

        return new StreamingTextResponse(result.toAIStream());
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response("Error processing request", { status: 500 });
    }
}