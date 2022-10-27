let aggregatePipeline = [
  {
    $group: {
      originalId: { $first: "$_id" },
      _id: "$Ship_ID",
      Latitude: { $first: "$Latitude" },
      Longitude: { $first: "$Longitude" },
      Course_Over_Ground: { $first: "$Course_Over_Ground" },
      Speed: { $first: "$Speed" },
    },
  },
  {
    $project: {
      _id: "$originalId",

      Ship_ID: "$_id",
      Latitude: "$Latitude",
      Longitude: "$Longitude",
      Course_Over_Ground: "$Course_Over_Ground",
      Speed: "$Speed",
    },
  },
];

module.exports = aggregatePipeline;
