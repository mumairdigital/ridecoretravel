import { executiveOffer } from '@/lib/prices'
import { site } from '@/lib/site'

export default function ExecutiveBand() {
  return (
    <section className="bg-charcoal border-y border-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Executive Offer</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight">
              {executiveOffer.title}
            </h2>
            <div className="flex items-baseline gap-3">
              <span className="text-gold text-4xl font-bold">£{executiveOffer.price}</span>
              <span className="text-grey text-sm">fixed return fare</span>
            </div>
            <p className="text-cream/60 text-sm">{executiveOffer.note}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-charcoal font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:bg-gold/90 transition-colors text-sm"
            >
              Book Now
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="border border-gold/40 text-gold font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:border-gold hover:bg-gold/5 transition-colors text-sm"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
