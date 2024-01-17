import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

export function Chat() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", {
      message,
      room,
    });
    setCurrentRoom(room);
    setMessage("");
  };

  const getAvailableRooms = () => {
    socket.emit("get_available_rooms");
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setCurrentRoom(room);
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });

    getAvailableRooms();

    return () => {
      socket.off("receive_message");
      socket.off("available_rooms");
    };
  }, [currentRoom]);

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h1 className="text-1 xl mb-2 font-bold tex">
        Current Room: {currentRoom || "Not joined any room"}
      </h1>
      {/* <h1 className="text-1 xl mb-2 font-bold tex">
        Available Rooms: {availableRooms.join(", ") || "No available rooms"}
      </h1> */}
      <h1 className="text-1 xl mb-2 font-bold tex">Message Received:</h1>
      <div className="flex flex-col h-28 mb-2 border p-3 rounded-md border-blue-200">
        {messageReceived}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <input
            className="w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 "
            placeholder="Enter room name"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button
            className="w-1/3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={joinRoom}
          >
            Join room
          </button>
        </div>
        <textarea
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
