import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import { increaseLimit, checkLimit } from "@/lib/api-limit";
export const maxDuration = 60; 

dotenv.config();
const openai = new OpenAI(process.env.OPENAI_API_KEY); 

export async function POST(req ){ 
  // const data = await req.json();
  ///////////////////////////////////////////
  const {prompt} = await req.json();
  const freeTrial = await checkLimit(req);
  if(!freeTrial){
    return NextResponse.json({message : "You have reached the limit of free trials"}, { status: 403});
  }
  try {
    const aiResponse = await openai.images.generate({ 
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      quality:"hd",
      response_format: "b64_json",
    });
    // console.log(aiResponse)
    const image = aiResponse.data[0].b64_json; 
    await increaseLimit(req);
    return NextResponse.json({ photo : image });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  
  }
  //////////////////////////////////////////
  // console.log(data)
  // return  NextResponse.json({data: data});
}
