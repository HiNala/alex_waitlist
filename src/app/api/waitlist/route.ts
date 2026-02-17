import { NextRequest, NextResponse } from 'next/server';

export type WaitlistEntry = {
  email: string;
  name?: string;
  petType?: string;
  registeredAt: string;
};

// For demonstration; consider replacing with a persistent store
let waitlist: WaitlistEntry[] = []; 

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

    const newEntry: WaitlistEntry = {
      email,
      name,
      petType,
      registeredAt: new Date().toISOString(),
    };

    // In a real app, ensure uniqueness and proper storage
    waitlist.push(newEntry);

    return NextResponse.json({ success: true, entry: newEntry });
  } catch (error) {
    console.error("Error processing waitlist submission:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Optionally, return waitlist entries (secure this endpoint in production)
  return NextResponse.json({ waitlist });
} 