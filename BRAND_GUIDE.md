# Fixed Mark Digital Brand Guide

## Brand Identity

**Business Name:** Fixed Mark Digital  
**Founder:** Jeff Reed  
**Contact:** contact@reedjeffreyr.com

**Tagline:** "I Build It. I Teach It. You Own It."

**Mission Statement:**  
Web design and consulting that puts you in control of your own online presence. We don't just build websites — we make sure you actually know how to use yours.

---

## Brand Colors

### Primary Palette

- **Primary Blue:** `#0174DE`  
  Used for CTAs, links, accents, and brand emphasis

- **Dark Slate:** `#34424A`  
  Used for headings, footer background, and secondary accents

- **White:** `#FFFFFF`  
  Primary background and text on dark backgrounds

### Supporting Colors

- **Muted Gray:** `#ECECF0` - Background sections, subtle dividers
- **Muted Text:** `#717182` - Secondary text, descriptions
- **Input Background:** `#F3F3F5` - Form fields and inputs
- **Destructive Red:** `#D4183D` - Error states, warnings
- **Border:** `rgba(0, 0, 0, 0.1)` - Subtle borders and dividers

### Color Usage Guidelines

- **Primary Blue:** Main actions, interactive elements, brand highlights. Use sparingly for maximum impact.
- **Dark Slate:** Professional authority, text hierarchy, grounding elements
- **White:** Clean, open spaces; ensures readability
- **Muted Gray:** Breaks up sections without harsh contrast
- Balance is key: too much blue overwhelms, too little lacks personality

---

## Typography

### Font Families

**Heading Font:** Poppins  
**Body Font:** Inter

Both fonts are served via Google Fonts for optimal performance and reliability.

### Why This Pairing?

- **Poppins** is geometric and modern with a friendly, approachable personality
- **Inter** is designed specifically for screen readability and widely used in tech
- Together they create a professional yet welcoming brand voice
- Both fonts are highly legible, crucial for a teaching-focused brand

### Font Implementation

```css
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Hierarchy

| Element | Font | Size (Desktop) | Size (Mobile) | Weight |
|---------|------|----------------|---------------|---------|
| Hero Heading (H1) | Poppins | 3.75rem (60px) | 3rem (48px) | 500-600 |
| Section Headings (H2) | Poppins | 2.5-3rem (40-48px) | 2rem (32px) | 500-600 |
| Subsection Headings (H3) | Poppins | 1.5-2rem (24-32px) | 1.25rem (20px) | 500 |
| Small Headings (H4) | Poppins | 1rem (16px) | 1rem (16px) | 500 |
| Body Text | Inter | 1rem (16px) | 1rem (16px) | 400 |
| Emphasized Body | Inter | 1.125rem (18px) | 1rem (16px) | 500 |
| Small Text | Inter | 0.875rem (14px) | 0.875rem (14px) | 400 |
| Button Text | Inter | 1rem (16px) | 1rem (16px) | 500 |

### Font Weights

**Poppins (Headings):**
- Regular (400): Rarely used, for subtle headings
- Medium (500): Standard heading weight
- Semibold (600): Emphasis and hero headings
- Bold (700): Rare, only for maximum emphasis

**Inter (Body):**
- Regular (400): Body text, descriptions, paragraphs
- Medium (500): Labels, buttons, emphasized text
- Semibold (600): Strong emphasis within body text

### Line Height

- **Headings:** 1.5 (relaxed and readable)
- **Body Text:** 1.5 (standard for comfortable reading)
- **Tight Spaces:** 1.2 (use sparingly, only when space is constrained)

### Alternative Font Pairings

If you want to explore other options in the future:

- **Space Grotesk + Inter** - More tech-forward, slightly quirky
- **Outfit + Inter** - Very clean and geometric, minimalist
- **Manrope + Inter** - Softer, more organic feel
- **Inter + Inter** - Use Inter for everything (simple, cohesive, vary weights)

---

## Logo

### Primary Logo

**Mark:** JR geometric design  
**Lockup:** Logo + "Fixed Mark Digital" text

### Color Variations

1. **Full Color (Primary)** - Blue `#0174DE` + Dark Slate `#34424A`  
   Use on white/light backgrounds

2. **Dark Slate (Secondary)** - All `#34424A`  
   Use on light backgrounds when blue isn't needed

3. **White (Reverse)** - All `#FFFFFF`  
   Use on dark backgrounds (footer, dark hero sections)

