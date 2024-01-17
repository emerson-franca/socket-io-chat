import express, { Application } from "express";
import http from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import cors from "cors";

const app: Application = express();
const server: http.Server = http.createServer(app);

app.use(cors());

const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

interface MessageData {
  message: string;
  room: string;
}

const availableRooms: string[] = [];

io.on("connection", (socket: Socket) => {
  socket.on("get_available_rooms", () => {
    socket.emit("available_rooms", availableRooms);
  });

  socket.on("join_room", (room: string) => {
    socket.join(room);
    availableRooms.push(room);
    console.log(`User Joined Room: ${room}`);
    console.log(` Room: ${room}`);
  });

  socket.on("send_message", (data: MessageData) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

const PORT: number = 3001;

server.listen(PORT, () => {
  console.log(`Listening on *:${PORT}`);
});
