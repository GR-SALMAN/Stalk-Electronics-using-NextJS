import { NextResponse } from "next/server";
import connectToDB from "@/lib/connectToDB";
import { Category } from "@/models/category";

export const GET = async (request) => {
    try {
        await connectToDB();
        const categories = await Category.find({}).sort({ createdAt: -1 });
        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to fetch category",
                error: error.message,
            },
            { status: 500 },
        );
    }
}

export const POST = async (request) => {
    await connectToDB();
    const { title, image } = await request.json();
    try {
        const newCategory = await new Category({ title, image });
        await newCategory.save();
        return NextResponse.json(newCategory, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to create category",
                error: error.message,
            },
            { status: 500 },
        );
    }
}