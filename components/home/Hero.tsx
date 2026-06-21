'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { site } from '@/lib/site'

const AIRPORTS = [
  'Leeds Bradford Airport (LBA)',
  'Manchester Airport',
  'Liverpool Airport',
  'London Heathrow',
  'London Gatwick',
  'Birmingham Airport',
  'Edinburgh Airport',
  'Bristol Airport',
  'Other destination',
]

export default function Hero() {
  const [passengers, setPassengers] = useState('1')
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [loading, setLoading] = useState(false)

  function handleQuote(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    window.dispatchEvent(new CustomEvent('prefill-booking', {
      detail: { pickup, dropoff, date, time, passengers },
    }))
    setTimeout(() => {
      setLoading(false)
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
    }, 800)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Desktop image */}
      <Image
        src="/images/hero/hero-vito.webp"
        alt="Black Mercedes Vito airport transfer at dusk in Leeds"
        fill
        priority
        className="object-cover hidden md:block"
        sizes="100vw"
      />
      {/* Mobile image */}
      <Image
        src="/images/hero/hero-vito-mobile.webp"
        alt="Black Mercedes Vito airport transfer at dusk in Leeds"
        fill
        priority
        className="object-cover md:hidden"
        sizes="100vw"
      />

      {/* Full overlay gradient — dark bottom for widget readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />

      {/* Hero text — top-left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-10">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Leeds · 24/7 · Licensed
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-cream leading-[1.08] tracking-tight mb-4">
            Fixed-Price Airport<br className="hidden sm:block" /> Transfers from Leeds
          </h1>
          <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
            8-Seater Mercedes Vito · No hidden fees · Flight tracking included
          </p>
        </div>

        {/* ── Booking widget ── */}
        <form
          onSubmit={handleQuote}
          className="bg-charcoal/80 backdrop-blur-md border border-white/10 rounded-sm p-4 md:p-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Pickup */}
            <div className="flex flex-col gap-1 lg:col-span-1">
              <label className="text-gold text-[10px] font-semibold tracking-widest uppercase px-1">
                Pickup
              </label>
              <input
                type="text"
                value={pickup}
                onChange={e => setPickup(e.target.value)}
                placeholder="Your address or postcode"
                required
                className="bg-white/5 border border-white/12 text-cream text-sm px-3.5 py-3 rounded-sm placeholder:text-grey focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
              />
            </div>

            {/* Drop-off */}
            <div className="flex flex-col gap-1 lg:col-span-1">
              <label className="text-gold text-[10px] font-semibold tracking-widest uppercase px-1">
                Drop-off
              </label>
              <div className="relative">
                <select
                  value={dropoff}
                  onChange={e => setDropoff(e.target.value)}
                  required
                  className="w-full appearance-none bg-white/5 border border-white/12 text-sm px-3.5 py-3 rounded-sm focus:outline-none focus:border-gold/50 transition-all pr-9 text-cream [&>option]:bg-charcoal [&>option]:text-cream"
                >
                  <option value="" className="text-grey">Select airport</option>
                  {AIRPORTS.map(a => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                <ChevronIcon />
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <label className="text-gold text-[10px] font-semibold tracking-widest uppercase px-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                min={today}
                required
                className="bg-white/5 border border-white/12 text-cream text-sm px-3.5 py-3 rounded-sm focus:outline-none focus:border-gold/50 transition-all [color-scheme:dark]"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col gap-1">
              <label className="text-gold text-[10px] font-semibold tracking-widest uppercase px-1">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={e => setTime(e.target.value)}
                required
                className="bg-white/5 border border-white/12 text-cream text-sm px-3.5 py-3 rounded-sm focus:outline-none focus:border-gold/50 transition-all [color-scheme:dark]"
              />
            </div>

            {/* Passengers + CTA */}
            <div className="flex flex-col gap-1">
              <label className="text-gold text-[10px] font-semibold tracking-widest uppercase px-1">
                Passengers
              </label>
              <div className="flex gap-2">
                <div className="relative flex-shrink-0 w-20">
                  <select
                    value={passengers}
                    onChange={e => setPassengers(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/12 text-cream text-sm px-3 py-3 rounded-sm focus:outline-none focus:border-gold/50 transition-all pr-7 [&>option]:bg-charcoal"
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gold text-charcoal font-bold text-sm tracking-wide rounded-sm hover:bg-gold/90 active:scale-[.98] transition-all whitespace-nowrap px-4 flex items-center justify-center gap-2 disabled:opacity-80"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
                      </svg>
                      Checking…
                    </>
                  ) : 'Get Quote'}
                </button>
              </div>
            </div>
          </div>

          {/* Trust micro-line */}
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 px-1">
            {['Fixed price · no surprises', 'Instant confirmation', '24/7 availability'].map(t => (
              <span key={t} className="text-cream/40 text-[11px] flex items-center gap-1.5">
                <span className="text-gold text-[8px]">✦</span>{t}
              </span>
            ))}
          </div>
        </form>

        {/* Route quick-links */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { label: 'Leeds Bradford Airport', href: '/airport-transfers/leeds-bradford-airport-taxi' },
            { label: 'Manchester Airport',     href: '/airport-transfers/leeds-to-manchester-airport' },
            { label: 'Liverpool Airport',      href: '/airport-transfers/leeds-to-liverpool-airport' },
            { label: 'London Heathrow',        href: '/airport-transfers/leeds-to-heathrow' },
          ].map((r) => (
            <a
              key={r.href}
              href={r.href}
              className="text-[11px] text-cream/50 hover:text-gold transition-colors border border-white/10 hover:border-gold/30 px-3 py-1.5 rounded-sm tracking-wide"
            >
              {r.label}
            </a>
          ))}
        </div>

        {/* Ghost call CTA below widget */}
        <div className="mt-4 flex items-center gap-4">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors"
          >
            <PhoneIcon />
            Prefer to call? {site.phone}
          </a>
          <span className="text-cream/20 text-xs">·</span>
          <span className="text-cream/30 text-xs">Licensed by Leeds City Council</span>
        </div>
      </div>
    </section>
  )
}

function ChevronIcon() {
  return (
    <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-grey">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}
