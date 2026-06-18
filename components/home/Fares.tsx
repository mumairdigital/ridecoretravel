import Image from 'next/image'
import { routes, pricesNote } from '@/lib/prices'
import { site } from '@/lib/site'

export default function Fares() {
  return (
    <section id="fares" className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Transparent Pricing</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-cream tracking-tight text-center mb-4">
          Fixed Fares — Clear &amp; Competitive
        </h2>
        <p className="text-grey text-center mb-14 max-w-xl mx-auto">
          All prices are fixed. No surge pricing, no surprises. What you see is what you pay.
        </p>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Route cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {routes.map((r) => (
              <div
                key={r.slug}
                className="bg-graphite border border-white/10 rounded-sm p-6 flex flex-col gap-5 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-cream font-semibold tracking-tight">{r.route}</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-grey text-xs">
                      <th className="text-left font-normal pb-2">Passengers</th>
                      <th className="text-right font-normal pb-2">Single</th>
                      <th className="text-right font-normal pb-2">Return</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-2 text-cream/70 text-xs">1–4 passengers</td>
                      <td className="py-2 text-right text-gold font-semibold">£{r.single14}</td>
                      <td className="py-2 text-right text-gold font-semibold">£{r.return14}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-cream/70 text-xs">5–8 passengers</td>
                      <td className="py-2 text-right text-gold font-semibold">£{r.single58}</td>
                      <td className="py-2 text-right text-gold font-semibold">£{r.return58}</td>
                    </tr>
                  </tbody>
                </table>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto border border-gold/50 text-gold text-xs font-semibold px-4 py-2.5 rounded-sm text-center hover:bg-gold hover:text-charcoal transition-colors tracking-wide"
                >
                  Book This Route
                </a>
              </div>
            ))}
          </div>

          {/* Feature image */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="/images/routes/vito-airport-terminal.webp"
                alt="Mercedes Vito at airport terminal departure drop-off"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            <p className="text-grey text-xs text-center italic">{pricesNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
