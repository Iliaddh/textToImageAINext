import connectDB from "../../mongodb/connect.js";
import User from "../../mongodb/User.js"; 
import * as dotenv from "dotenv"; 
import { NextResponse } from "next/server.js";
  
import bcryptjs from "bcryptjs"

async function hashPassword (password){
    const hashedPassword = await bcryptjs.hash(password, 12);
    
    console.log(hashedPassword)
    return hashedPassword;
}
 /////////////////////////////
export async function POST(req)  { 

    connectDB(process.env.MONGODB_URL);

    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ status: "Failed", message: "Invalid data" }, { status: 400 });
    }

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser)
            return NextResponse.json({ status: "failed", message: "User already exists" }, { status: 400 });

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({ email: email, password: hashedPassword });
        console.log(newUser);
        return NextResponse.json({ status: "Success", message: "User created" }, { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ status: "Failed", message: "Internal server error" }, { status: 500 });
    }
} 



 