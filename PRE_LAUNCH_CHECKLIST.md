# Sappnett Pre-Launch Compliance Checklist

## 🚀 BEFORE YOU GO LIVE

Use this checklist to verify all compliance elements are in place and functioning correctly.

---

## ✅ TECHNICAL VERIFICATION

### Code & Routes
- [ ] **App.tsx** imports FAQ and Disclaimer correctly
  - [ ] `import FAQ from "./pages/FAQ"`
  - [ ] `import Disclaimer from "./pages/Disclaimer"`
  - [ ] Route: `<Route path="/faq" element={<FAQ />} />`
  - [ ] Route: `<Route path="/disclaimer" element={<Disclaimer />} />`

- [ ] **Navigation.tsx** includes FAQ link
  - [ ] FAQ appears in navItems array
  - [ ] FAQ link renders in desktop menu
  - [ ] FAQ link renders in mobile menu

- [ ] **Footer.tsx** includes Disclaimer link
  - [ ] Disclaimer in footerLinks.legal array
  - [ ] Disclosure statement appears above copyright
  - [ ] Footer renders on all pages

- [ ] **HeroSection.tsx** has above-fold disclosure
  - [ ] Yellow alert box visible on load
  - [ ] Text reads "Disclosure: Sappnett is an independent..."
  - [ ] Icon (AlertCircle) displays

### Build & Compilation
- [ ] Project builds without errors: `npm run build`
- [ ] No console errors in browser DevTools
- [ ] No TypeScript errors in VS Code
- [ ] All imports resolve correctly

---

## 🌐 BROWSER & DEVICE TESTING

### Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Homepage loads without errors
- [ ] Above-fold disclosure visible
- [ ] All navigation links clickable
- [ ] FAQ page loads correctly
- [ ] Disclaimer page loads correctly
- [ ] All policy pages load correctly

### Mobile (iPhone, Android)
- [ ] Homepage responsive
- [ ] Disclosure readable on mobile
- [ ] Navigation menu opens/closes
- [ ] All links clickable with appropriate spacing
- [ ] FAQ accordion works on mobile
- [ ] Disclaimer scrolls properly

### Tablet
- [ ] Layout adjusts appropriately
- [ ] All CTAs visible and clickable
- [ ] Disclosures legible

---

## 📄 DISCLOSURE VISIBILITY CHECK

### Homepage (/)
- [ ] **Yellow alert box** appears above fold
  - Text: "Disclosure: Sappnett is an independent third-party service platform..."
  - Icon: AlertCircle ✓
  - Color: Yellow/gold background
  - Visibility: Immediately visible (no scrolling)

### Footer (appears on all pages)
- [ ] Disclosure section visible before copyright
  - Text: "Independent Service Disclosure: Sappnett is an independent..."
  - Background: primary/5 (subtle color)
  - Border: primary/20 (visible border)

### /disclaimer page
- [ ] Page loads at /disclaimer route
- [ ] Title: "Important Disclaimer"
- [ ] Alert icon visible
- [ ] 12 sections present:
  1. [ ] Who We Are
  2. [ ] Service Nature
  3. [ ] Provider Independence
  4. [ ] Account Security & Privacy
  5. [ ] Billing & Charges
  6. [ ] Service Limitations
  7. [ ] No Partnership or Endorsement
  8. [ ] Trademarks & Attribution
  9. [ ] Contact & Questions

### /PrivacyPolicy page
- [ ] Blue disclosure box appears at top
- [ ] Text includes: "We do not request or store provider account passwords"
- [ ] Section 5: "Third-Party Provider Independence" present
- [ ] Contact info includes privacy@sappnett.com

### /RefundPolicy page
- [ ] Blue disclosure box appears at top
- [ ] States: "7 to 15 days"
- [ ] Clearly states provider charges NOT covered
- [ ] Section 5: "What is NOT Refundable" present
- [ ] Section 6: "Provider Disclaimer" present

### /TermsAndConditions page
- [ ] Blue disclosure box appears at top
- [ ] Section 1: States "NOT an ISP"
- [ ] Section 3: "Service Limitations & Independence" present
- [ ] Section 12: Call greeting documented

### /contact page
- [ ] Disclosure box in hero section
- [ ] Text color appropriate (visible)
- [ ] CTAs use compliant language ("Get Assistance")

---

## 📱 CTA LANGUAGE VERIFICATION

### Navigation
- [ ] Primary CTA button says: "Get Assistance" (NOT "Call Now")
- [ ] Navigation menu shows: "FAQ" link (NOT missing)
- [ ] All links point to correct routes

### Homepage
- [ ] Primary button: "Get Assistance: (877) 496-9657"
- [ ] Secondary button: "Learn More" → links to /faq
- [ ] No "Buy Now", "Activate", or "Official" language

### Contact Page
- [ ] "Call Us" card says: "Get Assistance"
- [ ] "Email Support" card says: "Send Email"
- [ ] "Live Chat" card says: "Request Help"
- [ ] No forbidden CTA language

