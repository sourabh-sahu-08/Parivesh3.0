import { useState } from "react";
import { chatWithAI } from "../../services/aiService";

const AIChatbotPanel = () => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Namaste! Main PARIVESH 3.0 AI Environmental Advisor hoon. Aap project approvals, pollution risk, ya documents ke baare me pooch sakte hain.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    const userMessage = { role: "user", text: userText };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      setLoading(true);
      const data = await chatWithAI(userText);

      const aiMessage = {
        role: "ai",
        text: `${data.reply}\n\nSuggestions: ${data.suggestions.join(", ")}`,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: error.response?.data?.message || "AI response failed.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            AI Environmental Advisor
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Ask about approvals, pollution, GIS risk, or compliance
          </p>
        </div>

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
          AI Online
        </span>
      </div>

      <div className="h-[380px] overflow-y-auto border border-gray-200 rounded-2xl p-4 bg-gray-50 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 ${
              msg.role === "user"
                ? "ml-auto bg-green-600 text-white"
                : "bg-white border border-gray-200 text-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-white border border-gray-200 text-gray-700 rounded-2xl px-4 py-3 max-w-[85%]">
            AI is thinking...
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your environmental query..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatbotPanel;