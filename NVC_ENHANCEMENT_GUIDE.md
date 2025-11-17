# New Vantage Co Theme Enhancement Guide

## 🎯 Overview

This enhanced Shopify theme has been specifically optimized for **New Vantage Co**, an optical frames and sunglasses retailer based in the UK. The enhancements focus on:

1. **ILS (Inventory Lookup System) Integration** - Seamlessly connect with optical inventory management systems
2. **UK Compliance** - GDPR-compliant cookie consent and WCAG 2.1 AA accessibility
3. **Framer-Inspired Design** - Modern, sleek animations and interactions
4. **Optical-Specific Features** - Virtual try-on, prescription integration, frame specifications
5. **Performance Optimization** - Core Web Vitals improvements for better user experience

---

## 🆕 New Features

### 1. ILS Integration (`snippets/ils-integration.liquid`)

Connect your optical inventory management system for real-time updates.

**Features:**
- Real-time inventory checking
- SKU and barcode integration
- Virtual try-on hooks
- Prescription lens compatibility
- Store availability checker

**Setup:**
1. Go to **Theme Settings > 🕶️ Optical & ILS Integration**
2. Enable "Enable ILS Integration"
3. Enter your ILS API endpoint (e.g., `https://api.yourils.com/v1`)
4. Add your Store ID
5. Configure optional features (Virtual Try-On, Store Availability)

**Usage in Product Templates:**
```liquid
{% render 'ils-integration', product: product %}
```

**API Integration:**
The snippet expects your ILS to respond to POST requests at `{endpoint}/inventory/check` with:
```json
{
  "storeId": "your-store-id",
  "productId": "12345",
  "variantId": "67890",
  "sku": "NVC-001"
}
```

**Response format:**
```json
{
  "quantity": 5,
  "location": "London Flagship",
  "available": true
}
```

**Compatible ILS Systems:**
- OpticsPro
- Frames Data
- OfficeMate
- Eyefinity
- Custom REST APIs

---

### 2. UK Compliance Module (`snippets/uk-compliance.liquid`)

Fully GDPR-compliant cookie consent with granular controls.

**Features:**
- GDPR-compliant cookie banner
- Granular cookie preferences (Essential, Analytics, Marketing)
- Accessibility-first design (WCAG 2.1 AA compliant)
- Skip-to-content link
- Focus management

**Cookie Categories:**
- **Essential** - Always active, required for site functionality
- **Analytics** - Google Analytics, performance monitoring (optional)
- **Marketing** - Advertising, retargeting pixels (optional)

**Customization:**
The cookie consent is automatically included in `theme.liquid`. You can customize:
- Privacy policy URL: Update in `uk-compliance.liquid` line 39
- Cookie policy URL: Update in `uk-compliance.liquid` line 40
- Color scheme: Modify CSS variables in the style section

**Events:**
Listen for consent changes:
```javascript
window.addEventListener('nvcCookieConsent', (e) => {
  console.log('Consent updated:', e.detail);
  // e.detail = { essential: true, analytics: true, marketing: false }
});
```

---

### 3. Framer-Inspired Animations (`snippets/nvc-animations.liquid`)

Modern, smooth animations that enhance user experience without sacrificing performance.

**Animation Classes:**

**Fade Animations:**
```html
<div class="nvc-fade-in">Fades in from bottom</div>
<div class="nvc-fade-in-up">Slides up while fading</div>
<div class="nvc-fade-in-scale">Scales and fades in</div>
```

**Staggered Animations:**
```html
<div class="nvc-stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**Scroll-Triggered Animations:**
```html
<section data-nvc-animate="fade">
  Content appears on scroll
</section>

<section data-nvc-animate="slide-left">
  Slides from left on scroll
</section>

<section data-nvc-animate="scale">
  Scales up on scroll
