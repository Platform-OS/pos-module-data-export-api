import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './modules/data_export_api/private/tests',
  use: {
    baseURL: `${process.env.MPKIT_URL}`,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'API_KEY': '0123456789'
    }
  }
});
