export default function Header(){ return (
  <header className="flex items-center justify-between p-4 bg-white shadow">
    <div className="flex items-center space-x-3">
      <img src="/logo.png" alt="Heartfelt Living logo" className="h-12 w-auto"/>
      <span className="text-xl font-bold">Heartfelt Living Renovations</span>
    </div>
    <nav className="space-x-4">
      <a href="/" className="hover:underline">Home</a>
      <a href="/services" className="hover:underline">Services</a>
      <a href="/pricing" className="hover:underline">Pricing</a>
      <a href="/gallery" className="hover:underline">Gallery</a>
      <a href="/testimonials" className="hover:underline">Testimonials</a>
      <a href="/schedule" className="hover:underline">Schedule</a>
      <a href="/payments" className="hover:underline">Payments</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </nav>
  </header>
) }