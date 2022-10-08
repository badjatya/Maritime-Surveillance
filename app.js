const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/ships", require("./src/routes/ship"));

module.exports = app;
