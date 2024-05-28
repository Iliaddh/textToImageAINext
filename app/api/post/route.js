import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "../mongodb/connect.js";
import Post from "../mongodb/post.js";
import User from "../mongodb/User.js";
import { NextResponse } from "next/server.js";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

export async function GET(req, res){

    try{
        connectDB(process.env.MONGODB_URL);
        // console.log("connected to db")
        const posts = await Post.find({});
        return NextResponse.json({ success: true, data: posts });
    }catch(error){
        return NextResponse.json({ success: false, error: error });
    }
}

export async function POST(req, res){
    try {
        connectDB(process.env.MONGODB_URL);
        const { name, prompt, photo } = await req.json();
        // console.log(name, prompt, photo)
        const photoUrl = await cloudinary.uploader.upload(photo);
    
        const newPost = await Post.create({
          name,
          prompt,
          photo: photoUrl.url,
        });
    
        return NextResponse.json({ success: true, data: newPost });
        
      } catch (err) {
        return NextResponse.json({
          success: false,
          message: "Unable to create a post, please try again",
        });
      }
}