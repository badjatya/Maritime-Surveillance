const app = require("./app");

// Connecting to DB
require("./App/db/databaseConnect").dbConnect();

app.listen(5000, () => console.log("Server Created"));
