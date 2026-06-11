## Impeccable Setup

✅ Impeccable design system successfully installed!

### What You Get

Impeccable provides design vocabulary for AI agents to generate better UI without "design slop". It includes:

- **23 Design Commands**: `/impeccable craft`, `/impeccable polish`, `/impeccable typeset`, etc.
- **Anti-pattern Detection**: `/impeccable detect` checks for 41 common AI UI mistakes
- **Design System Documentation**: DESIGN.md + PRODUCT.md define your brand and rules
- **Agent Instructions**: Files in `.claude/` and `.agents/` guide Copilot and Claude

### Quick Start

#### 1. Review Your Design System
- Open **DESIGN.md** - Complete design system reference
- Open **PRODUCT.md** - Product context and brand voice
- These files are loaded for every Impeccable command

#### 2. Use Impeccable Commands in GitHub Copilot

When asking Copilot to build UI, mention:
- **For new features**: "Use `/impeccable craft` workflow"
- **For polish**: "Use `/impeccable polish` to fix this component"
- **For type**: "Use `/impeccable typeset` for better typography"
- **For colors**: "Use `/impeccable colorize` and ensure WCAG AA contrast"

#### 3. Check for Design Issues
```bash
npx impeccable detect src/
```

Outputs 41 checks for:
- ❌ Purple gradients
- ❌ Glassmorphism
- ❌ Poor contrast
- ❌ Generic copy
- ❌ Bad animations
- ...and more

### Your Design System

**Theme**: Dark-first with light mode support via DaisyUI
**Colors**: Yellow (#FFE071) primary, semantic DaisyUI classes
**Typography**: Poppins font, clear hierarchy
**Spacing**: Tailwind scale with 7.5px units
**Components**: See `src/components/` for reference implementations

### File Structure

```
app/
├── .claude/
│   └── impeccable.md          # Quick reference for Claude
├── .agents/
│   ├── design.md              # Design system rules
│   └── copilot.md             # GitHub Copilot guidelines
├── .copilot-instructions.md   # Copilot instruction file
├── DESIGN.md                  # Full design system documentation
├── PRODUCT.md                 # Product context and brand voice
└── src/components/            # Reference components
```

### Pro Tips

✅ **Before designing**, mention: "Refer to DESIGN.md and PRODUCT.md"
✅ **Always use theme classes**: `bg-base-100`, `text-base-content`, `btn-primary`
✅ **Mobile-first**: Use `md:`, `lg:` for responsive design
✅ **No inline styles**: Always use Tailwind classes
✅ **Dark theme first**: Design looks good in dark, enhance light mode

### Anti-Patterns (What NOT to Do)

🚫 Purple gradients
🚫 Glassmorphism (blur + transparency)
🚫 Generic copy ("Welcome to our platform")
🚫 Bouncy animations
🚫 Hard shadows
🚫  100% saturation colors
🚫 Missing accessibility (aria-labels, focus states)

### Example Conversation with Copilot

```
You: "Add a hero section showcase component"
Copilot: "I'll create a component..."

You: "Use `/impeccable craft` workflow and refer to DESIGN.md"
Copilot: [follows design system rules]
```

### Next Steps

1. ✅ Theme toggle is already implemented (ButtonTheme.vue)
2. ✅ Dark theme is default with light mode support
3. 📝 Run `npm run dev` to test the portfolio
4. 📝 Use Copilot with Impeccable for future UI enhancements

---

**Learn more**: https://impeccable.style/
**Commands**: See `.claude/impeccable.md` or `.agents/design.md`
**Last configured**: 2026-06-11
