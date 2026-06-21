const express = require("express");
const cors = require("cors");
const eventsRoutes = require("./routes/eventsRoutes");
const db = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the CodeConnect Bay Area API",
  });
});

app.get("/api/health", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");

    res.status(200).json({
      message: "Database connection successful",
      databaseTime: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      error: "Unable to connect to the database",
    });
  }
});

app.use("/api/events", eventsRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

module.exports = app;
