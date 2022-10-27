// Importing Models
const AIS = require("../models/ais");
const insidePolygon = require("../utils/insidePolygon");
const aggregatePipeline = require("../utils/aggregatePipeline");

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

// exports.getShipsByPolygonInput = async (req, res) => {
//   try {
//     const body = req.body[0][0];
//     const length = body.length;
//     let latitude = 0;
//     let longitude = 0;

//     for (let i = 0; i < body.length; i++) {
//       latitude += body[i].lat;
//       longitude += body[i].lng;
//     }

//     const startLat = latitude / length + 1;
//     const startLng = longitude / length;
//     const endLat = startLat > 0 ? startLat + 1 : startLat - 1;
//     const endLng = startLng > 0 ? startLng + 1 : startLng - 1;

//     const aisData = await AIS.find({
//       Latitude: { $gte: endLat, $lte: startLat },
//       Longitude: { $gte: startLng, $lte: endLng },
//     });

//     console.log("Start Latitude: " + startLat);
//     console.log("End Latitude: " + endLat);
//     console.log("Start Longitude: " + startLng);
//     console.log("End Longitude: " + endLng);

//     res.status(200).json({
//       status: "success",
//       aisData,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "error",
//       error: "Internal server error",
//       message: "Please try again",
//     });
//   }
// };

exports.getShips = async (req, res) => {
  try {
    const aisData = await AIS.aggregate(aggregatePipeline).limit(200).exec();
    res.status(200).json({
      status: "success",
      results: aisData.length,
      data: aisData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Please try again",
    });
  }
};

exports.getShipsByPolygonInput = async (req, res) => {
  try {
    const body = req.body[0][0];
    let polygon = [];
    let data = [];

    // Arranging polygon data
    body.map((data) => {
      let temp = [];
      temp.push(data.lat);
      temp.push(data.lng);
      polygon.push(temp);
    });

    // Fetching data
    const aisData = await AIS.aggregate(aggregatePipeline).exec();

    aisData.map((d) => {
      let point = [];
      point.push(d.Latitude);
      point.push(d.Longitude);
      const result = insidePolygon(point, polygon);
      if (result) {
        data.push(d);
      }
    });

    res.status(200).json({
      status: "success",
      aisData: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: "Internal server error",
      message: "Please try again",
    });
  }
};
