import express, { Application } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { initializeControllers } from "./controllers/socket.controller";

const app: Application = express();
const server: http.Server = http.createServer(app);
const path = require("path");

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");

const io: SocketIOServer = new SocketIOServer(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.static(buildPath));

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

initializeControllers(io);

const PORT: number = 3001;

server.listen(PORT, () => {
  console.log(`Listening on *:${PORT}`);
});