### Throughout Site
- [ ] No "official" language
- [ ] No "authorized" claims
- [ ] No "best" or "cheapest" claims
- [ ] No "guaranteed" promises
- [ ] All CTAs use allowed verbs: assist, guide, help, support

---

## 📞 PHONE SUPPORT VERIFICATION

### Call Greeting
- [ ] Call (877) 496-9657
- [ ] Greeting includes: "Thank you for calling Sappnett"
- [ ] Greeting includes: "independent service assistance platform"
- [ ] Greeting does NOT say: "official", "authorized", "provider"

### Documentation
- [ ] Greeting documented in Terms & Conditions (Section 12)
- [ ] Greeting documented in Disclaimer page
- [ ] Greeting documented in FAQ (Question 15)

### Phone Link
- [ ] All phone links use `<a href="tel:8774969657">` format
- [ ] Phone number consistently (877) 496-9657
- [ ] Links work on desktop and mobile

---

## 🔒 PRIVACY & SECURITY VERIFICATION

### HTTPS/SSL
- [ ] All pages load with HTTPS (green lock icon)
- [ ] No mixed content warnings
- [ ] SSL certificate valid
- [ ] Redirect from HTTP to HTTPS working

### Privacy Policy
- [ ] Clear statement: "We never request provider passwords"
- [ ] Section 5 addresses provider independence
- [ ] Contact info includes privacy@sappnett.com
- [ ] Data collection limited to necessary info only

### No Password Collection
- [ ] Contact form does NOT request passwords
- [ ] Support form does NOT request passwords
- [ ] FAQ answers NO to "Do you need passwords?"
- [ ] Disclaimer explicitly states: "We never request... credentials"

### Data Handling
- [ ] Privacy Policy explains all data collection
- [ ] No mention of storing provider account info
- [ ] No mention of accessing provider systems
- [ ] Clear data security statement

---

## 📊 CONTENT VERIFICATION

### FAQ Page (/faq)
- [ ] Page loads at /faq route
- [ ] 15 questions display
- [ ] First question: "Are you an official... provider?"
- [ ] Answers are original (not templated)
- [ ] Accordion expands/collapses properly
- [ ] Contact buttons functional
- [ ] Compliance notice box at top

### Disclaimer Page (/disclaimer)
- [ ] Page loads at /disclaimer route
- [ ] 12 sections fully visible
- [ ] All sections have content
- [ ] Contact information included
- [ ] Printable format
- [ ] Search-friendly

### Policy Pages
- [ ] Privacy Policy: Updated with 2026 dates
- [ ] Refund Policy: Shows 7-15 day window
- [ ] Terms & Conditions: References independence 3+ times
- [ ] All policy links work from footer

---

## 🎨 VISUAL & BRAND VERIFICATION

### Disclosure Boxes
- [ ] Above-fold disclosure has proper styling
- [ ] Footer disclosure readable
- [ ] Policy page disclosures consistent
- [ ] All use appropriate colors (not hidden)

### Typography
- [ ] Heading fonts load correctly
- [ ] Body text readable (good contrast)
- [ ] Link colors distinguishable
- [ ] Emphasis text (bold) stands out

### Responsive Design
- [ ] Disclosure visible at all screen sizes
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets adequate (44px minimum)
- [ ] Text size readable on all devices

### Logo & Branding
- [ ] Sappnett logo consistent
- [ ] No provider logos that imply affiliation
- [ ] Company name spelled correctly throughout
- [ ] Year is 2026 (in footer, Disclaimer, FAQs)

---

## 🔗 LINK VERIFICATION

### Internal Links
- [ ] Home → / (works)
- [ ] About → /about (works)
- [ ] Services → /services (works)
- [ ] Features → /features (works)
- [ ] Contact → /contact (works)
- [ ] FAQ → /faq (works)
- [ ] Disclaimer → /disclaimer (works)
- [ ] Privacy Policy → /PrivacyPolicy (works)
- [ ] Refund Policy → /RefundPolicy (works)
- [ ] Terms → /TermsAndConditions (works)

### External Links
- [ ] Phone links: `tel:8774969657` (clickable)
- [ ] Email links: `mailto:support@sappnett.com` (clickable)
- [ ] Social media links configured (if any)

### Footer Links
- [ ] All footer links point to correct pages
- [ ] FAQ link works from footer
- [ ] Disclaimer link works from footer
- [ ] Policy links accessible from footer

### 404 Handling
- [ ] Invalid routes go to NotFound page
- [ ] NotFound page includes link back to home
- [ ] No broken link errors in console

---

## 📋 CONTENT ACCURACY CHECK

### Company Information
- [ ] Company name: "Sappnett" (spelled correctly)
- [ ] Year: 2026 (correct)
- [ ] Status: "Independent third-party service assistance startup"
- [ ] Founded year: 2026 (matches requirement)

### Phone Number
- [ ] Always: (877) 496-9657
- [ ] Consistently formatted
- [ ] Links work on all devices

### Email Addresses
- [ ] support@sappnett.com (support inquiries)
- [ ] privacy@sappnett.com (privacy questions)
- [ ] compliance@sappnett.com (compliance questions)
- [ ] All mentioned in appropriate sections

