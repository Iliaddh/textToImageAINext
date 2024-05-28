import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { OpenAI } from "openai";
import { NextResponse } from "next/server";

dotenv.config();
const openai = new OpenAI(process.env.OPENAI_API_KEY); 

export async function POST(req ){ 
  // const data = await req.json();
  ///////////////////////////////////////////
  const {prompt} = await req.json();
  try {
    const aiResponse = await openai.images.generate({ 
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    console.log(aiResponse)
    const image = aiResponse.data[0].b64_json; 
    
    return NextResponse.json({ photo : image });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  
  }
  //////////////////////////////////////////
  // console.log(data)
  // return  NextResponse.json({data: data});
}
