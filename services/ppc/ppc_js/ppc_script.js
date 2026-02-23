// ==========================================
// PPC SERVICES PAGE - JAVASCRIPT
// WebMarlins Brand
// ==========================================

(function() {
  'use strict';

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  // Debounce function for performance
  function debounce(func, wait = 100) {
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

  // ==========================================
  // SCROLL REVEAL ANIMATIONS
  // ==========================================
  
  function initScrollReveal() {
    const revealElements = $$('.reveal');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          // Optional: unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }

  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  
  function initMobileMenu() {
    const hamburger = $('#hamburger');
    const navLinks = $('#navLinks');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      
      hamburger.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
      
      // Toggle icon
      const icon = hamburger.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  }

  // ==========================================
  // HERO CONTACT FORM
  // ==========================================
  
  function initHeroForm() {
    const form = $('#heroContactForm');
    if (!form) return;

    const msgElement = form.querySelector('.form-msg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Basic validation
      if (!data.name || !data.email || !data.website || !data.budget) {
        showMessage(msgElement, 'Please fill in all required fields', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showMessage(msgElement, 'Please enter a valid email address', 'error');
        return;
      }

      // URL validation
      const urlRegex = /^https?:\/\/.+/;
      if (!urlRegex.test(data.website)) {
        showMessage(msgElement, 'Please enter a valid website URL (include http:// or https://)', 'error');
        return;
      }

      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Simulate API call (replace with actual endpoint)
      try {
        await simulateAPICall(data);
        
        showMessage(msgElement, '✓ Thank you! We\'ll send your free audit within 24 hours.', 'success');
        form.reset();
        
        // Optional: Track conversion
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submission', {
            'event_category': 'PPC Audit',
            'event_label': 'Hero Form'
          });
        }
      } catch (error) {
        showMessage(msgElement, 'Something went wrong. Please try again.', 'error');
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }

  function showMessage(element, message, type) {
    element.textContent = message;
    element.style.color = type === 'error' ? '#FE5862' : '#10b981';
    
    // Auto-clear after 5 seconds
    setTimeout(() => {
      element.textContent = '';
    }, 5000);
  }

  function simulateAPICall(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Form submitted:', data);
        // In production, replace with:
        // fetch('/api/submit-audit-request', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // })
        resolve();
      }, 1500);
    });
  }

  // ==========================================
  // TESTIMONIALS CAROUSEL
  // ==========================================
  
  function initTestimonialsCarousel() {
    const track = $('#testimonialsTrack');
    const prevBtn = $('#prevBtn');
    const nextBtn = $('#nextBtn');
    const dotsContainer = $('#carouselDots');

    if (!track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    const totalCards = cards.length;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateCarousel() {
      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });

      // Update button states
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
      nextBtn.style.opacity = currentIndex === totalCards - 1 ? '0.5' : '1';
      prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
      nextBtn.style.pointerEvents = currentIndex === totalCards - 1 ? 'none' : 'auto';
    }

    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, totalCards - 1));
      updateCarousel();
    }

    function nextSlide() {
      if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateCarousel();
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-play carousel
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });

    track.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', (e) => {
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
      }
    }

    // Initialize
    updateCarousel();
  }

  // ==========================================
  // FAQ ACCORDION
  // ==========================================
  
  function initFAQ() {
    const faqItems = $$('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items (optional: remove to allow multiple open)
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherQuestion = otherItem.querySelector('.faq-question');
            otherQuestion.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
        question.setAttribute('aria-expanded', !isActive);
      });
    });
  }

  // ==========================================
  // FOOTER FORM
  // ==========================================
  
  function initFooterForm() {
    const form = $('.ft-form');
    if (!form) return;

    const input = form.querySelector('input');
    const msg = form.querySelector('.ft-msg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = (input.value || '').trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        input.style.borderColor = 'rgba(254,88,98,.75)';
        msg.textContent = 'Please enter a valid email';
        msg.style.color = 'rgba(254,88,98,.9)';
        return;
      }

      // Show loading state
      const submitBtn = form.querySelector('button');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        msg.textContent = '✓ Thanks! Check your email for your audit.';
        msg.style.color = 'rgba(16,185,129,.9)';
        input.value = '';
        input.style.borderColor = 'rgba(255,255,255,.16)';
        
        // Track conversion
        if (typeof gtag !== 'undefined') {
          gtag('event', 'newsletter_signup', {
            'event_category': 'Footer',
            'event_label': 'Quick Audit'
          });
        }
      } catch (error) {
        msg.textContent = 'Error. Please try again.';
        msg.style.color = 'rgba(254,88,98,.9)';
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }

  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  
  function initSmoothScroll() {
    const links = $$('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Skip empty or just '#' links
        if (!href || href === '#') return;

        const target = $(href);
        if (!target) return;

        e.preventDefault();

        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);

        // Close mobile menu if open
        const navLinks = $('#navLinks');
        const hamburger = $('#hamburger');
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          const icon = hamburger.querySelector('i');
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // ==========================================
  // STICKY HEADER ON SCROLL
  // ==========================================
  
  function initStickyHeader() {
    const header = $('header');
    if (!header) return;

    let lastScroll = 0;

    const handleScroll = debounce(() => {
      const currentScroll = window.pageYOffset;

      // Add shadow on scroll
      if (currentScroll > 10) {
        header.style.boxShadow = '0 4px 12px rgba(23,35,66,.1)';
      } else {
        header.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }

  // ==========================================
  // YEAR IN FOOTER
  // ==========================================
  
  function updateFooterYear() {
    const yearElement = $('#ftYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // ==========================================
  // ANIMATE STATS ON SCROLL
  // ==========================================
  
  function initStatsAnimation() {
    const statNumbers = $$('.stat-number, .stat-num, .result-value');
    
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateValue(entry.target);
        }
      });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
  }

  function animateValue(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasDollar = text.includes('$');
    const hasX = text.includes('x');
    const hasPlus = text.includes('+');
    const hasMinus = text.includes('-');
    
    // Extract number
    let numStr = text.replace(/[^0-9.]/g, '');
    const num = parseFloat(numStr);
    
    if (isNaN(num)) return;

    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;

      if (step >= steps) {
        current = num;
        clearInterval(timer);
      }

      let displayValue = current.toFixed(num % 1 !== 0 ? 1 : 0);
      
      // Add prefixes/suffixes
      if (hasMinus) displayValue = '-' + displayValue;
      if (hasPlus) displayValue = '+' + displayValue;
      if (hasDollar) displayValue = '$' + displayValue;
      if (hasX) displayValue += 'x';
      if (hasPercent) displayValue += '%';
      
      element.textContent = displayValue;
    }, duration / steps);
  }

  // ==========================================
  // PARALLAX EFFECT FOR HERO
  // ==========================================
  
  function initParallax() {
    const hero = $('.hero');
    if (!hero) return;

    const handleScroll = debounce(() => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      hero.style.opacity = 1 - (scrolled / 800);
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }

  // ==========================================
  // FORM INPUT ANIMATIONS
  // ==========================================
  
  function initFormAnimations() {
    const inputs = $$('.form-group input, .form-group select');
    
    inputs.forEach(input => {
      // Add floating label effect
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });

      // Check on load
      if (input.value) {
        input.parentElement.classList.add('focused');
      }
    });
  }

  // ==========================================
  // LAZY LOAD IMAGES
  // ==========================================
  
  function initLazyLoad() {
    const images = $$('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // ==========================================
  // TRACK EXTERNAL LINK CLICKS
  // ==========================================
  
  function initLinkTracking() {
    const externalLinks = $$('a[target="_blank"]');
    
    externalLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'click', {
            'event_category': 'External Link',
            'event_label': link.href
          });
        }
      });
    });
  }

  // ==========================================
  // ADD TO CALENDAR FUNCTIONALITY
  // ==========================================
  
  function generateCalendarLink(title, details, startDate) {
    const start = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const end = new Date(startDate.getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&dates=${start}/${end}`;
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initScrollReveal();
    initMobileMenu();
    initHeroForm();
    initTestimonialsCarousel();
    initFAQ();
    initFooterForm();
    initSmoothScroll();
    initStickyHeader();
    updateFooterYear();
    initStatsAnimation();
    // initParallax(); // Uncomment if you want parallax effect
    initFormAnimations();
    initLazyLoad();
    initLinkTracking();

    console.log('✓ WebMarlins PPC Services page initialized');
  }

  // Start initialization
  init();

  // ==========================================
  // EXPORT FOR POTENTIAL MODULE USAGE
  // ==========================================
  
  window.WebMarlins = {
    init,
    initScrollReveal,
    initTestimonialsCarousel,
    initFAQ
  };

})();


//footer------------------


document.addEventListener("DOMContentLoaded", function () {

  /* ===== DROPDOWN (ALL COLUMNS MOBILE) ===== */
  const dropdowns = document.querySelectorAll(".foot-dropdown");

  dropdowns.forEach(function(dropdown){

    const toggle = dropdown.querySelector(".foot-toggle");

    toggle.addEventListener("click", function(){

      if (window.innerWidth <= 768) {
        dropdown.classList.toggle("active");
      }

    });

  });

  /* ===== EMAIL VALIDATION ===== */
  const form = document.querySelector(".foot-form");
  const emailInput = document.getElementById("footEmail");
  const message = document.querySelector(".foot-msg");

  if(form){
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailValue = emailInput.value.trim();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!re.test(emailValue)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
      }

      message.style.color = "lightgreen";
      message.textContent = "Thank you! We'll contact you soon.";
      emailInput.value = "";
    });
  }

});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", ()=>{
  navMenu.classList.toggle("active");
});