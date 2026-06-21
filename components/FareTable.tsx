import { routes, pricesNote, type RoutePrice } from '@/lib/prices'
import { site } from '@/lib/site'

interface Props {
  priceKey?: string   // show one route; omit to show all
  compact?: boolean   // tighter layout for route pages
}

export default function FareTable({ priceKey, compact }: Props) {
  const rows: RoutePrice[] = priceKey
    ? routes.filter((r) => r.slug === priceKey)
    : routes

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="hidden sm:grid grid-cols-3 gap-px bg-white/8 rounded-t-sm overflow-hidden text-xs font-semibold tracking-widest uppercase">
        <div className="bg-graphite px-5 py-3 text-grey">Route</div>
        <div className="bg-graphite px-5 py-3 text-gold text-center">8-Seater Minibus</div>
        <div className="bg-graphite px-5 py-3 text-cream/60 text-center">4-Seater Vehicle</div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-px bg-white/8 rounded-sm overflow-hidden sm:rounded-t-none sm:rounded-b-sm">
        {rows.map((r, i) => (
          <div
            key={r.slug}
            className={`grid grid-cols-1 sm:grid-cols-3 gap-px ${i % 2 === 0 ? 'bg-graphite' : 'bg-charcoal'}`}
          >
            <div className="bg-inherit px-5 py-4 text-sm text-cream/80 font-medium flex items-center">
              {r.route}
            </div>
            <div className="bg-inherit px-5 py-4 flex sm:justify-center items-center gap-2">
              <span className="sm:hidden text-grey text-xs">8-Seater:</span>
              <span className="text-gold font-bold text-lg">£{r.minibus8}</span>
            </div>
            <div className="bg-inherit px-5 py-4 flex sm:justify-center items-center gap-2">
              <span className="sm:hidden text-grey text-xs">4-Seater:</span>
              <span className="text-cream font-semibold text-lg">£{r.car4}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-grey text-xs italic px-1">{pricesNote}</p>

      {!compact && (
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex self-start bg-gold text-charcoal text-sm font-bold px-6 py-3 rounded-sm tracking-wide hover:bg-gold/90 transition-colors"
        >
          Book via WhatsApp
        </a>
      )}
    </div>
  )
}
