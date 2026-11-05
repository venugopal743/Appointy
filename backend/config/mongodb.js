
import mongoose from "mongoose";
import dns from "node:dns";

// Use Google DNS for MongoDB SRV resolution
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/appointy`
    );

    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
