import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DallE Routes" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt,
    });

    //const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
