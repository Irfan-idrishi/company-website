// =================== MAIN JAVASCRIPT FILE ===================

document.addEventListener('DOMContentLoaded', function() {
  /* -------------------------
    Mobile nav toggle
  --------------------------*/
  // const hamburger = document.getElementById('hamburger');
  // const mobileNav = document.getElementById('mobileNav');

  // if (hamburger && mobileNav) {
  //   hamburger.addEventListener('click', () => {
  //     const open = mobileNav.classList.toggle('open');
  //     hamburger.setAttribute('aria-expanded', String(open));
  //     hamburger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  //   });

  //   // Close menu on click
  //   mobileNav.querySelectorAll('a').forEach(a => {
  //     a.addEventListener('click', () => {
  //       mobileNav.classList.remove('open');
  //       hamburger.setAttribute('aria-expanded', 'false');
  //       hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  //     });
  //   });
  // }


  
  const toggle = document.getElementById("servicesToggle");
  const menu = document.getElementById("servicesMenu");

  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    menu.style.display =
      menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
      menu.style.display = "none";
    }
  });



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



// =====================services PAGE JS==============================================


// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  initMobileNav();
  initScrollEffects();
  initHeroChart();
  initCounters();
  initReviewsSlider();
  initFAQ();
  initContactForm();
  initBackToTop();
  initNewsletterForm();
  initLoadingOverlay();
  initSmoothScroll();
});

// ==================== MOBILE NAVIGATION ====================
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Update aria-expanded
      const expanded = this.classList.contains('active');
      this.setAttribute('aria-expanded', expanded);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = expanded ? 'hidden' : '';
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}

