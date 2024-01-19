import express, { Application } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import { initializeControllers } from "./controllers/socket.controller";

const app: Application = express();
const server: http.Server = http.createServer(app);

const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

initializeControllers(io);

const PORT: number = 3001;

server.listen(PORT, () => {
  console.log(`Listening on *:${PORT}`);
});
