// src/components/CheckoutForm.tsx
import { useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { validateCheckout, type CheckoutForm as Form } from '../lib/order'
import { $cart, $subtotal, clearCart } from '../stores/cart'
import { formatCents } from '../lib/format'

export default function CheckoutForm() {
  const items = useStore($cart)
  const subtotal = useStore($subtotal)
  const base = import.meta.env.BASE_URL
  const [form, setForm] = useState<Form>({ name: '', email: '', address: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const set = (k: keyof Form) => (e: Event) => setForm({ ...form, [k]: (e.target as HTMLInputElement).value })

  function onSubmit(e: Event) {
    e.preventDefault()
    const res = validateCheckout(form)
    setErrors(res.errors)
    if (res.valid) { clearCart(); window.location.href = `${base}order` }
  }

  if (items.length === 0) {
    return <p>Your cart is empty. <a href={`${base}shop`}>Browse the range →</a></p>
  }

  return (
    <form onSubmit={onSubmit} novalidate>
      <label htmlFor="checkout-name">Name
        <input id="checkout-name" name="name" autocomplete="name" value={form.name} onInput={set('name')} />
      </label>
      {errors.name && <em role="alert">{errors.name}</em>}

      <label htmlFor="checkout-email">Email
        <input id="checkout-email" name="email" type="email" autocomplete="email" value={form.email} onInput={set('email')} />
      </label>
      {errors.email && <em role="alert">{errors.email}</em>}

      <label htmlFor="checkout-address">Delivery address
        <input id="checkout-address" name="address" autocomplete="street-address" value={form.address} onInput={set('address')} />
      </label>
      {errors.address && <em role="alert">{errors.address}</em>}

      <div class="pay"><span>Total</span><strong>{formatCents(subtotal)}</strong></div>
      <button class="checkout" type="submit">Place order</button>
      <p class="fine">This is a demo — no payment is taken and no order is shipped.</p>
    </form>
  )
}
