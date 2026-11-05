import { describe, it, expect } from 'vitest'
import { teas } from '../data/teas'
import { matchesTea } from './tea-filters'
const all = { variety: '', brew: '', packaging: '', query: '' }
describe('tea filters', () => {
  it('includes all teas with no filters', () => expect(teas.every(tea => matchesTea(tea, all))).toBe(true))
  it('combines search and variety', () => {
    const result = teas.filter(tea => matchesTea(tea, { ...all, variety: 'oolong', query: ' PEAR ' }))
    expect(result.map(tea => tea.id)).toEqual(['osmanthus-pear-phoenix-oolong'])
  })
  it('does not invent packaging or cold brew availability', () => {
    expect(teas.filter(tea => matchesTea(tea, { ...all, packaging: 'teabags' }))).toEqual([])
    expect(teas.filter(tea => matchesTea(tea, { ...all, brew: 'cold' }))).toEqual([])
  })
  it('uses existing brewing instructions for confirmed hot-brew matches', () => {
    expect(teas.filter(tea => matchesTea(tea, { ...all, brew: 'hot' })).length).toBe(10)
  })
  it('supports future confirmed formats', () => {
    expect(matchesTea({ ...teas[0], brewingMethods: ['cold'], packaging: ['loose'] }, { ...all, brew: 'cold', packaging: 'loose' })).toBe(true)
  })
})
