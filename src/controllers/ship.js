// Importing Models
const AIS = require("../models/ais");

exports.getShips = async (req, res) => {
  try {
    const aisData = await AIS.find({}).limit(20);
    res.status(200).json({
      status: "success",
      results: aisData.length,
      data: aisData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: "Internal server error",
      message: "Please try again",
    });
  }
};

exports.getShipById = async (req, res) => {
  try {
    const aisData = await AIS.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: aisData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: "Internal server error",
      message: "Please try again",
    });
  }
};

exports.getShipByShipId = async (req, res) => {
  try {
    const aisData = await AIS.find({ Ship_ID: req.params.id });
    res.status(200).json({
      status: "success",
      results: aisData.length,
      data: aisData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: "Internal server error",
      message: "Please try again",
    });
  }
};
