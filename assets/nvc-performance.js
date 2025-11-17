/**
 * New Vantage Co - Performance Optimization Module
 * Enhances Core Web Vitals and page speed
 */

(function() {
  'use strict';
  
  // Debug mode - set to false in production
  const DEBUG_MODE = false;
  
  const NVCPerformance = {
    
    /**
     * Initialize all performance optimizations
     */
    init() {
      this.optimizeImages();
      this.deferNonCriticalCSS();
      this.prefetchLinks();
      this.optimizeThirdPartyScripts();
      this.monitorCoreWebVitals();
    },
    
    /**
     * Optimize images with lazy loading and responsive sizing
     */
    optimizeImages() {
      // Native lazy loading for modern browsers
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
          if (!img.closest('[data-no-lazy]')) {
            img.loading = 'lazy';
          }
        });
      }
      
      // Intersection Observer for older browsers
      else {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
              }
              if (img.dataset.srcset) {
                img.srcset = img.dataset.srcset;
              }
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
      }
      
      // Decode images asynchronously
      const decodeImages = document.querySelectorAll('img[data-decode]');
      decodeImages.forEach(img => {
        if ('decode' in img) {
          img.decode().catch(() => {
            // Fallback to regular loading
          });
        }
      });
    },
    
    /**
     * Defer non-critical CSS
     */
    deferNonCriticalCSS() {
      const deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
      deferredStyles.forEach(link => {
        link.addEventListener('load', function() {
          this.rel = 'stylesheet';
        });
      });
    },
    
    /**
     * Prefetch links for faster navigation
     */
    prefetchLinks() {
      if (!('IntersectionObserver' in window)) return;
      
      const linkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const link = entry.target;
            const href = link.href;
            
            if (href && !link.dataset.prefetched) {
              const prefetchLink = document.createElement('link');
              prefetchLink.rel = 'prefetch';
              prefetchLink.href = href;
              document.head.appendChild(prefetchLink);
              link.dataset.prefetched = 'true';
            }
          }
        });
      }, {
        rootMargin: '100px'
      });
      
      // Prefetch product links
      const productLinks = document.querySelectorAll('a[href*="/products/"]');
      productLinks.forEach(link => linkObserver.observe(link));
    },
    
    /**
     * Optimize third-party scripts
     */
    optimizeThirdPartyScripts() {
      // Delay third-party scripts until user interaction
      const delayedScripts = document.querySelectorAll('script[data-delay]');
      
      const loadDelayedScripts = () => {
        delayedScripts.forEach(script => {
          if (!script.dataset.loaded) {
            const newScript = document.createElement('script');
            newScript.src = script.dataset.src || script.src;
            if (script.type) newScript.type = script.type;
            if (script.async) newScript.async = true;
            if (script.defer) newScript.defer = true;
            document.body.appendChild(newScript);
            script.dataset.loaded = 'true';
          }
        });
        
        // Remove listeners after first interaction
        document.removeEventListener('scroll', loadDelayedScripts);
        document.removeEventListener('mousemove', loadDelayedScripts);
        document.removeEventListener('touchstart', loadDelayedScripts);
        document.removeEventListener('click', loadDelayedScripts);
      };
      
      // Load on first user interaction
      document.addEventListener('scroll', loadDelayedScripts, { once: true, passive: true });
      document.addEventListener('mousemove', loadDelayedScripts, { once: true, passive: true });
      document.addEventListener('touchstart', loadDelayedScripts, { once: true, passive: true });
      document.addEventListener('click', loadDelayedScripts, { once: true });
      
      // Fallback: load after 5 seconds if no interaction
      setTimeout(loadDelayedScripts, 5000);
    },
    
    /**
     * Monitor Core Web Vitals
     */
    monitorCoreWebVitals() {
      if (!('PerformanceObserver' in window)) return;
      
      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (DEBUG_MODE) console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
          
          // Send to analytics if needed
          if (window.gtag) {
            gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
              event_category: 'Web Vitals'
            });
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        if (DEBUG_MODE) console.warn('LCP monitoring not available');
      }
      
      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (DEBUG_MODE) console.log('FID:', entry.processingStart - entry.startTime);
            
            if (window.gtag) {
              gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: 'Web Vitals'
              });
            }
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        if (DEBUG_MODE) console.warn('FID monitoring not available');
      }
      
      // Cumulative Layout Shift (CLS)
      try {
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
              if (DEBUG_MODE) console.log('CLS:', clsScore);
            }
          });
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        
        // Report CLS on page unload
        window.addEventListener('beforeunload', () => {
          if (window.gtag) {
            gtag('event', 'web_vitals', {
              name: 'CLS',
              value: Math.round(clsScore * 1000),
              event_category: 'Web Vitals'
            });
          }
        });
      } catch (e) {
        if (DEBUG_MODE) console.warn('CLS monitoring not available');
      }
    },
    
    /**
     * Resource hints for faster loading
     */
    addResourceHints() {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://cdn.shopify.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://cdn.shopify.com', crossorigin: true },
      ];
      
      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }
  };
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => NVCPerformance.init());
  } else {
    NVCPerformance.init();
  }
  
  // Expose for debugging
  window.NVCPerformance = NVCPerformance;
  
})();

/**
 * Service Worker Registration for PWA capabilities (optional)
 */
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

/**
 * Font loading optimization
 */
if ('fonts' in document) {
  // Load critical fonts
  const criticalFonts = [
    new FontFace('Plus Jakarta Sans', 'url(https://fonts.gstatic.com/s/plusjakartasans/v7/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d07t5Pg.woff2)', {
      weight: '400',
      style: 'normal'
    }),
    new FontFace('Plus Jakarta Sans', 'url(https://fonts.gstatic.com/s/plusjakartasans/v7/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7t5Pg.woff2)', {
      weight: '600',
      style: 'normal'
    })
  ];
  
  Promise.all(criticalFonts.map(font => {
    return font.load().then(loadedFont => {
      document.fonts.add(loadedFont);
    }).catch(() => {
      // Fallback to system fonts
    });
  })).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}
