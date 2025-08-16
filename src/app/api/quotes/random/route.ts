import { NextResponse } from 'next/server';
import { getRandomQuote } from '@/data/quotes';
import { getRandomImage } from '@/lib/unsplash';

export async function GET() {
  try {
    // Obtener frase aleatoria
    const quote = getRandomQuote();
    
    // Obtener imagen aleatoria relacionada con la categoría de la frase
    const imageUrl = await getRandomImage(quote.category);
    
    return NextResponse.json({
      success: true,
      data: {
        quote,
        imageUrl
      }
    });
  } catch (error) {
    console.error('Error en API de frases aleatorias:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener frase aleatoria'
      },
      { status: 500 }
    );
  }
}
