# Pages Instructions

These instructions apply when working on files in `pages/`.

## Next.js Pages Standards

### Page Structure
Every page should follow this general structure:

```javascript
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function PageName() {
  return (
    <Layout>
      <SEO 
        title="Page Title | Heartfelt Living Renovations"
        description="Page description for SEO"
      />
      
      {/* Page content */}
    </Layout>
  );
}
```

### File-Based Routing
- Each `.js` file in `pages/` automatically becomes a route
- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/services.js` → `/services`
- `pages/api/contact.js` → `/api/contact` (API endpoint, not a page)
- `pages/[slug].js` → `/anything` (dynamic catch-all route)

### Page Responsibilities
Pages should:
- Handle layout composition (using `<Layout>`)
- Manage page-specific state
- Fetch data if needed (using `getStaticProps`, `getServerSideProps`, or client-side fetching)
- Set SEO metadata via the `<SEO>` component

Pages should NOT:
- Contain complex business logic (extract to utilities)
- Have inline styles (use Tailwind classes)
- Duplicate navigation/header/footer (that's in `<Layout>`)

### SEO for Every Page
Every page must include the `<SEO>` component with:
- A unique, descriptive title
- A compelling meta description (150-160 characters)
- Optionally, an image and canonical URL

Example:
```javascript
<SEO 
  title="Kitchen & Bathroom Renovations | Heartfelt Living Renovations"
  description="Transform your home with our expert kitchen and bathroom renovation services. Quality craftsmanship, transparent pricing, and exceptional service."
/>
```

### Form Pages (schedule.js, estimate.js, contact.js)

**Form pages should:**
1. **Validate input client-side** before submission
   - Check required fields
   - Validate email format
   - Show validation errors clearly
2. **Handle submission properly**
   - Disable the submit button during submission
   - Show loading state
   - POST to the appropriate API route (`/api/contact` or `/api/estimate`)
   - Handle success and error responses
3. **Display feedback to users**
   - Success message: "Thank you! We'll get back to you soon."
   - Error message: "Something went wrong. Please try again."
   - Clear error messages for validation failures

**Example form submission pattern:**
```javascript
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState({ type: '', message: '' });
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: '', message: '' });

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
      setStatus({ type: 'success', message: data.message });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setStatus({ type: 'error', message: data.error || 'Something went wrong' });
    }
  } catch (error) {
    setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Content Pages (services.js, pricing.js, testimonials.js, faq.js)

**Content pages should:**
- Be easy to scan (clear headings, short paragraphs)
- Use consistent typography hierarchy (h1 → h2 → h3)
- Include clear calls-to-action (CTAs) like "Get a Free Estimate"
- Be mobile-responsive
- Load quickly (optimize images, avoid heavy animations)

**Common content patterns:**

**Hero section:**
```javascript
<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Title</h1>
    <p className="text-xl mb-8">Compelling subtitle or value proposition</p>
    <Link href="/schedule" className="btn-primary">
      Get Started
    </Link>
  </div>
</section>
```

**Content section:**
```javascript
<section className="py-12 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-6">Section Heading</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Content cards or columns */}
  </div>
</section>
```

**CTA section:**
```javascript
<section className="bg-gray-100 py-12 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
    <p className="text-lg mb-6">Get a free, no-obligation estimate today.</p>
    <Link href="/estimate" className="btn-primary">
      Request Free Estimate
    </Link>
  </div>
</section>
```

### Data Fetching

**Static generation (preferred for marketing pages):**
```javascript
export async function getStaticProps() {
  // Fetch data at build time
  const data = await fetchData();
  
  return {
    props: { data },
    revalidate: 3600 // Revalidate every hour (ISR)
  };
}
```

**Server-side rendering (for dynamic content):**
```javascript
export async function getServerSideProps() {
  // Fetch data on every request
  const data = await fetchData();
  
  return {
    props: { data }
  };
}
```

**Client-side fetching (for non-SEO content):**
```javascript
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  // Render...
}
```

### Linking Between Pages
Always use Next.js `<Link>` component for internal navigation:

```javascript
import Link from 'next/link';

<Link href="/services">Our Services</Link>
```

For external links, use regular `<a>` tags:
```javascript
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
```

### Images
Use Next.js `<Image>` component for optimized images:

```javascript
import Image from 'next/image';

<Image 
  src="/images/kitchen-renovation.jpg"
  alt="Beautiful kitchen renovation"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

For Unsplash images (domain already configured in `next.config.js`):
```javascript
<Image 
  src="https://images.unsplash.com/photo-..."
  alt="Description"
  width={800}
  height={600}
/>
```

### Responsive Design
- Always test pages on mobile, tablet, and desktop
- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Stack content vertically on mobile, horizontally on larger screens:
  ```javascript
  <div className="flex flex-col md:flex-row gap-4">
    {/* Content */}
  </div>
  ```

### Performance Best Practices
- Lazy load images (Next.js `<Image>` does this automatically)
- Minimize JavaScript on content-heavy pages
- Avoid layout shift (specify image dimensions)
- Keep pages under 100KB (initial load)

### Accessibility
- Use proper heading hierarchy (only one h1 per page)
- Include descriptive alt text for all images
- Ensure sufficient color contrast (text on backgrounds)
- Make interactive elements keyboard accessible
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)

### Before Considering a Page Complete
- [ ] Page loads without console errors
- [ ] SEO component is properly configured
- [ ] Page is wrapped in `<Layout>`
- [ ] All links work (no 404s)
- [ ] Forms validate and submit correctly
- [ ] Page is mobile-responsive
- [ ] Images have alt text and load properly
- [ ] Text is readable and well-formatted
- [ ] CTAs are clear and actionable
- [ ] Page builds successfully (`npm run build`)
