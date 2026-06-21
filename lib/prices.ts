export interface RoutePrice {
  route: string
  slug: string
  minibus8: number  // 8-Seater Minibus
  car4: number      // 4-Seater Vehicle
}

export const routes: RoutePrice[] = [
  { route: 'Leeds City Centre → Manchester Airport',       slug: 'manchester', minibus8: 135, car4: 100 },
  { route: 'Leeds City Centre → Leeds Bradford Airport',   slug: 'lba',        minibus8: 60,  car4: 35  },
  { route: 'Leeds City Centre → London Heathrow Airport',  slug: 'heathrow',   minibus8: 420, car4: 320 },
  { route: 'Leeds City Centre → Liverpool Airport',        slug: 'liverpool',  minibus8: 160, car4: 120 },
]

export const pricesNote = 'Prices may vary for pickups outside Leeds City Centre.'
