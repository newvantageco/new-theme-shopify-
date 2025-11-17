# NVC Advanced Theme

**New Vantage Co - Advanced Shopify Theme for Optical Retail**

🎬 **Ships in Full Glory - All Features Enabled by Default!**

A complete, production-ready Shopify theme specifically designed for optical frames and sunglasses retail. Every enhancement is **pre-configured and working** from installation - just upload, preview, and customize to your needs!

## 🚀 Ready Out of the Box

✅ **All features enabled by default**  
✅ **Demo content included** - See everything in action immediately  
✅ **Zero configuration needed** - Works perfectly on first install  
✅ **Fully customizable** - Disable what you don't need  
✅ **Production-ready** - Launch when you're ready  

Perfect for merchants who want to **see capabilities first, then customize**!

---

## 🎯 Features

### Core Enhancements
- ✅ **Framer-Inspired Animations** - Smooth, professional micro-interactions
- ✅ **UK Compliance** - GDPR cookie consent & WCAG 2.1 AA accessibility
- ✅ **Performance Optimized** - Core Web Vitals monitoring, lazy loading, deferred scripts
- ✅ **ILS Integration Ready** - Real-time inventory sync with optical management systems
- ✅ **Optical Product Features** - Frame specifications, virtual try-on hooks, prescription integration

### Technical Stack
- **Liquid** templating (Shopify-native)
- **Vanilla JavaScript** (no dependencies)
- **Modern CSS** (Flexbox, Grid, CSS Variables)
- **Intersection Observer API** for scroll animations
- **Performance API** for Core Web Vitals monitoring

---

## 📦 What's Included

### Auto-Active Features (Work Immediately):
1. **Cookie Consent Banner** - GDPR-compliant with granular controls
2. **Modern Animations** - Scroll-triggered, hover effects, smooth transitions
3. **Performance Optimization** - Image lazy loading, font preloading, script deferring
4. **Accessibility Features** - Keyboard navigation, screen reader support, skip links
5. **Mobile Optimization** - Fully responsive, touch-friendly, optimized

### Optional Features (Add When Ready):
1. **ILS Integration** - Real-time inventory from optical management systems
2. **Optical Product Features** - Frame specs, virtual try-on, prescription options
3. **Store Availability** - Multi-location inventory checking
4. **Virtual Try-On** - Integration hooks for Ditto, Topology, FittingBox

---

## 🎬 Demo Mode - See Everything Working!

This theme **ships with demo mode enabled** so you can see all features in action immediately:

### What You Get Out of the Box:
```
✅ Virtual Try-On Demo - Working AR interface with sample integration
✅ ILS Integration Demo - Simulated real-time inventory checks
✅ Sample Frame Specifications - Pre-filled optical metafields
✅ Prescription Upload Demo - Functional upload interface
✅ Store Availability Demo - Multi-location stock checker
✅ All Animations Active - Framer-inspired effects everywhere
✅ Demo Banner - Helpful indicator for merchants (dismissible)
```

### Demo Settings (Pre-Configured):
```json
{
  "enable_demo_content": true,
  "enable_ils_integration": true,
  "ils_api_endpoint": "https://demo.ils-api.com/v1",
  "ils_store_id": "DEMO-NVC-001",
  "enable_virtual_tryon": true,
  "virtual_tryon_provider": "ditto",
  "enable_store_availability": true,
  "enable_prescription_upload": true,
  "prescription_email": "prescriptions@newvantageco.com"
}
```

### Switching to Production:
When ready to launch with real data:
1. Go to **Theme Customizer** → **Optical & ILS Integration**
2. Turn **OFF** "Show Demo Content & Examples"
3. Update API endpoints with your real credentials
4. Add real product metafields
5. Configure real virtual try-on provider
6. **Done!** - Everything continues working with your data

**📖 See `DEMO_SETUP_GUIDE.md` for complete demo documentation**

---

## 🚀 Quick Start

### 1. Install Theme

