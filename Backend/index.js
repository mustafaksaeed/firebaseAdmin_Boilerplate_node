import express from "express";
import { app } from "./server.js";
import authRoutes from "./routes/authRoutes.js";

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api", authRoutes);
