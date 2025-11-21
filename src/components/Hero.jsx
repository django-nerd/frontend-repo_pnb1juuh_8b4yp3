function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-12">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(900px_400px_at_10%_-10%,#f59e0b_10%,transparent_60%),radial-gradient(900px_400px_at_90%_-20%,#1f2937_5%,transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Мужские кожаные кошельки
            <span className="block text-amber-400">чёрный и коричневый</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Натуральная кожа, аккуратная прострочка, компактный формат. Идёт в премиальной подарочной упаковке — готово к вручению.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#catalog" className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow">
              Посмотреть модели
            </a>
            <a href="#order" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20">
              Оформить заказ
            </a>
          </div>
          <p className="mt-3 text-sm text-white/60">Доставка по России. Оплата при получении.</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img src="/images/wallet-hero.jpg" alt="Кожаный кошелёк" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-xl text-sm">
            Подарочная коробка в комплекте
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