```bash
# Upload to Shopify
# Zip the "NVC Custom" folder and upload via Shopify Admin
# Or use Shopify CLI:
shopify theme push
```

### 2. Configure Settings

**Shopify Admin → Online Store → Themes → Customize**

- **NVC Design Enhancements** - Enable animations, effects, performance features
- **Optical & ILS Integration** - Configure ILS API, enable optical features

### 3. Optional: Add Features to Product Pages

```liquid
{%- render 'ils-integration', product: product -%}
{%- render 'optical-product-features', product: product -%}
```

---

## 📁 Project Structure

```
NVC Custom/
├── assets/              # CSS, JS, images (301 files)
│   └── nvc-performance.js
├── config/              # Theme settings
│   └── settings_schema.json
├── layout/              # Theme layouts
│   └── theme.liquid
├── sections/            # Reusable sections (113 files)
│   └── product-template-nvc-enhanced.liquid
├── snippets/            # Reusable components (164 files)
│   ├── ils-integration.liquid
│   ├── nvc-animations.liquid
│   ├── uk-compliance.liquid
│   └── optical-product-features.liquid
└── templates/           # Page templates (94 files)
```

---

## 🎨 Features Breakdown

### 1. UK Compliance (`uk-compliance.liquid`)
- GDPR-compliant cookie consent
- Granular controls (Essential, Analytics, Marketing)
- WCAG 2.1 AA accessibility
- Skip-to-content links
- Keyboard navigation throughout

### 2. Framer-Inspired Animations (`nvc-animations.liquid`)
- Scroll-triggered fade-ins
- Staggered children animations
- Magnetic button effects
- Hover lift effects
- Glassmorphism UI elements
- Respects `prefers-reduced-motion`

### 3. Performance Optimization (`nvc-performance.js`)
- Native image lazy loading
- Font preloading optimization
- Third-party script deferral
- Link prefetching
- Core Web Vitals monitoring (LCP, FID, CLS)
- Resource hints (dns-prefetch, preconnect)

### 4. ILS Integration (`ils-integration.liquid`)
- Real-time inventory checking
- Compatible with OpticsPro, Frames Data, OfficeMate, Eyefinity
- Store availability checker
- Virtual try-on integration hooks
- Prescription lens compatibility
- SKU and barcode synchronization

### 5. Optical Product Features (`optical-product-features.liquid`)
- Frame specifications display (lens width, bridge, temple)
- Visual frame size diagram
- Material and feature badges
- UV protection indicators
- Prescription lens options
- Virtual try-on button

---

## ⚙️ Configuration

### Theme Settings

All features can be configured via **Theme Customizer**:

#### NVC Design Enhancements
- Enable scroll animations
- Enable hover effects
- Enable parallax effects
- Enable lazy loading
- Enable font preloading

#### Optical & ILS Integration
- Enable ILS integration
- ILS API endpoint
- Store ID
- Enable virtual try-on
- Enable store availability
- Enable prescription uploads

### Product Metafields (Optional)

For optical features, add metafields with namespace `optical`:

- `lens_width` (number)
- `bridge_width` (number)
- `temple_length` (number)
- `frame_material` (text)
- `lens_material` (text)
- `frame_shape` (text)
- `prescription_compatible` (boolean)
- `uv_protection` (boolean)
- `polarized` (boolean)

---

## 🔌 ILS Integration Setup

### 1. Enable in Theme Settings
Navigate to **Theme Customizer → Optical & ILS Integration**

### 2. Configure API Endpoint
```
API Endpoint: https://your-ils-provider.com/api
Store ID: your-store-id
```

### 3. Add to Product Templates
```liquid
{%- render 'ils-integration', product: product -%}
```

### 4. Supported ILS Providers
- OpticsPro
- Frames Data
- OfficeMate
- Eyefinity
- Custom REST APIs

---

## 📊 Performance Metrics

### Expected Results

**Before Enhancements:**
- PageSpeed Score: 65-75
- LCP: ~3.5s
- FID: ~200ms
- CLS: ~0.15

