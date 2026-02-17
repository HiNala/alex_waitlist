import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, petType } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    // Log for server-side monitoring
    console.log("waitlist_signup", {
      email,
      name,
      petType,
      registeredAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing waitlist submission:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
