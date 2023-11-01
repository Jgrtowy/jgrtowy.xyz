import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ {
    // your configuration options here...
    // https://docs.astro.build/en/reference/configuration-reference/
    integrations: [tailwind()],
    output: 'hybrid',
    adapter: vercel(),
    redirects: {
        '/github': 'https://github.com/Jgrtowy',
        '/twitter': 'https://twitter.com/Jgrtowy',
    },
};
