import { persistentAtom } from '@nanostores/persistent'
import { atom, computed } from 'nanostores'
import { addItem, setQty, removeItem, itemCount, subtotalCents, type CartItem } from '../lib/cart'
import { priceOf, getTeaById } from '../data/teas'

export const $cart = persistentAtom<CartItem[]>('everleaf:cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const $count = computed($cart, (items) => itemCount(items))
export const $subtotal = computed($cart, (items) => subtotalCents(items, priceOf))

export function addToCart(id: string, qty = 1): void {
  const tea = getTeaById(id)
  if (!tea?.inStock || tea.price === null) return
  $cart.set(addItem($cart.get(), id, qty))
}
export function changeQty(id: string, qty: number): void {
  $cart.set(setQty($cart.get(), id, qty))
}
export function removeFromCart(id: string): void {
  $cart.set(removeItem($cart.get(), id))
}
export function clearCart(): void {
  $cart.set([])
}

export const $drawerOpen = atom(false)
export function openDrawer() { $drawerOpen.set(true) }
export function closeDrawer() { $drawerOpen.set(false) }
