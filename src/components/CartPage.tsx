// src/components/CartPage.tsx
import { useStore } from '@nanostores/preact'
import { $cart, $subtotal, changeQty, removeFromCart } from '../stores/cart'
import { getTeaById } from '../data/teas'
import { formatCents } from '../lib/format'

export default function CartPage() {
  const items = useStore($cart)
  const subtotal = useStore($subtotal)
  const base = import.meta.env.BASE_URL
  if (items.length === 0) return <p>Your cart is empty. <a href={`${base}shop`}>Browse the range →</a></p>
  return (
    <div>
      <ul class="cart-lines">
        {items.map((it) => {
          const tea = getTeaById(it.id)
          if (!tea || tea.price === null) return null
          return (
            <li key={it.id}>
              <span class="dot" style={{ background: tea.ink }} />
              <a href={`${base}tea/${tea.id}`}>{tea.name}</a>
              <input type="number" min="0" value={it.qty}
                onInput={(e) => {
                  const v = (e.target as HTMLInputElement).value
                  if (v === '') return
                  const n = Math.floor(Number(v))
                  if (!Number.isNaN(n) && n >= 0) changeQty(it.id, n)
                }} />
              <span>{formatCents(tea.price * it.qty)}</span>
              <button onClick={() => removeFromCart(it.id)}>remove</button>
            </li>
          )
        })}
      </ul>
      <div class="cart-total"><span>Subtotal</span><strong>{formatCents(subtotal)}</strong></div>
      <a class="checkout" href={`${base}checkout`}>Checkout →</a>
    </div>
  )
}
