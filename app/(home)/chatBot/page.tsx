import ChatForm from "@/components/ChatBot/ChatForm";
import ChatMessage from "@/components/ChatBot/ChatMessage";

function ChatBot() {
  return (
    <div className="w-full min-h-screen bg-[#123] text-white">
      <header className="p-4 bg-[#222]">
        <h2 className="text-2xl text-5xl font-bold mb-4 ">Chat Bot</h2>
        <p className="text-sm">
          Use tokens or membership to be able to communicate with our chat bot.
        </p>
      </header>

      <ChatForm />

      <ChatMessage />
    </div>
  );
}

export default ChatBot;
