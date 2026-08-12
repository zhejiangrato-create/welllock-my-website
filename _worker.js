/**
 * WellLock — Cloudflare Worker
 * Handles: API routes (/api/inquiry) + static file serving
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // API: form submission
    if (path === "/api/inquiry" && request.method === "POST") {
      return handleInquiry(request, env);
    }

    // Serve static files via ASSETS binding
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // Fallback: serve index.html for SPA-style routing
      const indexReq = new Request(new URL("/index.html", url.origin), request);
      try {
        return await env.ASSETS.fetch(indexReq);
      } catch {
        return new Response("Not Found", { status: 404 });
      }
    }
  }
};

async function handleInquiry(request, env) {
  let body;
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(formData.entries());
  }

  const { name, company, email, message } = body;

  if (!name || !email || !message) {
    return Response.json(
      { success: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { success: false, error: "Invalid email address." },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();
  const subject = `[WellLock Inquiry] ${name} from ${company || "Unknown"}`;

  const htmlBody = `<h2>New Inquiry from WellLock.com</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;width:120px;"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd;">${esc(name)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Company</strong></td><td style="padding:8px;border:1px solid #ddd;">${esc(company || "N/A")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd;">${esc(email)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Time</strong></td><td style="padding:8px;border:1px solid #ddd;">${timestamp}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;"><strong>Message</strong></td><td style="padding:8px;border:1px solid #ddd;">${esc(message)}</td></tr>
    </table>`;

  // Try Resend email
  if (env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "WellLock Inquiry <inquiry@welllocks.com>",
          to: env.RECIPIENT_EMAIL || "zhejiangrato@gmail.com",
          subject,
          html: htmlBody,
          reply_to: email,
        }),
      });
    } catch (e) {
      console.error("Resend failed:", e);
    }
  }

  // Webhook fallback
  if (env.WEBHOOK_URL) {
    try {
      await fetch(env.WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, name, company, email, message, timestamp }),
      });
    } catch (e) {
      console.error("Webhook failed:", e);
    }
  }

  console.log(`[INQUIRY] ${name} <${email}> — ${company || "N/A"}`);
  return Response.json({
    success: true,
    message: "Thank you! We will get back to you within 24 hours.",
  });
}

function esc(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
