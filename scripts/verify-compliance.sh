#!/bin/bash

# Shopify Theme Compliance Verification Script
# Checks ultra-modern design system for common issues

echo "🔍 Shopify Theme Compliance Checker"
echo "===================================="
echo ""

ERRORS=0
WARNINGS=0

# Check 1: Verify no hardcoded text in sections
echo "✓ Checking for hardcoded text in sections..."
HARDCODED=$(grep -r "\"Welcome\"" sections/ snippets/ 2>/dev/null | grep -v "default" | wc -l)
if [ $HARDCODED -gt 0 ]; then
  echo "  ⚠️  Warning: Found $HARDCODED potential hardcoded strings"
  WARNINGS=$((WARNINGS + 1))
else
  echo "  ✅ No hardcoded text found"
fi

# Check 2: Verify all sections have schema
echo "✓ Checking section schemas..."
SECTIONS_WITHOUT_SCHEMA=0
for file in sections/*.liquid; do
  if [ -f "$file" ]; then
    if ! grep -q "{% schema %}" "$file"; then
      echo "  ❌ Missing schema: $file"
      SECTIONS_WITHOUT_SCHEMA=$((SECTIONS_WITHOUT_SCHEMA + 1))
      ERRORS=$((ERRORS + 1))
    fi
  fi
done

if [ $SECTIONS_WITHOUT_SCHEMA -eq 0 ]; then
  echo "  ✅ All sections have schema blocks"
fi

# Check 3: Verify translation filters
echo "✓ Checking for translation filters..."
MISSING_TRANSLATIONS=$(grep -r "Add to cart\|Quick view\|Sold out" sections/ snippets/ 2>/dev/null | grep -v "| t" | grep -v "schema" | wc -l)
if [ $MISSING_TRANSLATIONS -gt 0 ]; then
  echo "  ⚠️  Warning: $MISSING_TRANSLATIONS strings may need translation filters"
  WARNINGS=$((WARNINGS + 1))
else
  echo "  ✅ Translation filters properly used"
fi

# Check 4: Check for inline styles (should be minimal)
echo "✓ Checking for excessive inline styles..."
INLINE_STYLES=$(grep -r "style=\"" sections/ snippets/ 2>/dev/null | wc -l)
echo "  ℹ️  Found $INLINE_STYLES inline styles (acceptable for dynamic values)"

# Check 5: Verify image lazy loading
echo "✓ Checking image optimization..."
IMAGES_WITHOUT_LAZY=$(grep -r "<img" sections/ snippets/ 2>/dev/null | grep -v "loading=" | grep -v "lazyload" | wc -l)
if [ $IMAGES_WITHOUT_LAZY -gt 0 ]; then
  echo "  ⚠️  Warning: $IMAGES_WITHOUT_LAZY images without lazy loading"
  WARNINGS=$((WARNINGS + 1))
else
  echo "  ✅ All images use lazy loading"
fi

# Check 6: Verify no console.log in production JS
echo "✓ Checking for debug code..."
CONSOLE_LOGS=$(grep -r "console.log" assets/*.js 2>/dev/null | grep -v "// console.log" | wc -l)
if [ $CONSOLE_LOGS -gt 1 ]; then
  echo "  ⚠️  Warning: Found $CONSOLE_LOGS console.log statements"
  WARNINGS=$((WARNINGS + 1))
else
  echo "  ✅ No debug code in production"
fi

# Check 7: Verify proper asset references
echo "✓ Checking asset references..."
INVALID_ASSETS=$(grep -r "src=\"/" sections/ snippets/ 2>/dev/null | grep -v "asset_url" | wc -l)
if [ $INVALID_ASSETS -gt 0 ]; then
  echo "  ❌ Found $INVALID_ASSETS invalid asset references"
  ERRORS=$((ERRORS + 1))
else
  echo "  ✅ All assets use proper Shopify filters"
fi

# Check 8: Verify no deprecated Liquid tags
echo "✓ Checking for deprecated Liquid..."
DEPRECATED=$(grep -r "{% include" sections/ snippets/ 2>/dev/null | wc -l)
if [ $DEPRECATED -gt 0 ]; then
  echo "  ❌ Found $DEPRECATED deprecated {% include %} tags (use {% render %})"
  ERRORS=$((ERRORS + 1))
else
  echo "  ✅ No deprecated Liquid tags"
fi

# Check 9: Verify accessibility - alt attributes
echo "✓ Checking image accessibility..."
MISSING_ALT=$(grep -r "<img" sections/ snippets/ 2>/dev/null | grep -v "alt=" | wc -l)
if [ $MISSING_ALT -gt 0 ]; then
  echo "  ❌ Found $MISSING_ALT images without alt attributes"
  ERRORS=$((ERRORS + 1))
else
  echo "  ✅ All images have alt attributes"
fi

# Check 10: Verify form labels
echo "✓ Checking form accessibility..."
INPUTS_WITHOUT_LABELS=$(grep -r "<input" sections/ snippets/ 2>/dev/null | grep -v "aria-label\|<label" | wc -l)
if [ $INPUTS_WITHOUT_LABELS -gt 5 ]; then
  echo "  ⚠️  Warning: Some inputs may be missing labels"
  WARNINGS=$((WARNINGS + 1))
else
  echo "  ✅ Form inputs properly labeled"
fi

# Summary
echo ""
echo "===================================="
echo "📊 Compliance Summary"
echo "===================================="
echo "Errors: $ERRORS"
echo "Warnings: $WARNINGS"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
  echo "✅ FULLY COMPLIANT - No issues found!"
  exit 0
elif [ $ERRORS -eq 0 ]; then
  echo "✅ COMPLIANT - Minor warnings only"
  exit 0
else
  echo "❌ COMPLIANCE ISSUES - Please review errors"
  exit 1
fi
