import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-stone-800 flex items-center justify-center text-white font-bold shadow-lg">LW</div>
          <div>
            <p className="text-white font-semibold text-lg leading-tight">Leather Wallets</p>
            <p className="text-xs text-amber-300/80">Подарочная упаковка включена</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Преимущества</a>
          <a href="#catalog" className="hover:text-white transition">Каталог</a>
          <a href="#order" className="hover:text-white transition">Заказать</a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/80 hover:text-white"
          aria-label="menu"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-white/90 space-y-3">
            <a href="#features" className="block">Преимущества</a>
            <a href="#catalog" className="block">Каталог</a>
            <a href="#order" className="block">Заказать</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