### Logo Usage

- **Clear Space:** Minimum padding equal to the height of one letter
- **Minimum Size:** 40px height for digital applications
- **Header Placement:** Logo on left + business name
- **Footer Placement:** Logo + business name + tagline
- **Always pair with business name** in primary placements
- Never distort, rotate, or apply effects to logo

---

## Visual Style

### Design Principles

1. **Clean and Modern** - Minimize clutter, use whitespace generously
2. **Professional but Approachable** - Not corporate stiff, not too casual
3. **Clarity and Usability** - Teaching-focused = easy to understand
4. **Responsive and Accessible** - Works everywhere, for everyone
5. **Purposeful Design** - Every element serves the user

### Border Radius

- **Small (buttons, badges):** 0.5rem (8px)
- **Medium (cards, inputs):** 0.625rem (10px)
- **Large (images, sections):** 1rem (16px)
- **Circular (icons, avatars):** 50% (full circle)

Rounded corners create a friendly, modern feel without being overly playful.

### Spacing System

Based on Tailwind's default 4px base unit:

- **Component padding:** 1.5rem (24px) standard
- **Section padding:** 4-6rem (64-96px) vertical
- **Element gaps:** 1-2rem (16-32px)
- **Generous whitespace** for breathing room
- **Consistent rhythm** throughout the page

### Decorative Elements

**Colored Circular Accents:**
- Large circles positioned behind hero images
- Primary Blue at 20% opacity
- Accent (Dark Slate) at 10% opacity
- Creates depth without distracting from content

**Section Heading Underlines:**
- 20px width × 4px height
- Primary Blue `#0174DE`
- Positioned directly beneath section headings
- Adds visual interest and brand consistency

---

## Photography Style

### Hero/Profile Images

- **Authentic personal photos** - Real over stock
- **Professional quality** - Well-lit, sharp focus
- **Natural lighting preferred** - Avoids harsh studio look
- **Rounded corners** - 1rem border-radius
- **Aspect ratio:** Square (1:1) preferred for hero/profile
- **Composition:** Clean background, subject in focus

### General Photography Guidelines

- **Real over stock when possible** - Authenticity matters
- **Professional but personable** - Not too formal
- **High quality, sharp focus** - No pixelation
- **Consistent style** - Cohesive look across all images
- **Contextual** - Images should support content, not just fill space

---

## Tone of Voice

### Characteristics

- **Honest & Transparent** - "Too many business owners feel locked out of their own site"
- **Empowering** - "You own it" — emphasis on client independence
- **Conversational** - "I do things a little differently"
- **Educational** - Focus on teaching, not gatekeeping
- **Confident but Humble** - "The less you need me for the small stuff, the better I've done my job"

### Writing Style

- **First person** ("I build," not "We build") - Personal connection
- **Direct and clear** - No fluff or corporate speak
- **Avoids jargon** unless necessary (this is tech, after all)
- **Short paragraphs** for scannability
- **Active voice preferred** - More engaging and direct
- **Benefits-focused** - What's in it for the client?

### Example Phrases

✅ **Good:**
- "I'll teach you how to update your own content"
- "You shouldn't need a developer for simple changes"
- "Let's build something you actually understand"

❌ **Avoid:**
- "We leverage cutting-edge technologies to facilitate..."
- "Our enterprise solutions provide synergistic..."
- "Robust, scalable architecture for your needs"

---

## UI Components

### Buttons

**Primary CTA:**
- Background: Primary Blue `#0174DE`
- Text: White `#FFFFFF`
- Font: Inter Medium (500)
- Padding: 0.75rem 1.5rem
- Border radius: 0.5rem (8px)
- Hover: 90% opacity

**Secondary:**
- Border: 2px solid Dark Slate `#34424A`
- Background: Transparent
- Text: Dark Slate `#34424A`
- Same sizing as primary
- Hover: Slight opacity reduction

**Icons in Buttons:**
- Use when adding clarity (ArrowRight for "next" actions)
- Position: After text, 0.5rem gap
- Size: 20px

### Forms

**Input Fields:**
- Background: `#F3F3F5` (light gray)
- Border: None (background provides definition)
- Border radius: 0.625rem (10px)
- Padding: 0.75rem 1rem
- Font: Inter Regular (400)
- Focus state: Ring outline in primary color

