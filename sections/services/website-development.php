<!doctype html>
<html lang="en">
<?php
include '../../include/head.php'; 
  ?>

  <body>
    <a class="skip-link" href="#main">Skip to content</a>



    <main id="main">
      <!-- HERO (left content + right CTA form) -->
      <section class="hero hero-wd" id="top" aria-label="Website designing hero">
        <div class="hero-bg" aria-hidden="true">
          <div class="orb o1"></div>
          <div class="orb o2"></div>
          <div class="gridlines"></div>
        </div>

        <div class="container hero-grid">
          <div class="hero-left reveal">
            <span class="kicker kicker-on-dark">Website Designing Company</span>

            <h1 class="hero-title">
              Premium Websites That
              <span class="headline-gradient">Convert</span>
              Visitors Into Leads
            </h1>

            <p class="hero-sub">
              We design fast, mobile-first websites with conversion psychology,
              clean UI, and smooth animations — so your brand looks premium and
              performs better.
            </p>

            <div class="hero-actions">
              <a class="btn btn-primary" href="#contact"
                ><i class="fa-solid fa-bolt"></i> Get Free Website Audit</a
              >
              <a class="btn btn-ghost btn-dark-ghost" href="#cases"
                >View Work <i class="fa-solid fa-arrow-right"></i
              ></a>
            </div>

            <div class="hero-badges stagger" aria-label="Highlights">
              <div class="badge reveal" style="--d: 0ms">
                <i class="fa-solid fa-gauge-high"></i> Speed-first builds
              </div>
              <div class="badge reveal" style="--d: 90ms">
                <i class="fa-solid fa-mobile-screen"></i> Mobile UX
              </div>
              <div class="badge reveal" style="--d: 180ms">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Smooth animations
              </div>
              <div class="badge reveal" style="--d: 270ms">
                <i class="fa-solid fa-shield"></i> SEO-ready structure
              </div>
            </div>
          </div>

          <aside class="hero-right reveal" style="--d: 120ms" aria-label="Hero form">
            <div class="form-card">
              <div class="form-head">
                <span class="chip"><i class="fa-solid fa-sparkles"></i> Quick Quote</span>
                <span class="muted">Response in 24 hours</span>
              </div>

              <form id="heroLeadForm" novalidate>
                <div class="field">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autocomplete="name"
                    required
                  />
                  <p class="error">Please enter your name.</p>
                </div>

                <div class="field">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autocomplete="email"
                    required
                  />
                  <p class="error">Please enter a valid email.</p>
                </div>

                <div class="field">
                  <label for="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91…"
                    autocomplete="tel"
                    required
                  />
                  <p class="error">Please enter your phone number.</p>
                </div>

                <div class="field">
                  <label for="type">Website Type</label>
                  <select id="type" name="type" required>
                    <option value="">Select</option>
                    <option>Business Website</option>
                    <option>Landing Page</option>
                    <option>E-commerce</option>
                    <option>Portfolio</option>
                    <option>Web App UI</option>
                  </select>
                  <p class="error">Please select a website type.</p>
                </div>

                <button class="btn btn-primary" type="submit">
                  <i class="fa-solid fa-paper-plane"></i> Get Pricing
                </button>

                <p class="hint">No spam. We’ll share an estimate + timeline.</p>
              </form>
            </div>

            <!-- Animated mini mock (parallax tilt) -->
            <div class="mini-mock" id="heroTilt" aria-hidden="true">
              <div class="mock-top">
                <span class="dot"></span><span class="dot"></span
                ><span class="dot"></span>
                <span class="mock-title">UI Preview</span>
              </div>
              <div class="mock-body">
                <div class="mock-line w70"></div>
                <div class="mock-line w55"></div>
                <div class="mock-line w85"></div>
                <div class="mock-bars">
                  <span style="--w: 72%"></span>
                  <span style="--w: 46%"></span>
                  <span style="--w: 88%"></span>
                </div>
              </div>

              <div class="float f1"><i class="fa-brands fa-figma"></i></div>
              <div class="float f2"><i class="fa-brands fa-wordpress"></i></div>
              <div class="float f3"><i class="fa-brands fa-shopify"></i></div>
            </div>
          </aside>
        </div>
      </section>

      <!-- Ask AI -->
      <section id="askai" aria-label="Ask AI section">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Ask AI</span>
              <h2>Why we’re one of the best website design teams</h2>
              <p class="lead">
                Open any AI platform and ask about WebMarlins — consistency
                matters.
              </p>
            </div>
          </div>

          <div class="ai-grid stagger">
            <a
              class="ai-btn reveal"
              style="--d: 0ms"
              href="https://chat.openai.com/"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-solid fa-comment-dots"></i>
              ChatGPT <span>Ask now</span>
            </a>
            <a
              class="ai-btn reveal"
              style="--d: 90ms"
              href="https://gemini.google.com/"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-brands fa-google"></i>
              Google Gemini <span>Ask now</span>
            </a>
            <a
              class="ai-btn reveal"
              style="--d: 180ms"
              href="https://claude.ai/"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              Claude <span>Ask now</span>
            </a>
            <a
              class="ai-btn reveal"
              style="--d: 270ms"
              href="https://www.perplexity.ai/"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
              Perplexity <span>Ask now</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Expertise: Tools + Languages -->
      <section id="expertise" aria-label="Tools and languages">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Our expertise</span>
              <h2>Website designing tools & web development languages</h2>
              <p class="lead">Modern stack, clean code, scalable components.</p>
            </div>
          </div>

          <div class="stack-grid stagger" aria-label="Tech stack grid">
            <article class="stack-card reveal" style="--d: 0ms">
              <div class="stack-ic"><i class="fa-brands fa-figma"></i></div>
              <h3>Design</h3>
              <p>Figma, Adobe XD — UI systems, auto-layout, dev handoff.</p>
              <div class="pill-row">
                <span class="pill">Figma</span><span class="pill">XD</span
                ><span class="pill">UI Kit</span>
              </div>
            </article>

            <article class="stack-card reveal" style="--d: 90ms">
              <div class="stack-ic"><i class="fa-brands fa-html5"></i></div>
              <h3>Frontend</h3>
              <p>HTML, CSS, JS — animations, interactions, performance-first.</p>
              <div class="pill-row">
                <span class="pill">HTML5</span><span class="pill">CSS3</span
                ><span class="pill">JavaScript</span>
              </div>
            </article>

            <article class="stack-card reveal" style="--d: 180ms">
              <div class="stack-ic"><i class="fa-brands fa-react"></i></div>
              <h3>Frameworks</h3>
              <p>React/Next, Tailwind-ready patterns, component libraries.</p>
              <div class="pill-row">
                <span class="pill">React</span><span class="pill">Next.js</span
                ><span class="pill">Tailwind</span>
              </div>
            </article>

            <article class="stack-card reveal" style="--d: 270ms">
              <div class="stack-ic"><i class="fa-brands fa-wordpress"></i></div>
              <h3>CMS + Commerce</h3>
              <p>WordPress, Shopify — editable pages with strong SEO structure.</p>
              <div class="pill-row">
                <span class="pill">WordPress</span><span class="pill">Shopify</span
                ><span class="pill">Headless</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Web Designing Services -->
      <section id="services" aria-label="Web designing services">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Services</span>
              <h2>Web designing services that fit your goal</h2>
              <p class="lead">
                Pick what you need — we’ll recommend the fastest path to ROI.
              </p>
            </div>
            <a class="btn btn-ghost reveal" href="#contact" style="--d: 160ms">
              <i class="fa-solid fa-comments"></i> Talk to a Designer
            </a>
          </div>

          <div class="cards stagger" aria-label="Service cards">
            <article class="card reveal" style="--d: 0ms">
              <div class="icon"><i class="fa-solid fa-layer-group"></i></div>
              <h3>Business Websites</h3>
              <p>Premium design + clear messaging that builds trust and drives inquiries.</p>
              <a class="link" href="#contact"
                >Get estimate <i class="fa-solid fa-arrow-right"></i
              ></a>
            </article>

            <article class="card reveal" style="--d: 90ms">
              <div class="icon"><i class="fa-solid fa-bolt"></i></div>
              <h3>Landing Pages</h3>
              <p>Conversion-first layouts for ads, lead gen, and product launches.</p>
              <a class="link" href="#process"
                >See process <i class="fa-solid fa-arrow-right"></i
              ></a>
            </article>

            <article class="card reveal" style="--d: 180ms">
              <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
              <h3>E-commerce</h3>
              <p>High trust product pages, fast checkout flow, mobile UX optimized.</p>
              <a class="link" href="#cases"
                >View examples <i class="fa-solid fa-arrow-right"></i
              ></a>
            </article>

            <article class="card reveal" style="--d: 270ms">
              <div class="icon"><i class="fa-solid fa-gears"></i></div>
              <h3>UI Improvements</h3>
              <p>Redesign, speed upgrades, CRO fixes, and modern animations.</p>
              <a class="link" href="#faq"
                >FAQs <i class="fa-solid fa-arrow-right"></i
              ></a>
            </article>
          </div>
        </div>
      </section>

      <!-- Our PPC Process (as requested) -->
      <section id="process" aria-label="Our PPC process">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Our PPC process</span>
              <h2>Design + PPC alignment that increases ROAS</h2>
              <p class="lead">
                We build pages that match your ads — message, offer, and tracking.
              </p>
            </div>
          </div>

          <div class="timeline stagger" aria-label="Process steps">
            <div class="step reveal" style="--d: 0ms">
              <div class="step-num">
                <div class="progress"></div>
                <span>1</span>
              </div>
              <div>
                <h4>Offer & audience mapping</h4>
                <p>We align ad intent with the exact landing message and CTA.</p>
              </div>
            </div>

            <div class="step reveal" style="--d: 90ms">
              <div class="step-num">
                <div class="progress"></div>
                <span>2</span>
              </div>
              <div>
                <h4>Landing page wireframe</h4>
                <p>Structure built for clarity: trust, proof, benefits, and conversion flow.</p>
              </div>
            </div>

            <div class="step reveal" style="--d: 180ms">
              <div class="step-num">
                <div class="progress"></div>
                <span>3</span>
              </div>
              <div>
                <h4>Tracking & speed QA</h4>
                <p>GA4/GTM events, form tracking, Core Web Vitals checklist.</p>
              </div>
            </div>

            <div class="step reveal" style="--d: 270ms">
              <div class="step-num">
                <div class="progress"></div>
                <span>4</span>
              </div>
              <div>
                <h4>Iteration loop</h4>
                <p>
                  We ship improvements based on data: heatmaps, scroll depth,
                  conversion rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose -->
      <section id="why" aria-label="Why choose WebMarlins">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Why choose us</span>
              <h2>Why choose WebMarlins as your web designing company</h2>
              <p class="lead">
                Premium look, fast load, and a conversion system — not just “a
                website”.
              </p>
            </div>
          </div>

          <div class="split">
            <div class="points stagger">
              <div class="point reveal" style="--d: 0ms">
                <div class="picon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                <div>
                  <h4>Modern UI + micro-interactions</h4>
                  <p>Polished animation that feels premium without slowing the site.</p>
                </div>
              </div>

              <div class="point reveal" style="--d: 90ms">
                <div class="picon"><i class="fa-solid fa-gauge-high"></i></div>
                <div>
                  <h4>Speed & SEO foundation</h4>
                  <p>Clean structure, semantic HTML, and performance best practices.</p>
                </div>
              </div>

              <div class="point reveal" style="--d: 180ms">
                <div class="picon"><i class="fa-solid fa-diagram-project"></i></div>
                <div>
                  <h4>Clear process & timeline</h4>
                  <p>
                    Milestones you can track: wireframe → UI → dev → QA → launch.
                  </p>
                </div>
              </div>

              <div class="point reveal" style="--d: 270ms">
                <div class="picon"><i class="fa-solid fa-handshake"></i></div>
                <div>
                  <h4>Support after launch</h4>
                  <p>
                    Bug fixes, content updates, and optimization help when you need
                    it.
                  </p>
                </div>
              </div>
            </div>

            <aside class="stats" aria-label="Quick stats">
              <div class="stat reveal" style="--d: 120ms">
                <div class="num"><span class="count" data-target="120">0</span>+</div>
                <div class="label">Web projects delivered</div>
              </div>
              <div class="stat reveal" style="--d: 210ms">
                <div class="num"><span class="count" data-target="35">0</span>%</div>
                <div class="label">Avg. conversion lift</div>
              </div>
              <div class="stat reveal" style="--d: 300ms">
                <div class="num"><span class="count" data-target="90">0</span>+</div>
                <div class="label">Speed score targets</div>
              </div>
              <div class="stat reveal" style="--d: 390ms">
                <div class="num"><span class="count" data-target="24">0</span>h</div>
                <div class="label">Typical response time</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- Client Problems -->
      <section id="problems" aria-label="Client problems we address">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">We fix</span>
              <h2>Client problems we address</h2>
              <p class="lead">
                The common reasons websites don’t generate leads — solved.
              </p>
            </div>
          </div>

          <div class="problem-grid stagger" aria-label="Problems grid">
            <article class="problem reveal" style="--d: 0ms">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <h3>Low conversions</h3>
              <p>
                We rebuild the page flow and CTAs to reduce friction and boost
                inquiry rate.
              </p>
            </article>
            <article class="problem reveal" style="--d: 90ms">
              <i class="fa-solid fa-hourglass-half"></i>
              <h3>Slow website speed</h3>
              <p>Optimize assets, structure, and scripts to hit performance targets.</p>
            </article>
            <article class="problem reveal" style="--d: 180ms">
              <i class="fa-solid fa-eye-slash"></i>
              <h3>Not looking premium</h3>
              <p>Upgrade visual hierarchy, spacing, and brand consistency.</p>
            </article>
            <article class="problem reveal" style="--d: 270ms">
              <i class="fa-solid fa-chart-line"></i>
              <h3>No tracking</h3>
              <p>Set up clean measurement so you can scale ads confidently.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Reviews -->
      <section id="reviews" aria-label="Client insights and reviews">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Client reviews</span>
              <h2>Client insights / reviews</h2>
              <p class="lead">Auto-carousel with manual controls.</p>
            </div>

            <div class="t-controls reveal" style="--d: 140ms">
              <button class="icon-btn" id="tPrev" aria-label="Previous testimonial">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button class="icon-btn" id="tNext" aria-label="Next testimonial">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div class="testimonials reveal" style="--d: 120ms">
            <div class="carousel" id="carousel" aria-label="Testimonials carousel">
              <article class="t-item">
                <p class="quote">
                  “Our website finally looks premium — and leads improved within the
                  first week.”
                </p>
                <div class="t-meta">
                  <div class="avatar"></div>
                  <div>
                    <div class="t-name">Marketing Lead</div>
                    <div class="t-role">Service Business • Delhi</div>
                  </div>
                  <div class="logo-pill"><i class="fa-solid fa-star"></i> 5.0</div>
                </div>
              </article>

              <article class="t-item">
                <p class="quote">
                  “Fast delivery, clean UI, and they understood conversion flow
                  really well.”
                </p>
                <div class="t-meta">
                  <div class="avatar"></div>
                  <div>
                    <div class="t-name">Founder</div>
                    <div class="t-role">D2C Brand</div>
                  </div>
                  <div class="logo-pill"><i class="fa-solid fa-star"></i> 5.0</div>
                </div>
              </article>

              <article class="t-item">
                <p class="quote">
                  “We matched ads to landing pages and ROAS improved because bounce
                  dropped.”
                </p>
                <div class="t-meta">
                  <div class="avatar"></div>
                  <div>
                    <div class="t-name">Performance Manager</div>
                    <div class="t-role">E-commerce</div>
                  </div>
                  <div class="logo-pill"><i class="fa-solid fa-star"></i> 5.0</div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section aria-label="CTA">
        <div class="container">
          <div class="cta-geo reveal">
            <div class="cta-geo-grid">
              <div>
                <span class="kicker" style="color: rgba(255, 255, 255, 0.85)"
                  >Limited slots</span
                >
                <h2>Want a free 10-minute website teardown?</h2>
                <p>
                  We’ll share 3 fast improvements you can implement this week for
                  better leads and better ROAS.
                </p>
              </div>
              <div class="cta-box">
                <a class="btn btn-primary cta-contrast" href="#contact"
                  ><i class="fa-solid fa-bolt"></i> Claim Free Teardown</a
                >
                <p class="hint" style="color: rgba(255, 255, 255, 0.78); margin: 0">
                  No pressure. Just actionable notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Studies -->
      <section id="cases" aria-label="Case studies">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Case studies</span>
              <h2>Design improvements with measurable outcomes</h2>
              <p class="lead">Replace with your real projects anytime.</p>
            </div>
          </div>

          <div class="case-grid stagger">
            <article class="case reveal" style="--d: 0ms">
              <img
                alt="Landing page redesign"
                loading="lazy"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
                width="1400"
                height="800"
              />
              <div class="case-body">
                <span class="tag"><i class="fa-solid fa-bolt"></i> Landing Page</span>
                <h3>Lead Gen Redesign</h3>
                <p>Clear hierarchy + CTA layout improvement.</p>
                <div class="metrics">
                  <div class="metric">+32% <small>CVR</small></div>
                  <div class="metric">-21% <small>Bounce</small></div>
                </div>
              </div>
            </article>

            <article class="case reveal" style="--d: 90ms">
              <img
                alt="E-commerce UI upgrade"
                loading="lazy"
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"
                width="1400"
                height="800"
              />
              <div class="case-body">
                <span class="tag"><i class="fa-solid fa-cart-shopping"></i> E-commerce</span>
                <h3>Storefront Upgrade</h3>
                <p>Product page trust + mobile UX improvements.</p>
                <div class="metrics">
                  <div class="metric">+18% <small>AOV</small></div>
                  <div class="metric">+24% <small>Add to cart</small></div>
                </div>
              </div>
            </article>

            <article class="case reveal" style="--d: 180ms">
              <img
                alt="Speed optimization"
                loading="lazy"
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80"
                width="1400"
                height="800"
              />
              <div class="case-body">
                <span class="tag"><i class="fa-solid fa-gauge-high"></i> Performance</span>
                <h3>Speed & SEO Fixes</h3>
                <p>Cleaner assets + layout shifts resolved.</p>
                <div class="metrics">
                  <div class="metric">90+ <small>Speed score</small></div>
                  <div class="metric">+14% <small>Organic</small></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Blog -->
      <section id="blog" aria-label="Blog section">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">From the blog</span>
              <h2>Latest insights (design, CRO, performance)</h2>
              <p class="lead">Swap with your CMS links or static pages.</p>
            </div>
            <a class="btn btn-ghost reveal" href="#contact" style="--d: 140ms">
              <i class="fa-solid fa-envelope-open-text"></i> Get Updates
            </a>
          </div>

          <div class="blog-grid stagger">
            <article class="post reveal" style="--d: 0ms">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
                alt="Design planning"
                width="1400"
                height="800"
              />
              <div class="body">
                <div class="meta">
                  <i class="fa-regular fa-clock"></i> 6 min read <span>•</span> Design
                </div>
                <h3>Landing page structure that converts in 2026</h3>
                <p>A practical flow to reduce bounce and increase form fills.</p>
              </div>
            </article>

            <article class="post reveal" style="--d: 90ms">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
                alt="Website UI"
                width="1400"
                height="800"
              />
              <div class="body">
                <div class="meta">
                  <i class="fa-regular fa-clock"></i> 5 min read <span>•</span> CRO
                </div>
                <h3>Micro-interactions that feel premium (not heavy)</h3>
                <p>Animations that improve clarity without slowing speed.</p>
              </div>
            </article>

            <article class="post reveal" style="--d: 180ms">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Team collaboration"
                width="1400"
                height="800"
              />
              <div class="body">
                <div class="meta">
                  <i class="fa-regular fa-clock"></i> 7 min read <span>•</span> Performance
                </div>
                <h3>Core Web Vitals checklist for business sites</h3>
                <p>Simple fixes you can apply before launching ads.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section id="faq" aria-label="FAQs">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">FAQ</span>
              <h2>Frequently asked questions</h2>
              <p class="lead">Quick answers about timelines, pricing, and process.</p>
            </div>
          </div>

          <div class="faq stagger">
            <details class="reveal" style="--d: 0ms">
              <summary>
                How long does a website take?
                <span class="chev"><i class="fa-solid fa-chevron-down"></i></span>
              </summary>
              <div class="faq-content">
                Typical timelines: 7–14 days for a landing page, 2–4 weeks for a
                business website, 4–8 weeks for e-commerce (depending on content and
                scope).
              </div>
            </details>

            <details class="reveal" style="--d: 90ms">
              <summary>
                Do you provide content & images?
                <span class="chev"><i class="fa-solid fa-chevron-down"></i></span>
              </summary>
              <div class="faq-content">
                Yes — we can help with copy structure, headings, and stock visuals.
                If you have brand assets, we’ll integrate them.
              </div>
            </details>

            <details class="reveal" style="--d: 180ms">
              <summary>
                Is the website SEO-friendly?
                <span class="chev"><i class="fa-solid fa-chevron-down"></i></span>
              </summary>
              <div class="faq-content">
                We build semantic structure, speed best practices, and clean on-page
                foundations. Advanced SEO can be added as a service.
              </div>
            </details>

            <details class="reveal" style="--d: 270ms">
              <summary>
                Can you redesign my existing site?
                <span class="chev"><i class="fa-solid fa-chevron-down"></i></span>
              </summary>
              <div class="faq-content">
                Yes — we can redesign UI/UX, improve speed, fix mobile layout issues,
                and upgrade conversion flow while keeping your brand identity.
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- Contact / Final CTA -->
      <section id="contact" class="final" aria-label="Contact section">
        <div class="container">
          <div class="section-title reveal">
            <div>
              <span class="kicker">Contact</span>
              <h2>Tell us what you want to build</h2>
              <p class="lead">
                Share your goal — we’ll recommend the best plan + timeline.
              </p>
            </div>
          </div>

          <div class="form-wrap">
            <div class="panel reveal">
              <h3 class="panel-title">What you get</h3>
              <ul class="bullets">
                <li><i class="fa-solid fa-check"></i> Wireframe + UI design</li>
                <li><i class="fa-solid fa-check"></i> Responsive development</li>
                <li><i class="fa-solid fa-check"></i> Basic SEO + speed setup</li>
                <li><i class="fa-solid fa-check"></i> Smooth animations</li>
              </ul>
            </div>

            <div class="panel reveal" style="--d: 120ms">
              <form id="leadForm" novalidate>
                <div class="field">
                  <label for="cname">Name</label>
                  <input
                    id="cname"
                    name="cname"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                  <p class="error">Please enter your name.</p>
                </div>

                <div class="field">
                  <label for="cemail">Email</label>
                  <input
                    id="cemail"
                    name="cemail"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                  <p class="error">Please enter a valid email.</p>
                </div>

                <div class="field">
                  <label for="cmsg">Message</label>
                  <textarea
                    id="cmsg"
                    name="cmsg"
                    placeholder="What do you want to build?"
                    required
                  ></textarea>
                  <p class="error">Please enter a message.</p>
                </div>

                <button class="btn btn-primary" type="submit">
                  <i class="fa-solid fa-paper-plane"></i> Send
                </button>
                <p class="hint">We’ll respond with estimate + next steps.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div class="toast" id="toast" role="status" aria-live="polite">
        <i class="fa-solid fa-circle-check"></i>
        <span id="toastText">Sent!</span>
      </div>
    </main>

    <?php
     include '../../include/footer.php'; 
     ?>

    <!-- Single script reference (de-duplicated) -->
    <script src="../../assets/js/script.js"></script>
  </body>
</html>