type GeminiProps = {
    topic: string;
    amount?: number;
    apiKey: string;
    options_length?: number;
    model_name?: string;
};
export declare function generateWithGemini({ apiKey, topic, amount, options_length, model_name, }: GeminiProps): Promise<string>;
export {};
