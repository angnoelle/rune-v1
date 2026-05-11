import { createOpenAI } from '@ai-sdk/openai';
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

// 1. Create the OpenRouter connection
export const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
 });

// 2. Tell the app to use OpenRouter for chat
export function getLanguageModel(modelId: string) {
  const fullModelId = `openai/gpt-oss-120b:free@preset/rune-v1-0`;
  console.log("Calling model:", fullModelId);
  return openrouter(fullModelId);
}

// 3. Tell the app to use OpenRouter for the sidebar titles
export function getTitleModel() {
  return openrouter(titleModel.id);
}
