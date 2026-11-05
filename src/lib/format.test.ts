import { describe, it, expect } from 'vitest'
import { formatCents } from './format'

describe('formatCents', () => {
  it('formats whole dollars with two decimals', () => {
    expect(formatCents(1200)).toBe('$12.00')
  })
  it('formats non-round cents', () => {
    expect(formatCents(1350)).toBe('$13.50')
  })
  it('formats zero', () => {
    expect(formatCents(0)).toBe('$0.00')
  })
})
