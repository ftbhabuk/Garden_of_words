// route.ts
import { StreamingTextResponse } from "ai";
import { OpenAIStream } from "ai";
import OpenAI from "openai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
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
          prefix: "Garden-of-words",
      })
    : false;

// Initialize Groq client
const groq = new OpenAI({
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
    const { text, prompt, tags, temperature } = await req.json();
    
    if (!prompt) {
        return new Response("Prompt is required", { status: 400 });
    }

    try {
        // Build the prompt using our PromptService
        const promptConfig = { 
            text, 
            prompt, 
            selectedTags: Array.isArray(tags) ? tags : [], // Convert to array if not already
            temperature: temperature || 0.7 
        };

        const finalPrompt = PromptService.buildPrompt(promptConfig);
        const systemMessage = PromptService.getSystemMessage();

        // Get the system message from PromptService
       
        // Create the stream with temperature parameter
        const response = await groq.chat.completions.create({
            model: "llama3-8b-8192",
            messages: [
                { role: "system", content: systemMessage },
                { role: "user", content: finalPrompt }
            ],
            temperature: temperature || 0.7,
            stream: true,
        });

        // Convert the OpenAI stream to a ReadableStream
        const stream = OpenAIStream(response);

        return new StreamingTextResponse(stream);
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response("Error processing request", { status: 500 });
    }
}