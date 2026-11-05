export type Category = 'red' | 'green' | 'black' | 'oolong' | 'herbal'

export const categoryLabels: Record<Category, string> = {
  red: 'Red tea', green: 'Green tea', black: 'Black tea', oolong: 'Oolong', herbal: 'Herbal tea',
}

export interface Tea {
  id: string
  name: string
  category: Category
  price: number | null // integer cents; null until pricing is confirmed
  naturalPhoto?: boolean
  ink: string // fruit-ink hex for the liquid-glass treatment
  photo: string // path under public/, e.g. 'photos/peach-red-blossom.jpg'
  blurb: string
  description: string
  brewing?: string
  brewingMethods?: ('hot' | 'cold')[] // Only populate with confirmed availability.
  packaging?: ('loose' | 'teabags')[]
  inStock: boolean
}

export const teas: Tea[] = [
  { id: 'osmanthus-pear-phoenix-oolong', name: 'Osmanthus Pear Phoenix Oolong', category: 'oolong', price: null, ink: '#775526', photo: 'photos/osmanthus-pear-phoenix-oolong.png', naturalPhoto: true, blurb: 'Osmanthus and pear with Phoenix oolong.', description: 'Osmanthus, pear, and Phoenix oolong come together in this blend.', inStock: false },
  { id: 'orchard-glow-gyokuro', name: 'Orchard Glow Gyokuro', category: 'green', price: null, ink: '#385618', photo: 'photos/orchard-glow-gyokuro.png', naturalPhoto: true, blurb: 'Introducing Orchard Glow Gyokuro.', description: 'Meet Orchard Glow Gyokuro, a new addition to the Chora Tea collection.', inStock: false },
  { id: 'hibiscus-black-tea', name: 'Hibiscus Black Tea', category: 'black', price: null, ink: '#7E3149', photo: 'photos/hibiscus-black-tea.png', naturalPhoto: true, blurb: 'Hibiscus paired with black tea.', description: 'A blend of hibiscus and black tea, joining the Chora Tea collection.', inStock: false },
  { id: 'lemon-balm-calming-tea', name: 'Lemon Balm Calming Tea', category: 'herbal', price: null, ink: '#556332', photo: 'photos/lemon-balm-calming-tea.png', naturalPhoto: true, blurb: 'A lemon balm tea blend.', description: 'Discover Lemon Balm Calming Tea, a new lemon balm blend in the Chora Tea collection.', inStock: false },
  { id: 'triple-rose-complex-black-tea', name: 'Triple Rose Complex Black Tea', category: 'black', price: null, ink: '#842B55', photo: 'photos/triple-rose-complex-black-tea.png', naturalPhoto: true, blurb: 'Rose meets black tea.', description: 'Explore Triple Rose Complex Black Tea, a rose and black tea blend in the Chora Tea collection.', inStock: false },
  { id: 'peach-red-blossom', name: 'Peach Red Blossom', category: 'red', price: 1200, ink: '#D9744F', photo: 'photos/peach-red-blossom.jpg', blurb: 'Ripe peach over a mellow red base.', description: 'A soft, honeyed red tea layered with sun-ripened peach and a whisper of rose. Rounded and comforting, hot or iced.', brewing: '95°C · 4 min · 1 tsp per cup', inStock: true },
  { id: 'lychee-rose-red', name: 'Lychee Rose Red', category: 'red', price: 1300, ink: '#C24C63', photo: 'photos/lychee-rose-red.jpg', blurb: 'Fragrant lychee and rose petals.', description: 'Juicy lychee and rose petals folded into a smooth red tea. Floral, sweet, and lightly perfumed.', brewing: '95°C · 4 min · 1 tsp per cup', inStock: true },
  { id: 'plum-osmanthus-red', name: 'Plum Osmanthus Red', category: 'red', price: 1250, ink: '#7E3149', photo: 'photos/plum-osmanthus-red.jpg', blurb: 'Tart plum with golden osmanthus.', description: 'Tangy plum meets the apricot-honey scent of osmanthus over a brisk red tea. Bright and autumnal.', brewing: '95°C · 4 min · 1 tsp per cup', inStock: true },
  { id: 'strawberry-hibiscus-red', name: 'Strawberry Hibiscus Red', category: 'red', price: 1150, ink: '#A82843', photo: 'photos/strawberry-hibiscus-red.jpg', blurb: 'Jammy strawberry, ruby hibiscus.', description: 'Sweet strawberry and tart hibiscus give this red tea a deep ruby cup and a berry-bright finish.', brewing: '95°C · 4 min · 1 tsp per cup', inStock: true },
  { id: 'longan-date-red', name: 'Longan Date Red', category: 'red', price: 1350, ink: '#9C5A2A', photo: 'photos/longan-date-red.jpg', blurb: 'Warm longan and red date.', description: 'Dried longan and red date bring a malty, dried-fruit sweetness to a full-bodied red tea. Deeply warming.', brewing: '95°C · 5 min · 1 tsp per cup', inStock: false },
  { id: 'jasmine-pear-green', name: 'Jasmine Pear Green', category: 'green', price: 1200, ink: '#8FAE46', photo: 'photos/jasmine-pear-green.jpg', blurb: 'Crisp pear and jasmine bloom.', description: 'Delicate jasmine green tea with slices of sweet pear. Light, floral, and refreshing.', brewing: '80°C · 2 min · 1 tsp per cup', inStock: true },
  { id: 'lychee-jade-green', name: 'Lychee Jade Green', category: 'green', price: 1250, ink: '#2F7A55', photo: 'photos/lychee-jade-green.jpg', blurb: 'Sweet lychee over jade green.', description: 'Fragrant lychee lifts a smooth jade green tea into something bright and gently sweet.', brewing: '80°C · 2 min · 1 tsp per cup', inStock: true },
  { id: 'mango-mint-green', name: 'Mango Mint Green', category: 'green', price: 1150, ink: '#DD9A2B', photo: 'photos/mango-mint-green.jpg', blurb: 'Juicy mango, cooling mint.', description: 'Tropical mango and fresh mint over a grassy green base. Especially good iced on a warm afternoon.', brewing: '80°C · 2 min · 1 tsp per cup', inStock: true },
  { id: 'yuzu-citrus-green', name: 'Yuzu Citrus Green', category: 'green', price: 1300, ink: '#C6A21E', photo: 'photos/yuzu-citrus-green.jpg', blurb: 'Zesty yuzu and citrus peel.', description: 'Bright yuzu and citrus peel wake up a clean green tea. Zesty, aromatic, and lightly tart.', brewing: '80°C · 2 min · 1 tsp per cup', inStock: true },
  { id: 'melon-blossom-green', name: 'Melon Blossom Green', category: 'green', price: 1100, ink: '#5FA778', photo: 'photos/melon-blossom-green.jpg', blurb: 'Honeydew melon and blossoms.', description: 'Cool honeydew melon and soft blossoms over a tender green tea. Mild, sweet, and easy-drinking.', brewing: '80°C · 2 min · 1 tsp per cup', inStock: true },
]

export function getTeaById(id: string): Tea | undefined {
  return teas.find((t) => t.id === id)
}

export function priceOf(id: string): number {
  return getTeaById(id)?.price ?? 0
}
