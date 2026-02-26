const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());
app.use(cookieParser());

// ✅ FINAL WORKING CORS
app.use(
  cors({
    origin: true,          // allow all origins (safe for now)
    credentials: true,     // allow cookies
  })
);

/* =========================
   ROUTES
========================= */

app.get("/", (req, res) => {
  res.send("API Running...");
});

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

/* =========================
   DATABASE
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));