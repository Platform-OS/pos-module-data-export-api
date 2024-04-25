import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: `${process.env.MPKIT_URL}`,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'API_KEY': '0123456789'
    }
  }
});
