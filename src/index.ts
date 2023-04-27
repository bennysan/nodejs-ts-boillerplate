require("dotenv").config();
import express from "express";

const app = express();
const PORT = Number(process.env.PORT) | 8801;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log("Server listening on port" + PORT);
});
