import { describe, it, expect } from 'vitest'
import { validateCheckout } from './order'

describe('validateCheckout', () => {
  it('accepts a complete, well-formed form', () => {
    const res = validateCheckout({ name: 'Mei', email: 'mei@example.com', address: '1 Tea Ln' })
    expect(res.valid).toBe(true)
    expect(res.errors).toEqual({})
  })
  it('flags an empty name', () => {
    const res = validateCheckout({ name: '  ', email: 'mei@example.com', address: '1 Tea Ln' })
    expect(res.valid).toBe(false)
    expect(res.errors.name).toBeTruthy()
  })
  it('flags a malformed email', () => {
    const res = validateCheckout({ name: 'Mei', email: 'nope', address: '1 Tea Ln' })
    expect(res.valid).toBe(false)
    expect(res.errors.email).toBeTruthy()
  })
  it('flags a missing address', () => {
    const res = validateCheckout({ name: 'Mei', email: 'mei@example.com', address: '' })
    expect(res.valid).toBe(false)
    expect(res.errors.address).toBeTruthy()
  })
})
