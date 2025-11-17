# 🎬 NVC Advanced Theme - Demo Setup Guide

**Ship in Full Glory - Ready to Customize!**

Your theme comes **fully loaded** with all enhancements **enabled by default**, complete with demo content and live examples. Everything works out of the box!

---

## ✨ What's Enabled by Default

### 🎨 Design & Animations (Auto-Active)
✅ **Framer-Inspired Animations**
- Smooth scroll animations
- Hover effects on buttons & cards
- Magnetic button interactions
- Fade-in effects
- Glassmorphism UI elements

✅ **Modern Design System**
- Professional optical retail styling
- Custom color palette
- Typography system
- Responsive layouts

✅ **Performance Optimization**
- Image lazy loading
- Font preloading
- Script deferring
- Core Web Vitals monitoring

### 🕶️ Optical Features (Demo Mode)
✅ **Virtual Try-On** (Pre-configured with Ditto demo)
- AR-powered frame try-on
- Camera integration
- Face mapping
- Demo button on all product pages

✅ **ILS Integration** (Sample data included)
- Real-time inventory display (demo)
- Store availability checker
- Frame specifications
- SKU management

✅ **Prescription Lenses**
- Upload prescription feature
- Lens type selectors
- Prescription compatibility badges
- Email notifications setup

✅ **Optical Product Features**
- Frame measurements display
- Material & feature badges
- UV protection indicators
- Polarization badges
- Shape & style tags

### 🇬🇧 Compliance (Auto-Active)
✅ **UK GDPR Cookie Consent**
- Granular controls (Essential/Analytics/Marketing)
- Cookie preferences modal
- localStorage persistence
- Legal text included

✅ **WCAG 2.1 AA Accessibility**
- Keyboard navigation
- Screen reader support
- Skip-to-content links
- Focus indicators
- Semantic HTML

---

## 📦 Demo Content Included

### 1. **Sample Product Templates** (3 Ready-to-Use)

#### Standard Enhanced Product
- **File:** `sections/product-template-nvc-enhanced.liquid`
- **Shows:** All optical features, ILS integration, virtual try-on

#### Modern Optical Product
- **File:** `sections/product-optical-enhanced.liquid`
- **Shows:** Premium layout, AR try-on, frame specs

#### Collection Grid
- **File:** `sections/collection-optical-grid.liquid`
- **Shows:** Beautiful product grid with filters

### 2. **Hero Section with Demos**
- **File:** `sections/hero-optical-modern.liquid`
- **Shows:** Animated hero with CTA buttons
- **Features:** Parallax effects, video backgrounds

### 3. **Sample Metafields Data**
Pre-configured product metafields for demo:

```json
{
  "namespace": "optical",
  "key": "lens_width",
  "value": "52",
  "type": "number_integer"
}
```

**Included metafields:**
- `lens_width` - Frame lens width (mm)
- `bridge_width` - Bridge size (mm)
- `temple_length` - Temple length (mm)
- `frame_material` - Material (Acetate, Metal, etc.)
- `lens_material` - Lens type (CR-39, Polycarbonate)
- `frame_shape` - Shape (Round, Square, Cat-eye)
- `prescription_compatible` - Boolean
- `uv_protection` - Boolean
- `polarized` - Boolean
- `spring_hinges` - Boolean

### 4. **Demo API Endpoints** (Pre-configured)
```
ILS API: https://demo.ils-api.com/v1
Store ID: DEMO-NVC-001
Virtual Try-On: Ditto (demo mode)
Prescription Email: prescriptions@newvantageco.com
```

---

## 🎯 Everything You See Works!

### On Homepage:
✅ Cookie consent banner appears (GDPR)
✅ Scroll animations activate
✅ Hero section with parallax
✅ Featured products with hover effects

### On Product Pages:
✅ Virtual try-on button (demo mode)
✅ Frame specifications displayed
✅ ILS inventory check (simulated)
✅ Prescription upload option
✅ Store availability checker
✅ Material & feature badges
✅ Size guide modal
✅ Animated add-to-cart

### On Collection Pages:
✅ Optical product grid
✅ Filter animations
✅ Hover lift effects
✅ Quick view modals
✅ Smart image loading

### Throughout Site:
✅ Smooth page transitions
✅ Magnetic buttons
✅ Glassmorphism effects
✅ Loading animations
✅ Mobile-optimized everything

---

## 🎬 Theme Customizer Settings (All Visible)

When you open **Theme Customizer**, you'll see:

### **🕶️ Optical & ILS Integration**
```
✅ Enable ILS Integration (ON)
   ├─ API Endpoint: https://demo.ils-api.com/v1
   └─ Store ID: DEMO-NVC-001

✅ Enable Virtual Try-On (ON)
   └─ Provider: ditto

✅ Enable Store Availability (ON)

✅ Enable Prescription Upload (ON)
   └─ Email: prescriptions@newvantageco.com

✅ Show Demo Content & Examples (ON)
   └─ Turn OFF when using real products
```

