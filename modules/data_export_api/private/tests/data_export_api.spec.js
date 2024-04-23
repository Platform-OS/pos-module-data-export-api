import { test, expect } from '@playwright/test';

test('can create data export', async ({ request }) => {
  const response = await request.post('/_api/data-exports.json');
  const responseJson = await response.json();
 
  expect(response.ok()).toBeTruthy();
  expect(responseJson['status']).toContain('pending');
  expect(responseJson['valid']).toEqual(true);
});

test('can get data export', async ({ request }) => {
  const response = await request.get('/_api/data-exports/19700.json');
  const responseJson = await response.json();
 
  expect(response.ok()).toBeTruthy();
  expect(responseJson['status']).toContain('done');
});
