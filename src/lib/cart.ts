export type CartItem = { id: string; qty: number }

export function addItem(items: CartItem[], id: string, qty = 1): CartItem[] {
  const existing = items.find((i) => i.id === id)
  if (existing) {
    return items.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
  }
  return [...items, { id, qty }]
}

export function setQty(items: CartItem[], id: string, qty: number): CartItem[] {
  if (qty <= 0) return removeItem(items, id)
  return items.map((i) => (i.id === id ? { ...i, qty } : i))
}

export function removeItem(items: CartItem[], id: string): CartItem[] {
  return items.filter((i) => i.id !== id)
}

export function itemCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.qty, 0)
}

export function subtotalCents(items: CartItem[], priceOf: (id: string) => number): number {
  return items.reduce((sum, i) => sum + priceOf(i.id) * i.qty, 0)
}
