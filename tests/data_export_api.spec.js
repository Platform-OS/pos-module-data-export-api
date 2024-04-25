import { test, expect } from '@playwright/test';

test('can create data export', async ({ request }) => {
  const response = await request.post('/_api/data-exports.json');
 
  expect(response.ok()).toBeTruthy();
});

test('can get data export', async ({ request }) => {
  const response = await request.get('/_api/data-exports/11111.json');
 
  expect(response.ok()).toBeTruthy();
});
