const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ FIXED CORS (works for both local + deployed frontend)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://task-manager-frontend.onrender.com" // replace after frontend deploy
    ],
    credentials: true,
  })
);

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Routes
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const protect = require("./middleware/authMiddleware");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Port (Render automatically sets PORT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));