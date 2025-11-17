import { useState } from 'react'
import SEO from '../components/SEO'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handle = async (e) => {
    e.preventDefault()
    if(!form.name || !form.email || !form.message){ setStatus('error'); return; }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Heartfelt Living Renovations. We're here to answer your questions and help with your home renovation needs." />
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-4">Have a question or ready to start your next project? Fill out the form and we'll get back to you within 1 business day.</p>
          <div className="space-y-2 text-sm">
            <div><strong>Phone:</strong> 803-748-5811</div>
            <div><strong>Email:</strong> crdavis39@heartfeltlivingrenovations.com</div>
            <div><strong>Service Area:</strong> Triangle & surrounding areas</div>
          </div>
        </div>
        <form onSubmit={handle} className="space-y-4">
          <input 
            required 
            placeholder="Your Name" 
            value={form.name} 
            onChange={e=>setForm({...form, name:e.target.value})} 
            className="w-full p-3 border rounded" 
          />
          <input 
            required 
            type="email" 
            placeholder="Your Email" 
            value={form.email} 
            onChange={e=>setForm({...form, email:e.target.value})} 
            className="w-full p-3 border rounded" 
          />
          <textarea 
            required 
            placeholder="Your Message" 
            value={form.message} 
            onChange={e=>setForm({...form, message:e.target.value})} 
            className="w-full p-3 border rounded h-32" 
          />
          <button 
            type="submit" 
            disabled={status==='loading'} 
            className="w-full bg-[#7A1F3A] text-white py-3 rounded hover:bg-[#5A1528] transition-colors"
          >
            {status==='loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">Thanks for your message! We'll respond within 1 business day.</div>}
          {status === 'error' && <div className="mt-4 p-3 bg-red-100 text-red-800 rounded">There was a problem sending your message. Please try again or call us directly.</div>}
        </form>
      </div>
    </>
  )
}
