import Layout from './Layout'
export default function Gallery(){ return (
<Layout>
  <h1 className="text-3xl font-bold mb-4">Gallery</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <img src="/kitchen-before.jpg" alt="kitchen before" className="w-full rounded shadow"/>
    <img src="/kitchen-after.jpg" alt="kitchen after" className="w-full rounded shadow"/>
    <img src="/bath-before.jpg" alt="bath before" className="w-full rounded shadow"/>
    <img src="/bath-after.jpg" alt="bath after" className="w-full rounded shadow"/>
  </div>
</Layout>
) }