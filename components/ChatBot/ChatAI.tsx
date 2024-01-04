"use client"

import { useState } from "react";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

function ChatAI() {


  const [convoMessage, convoSetMessage] = useState([])


  console.log(convoMessage," in chat AI page")

  return (
    <div>
      <ChatForm convoSetMessage={convoSetMessage} />

      <ChatMessage />
    </div>
  );
}

export default ChatAI;


// Could use context api from react but life too depressing