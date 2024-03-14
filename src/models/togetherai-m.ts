import OpenAI from "openai";

export async function generateWithTogetherAI({
  topic,
  amount = 5,
  apiKey,
  options_length,
}: {
  topic: string;
  amount?: number;
  apiKey: string;
  options_length?: number;
}) {
  const client = new OpenAI({
    apiKey: "315c97cdf65822b64bd9dc963950df0e11d0301916a198f4a400be0a6b605881",
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
  const response = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      {
        role: "user",
        content: `Generate the ${amount} MCQ questions for the given topic: ${topic}. Keep Options limit is ${options_length} and Follow this json format: ${JSON.stringify(
          mcqStructure
        )}`,
      },
    ],
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    response_format: { type: "json_object" },
    n: 1,
  });

  const output = response.choices[0].message.content;
  return output;
}
