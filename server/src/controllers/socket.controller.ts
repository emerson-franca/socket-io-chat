import { Server as SocketIOServer } from "socket.io";
import { configureSockets } from "../services/socket";

export function initializeControllers(io: SocketIOServer): void {
  configureSockets(io);
}
