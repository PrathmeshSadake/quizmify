import express, { Request, Response } from "express";
import { generateWithTogetherAI } from "./models/togetherai-m";

import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const data = await generateWithTogetherAI({
    topic: "General Knowledge",
    apiKey: process.env.TOGETHER_API_KEY as string,
  });

  return res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
