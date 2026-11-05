// src/components/AddToCart.tsx
import { useState, useEffect } from 'preact/hooks'
import { addToCart, openDrawer } from '../stores/cart'

export default function AddToCart({ id, ink }: { id: string; ink: string }) {
  const [pouring, setPouring] = useState(false)
  const [reduce, setReduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function onClick() {
    addToCart(id, 1)
    if (reduce) { openDrawer(); return }
    setPouring(true)
    setTimeout(() => { setPouring(false); openDrawer() }, 550)
  }
  return (
    <button class={`add${pouring ? ' pouring' : ''}`} style={{ '--tea-ink': ink }} onClick={onClick}>
      {pouring ? 'Pouring…' : 'Add to cart'}
    </button>
  )
}
