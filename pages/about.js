import SEO from '../components/SEO'

export default function About(){
  return (
    <>
      <SEO title="About" description="About Heartfelt Living Renovations — our mission, values, and team." />
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose">
        <p>Heartfelt Living Renovations LLC is a customer-first remodeling and repair company focused on quality craftsmanship and honest pricing. We treat every home like it's our own and back our work with a satisfaction guarantee.</p>
        <h3>Credentials</h3>
        <ul>
          <li>Licensed & Insured</li>
          <li>Lead-safe practices</li>
          <li>Warranty-backed work</li>
        </ul>
      </div>
    </>
  )
}
