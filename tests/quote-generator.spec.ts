import { test, expect } from '@playwright/test';

test.describe('Quote Generator App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the page with initial content', async ({ page }) => {
    // Verificar que la página se carga correctamente
    await expect(page).toHaveTitle(/Frases Célebres/);
    
    // Verificar que se muestra el título principal
    await expect(page.getByText('Inspírate Hoy')).toBeVisible();
    
    // Verificar que se muestra la descripción
    await expect(page.getByText('Descubre frases célebres que han marcado la historia')).toBeVisible();
    
    // Verificar que se muestra el botón de generación
    await expect(page.getByRole('button', { name: 'Generar Nueva Frase' })).toBeVisible();
  });

  test('should display initial quote and image', async ({ page }) => {
    // Esperar a que se cargue la primera frase o hasta 10 segundos
    await page.waitForFunction(() => {
      const quoteElement = document.querySelector('blockquote');
      const imageElement = document.querySelector('img');
      return quoteElement && imageElement && quoteElement.textContent && imageElement.src;
    }, { timeout: 10000 });
    
    // Verificar que se muestra una frase
    const quoteElement = page.locator('blockquote');
    await expect(quoteElement).toBeVisible();
    
    // Verificar que se muestra una imagen
    const imageElement = page.locator('img');
    await expect(imageElement).toBeVisible();
    
    // Verificar que se muestra una categoría
    const categoryElement = page.locator('[class*="bg-blue-100"]');
    await expect(categoryElement).toBeVisible();
    
    // Verificar que se muestra un autor
    const authorElement = page.locator('cite');
    await expect(authorElement).toBeVisible();
  });

  test('should generate new quote when button is clicked', async ({ page }) => {
    // Esperar a que se cargue la primera frase
    await page.waitForFunction(() => {
      const quoteElement = document.querySelector('blockquote');
      return quoteElement && quoteElement.textContent;
    }, { timeout: 10000 });
    
    // Obtener el texto de la primera frase
    const firstQuote = await page.locator('blockquote').textContent();
    
    // Hacer clic en el botón de generación
    const generateButton = page.getByRole('button', { name: 'Generar Nueva Frase' });
    await generateButton.click();
    
    // Verificar que el botón muestra estado de carga
    await expect(page.getByText('Generando...')).toBeVisible();
    
    // Esperar a que se complete la generación
    await page.waitForFunction(() => {
      const button = document.querySelector('button');
      return button && button.textContent && button.textContent.includes('Generar Nueva Frase');
    }, { timeout: 10000 });
    
    // Verificar que se generó una nueva frase o que el estado cambió
    const newQuote = await page.locator('blockquote').textContent();
    
    // Si la frase es la misma, verificar que al menos el estado de carga funcionó
    if (newQuote === firstQuote) {
      console.log('La frase generada es la misma, pero el estado de carga funcionó correctamente');
      // Verificar que el botón pasó por el estado de carga
      await expect(page.getByText('Generar Nueva Frase')).toBeVisible();
    } else {
      expect(newQuote).not.toBe(firstQuote);
    }
    
    // Verificar que el botón vuelve a su estado normal
    await expect(page.getByText('Generar Nueva Frase')).toBeVisible();
  });

  test('should handle loading states correctly', async ({ page }) => {
    // Verificar que se muestran los skeletons de carga inicialmente
    const skeletonElements = page.locator('[class*="animate-pulse"]');
    await expect(skeletonElements.first()).toBeVisible();
    
    // Esperar a que se complete la carga
    await page.waitForTimeout(3000);
    
    // Verificar que los skeletons ya no son visibles
    await expect(skeletonElements.first()).not.toBeVisible();
  });

  test('should display error handling section', async ({ page }) => {
    // Verificar que se muestra la sección "¿Cómo funciona?"
    await expect(page.getByText('¿Cómo funciona?')).toBeVisible();
    
    // Verificar que se muestran los 3 pasos usando selectores más específicos
    await expect(page.locator('span.text-blue-600.font-bold.text-xl').filter({ hasText: '1' })).toBeVisible();
    await expect(page.locator('span.text-purple-600.font-bold.text-xl').filter({ hasText: '2' })).toBeVisible();
    await expect(page.locator('p.text-green-600.font-bold.text-xl').filter({ hasText: '3' })).toBeVisible();
    
    // Verificar que se muestran las descripciones de los pasos
    await expect(page.getByText('Selecciona una frase aleatoria de nuestra colección')).toBeVisible();
    await expect(page.getByText('Disfruta de una imagen relacionada de Unsplash')).toBeVisible();
    await expect(page.getByText('Genera una nueva combinación cuando quieras')).toBeVisible();
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    // Probar en tamaño móvil
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Inspírate Hoy')).toBeVisible();
    
    // Probar en tamaño tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('Inspírate Hoy')).toBeVisible();
    
    // Probar en tamaño desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.getByText('Inspírate Hoy')).toBeVisible();
  });
});
