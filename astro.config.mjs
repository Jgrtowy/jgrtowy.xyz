import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), icon()],
    vite: {
        plugins: [tailwindcss()],
    },
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
    prefetch: true,
    redirects: {
        "/github": "https://github.com/jgrtowy",
        "/twitter": "https://x.com/jgrtowy",
        "/anilist": "https://anilist.co/user/yoghurt",
        "/mal": "https://myanimelist.net/profile/jgrtowy",
        "/statsfm": "https://stats.fm/user/jgrtowy",
    },
});