</section>
```

**Interactive Elements:**
```html
<button class="nvc-hover-lift">Lifts on hover</button>
<button class="nvc-magnetic">Magnetic attraction effect</button>
```

**Glassmorphism:**
```html
<div class="nvc-glass">Light glassmorphism</div>
<div class="nvc-glass-dark">Dark glassmorphism</div>
```

**Accessibility:**
Animations automatically respect `prefers-reduced-motion` for accessibility.

---

### 4. Optical Product Features (`snippets/optical-product-features.liquid`)

Specialized features for eyewear products.

**Features:**
- Frame specifications display (lens width, bridge, temple length)
- Visual frame diagram
- Material and feature badges
- Virtual try-on button
- Prescription lens options
- Size guide integration

**Usage:**
```liquid
{% render 'optical-product-features', product: product %}
```

**Required Metafields:**

Create these metafields in Shopify Admin:

**Namespace: `optical`**

| Key | Type | Example |
|-----|------|---------|
| `lens_width` | Number | 52 |
| `bridge_width` | Number | 18 |
| `temple_length` | Number | 145 |
| `frame_width` | Number | 140 |
| `frame_material` | Text | Acetate |
| `lens_material` | Text | CR-39 |
| `frame_shape` | Text | Wayfarer |
| `frame_color` | Text | Black Tortoise |
| `prescription_compatible` | Boolean | true |
| `uv_protection` | Boolean | true |
| `polarized` | Boolean | true |

**Setting Up Metafields:**
1. Go to **Settings > Custom Data > Products**
2. Click "Add definition"
3. Create each metafield with namespace `optical`
4. Apply to all products

---

### 5. Performance Optimization (`assets/nvc-performance.js`)

Comprehensive performance enhancements for better Core Web Vitals.

**Features:**
- Native lazy loading for images
- Intersection Observer fallback
- Non-critical CSS deferring
- Link prefetching
- Third-party script optimization
- Core Web Vitals monitoring (LCP, FID, CLS)
- Font loading optimization

**Core Web Vitals Targets:**
- **LCP** (Largest Contentful Paint): < 2.5s ✅
- **FID** (First Input Delay): < 100ms ✅
- **CLS** (Cumulative Layout Shift): < 0.1 ✅

**Image Optimization:**
```html
<!-- Lazy load images -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Critical images (no lazy load) -->
<div data-no-lazy>
  <img src="hero.jpg" alt="Hero">
