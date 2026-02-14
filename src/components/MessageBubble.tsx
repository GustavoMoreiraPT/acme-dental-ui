import ReactMarkdown from "react-markdown";
import type { Message } from "../types";

interface Props {
  message: Message;
}

export function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {/* Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold mr-2 mt-1">
          L
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-gray-100 text-gray-900 rounded-bl-md"
        }`}
      >
        {isUser ? (
          <span className="whitespace-pre-wrap">{message.content}</span>
        ) : (
          <ReactMarkdown
            components={{
              /* Render bold text */
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              /* Render lists with proper spacing */
              ul: ({ children }) => (
                <ul className="list-disc list-inside my-1 space-y-0.5">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside my-1 space-y-0.5">
                  {children}
                </ol>
              ),
              /* Paragraphs with spacing */
              p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
              /* Links styled */
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700"
                >
                  {children}
                </a>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>

      {/* User avatar */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-sm font-bold ml-2 mt-1">
          U
        </div>
      )}
    </div>
  );
}
