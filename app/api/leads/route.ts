import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getWelcomeEmailHTML } from "@/lib/email-templates";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, source, quizProfile } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    // ── 1. Send to Google Sheets via Apps Script ──────────────────────────
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsUrl && !sheetsUrl.includes("PLACEHOLDER")) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, source, quizProfile, timestamp }),
        });
      } catch (err) {
        console.error("Google Sheets error:", err);
      }
    }

    // ── 2. Send welcome email via Resend ──────────────────────────────────
    const profileLabel = quizProfile
      ? quizProfile.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())
      : "Growth Seeker";

    if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes("PLACEHOLDER")) {
      try {
        await resend.emails.send({
          from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
          to: [email],
          subject: `Your Captanova Growth Profile™ is ready, ${name}`,
          html: getWelcomeEmailHTML(name, profileLabel),
        });
      } catch (err) {
        console.error("Resend error:", err);
      }
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully" });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