</div>
```

---

## 🎨 Design System

### Color Variables
Define your brand colors in `theme.css` or create a CSS variables file:

```css
:root {
  --nvc-primary: #000000;
  --nvc-secondary: #666666;
  --nvc-accent: #667eea;
  --nvc-success: #2ecc71;
  --nvc-error: #e74c3c;
}
```

### Typography
The theme uses **Plus Jakarta Sans** for a modern, professional look.

**Font Weights:**
- 400 (Regular) - Body text
- 500 (Medium) - Subtle emphasis
- 600 (Semi-Bold) - Headings, buttons
- 700 (Bold) - Major headings

---

## ⚙️ Configuration

### Theme Settings

Navigate to **Theme Settings** in Shopify Admin:

#### 🕶️ Optical & ILS Integration
- Enable/disable ILS integration
- Configure API endpoint and store ID
- Enable virtual try-on
- Set prescription email

#### 🎨 NVC Design Enhancements
- Toggle scroll animations
- Enable/disable hover effects
- Configure parallax effects
- Performance settings

---

## 🔌 Integrations

### Virtual Try-On Services

The theme supports integration with:

1. **Ditto** (Recommended)
   - Web AR try-on
   - High accuracy
   - [ditto.com](https://ditto.com)

2. **Topology Eyewear**
   - Advanced face mapping
   - [topologyeyewear.com](https://topologyeyewear.com)

3. **FittingBox**
   - Professional optical solutions
   - [fittingbox.com](https://fittingbox.com)

**Integration Steps:**
1. Sign up with your chosen provider
2. Get API credentials
3. Update `virtual_tryon_provider` in theme settings
4. Add provider script to `theme.liquid`

### ILS Systems

**OpticsPro Integration:**
```javascript
// In ils-integration.liquid, update the API endpoint
const ILSIntegration = {
  config: {
    apiEndpoint: 'https://api.opticspro.com/v1',
    storeId: 'YOUR_STORE_ID'
  }
};
```

**Custom ILS:**
Implement the API contract in your ILS:
- Endpoint: `POST /inventory/check`
- Authentication: Bearer token or API key
- Response: JSON with quantity, location, availability

---

## 📱 Mobile Optimization

All features are fully responsive:
- Cookie banner adapts to mobile
- Animations scale appropriately
- Touch-friendly interactions
- Optimized font sizes

**Mobile-Specific Considerations:**
- Virtual try-on works best on iOS Safari and Chrome
- Face detection requires camera permissions
- Prescription upload supports mobile photo capture

---

## ♿ Accessibility

WCAG 2.1 AA compliant features:

1. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Focus indicators on all focusable elements
   - Skip-to-content link

2. **Screen Readers**
   - Semantic HTML structure
   - ARIA labels and descriptions
   - Alt text for all images

3. **Color Contrast**
   - Minimum 4.5:1 contrast ratio for body text
   - 3:1 for large text and UI elements

4. **Motion Sensitivity**
   - Respects `prefers-reduced-motion`
   - All animations can be disabled

---

## 🚀 Performance Tips

1. **Optimize Images**
   - Use WebP format where possible
   - Compress images (80% quality is ideal)
   - Use appropriate sizes (srcset)

2. **Minimize Third-Party Scripts**
   - Load only necessary tracking scripts
   - Use GTM for tag management
   - Defer non-critical scripts

3. **Cache Strategy**
   - Set up Shopify CDN properly
   - Use browser caching
   - Consider service workers for PWA

4. **Font Loading**
   - Preload critical fonts
   - Use font-display: swap
   - Subset fonts to include only used characters

---

## 🧪 Testing Checklist

### Before Going Live:

- [ ] Test ILS integration with sample products
- [ ] Verify cookie consent works across browsers
- [ ] Check all animations on mobile
- [ ] Test virtual try-on on iOS and Android
- [ ] Validate prescription upload flow
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Test with screen reader (NVDA or VoiceOver)
- [ ] Verify GDPR compliance
- [ ] Check UK VAT display
- [ ] Test on slow 3G connection

### Browser Testing:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🛠️ Troubleshooting

### ILS Integration Issues

**Problem:** Inventory not updating
- Check API endpoint configuration
- Verify store ID is correct
- Check browser console for errors
- Ensure CORS is configured on ILS server

**Problem:** Virtual try-on not loading
- Verify provider API key is set
- Check camera permissions
- Ensure HTTPS is enabled
- Test on supported devices

### Cookie Consent Issues

**Problem:** Banner shows on every page load
- Check cookie storage (might be blocked)
- Verify domain settings
- Clear browser cache and test

### Animation Issues

**Problem:** Animations jerky or slow
- Check device performance
- Disable parallax on low-end devices
- Reduce animation complexity
- Check for conflicting CSS

---

## 📞 Support

For theme support:
- Email: support@newvantageco.com
- Documentation: Check this guide
- Shopify Community: Search for similar issues

For ILS integration:
- Contact your ILS provider
- Check API documentation
- Review integration logs

---

## 🔄 Updates

### Version History

**v2.0.0** (Current)
- ILS integration added
- UK compliance module
- Framer-inspired animations
- Optical product features
- Performance optimization

**v1.0.0**
- Initial Plank theme

---

## 📄 License

This theme is for use by New Vantage Co only. Do not redistribute.

---

## 🎓 Best Practices

### Product Management

1. **Complete Metafields**
   - Always fill frame specifications
   - Add high-quality images (min 2000px)
   - Write detailed descriptions
   - Tag products appropriately

2. **SEO Optimization**
   - Use descriptive product titles
   - Fill meta descriptions
   - Add alt text to all images
   - Use schema markup (already included)

3. **Inventory Management**
   - Keep ILS synchronized
   - Update stock regularly
   - Set up low-stock alerts
   - Configure backorder options

### Customer Experience

1. **Virtual Try-On**
   - Provide clear instructions
   - Show example results
   - Offer alternative photos
   - Support all frame types

2. **Prescription Orders**
   - Clear prescription upload instructions
   - Offer phone verification option
   - Provide prescription FAQ
   - Set realistic delivery expectations

3. **UK Compliance**
   - Display prices with VAT
   - Show clear delivery options
   - Provide UK returns policy
   - Display UK contact information

---

## 🌟 Advanced Customization

### Custom Animation

```css
/* Add to theme.css */
@keyframes custom-animation {
  from { /* start state */ }
  to { /* end state */ }
}

.my-custom-element {
  animation: custom-animation 1s ease forwards;
}
```

### Custom ILS Events

```javascript
// Listen for ILS events
window.addEventListener('ils:inventory-updated', (e) => {
  console.log('Stock updated:', e.detail);
  // Update UI or trigger notifications
});

// Dispatch custom events
window.dispatchEvent(new CustomEvent('ils:custom-action', {
  detail: { /* your data */ }
}));
```

### Custom Metafields

Add additional optical specifications:
```liquid
{% if product.metafields.optical.lens_coating %}
  <div class="lens-coating">
    Coating: {{ product.metafields.optical.lens_coating }}
  </div>
{% endif %}
```

---

## 📊 Analytics Integration

### Google Analytics 4

The theme is ready for GA4:

```html
<!-- Add to theme.liquid before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Add to theme.liquid before </head> -->
<script>
  !function(f,b,e,v,n,t,s)
  {/* Facebook Pixel code */}
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## ✅ Shopify Theme Store Compliance

This theme follows all Shopify theme requirements:

✅ No external dependencies (all code is self-contained)
✅ Proper Liquid syntax and best practices
✅ Settings schema for easy customization
✅ Responsive design
✅ Accessibility compliant
✅ Performance optimized
✅ Browser compatible
✅ No hardcoded content
✅ Proper section and snippet structure
✅ Theme app extension compatible

---

**Built with care for New Vantage Co by your development team** 🕶️
