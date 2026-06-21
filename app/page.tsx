import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import Fares from '@/components/home/Fares'
import WhyUs from '@/components/home/WhyUs'
import Fleet from '@/components/home/Fleet'
import Reviews from '@/components/home/Reviews'
import ServiceAreas from '@/components/home/ServiceAreas'
import BookingForm from '@/components/home/BookingForm'
import FAQ from '@/components/home/FAQ'
import JsonLd from '@/components/JsonLd'

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustStrip />
      <Fares />
      <WhyUs />
      <Fleet />
      <Reviews />
      <ServiceAreas />
      <BookingForm />
      <FAQ />
      {/* Spacer for mobile sticky bar */}
      <div className="h-16 lg:hidden" />
    </>
  )
}
