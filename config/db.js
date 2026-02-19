// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/library_mgmt");
//     console.log("✅ MongoDB Connected Successfully");
//   } catch (error) {
//     console.error("❌ MongoDB Error:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
