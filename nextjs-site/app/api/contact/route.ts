import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function resendErrorMessage(error: { message?: string } | null): string {
  if (!error) return "Unknown email error.";
  return typeof error.message === "string" && error.message.trim()
    ? error.message
    : "Email provider rejected the request.";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const mode = body?.mode;

    if (mode !== "message" && mode !== "call") {
      return NextResponse.json(
        { error: "Invalid submission mode." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
    const resendClient = getResend();

    if (!toEmail || !fromEmail || !resendClient) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL to your environment (see .env.example).",
        },
        { status: 500 }
      );
    }

    if (mode === "message") {
      const name = String(body?.name || "").trim();
      const email = String(body?.email || "").trim();
      const company = String(body?.company || "").trim();
      const message = String(body?.message || "").trim();

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: "Please fill in all required fields." },
          { status: 400 }
        );
      }

      const subject = `New Website Inquiry - ${name}`;

      const html = `
        <div style="font-family: Arial, sans-serif; color: #1f2937;">
          <h2 style="margin-bottom: 16px;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f3f4f6; border-radius: 8px;">
            ${escapeHtml(message).replaceAll("\n", "<br />")}
          </div>
        </div>
      `;

      const { error } = await resendClient.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject,
        html,
      });

      if (error) {
        console.error("[contact] Resend (message):", error);
        return NextResponse.json(
          { error: resendErrorMessage(error) },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const reason = String(body?.reason || "").trim();
    const preferredDate = String(body?.preferredDate || "").trim();
    const preferredTime = String(body?.preferredTime || "").trim();

    if (!name || !email || !reason || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Please fill in all required booking fields." },
        { status: 400 }
      );
    }

    const subject = `New Call Booking Request - ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1f2937;">
        <h2 style="margin-bottom: 16px;">New Booking Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(preferredDate)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(preferredTime)}</p>
        <p><strong>Reason for Booking:</strong></p>
        <div style="padding: 12px; background: #f3f4f6; border-radius: 8px;">
          ${escapeHtml(reason).replaceAll("\n", "<br />")}
        </div>
      </div>
    `;

    const { error } = await resendClient.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("[contact] Resend (call):", error);
      return NextResponse.json(
        { error: resendErrorMessage(error) },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Something went wrong while processing your request.",
      },
      { status: 500 }
    );
  }
}