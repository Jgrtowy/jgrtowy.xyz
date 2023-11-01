import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    integrations: [tailwind()],
    output: 'hybrid',
    adapter: vercel(),
    redirects: {
        '/github': 'https://github.com/Jgrtowy',
        '/twitter': 'https://twitter.com/Jgrtowy',
    },
});
