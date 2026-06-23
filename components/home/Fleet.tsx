import Image from 'next/image'

const galleryImages = [
  { src: '/images/fleet/vito-interior-1.webp', alt: 'Mercedes Vito Tourer luxury interior seating', caption: null },
  { src: '/images/fleet/vito-interior-2.webp', alt: 'Mercedes Vito interior passenger comfort view', caption: null },
  { src: '/images/fleet/vito-interior-3.webp', alt: 'Mercedes Vito interior rear passenger seats', caption: null },
  { src: '/images/fleet/vito-luggage.webp', alt: 'Mercedes Vito boot packed with suitcases and luggage', caption: 'Room for everyone\'s luggage.' },
]

export default function Fleet() {
  return (
    <section id="fleet" className="bg-graphite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">The Fleet</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-cream tracking-tight text-center mb-4">
          Our Fleet — Clean, Spacious &amp; Premium
        </h2>
        <p className="text-grey text-center mb-14 max-w-2xl mx-auto leading-relaxed">
          Our vehicles include premium Mercedes-Benz people carriers — spacious, climate-controlled, and immaculately
          presented for families, business groups, and sports teams with all their luggage.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-sm group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? '4/3' : '4/3' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={i === 0 ? '(max-width: 768px) 50vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                loading="lazy"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent flex items-end p-4">
                  <span className="text-cream text-xs font-medium">{img.caption}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {['8 Passenger Seats', 'Climate Control', 'USB Charging', 'Ample Boot Space', 'Professional Driver', 'Child Seats Available'].map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-cream/70 text-sm">
              <span className="text-gold text-xs">✦</span>
              {feat}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
