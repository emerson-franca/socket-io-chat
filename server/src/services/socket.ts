import { Server as SocketIOServer, Socket } from "socket.io";

const onlineUsers: { [key: string]: User } = {};

interface MessageData {
  recipient: string;
  message: string;
}

interface User {
  id: string;
  name: string;
  avatar: string;
  socket: Socket;
}

export const configureSockets = (io: SocketIOServer) => {
  io.on("connection", (socket: Socket) => {
    console.log("A user connected:", socket.id);

    onlineUsers[socket.id] = {
      id: socket.id,
      name: "Guest",
      avatar: `https://placewaifu.com/image/${
        Math.floor(Math.random() * 200) + 1
      }`,
      socket,
    };

    //emit the object values minus the socket object
    io.emit(
      "updateOnlineUsers",
      Object.values(onlineUsers).map(({ socket, ...rest }) => rest)
    );

    socket.on("disconnect", () => {
      delete onlineUsers[socket.id];
      io.emit(
        "updateOnlineUsers",
        Object.values(onlineUsers).map(({ socket, ...rest }) => rest)
      );
    });

    socket.on("send_message", (data: MessageData) => {
      const recipientSocket = onlineUsers[data.recipient];

      if (recipientSocket) {
        recipientSocket.socket.emit("receive_message", {
          sender: socket.id,
          message: data.message,
        });
      } else {
        console.log(`User ${data.recipient} is not online.`);
      }
    });
  });
};
