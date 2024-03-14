import express, { Request, Response } from "express";
import { generateWithOpenAI } from "./models/openai-m";
import { generateWithGemini } from "./models/gemini-m";
import { generateWithTogetherAI } from "./models/togetherai-m";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const data = await generateWithOpenAI({
    topic: "General Knowledge",
    apiKey: process.env.OPENAI_API_KEY as string,
  });

  return res.status(200).send(data);
});

app.get("/together", async (req: Request, res: Response) => {
  const data = await generateWithTogetherAI({
    topic: "General Knowledge",
    apiKey: process.env.TOGETHER_API_KEY as string,
  });

  return res.status(200).send(data);
});

app.get("/gemini", async (req: Request, res: Response) => {
  const data = await generateWithGemini({
    topic: "General Knowledge",
    apiKey: process.env.GEMINI_API_KEY as string,
  });

  return res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
