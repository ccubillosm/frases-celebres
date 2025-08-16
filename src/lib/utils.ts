// Utilidades para la aplicación

// Función para formatear texto largo
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Función para capitalizar primera letra
export function capitalizeFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Función para generar ID único
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Función para validar URL de imagen
export function isValidImageUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

// Función para obtener placeholder de imagen por defecto
export function getDefaultImagePlaceholder(): string {
  return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
}

// Función para manejar errores de API
export function handleApiError(error: unknown): string {
  if (error && typeof error === 'object' && 'message' in error) {
    return String(error.message);
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'Error desconocido';
}
