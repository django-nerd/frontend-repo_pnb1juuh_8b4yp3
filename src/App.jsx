import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'
import OrderForm from './components/OrderForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-50%,rgba(245,158,11,0.15),transparent_50%)]" />

      <Header />
      <Hero />
      <Features />
      <Catalog />
      <OrderForm />

      <footer className="py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Leather Wallets • Подарочная упаковка включена
      </footer>
    </div>
  )
}

export default App
