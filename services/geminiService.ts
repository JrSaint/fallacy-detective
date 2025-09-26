
import { GoogleGenAI } from "@google/genai";
import type { Fallacy } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateScenarioForFallacy(fallacy: Fallacy): Promise<string> {
  const prompt = `
    You are an expert in creating educational content for middle schoolers, inspired by "The Tuttle Twins Guide to Logical Fallacies".
    Your task is to write a short, simple, and relatable scenario (2-3 sentences) that clearly demonstrates the "${fallacy.name}" logical fallacy.
    The scenario should be easy for a 12-year-old to understand and should involve situations they might encounter (e.g., at school, with friends, at home).

    Logical Fallacy to demonstrate: ${fallacy.name}
    Description of fallacy for your reference: ${fallacy.description}

    IMPORTANT:
    - DO NOT mention the name of the fallacy in your response.
    - ONLY provide the scenario text. No introductory phrases like "Here is a scenario:".
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.8,
      }
    });
    return response.text.trim();
  } catch (error) {
    console.error(`Error generating scenario for ${fallacy.name}:`, error);
    return `Error creating a scenario. Please try again.`;
  }
}
