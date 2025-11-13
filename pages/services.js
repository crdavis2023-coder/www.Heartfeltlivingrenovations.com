import SEO from '../components/SEO'

const SERVICES = [
  { id: 'kitchen', name: 'Kitchen Remodels', price: 'Starting at $12,500', desc: 'Cabinets, counters, lighting, layout.' },
  { id: 'bathroom', name: 'Bathroom Remodels', price: 'Starting at $8,000', desc: 'Tubs, showers, tile, waterproofing.' },
  { id: 'flooring', name: 'Flooring Installation', price: 'From $6.50 / sq ft', desc: 'LVP, hardwood, tile installations.' },
  { id: 'repairs', name: 'Repairs & Handyman', price: '$95 / hr', desc: 'Small electrical, plumbing, drywall, and repairs.' }
]

export default function Services(){
  return (
    <>
      <SEO title="Services" description="Comprehensive remodeling, renovation, and repair services." />
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map(s => (
          <div key={s.id} className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-[#7A1F3A] font-semibold">{s.price}</p>
            <p className="mt-2">{s.desc}</p>
            <a href={`/services/${s.id}`} className="text-[#7A1F3A] underline mt-2 inline-block">Learn more</a>
          </div>
        ))}
      </div>
    </>
  )
}
