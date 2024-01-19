import { IUser } from "interfaces/user";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { socket } from "services/socket";
import useChatStore from "store/useChats";

export function Sidebar() {
  const [onlineUsers, setOnlineUsers] = useState<IUser[]>([]);
  const handleOnlineUsers = useChatStore((state) => state.setOnlineUsers);

  useEffect(() => {
    socket.on("updateOnlineUsers", (users) => {
      setOnlineUsers(users);
      handleOnlineUsers(users);
    });

    return () => {
      socket.off("updateOnlineUsers");
    };
  }, [handleOnlineUsers]);

  return (
    <aside className="flex flex-col gap-6 border-r px-5 py-8 bg-[#F8FAFF] col-start-1 col-end-2 row-start-1 row-end-3 shadow-md">
      <h1>Chats</h1>
      {onlineUsers.map((user) => (
        <Card {...user} key={user.id} />
      ))}
    </aside>
  );
}
