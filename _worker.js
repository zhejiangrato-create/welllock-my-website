// WellLock Worker v2 — products, turnstile, blog
const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WellLock — Security Hardware Manufacturer | Ningbo Rato</title>

    <!-- ===== SEO ===== -->
    <meta name="description" content="WellLock — China based security hardware manufacturer. OEM padlocks, cabinet locks, hotel locks & digital locks. ISO9001 & CE certified. Inquiry today." />
    <link rel="canonical" href="https://welllocks.com/" />
    <meta property="og:title" content="WellLock — Security Hardware Manufacturer" />
    <meta property="og:description" content="China based security hardware manufacturer. OEM padlocks, cabinet locks, hotel locks & digital locks." />
    <meta property="og:image" content="https://welllocks.com/images/og-image.jpg" />
    <meta name="robots" content="index, follow" />

    <style>
        /* ===== 全局重置 ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: #ffffff;
            color: #1a1a1a;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* ===== 顶部导航 ===== */
        header {
            padding: 20px 0;
            border-bottom: 1px solid #eaeaea;
            background: #ffffff;
        }

        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
        }

        .logo-area {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .logo-area img {
            height: 44px;
            width: auto;
        }

        .logo-area .company-name {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.3px;
            color: #1a1a1a;
        }

        .logo-area .company-name small {
            display: block;
            font-size: 11px;
            font-weight: 400;
            color: #888888;
            letter-spacing: 0.2px;
        }

        nav {
            display: flex;
            gap: 32px;
            align-items: center;
        }

        nav a {
            color: #333333;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s;
            letter-spacing: 0.2px;
        }

        nav a:hover {
            color: #c9a84c;
        }

        .nav-cta {
            background: #1a1a1a;
            color: #ffffff !important;
            padding: 8px 24px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 13px;
            transition: background 0.2s;
        }

        .nav-cta:hover {
            background: #333333 !important;
            color: #ffffff !important;
        }

        /* ===== Hero 首屏 ===== */
        .hero {
            padding: 100px 0 80px;
            text-align: center;
            background: #fafafa;
            border-bottom: 1px solid #eaeaea;
        }

        .hero h1 {
            font-size: 48px;
            font-weight: 300;
            letter-spacing: -0.5px;
            color: #1a1a1a;
            max-width: 800px;
            margin: 0 auto 12px;
            line-height: 1.2;
        }

        .hero h1 strong {
            font-weight: 600;
            color: #c9a84c;
        }

        .hero .sub {
            font-size: 18px;
            color: #666666;
            font-weight: 400;
            margin-bottom: 8px;
            letter-spacing: 0.5px;
        }

        .hero .desc {
            font-size: 16px;
            color: #888888;
            max-width: 560px;
            margin: 16px auto 36px;
            line-height: 1.7;
        }

        .btn-group {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: #1a1a1a;
            color: #ffffff;
            padding: 12px 40px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: background 0.2s;
            border: none;
            cursor: pointer;
        }

        .btn-primary:hover {
            background: #333333;
        }

        .btn-secondary {
            background: transparent;
            color: #1a1a1a;
            padding: 12px 40px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            border: 1px solid #cccccc;
            transition: all 0.2s;
            cursor: pointer;
        }

        .btn-secondary:hover {
            border-color: #1a1a1a;
            background: #f5f5f5;
        }

        /* ===== 通用区块 ===== */
        .section {
            padding: 72px 0;
            border-bottom: 1px solid #eaeaea;
        }

        .section-label {
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #c9a84c;
            margin-bottom: 8px;
        }

        .section h2 {
            font-size: 32px;
            font-weight: 300;
            color: #1a1a1a;
            margin-bottom: 16px;
            letter-spacing: -0.3px;
        }

        .section h2 strong {
            font-weight: 600;
        }

        .section .lead {
            font-size: 17px;
            color: #666666;
            max-width: 640px;
            line-height: 1.7;
        }

        /* ===== 公司介绍（三列卡片） ===== */
        .about-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin-top: 40px;
        }

        .about-card {
            padding: 0 4px;
        }

        .about-card .number {
            font-size: 14px;
            font-weight: 600;
            color: #c9a84c;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }

        .about-card h3 {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 8px;
        }

        .about-card p {
            font-size: 14px;
            color: #666666;
            line-height: 1.7;
        }

        /* ===== 产品展示 ===== */
        .product-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .product-item {
            text-align: center;
        }

        .product-item .image-box {
            width: 100%;
            aspect-ratio: 1 / 1;
            background: #f5f5f5;
            border-radius: 8px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #cccccc;
            font-size: 13px;
        }

        .product-item h4 {
            font-size: 15px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 2px;
        }

        .product-item p {
            font-size: 13px;
            color: #888888;
            margin-bottom: 8px;
        }

        .product-item .btn-small {
            background: transparent;
            color: #1a1a1a;
            padding: 6px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            border: 1px solid #dddddd;
            display: inline-block;
            transition: all 0.2s;
        }

        .product-item .btn-small:hover {
            border-color: #1a1a1a;
            background: #f5f5f5;
        }

        /* ===== 询盘表单 ===== */
        .inquiry-section {
            background: #fafafa;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }

        .form-group {
            margin-bottom: 16px;
        }

        .form-group label {
            display: block;
            font-weight: 500;
            font-size: 13px;
            color: #333333;
            margin-bottom: 4px;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid #dddddd;
            border-radius: 6px;
            font-size: 14px;
            background: #ffffff;
            transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: #c9a84c;
            outline: none;
        }

        .form-group textarea {
            height: 100px;
            resize: vertical;
        }

        .form-submit {
            background: #1a1a1a;
            color: #ffffff;
            padding: 12px 48px;
            border-radius: 30px;
            border: none;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.2s;
        }

        .form-submit:hover {
            background: #333333;
        }

        /* ===== 页脚 ===== */
        footer {
            padding: 40px 0 32px;
            background: #fafafa;
            border-top: 1px solid #eaeaea;
            text-align: center;
        }

        footer p {
            font-size: 13px;
            color: #999999;
        }

        footer span {
            color: #1a1a1a;
            font-weight: 500;
        }

        .footer-contact {
            margin-bottom: 16px;
        }

        .footer-whatsapp {
            display: inline-flex;
            align-items: center;
            background: #25d366;
            color: #ffffff;
            padding: 8px 20px;
            border-radius: 30px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            transition: background 0.2s;
        }

        .footer-whatsapp:hover {
            background: #1ebe57;
        }

        /* ===== 响应式 ===== */
        @media (max-width: 992px) {
            .about-grid {
                grid-template-columns: 1fr 1fr;
            }
            .product-grid {
                grid-template-columns: repeat(2, 1fr);
                max-width: 600px;
            }
        }

        @media (max-width: 768px) {
            .header-inner {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            nav {
                flex-wrap: wrap;
                justify-content: center;
                gap: 16px;
            }
            .hero {
                padding: 60px 0 50px;
            }
            .hero h1 {
                font-size: 30px;
            }
            .hero .sub {
                font-size: 16px;
            }
            .section {
                padding: 48px 0;
            }
            .section h2 {
                font-size: 26px;
            }
            .about-grid {
                grid-template-columns: 1fr;
                gap: 24px;
            }
            .product-grid {
                grid-template-columns: 1fr;
                max-width: 320px;
            }
            .form-row {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .product-grid {
                max-width: 280px;
            }
            .btn-group {
                flex-direction: column;
                align-items: center;
            }
            .btn-primary,
            .btn-secondary {
                width: 100%;
                max-width: 280px;
                text-align: center;
            }
        }
    </style>
</head>

<body>

    <!-- ===== 顶部导航 ===== -->
    <header>
        <div class="container header-inner">
            <div class="logo-area">
                <img src="images/logo.svg" alt="WellLock" />
                <div class="company-name">
                    WellLock
                    <small>Security Hardware · Ningbo</small>
                </div>
            </div>
            <nav>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="/blog">Blog</a>
                <a href="#inquiry" class="nav-cta">Get a Quote</a>
            </nav>
        </div>
    </header>

    <!-- ===== Hero 首屏 ===== -->
    <section class="hero">
        <div class="container">
            <p class="sub">Security Hardware · OEM &amp; Export</p>
            <h1>Lock manufacturing that <strong>actually delivers</strong> what you approve.</h1>
            <p class="desc">From sample to shipment, we make sure your production order matches your approved sample — exactly.</p>
            <div class="btn-group">
                <a href="#inquiry" class="btn-primary">Get a Quote</a>
                <a href="#products" class="btn-secondary">View Products</a>
            </div>
        </div>
    </section>

    <!-- ===== 公司介绍 ===== -->
    <section class="section" id="about">
        <div class="container">
            <p class="section-label">What we solve</p>
            <h2>Three things B2B buyers <strong>actually worry about</strong></h2>
            <p class="lead">We've been doing this since 2014. Here's how we handle the real concerns.</p>

            <div class="about-grid">
                <div class="about-card">
                    <p class="number">01</p>
                    <h3>Sample vs. production</h3>
                    <p>We photograph and document every detail of your approved sample — cylinder, body, screws, packaging. When mass production is ready, we test each lock with its key. If it doesn't turn smoothly, it doesn't ship.</p>
                </div>
                <div class="about-card">
                    <p class="number">02</p>
                    <h3>Lead time reliability</h3>
                    <p>We've worked with the same casting supplier for 11 years. Raw materials are always in stock. If any delay is foreseeable, we inform you on day 20 — not on day 29.</p>
                </div>
                <div class="about-card">
                    <p class="number">03</p>
                    <h3>Communication after payment</h3>
                    <p>One dedicated contact handles your order from start to finish. All messages are replied to within 4 hours — even on weekends.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== 产品展示 ===== -->
    <section class="section" id="products">
        <div class="container">
            <p class="section-label">Products</p>
            <h2>Featured <strong>locks &amp; hardware</strong></h2>
            <p class="lead">OEM and custom specifications available.</p>

            <div class="product-grid">
                <div class="product-item">
                    <img src="https://www.nbrato.com/data/watermark/20180911/5b978c4796d8c.jpg" alt="T Handle Lock" class="image-box" style="object-fit:cover;" />
                    <h4>T Handle Lock</h4>
                    <p>Zinc alloy, chrome plated — for cabinets & RV doors</p>
                    <a href="#inquiry" class="btn-small">Inquire</a>
                </div>
                <div class="product-item">
                    <img src="https://www.nbrato.com/data/watermark/20240507/6639d7745f7cb.jpg" alt="Combination Brass Padlock" class="image-box" style="object-fit:cover;" />
                    <h4>Combination Brass Padlock</h4>
                    <p>Solid brass body, 4-digit resettable code</p>
                    <a href="#inquiry" class="btn-small">Inquire</a>
                </div>
                <div class="product-item">
                    <img src="https://www.nbrato.com/data/watermark/20180912/5b98d3ef213f1.jpg" alt="Industrial Paddle Lock" class="image-box" style="object-fit:cover;" />
                    <h4>Industrial Paddle Lock</h4>
                    <p>Heavy-duty, for telecom & electrical cabinets</p>
                    <a href="#inquiry" class="btn-small">Inquire</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== 询盘表单 ===== -->
    <section class="section inquiry-section" id="inquiry">
        <div class="container">
            <p class="section-label">Contact</p>
            <h2>Send an <strong>inquiry</strong></h2>
            <p class="lead" style="margin-bottom:16px;">We'll get back to you within 24 hours.</p>
            <p style="margin-bottom:32px;">
                <a href="https://wa.me/8618658255961" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;background:#25d366;color:#fff;padding:8px 20px;border-radius:30px;text-decoration:none;font-size:14px;font-weight:600;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp
                </a>
            </p>

            <form id="inquiry-form" style="max-width:640px;margin:0 auto;">
                <div class="form-row">
                    <div class="form-group">
                        <label>Full name *</label>
                        <input type="text" name="name" placeholder="John Doe" required />
                    </div>
                    <div class="form-group">
                        <label>Company *</label>
                        <input type="text" name="company" placeholder="Company name" required />
                    </div>
                </div>
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" placeholder="john@company.com" required />
                </div>
                <div class="form-group">
                    <label>Message *</label>
                    <textarea name="message" placeholder="Tell us what you need — product, quantity, specifications..."></textarea>
                </div>
                <div id="form-status" style="display:none;margin-bottom:16px;padding:12px;border-radius:6px;font-size:14px;"></div>
                <div class="cf-turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY" style="margin-bottom:16px;"></div>
                <button type="submit" class="form-submit" id="form-submit-btn">Send Inquiry</button>
            </form>
        </div>
    </section>

    <!-- ===== 结构化数据 ===== -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NINGBO RATO HARDWARE CO.,LTD",
            "brand": "WellLock",
            "url": "https://welllocks.com",
            "logo": "https://welllocks.com/images/logo.svg",
            "description": "Professional security hardware manufacturer since 2014. OEM hotel locks, cabinet locks, padlocks and digital locks.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ningbo",
                "addressCountry": "China"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "availableLanguage": ["English", "Chinese"]
            }
        }
    </script>

    <!-- ===== 页脚 ===== -->
    <footer>
        <div class="container">
            <div class="footer-contact">
                <a href="https://wa.me/8618658255961" class="footer-whatsapp" target="_blank" rel="noopener">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;margin-right:4px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                </a>
            </div>
            <p>&copy; 2026 <span>NINGBO RATO HARDWARE CO.,LTD</span> · Ningbo, China</p>
        </div>
    </footer>

    <!-- ===== 表单提交脚本 ===== -->
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
    <script>
    document.getElementById('inquiry-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const btn = document.getElementById('form-submit-btn');
        const status = document.getElementById('form-status');
        const formData = new FormData(this);

        // Get Turnstile token
        const turnstileToken = document.querySelector('.cf-turnstile [name="cf-turnstile-response"]')?.value;
        if (!turnstileToken) {
            status.style.display = 'block';
            status.style.background = '#fce4ec';
            status.style.color = '#c62828';
            status.textContent = '✗ Please complete the verification.';
            return;
        }

        btn.disabled = true;
        btn.textContent = 'Sending...';
        status.style.display = 'none';

        const payload = Object.fromEntries(formData.entries());
        payload['cf-turnstile-response'] = turnstileToken;

        try {
            const res = await fetch('/api/inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();

            status.style.display = 'block';
            if (data.success) {
                status.style.background = '#e8f5e9';
                status.style.color = '#2e7d32';
                status.textContent = '✓ ' + data.message;
                this.reset();
                if (window.turnstile) turnstile.reset();
            } else {
                status.style.background = '#fce4ec';
                status.style.color = '#c62828';
                status.textContent = '✗ ' + data.error;
            }
        } catch (err) {
            status.style.display = 'block';
            status.style.background = '#fce4ec';
            status.style.color = '#c62828';
            status.textContent = '✗ Network error. Please try again or email us directly.';
        } finally {
            btn.disabled = false;
            btn.textContent = 'Send Inquiry';
        }
    });
    </script>

</body>
</html>`;
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" width="400" height="80">
  <!-- Lock Icon -->
  <g transform="translate(8,4)">
    <!-- Shackle -->
    <rect x="12" y="0" width="18" height="32" rx="9" fill="none" stroke="#c9a84c" stroke-width="5"/>
    <rect x="7" y="2" width="28" height="30" rx="14" fill="#ffffff"/>
    <rect x="12" y="0" width="18" height="28" rx="9" fill="none" stroke="#c9a84c" stroke-width="5"/>
    <!-- Body -->
    <rect x="4" y="28" width="34" height="44" rx="5" fill="#c9a84c"/>
    <!-- Keyhole -->
    <circle cx="21" cy="44" r="5" fill="#ffffff"/>
    <rect x="18" y="44" width="6" height="14" rx="1" fill="#ffffff"/>
  </g>

  <!-- WellLock Text -->
  <text x="56" y="54" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="32" font-weight="700" letter-spacing="1" fill="#1a1a1a">
    Well<tspan fill="#c9a84c">Lock</tspan>
  </text>

  <!-- Tagline -->
  <text x="56" y="72" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="11" font-weight="400" letter-spacing="3" fill="#888888">
    SECURITY HARDWARE
  </text>
</svg>
`;
const BLOG_HTML = `<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fafafa;color:#1a1a1a;line-height:1.6}
  .blog-header{background:#1a1a1a;padding:24px 0}
  .blog-header .container{max-width:1000px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between}
  .blog-header a{color:#fff;text-decoration:none;font-weight:600;font-size:14px}
  .blog-header a:hover{color:#c9a84c}
  .blog-main{max-width:800px;margin:0 auto;padding:60px 24px}
  .blog-main h1{font-size:32px;font-weight:700;margin-bottom:8px}
  .blog-main .sub{color:#888;margin-bottom:40px}
  .empty-state{text-align:center;padding:80px 20px;background:#fff;border-radius:8px;border:1px solid #eaeaea}
  .empty-state svg{width:80px;height:80px;color:#ccc;margin-bottom:16px}
  .empty-state h2{font-size:20px;color:#333;margin-bottom:8px}
  .empty-state p{color:#999;font-size:14px}
  footer{text-align:center;padding:32px;color:#999;font-size:13px}
</style>
<div class="blog-header"><div class="container"><a href="/">WellLock</a><a href="/#inquiry">Inquiry</a></div></div>
<div class="blog-main">
  <h1>Blog</h1>
  <p class="sub">Industry insights, product guides, and company updates.</p>
  <div class="empty-state">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>
    <h2>Coming Soon</h2>
    <p>We're working on our first articles. Check back soon for insights on lock manufacturing, industry trends, and product guides.</p>
  </div>
</div>
<footer>&copy; 2026 NINGBO RATO HARDWARE CO.,LTD</footer>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Blog
    if (path === "/blog" || path === "/blog/") {
      return new Response(BLOG_HTML, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // API: form submission
    if (path === "/api/inquiry" && request.method === "POST") {
      return handleInquiry(request, env);
    }

    // Logo SVG
    if (path === "/images/logo.svg") {
      return new Response(LOGO_SVG, {
        headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" }
      });
    }

    // Robots.txt
    if (path === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\nSitemap: https://welllocks.com/sitemap.xml", {
        headers: { "Content-Type": "text/plain", "Cache-Control": "public, max-age=86400" }
      });
    }

    // Default: serve index.html
    return new Response(HTML, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};

async function handleInquiry(request, env) {
  let body;
  const ct = request.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    body = await request.json();
  } else {
    const fd = await request.formData();
    body = Object.fromEntries(fd.entries());
  }

  const { name, company, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ success: false, error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ success: false, error: "Invalid email address." }, { status: 400 });
  }

  // Turnstile verification (skip if no secret configured)
  if (env.TURNSTILE_SECRET_KEY) {
    const token = body["cf-turnstile-response"];
    if (!token) {
      return Response.json({ success: false, error: "Verification required." }, { status: 400 });
    }
    try {
      const v = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token }).toString()
      });
      const r = await v.json();
      if (!r.success) {
        return Response.json({ success: false, error: "Verification failed. Please try again." }, { status: 400 });
      }
    } catch (e) {
      console.error("Turnstile:", e);
      return Response.json({ success: false, error: "Verification error. Please try again." }, { status: 500 });
    }
  }

  const ts = new Date().toISOString();
  const subject = `[WellLock] ${name} — ${company || "N/A"}`;

  if (env.RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "WellLock <inquiry@welllocks.com>",
        to: env.RECIPIENT_EMAIL || "zhejiangrato@gmail.com",
        subject,
        html: `<h2>New Inquiry</h2><table><tr><td><b>Name</b></td><td>${name}</td></tr><tr><td><b>Company</b></td><td>${company||"N/A"}</td></tr><tr><td><b>Email</b></td><td>${email}</td></tr><tr><td><b>Time</b></td><td>${ts}</td></tr><tr><td><b>Message</b></td><td>${message}</td></tr></table>`,
        reply_to: email,
      })
    }).catch(e => console.error("Resend:", e));
  }

  console.log(`[INQUIRY] ${name} <${email}> — ${company || "N/A"}`);
  return Response.json({ success: true, message: "Thank you! We'll reply within 24 hours." });
}
