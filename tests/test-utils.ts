import { test as base } from '@playwright/test';

// Mock de la API de Unsplash para los tests
export const mockUnsplashResponse = {
  urls: {
    regular: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  }
};

// Extender el test base con utilidades personalizadas
export const test = base.extend({
  // Mock de la API de Unsplash
  mockUnsplash: async ({ page }, use) => {
    await page.route('**/unsplash.com/**', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockUnsplashResponse)
      });
    });
    
    await use(page);
  }
});

export { expect } from '@playwright/test';
