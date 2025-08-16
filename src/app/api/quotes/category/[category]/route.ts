import { NextRequest, NextResponse } from 'next/server';
import { getQuoteByCategory } from '@/data/quotes';
import { getRandomImage } from '@/lib/unsplash';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    
    // Obtener frase por categoría
    const quote = getQuoteByCategory(category);
    
    if (!quote) {
      return NextResponse.json(
        {
          success: false,
          error: `No se encontraron frases para la categoría: ${category}`
        },
        { status: 404 }
      );
    }
    
    // Obtener imagen relacionada con la categoría
    const imageUrl = await getRandomImage(category);
    
    return NextResponse.json({
      success: true,
      data: {
        quote,
        imageUrl
      }
    });
  } catch (error) {
    console.error('Error en API de frases por categoría:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener frase por categoría'
      },
      { status: 500 }
    );
  }
}
