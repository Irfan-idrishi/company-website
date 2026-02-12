// =================== MAIN JAVASCRIPT FILE ===================

document.addEventListener('DOMContentLoaded', function() {
  /* -------------------------
    Mobile nav toggle
  --------------------------*/
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
      hamburger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu on click
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  /* -------------------------
    Smooth in-page scroll + focus management
  --------------------------*/
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Move focus for accessibility
      setTimeout(() => {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }, 450);
    });
  });

  /* -------------------------
    Reveal on scroll (fade-in/slide-up)
  --------------------------*/
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealEls.forEach(el => io.observe(el));

  /* -------------------------
    Staggered service cards
  --------------------------*/
  const cardStaggers = document.querySelectorAll('.stagger');
  cardStaggers.forEach(group => {
    [...group.children].forEach((child, idx) => {
      child.style.setProperty('--d', `${idx * 90}ms`);
    });
  });

  /* -------------------------
    Parallax on hero image
  --------------------------*/
  const heroImg = document.getElementById('heroImg');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function parallax() {
    if (!heroImg || reduceMotion) return;
    const rect = heroImg.getBoundingClientRect();
    const viewH = window.innerHeight || document.documentElement.clientHeight;
    // Normalize between -1 and 1
    const t = ((rect.top + rect.height / 2) - viewH / 2) / (viewH / 2);
    const translate = Math.max(-12, Math.min(12, -t * 10));
    const scale = 1.04;
    heroImg.style.transform = `translateY(${translate}px) scale(${scale})`;
  }
  window.addEventListener('scroll', parallax, { passive: true });
  window.addEventListener('resize', parallax);
  parallax();

  /* -------------------------
    Typing effect on hero keyword
  --------------------------*/
  const typingEl = document.getElementById('typingText');
  const words = ['SEO', 'Paid Ads', 'Landing Pages', 'Content', 'CRO'];
  let w = 0, i = 0, deleting = false;

  function typeLoop() {
    if (!typingEl || reduceMotion) return;
    const current = words[w];
    if (!deleting) {
      i++;
      typingEl.textContent = current.slice(0, i);
      if (i === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1100);
        return;
      }
    } else {
      i--;
      typingEl.textContent = current.slice(0, i);
      if (i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
      }
    }
    const delay = deleting ? 42 : 58;
    setTimeout(typeLoop, delay);
  }
  // Start after load
  setTimeout(typeLoop, 400);

  /* -------------------------
    Number counter animation
  --------------------------*/
  const counters = document.querySelectorAll('.counter');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target || '0');
      const duration = 1100;
      const start = performance.now();
      const from = 0;

      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(from + (target - from) * eased);
        el.textContent = String(val);
        if (p < 1) requestAnimationFrame(tick);
      }
      if (!reduceMotion) requestAnimationFrame(tick);
      else el.textContent = String(target);

      counterIO.unobserve(el);
    });
  }, { threshold: 0.35 });
  counters.forEach(c => counterIO.observe(c));

  /* -------------------------
    FAQ: smooth accordion transitions
  --------------------------*/
  const allDetails = document.querySelectorAll('details');
  allDetails.forEach(d => {
    const summary = d.querySelector('summary');
    const content = d.querySelector('.faq-content');

    // Manage aria-expanded on summary
    const syncAria = () => summary.setAttribute('aria-expanded', d.open ? 'true' : 'false');
    syncAria();

    // Animate open/close
    let anim;
    summary.addEventListener('click', (e) => {
      if (!content) return;
      e.preventDefault();

      // Close others
      allDetails.forEach(other => {
        if (other !== d && other.open) {
          other.open = false;
          const s = other.querySelector('summary');
          if (s) s.setAttribute('aria-expanded', 'false');
          const c = other.querySelector('.faq-content');
          if (c) c.style.maxHeight = '0px';
        }
      });

      const isOpen = d.open;
      if (anim) anim.cancel();

      if (!isOpen) {
        d.open = true;
        syncAria();
        const end = content.scrollHeight;
        content.style.maxHeight = '0px';
        // next frame to allow transition
        requestAnimationFrame(() => content.style.maxHeight = end + 'px');
      } else {
        // closing
        const startH = content.scrollHeight;
        content.style.maxHeight = startH + 'px';
        requestAnimationFrame(() => content.style.maxHeight = '0px');
        // after transition, close
        setTimeout(() => {
          d.open = false;
          syncAria();
        }, reduceMotion ? 0 : 260);
      }
    });

    // init closed height
    if (!d.open && content) content.style.maxHeight = '0px';
    if (d.open && content) content.style.maxHeight = content.scrollHeight + 'px';
  });

  /* -------------------------
    Testimonials carousel (auto + manual controls)
  --------------------------*/
  const carousel = document.getElementById('carousel');
  const tPrev = document.getElementById('tPrev');
  const tNext = document.getElementById('tNext');
  let tIndex = 0;
  let tTimer;

  function setCarousel(idx) {
    if (!carousel) return;
    const items = carousel.children.length;
    tIndex = (idx + items) % items;
    carousel.style.transform = `translateX(-${tIndex * 100}%)`;
  }

  function startAuto() {
    if (reduceMotion) return;
    stopAuto();
    tTimer = setInterval(() => setCarousel(tIndex + 1), 5200);
  }
  function stopAuto() {
    if (tTimer) clearInterval(tTimer);
  }

  if (tPrev) tPrev.addEventListener('click', () => { setCarousel(tIndex - 1); startAuto(); });
  if (tNext) tNext.addEventListener('click', () => { setCarousel(tIndex + 1); startAuto(); });

  // Keyboard controls when focused
  [tPrev, tNext].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { setCarousel(tIndex - 1); startAuto(); }
      if (e.key === 'ArrowRight') { setCarousel(tIndex + 1); startAuto(); }
    });
  });

  startAuto();

  /* -------------------------
    Process step progress indicators
  --------------------------*/
  const steps = document.querySelectorAll('.step');
  const stepIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const progress = entry.target.querySelector('.progress');
      if (progress) progress.style.height = '100%';
      stepIO.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  steps.forEach(s => stepIO.observe(s));

  /* -------------------------
    Form validation + micro-interactions
  --------------------------*/
  const form = document.getElementById('leadForm');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');

  function showToast(msg) {
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function isEmail(v){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  function markInvalid(wrapperId, invalid) {
    const wrap = document.getElementById(wrapperId);
    if (!wrap) return;
    wrap.classList.toggle('invalid', !!invalid);
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
  }

  if (form) {
    // Real-time validation hints
    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => {
        const id = el.id;
        // Revalidate lightweight
        validate(false);
      });
      el.addEventListener('blur', () => validate(false));
    });

    function validate(focusFirstInvalid = true){
      const name = getVal('name');
      const email = getVal('email');
      const industry = getVal('industry');
      const budget = getVal('budget');
      const goal = getVal('goal');
      const message = getVal('message');

      const vName = name.trim().length >= 2;
      const vEmail = isEmail(email);
      const vIndustry = industry.trim().length > 0;
      const vBudget = budget.trim().length > 0;
      const vGoal = goal.trim().length > 0;
      const vMessage = message.trim().length >= 20;

      markInvalid('fName', !vName);
      markInvalid('fEmail', !vEmail);
      markInvalid('fIndustry', !vIndustry);
      markInvalid('fBudget', !vBudget);
      markInvalid('fGoal', !vGoal);
      markInvalid('fMessage', !vMessage);

      const allOk = vName && vEmail && vIndustry && vBudget && vGoal && vMessage;

      if (!allOk && focusFirstInvalid) {
        const first = form.querySelector('.invalid input, .invalid select, .invalid textarea');
        if (first) first.focus();
      }
      return allOk;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = validate(true);
      if (!ok) {
        showToast('Please fix the highlighted fields.');
        return;
      }

      // Demo: simulate submission
      showToast('Submitted! We\'ll reply within 24 hours.');

      form.reset();
      // Clear validation styles
      ['fName','fEmail','fIndustry','fBudget','fGoal','fMessage','fPhone'].forEach(id => markInvalid(id, false));
    });
  }

  /* -------------------------
    Hero2 parallax tilt (from hero2 section)
  --------------------------*/
  const heroParallax = document.getElementById('heroParallax');
  if (heroParallax) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      const isTouch = matchMedia('(pointer: coarse)').matches;
      if (!isTouch) {
        heroParallax.addEventListener('mousemove', (e) => {
          const r = heroParallax.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;

          heroParallax.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-(y*6)}deg)`;
        });

        heroParallax.addEventListener('mouseleave', () => {
          heroParallax.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
        });
      }
    }
  }

  /* -------------------------
    AboutX tilt and counters
  --------------------------*/
  const aboutTilt = document.getElementById('aboutTilt');
  if (aboutTilt) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = matchMedia('(pointer: coarse)').matches;

    if (!reduce && !coarse) {
      aboutTilt.addEventListener('mousemove', (e) => {
        const r = aboutTilt.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - .5;
        const y = (e.clientY - r.top)/r.height - .5;
        aboutTilt.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-(y*6)}deg)`;
      });
      aboutTilt.addEventListener('mouseleave', () => aboutTilt.style.transform = 'perspective(900px) rotateY(0) rotateX(0)');
    }

    const aboutCounters = document.querySelectorAll('#about .counter');
    if (aboutCounters.length) {
      const run = (el) => {
        const target = parseInt(el.dataset.target || '0', 10);
        const dur = 900;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          el.textContent = Math.round(target * p);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            aboutCounters.forEach(c => run(c));
            io.disconnect();
          }
        });
      }, { threshold: .3 });

      io.observe(document.querySelector('#about'));
    }
  }

  /* -------------------------
    Process timeline interactions
  --------------------------*/
  const processSteps = [...document.querySelectorAll('#pxSteps .px-card')];
  const processFill = document.getElementById('pxFill');
  const processReduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (processSteps.length) {
    // reveal + active on scroll
    const processIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
        }
      });
    }, { threshold: .25 });

    processSteps.forEach(s => processIO.observe(s));

    const setActiveByScroll = () => {
      const mid = window.innerHeight * 0.45;
      let best = 0, bestDist = 1e9;
      processSteps.forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        const d = Math.abs((r.top + r.height / 2) - mid);
        if (d < bestDist) {
          bestDist = d;
          best = idx;
        }
      });
      processSteps.forEach((el, idx) => el.classList.toggle('is-active', idx === best));

      // fill rail based on active index
      if (processFill) {
        const pct = ((best + 1) / processSteps.length) * 100;
        processFill.style.height = pct + '%';
      }
    };

    // click to focus step
    processSteps.forEach((el, idx) => {
      el.addEventListener('click', () => {
        processSteps.forEach(x => x.classList.remove('is-active'));
        el.classList.add('is-active');
        if (processFill) processFill.style.height = (((idx + 1) / processSteps.length) * 100) + '%';
      });
    });

    if (!processReduce) {
      window.addEventListener('scroll', setActiveByScroll, { passive: true });
      window.addEventListener('resize', setActiveByScroll, { passive: true });
    }
    setActiveByScroll();
  }

  /* -------------------------
    Footer helpers
  --------------------------*/
  const ftYear = document.getElementById('ftYear');
  if (ftYear) ftYear.textContent = new Date().getFullYear();

  const ftForm = document.querySelector('.ft-form');
  if (ftForm) {
    const input = ftForm.querySelector('input');
    const msg = ftForm.querySelector('.ft-msg');

    ftForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = (input.value || '').trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

      if (!ok) {
        input.style.borderColor = 'rgba(254,88,98,.75)';
        msg.textContent = 'Please enter a valid email.';
        return;
      }
      input.style.borderColor = 'rgba(255,255,255,.18)';
      msg.textContent = 'Thanks! We\'ll get back to you shortly.';
      ftForm.reset();
    });
  }
});