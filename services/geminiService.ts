import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { PRODUCTS } from '../constants';
import { ChatMessage } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const DISCORD_WEBHOOK_URL = "https://discordapp.com/api/webhooks/1450162124625018930/W_miiyHDtiPaZod5pZzltfZMBsiPgA3e0amMA0PsuuXxC4I957wyNy0Gf2IEUtDzeeel";

const SYSTEM_INSTRUCTION = `
You are the "Huntech Smart Assistant", a knowledgeable sales engineer for Huntech Engineers Pvt. Ltd.
Your goal is to recommend the best packaging machinery AND generate sales leads.

Here is the product catalog:
${JSON.stringify(PRODUCTS.map(p => ({
  name: p.name,
  category: p.category,
  suitableFor: p.suitableFor,
  description: p.description
})))}

Rules:
1. Be concise, professional, and helpful.
2. If the user asks about packing a specific food (e.g., "chips"), recommend the machine listed in 'suitableFor'.
3. **LEAD GENERATION**: Actively trying to capture the user's details for a consultation. Politely ask for their **Name**, **Phone Number**, and **Company Name**.
4. Once you have at least a Name and Phone Number, you MUST call the 'submitLead' tool to save their information. Do not ask for confirmation, just do it.
5. After calling the tool, confirm to the user that their inquiry has been sent to our sales team and we will contact them shortly.
6. Emphasize Huntech's customization and local Faridabad support.
7. Keep answers under 100 words unless technical details are requested.
`;

const submitLeadTool: FunctionDeclaration = {
  name: "submitLead",
  description: "Submits user contact information (lead) to the Huntech sales team via Discord.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      name: { type: Type.STRING, description: "User's full name" },
      phone: { type: Type.STRING, description: "User's phone number" },
      company: { type: Type.STRING, description: "User's company name" },
      email: { type: Type.STRING, description: "User's email address" },
      interest: { type: Type.STRING, description: "What machine or product they are interested in" }
    },
    required: ["name", "phone"]
  }
};

const sendToDiscord = async (data: any) => {
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: "🚀 New Sales Lead Captured",
          color: 3447003, // Blue
          fields: [
            { name: "Name", value: data.name, inline: true },
            { name: "Phone", value: data.phone, inline: true },
            { name: "Company", value: data.company || "N/A", inline: true },
            { name: "Email", value: data.email || "N/A", inline: true },
            { name: "Interest", value: data.interest || "General Inquiry" },
          ],
          footer: { text: "Huntech AI Assistant" },
          timestamp: new Date().toISOString()
        }]
      })
    });
    return true;
  } catch (error) {
    console.error("Discord Webhook Error:", error);
    return false;
  }
};

export const getGeminiResponse = async (history: ChatMessage[]): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    // Convert ChatMessage[] to Gemini API Content format
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Step 1: Send conversation to Model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ functionDeclarations: [submitLeadTool] }],
        temperature: 0.7,
      },
    });

    // Step 2: Check for Tool Calls (Function Calling)
    const functionCalls = response.functionCalls;
    
    if (functionCalls && functionCalls.length > 0) {
       const call = functionCalls[0];
       
       if (call.name === 'submitLead') {
          const args = call.args as any;
          
          // Execute the actual side-effect (Send to Discord)
          await sendToDiscord(args);

          // Prepare the Tool Response to send back to Gemini
          const toolResponsePart = {
             functionResponse: {
                name: 'submitLead',
                response: { result: "Lead submitted successfully to sales team." }
             }
          };

          // Step 3: Send the tool output back to Gemini to get the final natural language response
          const finalResponse = await ai.models.generateContent({
             model: "gemini-2.5-flash",
             contents: [
                ...contents, 
                response.candidates![0].content, // The assistant's request to call function
                { role: 'user', parts: [toolResponsePart] } // The result of the function
             ],
             config: { systemInstruction: SYSTEM_INSTRUCTION }
          });

          return finalResponse.text || "Thank you! I've sent your details to our sales team.";
       }
    }

    return response.text || "I apologize, I could not process that request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline. Please try again later or contact our sales team directly.";
  }
};