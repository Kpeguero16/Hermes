// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://usehermes.online",
  integrations: [
    sitemap({
      // /thanks is noindex (form success page) — keep it out of the sitemap too.
      filter: (page) => !page.includes("/thanks"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
