import { site } from '@/lib/site'

export default function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['TaxiService', 'LocalBusiness'],
    name: site.name,
    description: 'Fixed-price airport transfers from Leeds. Premium 8-seater Mercedes-Benz Vito Tourer. Licensed by Leeds City Council.',
    url: 'https://www.ridecoretravel.co.uk',
    telephone: site.phoneTel,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '114 Cottingley Approach',
      addressLocality: 'Leeds',
      postalCode: 'LS11 0HH',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.774,
      longitude: -1.577,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: [
      'Leeds', 'Leeds Bradford Airport', 'Manchester Airport', 'Liverpool Airport',
      'London Heathrow', 'London Gatwick', 'Birmingham Airport', 'United Kingdom',
    ],
    hasMap: 'https://maps.google.com/?q=114+Cottingley+Approach,+Leeds,+LS11+0HH',
    image: 'https://www.ridecoretravel.co.uk/images/og/og-image.jpg.jpeg',
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    vehicleType: 'Mercedes-Benz Vito Tourer 8-seater',
    sameAs: [
      site.socials.facebook,
      site.socials.instagram,
      site.socials.linkedin,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  )
}
