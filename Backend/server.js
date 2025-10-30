import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

export const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors);
app.listen(port, () => {
  console.log("listening on port", port);
});
