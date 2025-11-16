import Layout from './Layout'
export default function Pricing(){ return (
<Layout>
  <h1 className="text-3xl font-bold mb-4">Pricing</h1>
  <p className="mb-4">Below are baseline, national-average price ranges for common home renovation services. These are estimates — final costs depend on materials, scope, and local labor.</p>
  <ul className="list-disc pl-6 space-y-2">
    <li><strong>Kitchen Remodel:</strong> $10,000 – $35,000</li>
    <li><strong>Bathroom Remodel:</strong> $6,000 – $20,000</li>
    <li><strong>Flooring (per room):</strong> $1,000 – $5,000</li>
    <li><strong>Painting (interior whole home):</strong> $1,500 – $5,000</li>
    <li><strong>Drywall Repair:</strong> $200 – $1,000</li>
    <li><strong>Roof Repair/Replacement:</strong> $5,000 – $15,000</li>
    <li><strong>Exterior Siding:</strong> $4,000 – $12,000</li>
    <li><strong>Trim & Molding:</strong> $300 – $2,000</li>
    <li><strong>Electrical (upgrades):</strong> $500 – $5,000</li>
    <li><strong>Plumbing (repairs, modest upgrades):</strong> $150 – $3,000</li>
  </ul>
  <p className="mt-6">These are baseline ranges. For accurate pricing, please request an estimate via the <a href="/schedule" className="underline">Schedule</a> page.</p>
</Layout>
) }