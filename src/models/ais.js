const mongoose = require("mongoose");

// AIS schema
const aisSchema = new mongoose.Schema({
  Course_Over_Ground: {
    type: Number,
  },
  Latitude: {
    type: Number,
  },
  Longitude: {
    type: Number,
  },
  Ship_ID: {
    type: Number,
  },
  Speed: {
    type: Number,
  },
  Time: {
    type: Date,
  },
});

// AIS model
module.exports = mongoose.model("AIS", aisSchema);
