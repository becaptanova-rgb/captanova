import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { programId, programName, amount, customerName, customerEmail, customerPhone } = body;

    if (!amount || !programId) {
      return NextResponse.json({ error: "Amount and program ID are required" }, { status: 400 });
    }

    const Razorpay = (await import("razorpay")).default;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "",
    });

    const order = await razorpay.orders.create({
      amount: amount, // amount in paise
      currency: "INR",
      receipt: `captanova_${Date.now()}`,
      notes: {
        program_id: programId,
        program_name: programName,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay order error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
