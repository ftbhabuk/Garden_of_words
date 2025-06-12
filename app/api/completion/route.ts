// app/api/chat/route.ts

import { NextResponse } from "next/server";
import OpenAI from "openai";
import { PromptService } from "@/app/Services/promptService";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || "",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  const { text, prompt, tags, temperature } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  if (!process.env.GROQ_API_KEY) {
    console.error("Missing GROQ_API_KEY");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  try {
    const promptConfig = {
      text,
      prompt,
      selectedTags: Array.isArray(tags) ? tags : [],
      temperature: temperature || 0.7,
    };

    const finalPrompt = PromptService.buildPrompt(promptConfig);
    const systemMessage = PromptService.getSystemMessage();

    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: finalPrompt },
      ],
      temperature: promptConfig.temperature,
      stream: true,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const content = chunk.choices?.[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
