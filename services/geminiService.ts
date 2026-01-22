import { GoogleGenAI } from "@google/genai";

export const generateLuxuryResponse = async (name: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return `Welcome to the inner circle, ${name}. We shall be in touch.`;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the concierge for an ultra-luxury jewelry brand called "Resurrection". A client named "${name}" has just joined the waitlist for the single, exclusive "Resurrection" gold ring. 
      
      Write a very short (max 2 sentences), incredibly prestigious, mysterious, and polite confirmation message. Use elevated vocabulary. The tone should be spiritual yet opulent. Do not use hashtags or emojis.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || `Welcome, ${name}. Your pursuit of the divine has been noted.`;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Welcome, ${name}. We are honored by your interest.`;
  }
};