// Minimal worker — only here so `npx wrangler deploy` succeeds.
// Actual site is served by Cloudflare Pages (static files + /functions/).
export default {
  fetch() {
    return new Response("OK", { headers: { "Content-Type": "text/plain" } });
  }
};
