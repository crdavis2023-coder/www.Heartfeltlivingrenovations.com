import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })
  try {
    await sendgrid.send({
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM, // must be verified in SendGrid
      subject: `New Contact from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`
    })
    return res.status(200).json({ ok: true })
  } catch (e){
    console.error(e)
    return res.status(500).json({ error: 'Email failed' })
  }
}
