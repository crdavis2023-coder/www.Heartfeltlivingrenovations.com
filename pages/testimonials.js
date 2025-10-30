import Layout from './Layout'
export default function Testimonials(){ return (
<Layout>
  <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
  <div className="space-y-4">
    <blockquote className="border-l-4 pl-4 italic">"Heartfelt Living Renovations transformed our kitchen — professional and on-time." — Sarah M.</blockquote>
    <blockquote className="border-l-4 pl-4 italic">"Excellent communication and quality workmanship." — Daniel R.</blockquote>
    <p className="mt-4">Want to submit a testimonial? Use our <a href="/contact" className="underline">contact</a> form.</p>
  </div>
</Layout>
) }