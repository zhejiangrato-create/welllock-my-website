const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WellLock — T Handle Lock Manufacturer | Chrome & Powder-Coated | Ningbo Rato</title>

    <!-- ===== SEO ===== -->
    <meta name="description" content="WellLock — China T handle lock manufacturer. Chrome plated & powder-coated zinc alloy T handle locks for garage, RV & truck doors. KA/KD keying, salt spray tested, MOQ 500. OEM/ODM factory direct." />
    <link rel="canonical" href="https://welllocks.com/" />
    <meta property="og:title" content="WellLock — Security Hardware Manufacturer" />
    <meta property="og:description" content="China T handle lock manufacturer. Chrome plated & powder-coated zinc alloy T handle locks for garage, RV & truck doors. OEM/ODM factory direct." />
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

        /* ===== T Handle 主推双色卡片 ===== */
        .thandle-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-top: 32px;
        }

        .thandle-card {
            border: 1px solid #eaeaea;
            border-radius: 12px;
            overflow: hidden;
            background: #fff;
            display: flex;
            flex-direction: column;
        }

        .thandle-card .th-img {
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: contain;
            background: #f5f5f5;
            padding: 20px;
        }

        .thandle-card .th-body {
            padding: 24px;
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        .thandle-card .th-sku {
            display: inline-block;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #c9a84c;
            margin-bottom: 4px;
        }

        .thandle-card h3 {
            font-size: 19px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 8px;
        }

        .thandle-card .th-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 16px;
            line-height: 1.6;
        }

        .th-specs {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .th-specs td {
            padding: 9px 0;
            border-bottom: 1px solid #f0f0f0;
            font-size: 13px;
            vertical-align: top;
        }

        .th-specs td:first-child {
            color: #999;
            width: 38%;
            font-weight: 500;
        }

        .th-specs td:last-child {
            color: #333;
        }

        .th-specs tr:last-child td {
            border-bottom: none;
        }

        .th-btn {
            margin-top: auto;
            text-align: center;
            padding: 10px 0;
            font-size: 14px;
        }

        /* ===== 规格对比表 ===== */
        .spec-table {
            border: 1px solid #eaeaea;
            border-radius: 8px;
            overflow: hidden;
            background: #fff;
        }

        .spec-header {
            display: grid;
            grid-template-columns: 2fr 1.5fr 1.5fr 2fr 0.7fr 0.8fr;
            background: #1a1a1a;
            color: #fff;
            padding: 10px 16px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            gap: 8px;
            align-items: center;
        }

        .spec-row {
            display: grid;
            grid-template-columns: 2fr 1.5fr 1.5fr 2fr 0.7fr 0.8fr;
            padding: 14px 16px;
            border-bottom: 1px solid #eaeaea;
            font-size: 13px;
            color: #444;
            gap: 8px;
            align-items: center;
        }

        .spec-row:last-child { border-bottom: none; }
        .spec-row:hover { background: #f9f9f9; }

        .spec-product {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .spec-product strong { font-size: 14px; color: #1a1a1a; }

        /* ===== FAQ 响应式 ===== */
        @media (max-width: 768px) {
            .faq-grid { grid-template-columns: 1fr !important; }

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
            .thandle-grid {
                grid-template-columns: 1fr;
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
                <a href="#faq">FAQ</a>
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
            <h2>Three core products, <strong>fully customizable</strong></h2>
            <p class="lead">Standard specs below. Need different material, finish, or keying? Just ask.</p>

            <div class="spec-table" style="margin-top:32px;">
                <div class="spec-header">
                    <span>Product</span><span>Material</span><span>Key Features</span><span>Applications</span><span>MOQ</span><span></span>
                </div>
                <div class="spec-row">
                    <div class="spec-product">
                        <img src="/images/t-handle-duo.jpg" alt="T Handle Lock — chrome plated & powder-coated black" width="60" height="60" style="object-fit:cover;border-radius:4px;" />
                        <strong>T Handle Lock</strong>
                    </div>
                    <span>Zinc alloy — chrome plated / black powder-coated</span>
                    <span>Two finishes, KA/KD keying, salt spray tested</span>
                    <span>Garage door, fire door, RV &amp; truck door</span>
                    <span>500 pcs</span>
                    <span><a href="#inquiry" class="btn-small">Inquire</a></span>
                </div>
                <div class="spec-row">
                    <div class="spec-product">
                        <img src="https://www.nbrato.com/data/watermark/20240507/6639d7745f7cb.jpg" alt="Combination Brass Padlock" width="60" height="60" style="object-fit:cover;border-radius:4px;" />
                        <strong>Combination Brass Padlock</strong>
                    </div>
                    <span>Solid brass, hardened steel shackle</span>
                    <span>4-digit resettable, weather-resistant</span>
                    <span>Lockers, toolboxes, utility cabinets</span>
                    <span>500 pcs</span>
                    <span><a href="#inquiry" class="btn-small">Inquire</a></span>
                </div>
                <div class="spec-row">
                    <div class="spec-product">
                        <img src="https://www.nbrato.com/data/watermark/20180912/5b98d3ef213f1.jpg" alt="Industrial Paddle Lock" width="60" height="60" style="object-fit:cover;border-radius:4px;" />
                        <strong>Industrial Paddle Lock</strong>
                    </div>
                    <span>Heavy-duty zinc alloy / steel</span>
                    <span>Multiple keying options, IP65 optional</span>
                    <span>Telecom, electrical, industrial cabinets</span>
                    <span>500 pcs</span>
                    <span><a href="#inquiry" class="btn-small">Inquire</a></span>
                </div>
            </div>

            <h2 style="margin-top:64px;">T Handle Locks in <strong>detail</strong></h2>
            <p class="lead">Two finishes, one zinc alloy body. Choose chrome-plated for OEM doors, powder-coated black for heavy-duty use.</p>

            <img src="/images/t-handle-duo.jpg" alt="T Handle Lock — chrome plated & powder-coated black" style="display:block;max-width:720px;width:100%;margin:32px auto;border-radius:12px;border:1px solid #eaeaea;" />

            <div class="thandle-grid">
                <div class="thandle-card">
                    <div class="th-body">
                        <span class="th-sku">RCL-021</span>
                        <h3>Chrome Plated T Handle Lock</h3>
                        <p class="th-desc">Bright chrome finish. For garage doors, fire doors, entrance doors and RV doors.</p>
                        <table class="th-specs">
                            <tr><td>Material</td><td>Zinc alloy, chrome plated</td></tr>
                            <tr><td>Square shaft</td><td>5/16 in. × 4-5/8 in.</td></tr>
                            <tr><td>Size / Weight</td><td>100 × 64 × 50 mm / 210 g</td></tr>
                            <tr><td>Salt spray</td><td>72 h</td></tr>
                            <tr><td>Keying</td><td>KA (key alike) / KD (key different)</td></tr>
                            <tr><td>MOQ</td><td>500 pcs</td></tr>
                        </table>
                        <a href="#inquiry" class="btn-small th-btn">Inquire</a>
                    </div>
                </div>
                <div class="thandle-card">
                    <div class="th-body">
                        <span class="th-sku">Garage Door Black Handle</span>
                        <h3>Black Powder-Coated T Handle Lock</h3>
                        <p class="th-desc">Powder-coated black — zinc alloy, not plastic. For heavy-duty garage doors, truck doors and trailers.</p>
                        <table class="th-specs">
                            <tr><td>Material</td><td>Zinc alloy, powder-coated black</td></tr>
                            <tr><td>Square shaft</td><td>127 mm length</td></tr>
                            <tr><td>Size / Weight</td><td>111 × 62 × 127 mm / 220 g</td></tr>
                            <tr><td>Salt spray</td><td>24 h (standard)</td></tr>
                            <tr><td>Keying</td><td>KA / KD</td></tr>
                            <tr><td>MOQ</td><td>500 pcs</td></tr>
                        </table>
                        <a href="#inquiry" class="btn-small th-btn">Inquire</a>
                    </div>
                </div>
            </div>
            <p style="text-align:center;margin-top:24px;color:#888;font-size:14px;">Don't see your spec? We do OEM. <a href="#inquiry" style="color:#c9a84c;">Tell us what you need →</a></p>
        </div>
    </section>

<!-- ===== FAQ ===== -->
    <section class="section" id="faq" style="background:#fafafa;">
        <div class="container">
            <p class="section-label">FAQ</p>
            <h2>Questions <strong>buyers ask</strong></h2>
            <div class="faq-grid" style="margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:24px;">
                <div class="faq-item" style="background:#fff;padding:20px;border-radius:8px;border:1px solid #eaeaea;">
                    <h4 style="font-size:15px;margin-bottom:6px;">Minimum order quantity?</h4>
                    <p style="font-size:14px;color:#666;">Typically 500 units per SKU. Smaller trial orders negotiable for new partnerships.</p>
                </div>
                <div class="faq-item" style="background:#fff;padding:20px;border-radius:8px;border:1px solid #eaeaea;">
                    <h4 style="font-size:15px;margin-bottom:6px;">Can you do custom branding?</h4>
                    <p style="font-size:14px;color:#666;">Yes — logo laser engraving, custom packaging, private label. Send us your artwork.</p>
                </div>
                <div class="faq-item" style="background:#fff;padding:20px;border-radius:8px;border:1px solid #eaeaea;">
                    <h4 style="font-size:15px;margin-bottom:6px;">How long for samples?</h4>
                    <p style="font-size:14px;color:#666;">Standard samples shipped in 3-5 days. Custom samples typically 7-10 days.</p>
                </div>
                <div class="faq-item" style="background:#fff;padding:20px;border-radius:8px;border:1px solid #eaeaea;">
                    <h4 style="font-size:15px;margin-bottom:6px;">What's your lead time?</h4>
                    <p style="font-size:14px;color:#666;">25-30 days for standard orders. We'll confirm exact timeline after reviewing your specs.</p>
                </div>
                <div class="faq-item" style="background:#fff;padding:20px;border-radius:8px;border:1px solid #eaeaea;">
                    <h4 style="font-size:15px;margin-bottom:6px;">How do you ensure quality?</h4>
                    <p style="font-size:14px;color:#666;">Pre-production sample approval → batch inspection → pre-shipment check. We match the sample you approved.</p>
                </div>
                <div class="faq-item" style="background:#fff;padding:20px;border-radius:8px;border:1px solid #eaeaea;">
                    <h4 style="font-size:15px;margin-bottom:6px;">Payment terms?</h4>
                    <p style="font-size:14px;color:#666;">T/T (30% deposit, 70% before shipment) or L/C for larger orders.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== 询盘表单 ===== -->
    <section class="section inquiry-section" id="inquiry">
        <div class="container">
            <p class="section-label">Contact</p>
            <h2>What are you <strong>securing?</strong></h2>
            <p class="lead" style="margin-bottom:24px;">Tell us your industry — we'll recommend the right product.</p>

            <div style="max-width:640px;margin:0 auto 32px;">
                <div class="industry-options" style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
                    <label class="industry-chip" style="background:#fff;border:1px solid #ddd;padding:10px 20px;border-radius:30px;cursor:pointer;font-size:14px;transition:all .2s;">
                        <input type="radio" name="industry" value="Telecom / Electrical" style="display:none;" /> Telecom / Electrical
                    </label>
                    <label class="industry-chip" style="background:#fff;border:1px solid #ddd;padding:10px 20px;border-radius:30px;cursor:pointer;font-size:14px;transition:all .2s;">
                        <input type="radio" name="industry" value="RV / Automotive" style="display:none;" /> RV / Automotive
                    </label>
                    <label class="industry-chip" style="background:#fff;border:1px solid #ddd;padding:10px 20px;border-radius:30px;cursor:pointer;font-size:14px;transition:all .2s;">
                        <input type="radio" name="industry" value="Storage / Lockers" style="display:none;" /> Storage / Lockers
                    </label>
                    <label class="industry-chip" style="background:#fff;border:1px solid #ddd;padding:10px 20px;border-radius:30px;cursor:pointer;font-size:14px;transition:all .2s;">
                        <input type="radio" name="industry" value="Industrial Equipment" style="display:none;" /> Industrial Equipment
                    </label>
                    <label class="industry-chip" style="background:#fff;border:1px solid #ddd;padding:10px 20px;border-radius:30px;cursor:pointer;font-size:14px;transition:all .2s;">
                        <input type="radio" name="industry" value="Other" style="display:none;" /> Other
                    </label>
                </div>
                <div id="recommendation" style="display:none;margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #c9a84c;text-align:center;font-size:14px;color:#333;"></div>
            </div>

            <p style="text-align:center;margin-bottom:16px;">
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
                    <textarea name="message" placeholder="What product, quantity, and specifications do you need?"></textarea>
                </div>
                <div id="form-status" style="display:none;margin-bottom:16px;padding:12px;border-radius:6px;font-size:14px;"></div>
                <div class="cf-turnstile" data-sitekey="0x4AAAAAAENoOqYh6_8yX0DZ" style="margin-bottom:16px;"></div>
                <button type="submit" class="form-submit" id="form-submit-btn">Send Inquiry</button>
            </form>
        </div>
    </section>

    <!-- ===== 结构化数据 ===== -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Chrome Plated T Handle Lock",
            "sku": "RCL-021",
            "brand": {"@type": "Brand", "name": "WellLock"},
            "manufacturer": {"@type": "Organization", "name": "NINGBO RATO HARDWARE CO.,LTD"},
            "material": "Zinc alloy, chrome plated",
            "image": "https://welllocks.com/images/t-handle-duo.jpg",
            "additionalProperty": [
                {"@type": "PropertyValue", "name": "Square shaft", "value": "5/16 in. x 4-5/8 in."},
                {"@type": "PropertyValue", "name": "Size", "value": "100 x 64 x 50 mm"},
                {"@type": "PropertyValue", "name": "Weight", "value": "210 g"},
                {"@type": "PropertyValue", "name": "MOQ", "value": "500 pcs"}
            ]
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Black Powder-Coated T Handle Lock",
            "sku": "Garage Door Black Handle",
            "brand": {"@type": "Brand", "name": "WellLock"},
            "manufacturer": {"@type": "Organization", "name": "NINGBO RATO HARDWARE CO.,LTD"},
            "material": "Zinc alloy, powder-coated black",
            "image": "https://welllocks.com/images/t-handle-duo.jpg",
            "additionalProperty": [
                {"@type": "PropertyValue", "name": "Square shaft", "value": "127 mm"},
                {"@type": "PropertyValue", "name": "Size", "value": "111 x 62 x 127 mm"},
                {"@type": "PropertyValue", "name": "Weight", "value": "220 g"},
                {"@type": "PropertyValue", "name": "Salt spray", "value": "24 h"},
                {"@type": "PropertyValue", "name": "MOQ", "value": "500 pcs"}
            ]
        }
    </script>
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

    <!-- ===== 行业选择 + 表单提交脚本 ===== -->
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
    <script>
    // Industry chip selection
    const recs = {
        'Telecom / Electrical': 'Recommended: <strong>Industrial Paddle Lock</strong> — IP65 optional, multiple keying. Also consider T Handle Lock for access panels.',
        'RV / Automotive': 'Recommended: <strong>T Handle Lock</strong> — chrome plated (RCL-021) or powder-coated black. Zinc alloy, KA/KD keying, salt spray tested. Multiple shaft lengths for different door thicknesses.',
        'Storage / Lockers': 'Recommended: <strong>Combination Brass Padlock</strong> — 4-digit resettable, weatherproof. Custom engraving available.',
        'Industrial Equipment': 'Recommended: <strong>Industrial Paddle Lock</strong> — heavy-duty zinc alloy. Also compatible with T Handle Lock.',
        'Other': "We'll review your requirements and recommend the best solution. Describe your use case in the message below."
    };
    document.querySelectorAll('.industry-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('.industry-chip').forEach(c => {
                c.style.background = '#fff';
                c.style.borderColor = '#ddd';
                c.style.color = '#333';
            });
            this.style.background = '#1a1a1a';
            this.style.borderColor = '#1a1a1a';
            this.style.color = '#fff';
            const val = this.querySelector('input').value;
            document.getElementById('recommendation').style.display = 'block';
            document.getElementById('recommendation').innerHTML = recs[val];
        });
    });

    // Form submission
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
const LLMS_TXT = `# WellLock — Security Hardware Manufacturer
# AI-readable site index for LLM crawlers (GPTBot, ClaudeBot, PerplexityBot)

## About
- Company: NINGBO RATO HARDWARE CO.,LTD (Ningbo, China)
- Brand: WellLock
- Website: https://welllocks.com
- Founded: 2014
- Factory: 4,000 m² owned facility
- Certifications: CE, ROHS (certificate numbers available on request)
- Export: 50+ countries
- Business model: B2B OEM/ODM, factory-direct supply to industrial end-users
- NOT a distributor or retailer

## Products

### T Handle Lock — Chrome Plated (RCL-021)
- Material: Zinc alloy, chrome plated (metal, not plastic)
- Square shaft: 5/16 in. x 4-5/8 in.
- Size: 100 x 64 x 50 mm; Weight: 210 g
- Salt spray: 72 h
- Keying: KA (key alike) / KD (key different)
- Cylinder: brass
- Use: Garage doors, fire doors, entrance doors, RV doors
- MOQ: 500 units
- Custom: Keying, finish, logo, shaft length available
- More: https://welllocks.com/#products

### T Handle Lock — Black Powder-Coated (Garage Door Black Handle)
- Material: Zinc alloy, powder-coated black (metal, not plastic)
- Square shaft: 127 mm length
- Size: 111 x 62 x 127 mm; Weight: 220 g
- Salt spray: 24 h (standard)
- Keying: KA / KD
- Use: Heavy-duty garage doors, truck doors, trailers
- MOQ: 500 units
- Custom: Keying, finish, logo available
- More: https://welllocks.com/#products

### Combination Brass Padlock
- Material: Solid brass body, hardened steel shackle
- Features: 4-digit resettable combination
- Use: Storage lockers, toolboxes, utility cabinets
- MOQ: 500 units
- Custom: Engraving, color, shackle length available
- More: https://welllocks.com/#products

### Industrial Paddle Lock
- Material: Heavy-duty zinc alloy / steel
- Use: Telecom cabinets, electrical enclosures, industrial equipment
- MOQ: 500 units
- Custom: Lock cylinder, finish, keying options available
- More: https://welllocks.com/#products

## Services
- OEM/ODM: Custom specifications, materials, finishes, branding
- Sampling: Available, contact for lead time
- Quality: Pre-shipment inspection, sample-to-production matching
- Lead time: Typically 25-30 days (varies by order)
- Payment: T/T, L/C

## Contact
- Email: zhejiangrato@gmail.com
- WhatsApp: +86 18658255961
- Inquiry form: https://welllocks.com/#inquiry
- Blog: https://welllocks.com/blog

## FAQ
- Minimum order quantity? Typically 500 units per SKU
- Can you do custom branding? Yes — logo engraving, custom packaging, private label
- Do you provide samples? Yes, contact for sample lead time and cost
- What certifications do you have? CE, ROHS
- What markets do you serve? 50+ countries, focus on Belt & Road, Europe, Americas
- How do you ensure quality? Pre-production sample approval + pre-shipment inspection
`;
const T_HANDLE_DUO_IMG = "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";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/llms.txt") {
      return new Response(LLMS_TXT, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
    }

    if (path === "/blog" || path === "/blog/") {
      return new Response(BLOG_HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    if (path === "/api/inquiry" && request.method === "POST") {
      return handleInquiry(request, env);
    }

    if (path === "/images/logo.svg") {
      return new Response(LOGO_SVG, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" } });
    }

    if (path === "/images/t-handle-duo.jpg") {
      const bytes = Uint8Array.from(atob(T_HANDLE_DUO_IMG), c => c.charCodeAt(0));
      return new Response(bytes, { headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=86400" } });
    }

    if (path === "/robots.txt") {
      return new Response("User-agent: *\nAllow: /\nSitemap: https://welllocks.com/sitemap.xml", { headers: { "Content-Type": "text/plain" } });
    }

    return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
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
      return Response.json({ success: false, error: "Verification error." }, { status: 500 });
    }
  }

  const ts = new Date().toISOString();
  const industry = body.industry || "Not specified";
  const subject = `[WellLock] ${name} — ${company || "N/A"} [${industry}]`;

  if (env.RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "WellLock <inquiry@welllocks.com>",
        to: env.RECIPIENT_EMAIL || "zhejiangrato@gmail.com",
        subject,
        html: `<h2>New Inquiry</h2><table><tr><td><b>Name</b></td><td>${name}</td></tr><tr><td><b>Company</b></td><td>${company||"N/A"}</td></tr><tr><td><b>Industry</b></td><td>${industry}</td></tr><tr><td><b>Email</b></td><td>${email}</td></tr><tr><td><b>Time</b></td><td>${ts}</td></tr><tr><td><b>Message</b></td><td>${message}</td></tr></table>`,
        reply_to: email,
      })
    }).catch(e => console.error("Resend:", e));
  }

  console.log(`[INQUIRY] ${name} <${email}> — ${company || "N/A"} [${industry}]`);
  return Response.json({ success: true, message: "Thank you! We'll reply within 24 hours." });
}
