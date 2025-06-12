import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const testEnv = config.env.testEnv || 'local';

      const urls = {
        local: 'http://localhost:1234',
        prod: 'https://forkify-baq.netlify.app/',
      };

      config.baseUrl = urls[testEnv];
      return config;
    },
  },
});
