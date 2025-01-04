import { StreamingTextResponse } from "ai";
import { OpenAI } from "openai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { PromptService } from "@/app/Services/promptService";

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

const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
    throw new Error("GROQ_API_KEY is not defined in the environment variables.");
}

const groq = new OpenAI({
    apiKey,
    baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
    if (ratelimit) {
        const ip = req.headers.get("x-real-ip") ?? "local";
        const rl = await ratelimit.limit(ip);
        
        if (!rl.success) {
            return new Response("Rate limit exceeded", { status: 429 });
        }
    }

    const { text, prompt, tag } = await req.json();
    
    if (!prompt) {
        return new Response("Prompt is required", { status: 400 });
    }

    try {
        const promptConfig = { text, prompt, tag };
        const finalPrompt = PromptService.buildPrompt(promptConfig);
        const systemMessage = PromptService.getSystemMessage();

        const stream = await groq.chat.completions.create({
            model: "llama3-8b-8192",
            messages: [
                { role: "system", content: systemMessage },
                { role: "user", content: finalPrompt }
            ],
            stream: true,
        });

        return new StreamingTextResponse(stream);
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response("Error processing request", { status: 500 });
    }
}