const express = require("express");
const app = express();
const morgan = require("morgan");

const ThingFinder = require("./routes/thingFinder");

const PORT = 3000;

// * Middleware
app.use(express.json());
app.use(morgan("dev"));

// * Route
app.use("/data", ThingFinder);

// * server start-up logic
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}...`);
});
