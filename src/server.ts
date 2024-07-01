const express = require("express");
import { Request, Response } from "express";
import { Socket } from "socket.io";
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
    res.sendFile(join(__dirname, "./../public/index.html"));
});

io.on("connection", (socket: Socket) => {
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});