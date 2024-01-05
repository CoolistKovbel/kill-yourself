"use client"

import { useState } from "react";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

function  ChatAI() {

  const [convoMessage, convoSetMessage] = useState([])


  return (
    <div className="w-full h-screen bg-[#222] text-white">
      <ChatForm convoSetMessage={convoSetMessage} />

      <ChatMessage convoMessage={convoMessage}/>
    </div>
  );
}

export default ChatAI;


// Could use context api from react but life too depressing