**Labels:**
- Position: Above input fields
- Font: Inter Medium (500)
- Color: Dark Slate `#34424A`
- Margin bottom: 0.5rem

**Textareas:**
- Same styling as inputs
- Minimum height: 150px
- Resize: Vertical only

### Cards/Sections

**Service Cards:**
- Background: White or Muted `#ECECF0`
- Border: 1px solid `rgba(0,0,0,0.1)` (optional)
- Border radius: 0.625rem (10px)
- Padding: 2rem
- Subtle shadow for depth
- Pattern: Icon + Title + Description

**Content Sections:**
- Alternating backgrounds (white/muted)
- Consistent vertical padding: 4-6rem
- Horizontal padding: Responsive (container)
- Maximum width: 1200px centered

### Icons

**Library:** Lucide React

**Style:**
- Line style (not filled)
- Consistent stroke width

**Sizing:**
- Standard UI: 20-24px
- Feature highlights: 48px
- Buttons: 20px

**Usage:**
- Enhance, don't replace text
- Use consistently throughout site
- Color matches surrounding text or brand colors

---

## Key Differentiators

### What Makes Fixed Mark Digital Unique

1. **Training-First Approach**  
   Hands-on teaching so clients can manage their sites

2. **Custom Documentation**  
   Site-specific guides, not generic tutorials

3. **Video Walkthroughs**  
   Screen recordings tailored to each client's needs

4. **Independence Philosophy**  
   Success measured by client self-sufficiency

5. **Accessibility Focus**  
   WCAG compliance assessments and remediation

### Services Positioning

- **Not just development** — education and empowerment
- **Consult calls and ongoing support** without creating dependency
- **E-commerce with actual management training**
- **Accessibility as a core offering**, not an afterthought

### Messaging Framework

**Problem:** Business owners feel locked out of their own websites

**Solution:** Build sites with training so clients can manage updates

**Benefit:** Independence, confidence, and cost savings

**Proof:** Custom docs, video walkthroughs, ongoing support without dependency

---

## Responsive Design

### Breakpoints

Following Tailwind CSS defaults:

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md, lg)
- **Desktop:** > 1024px (xl, 2xl)

### Mobile Considerations

- **Touch targets:** Minimum 44px × 44px
- **Simplified navigation:** Hamburger menu on mobile
- **Readable text:** Never smaller than 14px
- **Generous spacing:** More padding on touch devices
- **Single column layouts** for narrow screens

---

## Accessibility Standards

As an accessibility-focused business, Fixed Mark Digital adheres to:

### WCAG 2.1 Level AA Compliance

- **Color contrast ratios:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard navigation:** All interactive elements accessible via keyboard
- **Alt text:** Descriptive text for all meaningful images
- **Focus indicators:** Clear visual focus states
- **Semantic HTML:** Proper heading hierarchy, landmarks
- **Form labels:** All inputs have associated labels

### Testing

- Screen reader testing (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation testing
- Color contrast verification
- Responsive design testing across devices

---

## Use Cases & Applications

### Website
Primary brand showcase - All guidelines apply

### Social Media
- Abbreviated tagline for bios
- Logo as profile picture
- Brand colors in graphics

### Business Cards
- Logo + Name + Tagline
- Contact email
- Clean, minimal design

### Email Signature
```
Jeff Reed
Fixed Mark Digital
I Build It. I Teach It. You Own It.
contact@reedjeffreyr.com
```

### Proposals/Documents
- Full color logo in header
- Brand colors for accents
- Professional tone throughout
- Poppins for headings, Inter for body

---

## Don'ts

### What to Avoid

❌ **Don't overuse Primary Blue** - Use as accent, not everywhere  
❌ **Don't use multiple fonts** - Stick to Poppins + Inter  
❌ **Don't distort the logo** - Maintain aspect ratio always  
❌ **Don't use corporate jargon** - Keep language conversational  
❌ **Don't create dependency** - Philosophy is client independence  
❌ **Don't use stock photos of fake people** - Authentic or nothing  
❌ **Don't ignore accessibility** - It's core to the brand  
❌ **Don't make it complicated** - Simplicity is key  

---

## Version History

**Version 1.0** - April 1, 2026  
Initial brand guide created with Poppins + Inter typography system

---

## Contact

For questions about brand usage or to request assets:

**Jeff Reed**  
contact@reedjeffreyr.com  
Fixed Mark Digital
