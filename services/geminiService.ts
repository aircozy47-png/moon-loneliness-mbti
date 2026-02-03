
import { GoogleGenAI } from "@google/genai";
import { LonelinessType } from "../types";

export const getSolaceMessage = async (type: LonelinessType): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    사용자의 외로움 유형은 "${type.code} - ${type.name}"입니다.
    이 유형의 특징: ${type.description}

    당신은 따뜻하고 공감 능력이 뛰어난 심리 상담사입니다. 
    이 사용자에게 건네는 짧지만 깊은 위로와 격려의 메시지를 3-4문장으로 작성해 주세요. 
    전문적인 조언보다는 친구처럼 다정하게, 사용자의 외로움을 부정하지 않고 그 자체로 수용해주는 느낌이어야 합니다.
    한국어로 답변해 주세요.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "당신의 외로움도 하나의 빛나는 감정입니다. 잠시 머물다 가는 그 마음을 따뜻하게 안아주세요.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "지금은 비록 혼자라고 느껴지더라도, 당신은 그 자체로 충분히 소중한 사람입니다. 당신의 밤이 조금 더 평안하기를 바랍니다.";
  }
};
