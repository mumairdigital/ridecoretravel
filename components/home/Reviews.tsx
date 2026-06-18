import { site } from '@/lib/site'

export default function Reviews() {
  return (
    <section className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Social Proof</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-cream tracking-tight text-center mb-14">
          What Our Customers Say
        </h2>

        <div className="flex justify-center">
          <a
            href={site.socials.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-graphite border border-white/10 hover:border-gold/30 transition-colors rounded-sm p-10 flex flex-col items-center gap-5 max-w-sm w-full text-center"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#b29a75">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Google branding */}
            <div className="flex items-center gap-3">
              <GoogleRatingIcon />
              <div className="text-left">
                <p className="text-cream font-semibold text-lg leading-none">Rated on Google</p>
                <p className="text-grey text-xs mt-1">See our customer reviews</p>
              </div>
            </div>

            <p className="text-cream/70 text-sm leading-relaxed italic">
              &ldquo;Reliable, punctual airport transfers with a professional driver and a spotlessly clean vehicle. We use Ridecore for every airport run.&rdquo;
            </p>

            <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-wide group-hover:underline">
              Read All Reviews on Google →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function GoogleRatingIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}
