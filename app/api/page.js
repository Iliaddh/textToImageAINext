
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { OpenAI } from "openai";

dotenv.config();
const openai = new OpenAI(process.env.OPENAI_API_KEY); 

export default async function handler(req, res) {
  console.log(req.method)
  if (req.method == "POST") {
    
  }
}