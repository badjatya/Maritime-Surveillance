const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/ships", require("./src/routes/ship"));

module.exports = app;
