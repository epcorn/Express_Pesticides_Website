import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConn";
import ServiceBooking from "@/model/serviceBookingModal";

export async function GET(req) {
  try {
    // 1. Check for admin token in cookies
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized access." },
        { status: 401 },
      );
    }

    // 2. Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET);

    // 3. Connect DB and fetch all bookings (sorted newest first)
    await dbConnect();
    const bookings = await ServiceBooking.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid or expired token." },
      { status: 401 },
    );
  }
}
