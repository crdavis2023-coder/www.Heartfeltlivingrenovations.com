import Layout from './Layout'
export default function Payments(){ return (
<Layout>
  <h1 className="text-3xl font-bold mb-4">Payments</h1>
  <p className="mb-4">We accept secure online payments via Stripe or PayPal. Click below to pay an invoice or leave a deposit.</p>
  <div className="space-x-4">
    <a href={process.env.NEXT_PUBLIC_STRIPE_LINK || '#'} className="px-4 py-2 rounded bg-brand-100 text-white">Pay with Stripe</a>
    <a href="https://www.paypal.com/paypalme/yourlink" className="px-4 py-2 rounded border">Pay with PayPal</a>
  </div>
  <p className="mt-4">Want ACH? Contact us via the <a href="/contact" className="underline">contact</a> page for direct-transfer instructions.</p>
</Layout>
) }