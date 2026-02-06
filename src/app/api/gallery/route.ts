import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const cursor = searchParams.get("cursor");

    try {
        const result = await cloudinary.api.resources({
            resource_type: "image",
            type: "upload",
            max_results: 10,
            ...(cursor && { next_cursor: cursor }), // ✅ IMPORTANT
        });

        return NextResponse.json({
            resources: result.resources,
            nextCursor: result.next_cursor ?? null,
        });
    } catch (error) {
        console.error("Cloudinary error:", error);
        return NextResponse.json(
            { error: "Failed to fetch images" },
            { status: 500 }
        );
    }
}
