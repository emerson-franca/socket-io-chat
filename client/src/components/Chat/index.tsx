import { useState } from "react";
import { ReactComponent as SendIcon } from "./assets/send.svg";
import { useChat } from "hooks/useChat";
import useChatStore from "store/useChats";

export function Chat() {
  const [message, setMessage] = useState("");
  const { messageReceived, sendDirectMessage } = useChat();
  const activeChat = useChatStore((state) => state.activeChat);

  const handleMessageClick = () => {
    sendDirectMessage(activeChat?.id || "", message);
    setMessage("");
  };

  return (
    <div className="flex justify-between flex-col w-full mx-auto bg-slate-100 rounded-md shadow-md col-start-2 col-end-3 row-start-2 row-end-3">
      <div className="flex flex-col h-full">{messageReceived}</div>

      <div className="flex p-6 flex-col gap-2 bg-white">
        <div className="flex gap-6">
          <input
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:border-blue-500"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={handleMessageClick}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
