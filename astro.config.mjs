import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    output: 'server',
    adapter: vercel(),
    redirects: {
        '/github': 'https://github.com/Jgrtowy',
        '/twitter': 'https://twitter.com/Jgrtowy',
    },
});
