# Portfolio Design Brief

## Product

A personal developer portfolio showcasing skills, projects, and professional information.

## Users

Recruiters, potential clients, and collaborators viewing the portfolio on desktop and mobile devices.

## Brand Voice

Clean, professional, and modern. No hype. Emphasis on clarity and readability over flashy effects.

## Core Features

1. **Profile Section** - Hero area with profile photo, name, and brief bio
2. **Skills Gallery** - Tabbed interface showing technical skills with descriptions
3. **Portfolio Gallery** - Project showcase with images and links
4. **Call-to-Action** - Download CV and Contact buttons
5. **Theme Toggle** - Dark/light theme switcher

## Design Constraints

- Dark theme first (background #0C151D)
- Must support theme switching
- Mobile-first responsive design
- Semantic HTML structure
- No gradients (anti-pattern)
- No "glassmorphism" effects
- Accessible color contrast (WCAG AA minimum)

## Typography

- Font: Poppins
- Sizes: Follow Tailwind scale
- Weight: Regular (400) and Medium (500)

## Anti-Patterns (Do NOT use)

- Purple gradients
- Glassmorphism overlays
- "Boost your productivity" marketing copy
- Vague buttons like "Welcome to our platform"
- Bouncing or spring animations

## Color Palette

- Primary Action: #FFE071 (yellow)
- Dark: #0C151D, #0B1218
- Neutral: #3D3D3D, #A3ABB2, #171F26
- Status: Emerald, Green, Yellow, Blue, Orange, Red for skill colors

## Reference

- See src/style.css for Tailwind and DaisyUI setup
- See .vscode/extensions for recommended VS Code extensions
