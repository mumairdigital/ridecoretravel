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
          Airport Transfer Fixed Fares
        </h2>
        <p className="text-grey text-center mb-14 max-w-xl mx-auto">
          Fixed prices from Leeds City Centre. No surge pricing, no hidden fees.
        </p>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Fare table */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-3 gap-px bg-white/8 rounded-t-sm overflow-hidden text-xs font-semibold tracking-widest uppercase">
              <div className="bg-graphite px-5 py-3 text-grey">Route</div>
              <div className="bg-graphite px-5 py-3 text-gold text-center">8-Seater Minibus</div>
              <div className="bg-graphite px-5 py-3 text-cream/60 text-center">4-Seater Vehicle</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-px bg-white/8 rounded-sm overflow-hidden sm:rounded-t-none sm:rounded-b-sm">
              {routes.map((r, i) => (
                <div
                  key={r.slug}
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-px ${i % 2 === 0 ? 'bg-graphite' : 'bg-charcoal'}`}
                >
                  {/* Route name */}
                  <div className="bg-inherit px-5 py-4 text-sm text-cream/80 font-medium flex items-center">
                    {r.route}
                  </div>
                  {/* 8-seater */}
                  <div className="bg-inherit px-5 py-4 flex sm:justify-center items-center gap-2">
                    <span className="sm:hidden text-grey text-xs">8-Seater:</span>
                    <span className="text-gold font-bold text-lg">£{r.minibus8}</span>
                  </div>
                  {/* 4-seater */}
                  <div className="bg-inherit px-5 py-4 flex sm:justify-center items-center gap-2">
                    <span className="sm:hidden text-grey text-xs">4-Seater:</span>
                    <span className="text-cream font-semibold text-lg">£{r.car4}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Note + CTA */}
            <p className="text-grey text-xs italic px-1">{pricesNote}</p>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start bg-gold text-charcoal text-sm font-bold px-6 py-3 rounded-sm tracking-wide hover:bg-gold/90 transition-colors"
            >
              Book via WhatsApp
            </a>
          </div>

          {/* Feature image */}
          <div className="lg:col-span-2">
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
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-cream text-sm font-semibold">Leeds-Based · 24/7 · Licensed</p>
                <p className="text-cream/60 text-xs mt-1">PHV Licence 25232 · Leeds City Council</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
