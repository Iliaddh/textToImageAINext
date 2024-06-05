import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "../mongodb/connect.js";
import { getAuth } from "@clerk/nextjs/server";
// import Post from "../mongodb/post.js";
// import User from "../mongodb/User.js";
import prisma from "@/app/lib/prisma.js";
import { NextResponse } from "next/server.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req, res) {
  const { userId } = getAuth(req);
  if (!userId) {
    return NextResponse.json({ success: false, message: "User not found" });
  }
  try {
    connectDB(process.env.MONGODB_URL);
    // console.log("connected to db")
    const posts = await prisma.posts.findMany({
      where: {
        userId: userId,
      },
    });
      return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, error: error });
  }
}

export async function POST(req, res) {
  const { userId } = getAuth(req);

  if (!userId) {
    return;
  }
  try {
    connectDB(process.env.MONGODB_URL);
    const { name, prompt, photo } = await req.json(); //We dont need name here
    // console.log(name, prompt, photo)
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await prisma.posts.create({
      data: {
        prompt,
        photoUrl : photoUrl.secure_url,
        userId: userId,
      },
    });

    return NextResponse.json({ success: true, data: newPost });
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      success: false,
      message: "Unable to create a post, please try again",
    }, 500);
  }
}
