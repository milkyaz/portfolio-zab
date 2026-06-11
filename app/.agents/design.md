---
description: Impeccable design system for portfolio
focus: design
---

# Design System

## Typography

- **Font**: Poppins
- **Base Size**: 16px (from Tailwind)
- **Scale**: sm(14px) → base(16px) → lg(18px) → xl(20px) → 2xl(24px)
- **Weight**: Regular (400) for body, Medium (500) for headers

## Color System

### Light Mode (DaisyUI 'light' theme)
- Background: #ffffff
- Foreground: #1a1a1a
- Primary: #FFE071 (yellow)

### Dark Mode (DaisyUI 'dark' theme - default)
- Background: #0C151D
- Foreground: #ffffff
- Primary: #FFE071 (yellow)

### Semantic Colors
- Primary action: Yellow #FFE071
- Secondary: Ghost buttons (#171F26)
- Success: Emerald-500
- Info: Blue-500
- Warning: Orange-500
- Danger: Red-500

## Spacing

Use Tailwind spacing scale:
- gap-3.5 (14px)
- gap-7.5 (30px)
- px-3, px-6 for padding
- py-3, py-4 for vertical padding

## Components

### ProfileButton
```vue
<!-- Primary with icon -->
<button class="btn btn-lg btn-primary rounded-xl">
  <span class="text-xs px-2.5">{{ text }}</span>
  <Icon :icon="icon" />
</button>

<!-- Ghost link -->
<button class="btn btn-lg btn-ghost rounded-xl">
  <span class="text-xs px-6">{{ text }}</span>
</button>
```

### Layout
- Min height: 100vh for full screen
- Max width: md (28rem) for constrained sections
- Center with mx-auto
- Grid/flex for layout

## Theme Integration

Use DaisyUI semantic classes:
- `bg-base-100` - Primary background
- `bg-base-200` - Secondary background
- `text-base-content` - Primary text
- `btn-primary` - Primary button
- `btn-ghost` - Ghost button

## Anti-Patterns to Avoid

❌ Purple gradients
❌ Glassmorphism (backdrop-blur + transparency)
❌ Generic copy: "Welcome to our platform"
❌ Vague CTAs without action verbs
❌ Bouncing animations
❌ Hard shadows (use soft, controlled shadows)
❌ 100% saturation colors
❌ Inline styles (always use Tailwind classes)

## Responsive Design

Mobile-first approach:
- Base: mobile (no breakpoint needed)
- md: 768px tablets
- lg: 1024px desktops
- xl: 1280px large screens

Example:
```vue
<div class="flex flex-col md:flex-row gap-3.5">
  <!-- Stacked on mobile, row on tablets+ -->
</div>
```

---

See `DESIGN.md` for full design documentation.
