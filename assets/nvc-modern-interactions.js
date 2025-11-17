/**
 * NVC Ultra Modern Interactions
 * Version: 2.0
 * Advanced JavaScript for modern UI/UX interactions
 */

(function() {
  'use strict';

  /* ============================================
     1. SMOOTH SCROLL WITH EASING
     ============================================ */

  class SmoothScroll {
    constructor() {
      this.init();
    }

    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href === '#') return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            const easeInOutCubic = (t) => {
              return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            };

            const animation = (currentTime) => {
              if (start === null) start = currentTime;
              const timeElapsed = currentTime - start;
              const run = easeInOutCubic(timeElapsed / duration) * distance + startPosition;
              window.scrollTo(0, run);
              if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            requestAnimationFrame(animation);
          }
        });
      });
    }
  }

  /* ============================================
     2. MAGNETIC BUTTON EFFECT
     ============================================ */

  class MagneticButton {
    constructor(element) {
      this.element = element;
      this.boundingRect = null;
      this.strength = 0.3;
      this.init();
    }

    init() {
      this.element.addEventListener('mouseenter', () => {
        this.boundingRect = this.element.getBoundingClientRect();
      });

      this.element.addEventListener('mousemove', (e) => {
        if (!this.boundingRect) return;

        const x = e.clientX - this.boundingRect.left;
        const y = e.clientY - this.boundingRect.top;
        const centerX = this.boundingRect.width / 2;
        const centerY = this.boundingRect.height / 2;

        const deltaX = (x - centerX) * this.strength;
        const deltaY = (y - centerY) * this.strength;

        this.element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
      });

      this.element.addEventListener('mouseleave', () => {
        this.element.style.transform = 'translate(0, 0) scale(1)';
        this.boundingRect = null;
      });
    }
  }

  /* ============================================
     3. PARALLAX SCROLL EFFECT
     ============================================ */

  class ParallaxScroll {
    constructor() {
      this.elements = document.querySelectorAll('[data-parallax]');
      this.init();
    }

    init() {
      if (this.elements.length === 0) return;

      let ticking = false;

      const updateParallax = () => {
        const scrolled = window.pageYOffset;

        this.elements.forEach(element => {
          const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
          const yPos = -(scrolled * speed);
          element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });

        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      });
    }
  }

  /* ============================================
     4. SCROLL REVEAL ANIMATIONS
     ============================================ */

  class ScrollReveal {
    constructor() {
      this.elements = document.querySelectorAll('[data-reveal]');
      this.observer = null;
      this.init();
    }

    init() {
      if (this.elements.length === 0) return;

      const options = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-reveal-delay') || 0;
            const animation = entry.target.getAttribute('data-reveal') || 'float';

            setTimeout(() => {
              entry.target.classList.add(`nvc-animate-${animation}`);
              entry.target.style.opacity = '1';
            }, delay);

            this.observer.unobserve(entry.target);
          }
        });
      }, options);

      this.elements.forEach(element => {
        element.style.opacity = '0';
        this.observer.observe(element);
      });
    }
  }

  /* ============================================
     5. FLOATING NAV ON SCROLL
     ============================================ */

  class FloatingNav {
    constructor() {
      this.nav = document.querySelector('.nvc-nav-modern, header');
      this.lastScroll = 0;
      this.init();
    }

    init() {
      if (!this.nav) return;

      let ticking = false;

      const updateNav = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
          this.nav.classList.add('scrolled');
        } else {
          this.nav.classList.remove('scrolled');
        }

        // Hide nav on scroll down, show on scroll up
        if (currentScroll > this.lastScroll && currentScroll > 200) {
          this.nav.style.transform = 'translateY(-100%)';
        } else {
          this.nav.style.transform = 'translateY(0)';
        }

        this.lastScroll = currentScroll;
        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateNav);
          ticking = true;
        }
      });
    }
  }

  /* ============================================
     6. TILT EFFECT FOR CARDS
     ============================================ */

  class TiltEffect {
    constructor(element) {
      this.element = element;
      this.maxTilt = 15;
      this.init();
    }

    init() {
      this.element.addEventListener('mouseenter', () => {
        this.element.style.transition = 'none';
      });

      this.element.addEventListener('mousemove', (e) => {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const tiltX = percentY * this.maxTilt;
        const tiltY = -percentX * this.maxTilt;

        this.element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
      });

      this.element.addEventListener('mouseleave', () => {
        this.element.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        this.element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    }
  }

  /* ============================================
     7. GRADIENT ANIMATION ON SCROLL
     ============================================ */

  class GradientAnimator {
    constructor() {
      this.elements = document.querySelectorAll('[data-gradient-animate]');
      this.init();
    }

    init() {
      if (this.elements.length === 0) return;

      this.elements.forEach(element => {
        element.style.backgroundSize = '200% 200%';
        element.style.animation = 'nvcGradientShift 3s ease infinite';
      });
    }
  }

  /* ============================================
     8. CURSOR FOLLOWER (Optional Enhancement)
     ============================================ */

  class CursorFollower {
    constructor() {
      this.cursor = null;
      this.cursorDot = null;
      this.init();
    }

    init() {
      // Create custom cursor elements
      this.cursor = document.createElement('div');
      this.cursor.className = 'nvc-cursor';
      this.cursor.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(139, 92, 246, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease, opacity 0.3s ease;
        opacity: 0;
      `;

      this.cursorDot = document.createElement('div');
      this.cursorDot.className = 'nvc-cursor-dot';
      this.cursorDot.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: rgba(139, 92, 246, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.05s ease, opacity 0.3s ease;
        opacity: 0;
      `;

      document.body.appendChild(this.cursor);
      document.body.appendChild(this.cursorDot);

      // Track mouse movement
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;
      let dotX = 0, dotY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        this.cursor.style.opacity = '1';
        this.cursorDot.style.opacity = '1';
      });

      document.addEventListener('mouseleave', () => {
        this.cursor.style.opacity = '0';
        this.cursorDot.style.opacity = '0';
      });

      // Smooth follow animation
      const animate = () => {
        // Cursor follows with delay
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        this.cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;

        // Dot follows immediately
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        this.cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;

        requestAnimationFrame(animate);
      };
      animate();

      // Expand cursor on hover over clickable elements
      document.querySelectorAll('a, button, [data-cursor-expand]').forEach(element => {
        element.addEventListener('mouseenter', () => {
          this.cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(1.5)`;
          this.cursor.style.borderColor = 'rgba(139, 92, 246, 0.8)';
        });

        element.addEventListener('mouseleave', () => {
          this.cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(1)`;
          this.cursor.style.borderColor = 'rgba(139, 92, 246, 0.5)';
        });
      });
    }
  }

  /* ============================================
     9. IMAGE ZOOM ON HOVER
     ============================================ */

  class ImageZoom {
    constructor() {
      this.images = document.querySelectorAll('[data-zoom]');
      this.init();
    }

    init() {
      this.images.forEach(img => {
        const wrapper = img.parentElement;
        wrapper.style.overflow = 'hidden';
        wrapper.style.borderRadius = 'var(--nvc-radius-2xl, 1.5rem)';

        img.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

        wrapper.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.15)';
        });

        wrapper.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)';
        });
      });
    }
  }

  /* ============================================
     10. LOADING ANIMATION
     ============================================ */

  class LoadingAnimation {
    constructor() {
      this.init();
    }

    init() {
      window.addEventListener('load', () => {
        // Fade in elements on page load
        document.querySelectorAll('[data-load-fade]').forEach((element, index) => {
          setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            requestAnimationFrame(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            });
          }, index * 100);
        });
      });
    }
  }

  /* ============================================
     11. MODERN DROPDOWN MENU
     ============================================ */

  class ModernDropdown {
    constructor() {
      this.dropdowns = document.querySelectorAll('[data-dropdown]');
      this.init();
    }

    init() {
      this.dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('[data-dropdown-trigger]');
        const menu = dropdown.querySelector('[data-dropdown-menu]');

        if (!trigger || !menu) return;

        // Style the menu
        menu.style.cssText = `
          opacity: 0;
          transform: translateY(-10px);
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
        `;

        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const isOpen = menu.style.opacity === '1';

          if (isOpen) {
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-10px)';
            menu.style.pointerEvents = 'none';
          } else {
            menu.style.opacity = '1';
            menu.style.transform = 'translateY(0)';
            menu.style.pointerEvents = 'auto';
          }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
          if (!dropdown.contains(e.target)) {
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-10px)';
            menu.style.pointerEvents = 'none';
          }
        });
      });
    }
  }

  /* ============================================
     12. NUMBER COUNTER ANIMATION
     ============================================ */

  class CounterAnimation {
    constructor() {
      this.counters = document.querySelectorAll('[data-counter]');
      this.init();
    }

    init() {
      if (this.counters.length === 0) return;

      const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-counter'));
        const duration = parseInt(element.getAttribute('data-counter-duration')) || 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            element.textContent = target;
          }
        };

        updateCounter();
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      this.counters.forEach(counter => observer.observe(counter));
    }
  }

  /* ============================================
     INITIALIZATION
     ============================================ */

  document.addEventListener('DOMContentLoaded', () => {
    // Core features
    new SmoothScroll();
    new FloatingNav();
    new ScrollReveal();
    new LoadingAnimation();
    new ParallaxScroll();
    new GradientAnimator();
    new ImageZoom();
    new ModernDropdown();
    new CounterAnimation();

    // Initialize magnetic buttons
    document.querySelectorAll('.nvc-btn-magnetic, [data-magnetic]').forEach(btn => {
      new MagneticButton(btn);
    });

    // Initialize tilt effect on cards
    document.querySelectorAll('.nvc-card-modern, [data-tilt]').forEach(card => {
      new TiltEffect(card);
    });

    // Custom cursor (optional - only for desktop)
    if (window.innerWidth > 1024 && !('ontouchstart' in window)) {
      // Uncomment to enable custom cursor
      // new CursorFollower();
    }

    // Log initialization
    console.log('🎨 NVC Ultra Modern Interactions initialized');
  });

  /* ============================================
     UTILITIES
     ============================================ */

  // Debounce utility
  window.nvcDebounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Throttle utility
  window.nvcThrottle = function(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

})();
