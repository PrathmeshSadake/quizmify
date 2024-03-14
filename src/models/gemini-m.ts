import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro-001";

type GeminiProps = {
  topic: string;
  amount?: number;
  apiKey: string;
  options_length?: number;
  model_name?: string;
};
async function generateWithGemini({
  apiKey,
  topic,
  amount = 5,
  options_length = 4,
  model_name = MODEL_NAME,
}: GeminiProps) {
  const genAI = new GoogleGenerativeAI(apiKey!);
  const model = genAI.getGenerativeModel({ model: model_name });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [
    {
      text: 'input: Generate the 5 MCQ questions for the given topic: General knowledge. Keep Options limit is 4 and Follow this json format:\n[{question: "What is the capital of France?",  options: [{title: "New York", isCorrect: false}],correct_answer: "Paris"}];',
    },
    {
      text: 'output: {\n  "questions": [\n    {\n      "question": "What is the capital of France?",\n      "options": [\n        {\n          "title": "New York",\n          "isCorrect": false\n        },\n        {\n          "title": "Berlin",\n          "isCorrect": false\n        },\n        {\n          "title": "London",\n          "isCorrect": false\n        },\n        {\n          "title": "Paris",\n          "isCorrect": true\n        }\n      ],\n      "correct_answer": "Paris"\n    },\n    {\n      "question": "Which is the longest river in the world?",\n      "options": [\n        {\n          "title": "Nile",\n          "isCorrect": true\n        },\n        {\n          "title": "Amazon",\n          "isCorrect": false\n        },\n        {\n          "title": "Mississippi",\n          "isCorrect": false\n        },\n        {\n          "title": "Yangtze",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "Nile"\n    },\n    {\n      "question": "Who painted the Mona Lisa?",\n      "options": [\n        {\n          "title": "Picasso",\n          "isCorrect": false\n        },\n        {\n          "title": "Michelangelo",\n          "isCorrect": false\n        },\n        {\n          "title": "Leonardo da Vinci",\n          "isCorrect": true\n        },\n        {\n          "title": "Van Gogh",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "Leonardo da Vinci"\n    },\n    {\n      "question": "Which planet is known as the Red Planet?",\n      "options": [\n        {\n          "title": "Mars",\n          "isCorrect": true\n        },\n        {\n          "title": "Venus",\n          "isCorrect": false\n        },\n        {\n          "title": "Jupiter",\n          "isCorrect": false\n        },\n        {\n          "title": "Neptune",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "Mars"\n    },\n    {\n      "question": "Who is known as the Father of Computers?",\n      "options": [\n        {\n          "title": "Bill Gates",\n          "isCorrect": false\n        },\n        {\n          "title": "Thomas Edison",\n          "isCorrect": false\n        },\n        {\n          "title": "Charles Babbage",\n          "isCorrect": true\n        },\n        {\n          "title": "Steve Jobs",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "Charles Babbage"\n    }\n  ]\n}',
    },
    {
      text: 'input: Generate the 3 MCQ questions for the given topic: General knowledge. Keep Options limit is 4 and Follow this json format:\n[{question: "What is the capital of France?",  options: [{title: "New York", isCorrect: false}],correct_answer: "Paris"}];',
    },
    {
      text: 'output: {\n  "questions": [\n    {\n      "question": "What is the capital of France?",\n      "options": [\n        {\n          "title": "New York",\n          "isCorrect": false\n        },\n        {\n          "title": "Rome",\n          "isCorrect": false\n        },\n        {\n          "title": "Berlin",\n          "isCorrect": false\n        },\n        {\n          "title": "Paris",\n          "isCorrect": true\n        }\n      ],\n      "correct_answer": "Paris"\n    },\n    {\n      "question": "Which planet is known as the Red Planet?",\n      "options": [\n        {\n          "title": "Jupiter",\n          "isCorrect": false\n        },\n        {\n          "title": "Mars",\n          "isCorrect": true\n        },\n        {\n          "title": "Venus",\n          "isCorrect": false\n        },\n        {\n          "title": "Mercury",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "Mars"\n    },\n    {\n      "question": "Who painted the Mona Lisa?",\n      "options": [\n        {\n          "title": "Pablo Picasso",\n          "isCorrect": false\n        },\n        {\n          "title": "Leonardo da Vinci",\n          "isCorrect": true\n        },\n        {\n          "title": "Vincent van Gogh",\n          "isCorrect": false\n        },\n        {\n          "title": "Michelangelo",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "Leonardo da Vinci"\n    }\n  ]\n}',
    },
    {
      text: 'input: Generate the 3 MCQ questions for the given topic: General knowledge. Keep Options limit is 2 and Follow this json format:\n[{question: "What is the capital of France?",  options: [{title: "New York", isCorrect: false}],correct_answer: "Paris"}];',
    },
    {
      text: 'output: {\n  "questions": [\n    {\n      "question": "What is the capital of France?",\n      "options": [\n        {\n          "title": "New York",\n          "isCorrect": false\n        },\n        {\n          "title": "Paris",\n          "isCorrect": true\n        }\n      ],\n      "correct_answer": "Paris"\n    },\n    {\n      "question": "Which planet is known as the Red Planet?",\n      "options": [\n        {\n          "title": "Mars",\n          "isCorrect": true\n        },\n        {\n          "title": "Venus",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "Mars"\n    },\n    {\n      "question": "Who wrote the famous play \'Romeo and Juliet\'?",\n      "options": [\n        {\n          "title": "William Shakespeare",\n          "isCorrect": true\n        },\n        {\n          "title": "Charles Dickens",\n          "isCorrect": false\n        }\n      ],\n      "correct_answer": "William Shakespeare"\n    }\n  ]\n}',
    },
    {
      text: `input: Generate the ${amount} MCQ questions for the given topic: ${topic}. Keep Options limit is ${options_length} and Follow this json format:\n[{question: "What is the capital of France?",  options: [{title: "New York", isCorrect: false}],correct_answer: "Paris"}];`,
    },
    { text: "output: " },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  console.log(response.text());

  return response.text();
}

export default generateWithGemini;
