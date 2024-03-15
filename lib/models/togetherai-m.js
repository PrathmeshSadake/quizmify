"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWithTogetherAI = void 0;
const openai_1 = require("openai");
function generateWithTogetherAI(_a) {
    return __awaiter(this, arguments, void 0, function* ({ topic, amount = 5, apiKey, options_length, }) {
        const client = new openai_1.default({
            apiKey,
            baseURL: "https://api.together.xyz/v1",
        });
        const mcqStructure = [
            {
                question: "What is the capital of France?",
                options: [
                    {
                        title: "New York",
                        isCorrect: "false",
                    },
                ],
                correct_answer: "Paris",
            },
        ];
        const response = yield client.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant designed to output JSON.",
                },
                {
                    role: "user",
                    content: `Generate the ${amount} MCQ questions for the given topic: ${topic}. Keep Options limit is ${options_length} and Follow this json format: ${JSON.stringify(mcqStructure)}`,
                },
            ],
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            response_format: { type: "json_object" },
            n: 1,
        });
        const output = response.choices[0].message.content;
        return output;
    });
}
exports.generateWithTogetherAI = generateWithTogetherAI;
