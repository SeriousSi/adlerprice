import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://adlerprice.co.za',
  title: 'AdlerPrice - Consulting, Negligence Claims, Design Thinking',
  description: 'AdlerPrice is a Cape Town-based consulting practice specializing in Architect Negligence Claims, Consulting, and Design Thinking since 1988.',

  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },

  integrations: [mdx(), sitemap()],
  adapter: cloudflare({  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }) }),

  vite: {
    plugins: [tailwindcss()],
  },
});

