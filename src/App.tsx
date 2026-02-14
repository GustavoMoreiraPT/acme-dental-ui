import { ChatWindow } from "./components/ChatWindow";
import { useChat } from "./hooks/useChat";
import { useSession } from "./hooks/useSession";

export default function App() {
  const sessionId = useSession();
  const { messages, isLoading, error, sendMessage } = useChat(sessionId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[85vh]">
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          error={error}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
}
