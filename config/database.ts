import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const { ATLAS_URL } = process.env;

const connect = () => {
  mongoose.set('strictQuery', false);
  
  mongoose.connect(ATLAS_URL as string)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

export { connect };
