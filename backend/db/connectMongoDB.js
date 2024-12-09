import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://mehul:Mehul%400707@cluster0.oak8e2r.mongodb.net/talk-shit-db");
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectMongoDB;
