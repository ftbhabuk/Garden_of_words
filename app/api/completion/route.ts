import { NextResponse } from "next/server";
import { PromptService } from "@/app/Services/promptService";
import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq';

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

    const result = streamText({
      model: groq('llama3-8b-8192'),
      system: systemMessage,
      messages: [
        { role: "user", content: finalPrompt },
      ],
      temperature: promptConfig.temperature,
    });

    return result.toDataStreamResponse();
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}