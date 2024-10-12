import mongoose from "mongoose";

const connectToDB = async () => {
  console.log(process.env.MONGO_URI, "process.env.MONGO_URI");
  console.log(
    "Connected 1 mongoose.connection.readyState ",
    mongoose.connection.readyState
  );
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Stalk_Electronics_DB",
  });

  console.log("Connected 2", mongoose.connection.readyState);
};

export default connectToDB;
