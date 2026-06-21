'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(pct)
      setVisible(scrollTop > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const size = 52
  const strokeW = 2.5
  const r = (size - strokeW) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - progress * circ

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-5 lg:bottom-8 lg:right-8 z-40 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Dark background fill */}
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#0E0E0E" opacity="0.92" />

        {/* Track ring */}
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="rgba(178,154,117,0.2)"
          strokeWidth={strokeW}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        {/* Progress arc */}
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="#b29a75"
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        {/* Arrow — upward with shaft */}
        <g stroke="#b29a75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <line x1={size / 2} y1="34" x2={size / 2} y2="18" />
          <polyline points={`${size / 2 - 6},24 ${size / 2},18 ${size / 2 + 6},24`} />
        </g>
      </svg>
    </button>
  )
}
