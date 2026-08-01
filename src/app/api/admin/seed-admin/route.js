import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConn";
import User from "@/model/userModal";

export async function GET() {
  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      user: process.env.ADMIN_USERNAME,
    });
    if (existingAdmin) {
      return NextResponse.json({ message: "Admin account already exists." });
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    // Create the admin user
    await User.create({
      user: process.env.ADMIN_USERNAME,
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Admin user created successfully!" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
