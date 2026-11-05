import { describe, it, expect } from 'vitest'
import { addItem, setQty, removeItem, itemCount, subtotalCents, type CartItem } from './cart'

const price = (id: string) => (id === 'a' ? 1200 : 1000)

describe('cart math', () => {
  it('adds a new item with default qty 1', () => {
    expect(addItem([], 'a')).toEqual([{ id: 'a', qty: 1 }])
  })
  it('increments qty when adding an existing item', () => {
    expect(addItem([{ id: 'a', qty: 1 }], 'a', 2)).toEqual([{ id: 'a', qty: 3 }])
  })
  it('does not mutate the input array', () => {
    const input: CartItem[] = [{ id: 'a', qty: 1 }]
    addItem(input, 'a')
    expect(input).toEqual([{ id: 'a', qty: 1 }])
  })
  it('sets an explicit qty', () => {
    expect(setQty([{ id: 'a', qty: 1 }], 'a', 5)).toEqual([{ id: 'a', qty: 5 }])
  })
  it('removes an item when qty set to 0 or less', () => {
    expect(setQty([{ id: 'a', qty: 1 }], 'a', 0)).toEqual([])
  })
  it('removes an item', () => {
    expect(removeItem([{ id: 'a', qty: 1 }, { id: 'b', qty: 2 }], 'a')).toEqual([{ id: 'b', qty: 2 }])
  })
  it('counts total units', () => {
    expect(itemCount([{ id: 'a', qty: 2 }, { id: 'b', qty: 3 }])).toBe(5)
  })
  it('computes subtotal in cents via price lookup', () => {
    expect(subtotalCents([{ id: 'a', qty: 2 }, { id: 'b', qty: 1 }], price)).toBe(3400)
  })
})
