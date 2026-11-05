// src/components/CartButton.tsx
import { useStore } from '@nanostores/preact'
import { $count, openDrawer } from '../stores/cart'

export default function CartButton() {
  const count = useStore($count)
  return (
    <button class="cart-btn" onClick={openDrawer} aria-label={`Open cart, ${count} items`}>
      <span class="glass-mini" style={{ '--lvl': String(Math.min(1, count * 0.18)) }} />
      Cart{count > 0 ? ` (${count})` : ''}
    </button>
  )
}
