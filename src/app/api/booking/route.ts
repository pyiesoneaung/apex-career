import { NextRequest, NextResponse } from "next/server";
import type { BookingFormData, ApiResponse } from "@/types";
import { validateEmail } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json();
    const { name, email, service, preferredDate, preferredTime, goals } = body;

    if (!name || !email || !service || !preferredDate || !preferredTime || !goals) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Validate date is in the future
    const date = new Date(preferredDate);
    if (date <= new Date()) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please select a future date." },
        { status: 400 }
      );
    }

    // TODO: Integrate with Calendly, Cal.com, or Google Calendar API
    // For Calendly: redirect to https://calendly.com/your-slug?name=...&email=...
    // For Cal.com API: POST /api/v1/bookings with API key

    console.log("Booking request:", body);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: `Booking request received for ${preferredDate} at ${preferredTime}. We'll confirm shortly.`,
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
