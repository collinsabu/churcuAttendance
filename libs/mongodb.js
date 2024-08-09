const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connection = { isConnected: false };

async function connectMongoDB() {
  try {
    if (connection.isConnected) {
      return;
    }

    dotenv.config(); // Load environment variables from .env file

    // Log the MongoDB URI to check if it's being read correctly
    console.log("MongoDB URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Optionally, you might want to exit the process if the connection fails
    process.exit(1);
  }
}

module.exports = connectMongoDB; // Use module.exports for CommonJS
