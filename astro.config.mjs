import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Change this to your own domain once you have one
  site: "https://example.com",
  vite: { plugins: [tailwindcss()] },
});
