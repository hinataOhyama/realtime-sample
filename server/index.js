const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000",
  },
});

const PORT = 5000;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg) => {
    console.log("message: ", msg);
    io.emit("receive message", msg);
  });
});

server.listen(PORT, console.log(`server is running on ${PORT}`))