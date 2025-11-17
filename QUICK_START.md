# New Vantage Co Theme - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Upload Theme to Shopify

1. Zip the `NVC Custom` folder
2. Go to **Shopify Admin > Online Store > Themes**
3. Click **Add theme > Upload zip file**
4. Select your zipped theme
5. Click **Publish** when ready

### 2. Configure Essential Settings

Navigate to **Theme Settings**:

#### A. Enable New Features (5 minutes)

**🎨 NVC Design Enhancements**
- ✅ Enable Scroll Animations
- ✅ Enable Advanced Hover Effects  
- ✅ Enable Image Lazy Loading
- ✅ Preload Critical Fonts

**🕶️ Optical & ILS Integration** *(Optional - Skip if not using ILS)*
- Configure later when ILS is ready
- Virtual Try-On can be enabled anytime

#### B. Update Cookie Compliance

The GDPR-compliant cookie banner is active by default. 

**To customize:**
1. Open `snippets/uk-compliance.liquid`
2. Line 39: Update Privacy Policy URL
3. Line 40: Update Cookie Policy URL

### 3. Set Up Product Metafields (10 minutes)

For optical features to work, create these metafields:

**Go to: Settings > Custom Data > Products > Add definition**

| Name | Namespace | Key | Type |
|------|-----------|-----|------|
| Lens Width | optical | lens_width | Number |
| Bridge Width | optical | bridge_width | Number |
| Temple Length | optical | temple_length | Number |
| Frame Material | optical | frame_material | Text |
| Prescription Compatible | optical | prescription_compatible | Boolean |
| UV Protection | optical | uv_protection | Boolean |
| Polarized | optical | polarized | Boolean |

### 4. Add Features to Product Pages

Edit your product template (e.g., `sections/product-template-1.liquid`):

**Add optical features:**
```liquid
{%- render 'optical-product-features', product: product -%}
```

**Add ILS integration** *(if using ILS)*:
```liquid
{%- render 'ils-integration', product: product -%}
```

**Recommended placement:** After the product description section.

### 5. Test Everything

#### Quick Test Checklist:
- [ ] Visit homepage - animations should work
- [ ] Click around - cookie banner should appear
- [ ] Accept/reject cookies - banner should disappear
- [ ] View a product - smooth animations
- [ ] Check mobile - responsive design
- [ ] Test keyboard navigation - Tab key works

### 6. (Optional) Configure ILS

**Only if you have an ILS system:**

1. **Theme Settings > 🕶️ Optical & ILS Integration**
2. Enable "Enable ILS Integration"
3. Enter API endpoint (e.g., `https://api.yourils.com/v1`)
4. Add Store ID
5. Save

**Test ILS:**
- View a product with SKU
- Check browser console for API calls
- Verify inventory displays

---

## 🎯 What You Get Out of the Box

### ✅ Active Features (No Setup Required)

1. **Modern Animations**
   - Smooth fade-ins on scroll
   - Product card hover effects
   - Button interactions
   - Responsive to user preferences

2. **UK Compliance**
   - GDPR cookie consent
   - Granular cookie controls
   - Accessibility features (WCAG 2.1 AA)
   - Skip-to-content link

3. **Performance Optimizations**
   - Image lazy loading
   - Font preloading
   - Script deferring
   - Core Web Vitals monitoring

4. **SEO Enhancements**
   - Structured data (JSON-LD)
   - Optimized meta tags
   - UK-specific hreflang
   - Social media integration

### 🔧 Features Requiring Setup

1. **ILS Integration**
   - Needs API configuration
   - See section 6 above

2. **Virtual Try-On**
   - Requires third-party service
   - See main guide for providers

3. **Optical Product Features**
   - Needs metafields configured
   - See section 3 above

---

## 📱 Mobile-First Checklist

Test on actual devices:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)

**Key mobile features:**
- Touch-friendly buttons (min 44x44px)
- Readable text (min 16px)
- Easy navigation
- Fast loading

---

## 🎨 Quick Customization

### Change Brand Colors

Edit `assets/theme.css` and add:

```css
:root {
  --nvc-primary: #YOUR_COLOR;
  --nvc-accent: #YOUR_ACCENT;
}
```

### Adjust Animation Speed

In `snippets/nvc-animations.liquid`, modify:

