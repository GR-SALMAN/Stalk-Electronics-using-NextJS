import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            minLength: 1,
            maxLength: 160,
            text: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
            maxLength: 6,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },

        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true },
);


export const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);
