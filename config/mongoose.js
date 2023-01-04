import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB_STRING)
  .catch((e) => console.log(`Error connecting to db: ${e}`));

export { mongoose };
