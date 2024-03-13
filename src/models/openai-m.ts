import OpenAI from "openai";

export async function generateWithOpenAI({
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
  if (!apiKey) {
    throw new Error("API Key is required");
  }

  const openai = new OpenAI({
    apiKey: apiKey,
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

  const completion = await openai.chat.completions.create({
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
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
    n: 1,
  });
  return completion.choices[0].message.content;
}
