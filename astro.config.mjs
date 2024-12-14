// @ts-check
import { defineConfig } from "astro/config";
// integrations
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
// plugins
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://xtreat.dev',
  prefetch: true,
  integrations: [tailwind(), react(), partytown(), sitemap()],
  vite: {
    assetsInclude: ['**/*.mp3'],
  },
});