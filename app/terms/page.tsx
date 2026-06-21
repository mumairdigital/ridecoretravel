import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Ridecore Travel',
  description: 'Terms and conditions for Ridecore Travel airport transfer services. Fixed-price transfers from Leeds, operated by Ridecore Travel Ltd.',
  alternates: { canonical: '/terms' },
}

const sections = [
  {
    title: '1. Company Information',
    body: `These terms and conditions apply to all bookings made with Ridecore Travel Ltd, registered in England and Wales (Company No. 16758874), operating under Leeds City Council PHV Licence 25232. Registered address: 114 Cottingley Approach, Leeds, LS11 0HH. Contact: ${site.email} · ${site.phone}.`,
  },
  {
    title: '2. Bookings',
    body: 'All bookings must be made in advance via phone, WhatsApp, email, or our online quote form. A booking is confirmed only when you receive written confirmation from Ridecore Travel. We reserve the right to decline any booking at our discretion.',
  },
  {
    title: '3. Pricing',
    body: 'All fares are fixed and confirmed at the time of booking. The price you are quoted is the price you pay. There are no surge charges, congestion charges, or hidden extras unless expressly agreed in writing at the time of booking. Prices may vary for pickups outside Leeds City Centre.',
  },
  {
    title: '4. Payment',
    body: 'Payment is accepted by bank transfer, cash, or card. Full payment or a deposit may be required at the time of booking for certain journeys. Details will be confirmed in your booking confirmation.',
  },
  {
    title: '5. Cancellations & Amendments',
    body: 'Cancellations made more than 24 hours before the scheduled pickup time will receive a full refund. Cancellations made within 24 hours of the scheduled pickup may be subject to a cancellation fee of up to 50% of the fare. No-shows (where the passenger is not present at the agreed time and location) will be charged the full fare. Amendments to bookings are subject to availability and must be requested as soon as possible.',
  },
  {
    title: '6. Waiting Time',
    body: 'For airport collections, we provide free waiting time to account for flight delays — we track all flights in real time. For non-airport pickups, drivers will wait up to 15 minutes at the agreed pickup time. Additional waiting time beyond this may be charged.',
  },
  {
    title: '7. Passenger Conduct',
    body: 'Passengers are expected to behave in a safe and respectful manner at all times. The driver reserves the right to refuse travel to, or terminate the journey of, any passenger whose behaviour is deemed unsafe, abusive, or disruptive. No refund will be issued in such circumstances. Smoking, vaping, and the consumption of alcohol are strictly prohibited in the vehicle.',
  },
  {
    title: '8. Luggage',
    body: 'Passengers are responsible for loading and unloading their own luggage. Ridecore Travel accepts no liability for damage to or loss of luggage during transit. Please inform us of any oversized, fragile, or unusual items at the time of booking.',
  },
  {
    title: '9. Child Safety',
    body: 'Under UK law, children must use an appropriate child seat. Ridecore Travel can provide child seats upon request — please request these at the time of booking. Passengers who do not request a child seat in advance travel at their own risk.',
  },
  {
    title: '10. Delays & Circumstances Beyond Our Control',
    body: 'Ridecore Travel will make every reasonable effort to arrive on time. However, we accept no liability for delays caused by traffic, road closures, adverse weather, or other circumstances beyond our reasonable control. We will communicate any anticipated delay as soon as possible.',
  },
  {
    title: '11. Liability',
    body: 'Ridecore Travel is fully insured for private hire journeys. Our liability is limited to the value of the journey fare. We accept no liability for consequential losses, including missed flights, missed connections, or missed appointments, except where caused by our negligence.',
  },
  {
    title: '12. Complaints',
    body: `Any complaints should be submitted in writing within 7 days of the journey to ${site.email}. We will acknowledge your complaint within 2 working days and aim to resolve it within 14 working days.`,
  },
  {
    title: '13. Privacy',
    body: 'Personal data collected during booking (name, email, phone number, address) is used solely for the purpose of fulfilling your transfer and will not be shared with third parties without your consent, except where required by law.',
  },
  {
    title: '14. Governing Law',
    body: 'These terms and conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
  },
  {
    title: '15. Changes to These Terms',
    body: 'Ridecore Travel reserves the right to update these terms at any time. The version in effect at the time of your booking confirmation will apply to your journey.',
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">Terms & Conditions</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-graphite py-14 border-b border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-cream tracking-tight mb-3">
            Terms & Conditions
          </h1>
          <p className="text-grey text-sm">
            Ridecore Travel Ltd · Company No. 16758874 · Last updated June 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-white/6">
            {sections.map((s) => (
              <div key={s.title} className="py-7">
                <h2 className="text-cream font-semibold text-base mb-3">{s.title}</h2>
                <p className="text-grey text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-3">
            <p className="text-grey text-xs">
              Questions about these terms? Contact us at{' '}
              <a href={`mailto:${site.email}`} className="text-gold hover:underline lowercase">{site.email}</a>
              {' '}or call{' '}
              <a href={`tel:${site.phoneTel}`} className="text-gold hover:underline">{site.phone}</a>.
            </p>
            <Link href="/" className="text-gold text-xs font-semibold tracking-wide hover:underline">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
