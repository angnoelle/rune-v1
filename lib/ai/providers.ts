import { createOpenAI } from '@ai-sdk/openai';
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

// 1. Create the OpenRouter connection
export const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai",
 });

// 2. Tell the app to use OpenRouter for chat
export function getLanguageModel(modelId: string) {
  return openrouter(modelId);
}

// 3. Tell the app to use OpenRouter for the sidebar titles
export function getTitleModel() {
  return openrouter(titleModel.id);
}
