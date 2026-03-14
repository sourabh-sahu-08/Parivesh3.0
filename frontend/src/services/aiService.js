import API from "./api";

export const chatWithAI = async (message) => {
  const response = await API.post("/ai/chat", { message });
  return response.data;
};