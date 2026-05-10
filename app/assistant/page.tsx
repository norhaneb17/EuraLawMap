"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestionQuestions = [
  "Quelle est la différence entre le DSA et le DMA ?",
  "Quelles obligations pour une plateforme de 50M d'utilisateurs ?",
  "Qu'est-ce qu'un système d'IA à haut risque selon l'AI Act ?",
  "Comment fonctionne le droit à l'effacement sous le RGPD ?",
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setError(null);
    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Erreur du serveur");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch {
      setError("Une erreur est survenue. Vérifiez que la clé API est configurée.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="font-serif-display text-2xl font-bold text-navy-950 dark:text-white">Assistant juridique</h1>
        <p className="text-navy-400 dark:text-gray-400 text-sm mt-1">
          Spécialisé en droit européen du numérique — DSA, DMA, AI Act, RGPD, DGA, NIS2...
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-5 mb-4 pr-1">
        {messages.length === 0 && (
          <div className="text-center py-10">
            <Bot className="w-10 h-10 text-navy-200 mx-auto mb-3" />
            <p className="text-gray-500 text-sm mb-6">Posez votre question sur le droit européen du numérique</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto">
              {suggestionQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-left text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-navy-300 dark:hover:border-navy-600 rounded-xl px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="w-7 h-7 rounded-full bg-navy-950 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-gold-400" />
              </div>
            )}

            {msg.role === "user" ? (
              <div className="max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed bg-navy-950 text-white">
                {msg.content}
              </div>
            ) : (
              <div className="max-w-[85%] rounded-xl px-5 py-4 text-sm leading-relaxed bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 prose prose-sm dark:prose-invert max-w-none
                prose-headings:font-semibold prose-headings:text-navy-900 dark:prose-headings:text-white prose-headings:mt-4 prose-headings:mb-2
                prose-p:my-2 prose-p:leading-relaxed
                prose-li:my-0.5
                prose-ul:my-2 prose-ul:pl-4
                prose-ol:my-2 prose-ol:pl-4
                prose-strong:text-navy-900 dark:prose-strong:text-white prose-strong:font-semibold
                prose-a:text-gold-600 hover:prose-a:text-gold-700
                prose-hr:border-gray-200 dark:prose-hr:border-gray-700 prose-hr:my-3">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            )}

            {msg.role === "user" && (
              <div className="w-7 h-7 rounded-full bg-navy-100 dark:bg-navy-800 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-navy-600 dark:text-navy-300" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="w-7 h-7 rounded-full bg-navy-950 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-gold-400" />
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-navy-400 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 bg-navy-400 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 bg-navy-400 rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
          placeholder="Posez votre question…"
          className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-100 dark:focus:ring-navy-800"
          disabled={loading}
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={loading || !input.trim()}
          className="px-4 py-3 bg-navy-950 hover:bg-navy-800 disabled:bg-gray-100 dark:disabled:bg-gray-800 text-white disabled:text-gray-400 rounded-xl transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
