function Features() {
  const items = [
    { title: 'Натуральная кожа', desc: 'Мягкая на ощупь, износостойкая. Со временем приобретает красивую патину.' },
    { title: 'Удобная организация', desc: 'Отделения для купюр, карт и визиток. Ничего лишнего.' },
    { title: 'Идея для подарка', desc: 'Стильная коробка уже в комплекте — остаётся только подарить.' },
  ]
  return (
    <section id="features" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Почему выбирают нас</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-white/90">
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="text-sm mt-2 text-white/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
