const express = require("express");
const app = express();

const AIS = require("./App/models/ais");

app.get("/", async (req, res) => {
  const aisData = await AIS.find({}).limit(20);
  res.status(200).json({
    status: "success",
    data: aisData,
  });
});

app.get("/:id", async (req, res) => {
  const aisData = await AIS.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: aisData,
  });
});

app.get("/ships/:id", async (req, res) => {
  const aisData = await AIS.find({ Ship_ID: req.params.id });
  res.status(200).json({
    status: "success",
    result: aisData.length,
    data: aisData,
  });
});

module.exports = app;