// ==================== SCROLL EFFECTS ====================
function initScrollEffects() {
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Add shadow to header on scroll
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide/show header on scroll (optional)
    // if (currentScroll > lastScroll && currentScroll > 500) {
    //   header.style.transform = 'translateY(-100%)';
    // } else {
    //   header.style.transform = 'translateY(0)';
    // }

    lastScroll = currentScroll;
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const animatedElements = document.querySelectorAll(
    '[data-aos], .feature-card, .service-card, .case-study-card, .blog-card, .process-step'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// ==================== HERO CHART ====================
function initHeroChart() {
  const canvas = document.getElementById('heroChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = 200;

  // Chart data
  const data = [20, 35, 45, 40, 60, 70, 85, 95, 110, 125, 140, 155];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const padding = 30;
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;
  
  const maxValue = Math.max(...data);
  const xStep = chartWidth / (data.length - 1);
  const yStep = chartHeight / maxValue;

  // Draw gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, 'rgba(254, 88, 98, 0.3)');
  gradient.addColorStop(1, 'rgba(254, 88, 98, 0.05)');

  // Draw area
  ctx.beginPath();
  ctx.moveTo(padding, canvas.height - padding);
  
  data.forEach((value, index) => {
    const x = padding + index * xStep;
    const y = canvas.height - padding - value * yStep;
    
    if (index === 0) {
      ctx.lineTo(x, y);
    } else {
      const prevX = padding + (index - 1) * xStep;
      const prevY = canvas.height - padding - data[index - 1] * yStep;
      const cp1x = prevX + xStep / 3;
      const cp2x = x - xStep / 3;
      ctx.bezierCurveTo(cp1x, prevY, cp2x, y, x, y);
    }
  });
  
  ctx.lineTo(canvas.width - padding, canvas.height - padding);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw line
  ctx.beginPath();
  ctx.moveTo(padding, canvas.height - padding - data[0] * yStep);
  
  data.forEach((value, index) => {
    const x = padding + index * xStep;
    const y = canvas.height - padding - value * yStep;
    
    if (index === 0) {
      ctx.lineTo(x, y);
    } else {
      const prevX = padding + (index - 1) * xStep;
      const prevY = canvas.height - padding - data[index - 1] * yStep;
      const cp1x = prevX + xStep / 3;
      const cp2x = x - xStep / 3;
      ctx.bezierCurveTo(cp1x, prevY, cp2x, y, x, y);
    }
  });
  
  ctx.strokeStyle = '#FE5862';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw dots
  data.forEach((value, index) => {
    const x = padding + index * xStep;
    const y = canvas.height - padding - value * yStep;
    
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#FE5862';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Animate chart on load
  animateChart(ctx, canvas, data, xStep, yStep, padding, gradient);
}

function animateChart(ctx, canvas, data, xStep, yStep, padding, gradient) {
  let progress = 0;
  const duration = 1500;
  const startTime = performance.now();

  function animate(currentTime) {
    progress = (currentTime - startTime) / duration;
    
    if (progress > 1) progress = 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw animated area
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    
    data.forEach((value, index) => {
      if (index / data.length <= progress) {
        const x = padding + index * xStep;
        const y = canvas.height - padding - value * yStep;
        
        if (index === 0) {
          ctx.lineTo(x, y);
        } else {
          const prevX = padding + (index - 1) * xStep;
          const prevY = canvas.height - padding - data[index - 1] * yStep;
          const cp1x = prevX + xStep / 3;
          const cp2x = x - xStep / 3;
          ctx.bezierCurveTo(cp1x, prevY, cp2x, y, x, y);
        }
      }
    });
    
    ctx.lineTo(padding + progress * (canvas.width - 2 * padding), canvas.height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw animated line
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding - data[0] * yStep);
    
    data.forEach((value, index) => {
      if (index / data.length <= progress) {
        const x = padding + index * xStep;
        const y = canvas.height - padding - value * yStep;
        
        if (index === 0) {
          ctx.lineTo(x, y);
        } else {
          const prevX = padding + (index - 1) * xStep;
          const prevY = canvas.height - padding - data[index - 1] * yStep;
          const cp1x = prevX + xStep / 3;
          const cp2x = x - xStep / 3;
          ctx.bezierCurveTo(cp1x, prevY, cp2x, y, x, y);
        }
      }
    });
    
    ctx.strokeStyle = '#FE5862';
    ctx.lineWidth = 3;
    ctx.stroke();

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// ==================== COUNTER ANIMATION ====================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count')) || parseInt(element.textContent);
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (target - start) * easeOutQuart);
    
    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(updateCounter);
}

// ==================== REVIEWS SLIDER ====================
function initReviewsSlider() {
  const track = document.querySelector('.reviews-track');
  const prevBtn = document.getElementById('prevReview');
  const nextBtn = document.getElementById('nextReview');
  
  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.review-card');
  let currentIndex = 0;
  let autoplayInterval;

  function updateSlider() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Event listeners
  nextBtn.addEventListener('click', function() {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  prevBtn.addEventListener('click', function() {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  track.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      stopAutoplay();
      startAutoplay();
    }
  }

  // Start autoplay
  startAutoplay();

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
}

// ==================== FAQ ACCORDION ====================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all FAQ items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        otherItem.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });

    // Keyboard support
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm(form)) {
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate API call (replace with actual API endpoint)
    setTimeout(function() {
      // Show success message
      const successDiv = document.getElementById('formSuccess');
      successDiv.classList.add('active');
      
      // Reset form
      form.reset();
      
      // Remove error states
      const errorGroups = form.querySelectorAll('.form-group.error');
      errorGroups.forEach(group => group.classList.remove('error'));

      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      // Track conversion (Google Analytics, Facebook Pixel, etc.)
      trackFormSubmission(data);

      // Optional: Send to backend
      // sendToBackend(data);
    }, 1500);
  });

  // Real-time validation
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });

    input.addEventListener('input', function() {
      if (this.parentElement.classList.contains('error')) {
        validateField(this);
      }
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const formGroup = field.closest('.form-group');
  const value = field.value.trim();
  let isValid = true;

  // Remove previous error
  formGroup.classList.remove('error');

  // Check if empty
  if (field.hasAttribute('required') && !value) {
    isValid = false;
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
    }
  }

  // URL validation
  if (field.type === 'url' && value) {
    try {
      new URL(value);
    } catch {
      isValid = false;
    }
  }

  // Phone validation (basic)
  if (field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
    }
  }

  // Add error class if invalid
  if (!isValid) {
    formGroup.classList.add('error');
  }

  return isValid;
}

function trackFormSubmission(data) {
  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'Contact',
      event_label: 'SEO Audit Request',
      value: 1
    });
  }

  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: 'SEO Audit Request',
      content_category: 'Contact Form'
    });
  }

  // Console log for development
  console.log('Form submitted:', data);
}

function sendToBackend(data) {
  // Replace with your actual API endpoint
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// ==================== NEWSLETTER FORM ====================
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      input.style.borderColor = '#ef4444';
      return;
    }

    // Show success state
    const button = form.querySelector('button');
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.background = '#22c55e';
    input.value = 'Thanks for subscribing!';
    input.disabled = true;

    // Reset after 3 seconds
    setTimeout(function() {
      input.value = '';
      input.disabled = false;
      button.innerHTML = '<i class="fas fa-paper-plane"></i>';
      button.style.background = '';
    }, 3000);

    // Track subscription
    if (typeof gtag !== 'undefined') {
      gtag('event', 'newsletter_subscribe', {
        event_category: 'Newsletter',
        event_label: email
      });
    }
  });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==================== LOADING OVERLAY ====================
function initLoadingOverlay() {
  const overlay = document.getElementById('loadingOverlay');
  if (!overlay) return;

  // Hide loading overlay when page is loaded
  window.addEventListener('load', function() {
    setTimeout(function() {
      overlay.classList.add('hidden');
      setTimeout(function() {
        overlay.style.display = 'none';
      }, 500);
    }, 500);
  });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });
}

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ==================== PERFORMANCE OPTIMIZATIONS ====================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// Preload critical images
function preloadImages() {
  const criticalImages = [
    // Add URLs of critical images here
  ];

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// ==================== ANALYTICS & TRACKING ====================

// Track scroll depth
let maxScroll = 0;
const scrollDepthThresholds = [25, 50, 75, 100];
const trackedDepths = [];

window.addEventListener('scroll', throttle(function() {
  const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  if (scrollPercentage > maxScroll) {
    maxScroll = scrollPercentage;
    
    scrollDepthThresholds.forEach(threshold => {
      if (maxScroll >= threshold && !trackedDepths.includes(threshold)) {
        trackedDepths.push(threshold);
        
        // Track with Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_depth', {
            event_category: 'Engagement',
            event_label: `${threshold}%`,
            value: threshold
          });
        }
      }
    });
  }
}, 1000));

