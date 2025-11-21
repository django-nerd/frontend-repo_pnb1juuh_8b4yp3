import { useState } from 'react'

function OrderForm() {
  const [form, setForm] = useState({ customer_name: '', phone: '', color: 'black', quantity: 1, note: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: form.customer_name,
          phone: form.phone,
          color: form.color,
          quantity: Number(form.quantity),
          note: form.note || undefined,
        })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
        setForm({ customer_name: '', phone: '', color: 'black', quantity: 1, note: '' })
      } else {
        setStatus('Ошибка при отправке. Попробуйте ещё раз.')
      }
    } catch (e) {
      setStatus('Сеть недоступна. Попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="order" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Оформить заказ</h2>
          <form onSubmit={submit} className="grid md:grid-cols-2 gap-5 text-white/90">
            <div>
              <label className="block text-sm text-white/70 mb-1">Ваше имя</label>
              <input name="customer_name" value={form.customer_name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Телефон/мессенджер</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Цвет</label>
              <select name="color" value={form.color} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                <option value="black">Чёрный</option>
                <option value="brown">Коричневый</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Количество</label>
              <input type="number" name="quantity" min="1" max="10" value={form.quantity} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-white/70 mb-1">Комментарий</label>
              <textarea name="note" value={form.note} onChange={handleChange} rows="3" className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20" />
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <button disabled={loading} className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-semibold">
                {loading ? 'Отправка...' : 'Отправить заявку'}
              </button>
              {status && <p className="text-white/80">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default OrderForm
