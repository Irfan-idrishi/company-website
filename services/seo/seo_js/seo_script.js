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
