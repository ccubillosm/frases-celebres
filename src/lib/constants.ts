// Constantes de la aplicación

export const APP_CONFIG = {
  NAME: 'Frases Célebres',
  DESCRIPTION: 'Inspírate con frases famosas y hermosas imágenes',
  VERSION: '1.0.0'
};

export const API_ENDPOINTS = {
  QUOTES_RANDOM: '/api/quotes/random',
  QUOTES_CATEGORY: '/api/quotes/category'
};

export const IMAGE_CONFIG = {
  DEFAULT_WIDTH: 800,
  DEFAULT_HEIGHT: 600,
  PLACEHOLDER_URL: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
};

export const QUOTE_CATEGORIES = [
  'vida',
  'exito',
  'creatividad',
  'sueños',
  'felicidad',
  'futuro',
  'esfuerzo',
  'imaginacion',
  'cambio',
  'sabiduría'
] as const;

export const ERROR_MESSAGES = {
  FETCH_QUOTE: 'Error al obtener frase aleatoria',
  FETCH_IMAGE: 'Error al cargar imagen',
  NETWORK_ERROR: 'Error de conexión',
  UNKNOWN_ERROR: 'Error desconocido'
};
