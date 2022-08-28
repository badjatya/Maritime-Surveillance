const express = require("express");
const app = express();

// Routes
app.use("/api/v1/ships", require("./src/routes/ship"));

module.exports = app;
