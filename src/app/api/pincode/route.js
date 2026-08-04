import { NextResponse } from "next/server";
import postalcodes from "postalcodes-india";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Pincode is required" },
      { status: 400 }
    );
  }

  const result = postalcodes.find(code);

  return NextResponse.json(result);
}