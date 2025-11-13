import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }){
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <Footer />
    </>
  )
}
