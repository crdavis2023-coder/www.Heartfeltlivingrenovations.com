import { useState } from 'react'
import SEO from '../components/SEO'

export default function Schedule(){
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', date: '', time: '', notes: '' })
  const [status, setStatus] = useState(null)

  const handle = async (e) => {
    e.preventDefault()
    if(!form.name || !form.phone){ setStatus('error'); return; }
    setStatus('loading')
    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', address: '', date: '', time: '', notes: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Schedule" description="Request an in-home estimate or consultation." />
      <h1 className="text-3xl font-bold mb-6">Schedule an Estimate</h1>
      <form onSubmit={handle} className="grid md:grid-cols-2 gap-4">
        <input required placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="p-3 border rounded" />
        <input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="p-3 border rounded" />
        <input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="p-3 border rounded" />
        <input placeholder="Service Address" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} className="p-3 border rounded" />
        <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} className="p-3 border rounded" />
        <input type="time" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} className="p-3 border rounded" />
        <textarea placeholder="Project details" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} className="md:col-span-2 p-3 border rounded" />
        <button type="submit" disabled={status==='loading'} className="md:col-span-2 bg-[#7A1F3A] text-white py-3 rounded">{status==='loading' ? 'Sending...' : 'Request Estimate'}</button>
      </form>
      {status === 'success' && <div className="mt-4 text-green-600">Thanks — we received your request. We'll confirm within 1 business day.</div>}
      {status === 'error' && <div className="mt-4 text-red-600">There was a problem submitting. Please try again.</div>}
    </>
  )
}
