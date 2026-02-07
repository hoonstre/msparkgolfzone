
import { GoogleGenAI } from "@google/genai";

// Refactored to initialize the GoogleGenAI client inside the function using process.env.API_KEY directly.
export const getGeminiResponse = async (prompt: string) => {
  // Always use { apiKey: process.env.API_KEY } for initialization.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `당신은 'MS 파크골프존'의 가맹 성공 컨설턴트입니다. 
        예비 가맹점주들에게 파크골프 창업의 메리트, MS만의 기술력(시니어 맞춤 UI), 수익 모델, 개설 절차를 전문적이고 친절하게 설명하십시오.
        사용자가 '수익이 얼마나 나나요?'라고 물으면, 연 평균 수익률이 약 35%에 달하며 초기 투자를 빠르게 회수할 수 있는 블루오션 시장임을 강조하세요.
        답변 끝에는 항상 예비 점주님을 응원하는 시바견 마스코트의 귀여운 멘트(예: "대표님, 저 시바가 성공 창업을 돕겠습니다! 🐶")를 덧붙이세요.`,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    // Access the .text property directly instead of calling .text() as a method.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 상담 정보 로드 중 오류가 발생했습니다. 고객센터(1577-0000)로 직접 문의 부탁드립니다.";
  }
};
