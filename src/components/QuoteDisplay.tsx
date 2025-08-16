'use client';

import { Quote } from '@/types';
import { truncateText, capitalizeFirst } from '@/lib/utils';
import { IMAGE_CONFIG } from '@/lib/constants';

interface QuoteDisplayProps {
  quote: Quote | null;
  imageUrl: string | null;
  isLoading?: boolean;
  error?: string | null;
}

export default function QuoteDisplay({ 
  quote, 
  imageUrl, 
  isLoading = false, 
  error = null 
}: QuoteDisplayProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto p-6">
        {/* Skeleton para imagen */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl animate-pulse"></div>
        </div>
        
        {/* Skeleton para contenido */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-center lg:text-left">
            {/* Skeleton para categoría */}
            <div className="inline-block w-24 h-8 bg-gray-200 rounded-full animate-pulse mb-4"></div>
            
            {/* Skeleton para frase */}
            <div className="space-y-3 mb-6">
              <div className="h-8 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
            
            {/* Skeleton para autor */}
            <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto p-6">
        {/* Imagen de error */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center border-2 border-red-200">
            <div className="text-center">
              <svg className="w-20 h-20 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-lg font-semibold text-red-600">Error de Carga</p>
            </div>
          </div>
        </div>
        
        {/* Mensaje de error */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">No se pudo cargar la frase</h3>
            <p className="text-lg text-gray-600 mb-4">Ha ocurrido un error al intentar obtener la frase o la imagen.</p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-700 font-medium">Detalles del error:</p>
              <p className="text-sm text-red-600 mt-1">{error}</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">Intenta de nuevo más tarde o contacta al soporte si el problema persiste.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!quote || !imageUrl) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto p-6">
        {/* Placeholder para imagen */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <svg className="w-20 h-20 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-semibold text-gray-500">Imagen de Inspiración</p>
            </div>
          </div>
        </div>
        
        {/* Placeholder para contenido */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
              Categoría
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-serif text-gray-400 leading-relaxed mb-6">
              &ldquo;Tu frase inspiradora aparecerá aquí&rdquo;
            </blockquote>
            
            <cite className="text-lg text-gray-400 font-medium not-italic">
              — Autor
            </cite>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                💡 <strong>Consejo:</strong> Presiona el botón &ldquo;Generar Nueva Frase&rdquo; para comenzar tu jornada de inspiración.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto p-6 animate-fade-in">
      {/* Imagen */}
      <div className="w-full lg:w-1/2">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={imageUrl}
            alt={`Imagen relacionada con: ${quote.category}`}
            className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = IMAGE_CONFIG.PLACEHOLDER_URL;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Frase */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="text-center lg:text-left">
          {/* Categoría */}
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {capitalizeFirst(quote.category)}
          </div>
          
          {/* Texto de la frase */}
          <blockquote className="text-2xl lg:text-3xl font-serif text-gray-800 leading-relaxed mb-6">
            &ldquo;{truncateText(quote.text, 200)}&rdquo;
          </blockquote>
          
          {/* Autor */}
          <cite className="text-lg text-gray-600 font-medium not-italic">
            — {quote.author}
          </cite>
        </div>
      </div>
    </div>
  );
}
