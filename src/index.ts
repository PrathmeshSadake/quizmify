import express, { Request, Response } from "express";
import { generateWithOpenAI } from "./models/openai-m";

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
