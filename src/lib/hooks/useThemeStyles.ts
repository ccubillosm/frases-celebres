'use client';

import { useEffect } from 'react';

export function useThemeStyles(theme: 'light' | 'dark') {
  useEffect(() => {
    // Aplicar estilos CSS personalizados para forzar el tema
    const styleId = 'theme-styles';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    if (theme === 'dark') {
      styleElement.textContent = `
        /* Forzar modo oscuro - solo estilos básicos */
        body {
          background-color: #0f172a !important;
          color: #f8fafc !important;
        }
        
        /* Header - solo el fondo */
        header {
          background: linear-gradient(to right, #1f2937, #374151) !important;
        }
        
        /* Main content - solo el fondo */
        main {
          background: linear-gradient(to bottom right, #111827, #1f2937, #111827) !important;
        }
        
        /* Solo textos principales, no todos los elementos */
        .text-gray-800, .text-gray-900 {
          color: #f8fafc !important;
        }
        
        .text-gray-600 {
          color: #d1d5db !important;
        }
        
        /* Solo contenedores principales */
        .bg-white {
          background-color: #1f2937 !important;
        }
        
        /* Solo bordes principales */
        .border-gray-100, .border-gray-200 {
          border-color: #374151 !important;
        }
      `;
    } else {
      styleElement.textContent = `
        /* Forzar modo claro - solo estilos básicos */
        body {
          background-color: #ffffff !important;
          color: #171717 !important;
        }
        
        /* Header - solo el fondo */
        header {
          background: linear-gradient(to right, #2563eb, #7c3aed) !important;
        }
        
        /* Main content - solo el fondo */
        main {
          background: linear-gradient(to bottom right, #eff6ff, #ffffff, #faf5ff) !important;
        }
        
        /* Solo textos principales, no todos los elementos */
        .text-gray-800, .text-gray-900 {
          color: #171717 !important;
        }
        
        .text-gray-600 {
          color: #374151 !important;
        }
        
        /* Solo contenedores principales */
        .bg-white {
          background-color: #ffffff !important;
        }
        
        /* Solo bordes principales */
        .border-gray-100, .border-gray-200 {
          border-color: #e5e7eb !important;
        }
      `;
    }
  }, [theme]);
}
