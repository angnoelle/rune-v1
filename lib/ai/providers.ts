import { createOpenAI } from '@ai-sdk/openai';
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

// This tells the app to talk to OpenRouter
export const openai = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai",
});

export function getLanguageModel(modelId: string) {
  // We force it to use our OpenRouter-configured openai provider
  return openai(modelId);
}

export function getTitleModel() {
  return openai(titleModel.id);
}
