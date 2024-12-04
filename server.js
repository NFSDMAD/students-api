const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentsRouter = require("./routes/students");
const coursesRouter = require("./routes/courses");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://nuclio:0123456789@cluster0.jtmdt.mongodb.net/ferclase"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error", err));

// Routes
app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
