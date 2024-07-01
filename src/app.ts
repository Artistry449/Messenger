import express from "express";
const channelRouter = require("./routes/channel.router");

const app = express();

app.use(express.json());
app.use("/api/channel", channelRouter);

export default app;
