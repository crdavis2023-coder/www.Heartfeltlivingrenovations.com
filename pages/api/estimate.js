import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const payload = req.body || {}
  const { name, phone, email, address, date, time, notes } = payload
  if (!name || !phone) return res.status(400).json({ error: 'Name and phone are required' })

  try {
    await sendgrid.send({
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM, // must be verified in SendGrid
      subject: `Estimate Request — ${name}`,
      html: `
        <h3>New Estimate Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || '—'}</p>
        <p><b>Address:</b> ${address || '—'}</p>
        <p><b>Preferred Date/Time:</b> ${date || '—'} ${time || ''}</p>
        <p><b>Notes:</b> ${notes || '—'}</p>
      `
    })
    return res.status(200).json({ ok: true })
  } catch (e){
    console.error(e)
    return res.status(500).json({ error: 'Email failed' })
  }
}
