---
description: Portfolio project rules for Copilot
scope: github-copilot
---

# GitHub Copilot Design Rules

When generating code, follow these principles:

## Code Style

- Use Vue 3 Composition API with `<script setup>`
- Always include TypeScript (`lang="ts"`)
- Import components at top of script
- Use scoped styles with `<style scoped>`

## Component Structure

```vue
<script setup lang="ts">
// Imports first
import { ref } from 'vue';
import OtherComponent from './OtherComponent.vue';

// Types
type Props = { ... }

// Props and emits
const props = defineProps<Props>();
const emit = defineEmits<...>();

// State
const state = ref(...);

// Methods
const handler = () => { ... };
</script>

<template>
  <!-- JSX-style templates -->
</template>

<style scoped>
/* Only component-specific styles */
</style>
```

## Styling Rules

- Use Tailwind utility classes only
- Never use inline `style=` attributes
- Theme-aware: use `bg-base-100`, `text-base-content`
- Always include accessibility: `aria-label`, `aria-disabled`
- Responsive: mobile-first with `md:`, `lg:` prefixes

❌ Bad:
```vue
<div style="background-color: #0C151D; padding: 16px;">
```

✅ Good:
```vue
<div class="bg-base-100 p-4">
```

## Component Props

Always define types for props:

```typescript
type Props = {
  text: string;
  isActive?: boolean;
  icon?: string;
}

const { text, isActive = false, icon = '' } = defineProps<Props>();
```

## DaisyUI Components

Available classes:
- Buttons: `btn`, `btn-primary`, `btn-ghost`, `btn-lg`
- Layout: `tabs`, `tabs-xl`, `tabs-box`
- Forms: `input`, `select`, `checkbox`, `radio`
- Badges: `badge`, `badge-primary`
- Cards: `card`, `card-body`, `card-title`

## Focus States

Always include focus/hover states:

```vue
<button 
  class="btn btn-primary hover:opacity-90 focus:outline-offset-2 focus:outline"
  @click="handler"
>
  Action
</button>
```

## Accessibility

- All buttons need `aria-label` or text content
- Form inputs: `<label for="input-id">` + `<input id="input-id">`
- Icons via `@iconify/vue`: use `Icon` component
- Color contrast: verify with WCAG AA standard

## Component Examples

See `src/components/` for reference implementations:
- ButtonTheme - toggle with icons
- ProfileButton - primary and ghost variants
- TabSwitch - accessible tabs
- ProfileInfo - semantic structure

---

Last updated: 2026-06-11
