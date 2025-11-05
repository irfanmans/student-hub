import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get("/", (req, res) => {
  res.send("Welcome to StudentHub API 🚀");
});

app.listen(8000, () => {
  console.log(`Server running on http://localhost:8000`);
});