// Track time on page
let startTime = Date.now();

window.addEventListener('beforeunload', function() {
  const timeOnPage = Math.round((Date.now() - startTime) / 1000);
  
  if (typeof gtag !== 'undefined') {
    gtag('event', 'time_on_page', {
      event_category: 'Engagement',
      value: timeOnPage
    });
  }
});

// Track button clicks
document.addEventListener('click', function(e) {
  const button = e.target.closest('.btn');
  if (button) {
    const buttonText = button.textContent.trim();
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'button_click', {
        event_category: 'CTA',
        event_label: buttonText
      });
    }
  }
});

// ==================== ERROR HANDLING ====================

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Global error:', e.error);
  
  // Track errors with analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      description: e.error.message,
      fatal: false
    });
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled promise rejection:', e.reason);
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c🚀 SEO Landing Page Loaded Successfully!', 'color: #FE5862; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Web Marlins', 'color: #172342; font-size: 14px;');
console.log('%cWebsite: https://webmarlins.com', 'color: #3b82f6; font-size: 12px;');


// Mobile Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      // Only on mobile (screen width < 768px)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.closest('.dropdown');
        dropdown.classList.toggle('active');
      }
    });
  });
});

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Year ----------
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Mobile Nav (smooth, accessible) ----------
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Reveal on Scroll ----------
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (!reduceMotion && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    // Reduced motion: show all immediately
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // ---------- Counters (Why section) ----------
  const counters = Array.from(document.querySelectorAll('.count'));
  const why = document.getElementById('why');

  const runCounter = (el) => {
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

  if (!reduceMotion && counters.length && why) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            counters.forEach(runCounter);
            cio.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    cio.observe(why);
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.target || '0'));
  }

  // ---------- Process Steps (progress fill) ----------
  const steps = document.querySelectorAll('.step');
  if (!reduceMotion && steps.length) {
    const stepIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const progress = entry.target.querySelector('.progress');
          if (progress) progress.style.height = '100%';
          stepIO.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );
    steps.forEach((s) => stepIO.observe(s));
  } else {
    steps.forEach((s) => {
      const p = s.querySelector('.progress');
      if (p) p.style.height = '100%';
    });
  }

  // ---------- Testimonials Carousel (auto + manual) ----------
  const carousel = document.getElementById('carousel');
  const tPrev = document.getElementById('tPrev');
  const tNext = document.getElementById('tNext');
  let tIndex = 0;
  let tTimer = null;

  function setCarousel(idx) {
    if (!carousel) return;
    const items = carousel.children.length || 1;
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
    tTimer = null;
  }

  if (tPrev) tPrev.addEventListener('click', () => { setCarousel(tIndex - 1); startAuto(); });
  if (tNext) tNext.addEventListener('click', () => { setCarousel(tIndex + 1); startAuto(); });
  startAuto();

  // ---------- Parallax Tilt (desktop, no touch) ----------
  const tilt = document.getElementById('heroTilt');
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (tilt && !reduceMotion && !isTouch) {
    tilt.addEventListener('mousemove', (e) => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    tilt.addEventListener('mouseleave', () => {
      tilt.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    });
  }

  // ---------- Toast (with timeout cleanup) ----------
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  let toastTimeout = null;

  function showToast(msg) {
    if (!toast || !toastText) return;
    if (toastTimeout) clearTimeout(toastTimeout);
    toastText.textContent = msg;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toastTimeout = null;
    }, 3200);
  }

  // ---------- Validation Helpers ----------
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const isNonEmpty = (v) => String(v).trim().length > 1;

  function validateForm(form) {
    let ok = true;
    const fields = Array.from(form.querySelectorAll('.field'));
    fields.forEach((f) => f.classList.remove('invalid'));

    const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
    inputs.forEach((input) => {
      const wrap = input.closest('.field');
      if (!wrap) return;

      const val = input.value;
      let valid = true;

      if (input.hasAttribute('required')) {
        if (input.type === 'email') valid = isEmail(val);
        else valid = isNonEmpty(val);
      }

      if (!valid) {
        ok = false;
        wrap.classList.add('invalid');
      }
    });

    return ok;
  }

  // ---------- Hero Form ----------
  const heroLeadForm = document.getElementById('heroLeadForm');
  if (heroLeadForm) {
    heroLeadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(heroLeadForm)) return;
      showToast('Thanks! We’ll share pricing + timeline shortly.');
      heroLeadForm.reset();
    });
  }

  // ---------- Contact Form ----------
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(leadForm)) return;
      showToast('Message sent! We’ll contact you soon.');
      leadForm.reset();
    });
  }
})();