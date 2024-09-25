import { NextResponse } from "next/server";
import connectToDB from "@/lib/connectToDB";
import { Product } from "@/models/product";

export const GET = async (request) => {
    try {
        await connectToDB();
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category"); // ID
        const filter = {}
        if (category) {
            filter.category = category;
        }
        const products = await Product.find(filter).sort({ createdAt: -1 });
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to fetch product",
                error: error.message,
            },
            { status: 500 },
        );
    }
}

export const POST = async (request) => {
    await connectToDB();
    const { title, description, price, category, image } = await request.json();
    try {
        const newProduct = await new Product({ title, description, price, category, image });
        await newProduct.save();
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to create product",
                error: error.message,
            },
            { status: 500 },
        );
    }
}