export type Post = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  featuredImage: string
  featuredImageAlt: string
  publishDate: string
  readTime: string
  faqs: { q: string; a: string }[]
  body: Section[]
}

export type Section = {
  type: 'intro' | 'h2' | 'p' | 'cta'
  content?: string
  heading?: string
}

export const posts: Post[] = [
  {
    slug: 'stress-free-airport-transfer-tips',
    title: '5 Tips for a Stress-Free Airport Transfer from Leeds',
    excerpt: 'A few small decisions can make the difference between a calm start to your journey and a stressful one. Here are five practical tips from the team at Ridecore Travel.',
    metaTitle: '5 Tips for a Stress-Free Airport Transfer from Leeds | Ridecore Travel',
    metaDescription: 'Travelling from Leeds to the airport? Here are 5 practical tips to make your transfer smoother — from timing your pickup to tracking your flight.',
    featuredImage: '/images/blog/airport-transfer-tips.webp',
    featuredImageAlt: 'Premium Mercedes Vito airport transfer from Leeds',
    publishDate: '2026-06-20',
    readTime: '4 min read',
    faqs: [
      {
        q: 'How early should I book my airport transfer?',
        a: 'We recommend booking as soon as you know your travel dates, especially for early-morning flights or busy holiday periods. As a guide, we suggest arriving at the airport 2 hours before a UK/domestic flight and 3 hours before an international flight — your pickup time is calculated backward from that.',
      },
      {
        q: 'Do you track flights for delays?',
        a: 'Yes. We monitor your flight number in real time and adjust your pickup automatically if your flight lands early or late, so you\'re never left waiting or rushing.',
      },
      {
        q: 'What if my group has a lot of luggage?',
        a: 'Our Mercedes-Benz Vito Tourer seats up to 8 passengers with generous boot space, comfortably fitting a full set of suitcases for the whole group.',
      },
      {
        q: 'Are your prices really fixed?',
        a: 'Yes — the price you\'re quoted is the price you pay, with no surge pricing or hidden extras. Note that prices may vary depending on your exact pickup location.',
      },
      {
        q: 'Can I book a transfer for the middle of the night?',
        a: 'Yes, we operate 24/7, including early mornings, late nights, and bank holidays.',
      },
    ],
    body: [
      {
        type: 'intro',
        content: 'Getting to the airport should be the easy part of your trip — not the part you worry about. Whether you\'re heading to Leeds Bradford, Manchester, Liverpool, or further afield to Heathrow, a few small decisions can make the difference between a calm start to your journey and a stressful one. Here are five practical tips from the team at Ridecore Travel.',
      },
      {
        type: 'h2',
        heading: '1. Book your transfer earlier than you think you need to',
        content: 'Airport traffic, roadworks, and unpredictable weather can all add time to a journey that looks straightforward on a map. Booking your fixed-price transfer in advance — rather than trying to arrange something last-minute — means your pickup time is built around your flight, not the other way around. As a rough guide, we recommend arriving at the terminal 2 hours before a domestic/UK flight and 3 hours before an international one.',
      },
      {
        type: 'h2',
        heading: '2. Know your fixed price before you travel',
        content: 'One of the most stressful parts of any taxi journey is not knowing what it\'ll cost until you arrive. With a fixed-price transfer, your fare is agreed before you set off — no meter, no surge pricing, no surprises at the other end. Check our fixed fares for Manchester, Liverpool, Heathrow and Leeds Bradford Airport before you book.',
      },
      {
        type: 'h2',
        heading: '3. Let your driver track your flight, not the clock',
        content: 'Flights get delayed. A good airport transfer service should track your actual flight number, not just the scheduled time on your booking — so if you land early or late, your driver adjusts automatically. This is especially useful on long-haul routes like Leeds to Heathrow, where a delay of an hour or two is common.',
      },
      {
        type: 'h2',
        heading: '4. Pack smart, but don\'t worry about space',
        content: 'If you\'re travelling as a family or group, luggage space is often the first thing people worry about. An 8-seater Mercedes Vito comfortably handles a full set of suitcases for up to 8 passengers, so there\'s no need to leave anyone or anything behind.',
      },
      {
        type: 'h2',
        heading: '5. Have your pickup details ready and confirmed the night before',
        content: 'A quick check the evening before — pickup address, time, and your driver\'s contact number — avoids any last-minute confusion on travel day. If your flight is at an unusual hour, remember that a 24/7 service means early-morning and late-night pickups are no different to any other time.',
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
