import mongoose from 'mongoose';

const connectToDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "Stalk_Electronics_DB",
    })
}

export default connectToDB;