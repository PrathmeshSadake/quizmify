export declare function generateWithOpenAI({ topic, amount, apiKey, options_length, }: {
    topic: string;
    amount?: number;
    apiKey: string;
    options_length?: number;
}): Promise<string | null>;
