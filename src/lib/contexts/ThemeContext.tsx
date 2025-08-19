'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  
  // Usar el hook de estilos del tema
  useThemeStyles(theme);

  // Efecto para cargar el tema desde localStorage al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    console.log('Tema guardado en localStorage:', savedTheme);
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      console.log('Usando tema guardado:', savedTheme);
      setThemeState(savedTheme);
    } else {
      // Si no hay tema guardado, usar la preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('Preferencia del sistema (dark):', prefersDark);
      const systemTheme = prefersDark ? 'dark' : 'light';
      console.log('Tema del sistema:', systemTheme);
      setThemeState(systemTheme);
    }
    setMounted(true);
  }, []);

  // Efecto para aplicar el tema al documento
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      console.log('Aplicando tema:', theme);
      
      // Remover todas las clases de tema
      root.classList.remove('light', 'dark');
      
      // Agregar la clase correspondiente
      root.classList.add(theme);
      
      // Guardar en localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('Toggle theme - tema actual:', theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Nuevo tema será:', newTheme);
    setThemeState(newTheme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Evitar hidratación incorrecta
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
