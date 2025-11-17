# Components Instructions

These instructions apply when working on files in `components/`.

## Component Standards

### General Guidelines
- Use functional components with React hooks (no class components).
- Keep components focused on a single responsibility.
- Extract reusable logic into custom hooks if needed.
- Components should be self-contained but composable.

### Component Structure
Follow this structure for consistency:
```javascript
import React from 'react';
// Other imports...

export default function ComponentName({ prop1, prop2 }) {
  // Hooks (useState, useEffect, etc.)
  // Event handlers
  // Helper functions
  
  return (
    // JSX
  );
}
```

### Props and PropTypes
- Use destructuring for props in function parameters.
- Keep prop names clear and descriptive.
- Provide sensible defaults for optional props:
  ```javascript
  export default function Button({ text = 'Click me', onClick, variant = 'primary' }) {
    // ...
  }
  ```

### Styling with Tailwind
- Use Tailwind utility classes exclusively (no custom CSS unless absolutely necessary).
- Keep responsive design in mind—use `sm:`, `md:`, `lg:` breakpoints.
- Group related utilities for readability:
  ```javascript
  // Good
  <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
  
  // Avoid long single lines
  <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
  ```
- For complex or repeated utility combinations, consider using template literals or variables:
  ```javascript
  const buttonStyles = "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors";
  ```

### Layout Component
The `Layout` component wraps all pages and includes the Header and Footer.

**When to modify `Layout.js`:**
- Adding global navigation changes
- Adding global state providers
- Modifying site-wide styling or structure

**Things to avoid:**
- Adding page-specific logic to Layout
- Hardcoding content that should be in individual pages

### Header Component
The `Header` component contains the main navigation.

**When modifying navigation:**
- Keep menu items consistent across mobile and desktop views
- Ensure all links use Next.js `<Link>` component for client-side routing
- Test mobile menu functionality (open/close states)
- Maintain accessibility (keyboard navigation, ARIA labels)

**Navigation structure:**
```javascript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  // ...
];
```

### Footer Component
The `Footer` component contains site-wide footer content.

**Guidelines:**
- Keep footer links organized in logical sections
- Include contact information and social links if applicable
- Ensure copyright year updates automatically
- Maintain consistent styling with the rest of the site

### SEO Component
The `SEO` component manages meta tags for SEO.

**When modifying:**
- Accept props for: `title`, `description`, `image`, `url`
- Use `next/head` for meta tags
- Set reasonable defaults that can be overridden per page
- Include Open Graph tags for social sharing
- Example usage in pages:
  ```javascript
  <SEO 
    title="Services | Heartfelt Living Renovations"
    description="Professional kitchen, bathroom, and whole-home renovation services"
  />
  ```

### Creating New Components

**Before creating a new component, check if:**
1. Similar functionality exists in another component
2. The code can be added to an existing component without bloating it
3. The component will be reused in multiple places (if not, consider inline JSX)

**New component checklist:**
- [ ] Named descriptively (e.g., `ContactForm.js`, not `Form.js`)
- [ ] Uses functional component syntax
- [ ] Styled with Tailwind utilities
- [ ] Handles edge cases (loading, errors, empty states)
- [ ] Imports only what it needs
- [ ] Exported as default export
- [ ] Used in at least one page to verify it works

### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects (API calls, subscriptions)
- Pass state down as props rather than using complex state management (no Redux/Zustand unless explicitly added)
- Lift state up to the nearest common parent if multiple components need it

### Accessibility
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- Include `alt` text for all images
- Ensure interactive elements are keyboard accessible
- Use ARIA attributes when necessary for screen readers

### Performance
- Avoid unnecessary re-renders (use `React.memo` if a component is expensive and props rarely change)
- Keep components small and focused
- Don't import entire libraries when you only need one function

### Common Patterns in This Project

**Link component pattern:**
```javascript
import Link from 'next/link';

<Link href="/services" className="text-blue-600 hover:underline">
  Our Services
</Link>
```

**Button pattern:**
```javascript
<button 
  onClick={handleClick}
  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
>
  Button Text
</button>
```

**Section container pattern:**
```javascript
<section className="py-12 px-4 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-6">Section Title</h2>
  {/* Section content */}
</section>
```
