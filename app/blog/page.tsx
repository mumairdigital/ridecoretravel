import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Travel Tips & News | Ridecore Travel Blog',
  description: 'Advice for smoother airport transfers, travel tips, and updates from the Ridecore Travel team in Leeds.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Travel Tips & News | Ridecore Travel Blog',
    description: 'Advice for smoother airport transfers, travel tips, and updates from the Ridecore Travel team.',
    images: [{ url: '/images/blog/blog-index-hero.webp', width: 2400, height: 800 }],
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogIndex() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/blog/blog-index-hero.webp"
          alt="Ridecore Travel blog — airport transfer tips and travel news"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full pt-[72px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Blog</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-cream tracking-tight max-w-2xl">
            Travel Tips & News from Ridecore Travel
          </h1>
          <p className="text-grey mt-3 text-base max-w-xl">
            Advice for smoother airport transfers, travel tips, and updates from the team.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col bg-graphite border border-white/8 rounded-sm overflow-hidden hover:border-gold/30 transition-colors">
                <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                </Link>
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <p className="text-grey text-xs tracking-wide">
                    {formatDate(post.publishDate)} · {post.readTime}
                  </p>
                  <h2 className="text-cream font-semibold text-lg leading-snug group-hover:text-gold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-grey text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold tracking-wide mt-2 hover:gap-3 transition-all"
                  >
                    Read more
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
