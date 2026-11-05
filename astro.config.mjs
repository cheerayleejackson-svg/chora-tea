import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

export default defineConfig({
  site: 'https://cheerayleejackson-svg.github.io',
  base: '/chora-tea/',
  trailingSlash: 'always',
  integrations: [preact()],
})
