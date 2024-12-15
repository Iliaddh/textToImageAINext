import { v2 as cloudinary } from "cloudinary";
import connectDB from "../../mongodb/connect.js";  
import prisma from "@/app/lib/prisma.js";
import { NextResponse } from "next/server.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req, res) { 
 
  try {
    connectDB(process.env.MONGODB_URL);
    const posts = await prisma.posts.findMany();
      return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, error: error });
  }
}