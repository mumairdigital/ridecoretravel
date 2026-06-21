'use client'

import { useState } from 'react'

export default function RouteFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-cream py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase">FAQ</span>
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight mt-3 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y divide-charcoal/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-charcoal font-medium text-base leading-snug">{faq.q}</span>
                <span className={`text-gold flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
