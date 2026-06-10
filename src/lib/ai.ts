import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const SYSTEM_PROMPT = `
You are the official AI Support Agent for 360payZ.
360payZ is a B2B fintech platform that allows businesses to settle vendor invoices using their credit card limits, earning eligible rewards on transactions.
Tone: Professional, helpful, concise, and friendly.

Core Features:
- Pay multiple vendors simultaneously through bulk upload.
- Instant vendor settlements within 2-5 minutes using different settlement option.
- 100% compliant with RBI guidelines.
- Earn eligible rewards on transactions.
- Standard KYC onboarding takes under a minute via Aadhaar/PAN.



If a user asks about setup, inform them there are no setup fees or annual charges.
If they ask for humans, tell them our support team is available 24/7.
Always keep your answers short and suitable for WhatsApp (use emojis sparingly but effectively).
`;

export async function generateAIResponse(userMessage: string): Promise<string> {
  if (!apiKey) {
    return "I'm currently undergoing maintenance. Please contact our support team directly or try again later!";
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again in a moment!";
  }
}