### Refund Window
- [ ] States: "7 to 15 days" (NOT 30 days)
- [ ] Includes: "depending on service type"
- [ ] Includes: "eligibility depends on..."
- [ ] NOT a guarantee

---

## 🚨 FORBIDDEN ELEMENTS CHECK

### Language That Should NOT Appear
- [ ] No: "Official" (except "official support channels" is ok)
- [ ] No: "Authorized" (by any provider)
- [ ] No: "Buy Now" / "Shop Now"
- [ ] No: "Best" / "Fastest" (without qualification)
- [ ] No: "Cheapest" / "Lowest Price"
- [ ] No: "Guaranteed" (without conditions)
- [ ] No: "Sign up for [Provider] service"
- [ ] No: "Activate your [Provider] account"

### Provider Affiliation
- [ ] No partner logos with affiliation implication
- [ ] No "Official [Provider] Partner" claims
- [ ] No "Endorsed by [Provider]" claims
- [ ] No "Authorized [Provider] Dealer" claims
- [ ] All provider names have ™ or ® marks

### Misleading Claims
- [ ] No claims about controlling provider speeds
- [ ] No claims about guaranteed improvements
- [ ] No claims about being an ISP
- [ ] No claims about selling services

---

## 📝 DOCUMENTATION CHECK

### File: COMPLIANCE_AUDIT.md
- [ ] File exists in root directory
- [ ] Contains full compliance checklist
- [ ] Documents all changes made
- [ ] Lists disclosure locations
- [ ] Explains compliance approach

### File: QUICK_REFERENCE.md
- [ ] File exists in root directory
- [ ] Provides quick implementation summary
- [ ] Lists key changes
- [ ] Includes before/after examples
- [ ] Contains deployment checklist

### Code Comments
- [ ] New sections marked with comments
- [ ] Disclosure boxes documented
- [ ] Route changes documented

---

## 🎯 FINAL GOOGLE ADS AUDIT

Before submitting to Google Ads, verify:

- [ ] **Disclosure visible and clear**
  - Location: Above fold ✓
  - Location: Footer ✓
  - Location: All policy pages ✓
  - Text: Clearly states "independent" ✓
  - Text: Clearly states "not affiliated" ✓

- [ ] **No selling claims**
  - No "buy" language ✓
  - No "activate" language ✓
  - All CTAs use "assist/guide/help" ✓

- [ ] **Refund policy present**
  - Page: /RefundPolicy ✓
  - Window: 7-15 days ✓
  - Conditional: "depends on..." ✓
  - Not guaranteed ✓

- [ ] **FAQ page present**
  - Page: /faq ✓
  - Questions: 15 items ✓
  - Original: Non-templated ✓
  - Compliant: Addresses concerns ✓

- [ ] **Privacy protection clear**
  - No passwords: Stated ✓
  - No account access: Stated ✓
  - HTTPS: Active ✓

- [ ] **Original content**
  - All pages: Rewritten ✓
  - FAQ: Original answers ✓
  - Policies: Unique wording ✓
  - No templates: Verified ✓

---

## 📤 SUBMISSION CHECKLIST

When ready to submit to Google Ads:

1. [ ] Screenshot homepage showing above-fold disclosure
2. [ ] URL: https://[domain]/faq (FAQ page)
3. [ ] URL: https://[domain]/disclaimer (Disclaimer page)
4. [ ] URL: https://[domain]/PrivacyPolicy (Privacy Policy)
5. [ ] URL: https://[domain]/RefundPolicy (Refund Policy)
6. [ ] URL: https://[domain]/TermsAndConditions (Terms)
7. [ ] Note: "7-15 day refund window, conditional on service type"
8. [ ] Note: "Independent third-party service, not an ISP"
9. [ ] Note: "Never request provider passwords or account access"
10. [ ] Highlight: Disclosure appears on every page and above fold

---

## 🎉 LAUNCH READY CONFIRMATION

When all checkboxes are complete:

✅ **WEBSITE IS GOOGLE ADS COMPLIANT AND READY TO LAUNCH**

---

## 📞 SUPPORT DURING LAUNCH

If issues arise during launch:

**FAQ not loading?**
- Check: App.tsx imports FAQ component
- Check: Route path is `/faq` (not `/FAQ`)
- Check: FAQ.tsx file exists in src/pages/

**Disclaimer not showing?**
- Check: App.tsx imports Disclaimer component
- Check: Route path is `/disclaimer`
- Check: Disclaimer.tsx file exists in src/pages/

**Disclosure not visible?**
- Check: HeroSection.tsx includes AlertCircle import
- Check: Footer.tsx includes disclosure section
- Check: Policy pages have disclosure boxes

**Links broken?**
- Check: All routes exist in App.tsx
- Check: No typos in href paths (case sensitive!)
- Check: Internal links use `to=` not `href=`

---

**DOCUMENT STATUS:** ✅ COMPLETE - Ready for Pre-Launch

Save this checklist and work through it before going live to Google Ads.
