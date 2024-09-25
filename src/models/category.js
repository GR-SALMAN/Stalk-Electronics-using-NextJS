import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 1,
            maxLength: 200,
        },

        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true },
);


export const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema);
