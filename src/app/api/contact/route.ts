import { NextRequest, NextResponse } from "next/server";
import type { ContactFormData, ApiResponse } from "@/types";
import { validateEmail } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // --- Email sending ---
    // Option A: Resend (recommended for Vercel)
    // Uncomment and configure RESEND_API_KEY + CONTACT_EMAIL in .env.local
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "ApexCareer <noreply@yourdomain.com>",
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New inquiry from ${name} — ${service}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${body.phone || "—"}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Message:</strong><br/>${message}</p>
    //   `,
    // });

    // Option B: Nodemailer (for custom SMTP)
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({ ... });

    // For now: log to console (remove in production)
    console.log("Contact form submission:", { name, email, service, message });

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
