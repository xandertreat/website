// @ts-check
import { defineConfig } from "astro/config";
// integrations
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import purgecss from "astro-purgecss";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind(), react(), partytown()],
  vite: {
    assetsInclude: ['**/*.mp3'],
  },
});