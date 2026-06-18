export interface RoutePrice {
  route: string
  slug: string
  single14: number
  return14: number
  single58: number
  return58: number
}

export const routes: RoutePrice[] = [
  { route: 'Leeds Bradford Airport (LBA)', slug: 'lba', single14: 40, return14: 75, single58: 50, return58: 95 },
  { route: 'Manchester Airport', slug: 'manchester', single14: 120, return14: 230, single58: 130, return58: 250 },
  { route: 'Liverpool Airport', slug: 'liverpool', single14: 120, return14: 230, single58: 140, return58: 270 },
  { route: 'London Heathrow', slug: 'heathrow', single14: 400, return14: 770, single58: 450, return58: 870 },
]

export const executiveOffer = {
  title: 'Same-Day Leeds → London Return',
  price: 700,
  note: 'Includes 8 hours complimentary waiting',
}

export const pricesNote = 'Prices may vary depending on pickup location.'
