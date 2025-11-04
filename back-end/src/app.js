import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to StudentHub API 🚀");
});

// Jalankan server
app.listen(8000, () => {
  console.log(`Server running on http://localhost:8000`);
});
