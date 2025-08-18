import { chromium, FullConfig } from '@playwright/test';
import { worker } from './mocks/browser';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Iniciar MSW
  await page.goto('http://localhost:3000');
  await page.addInitScript(() => {
    // Inicializar MSW en el navegador
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.__MSW_ENABLED__ = true;
    }
  });
  
  await browser.close();
}

export default globalSetup;
