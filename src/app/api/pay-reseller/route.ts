import { NextResponse } from "next/server";

export const runtime = 'edge';

const RESELLER_PRICES: Record<string, number> = {
  "Demo Panel": 129,
  "Growth": 230,
  "Business": 279,
  "Enterprise": 329,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tier, name, email, phone } = body;

    const price = RESELLER_PRICES[tier];
    if (!price) {
      return NextResponse.json({ error: "Invalid reseller tier" }, { status: 400 });
    }

    const title = `${tier} Reseller Plan`;

    // Merchant Authorization Credentials
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
        details: `${title} subscription for credits activation`,
        customer_name: name || "Anonymous Buyer",
        customer_email: email || "buyer@example.com",
        customer_phone: phone || "",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("FlujiPay API reseller error response:", data);
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
    console.error("Payment API reseller initiation error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
