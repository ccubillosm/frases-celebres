import { useState, useCallback } from 'react';
import { Quote } from '@/types';

interface UseQuoteReturn {
  quote: Quote | null;
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  generateRandomQuote: () => Promise<void>;
  generateQuoteByCategory: (category: string) => Promise<void>;
}

export function useQuote(): UseQuoteReturn {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRandomQuote = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/quotes/random');
      const result = await response.json();
      
      if (result.success) {
        setQuote(result.data.quote);
        setImageUrl(result.data.imageUrl);
      } else {
        setError(result.error || 'Error al generar frase aleatoria');
      }
    } catch (err) {
      setError('Error de conexión al generar frase aleatoria');
      console.error('Error en generateRandomQuote:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const generateQuoteByCategory = useCallback(async (category: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/quotes/category/${encodeURIComponent(category)}`);
      const result = await response.json();
      
      if (result.success) {
        setQuote(result.data.quote);
        setImageUrl(result.data.imageUrl);
      } else {
        setError(result.error || 'Error al generar frase por categoría');
      }
    } catch (err) {
      setError('Error de conexión al generar frase por categoría');
      console.error('Error en generateQuoteByCategory:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    quote,
    imageUrl,
    isLoading,
    error,
    generateRandomQuote,
    generateQuoteByCategory
  };
}
