import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import { getPurchaseConfirmationHTML } from "@/lib/email-templates";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerName,
      customerEmail,
      programName,
    } = body;

    // ── Verify signature ──────────────────────────────────────────────────
    const secret = process.env.RAZORPAY_KEY_SECRET || "";
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    // ── Log to Google Sheets ──────────────────────────────────────────────
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsUrl && !sheetsUrl.includes("PLACEHOLDER")) {
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "purchase",
            name: customerName,
            email: customerEmail,
            programName,
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Sheets error:", err);
      }
    }

    // ── Send confirmation email ───────────────────────────────────────────
    if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes("PLACEHOLDER")) {
      try {
        await resend.emails.send({
          from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
          to: [customerEmail],
          subject: `Welcome to ${programName} — Your Journey Starts Now! 🎉`,
          html: getPurchaseConfirmationHTML(customerName, programName, razorpay_order_id),
        });
      } catch (err) {
        console.error("Resend confirmation error:", err);
      }
    }

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (error) {
    console.error("Verify API error:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