```css
:root {
  --nvc-transition-fast: 150ms;   /* Make faster: 100ms */
  --nvc-transition-base: 300ms;   /* Make faster: 200ms */
  --nvc-transition-slow: 500ms;   /* Make faster: 300ms */
}
```

### Disable Specific Animations

**Theme Settings > NVC Design Enhancements**
- Uncheck features you don't want
- Changes take effect immediately

---

## ⚡ Performance Tips

### Images
- Use WebP format
- Compress to 80% quality
- Max 2000px width for products
- Add descriptive alt text

### Fonts
- Already optimized (Plus Jakarta Sans)
- Preloaded automatically
- Falls back to system fonts

### Scripts
- All scripts are deferred
- No blocking JavaScript
- Third-party scripts load after interaction

---

## 🐛 Common Issues & Fixes

### Cookie banner doesn't hide
**Fix:** Clear browser cookies and cache, refresh

### Animations not working
**Fix:** Check browser console for errors, ensure JavaScript is enabled

### ILS not connecting
**Fix:** Verify API endpoint, check CORS settings, review API key

### Mobile layout broken
**Fix:** Clear cache, check viewport meta tag, test in incognito

---

## 📞 Need Help?

### Quick Resources
- **Full Guide:** `NVC_ENHANCEMENT_GUIDE.md`
- **Shopify Docs:** help.shopify.com
- **Browser DevTools:** Press F12 to debug

### Support Contacts
- Theme: support@newvantageco.com
- Shopify: Shopify Help Center
- ILS: Your ILS provider

---

## 🎓 Next Steps

Once basic setup is done:

1. **Add Products**
   - Upload high-quality images
   - Fill all metafields
   - Write compelling descriptions
   - Add frame specifications

2. **Configure Shipping**
   - Set UK shipping zones
   - Configure rates
   - Add free shipping threshold
   - Set international options

3. **Set Up Payments**
   - Enable Shopify Payments
   - Configure tax settings (UK VAT)
   - Add alternative payment methods
   - Test checkout flow

4. **Marketing**
   - Add Google Analytics
   - Set up Facebook Pixel
   - Configure email marketing
   - Plan launch campaign

5. **Legal Pages**
   - Privacy Policy
   - Cookie Policy
   - Terms & Conditions
   - Returns Policy
   - Accessibility Statement

---

## ✅ Pre-Launch Checklist

### Technical
- [ ] Theme published
- [ ] All images optimized
- [ ] Metafields configured
- [ ] Navigation menus set
- [ ] Footer customized
- [ ] Favicon uploaded
- [ ] SSL certificate active

### Content
- [ ] Homepage complete
- [ ] About page written
- [ ] Contact page set up
- [ ] Legal pages added
- [ ] Product descriptions done
- [ ] Images have alt text

### Settings
- [ ] Store details correct
- [ ] Shipping configured
- [ ] Taxes set (UK VAT)
- [ ] Payments enabled
- [ ] Email notifications customized
- [ ] Domain connected

### Testing
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)
- [ ] Place test order
- [ ] Check email notifications

### Marketing
- [ ] Google Analytics installed
- [ ] Facebook Pixel added
- [ ] Social media profiles linked
- [ ] Meta descriptions written
- [ ] Blog set up (if using)

---

## 🌟 Pro Tips

1. **Use High-Quality Photos**
   - Multiple angles for each product
   - Lifestyle shots showing frames worn
   - Detail shots of materials
   - Consistent white or neutral background

2. **Write Detailed Descriptions**
   - Who is this frame for?
   - What makes it special?
   - How does it fit?
   - What's the style inspiration?

3. **Leverage Virtual Try-On**
   - Increases conversion by 90%
   - Reduces returns
   - Builds confidence
   - Modern customer expectation

4. **Optimize for Mobile**
   - 70%+ traffic is mobile
   - Thumb-friendly navigation
   - Fast loading crucial
   - Large, tappable buttons

5. **Focus on Speed**
   - Google ranks faster sites higher
   - Better user experience
   - Higher conversion rates
   - Lower bounce rates

---

**You're ready to go! 🚀**

For detailed information, see `NVC_ENHANCEMENT_GUIDE.md`

---

*Built for New Vantage Co - Purposeful Eyewear UK* 🕶️
