import { useEffect, useState } from "react";
import { socket } from "services/socket";

interface MessageData {
  message: string;
}

export function useChat() {
  const [messageReceived, setMessageReceived] = useState("");

  const sendDirectMessage = (recipient: string, message: string) => {
    const data = {
      recipient: recipient,
      message: message,
    };

    socket.emit("send_message", data);
  };

  useEffect(() => {
    const handleReceiveMessage = (data: MessageData) => {
      setMessageReceived(data.message);
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);

  return { messageReceived, sendDirectMessage };
}
