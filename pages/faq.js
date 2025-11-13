import SEO from '../components/SEO'

const faqs = [
  { q: 'Do you offer free estimates?', a: 'Yes. We provide free in‑home estimates and written scopes.' },
  { q: 'Are you licensed and insured?', a: 'Yes. We are fully licensed and insured; documentation available upon request.' },
  { q: 'Which areas do you service?', a: 'Triangle & surrounding areas. Send your ZIP if you are unsure.' },
  { q: 'Do you offer warranties?', a: 'Yes. Most projects include a workmanship warranty; terms vary by scope.' },
  { q: 'How do deposits and payments work?', a: 'Deposits vary by project size. We accept major payment methods and provide itemized invoices.' }
]

export default function FAQ(){
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  }

  return (
    <>
      <SEO title="FAQ" description="Frequently asked questions about estimates, licensing, service area, warranties, and payments." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 border rounded">
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-slate-700">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  )
}
