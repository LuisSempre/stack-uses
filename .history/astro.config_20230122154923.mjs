import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
export default defineConfig({
  site: 'https://stack-uses.com',
  integrations: [sitemap(), react()]
})
