import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "url",
    );
    console.log("Db connected successfully");
  } catch (error) {
    console.log("Error while connecting", error);
  }
};

export default connectDB;
