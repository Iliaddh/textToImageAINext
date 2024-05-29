
import connectDB from "../../mongodb/connect.js";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "../../mongodb/User.js";
// async function hashPassword (password){
//     const hashedPassword = await bcryptjs.hash(password, 12);
    
//     console.log(hashedPassword)
//     return hashedPassword;
// }


export async function POST(req) {
  connectDB(process.env.MONGODB_URL);
  const { email, password } = await req.json();
console.log(email, password)
  try {
    // Check if the user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, {status: 404});
    }

    // Check if the password is correct
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    console.log(isPasswordValid)
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid password" }, {status: 401});
    }

     
 
    // If everything is correct, user is authenticated
    return NextResponse.json({ message: "Sign-in successful", email: user.email }, {status: 200});
  } catch (error) {
    console.error("Error signing in:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
