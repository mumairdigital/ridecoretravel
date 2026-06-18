const features = [
  {
    icon: <PriceTagIcon />,
    title: 'Fixed Pricing',
    copy: 'The price you see is the price you pay. No surge pricing, no hidden extras, ever.',
  },
  {
    icon: <FlightTrackIcon />,
    title: 'Meet & Greet + Flight Tracking',
    copy: 'We monitor your flight in real time and adjust pickup if you land early or late.',
  },
  {
    icon: <CarIcon />,
    title: 'Modern Mercedes Fleet',
    copy: 'Travel in a premium 8-seater Mercedes-Benz Vito Tourer — spacious, clean, and climate-controlled.',
  },
  {
    icon: <LicenceIcon />,
    title: 'Professional Licensed Drivers',
    copy: 'All drivers are fully licensed by Leeds City Council and DBS-checked for your peace of mind.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Why Ridecore</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight text-center mb-14">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-4">
              <span className="text-gold">{f.icon}</span>
              <h3 className="text-charcoal font-semibold text-lg tracking-tight">{f.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{f.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PriceTagIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
    </svg>
  )
}

function FlightTrackIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  )
}

function CarIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  )
}

function LicenceIcon() {
  return (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}
