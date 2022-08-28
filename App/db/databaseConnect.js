const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/nrsc", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DATABASE CONNECTED"))
    .catch((error) => {
      console.log("DATABASE NOT CONNECTED");
      console.log(error);
      process.exit(1);
    });
};
