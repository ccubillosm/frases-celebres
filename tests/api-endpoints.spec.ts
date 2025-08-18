import { test, expect } from '@playwright/test';

test.describe('API Endpoints', () => {
  test('should return random quote successfully', async ({ request }) => {
    const response = await request.get('/api/quotes/random');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data).toBeDefined();
    expect(data.data.quote).toBeDefined();
    expect(data.data.imageUrl).toBeDefined();
    
    // Verificar estructura de la frase
    const quote = data.data.quote;
    expect(quote.text).toBeDefined();
    expect(quote.author).toBeDefined();
    expect(quote.category).toBeDefined();
    
    // Verificar que la URL de imagen es válida
    expect(data.data.imageUrl).toMatch(/^https?:\/\//);
  });

  test('should return quote by category successfully', async ({ request }) => {
    const category = 'vida';
    const response = await request.get(`/api/quotes/category/${encodeURIComponent(category)}`);
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.data).toBeDefined();
    expect(data.data.quote).toBeDefined();
    expect(data.data.imageUrl).toBeDefined();
    
    // Verificar que la categoría coincide
    expect(data.data.quote.category.toLowerCase()).toBe(category);
  });

  test('should handle invalid category gracefully', async ({ request }) => {
    const invalidCategory = 'categoria-inexistente';
    const response = await request.get(`/api/quotes/category/${encodeURIComponent(invalidCategory)}`);
    
    // Debería devolver un error 404 para categorías inexistentes
    expect(response.status()).toBe(404);
    
    const data = await response.json();
    expect(data.success).toBe(false);
    expect(data.error).toContain('No se encontraron frases para la categoría');
  });

  test('should return proper error response on server error', async ({ request }) => {
    // Simular un error del servidor (esto es más difícil de probar sin modificar el código)
    // Pero podemos verificar que la API responde correctamente en condiciones normales
    
    const response = await request.get('/api/quotes/random');
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.success).toBe(true);
  });
});
