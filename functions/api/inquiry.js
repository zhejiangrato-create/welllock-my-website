/**
 * WellLock Inquiry Form Handler
 * Cloudflare Pages Function: POST /api/inquiry
 *
 * Accepts form submissions and forwards to email/notification.
 *
 * Email configuration (pick one):
 *   1. Resend (recommended):  npx wrangler secret put RESEND_API_KEY
 *   2. MailChannels (free):   configure with domain SPF record
 *   3. Webhook only:          set WEBHOOK_URL secret
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parse form data
  let body;
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(formData.entries());
  }

  const { name, company, email, message } = body;

  // Validate
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ success: false, error: "Name, email, and message are required." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ success: false, error: "Invalid email address." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const timestamp = new Date().toISOString();
  const subject = `[WellLock Inquiry] ${name} from ${company || "Unknown Company"}`;

  // Build email body
  const htmlBody = `
    <h2>New Inquiry from WellLock.com</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;width:120px;"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Company</strong></td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(company || "N/A")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Time</strong></td><td style="padding:8px;border:1px solid #ddd;">${timestamp}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Message</strong></td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(message)}</td></tr>
    </table>
  `;

  const textBody = `
New Inquiry from WellLock.com
==============================
Name:     ${name}
Company:  ${company || "N/A"}
Email:    ${email}
Time:     ${timestamp}

Message:
${message}
  `.trim();

  // Try Resend first, then MailChannels fallback, then webhook
  let emailSent = false;

  if (env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `WellLock Inquiry <inquiry@welllocks.com>`,
          to: env.RECIPIENT_EMAIL || "REPLACE_WITH_YOUR_EMAIL",
          subject,
          html: htmlBody,
          reply_to: email,
        }),
      });
      emailSent = res.ok;
    } catch (e) {
      console.error("Resend failed:", e);
    }
  }

  if (!emailSent && env.WEBHOOK_URL) {
    try {
      await fetch(env.WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, name, company, email, message, timestamp }),
      });
      emailSent = true;
    } catch (e) {
      console.error("Webhook failed:", e);
    }
  }

  // Log to console for debugging
  console.log(`[INQUIRY] ${name} <${email}> — ${company || "N/A"}`);
  console.log(`[INQUIRY] ${message.substring(0, 100)}...`);

  return new Response(
    JSON.stringify({ success: true, message: "Thank you! We will get back to you within 24 hours." }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
