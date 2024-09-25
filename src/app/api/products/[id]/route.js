
import connectToDB from "@/lib/connectToDB";
import { Product } from "@/models/product";
import { NextResponse } from "next/server";


// GET request to fetch a Single product by ID
export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connectToDB();
        const product = await Product.findById(id);

        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch product", error: error.message }, { status: 500 });
    }
};


// PUT request to update a product by ID
export const PUT = async (request, { params }) => {
    const { id } = params;
    const productData = await request.json();

    try {
        await connectToDB();
        const product = await Product.findByIdAndUpdate(id, productData);

        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Updated Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to update product", error: error.message }, { status: 500 });
    }
};


// DELETE request to delete a Product by ID
export const DELETE = async (request, { params }) => {
    const { id } = params;

    try {
        await connectToDB();
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Successfully Deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete Product", error: error.message }, { status: 500 });
    }
};