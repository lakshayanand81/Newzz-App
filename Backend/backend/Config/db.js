const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://lakshay:lakshay1234@cluster0.hvk8to8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;
