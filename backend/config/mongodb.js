// config/mongodb.js

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected ");

    // Optional: handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  } catch (err) {
    console.error("Connection Failed", err.message);
    process.exit(1);
  }
};

export default connectDB;


// import mongoose from "mongoose";

// const connectDB = async () => {
//     mongoose.Collection.on('connected', () => {
//         console.log('DB Connected');
//     })


//     await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)

// }

// export default connectDB;