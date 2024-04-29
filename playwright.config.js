import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  globalSetup: require.resolve('./tests/global-setup'),
  use: {
    baseURL: `${process.env.MPKIT_URL}`,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'API_KEY': `${process.env.POS_TEST_API_KEY}`
    }
  }
});
