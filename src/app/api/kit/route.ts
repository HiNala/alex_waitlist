import { NextRequest, NextResponse } from 'next/server';

export type KitSubscription = {
  email: string;
  firstName?: string;
  petType?: string;
  registeredAt: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName, petType } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    // In a real implementation, this would forward the data to Kit's API
    // The actual API handling is done by the Kit form directly to their servers
    
    // This is just a backup or for any additional processing you might want to do
    const submission = {
      email,
      firstName,
      petType,
      registeredAt: new Date().toISOString(),
    };

    // Optional: Store submission in your database or perform other actions
    console.log("Kit form submission:", submission);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing Kit submission:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
} 