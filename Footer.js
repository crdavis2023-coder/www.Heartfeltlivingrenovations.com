export default function Footer(){
  return (
    <footer className="bg-[#111827] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="font-bold">Heartfelt Living Renovations LLC</div>
          <div className="text-sm mt-2">Craftsmanship with a personal touch.</div>
        </div>
        <div className="text-sm">
          <div>Phone: 803-748-5811</div>
          <div>Email: davis.cr803@gmail.com</div>
          <div>Serving: Triangle & surrounding areas</div>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Quick Links</div>
          <div className="mt-2">Services · Gallery · Schedule · Contact</div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 pb-6">© {new Date().getFullYear()} Heartfelt Living Renovations LLC. All rights reserved.</div>
    </footer>
  )
}
