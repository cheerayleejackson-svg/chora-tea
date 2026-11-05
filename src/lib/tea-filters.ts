import type { Tea } from '../data/teas'
export interface TeaFilters { variety: string; brew: string; packaging: string; query: string }
export function matchesTea(tea: Tea, filters: TeaFilters) {
  return (!filters.variety || tea.category === filters.variety)
    && (!filters.brew || (tea.brewingMethods ?? (tea.brewing ? ['hot'] : [])).includes(filters.brew as 'hot' | 'cold'))
    && (!filters.packaging || (tea.packaging ?? []).includes(filters.packaging as 'loose' | 'teabags'))
    && (!filters.query || `${tea.name} ${tea.blurb}`.toLowerCase().includes(filters.query.trim().toLowerCase()))
}
