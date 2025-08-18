import { setupWorker } from 'msw/browser';
import { randomQuoteHandler, categoryQuoteHandler, unsplashHandler } from './handlers';

export const worker = setupWorker(
  randomQuoteHandler,
  categoryQuoteHandler,
  unsplashHandler
);
