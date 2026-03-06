import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://jmn8718.github.io/',
  integrations: [
    icon({
      include: {
        'fa6-solid': ['desktop', 'envelope'],
        'fa6-brands': ['github', 'gitlab', 'linkedin', 'medium'],
      },
    }),
  ],
});
