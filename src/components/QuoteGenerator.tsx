'use client';

import { useEffect } from 'react';
import { useQuote } from '@/lib/hooks/useQuote';
import QuoteDisplay from './QuoteDisplay';
import GenerateButton from './GenerateButton';

export default function QuoteGenerator() {
  const {
    quote,
    imageUrl,
    isLoading,
    error,
    generateRandomQuote
  } = useQuote();

  // Generar primera frase al cargar el componente
  useEffect(() => {
    generateRandomQuote();
  }, [generateRandomQuote]);

  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contenido principal */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Inspírate Hoy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre frases célebres que han marcado la historia, acompañadas de hermosas imágenes que despertarán tu creatividad.
          </p>
        </div>

        {/* Display de la frase */}
        <div className="mb-12">
          <QuoteDisplay
            quote={quote}
            imageUrl={imageUrl}
            isLoading={isLoading}
            error={error}
          />
        </div>

        {/* Botón de generación */}
        <div className="text-center">
          <GenerateButton
            onClick={generateRandomQuote}
            isLoading={isLoading}
            disabled={isLoading}
          >
            Generar Nueva Frase
          </GenerateButton>
        </div>

        {/* Información adicional */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-strong p-10 max-w-5xl mx-auto border border-gray-100 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              ¿Cómo funciona?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-base text-gray-600 dark:text-gray-300">
              <div className="flex flex-col items-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center mb-4 shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <span className="text-blue-600 dark:text-blue-300 font-bold text-xl">1</span>
                </div>
                <p className="font-medium">Selecciona una frase aleatoria de nuestra colección</p>
              </div>
              <div className="flex flex-col items-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-full flex items-center justify-center mb-4 shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <span className="text-purple-600 dark:text-purple-300 font-bold text-xl">2</span>
                </div>
                <p className="font-medium">Disfruta de una imagen relacionada de Unsplash</p>
              </div>
              <div className="flex flex-col items-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-full flex items-center justify-center mb-4 shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <p className="text-green-600 dark:text-green-300 font-bold text-xl">3</p>
                </div>
                <p className="font-medium">Genera una nueva combinación cuando quieras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