### **🎨 NVC Design Enhancements**
```
✅ Enable Scroll Animations (ON)
✅ Enable Advanced Hover Effects (ON)
⚪ Enable Parallax Effects (OFF - optional)
✅ Enable Image Lazy Loading (ON)
✅ Enable Font Preload (ON)
```

---

## 📝 Sample Product Setup (Copy & Paste)

### Create Demo Products with These Details:

#### **Product 1: "Classic Aviator Sunglasses"**
```
Title: Classic Aviator Sunglasses
Price: £89.00
SKU: NVC-AV-001

Metafields:
- optical.lens_width: 58
- optical.bridge_width: 14
- optical.temple_length: 145
- optical.frame_material: Metal
- optical.lens_material: Polycarbonate
- optical.frame_shape: Aviator
- optical.prescription_compatible: true
- optical.uv_protection: true
- optical.polarized: true

Description:
Timeless aviator design with premium metal frames and polarized lenses. 
Features 100% UV protection and prescription-ready.
```

#### **Product 2: "Modern Acetate Frames"**
```
Title: Modern Acetate Frames
Price: £129.00
SKU: NVC-AC-002

Metafields:
- optical.lens_width: 52
- optical.bridge_width: 18
- optical.temple_length: 140
- optical.frame_material: Acetate
- optical.lens_material: CR-39
- optical.frame_shape: Round
- optical.prescription_compatible: true
- optical.uv_protection: true
- optical.spring_hinges: true

Description:
Contemporary round frames crafted from premium Italian acetate. 
Spring hinges for comfort. Prescription-ready with multiple lens options.
```

#### **Product 3: "Sport Performance Sunglasses"**
```
Title: Sport Performance Sunglasses
Price: £159.00
SKU: NVC-SP-003

Metafields:
- optical.lens_width: 65
- optical.bridge_width: 15
- optical.temple_length: 130
- optical.frame_material: TR90
- optical.lens_material: Polycarbonate
- optical.frame_shape: Wrap
- optical.prescription_compatible: false
- optical.uv_protection: true
- optical.polarized: true

Description:
High-performance sport sunglasses with wraparound design. 
Lightweight TR90 frame with polarized polycarbonate lenses.
```

---

## 🎨 How to Use Demo Content

### **For Testing/Preview:**
1. **Keep demo mode ON** in Theme Customizer
2. Add sample products with metafields above
3. All features will display with demo data
4. Virtual try-on shows demo interface
5. ILS shows simulated inventory

### **For Production/Go-Live:**
1. **Turn OFF demo mode** in Theme Customizer
2. Replace demo API endpoints with real ones
3. Update prescription email to yours
4. Add real product metafields
5. Connect real virtual try-on provider
6. Configure real ILS integration

---

## 🚀 Quick Start for New Users

### **Day 1: Install & Preview**
1. Upload theme to Shopify
2. **Everything works immediately!**
3. Preview all features in action
4. Explore Theme Customizer settings
5. See animations, try-on, features live

### **Day 2: Add Sample Products**
1. Create 3-5 products using templates above
2. Add metafields for each product
3. Upload product images
4. Test virtual try-on demo
5. Check all features working

### **Week 1: Customize Design**
1. Adjust colors in Theme Customizer
2. Upload your logo
3. Customize hero section
4. Update footer content
5. Test on mobile devices

### **Week 2: Production Setup**
1. Get real ILS API credentials
2. Choose virtual try-on provider
3. Update API endpoints in settings
4. Add real product inventory
5. Turn OFF demo mode
6. **Go Live!** 🎉

---

## 📋 Feature Toggle Quick Reference

### **Always Enabled (Can't Disable):**
- Cookie consent (GDPR requirement)
- Accessibility features (WCAG requirement)
- Performance optimization
- Modern design system CSS

### **Enabled by Default (Can Disable):**
- Scroll animations → `enable_scroll_animations`
- Hover effects → `enable_hover_effects`
- Virtual try-on → `enable_virtual_tryon`
- Store availability → `enable_store_availability`
- Prescription upload → `enable_prescription_upload`
- ILS integration → `enable_ils_integration`
- Lazy loading → `enable_lazy_loading`
- Font preload → `enable_font_preload`
- Demo content → `enable_demo_content`

### **Disabled by Default (Can Enable):**
- Parallax effects → `enable_parallax` (OFF for performance)

---

## 🎨 Customization Without Breaking Features

### **Safe to Customize:**
✅ Colors & fonts (Theme Customizer)
✅ Logo & images
✅ Text content
✅ Hero section background
✅ Product descriptions
✅ Footer content
✅ Navigation menu
✅ Collection layout

### **Requires Care:**
⚠️ Liquid template structure
⚠️ JavaScript functionality
⚠️ CSS class names used by features
⚠️ Metafield namespaces
⚠️ Snippet render calls

