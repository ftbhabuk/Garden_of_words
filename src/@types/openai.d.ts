declare module 'openai' {
    export class OpenAI {
        constructor(options: { apiKey: string; baseURL?: string });
        chat: {
            completions: {
                create: (options: any) => Promise<any>;
            };
        };
    }
} 