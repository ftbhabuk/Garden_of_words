import { StreamingTextResponse, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit =
	process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
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

const groq = createOpenAI({
	apiKey: process.env.GROQ_API_KEY,
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
	if (!prompt) return new Response("Prompt is required", { status: 400 });

	// Adjust the prompt based on the selected tag
	let adjustedPrompt = `Prompt: ${prompt}\nText: ${text}`;

	switch (tag) {
		case "Free verse":
			adjustedPrompt = `Please respond in a poetic free verse way.\n${adjustedPrompt}`;
			break;
		case "Formal":
			adjustedPrompt = `Please respond being formal.\n${adjustedPrompt}`;
			break;
		case "Poetic":
			adjustedPrompt = `Please respond with a poetic tone.\n${adjustedPrompt}`;
			break;
		case "Short":
			adjustedPrompt = `Please keep the response short.\n${adjustedPrompt}`;
			break;
		// You can add more cases for other tags
		default:
			// No tag or unrecognized tag
			break;
	}

	const result = await streamText({
		model: groq("llama3-8b-8192"),
		system: "You are a literature writer. You will be given a prompt and a text to edit, which may be empty or incomplete. Edit the text to match the prompt and selceted tag , and only respond with the full edited version of the text - do not include any other information, context, or explanation. If you add on to the text, respond with the full version, not just the new portion. Do not include the prompt or otherwise preface your response. Do not enclose the response in quotes. Do not answer anything off topic of literature.",
		prompt: adjustedPrompt, // Use the adjusted prompt
	});

	return new StreamingTextResponse(result.toAIStream());
}
