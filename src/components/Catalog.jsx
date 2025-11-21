import { useEffect, useState } from 'react'

function Catalog() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/catalog`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError('Не удалось загрузить каталог')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="catalog" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Выберите цвет</h2>
        {loading ? (
          <p className="text-white/70">Загрузка...</p>
        ) : error ? (
          <p className="text-red-300">{error}</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <img src={item.images?.[0] || '/images/wallet-hero.jpg'} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-white/90">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-400">{item.price.toLocaleString('ru-RU')} ₽</span>
                    <a href="#order" className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold">Заказать</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Catalog
