import { http, HttpResponse } from 'msw';

// Mock de la API de frases aleatorias
export const randomQuoteHandler = http.get('/api/quotes/random', () => {
  return HttpResponse.json({
    success: true,
    data: {
      quote: {
        id: 1,
        text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        author: "John Lennon",
        category: "vida"
      },
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    }
  });
});

// Mock de la API de frases por categoría
export const categoryQuoteHandler = http.get('/api/quotes/category/:category', ({ params }) => {
  const { category } = params;
  
  if (category === 'vida') {
    return HttpResponse.json({
      success: true,
      data: {
        quote: {
          id: 1,
          text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
          author: "John Lennon",
          category: "vida"
        },
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      }
    });
  }
  
  // Para categorías inexistentes
  return HttpResponse.json(
    {
      success: false,
      error: `No se encontraron frases para la categoría: ${category}`
    },
    { status: 404 }
  );
});

// Mock de la API de Unsplash
export const unsplashHandler = http.get('https://api.unsplash.com/photos/random', () => {
  return HttpResponse.json({
    urls: {
      regular: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    }
  });
});
