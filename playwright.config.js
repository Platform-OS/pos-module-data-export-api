import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: `${process.env.MPKIT_URL}`,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'API_KEY': `${process.env.POS_TEST_API_KEY}`
    }
  }
});
