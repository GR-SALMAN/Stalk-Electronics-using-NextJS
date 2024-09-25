
import connectToDB from "@/lib/connectToDB";
import { Category } from "@/models/category";
import { NextResponse } from "next/server";


// GET request to fetch a Single category by ID
export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connectToDB();
        const category = await Category.findById(id);

        if (!category) {
            return NextResponse.json({ message: "Category not found" }, { status: 404 });
        }
        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch category", error: error.message }, { status: 500 });
    }
};


// PUT request to update a category by ID
export const PUT = async (request, { params }) => {
    const { id } = params;
    const categoryData = await request.json();

    try {
        await connectToDB();
        const category = await Category.findByIdAndUpdate(id, categoryData);

        if (!category) {
            return NextResponse.json({ message: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Updated Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to update category", error: error.message }, { status: 500 });
    }
};


// DELETE request to delete a Category by ID
export const DELETE = async (request, { params }) => {
    const { id } = params;

    try {
        await connectToDB();
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return NextResponse.json({ message: "Category not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Successfully Deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete Category", error: error.message }, { status: 500 });
    }
};