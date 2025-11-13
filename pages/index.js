import Layout from '../components/Layout'

export default function Home(){ return (
<Layout>
  <div className='text-center'>
    <img src='/logo.png' alt='logo' className='mx-auto h-24'/>
    <h1 className='text-4xl font-bold mt-4'>Heartfelt Living Renovations</h1>
    <p className='mt-2'>Bright, friendly, professional home renovation services.</p>
    <div className='mt-4 space-x-3'>
      <a href='/services' className='px-4 py-2 rounded bg-brand-100 text-white'>Our Services</a>
      <a href='/schedule' className='px-4 py-2 rounded border'>Get an Estimate</a>
    </div>
  </div>
</Layout>
) }