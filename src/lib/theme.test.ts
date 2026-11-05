import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import { describe, expect, it } from 'vitest'

const source = readFileSync(new URL('../components/ThemeScript.astro', import.meta.url), 'utf8')
const script = source.match(/<script is:inline>([\s\S]*?)<\/script>/)![1]

function boot(saved: string | null = null, dark = false, blocked = false) {
  const listeners: Record<string, (event?: any) => void> = {}
  const attrs: Record<string, string> = {}
  const button = { hidden: true, title: '', setAttribute: (key: string, value: string) => { attrs[key] = value } }
  const root = { dataset: {} as Record<string, string> }
  const storage = { value: saved, getItem: () => { if (blocked) throw Error('blocked'); return storage.value }, setItem: (_key: string, value: string) => { if (blocked) throw Error('blocked'); storage.value = value } }
  const media = { matches: dark, addEventListener: (_name: string, cb: () => void) => { listeners.media = cb } }
  class Element { closest() { return button } }
  runInNewContext(script, {
    Element, localStorage: storage,
    window: { matchMedia: () => media, addEventListener: (name: string, cb: () => void) => { listeners[name] = cb } },
    document: { documentElement: root, getElementById: () => button, addEventListener: (name: string, cb: () => void) => { listeners[name] = cb } },
  })
  return { root, button, attrs, storage, media, listeners, click: () => listeners.click({ target: new Element() }) }
}

describe('theme switch', () => {
  it('uses system preference without storing an automatic choice', () => {
    const app = boot(null, true)
    expect(app.root.dataset.theme).toBe('dark')
    expect(app.storage.value).toBeNull()
    app.media.matches = false
    app.listeners.media()
    expect(app.root.dataset.theme).toBe('light')
  })
  it('restores a saved choice over the system setting', () => {
    expect(boot('light', true).root.dataset.theme).toBe('light')
    expect(boot('dark').root.dataset.theme).toBe('dark')
    expect(boot('invalid', true).root.dataset.theme).toBe('dark')
  })
  it('toggles, persists, and updates accessible state', () => {
    const app = boot()
    app.click()
    expect(app.storage.value).toBe('dark')
    expect(app.attrs['aria-pressed']).toBe('true')
    expect(app.button.title).toBe('Switch to light mode')
    app.listeners.media()
    expect(app.root.dataset.theme).toBe('dark')
    app.click()
    expect(app.root.dataset.theme).toBe('light')
    expect(app.attrs['aria-pressed']).toBe('false')
  })
  it('still works when browser storage is unavailable', () => {
    const app = boot(null, false, true)
    app.click()
    expect(app.root.dataset.theme).toBe('dark')
    expect(app.button.hidden).toBe(false)
  })
  it('syncs other tabs and returns to system when preference is cleared', () => {
    const app = boot('dark')
    app.listeners.storage({ key: 'chora-theme', newValue: 'light' })
    expect(app.root.dataset.theme).toBe('light')
    app.listeners.storage({ key: null, newValue: null })
    app.media.matches = true
    app.listeners.media()
    expect(app.root.dataset.theme).toBe('dark')
  })
})
