"use client";

import {
  Bot,
  LoaderCircle,
  Send,
  Sparkles,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const openingMessage: Message = {
  role: "assistant",
  content:
    "Hi, I’m Hyungtae’s Digital Twin. Ask me about his engineering career, technical experience, or the products he has shipped.",
};

const suggestions = [
  "What did he build at Blue Goji?",
  "Tell me about his Unity expertise.",
  "Which live-service products has he worked on?",
];

function SafeIcon({ icon: Icon, ...props }: LucideProps & { icon: LucideIcon }) {
  return <Icon {...props} suppressHydrationWarning />;
}

export function DigitalTwin() {
  const [messages, setMessages] = useState<Message[]>([openingMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 1 && !isLoading) return;

    const container = messagesRef.current;
    container?.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(content: string) {
    const question = content.trim();
    if (!question || isLoading) return;

    const userMessage: Message = { role: "user", content: question };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/career/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "The Digital Twin could not answer right now.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer as string },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The Digital Twin could not answer right now.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <section className="digital-twin" id="digital-twin">
      <div className="section-shell">
        <div className="section-label light"><span>04</span> Digital Twin</div>
        <div className="twin-layout">
          <div className="twin-intro">
            <span className="twin-badge"><i /> AI CAREER GUIDE</span>
            <h2>Meet my<br /><em>Digital Twin.</em></h2>
            <p>
              A career-aware AI grounded in my verified professional history.
              Ask about the systems I&apos;ve built, the teams I&apos;ve supported,
              or the technologies I use to ship real products.
            </p>
            <div className="twin-model">
              <SafeIcon icon={Sparkles} size={16} />
              <span>Powered by OpenRouter · Grounded in my career profile</span>
            </div>
          </div>

          <div className="chat-shell">
            <div className="chat-header">
              <div className="chat-avatar"><SafeIcon icon={Bot} size={20} /></div>
              <div><strong>Digital Twin</strong><span>Career intelligence · Online</span></div>
              <i className="chat-status" />
            </div>

            <div className="chat-messages" aria-live="polite" ref={messagesRef}>
              {messages.map((message, index) => (
                <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                  <span>{message.role === "assistant" ? "DT" : "YOU"}</span>
                  <p>{message.content}</p>
                </div>
              ))}
              {isLoading && (
                <div className="chat-message assistant loading-message">
                  <span>DT</span>
                  <p><SafeIcon icon={LoaderCircle} size={17} className="spin" /> Thinking through the career timeline…</p>
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="chat-suggestions">
                {suggestions.map((suggestion) => (
                  <button key={suggestion} type="button" onClick={() => void sendMessage(suggestion)}>
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {error && <p className="chat-error" role="alert">{error}</p>}

            <form className="chat-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="digital-twin-question">Ask about Hyungtae&apos;s career</label>
              <input
                id="digital-twin-question"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength={1500}
                placeholder="Ask about my career, skills, or projects…"
                disabled={isLoading}
              />
              <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message">
                <SafeIcon icon={Send} size={17} />
              </button>
            </form>
            <p className="chat-disclaimer">AI responses are grounded in the career profile but may still make mistakes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
