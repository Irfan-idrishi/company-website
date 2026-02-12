<section class="final" id="contact" aria-label="Contact section">
    <div class="container">
      <div class="section-title reveal">
        <div>
          <span class="kicker">Let's grow</span>
          <h2>Tell us what you want to improve — we'll send a plan</h2>
          <p class="lead">Multi-field form with client-side validation and accessible feedback.</p>
        </div>
      </div>

      <div class="form-wrap">
        <div class="panel reveal" aria-label="Contact pitch">
          <h3 style="margin:0 0 10px; color:var(--navy); letter-spacing:-.02em;">
            <span class="headline-gradient">Free audit</span> includes:
          </h3>
          <ul class="bullets" style="margin-top:12px" aria-label="Audit inclusions">
            <li><i class="fa-solid fa-check"></i><div><strong>Tracking QA</strong><br><span class="hint">Conversion setup + common pitfalls checklist</span></div></li>
            <li><i class="fa-solid fa-check"></i><div><strong>Landing page notes</strong><br><span class="hint">Layout, proof, CTA, and form improvements</span></div></li>
            <li><i class="fa-solid fa-check"></i><div><strong>Campaign opportunities</strong><br><span class="hint">Keyword + audience + creative angles to test</span></div></li>
          </ul>

          <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
            <span class="badge"><i class="fa-solid fa-lock"></i> Your data stays private</span>
            <span class="badge"><i class="fa-solid fa-clock"></i> Reply within 24h</span>
          </div>
        </div>

        <div class="panel reveal" aria-label="Contact form panel">
          <form id="leadForm" novalidate aria-label="Lead capture form">
            <div class="field" id="fName">
              <label for="name">Full name *</label>
              <input id="name" name="name" type="text" autocomplete="name" placeholder="e.g., Alex Johnson" aria-required="true" />
              <div class="error" role="alert">Please enter your name.</div>
            </div>

            <div class="field" id="fEmail">
              <label for="email">Work email *</label>
              <input id="email" name="email" type="email" autocomplete="email" placeholder="e.g., alex@company.com" aria-required="true" />
              <div class="error" role="alert">Please enter a valid email.</div>
            </div>

            <div class="field" id="fPhone">
              <label for="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="e.g., +91 98765 43210" />
              <p class="hint">We'll only call if you request it.</p>
            </div>

            <div class="field" id="fIndustry">
              <label for="industry">Industry *</label>
              <select id="industry" name="industry" aria-required="true">
                <option value="">Select an option</option>
                <option>Local Services</option>
                <option>E-commerce</option>
                <option>B2B / Lead Gen</option>
                <option>Hospitality</option>
                <option>Real Estate</option>
                <option>Other</option>
              </select>
              <div class="error" role="alert">Please select your industry.</div>
            </div>

            <div class="field" id="fBudget">
              <label for="budget">Monthly marketing budget *</label>
              <select id="budget" name="budget" aria-required="true">
                <option value="">Select a range</option>
                <option>$500 – $1,500</option>
                <option>$1,500 – $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000+</option>
              </select>
              <div class="error" role="alert">Please select a budget range.</div>
            </div>

            <div class="field" id="fGoal">
              <label for="goal">Primary goal *</label>
              <select id="goal" name="goal" aria-required="true">
                <option value="">Choose a goal</option>
                <option>More qualified leads</option>
                <option>Higher ROAS / sales</option>
                <option>Better conversion rate</option>
                <option>Improve tracking & reporting</option>
                <option>All of the above</option>
              </select>
              <div class="error" role="alert">Please select a primary goal.</div>
            </div>

            <div class="field" id="fMessage">
              <label for="message">Tell us about your business *</label>
              <textarea id="message" name="message" placeholder="What do you sell? Who is your target audience? What's not working today?" aria-required="true"></textarea>
              <div class="error" role="alert">Please add a short message (at least 20 characters).</div>
            </div>

            <button class="btn btn-primary" type="submit" aria-label="Submit contact form">
              <i class="fa-solid fa-paper-plane"></i> Send & Get My Audit
            </button>

            <p class="hint" style="margin:0">
              By submitting, you agree to receive a response about your request. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <div class="toast" id="toast" role="status" aria-live="polite" aria-atomic="true">
    <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
    <span id="toastText">Submitted! We'll get back to you shortly.</span>
  </div>