### **Don't Touch (Unless You Know What You're Doing):**
🚫 Core snippet files structure
🚫 ILS integration API calls
🚫 Virtual try-on modal logic
🚫 Cookie consent mechanism
🚫 Accessibility attributes
🚫 Performance optimization scripts

---

## 🎬 Demo Mode Features

When `enable_demo_content` is **ON**, users see:

### **Visual Indicators:**
- 🎬 "DEMO MODE" badge on admin
- Sample frame specifications
- Simulated inventory data
- Demo try-on interface
- Example prescription forms

### **Functional Demos:**
- Virtual try-on (simulated camera)
- ILS inventory (fake stock data)
- Store availability (sample locations)
- Prescription upload (test emails)
- Frame measurements (example data)

### **User Experience:**
- Fully interactive
- No API errors
- Professional appearance
- All features visible
- Easy to understand

---

## 📊 What Merchants See Out of the Box

### **Theme Customizer:**
```
Navigation:
├── Theme settings
├── 🕶️ Optical & ILS Integration  ⭐ NEW
│   ├── ILS Integration (✅ ON - Demo)
│   ├── Virtual Try-On (✅ ON - Ditto demo)
│   ├── Store Availability (✅ ON)
│   ├── Prescription Upload (✅ ON)
│   └── 🎬 Demo Mode (✅ ON)
└── 🎨 NVC Design Enhancements  ⭐ NEW
    ├── Scroll Animations (✅ ON)
    ├── Hover Effects (✅ ON)
    ├── Parallax (⚪ OFF)
    ├── Lazy Loading (✅ ON)
    └── Font Preload (✅ ON)
```

### **Live Preview Shows:**
- Animated hero section
- Product grid with effects
- Working cookie banner
- Virtual try-on button
- Frame specifications
- All badges & indicators
- Mobile responsive
- Professional polish

---

## 🎯 Conversion to Production

### **Step-by-Step:**

1. **Get API Credentials**
   ```
   □ ILS system API key
   □ Virtual try-on provider account
   □ Store location IDs
   □ Email for prescriptions
   ```

2. **Update Theme Settings**
   ```
   □ ILS API Endpoint → Real URL
   □ Store ID → Your ID
   □ Virtual Try-On Provider → Your account
   □ Prescription Email → Your email
   □ Turn OFF demo mode ✅
   ```

3. **Add Real Products**
   ```
   □ Import product catalog
   □ Add metafields to products
   □ Upload product images
   □ Set prices & inventory
   ```

4. **Test Everything**
   ```
   □ Virtual try-on with real provider
   □ ILS inventory sync
   □ Prescription email delivery
   □ Store availability accuracy
   □ Mobile responsiveness
   ```

5. **Launch!**
   ```
   □ Remove demo products
   □ Verify all links work
   □ Check analytics setup
   □ Monitor performance
   □ Celebrate! 🎉
   ```

---

## 💡 Pro Tips

### **For Theme Preview:**
- Leave demo mode ON to show capabilities
- Add 5-10 sample products for realistic preview
- Use high-quality placeholder images
- Set up all sections in Customizer

### **For Development:**
- Test with demo mode ON first
- Switch to OFF to test production behavior
- Use browser dev tools to check API calls
- Monitor console for errors

### **For Go-Live:**
- Turn OFF demo mode before launch
- Update all API endpoints
- Test prescription email delivery
- Verify ILS data accuracy
- Check mobile experience

---

## 📚 Documentation Reference

### **For Features:**
- `NVC_ENHANCEMENT_GUIDE.md` - Complete technical guide
- `OPTICAL_REDESIGN_GUIDE.md` - Optical features guide
- `QUICK_START.md` - 5-minute setup

### **For Compliance:**
- `SHOPIFY_COMPLIANCE_AUDIT.md` - Compliance report
- `COMPLIANCE_COMPLETE.md` - Standards met

### **For Setup:**
- `README.md` - Project overview
- This file - Demo setup guide

---

## ✨ Summary

### **Out of the Box:**
✅ All features enabled
✅ Demo content included
✅ Everything functional
✅ Professional appearance
✅ Mobile optimized
✅ 100% Shopify compliant

### **Merchants Can:**
✅ Preview immediately
✅ See all capabilities
✅ Test every feature
✅ Customize as needed
✅ Disable what they don't want
✅ Launch when ready

### **You Ship:**
✅ Full-featured theme
✅ Working demos
✅ Professional polish
✅ Clear documentation
✅ Easy customization
✅ Production-ready code

---

## 🎊 Result

**Merchants get a theme that:**
1. **Works perfectly** on install
2. **Shows everything** it can do
3. **Looks professional** immediately
4. **Requires minimal setup** to launch
5. **Easy to customize** their way
6. **Production-ready** when they are

**Ship it in full glory! 🚀🕶️**

---

**Questions? Check the other documentation files or customize as needed!**
