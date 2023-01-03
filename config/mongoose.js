const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_STRING)
  .catch((e) => console.log(`Error connecting to db: ${e}`));

module.exports = { mongoose };
