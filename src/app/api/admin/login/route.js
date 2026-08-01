import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConn";
import User from "@/model/userModal";

export async function POST(req) {
  try {
    await dbConnect();

    // Read identity (email or username) and password from request
    const { user, password } = await req.json();

    if (!user || !password) {
      return NextResponse.json(
        { error: "Username/Email and password are required." },
        { status: 400 },
      );
    }

    // Find admin user by email OR username
    const existingUser = await User.findOne({
      $or: [{ email: user }, { user: user }],
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }

    // Compare entered password with hashed password in DB
    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }

    // Generate JWT token valid for 1 day
    const token = jwt.sign(
      { userId: existingUser._id, user: existingUser.user },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    const response = NextResponse.json({
      success: true,
      message: "Login successful!",
    });

    // Set secure HTTP-Only cookie
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day in seconds
      path: "/",
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Server error during login." },
      { status: 500 },
    );
  }
}
