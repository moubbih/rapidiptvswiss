import { NextResponse } from "next/server";
import { PRICE_TABLE, getPlanTitle } from "@/lib/pricing";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { months, devices, name, email, phone } = body;

    const m = months as "1" | "3" | "6" | "12";
    const d = parseInt(devices);

    if (!m || !d || !PRICE_TABLE[d] || !PRICE_TABLE[d][m]) {
      return NextResponse.json({ error: "Invalid plan parameters" }, { status: 400 });
    }

    const price = PRICE_TABLE[d][m];
    const title = getPlanTitle(m, d);

    // Merchant Authorization Credentials (from user)
    const secretKey = "pro_555r8ftgtv77ri0fr1k740rag8f076ffyugxh28zsl3gjcuc8n287";
    const publicKey = "pro_qwg42psw94vzr638zpdc9ikuyk9ekpg95u19pyjwrd8dzxatyj287";

    const response = await fetch("https://flujipay.com/api/payment-links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Public-Key": publicKey,
        "X-Secret-Key": secretKey,
      },
      body: JSON.stringify({
        title: title,
        amount: price,
        currency: "USD",
        details: `${title} subscription for ${d} device${d > 1 ? "s" : ""}`,
        customer_name: name || "Anonymous Buyer",
        customer_email: email || "buyer@example.com",
        customer_phone: phone || "",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("FlujiPay API error response:", data);
      return NextResponse.json(
        { error: data.message?.error?.[0] || data.message || "Failed to create payment link" },
        { status: response.status }
      );
    }

    const paymentUrl = data.url || data.link || data.payment_url || data.data?.url || data.data?.link;
    if (!paymentUrl) {
      return NextResponse.json({ error: "Payment gateway response did not contain a checkout URL." }, { status: 502 });
    }

    return NextResponse.json({ url: paymentUrl });
  } catch (error: any) {
    console.error("Payment API initiation error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
