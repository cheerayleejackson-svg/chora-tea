// src/components/CartDrawer.tsx
import { useEffect } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { $cart, $subtotal, $drawerOpen, changeQty, removeFromCart, closeDrawer } from '../stores/cart'
import { getTeaById } from '../data/teas'
import { formatCents } from '../lib/format'

export default function CartDrawer() {
  const items = useStore($cart)
  const subtotal = useStore($subtotal)
  const open = useStore($drawerOpen)
  const base = import.meta.env.BASE_URL

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div class={`drawer${open ? ' open' : ''}`} role="dialog" aria-label="Your cart" aria-hidden={!open}>
      {open && (
        <>
          <div class="drawer-head">
            <h2>Your cart</h2>
            <button onClick={closeDrawer} aria-label="Close cart">✕</button>
          </div>
          {items.length === 0 && <p class="empty">Your cart is empty.</p>}
          <ul class="lines">
            {items.map((it) => {
              const tea = getTeaById(it.id)
              if (!tea || tea.price === null) return null
              return (
                <li key={it.id}>
                  <span class="dot" style={{ background: tea.ink }} />
                  <span class="nm">{tea.name}</span>
                  <input type="number" min="0" value={it.qty}
                    onInput={(e) => {
                      const v = (e.target as HTMLInputElement).value
                      if (v === '') return
                      const n = Math.floor(Number(v))
                      if (!Number.isNaN(n) && n >= 0) changeQty(it.id, n)
                    }} />
                  <span class="ln">{formatCents(tea.price * it.qty)}</span>
                  <button class="rm" onClick={() => removeFromCart(it.id)} aria-label={`Remove ${tea.name}`}>remove</button>
                </li>
              )
            })}
          </ul>
          <div class="drawer-foot">
            <div class="sub"><span>Subtotal</span><strong>{formatCents(subtotal)}</strong></div>
            <a class="checkout" href={`${base}checkout`} aria-disabled={items.length === 0}>Checkout</a>
          </div>
        </>
      )}
    </div>
  )
}
