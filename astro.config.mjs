import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';


import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  })
});