**After Enhancements:**
- PageSpeed Score: 85-95 ⬆️
- LCP: <2.5s ⬆️
- FID: <100ms ⬆️
- CLS: <0.1 ⬆️

---

## ✅ Compliance & Standards

### Shopify
- ✅ 100% Theme Store compliant
- ✅ Valid Liquid syntax
- ✅ No external dependencies
- ✅ Proper schema definitions
- ✅ Performance optimized

### UK Legal Requirements
- ✅ GDPR compliant (cookie consent)
- ✅ WCAG 2.1 AA accessibility
- ✅ VAT display support
- ✅ UK-specific meta tags

### Web Standards
- ✅ Semantic HTML5
- ✅ Modern CSS (no IE hacks)
- ✅ Vanilla JavaScript (no jQuery)
- ✅ Progressive enhancement
- ✅ Mobile-first design

---

## 📚 Documentation

Comprehensive guides included:

1. **NVC_ENHANCEMENT_GUIDE.md** - Complete technical documentation (20+ pages)
2. **QUICK_START.md** - 5-minute setup guide
3. **SHOPIFY_COMPLIANCE_AUDIT.md** - Full compliance report
4. **COMPLIANCE_COMPLETE.md** - Final fixes and status
5. **ENHANCEMENTS_SUMMARY.md** - Feature overview
6. **THEME_INTEGRATION_CHECKLIST.md** - Integration verification

---

## 🎯 Use Cases

### Perfect For:
- Optical retail stores
- Sunglasses brands
- Eyewear collections
- Prescription eyewear retailers
- Multi-location optical chains

### Key Benefits:
- Real-time inventory integration
- Virtual try-on ready
- Prescription lens workflow
- Frame specification display
- UK market compliance

---

## 🔧 Development

### Requirements
- Shopify store
- Theme access
- (Optional) Shopify CLI for development

### Local Development

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Login
shopify auth login

# Serve theme locally
shopify theme dev --store your-store.myshopify.com

# Push to production
shopify theme push
```

---

## 🛠️ Customization

### Adding Custom Animations

```liquid
<!-- Add to any element -->
<div data-nvc-animate="fade" class="nvc-stagger">
  <div class="nvc-hover-lift">Content</div>
</div>
```

### Available Animation Classes
- `.nvc-fade-in` - Fade and slide up
- `.nvc-stagger` - Staggered children
- `.nvc-hover-lift` - Lift on hover
- `.nvc-magnetic` - Magnetic effect
- `.nvc-glass` - Glassmorphism
- `[data-nvc-animate]` - Scroll-triggered

---

## 🐛 Troubleshooting

### Cookie Banner Not Appearing
- Check browser cache
- Ensure `uk-compliance.liquid` is rendered in `theme.liquid`
- Clear cookies and reload

### Animations Not Working
- Check if `nvc-animations.liquid` is loaded
- Verify browser supports Intersection Observer
- Check `prefers-reduced-motion` setting

### ILS Integration Issues
- Verify API endpoint is correct
- Check API credentials
- Ensure CORS is configured
- Check browser console for errors

---

## 📞 Support

### Resources
- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Shopify Liquid Reference](https://shopify.dev/api/liquid)
- [Web.dev Performance](https://web.dev/performance/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Issues
For theme-specific issues, refer to the documentation files or create an issue in this repository.

---

## 📝 License

Proprietary - New Vantage Co.  
All rights reserved.

---

## 🎉 Credits

**Built for:** New Vantage Co (www.newvantageco.com)  
**Purpose:** Optical frames and sunglasses retail  
**Market:** United Kingdom  

**Features:**
- Framer-inspired design
- UK compliance (GDPR + WCAG 2.1 AA)
- ILS SaaS integration
- Performance-first approach
- Optical retail specific features

---

## 🚀 Version

**Version:** 1.0.0  
**Release Date:** November 2025  
**Shopify Compatibility:** Shopify 2.0 (Section-based)  
**Status:** Production Ready ✅

---

**Made with ♥ for the optical retail industry** 🕶️
