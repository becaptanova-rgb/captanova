import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getWelcomeEmailHTML, getMasterclassConfirmationHTML } from "@/lib/email-templates";

export const runtime = "nodejs";

// Lazily instantiated so a missing key at build time doesn't crash `next build`;
// it will only throw at request time if someone actually triggers an email send
// without RESEND_API_KEY configured.
let resend: Resend | null = null;
function getResend() {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key || key.includes("PLACEHOLDER")) return null;
    resend = new Resend(key);
  }
  return resend;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, source, quizProfile, type, city, age } = body;

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
          body: JSON.stringify({ name, email, phone, source, quizProfile, type, city, age, timestamp }),
        });
      } catch (err) {
        console.error("Google Sheets error:", err);
      }
    }

    // ── 2. Send confirmation email via Resend ──────────────────────────────
    const profileLabel = quizProfile
      ? quizProfile.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())
      : "Growth Seeker";

    const resendClient = getResend();
    if (resendClient) {
      try {
        if (type === "masterclass") {
          await resendClient.emails.send({
            from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
            to: [email],
            subject: `You're registered, ${name} — Free Masterclass with Captanova`,
            html: getMasterclassConfirmationHTML(name),
          });
        } else {
          await resendClient.emails.send({
            from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
            to: [email],
            subject: `Your Captanova Growth Profile™ is ready, ${name}`,
            html: getWelcomeEmailHTML(name, profileLabel),
          });
        }
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
