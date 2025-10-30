import { useRouter } from 'next/router'
import SEO from '../../components/SEO'

const SERVICES = {
  kitchen: {
    title: 'Kitchen Remodeling',
    description: 'Full-service kitchen remodels: cabinets, countertops, lighting, layout updates, and more.',
    price: 'Starting at $12,500',
    bullets: [
      'Custom cabinetry & refacing',
      'Countertops (quartz, granite, butcher block)',
      'Tile backsplash & lighting upgrades',
      'Layout optimization & appliance relocation'
    ]
  },
  bathroom: {
    title: 'Bathroom Remodeling',
    description: 'Modern bathroom renovations with waterproofing, tile, showers, and vanities.',
    price: 'Starting at $8,000',
    bullets: [
      'Curbless showers & tubs',
      'Tile floors/walls, waterproofing systems',
      'Vanities, fixtures, and ventilation',
      'Accessibility updates'
    ]
  },
  flooring: {
    title: 'Flooring Installation',
    description: 'Professional installation of LVP, hardwood, and tile with proper prep and underlayment.',
    price: 'From $6.50 / sq ft',
    bullets: [
      'Subfloor leveling & moisture testing',
      'LVP, engineered hardwood, tile',
      'Transitions & trim',
      'Demolition and haul-away options'
    ]
  },
  repairs: {
    title: 'Repairs & Handyman',
    description: 'Reliable home repairs: drywall, small electrical/plumbing, doors, and more.',
    price: '$95 / hr',
    bullets: [
      'Drywall patch & paint',
      'Fixture replacement',
      'Door/window adjustments',
      'Minor leak and electrical fixes'
    ]
  }
}

export default function ServicePage(){
  const { query } = useRouter()
  const data = SERVICES[query.slug] || null

  if (!data) return <p className="py-20">Service not found.</p>

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    serviceType: data.title,
    description: data.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Heartfelt Living Renovations LLC',
      telephone: '803-748-5811',
      url: process.env.SITE_URL || 'https://heartfelthomerenovations.com'
    },
    areaServed: 'Triangle & surrounding areas',
    offers: {
      '@type': 'Offer',
      price: data.price.replace(/[^0-9.]/g, '') || undefined,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }

  return (
    <>
      <SEO title={data.title} description={data.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-slate-700 mb-4">{data.description}</p>
      <div className="text-[#7A1F3A] font-semibold mb-6">{data.price}</div>
      <ul className="list-disc pl-6 space-y-1">{data.bullets.map((b,i)=>(<li key={i}>{b}</li>))}</ul>
      <div className="mt-8">
        <a href="/schedule" className="inline-block bg-[#7A1F3A] text-white px-5 py-3 rounded">Request an Estimate</a>
      </div>
    </>
  )
}
